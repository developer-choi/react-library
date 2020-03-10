import * as React from "react"
import {ChangeEvent, MouseEvent, useEffect, useMemo, useState} from "react"
import {InputItem} from "../../common/form/InputItem";
import MyButton from "../../common/form/MyButton";
import RadioGroup from "../../common/form/RadioGroup";
import "./BlackDesert.scss";
import {
    getBreakEvenAmount,
    getHeraldryFameStepAmount,
    getSettlementAmount,
    HERALDRY_FAME_ARRAY,
    Item
} from "./BlackDesertSystem";
import {BlackDesertInterface} from "./BlackDesertContainer";

export default function BlackDesert(props: BlackDesertInterface) {

    const [currentPrice, setCurrentPrice] = useState(0);
    const [breakEvenPoint, setBreakEvenPoint] = useState();
    const heraldryFameArray = useMemo(() => {

        const withoutLast = HERALDRY_FAME_ARRAY.slice(0, HERALDRY_FAME_ARRAY.length - 1);
        const last = HERALDRY_FAME_ARRAY[HERALDRY_FAME_ARRAY.length - 1];

        return withoutLast.map((heraldryFame, index) => {
            return {
                value: heraldryFame.amount,
                label: `${heraldryFame.amount}점 이상 ${HERALDRY_FAME_ARRAY[index + 1].amount}점 미만`
            }
        }).concat({value: last.amount, label: `${last.amount}점 이상`});

    }, []);

    const [buyAmount, setBuyAmount] = useState("");
    const [sellAmount, setSellAmount] = useState("");
    const [diffBenefit, setDiffBenefit] = useState();

    function setStateBuyAmount(event: ChangeEvent<HTMLInputElement>) {
        setBuyAmount(event.target.value);
    }

    function setStateSellAmount(event: ChangeEvent<HTMLInputElement>) {
        setSellAmount(event.target.value);
    }

    function setStateHaveValuePackage(event: ChangeEvent<HTMLInputElement>) {
        props.changeUserInfo(Object.assign({}, props.userInfo, {haveValuePackage: event.target.checked}));
    }

    function setStateHeraldryFame(checkValue: number) {
        props.changeUserInfo(Object.assign({}, props.userInfo, {heraldryFame: checkValue}));
    }

    function setStateCurrentPrice(event: ChangeEvent<HTMLInputElement>) {

        setCurrentPrice(event.target.value);
    }

    function breakEvenPointFormSubmit(event: MouseEvent<HTMLButtonElement>) {

        event.preventDefault();
        setBreakEvenPoint(getBreakEvenAmount(Item.NOT_PEARL_ITEM, props.userInfo, currentPrice).toFixed(0));
    }

    function diffBenefitFormSubmit(event: MouseEvent<HTMLButtonElement>) {

        event.preventDefault();
        const sellAmountWithoutFee = getSettlementAmount(Item.NOT_PEARL_ITEM, props.userInfo, sellAmount);
        const diffBenefit = sellAmountWithoutFee - buyAmount;
        setDiffBenefit(diffBenefit ? diffBenefit.toFixed(0) : "");
    }

    useEffect(() => {

        //현재 이 코드가 submit할때 중복되고있음.
        const breakEventPoint = Number(getBreakEvenAmount(Item.NOT_PEARL_ITEM, props.userInfo, currentPrice)?.toFixed(0));
        setBreakEvenPoint((Number.isNaN(breakEventPoint)) ? "" : breakEventPoint);

        //현재 이 코드가 submit할때 중복되고있음.
        const sellAmountWithoutFee = getSettlementAmount(Item.NOT_PEARL_ITEM, props.userInfo, sellAmount);
        const diffBenefit = sellAmountWithoutFee - buyAmount;
        setDiffBenefit(diffBenefit ? diffBenefit.toFixed(0) : "");

    },[props.userInfo]);

    return (
        <div className="BlackDesert-wrap">
            <h1>검은사막 계산기</h1>

            <h3>사용자 정보 설정</h3>
            <form>
                <fieldset>가문명성 선택</fieldset>
                <RadioGroup selectValue={getHeraldryFameStepAmount(props.userInfo.heraldryFame)} valueAndLabelArray={heraldryFameArray} radioGroupName="HeraldryFame" selectHandler={setStateHeraldryFame}/>

                <input type="checkbox" onChange={setStateHaveValuePackage} checked={props.userInfo.haveValuePackage}/>
                <label>밸류패키지 여부</label>
            </form>

            <h3>이익계산 (기준 : 아이템 1개 가격)</h3>
            <form>
                <fieldset>손익분기점 계산</fieldset>
                <InputItem labelText="현재 가격" onChangeHandler={setStateCurrentPrice} inputValue={currentPrice}/>
                <MyButton onClickHandler={breakEvenPointFormSubmit}>조회</MyButton>
                <span className="result">{breakEvenPoint}</span>
            </form>
            <form>
                <fieldset>차익 계산</fieldset>
                <InputItem labelText="구매 가격" onChangeHandler={setStateBuyAmount} inputValue={buyAmount}/>
                <InputItem labelText="판매 가격" onChangeHandler={setStateSellAmount} inputValue={sellAmount}/>
                <MyButton onClickHandler={diffBenefitFormSubmit}>조회</MyButton>
                <span className="result">{diffBenefit}</span>
            </form>
        </div>
    )
}