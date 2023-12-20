import React from "react";

export const Footer = ({length}) => {
  return (
    <footer>
      <p>{length}{length===1?"item":"itemes"}</p>
    </footer>
  );
};
export default Footer;
