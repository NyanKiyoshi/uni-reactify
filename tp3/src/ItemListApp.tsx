import React, { Component } from 'react';
import logo from './logo.svg';
import './scss/index.scss';
import ItemsList from "./components/ItemsList";
import AddItemForm from "./components/AddItemForm";

class ItemListApp extends Component<any, IItemListAppState> {

    public constructor(props: any) {
        super(props);

        this.state = {
            items: []
        }
    }

    private addItem(item: IItem): void {
        this.setState((prevState) => ({
            items: [ ...prevState.items, item ]
        }));
    }

    private removeItem(index: number): void {
        this.setState((prevState) => ({
            items: prevState.items.filter((i, idx) => idx !== index)
        }));
    }
        
    public render() : any {
        return (
            <div className="ShoppingListApp container">
                <header className="App-header text-center">
                    <img width="250px" src={logo} className="App-logo" alt="logo" />
                </header>

                <article className="row justify-content-center">
                    <header>
                        <AddItemForm onAddItem={this.addItem.bind(this)} />
                    </header>

                    <div className="col-12">
                        <ItemsList items={this.state.items} onRemoveItem={this.removeItem.bind(this)} />
                    </div>
                </article>
            </div>
        );
    }
}

export default ItemListApp;
