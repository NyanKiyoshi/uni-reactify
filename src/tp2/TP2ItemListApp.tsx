import React, { Component } from 'react';
import logo from '../logo.svg';
import ItemsList from "./components/ItemsList";
import AddItemForm from "./components/AddItemForm";

class TP2ItemListApp extends Component<any, ITP2ItemListAppState> {

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
            <div className="TP2App">
                <header className="App-header">
                    <img width="250px" src={logo} className="App-logo" alt="logo" />
                </header>

                <article>
                    <header>
                        <AddItemForm onAddItem={this.addItem.bind(this)} />
                    </header>

                    <ItemsList items={this.state.items} onRemoveItem={this.removeItem.bind(this)} />
                </article>
            </div>
        );
    }
}

export default TP2ItemListApp;
