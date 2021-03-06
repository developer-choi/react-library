import React, {
  ChangeEvent,
  ChangeEventHandler,
  ComponentProps,
  forwardRef,
  KeyboardEvent,
  Ref,
  useCallback
} from 'react';
import {toast} from 'react-toastify';

export interface InputTextProp extends Omit<ComponentProps<'input'>, 'ref'> {
  onEnter?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onChangeText?: (value: string) => void;
  
  /**
   * I have decided that the type of value is always fixed with string.
   * If the value is of type number, 0 remains when all values are deleted.
   */
  value: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url';
  preventEventKeys?: string[];
}

export default forwardRef(function InputExtend(props: InputTextProp, ref: Ref<HTMLInputElement>) {

  const {
    /**
     * HTML input Prop
     */
    type, maxLength = 1000, onChange, onKeyDown, placeholder,

    /**
     * Custom Prop
     */
   onEnter, onChangeText, preventEventKeys = [], autoCapitalize = 'off', ...rest
  } = props;

  const customOnKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const {key} = event;
  
    if (preventEventKeys.includes(key)) {
      event.preventDefault();
      return;
    }
    
    switch (key) {
      case 'Enter':
        onEnter?.(event);
        break;
    }
  
    onKeyDown?.(event);
  }, [onKeyDown, onEnter, preventEventKeys]);
  
  const customOnChange = useCustomOnChange({onChange, onChangeText, maxLength});
  const _placeholder = defaultMaxLengthPlaceholder(maxLength, placeholder);

  return (
      <input
          ref={ref}
          type={type}
          onChange={customOnChange}
          onKeyDown={customOnKeyDown}
          autoCapitalize={autoCapitalize}
          placeholder={_placeholder}
          {...rest}
      />
  );
});

export interface CustomOnChangeParam<T extends HTMLInputElement | HTMLTextAreaElement> {
  maxLength: number;
  onChange?: ChangeEventHandler<T>;
  onChangeText?: (text: string) => void;
}

export function useCustomOnChange<T extends HTMLInputElement | HTMLTextAreaElement>({onChange, onChangeText, maxLength}: CustomOnChangeParam<T>) {
  
  return useCallback((event: ChangeEvent<T>) => {
    onChange?.(event);
  
    const {value} = event.target;
  
    if (value.length > maxLength) {
      toast.error(`최대 ${maxLength}자 까지 입력이 가능합니다.`, {toastId: 'MAX_LENGTH'});
      return;
    }
  
    onChangeText?.(value);
  }, [maxLength, onChange, onChangeText]);
}

export function defaultMaxLengthPlaceholder(maxLength: number, placeholder?: string) {
  if (placeholder) {
    return placeholder;
  } else {
    return `최대 ${maxLength}자 까지 입력이 가능합니다.`;
  }
}
