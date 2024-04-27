import {faqAPI} from "../api/api";

const SET_FAQ = 'SET_FAQ'

const initialState = {
    faq: []
};


const faqReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FAQ:
            return {
                ...state,
                faq: action.payload
            };
        default:
            return state;
    }
};

export default faqReducer;

export const setFaq = (payload) => ({ type: SET_FAQ, payload });

export const getFaq = () => async (dispatch) => {
    try {
        const data = await faqAPI();
        dispatch(setFaq(data));
    } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
    }
};