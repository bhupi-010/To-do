import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

const User = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="task">
      <Header />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UserName</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => {
            const { id, name, username } = dat;
            return (
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{username}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
