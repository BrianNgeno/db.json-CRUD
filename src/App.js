import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import NameLists from "./components/NameLists";

function App() {
  // created a state object to save our users and intialized as an empty array
  const [users, setUsers] = useState([]);

  // fetching our user data from db.json
  const getUsers = () => {
    fetch("http://localhost:3000/Users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
    console.log(users);
  };

  // function to add new users to our state object 
  function addUsers(newUser){
    const newUserObject = [...users,newUser]
    setUsers(newUserObject)
  }

  // function to delete user from our state object... Note that they only update the state object at this point
  function deleteUser(id){
    const newUserObject = users.filter(user => user.id !== id)
    setUsers(newUserObject)
  }

  // ensures the fetch on getuser loads only once on the page render
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App ">
      {/* Linking the child component..passed down props to the NameList component */}
      <NameLists users={users} addUsers={addUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
