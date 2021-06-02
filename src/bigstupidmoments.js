import React, {Component} from 'react';

export default class Bigstupidmoments extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            num: props.initalCount
        }
    }

    render() {
        return (
            <div>
                {console.log(this.state.num)}
                <button onClick={() => this.changeNum(-1)}>-</button>
                <span>{this.state.num}</span>
                <button onClick={() => this.changeNum(1)}>+</button>
            </div>
        );
    }

    changeNum(oof) {
        this.setState(prevState => { 
            return { num: prevState.num + oof } 
        });
    }
}