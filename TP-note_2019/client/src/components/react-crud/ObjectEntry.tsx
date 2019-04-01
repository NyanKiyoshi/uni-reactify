import {Component, default as React} from 'react';
import EntryModal from '../modals/EntryModal';
import {IEntry, TModalDetailsJSXElement} from '../../interfaces';
import DeleteButton from '../buttons/DeleteButton';
import EditButton from '../buttons/EditButton';
import Divider from '../Divider';
import FormModal from '../modals/FormModal';
import {toast} from 'react-toastify';

export type TCustomLink = (entry: IEntry, title: string) => JSX.Element;

interface IObjectEntryProps {
    title: string,
    modalTitle?: string,
    entry: IEntry,
    onDeleteEntry: (entry: IEntry, index: number) => void,
    onUpdateEntry: (entry: IEntry, index: number) => void,
    detailsTemplate?: TModalDetailsJSXElement,
    editForm: JSX.Element,
    index: number,
    fields: string[],
    customLink?: TCustomLink
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

    showEditForm(): void {
        this.setState({
            showEditForm: true
        });
    }

    dismiss(): void {
        this.setState({
            showDetailsModal: false,
            showEditForm: false
        });
    }

    static notifyError(action: string): void {
        toast.error(`Échoué à ${action} l'entrée !`);
    }

    async deleteEntry() {
        try {
            await this.props.onDeleteEntry(this.props.entry, this.props.index);
            toast('Entrée supprimée !');
        } catch (e) {
            ObjectEntry.notifyError('supprimer');
            throw e;
        }
    }

    async updateEntry() {
        try {
            await this.props.onUpdateEntry(this.props.entry, this.props.index);
            toast('Entrée mise à jour !');
        } catch (e) {
            ObjectEntry.notifyError('mettre à jour');
            throw e;
        }
    }

    render(): any {
        return <>
            <div className="d-flex list-group-item">
                {/* Content */}

                {this.props.customLink
                    ? this.props.customLink(this.props.entry, this.props.title)
                    : (
                        <a href="#" className="flex-grow-1" onClick={this.showDetails.bind(this)}>
                            {this.props.title}
                        </a>
                    )
                }

                <Divider />

                {/* Buttons */}
                <div>
                    <DeleteButton onDelete={this.deleteEntry.bind(this)}>
                        Cela supprimera <strong>{this.props.title}</strong> de manière permanante.
                    </DeleteButton>
                    <EditButton className={"ml-2"} onClick={this.showEditForm.bind(this)} />
                </div>
            </div>

            <EntryModal
                entry={this.props.entry}
                fields={this.props.fields}
                show={this.state.showDetailsModal}
                title={this.props.modalTitle || this.props.title}
                onHide={this.dismiss.bind(this)}
                detailsTemplate={this.props.detailsTemplate}
            />

            <FormModal
                title={<>Modifier <strong>{this.props.title}</strong></>}
                submitText={'Sauvegarder'}
                visible={this.state.showEditForm}
                onSubmit={this.updateEntry.bind(this)}
                onDismiss={this.dismiss.bind(this)}
            >
                {this.props.editForm}
            </FormModal>
        </>
    }
}
