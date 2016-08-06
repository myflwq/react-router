import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import axios from 'axios';
import github from './Account/GitSearch';
import isEmpty from 'lodash/isEmpty';
import UserInfo from './Account/UserInfo';
import Repos from './Account/Repos';

class Account extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  _handleSubmit(e) {
    e.preventDefault();
    const account = this.refs.account.getValue();
    github.getGithubInfo(account)
      .then((data) => {
        this.setState({
          user: data.user,
          repos: data.repos
        });
      });
  }
  render() {
    let GitHubInfo;

    if(!isEmpty(this.state.user)) {
      GitHubInfo = (
        <div>
          <UserInfo userInfo={this.state.user} />
          <Repos repos={this.state.repos} />
          <RaisedButton
            style={{display: 'block', margin: '0 auto', width: '180px'}}
            primary={true}
            label="save" />
        </div>
      );
    }
    return (
      <div className='account'>
        <Card className="content">

          <form onSubmit={this._handleSubmit.bind(this)}>
            <TextField hintText="Your Github Account"
                       ref="account"/>
            <FlatButton label="Search Github"
                        type="submit"
                        primary={true}/>
          </form>
          { GitHubInfo }
        </Card>
      </div>
    );
  }
}

export default Account;
