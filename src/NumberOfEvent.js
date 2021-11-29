import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class numberOfEvent extends Component {
    state = {
        numberOfEvent: 32,
    //changeHandler= (e) => {
      //  this.props.changeNumberOfEvents(undefined, e.target.value);
        errorText: '',
    }

    handleInputChange = (event) => {
        const value = event.target.value;
        //this.props.updateEvents(null, value);
        this.props.updateNumberOfEvent(event.target.value);
        this.setState({ numberOfEvent: value });

        if (parseInt(value) < 0 || parseInt(value) > 32) {
            this.setState({
                errorText: "",
            })
        }else {
            this.setState({
                errorText: 'Select number from 1 to 32',
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