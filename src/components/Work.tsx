import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { assetPath } from "../utils/assetPath";

interface Project {
  title: string;
  category: string;
  tools: string;
  image: string;
  link: string;
  linkLabel?: string;
}

const projects: Project[] = [
  {
    title: "Farmitra (Bajaj Allianz)",
    category: "Agricultural Platform",
    tools: "Python, js, Javascript,android, Performance Optimization",
    image: assetPath("/images/farmitra.webp"),
    link: "https://play.google.com/store/apps/details?id=com.bagic.farmitra&hl=en_IN&pli=1",
    linkLabel: "View on Play Store",
  },
  {
    title: "Indzone Porfolio",
    category: "Company",
    tools: "React JS,Python,Html,Js,Css,Php,wordpress,AI/ML",
    image: assetPath("/images/indzone.webp"),
    link: "https://indzone.in/our-portfolio",
  },
  {
    title: "Magcoff",
    category: "Company",
    tools: "AI/ML",
    image: assetPath("/images/magcoff.webp"),
    link: "https://magcoff.com/",
  },
  {
    title: "Gratex",
    category: "Client Project",
    tools: "Html,Js,Css,Php",
    image: assetPath("/images/gratex.webp"),
    link: "https://www.gratex.in/",
  },
  
  {
    title: "Guar",
    category: "Client Project",
    tools: "Html,Js,Css,Php",
    image: assetPath("/images/guar.webp"),
    link: "https://www.gaursonsindia.com/platinum-towers-landing-page/",
  },
  {
    title: "Tender Fresh",
    category: "Client Project",
    tools: "Html,Js,Css,Php",
    image: assetPath("/images/tender.webp"),
    link: "http://www.tenderfreshicecreams.com/",
  },
  {
    title: "Ghar ho to Yesa",
    category: "Client Project",
    tools: "React, TypeScript, Styled Components",
    image: assetPath("/images/Ghar.webp"),
    link: "",
  },
  {
    title: "Pioneer",
    category: "Company",
    tools: "Html,Js,Css,Php",
    image: assetPath("/images/pioneer.webp"),
    link: "https://bimetalliclugs.in/pages/index.html",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="carousel-actions">
                          {project.link ? (
                            <a
                              className="project-link-button"
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="disable"
                            >
                              <span>{project.linkLabel ?? "View Project"}</span>
                              <MdArrowOutward />
                            </a>
                          ) : (
                            <span className="project-link-button project-link-button-disabled">
                              Link coming soon
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>

          <p className="portfolio-legal-note">
            Client names, product names, logos, and screenshots belong to their
            respective owners and are shown only to identify past work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
