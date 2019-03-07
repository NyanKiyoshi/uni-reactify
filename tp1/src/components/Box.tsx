/// <reference path="./interfaces.d.ts" />
import * as React from "react";
import {Component} from "react";
import {IBoxProps} from "./interfaces";

export default class Box extends Component<IBoxProps, any> {
    public constructor(props: IBoxProps) {
        super(props);
    }

    public render(): any {
        return (
            <p style={{
                borderColor: this.props.color,
                borderWidth: '0.25rem',
                borderStyle: 'solid',
                padding: '1rem'
            }}>
                { this.props.children }
            </p>
        );
    }
}
