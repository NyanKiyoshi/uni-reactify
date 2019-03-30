import {Component, default as React} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import EntryModal from './EntryModal';
import {IEntry} from '../interfaces';

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

    render(): any {
        return <>
            <a href="#" className="d-flex list-group-item" onClick={this.showDetails.bind(this)}>
                {/* Content */}
                <div className="flex-grow-1">
                    {this.props.title}
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
