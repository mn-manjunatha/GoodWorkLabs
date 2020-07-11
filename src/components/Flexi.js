import React, { Component } from 'react';
import './Flexi.css'
import PropTypes from 'prop-types';

class Flexi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person_name: '',
            states: ''
        }
    }

    updateInputs = (event) => {
        const item = {
            id: this.props.config.length,
            person_name: this.state.person_name,
            states: this.state.states
        }

        this.props.onSubmit(item);

        this.setState({
            person_name: '',
            states: ''
        })
        event.preventDefault();
    }

    onPersonNameChange = (event) => {
        this.setState({ person_name: event.target.value });
    }

    onStateChange = (event) => {
        this.setState({
            states: event.target.value
        })
    }

    render() {
        return (
            <>
            <div className="container">
             <table >
                    <tbody>
                        <tr key="tablHeader">
                            <th>Person's Name</th>
                            <th>Person's state</th>
                        </tr>
                        {
                              this.props.config.map(item => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.person_name}</td>
                                        <td>{item.states}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <br/>
                <form onSubmit={this.updateInputs}>
                    <label htmlFor="person_name">Person's Name:<br/></label>
                    <input id="person_name" type='text' placeholder="Person's Name" onChange={this.onPersonNameChange} required value={this.state.person_name} /><br />

                    <label htmlFor="states">Person's state<br/></label> 
                    <select id="states" ref={this.states} value={this.state.states} required  onChange={this.onStateChange} >
                        <option value="" disabled  hidden>Person's state</option>
                        {/* <option value="" disabled selected>Person's state</option> */}
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Kerala">Kerala</option>
                        <option value="TamilNadu">Tamil Nadu</option>
                    </select>
                    <br/>
                    <button type="submit">submit</button>
                </form>
                </div>   
            </>
        );
    }
}

Flexi.propTypes = {
    config:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        person_name:PropTypes.string,
        states:PropTypes.string,
      }))
};

export default Flexi;