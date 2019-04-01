import * as React from 'react';
import {IReservationFormProps, IReservationFormState} from './reservations';
import {Row, Form, Col, InputGroup} from 'react-bootstrap/lib';
import FormStateDispatcher from '../components/FormStateDispatcher';
import {IEntry} from "../interfaces";

export default class ReservationForm extends FormStateDispatcher<IReservationFormProps, IReservationFormState> {
    public constructor(props: IReservationFormProps) {
        super(props);

        this.state = {
            nom: '',
            creneau: ''
        }
    }

    public static async onSuccessUpdate(entry: IEntry): Promise<any> {
    }

    public static async onSuccessCreate(entry: IEntry): Promise<any> {
    }

    componentWillReceiveProps(nextProps: Readonly<IReservationFormProps>, nextContext: any): void {
        this.setState({
            nom: this.state.nom || nextProps.entry.nom || '',
            creneau: this.state.creneau || nextProps.entry.creneau || '0',
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
                    Titre
                </Form.Label>

                <Col sm={8}>
                    <Form.Control
                        name={'Nom et Prénom'}
                        placeholder="Votre nom et prénom"
                        onChange={onChange}
                        value={this.state.nom}
                        required
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column>
                    Creneau
                </Form.Label>

                <Col sm={8}>
                    <Form.Control as="select">
                        <option>midi</option>
                        <option>soir</option>
                    </Form.Control>
                </Col>
            </Form.Group>
        </>;
    }
};
