import React from "react";
import { connect }  from "react-redux";
import { fetchUser } from "../actions/userActions";
import { fetchTweets } from "../actions/tweetsActions";

@connect((store) => {
  return {
    user: store.user.user,
    tweets: store.tweets.tweets
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser());
    this.props.dispatch(fetchTweets());
  } 
  
  render() {
    const { user, tweets } = this.props;
    //var jdata = [];
    //jdata = tweets.tweets;
    console.log(user.name)
    const mappedData = tweets.map(data => <li>{data.id}.{data.title}</li>);
    return <div>
         <h2>JSONP API Data</h2> 
         <h4>Name: {user.name}</h4> 
         <h4>Age: {user.age}</h4>          
         <hr />
         <ul>{mappedData}</ul> 
      </div>
 }


}