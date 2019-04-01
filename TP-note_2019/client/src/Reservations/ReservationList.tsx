import * as React from 'react';
import {Component} from 'react';
import ReservationForm from './ReservationForm';
import CRUDViewListing from '../components/react-crud/CRUDViewListing';
import * as queryString from "querystring";
import {ParsedUrlQuery} from "querystring";
import {IEntry} from "../interfaces";
import {getUrl, sendRequest} from "../react-json-forms/utils";
import config from "../configs";
import {IReservationBody} from "./reservations";

interface IListState {
    params: ParsedUrlQuery | null
}

class ReservationView extends CRUDViewListing<IReservationBody> {
    public constructor(props: any) {
        super(props);
    }
}

export default class ReservationList extends Component<any, IListState> {
    public constructor(props: any) {
        super(props);

        this.state = {
            params: null
        }
    }

    public async afterCreateEntry(entry: IEntry) {
        const menuID = this.state.params && this.state.params.menuID || 0;
        await sendRequest(
            getUrl(
                config.baseurl, `/menus/${menuID}/assiettes/${entry.id}`),
            {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                }
            }
        );
    }

    public componentDidMount(): void {
        this.setState({
            params: queryString.parse(location.search.substring(1))
        });
    }

    public render(): JSX.Element {
        if (!this.state.params) {
            return <>Loading...</>;
        }

        return <ReservationView
            title={`Reservations de ${this.state.params.menuTitle}`}
            newEntryTitle={<>Nouvelle réservation</>}
            endpoint={`/menus/${this.state.params.menuID}/reservations`}
            TForm={ReservationForm}
            fields={['nom', 'creneau']}
            entryTitle={entry => `${entry.nom} à ${entry.creneau}`}
            afterCreate={this.afterCreateEntry.bind(this)}
        />
    }
}
