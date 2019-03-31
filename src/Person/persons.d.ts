import {IEntry} from '../interfaces';

interface IPersonBody extends IEntry {
    id: number,
    firstname: string,
    lastname: string,
}

interface IPersonListState extends IEntry {
    body: IPersonBody[],
    updateForm: Partial<IPersonFormState>
}

interface IPersonFormState extends IEntry {
    firstname: string,
    lastname: string,
}

interface IPersonFormProps {
    entry: Partial<IPersonBody>,
    state: Partial<IPersonFormState>
}
