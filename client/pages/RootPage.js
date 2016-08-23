/**
 * Created by Brett Hadley on 17/08/2016.
 */
import React from 'react';
import { Navigation } from '../components/Navigation';

export default function HomePage(props) {
    return (
        <div>
            <Navigation />
            {props.children}
        </div>
    );
}
