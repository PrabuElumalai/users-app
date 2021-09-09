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
  // retrieve user data from dummyapi
  const retriveUsers = async () => {
    const response = await api.get("/data/v1/user/?limit=50", headers);
    return response.data.data;
  };
  const retriveUser = async (allUsers) => {
    for (var i = 0; i < allUsers.length; i++) {
      console.log(allUsers[i].id);
      if (allUsers[i].id) {
        const response = await api.get("/data/v1/user/" + allUsers[i].id, headers);
        const { id, title, firstName, lastName, picture, gender, email, phone, registerDate, dateOfBirth } = response.data;
        allUsers[i] = response.data;
        allUsers[i].location["countryFlag"] = null;

      }
    }
    // if (allUsers) setUsers(allUsers);
    // console.log(allUsers);

    return allUsers;
  };
  const checkData = async (allUsers) => {
    for (var i = 0; i < allUsers.length; i++) {
      console.log(allUsers[i].location.city);
      if (allUsers[i].location.city) {
        const response = await api.get("http://api.geonames.org/searchJSON?formatted=true&q=" + allUsers[i].location.city + "&maxRows=10&username=prabuelumalai20");
        console.log(response);
        if (response.data.geonames.length > 0) {
          const countryVal = response.data.geonames.filter((city) => {
            return city.countryName === allUsers[i].location.country ? true : false;
          });
          console.log(countryVal);
          allUsers[i].location.countryFlag = countryVal.length > 0 ? true : false;
        }

      }
    }
    console.log(allUsers);
    if (allUsers) setUsers(allUsers);
    return allUsers;
  };
  useEffect(() => {
    const getUsers = async () => {
      const allUsers = await retriveUsers();
      //if (allUsers) setUsers(allUsers);
      retriveUser(allUsers).then(function () {
        checkData(allUsers);
      });

    };
    getUsers();

  }, []);

  useEffect(() => {

  }, [users]);

  return (
    <section>
      <div>
        <Header />
         <UserList users={users} />
        <Footer />
         </div>
    </section>
  );
}

export default App;
