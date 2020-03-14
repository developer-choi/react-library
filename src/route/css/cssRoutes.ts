import {transitionRoutes} from "./transitionRoutes";
import {squareRoutes} from "./squareRoutes";
import {naverDiffRoutes} from "./naverDiffRoutes";
import CssMain from "../../study/css/CssMain";
import {CSS_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import {propertiesRoutes} from "./propertiesRoutes";

export const routes = [
    {
        path: `${CSS_FIRST_PATH_DIRECTORY_NAME}/main`,
        component: CssMain
    }
].concat(transitionRoutes, squareRoutes, naverDiffRoutes, propertiesRoutes);
