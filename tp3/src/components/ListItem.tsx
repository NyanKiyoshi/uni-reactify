import * as React from 'react';
import InlineEdit from "./InlineEdit";
import {Component} from 'react';

export default class ListItem
    extends Component<IListItemProps, IListItemState> {

    public constructor(props: IListItemProps) {
        super(props);
        this.state = {
            item: props.item
        }
    }

    public render() {
        return (
            <div className="ListItem">
                <p>
                    Name:
                </p>

                <InlineEdit
                    type="text"
                    initialValue={this.state.item.name}
                    onEdited={newValue => this.state.item.name = newValue} />

                <p>
                    Quantity:
                </p>

                <InlineEdit
                    type="number"
                    initialValue={this.state.item.quantity}
                    onEdited={newValue => this.state.item.quantity = parseInt(newValue)} />

                <p>
                    Cost (USD):
                </p>

                <InlineEdit
                    type="number"
                    initialValue={this.state.item.cost}
                    onEdited={newValue => this.state.item.cost = parseFloat(newValue)} />

                <button type="button"
                        onClick={() => this.props.onRemove(this.props.index)}>
                    Delete
                </button>
            </div>
        );
    }
};
