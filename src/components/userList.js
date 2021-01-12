import React from "react";
import User from "./user";
import "./components.css";

function UserList({ data }) {
  return (
    <div className="list">
      {console.log("test affichage", data)}
      {data.map((user) => {
        return <User key={user.id} user={user} />;
      })}
    </div>
  );
}

export default UserList;
