import { loadFeature, defineFeature } from 'jest-cucumber';
import numberOfEvent from '../NumberOfEvent';

const feature = loadFeature('./src/features/specifyNumberOfEvents.feature');

defineFeature(feature, test => {
   test('When user has not specified a number, 32 is the default number.', ({ }) => {

   });
   
    test('User can change the number of events they want to see.',({ }) => {

    });
});