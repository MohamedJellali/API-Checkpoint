import "./App.css";
import axios from "axios";
import React, { useState, useEffect } from "react";
import UserList from "./components/userList";

function App() {
  const [data, setData] = useState();
  const [error, setError] = useState(null);
  const request = axios.get("https://jsonplaceholder.typicode.com/users");

  useEffect(() => {
    request.then((res) => setData(res.data)).catch((err) => setError(err));
  }, []);
  console.log("data", data);

  if (!error) {
    return (
      <div className="App">
        <h1>CONTACTS</h1>
        <UserList data={data} />
      </div>
    );
  } else {
    return { error };
  }
}

export default App;
