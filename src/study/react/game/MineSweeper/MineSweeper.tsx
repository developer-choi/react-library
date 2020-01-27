import * as React from "react";
import MineSweeperTr from "./MineSweeperTr";
import mineMapInit from "./mineMapInit";

interface AppProp {

}

interface AppState {
    mineMap: Array<Array<number>>,
}

export default class MineSweeper extends React.Component<AppProp, AppState> {

    constructor(props: any) {
        super(props);

        this.state = ({
            mineMap: mineMapInit([
                [-1, 0, 0, 0, 0],
                [0, -1, 0, 0, 0],
                [0, 0, -1, 0, 0],
                [0, -1, 0, -1, 0],
                [-1, 0, 0, 0, -1],
            ])
        });

        console.log("call");
        asyncTest().then(res => console.log(res));
        console.log("call");
        asyncTest().then(res => console.log(res));

        // console.log("call");
        // asyncTest();
        // console.log("call");
        // asyncTest();
    }

    render() {

        const mineTrs = Array(this.state.mineMap.length).fill("").map((item, index) => {

            return (
                <MineSweeperTr key={`tr-${index}`} rowIndex={index} tds={this.state.mineMap[index]} mineMap={this.state.mineMap}/>
            )
        });

        return (
            <div className="component-wrap">
                {mineTrs}
            </div>
        )
    }
}

async function asyncTest(): Promise<number> {

    console.log("async start");

    // const result = await new Promise<number>(resolve => {
    //     resolve(syncTest());
    // });

    const result = syncTest();

    console.log("async end");

    return result;
}

function syncTest(): number {
    for (let i = 0; i < 1999999999; i++) {}
    return 456;
}
