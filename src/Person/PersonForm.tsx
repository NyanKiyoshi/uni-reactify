import * as React from 'react';
import {IPersonFormProps, IPersonFormState} from './persons';
import {Row, Form, Col} from 'react-bootstrap/lib';
import FormStateDispatcher from '../components/FormStateDispatcher';

export default class PersonForm extends FormStateDispatcher<IPersonFormProps, IPersonFormState> {
    public constructor(props: IPersonFormProps) {
        super(props);

        this.state = {
            firstname: '',
            lastname: ''
        }
    }

    componentWillReceiveProps(nextProps: Readonly<IPersonFormProps>, nextContext: any): void {
        this.setState({
            firstname: this.state.firstname || nextProps.entry.firstname || '',
            lastname: this.state.lastname || nextProps.entry.lastname || ''
        });
    }

    componentDidMount(): void {
        this.componentWillReceiveProps(this.props, null);
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
                        name={'firstname'}
                        placeholder="First Name"
                        onChange={onChange}
                        value={this.state.firstname}
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
                        name={'lastname'}
                        placeholder="Last Name"
                        onChange={onChange}
                        value={this.state.lastname}
                        required
                    />
                </Col>
            </Form.Group>
        </>;
    }
};
