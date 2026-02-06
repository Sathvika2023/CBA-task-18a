import React from "react";
import UserCard from "./UserCard";
import "./UserProfile.css";

function UserProfile() {

  const loggedInUser = {
    name: "Sathvika Reddy",
    email: "sathvika@email.com",
    role: "Frontend Developer"
  };

  return (
    <div className="container">
      <h1 className="title">Logged-in User Profile</h1>

      <UserCard
        name={loggedInUser.name}
        email={loggedInUser.email}
        role={loggedInUser.role}
      />
    </div>
  );
}

export default UserProfile;
