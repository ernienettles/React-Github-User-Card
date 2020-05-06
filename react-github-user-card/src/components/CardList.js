import React, { Component } from "react";
import axios from "axios";
import FollowerCard from "./FollowerCard";
import UserCard from "./UserCard";

class CardList extends Component {
  constructor() {
    super();

    this.state = {
      user: "",
      followers: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://api.github.com/users/ernienettles")
      .then((res) => {
        this.setState({ user: res.data });
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`https://api.github.com/users/ernienettles/followers`)
      .then((res) => {
        res.data.forEach(follower => {
          axios
          .get(follower.url)
          .then(res => {
              this.setState({ followers: [ ...this.state.followers, res.data ] })
          })
        })
      })
      .catch(err => {
          console.log(err)
        });
  }

  render() {
    return (
      <div className="card-list">
        <UserCard user={this.state.user} />
        <FollowerCard followers={this.state.followers} />
      </div>
    );
  }
}

export default CardList;
