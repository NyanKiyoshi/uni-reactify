import {Component, default as React} from 'react';
import EntryModal from './modals/EntryModal';
import {IEntry} from '../interfaces';
import DeleteButton from './buttons/DeleteButton';
import EditButton from './buttons/EditButton';
import Divider from './Divider';

interface IObjectEntryProps {
    title: string,
    modalTitle?: string,
    entry: IEntry,
    onDeleteEntry: (entry: IEntry) => void,
    onUpdateEntry: (entry: IEntry, formData: {}) => void,
}

interface IObjectEntryState {
    showModal: boolean,
}

export default class ObjectEntry extends Component<IObjectEntryProps, IObjectEntryState> {
    constructor(props: IObjectEntryProps) {
        super(props);
        this.state = {
            showModal: false
        }
    }

    showDetails(): void {
        this.setState({
            showModal: true
        });
    }

    hideDetails(): void {
        this.setState({
            showModal: false
        });
    }

    async deleteEntry() {
        await this.props.onDeleteEntry(this.props.entry);
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
                    <EditButton className={"ml-2"} />
                </div>
            </div>

            <EntryModal
                entry={this.props.entry}
                fields={["firstname", "lastname"]}
                show={this.state.showModal}
                title={this.props.modalTitle || this.props.title}
                onHide={this.hideDetails.bind(this)}
            />
        </>
    }
}
