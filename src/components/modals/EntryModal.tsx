import * as React from 'react';
import {Component} from 'react';
import {Modal} from 'react-bootstrap';
import {IEntryModalProps} from '../../interfaces';

export default class EntryModal extends Component<IEntryModalProps, never> {
    public constructor(props: IEntryModalProps) {
        super(props);
    }

    private renderPropsTable() {
        return <table className="w-100">
            <tbody>
            {this.props.fields.map((key, index) => {
                const value = this.props.entry[key];
                if (value) {
                    return <tr key={index}>
                        <td className="font-weight-bold">{key}</td>
                        <td>{value}</td>
                    </tr>
                }
                return;
            })}
            </tbody>
        </table>
    }

    public render(): any {
        return <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
            <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                    {this.props.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    this.props.detailsTemplate
                        ? this.props.detailsTemplate(this.props.entry, this.renderPropsTable)
                        : this.renderPropsTable()
                }
            </Modal.Body>
        </Modal>;
    }
}
