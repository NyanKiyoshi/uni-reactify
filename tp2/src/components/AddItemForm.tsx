import * as React from 'react';
import {ChangeEvent, Component, FormEvent} from 'react';

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
        this.props.onAddItem(this.state.currentText);

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
            <form className="AddItemForm" onSubmit={this.onFormSubmit.bind(this)}>
                <input type="text" placeholder="New entry text..."
                       onChange={this.onTextChanged.bind(this)} value={this.state.currentText} />
                <button type="submit">Add</button>
            </form>
        );
    }
}
