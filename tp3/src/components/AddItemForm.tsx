import * as React from 'react';
import {ChangeEvent, Component, FormEvent} from 'react';
import {Button, Form} from 'react-bootstrap';

export default class AddItemForm
    extends Component<IAddItemFormProps, IAddItemFormState> {

    public constructor(props: IAddItemFormProps) {
        super(props);
        this.state = {
            currentText: ""
        }
    }

    private onFormSubmit(event: FormEvent<HTMLFormElement>) {
        // Don't let the browser handle the submit event
        event.preventDefault();

        // Propagate the submitted text
        this.props.onAddItem({
            name: this.state.currentText,
            cost: 0,
            quantity: 1
        });

        // Empty the input text
        this.setState({
            currentText: ""
        });
    }

    private onTextChanged(event: ChangeEvent<HTMLInputElement>): void {
        this.setState({
            currentText: event.target.value
        });
    }

    public render(): any {
        return (
            <Form className="AddItemForm" onSubmit={this.onFormSubmit.bind(this)} inline>
                <input
                    className="form-control"
                    type="text"
                    placeholder="New item name..."
                    value={this.state.currentText}
                    onChange={this.onTextChanged.bind(this)} />

                <Button type="submit">Add</Button>
            </Form>
        );
    }
}
