import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/formAction';
//import { FormStep } from '../../types/enums/formStep';
//import { ProgressBarPercentage } from '../../types/enums/progressBarPercentage';

interface FormState {
    firstName: string,
    lastName: string,
    reference: string,
    step: string
}

const initialState: FormState = {
    firstName: '',
    lastName: '',
    reference: '',
    step: "form"
};

const formReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(actions.updateFirstName, (state, action) => {
            state.firstName = action.payload;
        })
        .addCase(actions.updateLastName, (state, action) => {
            state.lastName = action.payload;
        })
        .addCase(actions.updateReference, (state, action) => {
            state.reference = action.payload;
        })
        .addCase(actions.updateStep, (state, action) => {
            state.step = action.payload;
        })
});

export default formReducer;