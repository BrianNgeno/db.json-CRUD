import React, { useState } from "react";
import Name from "./Name";

function NameLists({ users, addUsers,deleteUser }) {
  const [name, setName] = useState("");

  // update the state variable name
  const onChangeUser = (e) => {
    setName(e.target.value);
  };

  // submit to db.json
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
      <form onSubmit={submitFunction}>
        <input name="name" onChange={onChangeUser} />
        <input type="submit" value="Submit" />
      </form>

      {users.map((user) => (
        <Name key={user.id} user={user} deleteUser={deleteUser} id={user.id}/>
      ))}
    </>
  );
}

export default NameLists;
