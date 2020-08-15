import React from "react";
import Styles from "./navbar.module.scss";
import { Link } from "gatsby";

const Navbar = () => (
  <div className={Styles.navigation}>
    <ul>
      <li>
        <a href="http://localhost:7777/">강의</a>
      </li>

      <li>
        <Link to="/blogs/">블로그</Link>
      </li>
      <li>
        <Link to="/about/">제 소개</Link>
      </li>

      <li>
        <Link to="/contact/">Contact</Link>
      </li>
    </ul>
  </div>
);

export default Navbar;
