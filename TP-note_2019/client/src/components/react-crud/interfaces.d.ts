import {IEntry, TModalDetailsJSXElement} from '../../interfaces';
import FormStateDispatcher from '../FormStateDispatcher';
import {TCustomLink} from "./ObjectEntry";

interface ICRUDViewListingProps<P extends IEntry> {
    title: string,
    newEntryTitle: JSX.Element,
    endpoint: string,
    TForm: FormStateDispatcher,
    entryTitle: (entry: T) => string,
    detailsTemplate?: TModalDetailsJSXElement,
    fields: string[],
    customDetailsLink?: TCustomLink
}


interface ICRUDViewListingState<T extends IEntry> extends IEntry {
    entries: P[],
    updateForm: Partial<T>,
    createForm: Partial<T>,
    showCreateForm: boolean
}
