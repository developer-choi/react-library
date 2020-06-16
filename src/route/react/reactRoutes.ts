import {RouteProps} from "react-router";
import ReactMain from "../../containers/react/ReactMain";
import exampleRoutes from "./exampleRoutes";
import renderRoutes from "./renderRoutes";
import eventRoutes from "./eventRoutes";
import {REACT_FIRST_PATH_DIRECTORY_NAME} from "../firstPath";
import authRoutes from "./authRoutes";

const reactRoutes: RouteProps[] = [
    {
        path: ["/", `${REACT_FIRST_PATH_DIRECTORY_NAME}`, `${REACT_FIRST_PATH_DIRECTORY_NAME}/main`],
        component: ReactMain,
    }
].map(route => ({...route, exact: true}));

export default reactRoutes.concat(exampleRoutes, renderRoutes, eventRoutes, authRoutes);
