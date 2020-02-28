import UserList from "../../study/react/form/user/UserList";
import UserForm from "../../study/react/form/user/UserForm";
import UsefulFormBug from "../../study/react/form/UsefulFormBug";
import {PageType} from "../../study/typescript/common/PageType";
import RefClassComponent from "../../study/react/form/ref/RefClassComponent";
import RefClassParent from "../../study/react/form/ref/RefClassParent";

export const formRoutes = [
    {
        path: "/react/form/user/list",
        component: UserList,
        meta: {
            name: "회원목록",
        },
        exact: true
    },
    {
        path: "/react/form/user/modify/:id",
        component: UserForm,
        meta: {
            name: "회원수정",
            hoverable: false
        },
        exact: true
    },
    {
        path: "/react/form/user/create",
        component: UserForm,
        meta: {
            name: "회원추가",
            pageType: PageType.INSERT
        },
        exact: true
    },
    {
        path: "/react/form/basic",
        component: UsefulFormBug,
        exact: true
    },
    {
        path: "/react/form/ref",
        component: RefClassComponent,
        exact: true
    },
    {
        path: "/react/form/ref-parent",
        component: RefClassParent,
        exact: true
    }
];
