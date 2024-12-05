// src/components/UserProfile/UserProfile.js

import React from "react";
import styles from "./UserProfile.module.css";

function UserProfile() {
  return (
    <div className={`${styles.container} bg-gray-100 p-8 mx-auto my-20 rounded-lg shadow-lg`}>
      <img
        src="https://via.placeholder.com/150"
        alt="User"
        className={`${styles.image} w-36 h-36 mx-auto rounded-full`}
      />
      <h1 className={`${styles.heading} text-xl text-blue-800 my-4`}>John Doe</h1>
      <p className={`${styles.description} text-gray-600 text-base`}>
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;
