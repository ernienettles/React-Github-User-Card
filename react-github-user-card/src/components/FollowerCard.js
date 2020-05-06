import React, { Component } from "react";
import {
  Card, CardText, CardBody,
  CardTitle, CardHeader, Col,
  CardImg, CardLink
} from 'reactstrap';

class FollowerCard extends Component {
  render() {
    return (
        this.props.followers.map(follower => {
          return (
            <Col xl="5">
              <Card>
                <CardBody>
                  <CardImg top width="30%" src={follower.avatar_url} alt="Github User" />
                  <CardTitle>{follower.name}</CardTitle>
                  <CardText>Username: {follower.login}</CardText>
                  <CardText>Location: {follower.location}</CardText>
                  <CardText>
                    Profile: <CardLink href={follower.html_url}>{follower.html_url}</CardLink>
                  </CardText>
                  <CardText>Followers: {follower.followers}</CardText>
                  <CardText>Following: {follower.following}</CardText>
                  <CardText>Bio: {follower.bio}</CardText>
                </CardBody>
              </Card>
            </Col>
          )
        })
    )
  }
}

export default FollowerCard;
