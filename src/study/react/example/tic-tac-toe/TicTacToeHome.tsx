import * as React from "react";
import TicTacToeGame from "./TicTacToeGame";

interface AppProp {

}

interface AppState {

}

export default class TicTacToeHome extends React.Component<AppProp, AppState> {

    render() {
        return (
            <div className="tic-tac-toe-home">
                <h1>틱택토 게임하기</h1><br/>
                <TicTacToeGame squareCount={4} playerList={["철수", "영희"]}/>
            </div>
        )
    }
}
