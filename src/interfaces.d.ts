export interface IEntry {
    [key: string]: any;
}

interface IEntryModalProps {
    entry: IEntry,
    fields: string[],
    show: boolean,
    onHide: () => void,
    title: string
}
