import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import api from "../api/users";
import './App.css';
import Footer from "./Footer";
import Header from "./Header";
import UserList from "./UserList";

function App() {

  const [users, setUsers] = useState([]);
  const headers = { "headers": { "app-id": "6133558887895dca3fdc9a03" } };
  // retrieve cuser data from dummyapi
  const retriveUsers = async () => {
    const response = await api.get("/data/v1/user?limit=50", headers);
    //console.log(response.data.data);
    return response.data.data;
  };
  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await retriveUsers();
      if (allUsers) setUsers(allUsers);
      //console.log(allUsers);
    };
    getUsers();

  }, []);

  useEffect(() => {

  }, [users]);

  return (
    <section>
      <div>
        {/* <Router> */}
          <Header />
          {/* <Switch> */}
          {/* <Route path="/" exact component={UserList} />  */}
          <UserList users={users}/>
         {/* </Switch> */}
          <Footer />
        {/* </Router> */}
      </div>
    </section>
  );
}

export default App;
