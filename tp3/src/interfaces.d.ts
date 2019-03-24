interface IItem {
    name: string
    quantity: number
    cost: number
}

interface IItemListAppState {
    items: IItem[]
}

interface IItemsListProps {
    items: IItem[];
    onRemoveItem(index: number): void;
}

interface IListItemProps {
    item: IItem;
    index: number;
    onRemove(index: number): void;
}

interface IListItemState {
    item: IItem;
}

interface IAddItemFormProps {
    onAddItem(item: IItem): void;
}

interface IAddItemFormState {
    currentText: string;
}

interface IInlineEditProps {
    initialValue: any;
    type: string;
    onEdited(newValue: string): void;
}

interface IInlineEditState {
    isInEditMode: boolean;
    value: string;
}
