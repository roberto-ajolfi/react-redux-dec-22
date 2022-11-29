import React from "react";
// import './App.css';
import FirstClassComponent from "./components/FirstClassComponent";
import FirstFunctionComponent from "./components/FirstFunctionComponent";

// JSX
const App: React.FC = () => {
  const handleCallBack = () => alert("Mi hanno invocato");

  const handleCallBackWithData = (msg: string) =>
    alert(`Mi hanno invocato con ${msg}`);

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
    </div>
  );
};

export default App;
