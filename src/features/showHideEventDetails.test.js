import { loadFeature, defineFeature } from 'jest-cucumber';
import { mount, shallow } from "enzyme";
import React from "react";
import { mockData } from "../mock-data";
import EventList from "../EventList";
import Event from "../Event";

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ given, when, then }) => {
        let EventListWrapper = shallow(<EventList events={mockData} />);
        expect(EventListWrapper.find("ul.EventList")).toHaveLength(1);
    });

    when("a user looks at the list of events", () => {});

    then("the user should see that each event is collapsed by default", () => {
        let EventWrapper = shallow(<Event event={mockData[0]} />);
        let showDescription = EventWrapper.find(".event .showDescription");
        expect(showDescription.hasClass("hide")).toBe(true);
    });
});

    test('User can expand an event to see its details.', ({ given, when, then }) => {
        let EventWrapper;
        given("a list of collasped events on the page", () => {
            EventWrapper = shallow(<Event event={mockData[0]} />);
            expect(EventWrapper.state("collapsed")).toEqual(true);
        });

        when("the user clicks on the Show detail button of an event element", () => {
            const eventDetails = EventWrapper.find(".eventDetails");
            eventDeatails.simulate("click");
        })
    });
        then("the event element expands, showing the event's details", () => {
            expect(EventWrapper.state("collapsed")).toEqual(false);
        });


    test('User can collapse an event to hide its details.', ({ given, when, then }) => {
        let EventWrapper;
        given("an expanded event is displayed", () => {
        EventWrapper = shallow(<Event event={mockData[0]} />);
        EventWrapper.setState({ collapsed: false });
    });

    when("the user clicks on the button to hide the event", () => {
        EventWrapper.find("eventDetails").simulate("click");
    });

    then("the event collaspes, hiding the details from the event", () => {
        expect(EventWrapper.state("collapsed")).toBe(true);
    });

});