import * as React from 'react';
import {Component} from 'react';
import {Button, OverlayTrigger, Popover} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Placement} from 'bootstrap';
import PopOverButton from './PopOverButton';

export default class EditButton extends Component<any> {
    public render(): JSX.Element {
        return <span {...this.props}>
            <PopOverButton variant={'outline-primary'} text='Edit Entry'>
                <FontAwesomeIcon icon="pen" />
            </PopOverButton>
        </span>
    }
}
