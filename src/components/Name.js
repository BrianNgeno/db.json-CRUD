import React from "react";

function Name({ user,deleteUser, id }) {
  
  // Function to delete our user 
  function deleteData(){
    fetch(`http://localhost:3000/Users/${id}`,{
      method:"DELETE"
    })
    deleteUser(id);
  }

  return (
    <>
      <div>{user.name}</div>
      <input type="checkbox" checked={user.attendance} />
      <button className="btn" onClick={deleteData}  >Delete</button>
    </>
  );
}

export default Name;
