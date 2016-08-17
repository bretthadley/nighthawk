/**
 * Created by brett.hadley on 12/05/2016.
 */
import React from 'react';
import styles from './page.scss';
import { Cta } from '../';

export default function Page(props) {
    console.log('wefwesf', props)
    return (
        <div className={styles.page}>
            <Cta ctaType="primary">Hello</Cta>
            {props.children}
        </div>
    );
}
