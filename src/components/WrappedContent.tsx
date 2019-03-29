import $ from 'jquery';
import {Component, ComponentClass, default as React} from 'react';
import {Omit, RouteComponentProps} from 'react-router';  // noqa

const setUpPopovers = () => {
    setTimeout(() => {
        const selected = $('.pop');
        selected.popover({
            trigger: 'hover',
            placement: 'auto',
            content: function (this: Element) {
                const content = this.attributes.getNamedItem('role');
                return content ? content.value : '';
            },
        });
    }, 100);
};

export default
function <T extends {className?: string}>(ParentComponent: ComponentClass<T>): ComponentClass<T, void> {

    return class extends Component<T, void> {
        componentDidMount(): void {
            setUpPopovers();
        }

        public render() {
            return (
                <div>
                    <ParentComponent className={this.props.className} {...this.props}/>
                </div>
            );
        }
    }
}
