import * as React from 'react';
import {Component} from 'react';
import {IMenuBody} from './menus';
import MenuForm from './MenuForm';
import CRUDViewListing from '../components/react-crud/CRUDViewListing';
import {IEntry} from "../interfaces";
import {Link} from "react-router-dom";
import Divider from "../components/Divider";

const PERSONS_ENDPOINT = '/menus';

class PersonView extends CRUDViewListing<IMenuBody> {
    public constructor(props: any) {
        super(props);
    }
}

export default class MenuList extends Component {
    public renderCustomDetailsLink(entry: IEntry, title: string): JSX.Element {
        return <div className="d-flex flex-grow-1 children-center">

            <div className="flex-grow-1">{title}</div>

            <Link to={`/assiettes?menu=${entry.id}`}>Assiettes</Link>
            <Divider />
            <Link to={`/reservations?menu=${entry.id}`}>Reservations</Link>

        </div>
    }

    public render(): JSX.Element {
        return <PersonView
            title='Menus'
            newEntryTitle={<>Nouveau Menu</>}
            endpoint={PERSONS_ENDPOINT}
            TForm={MenuForm}
            fields={['titre']}
            entryTitle={entry => `${entry.titre}`}
            customDetailsLink={this.renderCustomDetailsLink.bind(this)}
        />
    }
}
