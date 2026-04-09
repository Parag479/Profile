import { MdArrowOutward, MdWorkspacePremium } from "react-icons/md";
import "./styles/Certificates.css";

interface Certificate {
  title: string;
  issuer: string;
  focus: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: "React - The Complete Guide (incl. Next.js, Redux)",
    issuer: "Udemy",
    focus: "React, Next.js, Redux",
    link: "https://www.udemy.com/certificate/UC-f593a5f2-6f89-44e2-8ff8-23c1c02a9abd/",
  },
  {
    title: "React Front To Back",
    issuer: "Udemy",
    focus: "React fundamentals, frontend workflows",
    link: "https://www.udemy.com/certificate/UC-fc3b4201-3ba8-4572-8833-a8c9a9b55add/",
  },
  {
    title: "Generative AI",
    issuer: "Certification",
    focus: "AI learning and upskilling",
    link: "https://lnkd.in/dxpv_XRm",
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section section-container" id="certificates">
      <div className="certificates-header">
        <div>
          <p className="certificates-eyebrow">Continuous Learning</p>
          <h2>
            Featured <span>Certificates</span>
          </h2>
        </div>
        <p className="certificates-copy">
          Ongoing learning across modern React development and emerging AI tools,
          showcased with direct credential links.
        </p>
      </div>

      <div className="certificates-grid">
        {certificates.map((certificate, index) => (
          <article className="certificate-card" key={certificate.title}>
            <div className="certificate-card-top">
              <span className="certificate-index">0{index + 1}</span>
              <span className="certificate-badge">
                <MdWorkspacePremium />
                Verified
              </span>
            </div>

            <div className="certificate-card-body">
              <p className="certificate-issuer">{certificate.issuer}</p>
              <h3>{certificate.title}</h3>
              <p className="certificate-focus">{certificate.focus}</p>
            </div>

            <a
              className="certificate-link"
              href={certificate.link}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
            >
              <span>View Certificate</span>
              <MdArrowOutward />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
