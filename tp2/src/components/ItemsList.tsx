import * as React from 'react';
import {Component} from "react";
import ListItem from "./ListItem";

export default class ItemsList
        extends Component<IItemsListProps, never> {

    public constructor(props: IItemsListProps) {
        super(props);
    }

    public render(): any {
        return (
            <div className="ItemsList">
                {
                    this.props.items.map((value, index) => {
                        return (
                            <ListItem
                                text={value}
                                index={index}
                                key={index}
                                onRemove={this.props.onRemoveItem} />
                        );
                    })
                }
            </div>
        );
    }
}
