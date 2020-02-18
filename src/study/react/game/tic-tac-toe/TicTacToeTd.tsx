import * as React from "react";
import CircleSymbol from "../symbol/CircleSymbol";

interface AppProp {
    rowIndex: number,
    columnIndex: number,
    mark: Function,
    cellValue: number
}

interface AppState {

}

export default class TicTacToeTd extends React.Component<AppProp, AppState> {

    shouldComponentUpdate(nextProps: Readonly<AppProp>, nextState: Readonly<AppState>, nextContext: any): boolean {
        return nextProps.cellValue !== this.props.cellValue;
    }

    render() {
        return (
            <td className="tic-tac-toe-td" onClick={() => this.props.mark([this.props.rowIndex, this.props.columnIndex])}>
                <CircleSymbol colorIndex={this.props.cellValue}></CircleSymbol>
            </td>
        )
    }
}
