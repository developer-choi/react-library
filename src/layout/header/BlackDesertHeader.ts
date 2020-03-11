import HeaderInfo from "./HeaderInfo";
import {mainHeader} from "./MainHeader";
import {hoverableHeaderList} from "../../study/typescript/header/header";
import {tradeMarketRoutes} from "../../route/black-desert/tradeMarketRoutes";

export const blackDesertHeader: Array<Array<HeaderInfo>> = mainHeader.concat([

    hoverableHeaderList("Trade", tradeMarketRoutes),
]);
