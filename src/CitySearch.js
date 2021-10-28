import React, { Component } from 'react';

state = {
    query: '',
  }

class CitySearch extends Component {
    render() {
        return (
            <div className="CitySearch">
                <input
                    type="text"
                    className="city"
                    value={this.state.query}
                />
                <ul className="suggestions">
                    
                </ul>
            </div>
        );
    }
}

export default CitySearch;