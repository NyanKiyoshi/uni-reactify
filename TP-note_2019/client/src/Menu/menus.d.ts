import {IEntry} from '../interfaces';

interface IMenuBody extends IEntry {
    id: number,
    titre: string,
}

interface IMenuFormState extends IEntry {
    titre: string,
}

interface IMenuFormProps {
    entry: Partial<IMenuBody>,
    state: Partial<IMenuFormState>
}
