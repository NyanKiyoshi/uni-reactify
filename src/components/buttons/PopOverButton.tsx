import * as React from 'react';
import {Component} from 'react';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';
import {Placement} from 'bootstrap';
import {ButtonVariant} from 'react-bootstrap/lib/Button';

interface IPopOverButtonProps {
    popPlacement?: Placement,
    text: string,
    variant: ButtonVariant,
    onClick?: () => void
}

export default class PopOverButton extends Component<IPopOverButtonProps, {}> {
    public static defaultProps : Partial<IPopOverButtonProps> = {
        popPlacement: 'left',
    };

    public render(): JSX.Element {
        return <OverlayTrigger placement={this.props.popPlacement}
                               overlay={<Popover id="popover-basic">{this.props.text}</Popover>}>

            <Button type={'button'} variant={this.props.variant} onClick={this.props.onClick}>
                {this.props.children}
            </Button>
        </OverlayTrigger>;
    }
}
