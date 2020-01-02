// ./src/components/Div.js
import React from 'react';

// const TextContext = React.createContext();
import { TextContext } from './../context';

export default class Div extends React.Component {
    render() {
        const {Consumer} = TextContext;

        return (
            <Consumer>
                { context => <div>{ context }</div> }
            </Consumer>
            
        )
    }
}