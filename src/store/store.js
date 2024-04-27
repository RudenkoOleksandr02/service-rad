import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import {thunk} from "redux-thunk";
import categoriesReducer from "./categories-reducer";
import productsReducer from "./products-reducer";
import contactsReducer from "./contacts-reducer";
import faqReducer from "./questions-reducer";
import contactModalReducer from "./contactModal-reducer";
import successModalReducer from "./successModal-reducer";
import aboutReducer from "./about-reducer";
import servicesReducer from "./services-reducer";
import galleryReducer from "./gallery-reducer";

let reducers = combineReducers({
    categories: categoriesReducer,
    products: productsReducer,
    contacts: contactsReducer,
    faq: faqReducer,
    contactModal: contactModalReducer,
    successModal: successModalReducer,
    about: aboutReducer,
    services: servicesReducer,
    gallery: galleryReducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;