import {ButtonVariant} from 'react-bootstrap/lib/Button';

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

interface IModalStateManagerProps {
    visible: boolean,
}

interface IModalStateManagerState {
    isOpened: boolean
}

interface IConfirmModalProps extends IModalStateManagerProps {
    cancelText: string,
    className: string,
    confirmText?: string,
    onConfirm: () => void,
    onClose?: () => void,
    showCancelButton: boolean,
    title: string,
    confirmBootstrapStyle: ButtonVariant,
    keyboard?: boolean
}

interface IConfirmModalState extends IModalStateManagerState {
}

interface IFormModalProps extends IModalStateManagerProps {
    className?: string,
    title: JSX.Element,
    submitText: string,
    onSubmit: () => void
}

interface IFormModalState extends IModalStateManagerState {

}
