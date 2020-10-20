import { Component } from 'react';
import ReactDOM from 'react-dom';

/** Компонент портала */
class Portal extends Component {
    portalElement: HTMLDivElement;

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.portalElement = this.createPortalElement();
    }

    createPortalElement() {
        const element = document.createElement('div');
        element.setAttribute("class", "portal");
        return element;
    }

    componentDidMount() {
        document.body.appendChild(this.portalElement);
    }

    componentWillUnmount() {
        document.body.removeChild(this.portalElement);
    }

    render() {
        const { children } = this.props;
        return ReactDOM.createPortal(children, this.portalElement);
    }
}

export default Portal;