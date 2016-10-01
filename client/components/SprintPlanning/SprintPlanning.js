import React, { Component, PropTypes } from 'react';
import cx from 'classnames';
import { StoryListContainer } from '../../containers';
import { Grid, GridColumn, GridContainer } from '../Grid';
import styles from './style/SprintPlanning.scss';

export default class SprintPlanning extends Component {
    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {

    };

    render() {
        const {
            className
        } = this.props;

        const classnames = cx({
            [className]: className
        });

        return (
            <div className={classnames}>
                <h1>SPRINT PLANNINNG</h1>
                <StoryListContainer sprintId={this.props.sprintId} />
            </div>
        );
    }
}
