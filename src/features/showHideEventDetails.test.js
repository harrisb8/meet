import { loadFeature, defineFeature } from 'jest-cucumber';
import React from 'react';
import App from '../App';
import { mockData } from '../mock-data';
import { mount, shallow } from 'enzyme';
import Events from '../Event.js';
import EventList from '../EventList';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ }) => {
        let EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find("ul.EventList")).toHaveLength(1);
    }); 
    });
    test('User can expand an event to see its details.', ({ }) => {
        let EventWrapper = shallow(<Event event={mockData[0]} />);
        let extraDetails = EventWrapper.find(".event");
        expect(extraDetails.hasClass("showDescription")).toBe(false);
    });
    test('User can collapse an event to hide its details.', ({ }) => {
      EventWrapper = shallow(<Event event={mockData[0]} />);
      expect(EventWrapper.state("collapsed")).toEqual(true);
    });
