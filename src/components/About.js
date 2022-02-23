import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";

const About = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState("showButton");

  const fetchPost = () => {
    setUser("loading");
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setData(res.data);
      setUser("getdata");
    });
  };

  return (
    <div className="task">
      <Header />
      {user === "showButton" ? (
        <button onClick={fetchPost}> get User</button>
      ) : user === "loading" ? (
        <div>Loading...</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>BODY</th>
            </tr>
          </thead>
          <tbody>
            {data.map((dat) => {
              const { id, title, body } = dat;

              return (
                <tr>
                  <td>{id}</td>
                  <td>{title}</td>
                  <td>{body}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default About;
