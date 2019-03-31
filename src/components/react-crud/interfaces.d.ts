import {IEntry} from '../../interfaces';
import FormStateDispatcher from '../FormStateDispatcher';

interface ICRUDViewListingProps<P extends IEntry> {
    title: string,
    newEntryTitle: JSX.Element,
    endpoint: string,
    TForm: FormStateDispatcher,
    entryTitle: (entry: T) => string
}


interface ICRUDViewListingState<T extends IEntry> extends IEntry {
    entries: P[],
    updateForm: Partial<T>,
    createForm: Partial<T>,
    showCreateForm: boolean
}
