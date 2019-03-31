import {Component} from 'react';
import * as React from 'react';
import {getUrl} from '../utils';

export default class JSONGet extends Component<IJSONFormProps, IJSONFormState> {
    public constructor(props: IJSONFormProps) {
        super(props);
        this.state = {
            error: null,
            dataLoaded: false
        }
    }

    public async getBody() {
        try {
            const resp = await (await fetch(
                getUrl(this.props.baseurl, this.props.path),
                {
                    headers: {
                        Accept: 'application/json'
                    }
                }
            )).json();

            this.setState({ dataLoaded: true });
            this.props.onBody(resp);
        } catch (exc) {
            console.error(exc);
            this.setState({ error: exc });
            return;
        }
    }

    async componentDidMount() {
        await this.getBody();
    }

    public render(): any {
        if (this.state.dataLoaded) {
            return <div>{ this.props.children }</div>;
        } else if (this.state.error) {
            return this.props.onError(this.state.error);
        } else {
            return <div>Loading...</div>;
        }
    }
};
