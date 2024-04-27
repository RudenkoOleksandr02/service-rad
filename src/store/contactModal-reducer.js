const SET_CONTACT_ACTIVE = 'SET_CONTACT_ACTIVE'
const SET_CONTACT_TEXT = 'SET_CONTACT_TEXT'

const initialState = {
    isContactActive: false,
    text: ''
};


const contactModalReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTACT_ACTIVE:
            return {
                ...state,
                isContactActive: action.boolean
            };
        case SET_CONTACT_TEXT:
            return {
                ...state,
                text: action.text
            }
        default:
            return state;
    }
};

export default contactModalReducer;

export const setContactModalActive = (boolean) => ({type: SET_CONTACT_ACTIVE, boolean})
export const setContactModalText = (text) => ({type: SET_CONTACT_TEXT, text})

