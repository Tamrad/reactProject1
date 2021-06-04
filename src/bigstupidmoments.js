import React, {Component} from 'react';
import { contextTheme } from './App';

export default class Bigstupidmoments extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            num: props.initialCount
        }
    }

    render() {
        return (
            <contextTheme.Consumer>
                { style => (
                    <div>
                    <button style = {style} onClick={() => this.changeNum(-1)}>-</button>
                    <span>{this.state.num}</span>
                    <button style = {style} onClick={() => this.changeNum(1)}>+</button>
                   </div>
                )}
            </contextTheme.Consumer>
        );
    }

    changeNum(oof) {
        this.setState(prevState => { 
            return { num: prevState.num + oof } 
        });
    }
}