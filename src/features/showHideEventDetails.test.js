import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideEventDetails.feature');

defineFeature(feature, test => {
    test('An event element is collapsed by default.', ({ }) => {

    });
    test('User can expand an event to see its details.', ({ }) => {

    });
    test('User can collapse an event to hide its details.', ({ }) => {

    });
});