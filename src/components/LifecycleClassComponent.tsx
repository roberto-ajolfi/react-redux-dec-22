import React, { Component } from 'react'
import { v4 as uuid } from 'uuid';

export default class LifecycleClassComponent extends Component {
  state = { message: "Ciao" };

  render() {
    return (
      <div>
        <div>LifecycleClassComponent { this.state.message }</div>
        <button onClick={() => this.setState({ message: uuid() })}>Click me</button>
      </div>
    )
  }

  componentDidMount(): void {
    console.log("[CLASS] Mount");
    // QUI VANNO LE CHIAMATE API per caricamento iniziale
  }
  
  componentWillUnmount(): void {
    console.log("[CLASS] Unmount");
    console.log("[CLASS] UnAltra Operazione");
  }

  shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{ message: string }>, nextContext: any): boolean {
    if(this.state.message !== nextState.message) {
      console.log("[CLASS] Message è Cambiato");
    }

    console.log("[CLASS] Altra Operazione");

    return true;
  }
}