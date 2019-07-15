import React from "react";
import { Link } from "react-router-dom";

function BrandBanner() {
  return (
    <Link to="/" >
      <img
        src="assets/title.svg"
        alt="logo"
        width="100%"
        height="auto"
        style={{ position: "relative", width: "15vw" }}
      />
      <h1
        style={{
          position: "absolute",
          bottom: ".8rem",
          textAlign: "center",
          width: "100%",
          fontSize: "2.8rem",
          letterSpacing: ".2rem",
          lineHeight: "2.5rem",
          color: "black"
        }}
      >
        BRITNEY
        <br />
        BOB
      </h1>
    </Link>
  );
}

export default BrandBanner;
