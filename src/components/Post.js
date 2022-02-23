import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./Header";

export default function Post() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setData(res.data);
      setLoading(false);
    });
  });

  return (
    <div className="task">
      <Header />
      {loading ? (
        "loading..."
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
}
