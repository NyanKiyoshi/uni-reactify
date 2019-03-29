import JSONGet from '../react-json-forms/components/JSONGet';
import config from '../config';
import * as React from 'react';
import {Component} from 'react';
import { withRouter } from 'react-router-dom';
import FetchErrorAlert from '../components/FetchErrorAlert';

export default withRouter(class PersonList extends Component<any, IPersonListState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            body: []
        }
    }

    public onBody(jsonBody: IPersonBody[]) : void {
        this.setState({ body: jsonBody });
    }

    public render(): any {
        return (
            <JSONGet
                baseurl={config.baseurl}
                path='/persons'
                onBody={this.onBody.bind(this)}
                onError={exc => (
                    <FetchErrorAlert history={this.props.history} />
            )}>
                Found: {this.state.body.length}
            </JSONGet>
        )
    }
});
