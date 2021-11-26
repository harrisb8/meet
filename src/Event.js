import React, { Component } from "react";

class Event extends Component {
    state= {
        collapsed: true
    };

    render() {
        const {event}=this.props;
        const showDescription= this.state.collapsed? "d-none":"";

        return <div className='event'>
            <h3>{event.summary}</h3>
            <button  onClick={() => this.setState({collapsed: !this.state.collapsed})}>hide details</button>
            <div className={`${showDescription} event-description`}>{event.description}</div>
        </div>;
    }
}
export default Event;