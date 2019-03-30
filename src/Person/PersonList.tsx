import JSONGet from '../react-json-forms/components/JSONGet';
import config from '../configs';
import * as React from 'react';
import {Component} from 'react';
import { withRouter } from 'react-router-dom';
import FetchErrorAlert from '../components/FetchErrorAlert';
import ObjectEntry from '../components/ObjectEntry';
import {IPersonBody, IPersonListState} from './persons';
import {IEntry} from '../interfaces';
import getUrl from '../react-json-forms/utils';
import {toast} from 'react-toastify';

const PERSONS_ENDPOINT = '/persons';

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

    public static async onDeleteEntry(entry: IEntry) {
        const personId = entry['id'];

        await fetch(
            getUrl(config.baseurl, PERSONS_ENDPOINT + '/' + personId), {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json'
                }
            }
        );
    }

    public render(): any {
        return (
            <JSONGet
                baseurl={config.baseurl}
                path={PERSONS_ENDPOINT}
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
                                <ObjectEntry
                                    title={`${value.lastname.toUpperCase()} ${value.firstname}`}
                                    entry={value}
                                    onDeleteEntry={PersonList.onDeleteEntry}
                                    onUpdateEntry={entry => {}}
                                    key={index} />
                            );
                        })}
                    </div>
                </div>
            </JSONGet>
        )
    }
});
