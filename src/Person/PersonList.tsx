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
import PersonForm from './PersonForm';

const PERSONS_ENDPOINT = '/persons';

export default withRouter(class PersonList extends Component<any, IPersonListState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            body: [],
            updateForm: {}
        }
    }

    public onBody(jsonBody: IPersonBody[]) : void {
        this.setState({ body: jsonBody });
    }

    public async onDeleteEntry(entry: IEntry, index: number) {
        const personId = entry['id'];

        await fetch(
            getUrl(config.baseurl, PERSONS_ENDPOINT + '/' + personId), {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json'
                }
            }
        );

        this.setState((prevState) => ({
            body: prevState.body.filter((i, idx) => idx !== index)
        }));
    }

    public async onUpdateEntry() {
        console.log("Submitted:", this.state.updateForm);
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
                                    onDeleteEntry={this.onDeleteEntry.bind(this)}
                                    onUpdateEntry={this.onUpdateEntry.bind(this)}
                                    editForm={<PersonForm entry={value} state={this.state.updateForm} />}
                                    key={index}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                </div>
            </JSONGet>
        )
    }
});
