import * as React from 'react';
import {Component} from 'react';
import {IAssietteBody} from './assiettes';
import AssietteForm from './AssietteForm';
import CRUDViewListing from '../components/react-crud/CRUDViewListing';
import * as queryString from "querystring";
import {ParsedUrlQuery} from "querystring";
import {IEntry} from "../interfaces";
import {getUrl, sendRequest} from "../react-json-forms/utils";
import config from "../configs";

interface IAssietteListState {
    params: ParsedUrlQuery | null
}

class AssietteView extends CRUDViewListing<IAssietteBody> {
    public constructor(props: any) {
        super(props);
    }
}

export default class AssietteList extends Component<any, IAssietteListState> {
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

        return <AssietteView
            title={`Assiettes de ${this.state.params.menuTitle}`}
            newEntryTitle={<>Nouveau Menu</>}
            endpoint={`/menus/${this.state.params.menuID}/assiettes`}
            TForm={AssietteForm}
            fields={['titre', 'prix', 'type']}
            entryTitle={entry => `${entry.titre}`}
            createEndpoint={'/assiettes'}
            updateEndpoint={entry => `/assiettes/${entry.id}`}
            afterCreate={this.afterCreateEntry.bind(this)}
        />
    }
}
