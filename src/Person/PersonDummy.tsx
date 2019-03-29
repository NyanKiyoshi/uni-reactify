import JSONGet from '../react-json-forms/components/JSONGet';
import config from '../config';
import * as React from 'react';
import {Component} from 'react';

export default class PersonDummy extends Component<any, any> {
    public constructor(props: any) {
        super(props);
    }


    componentDidMount(): void {
        console.log("hii");

    }

    public render(): any {
        return <div>hiii</div>;
    }
}
