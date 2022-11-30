import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import User from '../models/User'

// interface IUserRowProps {
//   user: User;
// }

// export const UserRow: React.FC<IUserRowProps> = (props) => {

export const UserRow = (props: { user: User }) => {
  const { user } = props; // OBJECT DESTRUCTURING

  return (<tr>
    <td>{user.id}</td>
    <td>{user.fullName}</td>
    <td>{user.userName}</td>
    <td>{user.isManager ? (
      <FontAwesomeIcon icon={faCheck} color={"crimson"} size={"lg"} />
    ) : "" }</td>
  </tr>);
}
