import { loadFeature, defineFeature } from 'jest-cucumber';
import numberOfEvent from '../NumberOfEvent';
import React from 'react';
import { mount, shallow } from "enzyme";
import { mockData } from "../mock-data";
import App from "../App";
import NumberOfEvent from "../NumberOfEvent";
import EventList from "../EventList";

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
   test('When user has not specified a number, 32 is the default number.', ({ given, when, then }) => {
       let AppWrapper;
        given("the user hasn't specified a number of events to display", () => {
            AppWrapper = mount(<App />);
            AppWrapper.setState({numberOfEvent});
        })
        when("the search is executed", () => {
            AppWrapper.udate();
        })  
        then("the search result will display 32 results, which is the default number", () => {
            expect(AppWrapper.find(".event")).toHaveLength (32);
        });
   });
   
    test('User can change the number of events they want to see.',({ given, when, then}) => {
        given("the user decides to see a different number of events in the search results", () => {
            AppWrapper = mount(<App />);
            AppWrapper.setState({numberOfEvent});
        });
        when("the user types a number", () => {
            const numberOfEventsWrapper = AppWrapper.find(NumberOfEvent);
            numberOfEventsWrapper
              .find("input")
              .simulate("change", { target: { value: 20 } });
        })
        then("the search results will display event details", () => {
            expect(AppWrapper.state("numberOfEvents")).toEqual();
        });
    });
});