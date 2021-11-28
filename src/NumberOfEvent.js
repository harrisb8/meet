import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class numberOfEvent extends Component {
    state = {
        numberOfEvent: 32,
    //changeHandler= (e) => {
      //  this.props.changeNumberOfEvents(undefined, e.target.value);
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        this.props.updateEvents(null, value);
        this.setState({ numberOfEvent: value });

        if (value < 1 || value > 32) {
            this.setState({
                errorText: "Select number from 1 to 32",
            })
        }else {
            this.setState({
                errorText: '',
            });
        }
    };

    render() {
        return ( 
            <div className= "numberOfEvent">
                <h3>Number of Events</h3>
                <input 
                  className='events' 
                  value={this.props.numberOfEvent} 
                  type="number" 
                  onChange={this.handleInputChanged}/>
                <ErrorAlert text={this.state.errorText} />
            </div>
        );
    }
};

export default numberOfEvent;