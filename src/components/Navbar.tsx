import { useEffect, type MouseEvent as ReactMouseEvent } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

const Navbar = () => {
  const handleNavClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (window.innerWidth <= 1024) return;

    const section = event.currentTarget.dataset.href;
    const currentSmoother = ScrollSmoother.get();

    if (!section || !currentSmoother) return;

    event.preventDefault();
    currentSmoother.scrollTo(section, true, "top top");
  };

  useEffect(() => {
    const currentSmoother =
      ScrollSmoother.get() ??
      ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.7,
        speed: 1.7,
        effects: true,
        autoResize: true,
        ignoreMobileResize: true,
      });

    currentSmoother.scrollTop(0);
    currentSmoother.paused(true);

    const handleResize = () => {
      ScrollSmoother.refresh(true);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);

      if (ScrollSmoother.get() === currentSmoother) {
        currentSmoother.kill();
      }
    };
  }, []);
  return (
    <>
      <div className="header">
        <a href="#" className="navbar-title" data-cursor="disable">
          PD
        </a>
        <a
          href="mailto:pdubey479@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          pdubey479@gmail.com
        </a>
        <ul>
          <li>
            <a data-href="#about" href="#about" onClick={handleNavClick}>
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a
              data-href="#certificates"
              href="#certificates"
              onClick={handleNavClick}
            >
              <HoverLinks text="CERTIFICATES" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work" onClick={handleNavClick}>
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact" onClick={handleNavClick}>
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
