import React, { Component, PropTypes } from 'react';
import { unstable_renderSubtreeIntoContainer, unmountComponentAtNode } from 'react-dom'; // eslint-disable-line

export default class DisownChildren extends Component {
    static propTypes = {
        container: PropTypes.string
    };

    componentDidMount() {
        this.renderLayer();
    }

    componentDidUpdate() {
        this.renderLayer();
    }

    componentWillUnmount() {
        this.unrenderLayer();
    }

    getLayer() {
        return this.layer;
    }

    getChildren(children) {
        if (children) {
            return (
                <div className="disown-root">{children}</div>
            );
        }

        return null;
    }

    unrenderLayer() {
        if (!this.getLayer()) {
            return;
        }

        unmountComponentAtNode(this.getLayer());
        document.body.removeChild(this.getLayer());
        this.layer = null;
    }

    renderLayer() {
        const {
            children,
            container
        } = this.props;
        const element = this.getChildren(children);

        if (!this.getLayer()) {
            if (container) {
                this.layer = document.getElementById(container);
            } else {
                this.layer = document.createElement('div');
                document.body.appendChild(this.layer);
            }
        }

        if (element) {
            unstable_renderSubtreeIntoContainer(this, element, this.getLayer());
        } else {
            this.unrenderLayer();
        }
    }

    render() {
        return null;
    }
}
