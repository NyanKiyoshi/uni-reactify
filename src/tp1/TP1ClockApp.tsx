import React, { Component } from 'react';
import logo from '../logo.svg';
import Clock from './components/Clock';
import Box from "./components/Box";
import InlineEdit from "./components/InlineEdit";

const DEFAULT_BOX_COLOR = "#61DAFB";

class TP1ClockApp extends Component<any, any> {

    public constructor(props: any) {
        super(props);

        this.state = {
            boxColor: DEFAULT_BOX_COLOR
        }
    }

    private onColorValueChanged(newValue: string): void {
        this.setState({ boxColor: newValue });
    }
        
    public render() : any {
        return (
            <div className="TP1App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />

                    <Box color={this.state.boxColor}>
                        <Clock />
                    </Box>

                    <div className="InheritColor" style={{ color: this.state.boxColor }}>
                        <InlineEdit
                            initialValue={DEFAULT_BOX_COLOR}
                            onEdited={this.onColorValueChanged.bind(this)}/>
                    </div>
                </header>
            </div>
        );
    }
}

export default TP1ClockApp;
