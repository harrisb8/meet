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
        given("The user has not clicked on the number of search results shown next to the actually search bar", () => {
            AppWrapper = mount(<App />);
            AppWrapper.setState({numberOfEvent});
        })
        when("The user enters a search", () => {
            AppWrapper.udate();
        })  
        then("Only 32 results are shown for that search since the user did not choose how many results they wanted to see", () => {
            expect(AppWrapper.find(".event")).toHaveLength (32);
        });
   });
   
    test('User can change the number of events they want to see.',({ given, when, then}) => {
        given("While using the search, users can choose how many results they would like to be displayed", () => {
            AppWrapper = mount(<App />);
            AppWrapper.setState({numberOfEvent});
        });
        when("When the uses clicks on the number of search result next to the search bar", () => {
            const numberOfEventsWrapper = AppWrapper.find(NumberOfEvent);
            numberOfEventsWrapper
              .find("input")
              .simulate("change", { target: { value: 20 } });
        })
        then("The search results will show the amount that the user choose for it to display at one time.", () => {
            expect(AppWrapper.state("numberOfEvents")).toEqual();
        });
    });
});