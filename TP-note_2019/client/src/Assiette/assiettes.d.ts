import {IEntry} from '../interfaces';

interface IAssietteBody extends IEntry {
    id: number,
    titre: string,
    type: string,
    prix: number
}

interface IAssietteFormState {
    titre: string,
    type: string,
    prix: number
}

interface IAssietteFormProps {
    entry: Partial<IAssietteBody>,
    state: Partial<IAssietteFormState>
}
