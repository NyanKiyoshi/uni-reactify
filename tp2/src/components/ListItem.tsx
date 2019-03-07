import * as React from 'react';
import {Component} from 'react';

export default (props: IListItemProps) => {
    return (
        <div className="ListItem">
            <p className="text">{props.text}</p>
            <button type="button"
                    onClick={() => props.onRemove(props.index)}>
                Delete
            </button>
        </div>
    );
};
