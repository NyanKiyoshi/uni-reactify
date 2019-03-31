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

    public async onSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        event.stopPropagation();

        await this.props.onSubmit();

        this.dismiss();
    }

    public render(): JSX.Element {
        return (
            <Modal show={this.state.isOpened}
                   onHide={this.dismiss.bind(this)}
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
                        <Button variant={'outline-secondary'} onClick={this.dismiss.bind(this)}>
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
