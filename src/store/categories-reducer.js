import { categoriesAPI } from "../api/api";

const SET_CATEGORIES = 'SET_CATEGORIES';
const DELETE_CATEGORIES = 'DELETE_CATEGORIES';

const initialState = {
    categories: []
};

const categoriesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            };
        case DELETE_CATEGORIES:
            return {
                ...state,
                categories: []
            };
        default:
            return state;
    }
};

export default categoriesReducer;

export const deleteCategories = () => ({ type: DELETE_CATEGORIES });
export const setCategories = (payload) => ({ type: SET_CATEGORIES, payload });

export const getCategories = () => async (dispatch) => {
    try {
        const data = await categoriesAPI();
        dispatch(setCategories(data));
    } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
    }
};
