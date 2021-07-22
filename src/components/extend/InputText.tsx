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
   * 이 컴포넌트를 만들 때 고려된 Input Type에 의해,
   * value의 타입은 항상 string으로 고정하는것으로 결정했습니다.
   *
   * value의 타입이 string이 아닐경우, 모든 입력값을 지웠을 때 빈문자열이 아닌 경우가 있었기 때문입니다.
   * 대표적인 사례는 아래와 같습니다.
   *
   * const [num, setNum] = useState(0);
   * <input type="number" value={num} onChange={event => setNum(Number(event.target.value))}/>
   * 이 경우, value의 타입이 숫자가 아니기때문에 다 지웠을 때 0이 계속 입력박스에 보이는 문제가 존재합니다.
   */
  value: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'search' | 'url';
  
  /**
   * onKeyDown event가 발생했을 때, event.key가 ignoreEventKeys에 존재할 경우, onKeyDown event가 prevent됩니다.
   */
  ignoreEventKeys?: string[];
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
   onEnter, onChangeText, ignoreEventKeys = [], autoCapitalize = 'off', ...rest
  } = props;

  const customOnKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const {key} = event;
  
    if (ignoreEventKeys.includes(key)) {
      event.preventDefault();
      return;
    }
    
    switch (key) {
      case 'Enter':
        onEnter?.(event);
        break;
    }
  
    onKeyDown?.(event);
  }, [onKeyDown, onEnter, ignoreEventKeys]);
  
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
