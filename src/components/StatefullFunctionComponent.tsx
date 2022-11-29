import React, { useState } from "react";
import User from "../models/User";

interface IStatefullPropsComponentProps {
  user: User;
}

const StatefullFunctionComponent: React.FC<IStatefullPropsComponentProps> = (
  props
) => {
  const [user, setUser] = useState(props.user);
  const [detailsShowing, setDetailsShowing] = useState(false);
  const [visibilityLabel, setVisibilityLabel] = useState("Show");

  const handleToggle = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    setDetailsShowing(!detailsShowing);
    setVisibilityLabel(visibilityLabel === "Show" ? "Hide" : "Show");
  };

  return (
    <div>
      <h3>User {user.id} Details</h3>
      <button onClick={handleToggle}>{visibilityLabel}</button>
      { detailsShowing ? (
        <div>
          <h3>Username: {user.userName}</h3>
          <h3>Full name: {user.fullName}</h3>
          <h3>Password: {user.password}</h3>
          <h3>Salary: {user.salary}</h3>
        </div>
      ) : (<div>Fatti gli affari tuoi!</div>)}
    </div>
  );
};

export default StatefullFunctionComponent;
