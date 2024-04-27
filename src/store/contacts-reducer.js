import {contactsAPI} from "../api/api";

const SET_CONTACTS = 'SET_CONTACTS'
const DELETE_CONTACTS = 'DELETE_CONTACTS'

const initialState = {
    contacts: []
};


const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case DELETE_CONTACTS:
            return {
                ...state,
                contacts: []
            };
        default:
            return state;
    }
};

export default contactsReducer;

export const setContacts = (payload) => ({ type: SET_CONTACTS, payload });

export const getContacts = () => async (dispatch) => {
    try {
        const data = await contactsAPI();
        dispatch(setContacts(data));
    } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
    }
};