import React, { Component } from 'react';

class numberOfEvent extends Component {
    changeHandler= (e) => {
        this.props.changeNumberOfEvents(undefined, e.target.value);
    }

    render() {
        return ( 
            <div className= "numberOfEvent">
                <h3>Number of Events</h3>
                <input className='events' value={this.props.numberOfEvents} type='number' onChange={this.changeHandler}/>
            </div>
        );
    }
};

export default numberOfEvent;