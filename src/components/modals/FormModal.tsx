import {default as React, FormEvent} from 'react';
import {Button, Form, Modal} from 'react-bootstrap/lib';
import {IFormModalProps, IFormModalState} from '../../interfaces';
import ModalStateManager from './ModalStateManager';

export default class FormModal extends ModalStateManager<IFormModalProps, IFormModalState> {

    public constructor(props: IFormModalProps) {
        super(props);

        this.state = {
            isOpened: false
        };
    }

    public async onDismiss() {
        if (this.props.onDismiss) {
            this.props.onDismiss();
        }

        this.dismiss();
    }

    public async onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();

        await this.props.onSubmit();
        await this.onDismiss();
    }

    public render(): JSX.Element {
        return (
            <Modal show={this.state.isOpened}
                   onHide={this.onDismiss.bind(this)}
                   className={this.props.className}
            >
                <Form onSubmit={this.onSubmit.bind(this)}>
                    <Modal.Header>
                        <Modal.Title>
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant={'outline-secondary'} onClick={this.onDismiss.bind(this)}>
                            Cancel
                        </Button>

                        <Button variant={'primary'} type={'submit'}>
                            {this.props.submitText}
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        );
    }
};
