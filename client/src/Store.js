import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import  {userReducer} from "./Redux/reducer/userReducer"
import { yogaClassesReducer,classDetailsReducer } from "./Redux/reducer/yogaClassReducer";

const reducer = combineReducers({
    user: userReducer,
    classes:yogaClassesReducer,
    classDetails:classDetailsReducer
  });
  
  let initialState = {};
  
  const middleware = [thunk];
  
  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  
  export default store;