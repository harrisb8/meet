import { render } from 'enzyme';
import React, { Component } from 'react';

class NumberOfEvents extend Component {
    render() {
        return
            <div className= "App">
                <h3>Number of Events</h3>
                <EventList events={this.state.eventCount} />
            </div>
    }
};