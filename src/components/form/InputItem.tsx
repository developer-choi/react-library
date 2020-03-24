import * as React from "react";
import {MyInput} from "./MyInput";
import {ChangeEvent, RefObject, forwardRef} from "react";

interface AppProp {
    labelText: string,
    onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void,
    inputValue: string | number,
    type?: string,
    itemClassName?: string,
    inputClassName?: string,
    showIncreaseDecreaseButton?: boolean
}

export const InputItem = forwardRef((props: AppProp, ref: RefObject<HTMLInputElement>) => {

    return (
        <div className={`responsive-form-item ${props.itemClassName}`}>
            <label className="my-label">{props.labelText}</label>
            <MyInput className={props.inputClassName} type={props.type} ref={ref} inputValue={props.inputValue} onChangeHandler={props.onChangeHandler}
                     showIncreaseDecreaseButton={props.showIncreaseDecreaseButton}/>
        </div>
    )
});
