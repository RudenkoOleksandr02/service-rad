import {servicesAPI} from "../api/api";

const SET_SERVICES = 'SET_SERVICES'

const initialState = {
    services: []
};


const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERVICES:
            return {
                ...state,
                services: action.payload
            };
        default:
            return state;
    }
};

export default servicesReducer;

export const setServices = (payload) => ({ type: SET_SERVICES, payload });

export const getServices = () => async (dispatch) => {
    try {
        const data = await servicesAPI();
        dispatch(setServices(data));
    } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
    }
};