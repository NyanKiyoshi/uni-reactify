import * as React from 'react';
import {Component} from 'react';
import {IMenuBody} from './menus';
import MenuForm from './MenuForm';
import CRUDViewListing from '../components/react-crud/CRUDViewListing';

const PERSONS_ENDPOINT = '/menus';

class PersonView extends CRUDViewListing<IMenuBody> {
    public constructor(props: any) {
        super(props);
    }
}

export default class MenuList extends Component {
    render(): JSX.Element {
        return <PersonView
            title='Menus'
            newEntryTitle={<>Nouveau Menu</>}
            endpoint={PERSONS_ENDPOINT}
            TForm={MenuForm}
            fields={['titre']}
            entryTitle={entry => `${entry.titre}`}
        />
    }
}
