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
  
  const headersExcel = {
    dateOfBirth: "Date of Birth",
    email: "Email",
    firstName: "First Name",
    gender: "Gender",
    id: "Id",
    lastName: "Last Name",
    location: "Location",
    city: "City",
    country: "Country",
    state: "State",
    street: "Address",
    timezone: "Time Zone",
    phone: "Contact",
    picture: "Image URL",
    registerDate: "Created On",
    title: "Title",
    updatedDate: "Updated On",
    countryFlag:"Error"
  };

  const fileTitle = 'All Users'; // or 'my-unique-title'
  // retrieve user data from dummyapi
  const retriveUsers = async () => {
    const response = await api.get("/data/v1/user/?limit=50", headers);
    return response.data.data;
  };
  const retriveUser = async (allUsers) => {
    for (var i = 0; i < allUsers.length; i++) {
      if (allUsers[i].id) {
        const response = await api.get("/data/v1/user/" + allUsers[i].id, headers);
        const { id, title, firstName, lastName, picture, gender, email, phone, registerDate, dateOfBirth } = response.data;
        allUsers[i] = response.data;
        allUsers[i].location["countryFlag"] = null;

      }
    }
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
        //exportCSVFile(headersExcel, allUsers, fileTitle);
      });

    };
    getUsers();

  }, []);

  useEffect(() => {

  }, [users]);



  function convertToCSV(objArray) {
    var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    var str = '';

    for (var i = 0; i < array.length; i++) {
        var line = '';
        for (var index in array[i]) {
            if (line != '') line += ','

            line += array[i][index];
        }

        str += line + '\r\n';
    }

    return str;
}

  function exportCSVFile(headers, items, fileTitle) {
    if (headers) {
      items.unshift(headers);
    }

    // Convert Object to JSON
    var jsonObject = JSON.stringify(items);
    var csv = this.convertToCSV(jsonObject);
    var exportedFilenmae = fileTitle + '.csv' || 'export.csv';

    var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, exportedFilenmae);
    } else {
      var link = document.createElement("a");
      if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", exportedFilenmae);
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  //exportCSVFile(headersExcel, users, fileTitle);
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
