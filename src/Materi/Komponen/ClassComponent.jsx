import React from "react";

class ClassComponent extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this. state = {
    //         value :0
    //     }

    //     this.handlePlus = this.handlePlus.bind(this);
    //     this.handleMinus = this.handleMinus.bind(this);

    // }

    state ={
        value: 0
    }

    handlePlus=() => {
        this.setState({value: this.state.value +1});
    }
    handleMinus=()=> {
        if(this.state.value > 0) {

            this.setState({value: this.state.value -1});

        }
    }

    render() {
        return (
            <div>
                 <h1> Class Component</h1>
                 <p> ini adalah Class Component dari React </p>
                 <p> Perkenalkan Saya { this.props.nama}</p>
                 <button onClick={this.handleMinus}>  - </button>
                 <span>{'    '} {this.state.value} {'    '}</span>
                 <button onClick={this.handlePlus}> + </button>
            </div>
        )
    }
}

export default ClassComponent;
