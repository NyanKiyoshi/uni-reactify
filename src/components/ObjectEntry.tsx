import {Component, default as React} from 'react';
import EntryModal from './modals/EntryModal';
import {IEntry} from '../interfaces';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import Divider from './Divider';
import FormModal from './modals/FormModal';

interface IObjectEntryProps {
    title: string,
    modalTitle?: string,
    entry: IEntry,
    onDeleteEntry: (entry: IEntry, index: number) => void,
    onUpdateEntry: (entry: IEntry, index: number) => void,
    editForm: JSX.Element,
    index: number
}

interface IObjectEntryState {
    showDetailsModal: boolean,
    showEditForm: boolean,
}

export default class ObjectEntry extends Component<IObjectEntryProps, IObjectEntryState> {
    constructor(props: IObjectEntryProps) {
        super(props);
        this.state = {
            showDetailsModal: false,
            showEditForm: false
        }
    }

    showDetails(): void {
        this.setState({
            showDetailsModal: true
        });
    }

    hideDetails(): void {
        this.setState({
            showDetailsModal: false
        });
    }

    showEditForm(): void {
        this.setState({
            showEditForm: true
        });
    }

    hideEditForm(): void {
        this.setState({
            showEditForm: false
        });
    }

    async deleteEntry() {
        await this.props.onDeleteEntry(this.props.entry, this.props.index);
    }

    async updateEntry() {
        await this.props.onUpdateEntry(this.props.entry, this.props.index);
    }

    render(): any {
        return <>
            <div className="d-flex list-group-item">
                {/* Content */}
                <a href="#" className="flex-grow-1" onClick={this.showDetails.bind(this)}>
                    {this.props.title}
                </a>

                <Divider />

                {/* Buttons */}
                <div>
                    <DeleteButton onDelete={this.deleteEntry.bind(this)}>
                        This will permanently delete <strong>{this.props.title}</strong>.
                    </DeleteButton>
                    <EditButton className={"ml-2"} onClick={this.showEditForm.bind(this)} />
                </div>
            </div>

            <EntryModal
                entry={this.props.entry}
                fields={["firstname", "lastname"]}
                show={this.state.showDetailsModal}
                title={this.props.modalTitle || this.props.title}
                onHide={this.hideDetails.bind(this)}
            />

            <FormModal
                title={<>Edit <strong>{this.props.title}</strong></>}
                submitText={'Save'}
                visible={this.state.showEditForm}
                onSubmit={this.updateEntry.bind(this)}
            >
                {this.props.editForm}
            </FormModal>
        </>
    }
}
