import * as React from 'react';
import {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import PopOverButton from './PopOverButton';
import ConfirmModal from '../modals/ConfirmModal';
import {toast} from 'react-toastify';

interface IDeleteButtonProps {
    onDelete: () => void
}

interface IDeleteButtonState {
    isModalShown: boolean
}

export default class DeleteButton extends Component<IDeleteButtonProps, IDeleteButtonState> {
    public constructor(props: IDeleteButtonProps) {
        super(props);

        this.state = {
            isModalShown: false
        }
    }

    public onButtonClick(): void {
        this.setState({
            isModalShown: true
        });
    }

    public onConfirmDismiss(): void {
        this.setState({
            isModalShown: false
        });
    }

    public async onConfirmDeletion() {
        await this.props.onDelete();
    }

    public render(): JSX.Element {
        return <div className="d-inline-block">
            <PopOverButton variant={'outline-danger'} text='Delete Entry' onClick={this.onButtonClick.bind(this)}>
                <FontAwesomeIcon icon="trash-alt" />
            </PopOverButton>

            <ConfirmModal
                visible={this.state.isModalShown}
                onClose={this.onConfirmDismiss.bind(this)}
                onConfirm={this.onConfirmDeletion.bind(this)}
            >
                {this.props.children}
            </ConfirmModal>
        </div>
    }
}
