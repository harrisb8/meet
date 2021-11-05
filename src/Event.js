import React, { Component } from "react";

class Event extends Component {
    state= {
        collasped: true
    };

    render() {
        const {event}=this.props;
        const showDescription= this.state.collasped? "d-none":"",

        return <div>
            <h3>{event.summary}</h3>
            <button onClick={() => this.setState({collasped: !this.state.collasped})}>hide details</button>
            <div className={showDescription}>{event.description}</div>
        </div>;
    }
}
export default Event;