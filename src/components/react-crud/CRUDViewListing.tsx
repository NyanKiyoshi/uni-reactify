import {Button} from 'react-bootstrap/lib';
import {Component} from 'react';
import {ICRUDViewListingProps, ICRUDViewListingState} from './interfaces';
import {IEntry} from '../../interfaces';
import {getUrl, sendRequest} from '../../react-json-forms/utils';
import config from '../../configs';
import JSONGet from '../../react-json-forms/components/JSONGet';
import * as React from 'react';
import {toast} from 'react-toastify';
import ObjectEntry from './ObjectEntry';
import FormModal from '../modals/FormModal';

export default class CRUDViewListing
<T extends IEntry> extends Component<ICRUDViewListingProps<T>, ICRUDViewListingState<T>> {
    public constructor(props: any) {
        super(props);
        this.state = {
            entries: [],
            updateForm: {},
            createForm: {},
            showCreateForm: false
        }
    }

    componentWillReceiveProps(nextProps: Readonly<ICRUDViewListingProps<T>>, nextContext: any): void {
        this.setState({
            entries: this.props.entries
        })
    }

    public componentDidMount(): void {
        this.componentWillReceiveProps(this.props, null);
    }

    public onBody(jsonBody: T[]) : void {
        this.setState({ entries: jsonBody });
    }

    public showCreateEntry() {
        this.setState({
            showCreateForm: true
        });
    }

    public async onDeleteEntry(entry: IEntry, index: number) {
        const entryId = entry['id'];

        await fetch(
            getUrl(config.baseurl, this.props.endpoint + '/' + entryId), {
                method: 'DELETE',
                headers: {
                    Accept: 'application/json'
                }
            }
        );

        this.setState((prevState) => ({
            entries: prevState.entries.filter((i, idx) => idx !== index)
        }));
    }

    public async onUpdateEntry(entry: IEntry, index: number) {
        const entryId = entry['id'];
        const formData = this.state.updateForm;

        await sendRequest(
            getUrl(config.baseurl, this.props.endpoint + '/' + entryId), {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
        );

        this.setState((prevState) => ({
            entries: prevState.entries.map((value, stateIndex) => {
                if (stateIndex === index) {
                    return Object.assign({...value}, formData);
                }
                return value;
            })
        }));
    }

    public async onCreateEntry() {
        const formData = this.state.createForm;

        const newItem : T = await (await sendRequest(
            getUrl(config.baseurl, this.props.endpoint), {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            }
        )).json();

        this.setState((prevState) => ({
            entries: [...prevState.entries, newItem]
        }));
    }

    public render(): any {
        const TForm = this.props.TForm;

        return (
            <JSONGet
                baseurl={config.baseurl}
                path={this.props.endpoint}
                onBody={this.onBody.bind(this)}
                onError={exc => (

                    toast.error('Failed to retrieve entries.')
            )}>
                <div className="card">
                    <div className="card-header d-flex justify-content-center">
                        <span className="flex-grow-1 d-flex flex-column justify-content-center">
                            {this.props.title}
                        </span>

                        <Button variant={'outline-primary'}
                                onClick={this.showCreateEntry.bind(this)}>
                            New
                        </Button>
                    </div>

                    <div className="list-group list-group-flush">
                        {this.state.entries.map((value, index) => {
                            return (
                                <ObjectEntry
                                    title={this.props.entryTitle(value)}
                                    entry={value}
                                    onDeleteEntry={this.onDeleteEntry.bind(this)}
                                    onUpdateEntry={this.onUpdateEntry.bind(this)}
                                    editForm={<TForm entry={value} state={this.state.updateForm} />}
                                    key={index}
                                    index={index}
                                />
                            );
                        })}
                    </div>
                </div>

                <FormModal
                    title={this.props.newEntryTitle}
                    submitText={'Create'}
                    visible={this.state.showCreateForm}
                    onSubmit={this.onCreateEntry.bind(this)}
                >
                    <TForm entry={{}} state={this.state.createForm} />
                </FormModal>
            </JSONGet>
        )
    }
};
