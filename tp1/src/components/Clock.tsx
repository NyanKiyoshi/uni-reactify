/// <reference path="./interfaces.d.ts" />
import * as React from "react";
import {Component} from "react";

export default class Clock extends Component<any, any> {
    private static UPDATE_INTERVAL_US = 1000;
    private interval : any;

    public constructor(props: any) {
        super(props);

        this.state = {
            time: Clock.getLocaleDate()
        };
    }

    private static getLocaleDate() : string {
        return new Date().toLocaleString();
    }

    public componentDidMount(): void {
        this.interval = setInterval(() => {
            this.setState({
                time: Clock.getLocaleDate()
            });
        }, Clock.UPDATE_INTERVAL_US);
    }

    public componentWillUnmount(): void {
        clearInterval(this.interval);
    }

    public render() : any {
        return (
            <strong>{this.state.time}</strong>
        )
    }
}
