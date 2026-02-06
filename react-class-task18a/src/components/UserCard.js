import React from "react";
import "./UserProfile.css";

function UserCard(props) {
  return (
    <div className="card">
      <h2 className="name">{props.name}</h2>
      <p className="info"><strong>Email:</strong> {props.email}</p>
      <p className="role">{props.role}</p>
    </div>
  );
}

export default UserCard;
