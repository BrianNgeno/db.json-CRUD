import React, { useState } from "react";
import Name from "./Name";

function NameLists({ users, addUsers,deleteUser }) {
  // created a state object to save the name 
  const [name, setName] = useState("");

  // pick input field value using onChange 
  const onChangeUser = (e) => {
    setName(e.target.value);
  };

  // Adding user to db.json "POST"
  const submitFunction = (e) => {
    e.preventDefault();
    const userObj = {
      name: name,
      attendance: false,
    };
    fetch("http://localhost:3000/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObj),
    })
      .then((r) => r.json())
      .then((data) => addUsers(data));
  };

  

  return (
    <>
    {/* form for our user input */}
      <form onSubmit={submitFunction}>
        <input name="name" onChange={onChangeUser} />
        <input type="submit" value="Submit" />
      </form>
      {/* mapping through the user data */}
      {users.map((user) => (
        <Name key={user.id} user={user} deleteUser={deleteUser} id={user.id}/>
      ))}
    </>
  );
}

export default NameLists;
