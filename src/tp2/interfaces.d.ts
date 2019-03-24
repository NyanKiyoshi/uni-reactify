interface ITP2ItemListAppState {
    items: string[]
}

interface ITP2ItemsListProps {
    items: string[];
    onRemoveItem(index: number): void;
}

interface ITP2ListItemProps {
    text: string;
    index: number;
    onRemove(index: number): void;
}

interface ITP2AddItemFormProps {
    onAddItem(item: string): void;
}

interface ITP2AddItemFormState {
    currentText: string;
}
