import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import NameLists from "./components/NameLists";

function App() {
  // const [names,setNames] = useState("")
  // const [attendance,setAttendance]= useState(false)
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    fetch("http://localhost:3000/Users")
      .then((r) => r.json())
      .then((data) => setUsers(data));
    console.log(users);
  };

  function addUsers(newUser){
    const newUserObject = [...users,newUser]
    setUsers(newUserObject)
  }
  function deleteUser(id){
    const newUserObject = users.filter(user => user.id !== id)
    setUsers(newUserObject)
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App ">
      <NameLists users={users} addUsers={addUsers} deleteUser={deleteUser} />
    </div>
  );
}

export default App;
