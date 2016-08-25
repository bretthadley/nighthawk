/**
 * Created by Brett Hadley on 25/08/2016.
 */
import React, { PropTypes } from 'react';
import cx from 'classnames';
import styles from './style/TextInput.scss';

export default
class TextInput extends React.Component {
    static propTypes = {
        className: PropTypes.string
    };

    isValid(value) {
        return value !== '' && value !== undefined && value !== null;
    }

    state = {
        isValid: true,
        hasValue: false,
        inputFocused: false
    };

    handleFocus = (e) => {
        console.log('FOCUS');

        this.setState({
            inputFocused: true
        });

        if (this.props.onFocus) this.props.onFocus(e);
    };

    handleBlur = (e) => {
        console.log('BLUR');

        this.setState({
            inputFocused: false
        });

        if (this.props.onBlur) this.props.onBlur(e);
    };

    handleInputChange = (e) => {
        const valid = this.isValid(e.target.value)

        this.setState({
            isValid: valid,
            hasValue: valid
        });
        if (this.props.onChange) this.props.onChange(e, e.target.value);
    };

    render() {
        const {
            className,
            id,
            name,
            labelText
        } = this.props;

        const classnames = cx({
            [styles['text-input']]: true,
            [styles['text-input']]: true,
            [className]: className
        });

        const inputClassnames = cx({
            [styles.input]: true,
            [styles.active]: this.state.inputFocused || this.state.hasValue,
            [styles.error]: !this.state.isValid
        });

        const labelClassnames = cx({
            [styles.label]: true,
            [styles.active]: this.state.inputFocused || this.state.hasValue,
            [styles.error]: !this.state.isValid
        });

        return (
            <div className={classnames}>
                <input
                    name={name}
                    id={id}
                    className={inputClassnames}
                    onChange={this.handleInputChange}
                    onFocus={this.handleFocus}
                    onBlur={this.handleBlur}
                />
                <label className={labelClassnames} htmlFor={id} >{labelText}</label>
            </div>
        );
    }
}
