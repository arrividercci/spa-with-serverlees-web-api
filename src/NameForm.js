import { useState, Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./nameForm.css"
class Nameform extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: ""
        }

    }
    
    onValueChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.name.length <= 0) return;
        this.props.onNameInput(this.state.name);
        this.setState({
            name: ""
        })
    }
    render() {
        const name = this.state.name;
        return (
            <div className="app-add-form">
                    <h3>Enter your name</h3>
                    <form className="add-form d-flex">
                        <input type="text" 
                            placeholder="What is his name?" 
                            name="name"
                            value={name}
                            className="form-control new-post-label" 
                            onChange={this.onValueChange}/>
                        <button type="submit" className="btn btn-light" onClick={this.onSubmit}>Say Hello</button>
                    </form>
                </div>
        );
    }
}

export default Nameform;