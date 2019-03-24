import * as React from 'react';
import {ChangeEvent, Component} from "react";

export default class InlineEdit
        extends Component<IInlineEditProps, IInlineEditState> {

    private currentInputValue = '';

    public constructor(props: IInlineEditProps) {
        super(props);

        this.state = {
            isInEditMode: false,
            value: props.initialValue
        };
    }

    private onTextInputChange(event: ChangeEvent<HTMLInputElement>): void {
        this.currentInputValue = event.target.value.trim();
    }

    private onTextSubmitted() {
        const newValue = this.currentInputValue || this.state.value;

        // Toggle off the edit mode
        // and set the display value to the input one
        this.setState({
            isInEditMode: false,
            value: newValue
        });

        // Propagate
        this.props.onEdited(newValue);
    }

    private renderInput(): any {
        return (
            <div className="InlineEdit">

                <input type={this.props.type}
                       defaultValue={this.state.value}
                       onChange={this.onTextInputChange.bind(this)} />

                <button type="submit"
                        onClick={this.onTextSubmitted.bind(this)}>
                    Submit
                </button>

            </div>
        );
    }

    private renderDisplay(): any {
        return (
            <div className="InlineEdit"
                 onClick={() => this.setState({ isInEditMode: true })}>

                <p>{ this.state.value || '😩' }</p>

            </div>
        )
    }

    public render(): any {
        return this.state.isInEditMode ? this.renderInput() : this.renderDisplay();
    }
}
