import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <h1>To-do App</h1>
      <Link to="/task" className="link">
        Task
      </Link>
      <Link to="/about" className="link">
        About
      </Link>
      <Link to="/user" className="link">
        user
      </Link>
      <Link to="/post" className="link">
        post
      </Link>
      <Link to="/comment" className="link">
        Comment
      </Link>
      <Link to="/test" className="link">
        Test
      </Link>
    </div>
  );
};
export default Header;
