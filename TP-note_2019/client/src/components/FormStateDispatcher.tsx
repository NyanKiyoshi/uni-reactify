import * as React from 'react';
import {Component} from 'react';
import {IEntry} from '../interfaces';

export default class FormStateDispatcher<P extends IEntry, S extends IEntry> extends Component<P, S> {
    public constructor(props: P) {
        super(props);
    }

    public handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    public static async onSuccessUpdate(entry: IEntry) {

    }

    public static async onSuccessCreate(entry: IEntry) {

    }

    componentDidUpdate(
        prevProps: Readonly<P>, prevState: Readonly<S>, snapshot?: any): void {

        Object.assign(this.props.state, this.state);
    }
};
