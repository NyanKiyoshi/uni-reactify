import {IEntry} from '../interfaces';

interface IPersonBody extends IEntry {
    id: number,
    firstname: string,
    lastname: string,
}

interface IPersonListState {
    body: IPersonBody[],
    updateForm: Partial<IPersonFormState>
}

interface IPersonFormState {
    firstName: string,
    lastName: string,
    [key: string]: any;
}

interface IPersonFormProps {
    entry: Partial<IPersonBody>,
    state: Partial<IPersonFormState>
}
