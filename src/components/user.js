import React from "react";

function User({ user }) {
  return (
    <div className="user">
      <h3>{user.name}</h3>
      <h4>{user.username}</h4>
      <h4>{user.email}</h4>
      <p>{user.address.city}</p>
      <p>{user.phone}</p>
      <p>{user.website}</p>
      <p>{user.company.name}</p>
    </div>
  );
}

export default User;
