import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const slides = [
    {
      heading: "FITNESS",
      subheading: "TRAINING",
      title: "N E O G Y M",
      text: "It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. He wants to be in pleasure when he criticizes the two or the pain.",
      buttonLabel: "CONTACT US",
    },
    {
      heading: "FITNESS",
      subheading: "TRAINING",
      title: "N E O G Y M",
      text: "It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. He wants to be in pleasure when he criticizes the two or the pain.",
      buttonLabel: "CONTACT US",
    },
    {
      heading: "FITNESS",
      subheading: "TRAINING",
      title: "N E O G Y M",
      text: "It is important to take care of the patient, to be followed by the patient, but it will happen at such a time that there is a lot of work and pain. For to come to the smallest detail, no one should practice any kind of work unless he derives some benefit from it. He wants to be in pleasure when he criticizes the two or the pain.",
      buttonLabel: "CONTACT US",
    },
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <center>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="slider">
              <div
                className="slides"
                style={{ transform: `translateX(${-index * 100}%)` }}
              >
                {slides.map((slide, slideIndex) => (
                  <div key={slideIndex} className="slide">
                    <h4 className="fw-bold">{slide.heading}</h4>
                    <h2 className="fw-bold">{slide.subheading}</h2>
                    <h1 className="fw-bold">{slide.title}</h1>
                    <p className="mt-2 fw-bold">{slide.text}</p>
                    <button className="px-5 fw-semibold mt-4">
                      {slide.buttonLabel}
                    </button>
                  </div>
                ))}
              </div>
              <div className="navigation mt-5">
                <button className="prev" onClick={prevSlide}></button>
                <button className="next" onClick={nextSlide}></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </center>
  );
};

export default HeroSection;
