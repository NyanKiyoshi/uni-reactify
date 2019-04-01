import {IEntry} from '../interfaces';

interface IReservationBody extends IEntry {
    id: number,
    nom: string,
    creneau: string
}

interface IReservationFormState {
    nom: string,
    creneau: string
}

interface IReservationFormProps {
    entry: Partial<IReservationBody>,
    state: Partial<IReservationFormState>
}
