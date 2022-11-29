import React from "react";
// import './App.css';
import FirstClassComponent from "./components/FirstClassComponent";
import FirstFunctionComponent from "./components/FirstFunctionComponent";
import StatefullClassComponent from "./components/StatefullClassComponent";
import User from "./models/User";
import { v4 as uuid } from 'uuid'
import StatefullFunctionComponent from "./components/StatefullFunctionComponent";

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

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <FirstClassComponent 
            title="Benvenuti" 
            onPushData={handleCallBack} 
          />
        </div>
        <div className="col-6">
          <FirstFunctionComponent
            title="Benvenuti"
            onPushData={handleCallBackWithData}
          />
        </div>
      </div>
      <div className="row"><div className="col-12">&nbsp;</div></div>
      <div className="row">
        <div className="col-6">
          <StatefullClassComponent user={userData}/>
        </div>
        <div className="col-6">
          <StatefullFunctionComponent user={userData} />
        </div>
      </div>
    </div>
  );
};

export default App;
