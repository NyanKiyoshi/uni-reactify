import JSONGet from '../react-json-forms/components/JSONGet';
import config from '../configs';
import * as React from 'react';
import {Component} from 'react';
import { withRouter } from 'react-router-dom';
import FetchErrorAlert from '../components/FetchErrorAlert';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

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
                <div className="card">
                    <div className="card-header">
                        Persons
                    </div>
                    <div className="list-group list-group-flush">
                        {this.state.body.map((value, index) => {
                            return (
                                <a href={`/persons/${value.id}`} className="d-flex list-group-item" key={index}>
                                    {/* Content */}
                                    <div className="flex-grow-1">
                                        {value.lastname.toUpperCase()} {value.firstname}
                                    </div>

                                    {/* Buttons */}
                                    <div>
                                        <button
                                            role="Delete Entry"
                                            data-trigger="hover"
                                            className="btn btn-outline-danger pop">
                                            <FontAwesomeIcon icon="trash-alt" />
                                        </button>

                                        <button
                                            role="Edit Entry"
                                            data-trigger="hover"
                                            className="btn btn-outline-primary pop ml-2">
                                            <FontAwesomeIcon icon="pen" />
                                        </button>
                                    </div>
                                </a>
                            );
                        })}
                    </div>
                </div>
            </JSONGet>
        )
    }
});
