import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import config from "../../config";

const Dashboard = () => {
  const [dashboard, setDashboard] = useState([]);
  const [username, setUsername] = useState(null);
  const history = useHistory();

  const logout = () => {
    /* eslint-disable */
    const toLogout = confirm("Are you sure to logout ?");
    /* eslint-enable */
    if (toLogout) {
      localStorage.clear();
      history.push("/login");
    }
  };

  useEffect(() => {
    let userDetails = JSON.parse(localStorage.getItem('token'));
    let url = '';
    if(userDetails.role == 'EMPLOYEE'){
      setUsername(userDetails.role);
      url = `${config.baseUrl}/user/${userDetails.id}`
    }else{
      url = `${config.baseUrl}/user`
    }
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //"auth-token": localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) =>{
        console.log(data)
        data.error ? history.push("/login") : setDashboard(data)
      });
  }, [history]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/dashboard">
                Dashboard <span className="sr-only">(current)</span>
              </a>
            </li>
            
          </ul>
          <span
                className="nav-link cursor-pointer"
                onClick={() => logout()}
              >
                Logout
              </span>
          
        </div>
      </nav>
      <div className="px-3">
       
          {username === 'EMPLOYEE' ? (
        <div className="container">
          <div className="row col-lg-5 offset-3 mt-5">
            <div className="col-lg-6">Name</div>
            <div className="col-lg-6">{dashboard.map(data => data.name)}</div>
            <div className="col-lg-6">Email</div>
            <div className="col-lg-6">{dashboard.map(data => data.email)}</div>
            <div className="col-lg-6">Role</div>
            <div className="col-lg-6">{dashboard.map(data => data.role)}</div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="row col-lg-5 offset-3 mt-5">
          <table className="table table-striped ">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
            {dashboard.map(data => {
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.role}</td>
              </tr>
              )})}
            </tbody>
          </table>       
      </div>
        </div>
      )}
      </div>
    </>
  );
};

export default Dashboard;
