import * as React from 'react';
import ListItem from "./ListItem";

export default (props: IItemsListProps) => {
    return (
        <div className="ItemsList">
            {
                props.items.map((value, index) => {
                    return (
                        <ListItem
                            item={value}
                            index={index}
                            key={index}
                            onRemove={props.onRemoveItem} />
                    );
                })
            }
        </div>
    );
};
