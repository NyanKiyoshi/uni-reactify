import React, { Component } from 'react';
import logo from './logo.svg';
import './ItemListApp.css';
import ItemsList from "./components/ItemsList";
import AddItemForm from "./components/AddItemForm";

const DEFAULT_BOX_COLOR = "#61DAFB";

class ItemListApp extends Component<any, IItemListAppState> {

    public constructor(props: any) {
        super(props);

        this.state = {
            items: ["Hello"]
        }
    }

    private addItem(item: string): void {
        this.state.items.push(item);
        this.forceUpdate();
    }

    private removeItem(indice: number): void {
        delete this.state.items[indice];
        this.forceUpdate();
    }
        
    public render() : any {
        return (
            <div className="App">
                <header className="App-header">
                    <img width="250px" src={logo} className="App-logo" alt="logo" />
                </header>

                <article>
                    <ItemsList items={this.state.items} onRemoveItem={this.removeItem.bind(this)} />
                </article>

                <footer>
                    <AddItemForm onAddItem={this.addItem.bind(this)} />
                </footer>
            </div>
        );
    }
}

export default ItemListApp;
