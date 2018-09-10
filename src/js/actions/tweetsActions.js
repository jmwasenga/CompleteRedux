import axios from "axios";
export function fetchTweets() {
    return function(dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/todos")
           .then((response) => {
               dispatch({type: "FETCH_TWEETS_FULFILLED", payload: response.data})
           })
           .catch((error) => {
               dispatch({type: "FETCH-TWEETS_REJECTED", payload: error})
           })
    }
}

export function addTweet(id, text) {
    return {
        type: "ADD_TWEET",
        payload: {
            id,
            text,
        },
    }
}

export function updateTweet(id, text) {
    return {
        type: "UPDATE_TWEET",
        payload: {
            id,
            text,
        },
    }
}

/*
export function deleteTweet(id) {
    return {
         type: "DELETE_TWEET",
          payload: id,
        },
}
*/