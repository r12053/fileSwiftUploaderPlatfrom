import React from "react";
import "./footer.css";

// component to display footer
const Footer = () => {
  return (
    <footer>
      <div className="name">
        <span style={{ fontWeight: "500" }}>Built By</span> Ankur
      </div>
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/ankur-2a3802244/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Link to Linkedin Profile"
          title="LinkedIn"
        >
          <i className="lni lni-linkedin-original"></i>
        </a>

        <a
          href="https://leetcode.com/ank117/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Link to LeetCode Profile"
          title="Twitter"
        >
          <i className="lni lni-code"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
