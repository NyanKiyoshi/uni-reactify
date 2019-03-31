import JSONGet from '../react-json-forms/components/JSONGet';
import config from '../configs';
import * as React from 'react';
import {Component} from 'react';
import { withRouter } from 'react-router-dom';
import FetchErrorAlert from '../components/FetchErrorAlert';
import ObjectEntry from '../components/ObjectEntry';
import {IPersonBody, IPersonListState} from './persons';
import {IEntry} from '../interfaces';
import {getUrl, sendRequest} from '../react-json-forms/utils';
import PersonForm from './PersonForm';
import FormModal from '../components/modals/FormModal';
import {Button} from 'react-bootstrap/lib';

const PERSONS_ENDPOINT = '/persons';

export default withRouter(class PersonList extends Component<any, IPersonListState> {
    public constructor(props: any) {
        super(props);
        this.state = {
            body: [],
            updateForm: {},
            createForm: {},
            showCreateForm: false
        }
    }

    public onBody(jsonBody: IPersonBody[]) : void {
        this.setState({ body: jsonBody });
    }

    public showCreateEntry() {
        this.setState({
            showCreateForm: true
        });
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

    public async onUpdateEntry(entry: IEntry, index: number) {
        const personId = entry['id'];
        const formData = this.state.updateForm;

        await sendRequest(
            getUrl(config.baseurl, PERSONS_ENDPOINT + '/' + personId), {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
        );

        this.setState((prevState) => ({
            body: prevState.body.map((value, stateIndex) => {
                if (stateIndex === index) {
                    return Object.assign({...value}, formData);
                }
                return value;
            })
        }));
    }

    public async onCreateEntry() {
        const formData = this.state.createForm;

        const newItem : IPersonBody = await (await sendRequest(
            getUrl(config.baseurl, PERSONS_ENDPOINT), {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
        )).json();

        this.setState((prevState) => ({
            body: [...prevState.body, newItem]
        }));
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
                    <div className="card-header d-flex justify-content-center">
                        <span className="flex-grow-1 d-flex flex-column justify-content-center">
                            Persons
                        </span>

                        <Button variant={'outline-primary'}
                                onClick={this.showCreateEntry.bind(this)}>
                            New
                        </Button>
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

                <FormModal
                    title={<>New Person</>}
                    submitText={'Create'}
                    visible={this.state.showCreateForm}
                    onSubmit={this.onCreateEntry.bind(this)}
                >
                    <PersonForm entry={{}} state={this.state.createForm} />
                </FormModal>
            </JSONGet>
        )
    }
});
