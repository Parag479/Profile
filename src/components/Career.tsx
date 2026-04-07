import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Tech Lead Frontend Developer</h4>
                <h5>Indzone Pvt Ltd</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Architected Next.js applications using component-based architecture.
              Improved SEO performance by 35% using SSR and SSG. Reduced TTFB by
              40% and implemented CI/CD pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Clover Infotech Pvt Ltd</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Built enterprise-scale applications using React.js, JavaScript,
              HTML5, CSS3, and Python. Integrated RESTful APIs, achieved 90+
              Lighthouse scores, and reduced API rework by 30%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Code Hub Technologics</h5>
              </div>
              <h3>2020</h3>
            </div>
            <p>
              Developed responsive dashboards using React.js. Improved UX with
              lazy loading and SEO practices.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Developer</h4>
                <h5>Pacific Consulting (SIDBI Bank)</h5>
              </div>
              <h3>2019</h3>
            </div>
            <p>
              Built dashboards using Chart.js and increased user engagement by
              25%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Digimedia Today</h5>
              </div>
              <h3>2018</h3>
            </div>
            <p>
              Developed SEO-optimized WordPress websites and reduced page load
              time by 50%.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>Type A Thought</h5>
              </div>
              <h3>2017</h3>
            </div>
            <p>
              Built PHP + MySQL + WordPress websites. Delivered mobile-first
              responsive UI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
