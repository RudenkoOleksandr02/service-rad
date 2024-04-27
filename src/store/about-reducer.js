import {aboutAPI} from "../api/api";

const SET_CONTENT = 'SET_CONTENT'
const SET_PARTNERS = 'SET_PARTNERS'
const SET_REVIEWS = 'SET_REVIEWS'
const SET_AWARDS = 'SET_AWARDS'

const initialState = {
    content: [],
    partners: [],
    reviews: [],
    awards: []
};


const aboutReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTENT:
            return {
                ...state,
                content: action.payload
            };
        case SET_PARTNERS:
            return {
                ...state,
                partners: action.payload
            };
        case SET_REVIEWS:
            return {
                ...state,
                reviews: action.payload
            };
        case SET_AWARDS:
            return {
                ...state,
                awards: action.payload
            };
        default:
            return state;
    }
};

export default aboutReducer;

const setContent = (payload) => ({ type: SET_CONTENT, payload });
export const getContent = () => async (dispatch) => {
    try {
        const data = await aboutAPI.getContentApi();
        dispatch(setContent(data));
    } catch (error) {
        console.error('Ошибка при получении данных (about page):', error);
    }
};

const setPartners = (payload) => ({ type: SET_PARTNERS, payload });
export const getPartners = () => async (dispatch) => {
    try {
        const data = await aboutAPI.getPartnersApi();
        dispatch(setPartners(data));
    } catch (error) {
        console.error('Ошибка при получении данных (about page):', error);
    }
};
const setReviews = (payload) => ({ type: SET_REVIEWS, payload });
export const getReviews = () => async (dispatch) => {
    try {
        const data = await aboutAPI.getReviewsApi();
        dispatch(setReviews(data));
    } catch (error) {
        console.error('Ошибка при получении данных (about page):', error);
    }
};
const setAwards = (payload) => ({ type: SET_AWARDS, payload });
export const getAwards = () => async (dispatch) => {
    try {
        const data = await aboutAPI.getAwardsApi();
        dispatch(setAwards(data));
    } catch (error) {
        console.error('Ошибка при получении данных (about page):', error);
    }
};