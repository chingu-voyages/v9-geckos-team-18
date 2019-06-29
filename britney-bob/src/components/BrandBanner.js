import React from "react";

function BrandBanner() {
  return (
    <div>
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
          lineHeight: "2.5rem"
        }}
      >
        BRITNEY<br />BOB
      </h1>
    </div>
  );
}

export default BrandBanner;
