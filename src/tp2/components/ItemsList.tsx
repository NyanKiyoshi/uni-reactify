import * as React from 'react';
import ListItem from "./ListItem";

export default (props: ITP2ItemsListProps) => {
    return (
        <div className="ItemsList">
            {
                props.items.map((value, index) => {
                    return (
                        <ListItem
                            text={value}
                            index={index}
                            key={index}
                            onRemove={props.onRemoveItem} />
                    );
                })
            }
        </div>
    );
};
