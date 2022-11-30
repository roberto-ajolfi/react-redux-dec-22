import React from 'react'
import { useParams } from 'react-router-dom';

// interface IDetailsRouteParams {
//   id: string;
// }

const Details = () => {
  const params = useParams<{ id: string }>();

  return (
    <div>Details of Item with ID = {params.id}</div>
  )
}

export default Details;