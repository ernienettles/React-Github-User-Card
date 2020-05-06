import React, { Component } from 'react';

class UserCard extends Component {
    render() {
        return (
            <div className="user-card">
                <img src={this.props.user.avatar_url} alt="Github User" />
                <h1>{this.props.user.name}</h1>
                <p>Username: {this.props.user.login}</p>
                <p>Location: {this.props.user.location}</p>
                <p>
                    Profile: <a href={this.props.user.html_url}>{this.props.user.html_url}</a>
                </p>
                <p>Followers: {this.props.user.followers}</p>
                <p>Following: {this.props.user.following}</p>
                <p>Bio: {this.props.user.bio}</p>
            </div>
        );
    }
}

export default UserCard;