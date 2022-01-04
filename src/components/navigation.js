import React from "react";

const Navigation = () => {
  return (
    <nav className="mobile-nav hide-on-desktop">
      <ul>
        <li>
          <box-icon name="home"></box-icon>
          Home
        </li>
        <li>
          <box-icon name="group"></box-icon>' About
        </li>
        <li>
          <div>
            <box-icon name="detail"></box-icon> <span>Hot</span>
          </div>
          Promotions
        </li>
        <li>
          <box-icon name="book-bookmark"></box-icon>Blog
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
