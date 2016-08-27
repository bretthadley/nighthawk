/**
 * Created by Brett Hadley on 25/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/TextInput.scss';

export default
class TextInput extends React.Component {
    static propTypes = {
        componentType: PropTypes.string,
        className: PropTypes.string
    };

    static defaultProps = {
        componentType: 'input'
    };

    state = {
        isValid: true,
        hasValue: false,
        inputFocused: false
    };

    isValid(value) {
        return value !== '' && value !== undefined && value !== null;
    }

    handleFocus = (e) => {
        this.setState({
            inputFocused: true
        });

        if (this.props.onFocus) this.props.onFocus(e);
    };

    handleBlur = (e) => {
        this.setState({
            inputFocused: false
        });

        if (this.props.onBlur) this.props.onBlur(e, e.target.value);
    };

    handleInputChange = (e) => {
        const valid = this.isValid(e.target.value);

        this.setState({
            isValid: valid,
            hasValue: valid
        });
        if (this.props.onChange) this.props.onChange(e, e.target.value);
    };

    render() {
        const {
            componentType,
            className,
            id,
            name,
            labelText,
            required,
            ...others
        } = this.props;

        const Element = componentType;
        const classnames = cx({
            [styles['text-input']]: true,
            [styles['text-input']]: true,
            [className]: className
        });

        const inputClassnames = cx({
            [styles.input]: true,
            [styles.active]: this.state.inputFocused || this.state.hasValue,
            [styles.error]: required && !this.state.isValid
        });

        const labelClassnames = cx({
            [styles.label]: true,
            [styles.active]: this.state.inputFocused || this.state.hasValue,
            [styles.error]: required && !this.state.isValid
        });

        return (
            <div className={classnames}>
                <Element
                    name={name}
                    id={id}
                    className={inputClassnames}
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                    {...others}
                />
                <label className={labelClassnames} htmlFor={id} >{labelText}</label>
            </div>
        );
    }
}
