import {productsAPI} from "../api/api";

const SET_PRODUCTS = 'SET_PRODUCTS';
const DELETE_PRODUCTS = 'DELETE_PRODUCTS';

const initialState = {
    categoryName: '',
    products: []
};

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload.products,
                categoryName: action.payload.categoryName
                
            };
        case DELETE_PRODUCTS:
            return {
                ...state,
                products: []
            };
        default:
            return state;
    }
};

export default productsReducer;

export const deleteProducts = () => ({ type: DELETE_PRODUCTS });
export const setProducts = (payload) => ({ type: SET_PRODUCTS, payload });

export const getProducts = (link) => async (dispatch) => {
    try {
        dispatch(deleteProducts())
        const data = await productsAPI(link);
        dispatch(setProducts(data));
    } catch (error) {
        console.error('Ошибка при загрузке категорий:', error);
    }
};
