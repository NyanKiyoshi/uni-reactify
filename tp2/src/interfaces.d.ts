interface IItemListAppState {
    items: string[]
}

interface IItemsListProps {
    items: string[];
    onRemoveItem(index: number): void;
}

interface IListItemProps {
    text: string;
    index: number;
    onRemove(index: number): void;
}

interface IAddItemFormProps {
    onAddItem(item: string): void;
}

interface IAddItemFormState {
    currentText: string;
}
