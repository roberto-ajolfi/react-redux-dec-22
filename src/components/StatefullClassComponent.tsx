import React, { Component } from "react";
import User from "../models/User";
import '../App.css';

interface IStatefullClassComponentProps {
  user: User;
}

interface StatefullClassComponentState {
  user: User;
  detailsShowing: boolean;
  visibilityLabel: string;
}

export default class StatefullClassComponent extends Component<
  IStatefullClassComponentProps,
  StatefullClassComponentState
> {

  constructor(props: IStatefullClassComponentProps) {
    super(props);
    
    // state initialization
    this.state = {
      user: props.user,
      detailsShowing: false,
      visibilityLabel: "Show"
    };
  }

  handleToggle = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    this.setState((prevState) => {
      return { 
        detailsShowing: !prevState.detailsShowing,
        visibilityLabel: prevState.visibilityLabel === 'Show' ? 'Hide' : 'Show'
      };
    });
  };

  render() {
    const details = this.state.detailsShowing ? (<div className={this.state.detailsShowing ? "" : "hidden"}>
      <h3>Username: {this.state.user.userName}</h3>
      <h3>Full name: {this.state.user.fullName}</h3>
      <h3>Password: {this.state.user.password}</h3>
      <h3>Salary: {this.state.user.salary}</h3>
    </div>) : null;

    return (<div>
      <h3>User { this.state.user.id } Details</h3>
      <button onClick={this.handleToggle}>{ this.state.visibilityLabel }</button>
      {details}
    </div>);
  }
}
