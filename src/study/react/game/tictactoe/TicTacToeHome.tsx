import * as React from "react";
import TicTacToeGame from "./TicTacToeGame";

interface AppProp {

}

interface AppState {

}

export default class TicTacToeHome extends React.Component<AppProp, AppState> {

    render() {
        return (
            <div className="component-wrap">
                <TicTacToeGame sqaureCount={4}/>
            </div>
        )
    }
}
