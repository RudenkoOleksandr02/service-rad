import {galleryAPI} from "../api/api";

const SET_GALLERY = 'SET_GALLERY'

const initialState = {
    gallery: []
};


const contactsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_GALLERY:
            return {
                ...state,
                gallery: action.payload
            };
        default:
            return state;
    }
};

export default contactsReducer;

export const setGallery = (payload) => ({ type: SET_GALLERY, payload });

export const getGallery = () => async (dispatch) => {
    try {
        const data = await galleryAPI();
        dispatch(setGallery(data));
    } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
    }
};