import * as React from 'react';
import {Component} from 'react';

export default class ListItem
        extends Component<IListItemProps, never> {

    public constructor(props: IListItemProps) {
        super(props);
    }

    public render(): any {
        return (
            <div className="ListItem">
                <p className="text">{this.props.text}</p>
                <button type="button" onClick={() => this.props.onRemove(this.props.index)}>
                    Delete
                </button>
            </div>
        );
    }
}
