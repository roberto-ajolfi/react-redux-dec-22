import React, { Component } from "react";

interface IFirstClassComponentProps {
  title: string;
  onPushData: () => void;
}

export default class FirstClassComponent 
    extends Component<IFirstClassComponentProps> {

  private handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    this.props.onPushData();
  };

  render(): JSX.Element {
    return(<div>
      <h1>{ this.props.title } to the First Class Component</h1>
      <button onClick={this.handleClick}>Click Me!</button>
      <button onClick={ () => this.props.onPushData() }>Click Me!</button>
      <button onClick={ this.props.onPushData }>Click Me!</button>
    </div>);
  }
}