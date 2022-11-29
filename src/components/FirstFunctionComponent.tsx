import React from "react";

interface IFirstFunctionComponentProps {
  title: string;
  onPushData: (msg: string) => void;
}

const FirstFunctionComponent: React.FC<IFirstFunctionComponentProps> = 
  (props) => {
    const handleClick = (evt: React.MouseEvent<HTMLButtonElement>) => {
      evt.preventDefault();
      props.onPushData("Buon Natale");
    };

    return (<div>
      <h1>{ props.title } to the First Function Component</h1>
      <button onClick={handleClick}>Click Me!</button>
    </div>);
  };

export default FirstFunctionComponent;
