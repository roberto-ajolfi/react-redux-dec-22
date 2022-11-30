import React, { useState } from "react";
// import './App.css';
import FirstClassComponent from "./components/FirstClassComponent";
import FirstFunctionComponent from "./components/FirstFunctionComponent";
import StatefullClassComponent from "./components/StatefullClassComponent";
import User from "./models/User";
import { v4 as uuid } from 'uuid'
import StatefullFunctionComponent from "./components/StatefullFunctionComponent";
import UserList from "./components/UserList";
import LifecycleClassComponent from "./components/LifecycleClassComponent";
import LifecycleFunctionComponent from "./components/LifecycleFunctionComponent";

// JSX
const App: React.FC = () => {
  const handleCallBack = () => alert("Mi hanno invocato");

  const handleCallBackWithData = (msg: string) =>
    alert(`Mi hanno invocato con ${msg}`);

  const userData: User = new User(
    uuid(),
    "rossim",
    "123456",
    "Mario Rossi",
    1000,
    false
  );

  const users: User[] = [
    userData,
    new User(uuid(), "bianchip", "123456", "Paolo Bianchi", 3000, true)
  ];

  const [mount, setMount] = useState(true);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          {/* <FirstClassComponent 
            title="Benvenuti" 
            onPushData={handleCallBack} 
          /> */}
          { mount && <LifecycleClassComponent /> }
        </div>
        <div className="col-6">
          {/* <FirstFunctionComponent
            title="Benvenuti"
            onPushData={handleCallBackWithData}
          /> */}
          { mount && <LifecycleFunctionComponent /> }
        </div>
      </div>
      <div className="row"><div className="col-12">
        <button onClick={() => setMount(!mount)}>Toggle Component</button>
      </div></div>
      <div className="row">
        <div className="col-6">
          <StatefullClassComponent user={userData}/>
        </div>
        <div className="col-6">
          <StatefullFunctionComponent user={userData} />
        </div>
      </div>
      <div className="row"><div className="col-12">&nbsp;</div></div>
      <div className="row">
        <div className="col-12">
          <UserList users={users}>
            <h1>
              <span>Users' List</span>
            </h1>
          </UserList>
        </div>
      </div>
    </div>
  );
};

export default App;
