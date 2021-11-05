import React from 'react';
import { shallow } from 'enzyme';
import Event from '../Event';
import { mockData } from '../mock-data';

describe('<Event /> component', () => {
    let eventWrapper;
    let event = mockData[0];

    beforeAll(() => {
        eventWrapper = shallow(<Event event={event} />);
    })

    test('show details on expansion', () => {
        eventWrapper.setState({collasped: true})
        expect(eventWrapper.find(".event-description").hasClass("d-none").toEqual(true))
    });
});