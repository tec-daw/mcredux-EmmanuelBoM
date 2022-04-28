import { combineReducers } from "redux";
import counterReducer from "./counter";
import faqsReducer from "./faqs";
import lightReducer from "./light"


const rootReducer = combineReducers({
    counter: counterReducer,
    light: lightReducer,
    faqs: faqsReducer
})

export default rootReducer;