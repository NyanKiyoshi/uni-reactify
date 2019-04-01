import * as React from 'react';
import {IMenuFormProps, IMenuFormState} from './menus';
import {Row, Form, Col} from 'react-bootstrap/lib';
import FormStateDispatcher from '../components/FormStateDispatcher';
import {IEntry} from "../interfaces";

export default class MenuForm extends FormStateDispatcher<IMenuFormProps, IMenuFormState> {
    public constructor(props: IMenuFormProps) {
        super(props);

        this.state = {
            titre: ''
        }
    }

    public static async onSuccessUpdate(entry: IEntry): Promise<any> {
        console.log("yeya");
    }

    public static async onSuccessCreate(entry: IEntry): Promise<any> {
    }

    componentWillReceiveProps(nextProps: Readonly<IMenuFormProps>, nextContext: any): void {
        this.setState({
            titre: this.state.titre || nextProps.entry.titre || '',
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
                        placeholder="Ex: viande ou salade."
                        onChange={onChange}
                        value={this.state.titre}
                        required
                    />
                </Col>
            </Form.Group>
        </>;
    }
};
