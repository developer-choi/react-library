import React, {ChangeEvent, ComponentProps} from 'react';

export interface CheckBoxExtendProps extends Omit<ComponentProps<'input'>, 'ref' | 'type'> {
  onChangeChecked?: (checked: boolean) => void;
}

export default function CheckBoxExtend({onChangeChecked, onChange, ...rest}: CheckBoxExtendProps) {
  
  const _onChange = React.useCallback((event: ChangeEvent<HTMLInputElement>) => {
    onChangeChecked?.(event.target.checked);
    onChange?.(event);
  }, [onChangeChecked, onChange]);
  
  return (
      <input type="checkbox" onChange={_onChange} {...rest}/>
  );
}
