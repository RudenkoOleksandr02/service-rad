const SET_SUCCESS_ACTIVE = 'SET_SUCCESS_ACTIVE'

const initialState = {
    isSuccessActive: false
};


const successModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SUCCESS_ACTIVE:
            return {
                ...state,
                isSuccessActive: action.boolean
            };
        default:
            return state;
    }
};

export default successModalReducer;

export const setSuccessModalActive = (boolean) => ({type: SET_SUCCESS_ACTIVE, boolean})

