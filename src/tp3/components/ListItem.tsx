import * as React from 'react';
import {Component} from 'react';
import EdiText from 'react-editext';

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
            <div className="ListItem row">
                <div className="box btn btn-primary">
                    <EdiText
                        value={this.state.item.name}
                        type='text'
                        onSave={value => this.setState(prevState => ({
                            item: {
                                ...prevState.item,
                                name: value
                            }
                        }))} />
                </div>

                <div className="box btn btn-primary">
                    <span>Quantity</span>
                    <EdiText
                        value={this.state.item.quantity.toString()}
                        validation={value => Number.isInteger(parseInt(value))}
                        type='number'
                        onSave={value => this.setState(prevState => ({
                            item: {
                                ...prevState.item,
                                quantity: parseInt(value)
                            }
                        }))} />
                </div>

                <div className="box btn btn-primary">
                    <span>Cost (USD)</span>
                    <EdiText
                        value={this.state.item.cost.toString()}
                        validation={value => parseFloat(value).toString() == value}
                        type='number'
                        onSave={value => this.setState(prevState => ({
                            item: {
                                ...prevState.item,
                                cost: parseFloat(value)
                            }
                        }))} />
                </div>
            </div>
        );
    }
};
