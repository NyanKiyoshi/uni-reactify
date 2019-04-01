import * as React from 'react';
import {Component} from 'react';
import {
    IModalStateManagerProps,
    IModalStateManagerState
} from '../../interfaces';

export default class ModalStateManager
<P extends IModalStateManagerProps, S extends IModalStateManagerState> extends Component<P, S> {

    public constructor(props: P) {
        super(props);
    }

    public componentDidMount() {
        this.setVisible(this.props.visible);
    }

    public setVisible(visible: boolean) {
        this.setState({
            isOpened: visible
        });
    }

    public dismiss() {
        this.setVisible(false);
    }

    public componentWillReceiveProps(nextProps: Readonly<P>, nextContext: any): void {
        this.setVisible(nextProps.visible);
    }
}
