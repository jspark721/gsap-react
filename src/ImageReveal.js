import React, { useEffect, useRef, useState } from "react";
import "./App.scss";
import { TweenMax, Power3 } from "gsap";
import Seattle from "./images/felipe-galvan-seattle.jpg";

const ImageReveal = () => {
  return (
    <section className="main">
      <div className="container">
        <>
          <div className="img-container">
            <img src={Seattle} />
          </div>
        </>
      </div>
    </section>
  );
};

export default ImageReveal;
