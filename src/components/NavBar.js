import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  // optional chaining ?.
  const newlinks = links?.map((link, index) => {
    return (
      <a key={index} href={`#${link}`}>
        {link}
      </a>
    );
  })
  console.log(newlinks)
  return <nav>{newlinks}</nav>;
}

export default NavBar;
