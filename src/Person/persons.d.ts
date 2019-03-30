import {IEntry} from '../interfaces';

interface IPersonBody extends IEntry {
    id: number,
    firstname: string,
    lastname: string,
}

interface IPersonListState {
    body: IPersonBody[]
}
