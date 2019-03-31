import * as React from 'react';
import {Component} from 'react';
import {IPersonBody, IPersonFormProps, IPersonFormState} from './persons';
import {Row, Form, Col} from 'react-bootstrap/lib';

export default class PersonForm extends Component<IPersonFormProps, IPersonFormState> {
    public constructor(props: IPersonFormProps) {
        super(props);

        this.state = {
            firstName: '',
            lastName: ''
        }
    }

    public handleInputChange(event: any) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    componentWillReceiveProps(nextProps: Readonly<IPersonFormProps>, nextContext: any): void {
        this.setState({
            firstName: this.state.firstName || nextProps.entry.firstname || '',
            lastName: this.state.lastName || nextProps.entry.lastname || ''
        });
    }

    componentDidMount(): void {
        this.componentWillReceiveProps(this.props, null);
    }

    componentDidUpdate(
        prevProps: Readonly<IPersonFormProps>, prevState: Readonly<IPersonFormState>, snapshot?: any): void {

        Object.assign(this.props.state, this.state);
    }

    public render(): any {
        const onChange = this.handleInputChange.bind(this);

        return <>
            <Form.Group as={Row}>
                <Form.Label column>
                    First Name
                </Form.Label>

                <Col sm={8}>
                    <Form.Control
                        name={'firstName'}
                        placeholder="First Name"
                        onChange={onChange}
                        value={this.state.firstName}
                        required
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column>
                    Last Name
                </Form.Label>

                <Col sm={8}>
                    <Form.Control
                        name={'lastName'}
                        placeholder="Last Name"
                        onChange={onChange}
                        value={this.state.lastName}
                        required
                    />
                </Col>
            </Form.Group>
        </>;
    }
};
