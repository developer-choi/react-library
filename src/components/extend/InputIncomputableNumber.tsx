import React, {useCallback} from 'react';
import InputText, {InputTextProp} from '@components/extend/InputText';
import {parseString} from '../../utils/extend/string';

export interface InputIncomputableNumberProp extends Omit<InputTextProp, 'type' | 'ignoreEventKeys'> {
  enableMask?: boolean;
}

/**
 * Overview: Input components used when you want to receive only numbers that cannot be operated.
 * For example, you can use it when you receive a phone number or zip code consisting only of numbers.
 */
export default function InputIncomputableNumber({enableMask, onChangeText, ...rest}: InputIncomputableNumberProp) {
  
  const _onChangeText = useCallback((text: string) => {
    /**
     * Only for Control V
     */
    const trimmedText = text.trim();
    
    /**
     * OnChangeText() must always run.
     * If validation fails and is not executed,
     * From the user's point of view, there is no response to input, so they don't know what's wrong.
     * Therefore, I'll show you even if it's truncated from the beginning of the string to the valid range.
     */
    
    onChangeText?.(parseText(trimmedText));
  }, [onChangeText]);
  
  return (
      <InputText
          type={enableMask ? 'text' : 'number'}
          ignoreEventKeys={NOT_NUMERIC_KEY}
          onChangeText={_onChangeText}
          {...rest}
      />
  );
}

/**
 * The text consists of numbers only,
 * but since it has no purpose for the operation,
 * the use of the parseInt or Number Constrcutor does not allow for very large numbers.
 * Therefore, it was implemented based on String API.
 */
function parseText(text: string): string {
  return parseString(text, NUMBERS);
}

const NOT_NUMERIC_KEY = ['-', '.'];
const NUMBERS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];