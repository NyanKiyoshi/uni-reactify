import * as React from 'react';
import {Component} from 'react';
import {IPersonBody} from './persons';
import PersonForm from './PersonForm';
import CRUDViewListing from '../components/react-crud/CRUDViewListing';

const PERSONS_ENDPOINT = '/persons';

class PersonView extends CRUDViewListing<IPersonBody> {
    public constructor(props: any) {
        super(props);
    }
}

export default class PersonList extends Component {
    render(): JSX.Element {
        return <PersonView
            title='Persons'
            newEntryTitle={<>New Person</>}
            endpoint={PERSONS_ENDPOINT}
            TForm={PersonForm}
            entryTitle={entry => `${entry.firstname.toUpperCase()} ${entry.lastname}`} />
    }
}
