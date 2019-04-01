import * as React from 'react';
import {IAssietteFormProps, IAssietteFormState} from './assiettes';
import {Row, Form, Col, InputGroup} from 'react-bootstrap/lib';
import FormStateDispatcher from '../components/FormStateDispatcher';
import {IEntry} from "../interfaces";

export default class AssietteForm extends FormStateDispatcher<IAssietteFormProps, IAssietteFormState> {
    public constructor(props: IAssietteFormProps) {
        super(props);

        this.state = {
            titre: '',
            prix: 1,
            type: 'entree'
        }
    }

    public static async onSuccessUpdate(entry: IEntry): Promise<any> {
    }

    public static async onSuccessCreate(entry: IEntry): Promise<any> {
    }

    componentWillReceiveProps(nextProps: Readonly<IAssietteFormProps>, nextContext: any): void {
        this.setState({
            titre: this.state.titre || nextProps.entry.titre || '',
            prix: this.state.prix || nextProps.entry.prix || 0,
            type: this.state.type || nextProps.entry.type || ''
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
                        name={'titre'}
                        placeholder="Nom de l'assiette"
                        onChange={onChange}
                        value={this.state.titre}
                        required
                    />
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column>
                    Type
                </Form.Label>

                <Col sm={8}>
                    <Form.Control as="select">
                        <option>entree</option>
                        <option>plat</option>
                        <option>dessert</option>
                    </Form.Control>
                </Col>
            </Form.Group>

            <Form.Group as={Row}>
                <Form.Label column>
                    Prix
                </Form.Label>

                <Col sm={8}>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroupPrepend">€</InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control
                            name={'prix'}
                            placeholder="Prix de l'assiette (en euros)"
                            onChange={onChange}
                            type={'number'}
                            value={this.state.prix.toString()}
                            required
                        />
                    </InputGroup>
                </Col>
            </Form.Group>
        </>;
    }
};
