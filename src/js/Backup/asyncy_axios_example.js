import { applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from  "axios";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state=initialState, action) => {
   switch(action.type) {
      case "FETCH_USERS_START": {
        return {...state, fetching: true}
        break;
      }

      case "FETCH_USERS_ERROR": {
        return {...state, fetching: false, error: action.payload}
        break;
      }
      case "RECEIVE_USERS": {
        return {...state, fetching: false, fetched: true, users: action.payload}
        break;
      }
   }

  return state
}

const middleware = applyMiddleware(thunk, logger())
const store = createStore(reducer, middleware)


//store.subscribe(() => {
  //console.log("Store changed", store.getState())
//})

//async actions

store.dispatch((dispatch) => {
  dispatch({type: "FETCH_USERS_START"})
  axios.get('https://jsonplaceholder.typicode.com/todos')
  .then(function (response) {
    // handle success
   // console.log(response);
     dispatch({type: "RECEIVE_USERS", payload: response.data})
  })
  .catch(function (error) {
    // handle error
    //console.log(error);
    dispatch({type: "FETCH_USERS_ERROR", payload: error})
  })
  .then(function () {
    // always executed
  });

  //do somthing async
  
})