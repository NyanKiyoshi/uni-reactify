import * as React from 'react';
import {Modal} from 'react-bootstrap';
import {IConfirmModalProps, IConfirmModalState, IEntryModalProps} from '../../interfaces';
import {Button} from 'react-bootstrap/lib';
import ModalStateManager from './ModalStateManager';

export default class ConfirmModal extends ModalStateManager<IConfirmModalProps, IConfirmModalState> {
    public static defaultProps : Partial<IConfirmModalProps> = {
        title: 'Are you sure?',
        cancelText: 'Cancel',
        confirmText: 'Confirm',
        confirmBootstrapStyle: 'danger',
        showCancelButton: true,
        keyboard: true
    };

    public constructor(props: IConfirmModalProps) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    public onClose() {
        this.dismiss();

        if (typeof this.props.onClose !== 'undefined') {
            this.props.onClose();
        }
    }

    public onConfirm() {
        this.onClose();

        if (typeof this.props.onConfirm !== 'undefined') {
            this.props.onConfirm();
        }
    }

    public render(): JSX.Element {
        const cancelButton = this.props.showCancelButton ? (
            <Button variant={'outline-secondary'} onClick={this.onClose.bind(this)}>
                {this.props.cancelText}
            </Button>
        ) : null;

        return (
            <Modal show={this.state.isOpened}
                   onHide={this.onClose.bind(this)}
                   className={this.props.className}
                   keyboard={this.props.keyboard}
            >
                <Modal.Header>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{this.props.children || 'Please confirm.'}</Modal.Body>
                <Modal.Footer>
                    {cancelButton}
                    <Button variant={this.props.confirmBootstrapStyle} onClick={this.onConfirm.bind(this)}>
                        {this.props.confirmText}
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
