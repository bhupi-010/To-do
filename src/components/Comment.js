import axios from "axios";
import React, { useState, useEffect } from "react";
import Header from "./Header";

export default function Comment() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/comments`).then((res) => {
      setData(res.data);
    });
  });

  return (
    <div className="task">
      <Header />
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>BODY</th>
          </tr>
        </thead>
        <tbody>
          {data.map((dat) => {
            const { name, email, body } = dat;
            return (
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{body}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
