import * as React from 'react';
import {Component} from 'react';
import {IMenuBody} from './menus';
import MenuForm from './MenuForm';
import CRUDViewListing from '../components/react-crud/CRUDViewListing';
import {IEntry} from "../interfaces";
import {Link} from "react-router-dom";
import Divider from "../components/Divider";
import * as queryString from "querystring";

const ENDPOINT = '/menus';

class MenuView extends CRUDViewListing<IMenuBody> {
    public constructor(props: any) {
        super(props);
    }
}

export default class MenuList extends Component {
    public renderCustomDetailsLink(entry: IEntry, title: string): JSX.Element {
        const menuQS = queryString.stringify({
            menuID: entry.id,
            menuTitle: title
        });

        return <div className="d-flex flex-grow-1 children-center">

            <div className="flex-grow-1">{title}</div>

            <Link to={`/assiettes?${menuQS}`}>Assiettes</Link>
            <Divider />
            <Link to={`/reservations?${menuQS}`}>Reservations</Link>

        </div>
    }

    public render(): JSX.Element {
        return <MenuView
            title='Menus'
            newEntryTitle={<>Nouveau Menu</>}
            endpoint={ENDPOINT}
            TForm={MenuForm}
            fields={['titre']}
            entryTitle={entry => `${entry.titre}`}
            customDetailsLink={this.renderCustomDetailsLink.bind(this)}
        />
    }
}
