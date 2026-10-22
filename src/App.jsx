
import "./App.css";
import myPhoto from "./assets/ismail.jpg";

const projects = [
  {
    number: "01",
    name: "Ace Hill Electronics",
    category: "BUSINESS WEBSITE",
    description:
      "An electronics business website that helps customers explore products, discover services, and make enquiries through WhatsApp.",
    tech: ["React", "JavaScript", "CSS"],
    link: "https://acehillonlinemarket.co.ke/",
    label: "Visit live website",
  },
  {
    number: "02",
    name: "SpendWise",
    category: "PERSONAL FINANCE",
    description:
      "A personal budget tracker project focused on helping users organize expenses and understand their spending.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/idleismail70-oss/personal-budget-tracker",
    label: "View project",
  },
  {
    number: "03",
    name: "Smart Hospital Queue",
    category: "WEB APPLICATION",
    description:
      "A queue management system project designed to improve patient flow and make hospital visits more organized.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    link: "https://github.com/idleismail70-oss",
    label: "Explore my GitHub",
  },
];

const skills = [
  "JavaScript",
  "React",
  "HTML & CSS",
  "Python",
  "SQL & MySQL",
  "Git & GitHub",
  "Responsive Design",
  "REST API Fundamentals",
];

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="logo" href="#home">
          ismail<span>.</span>dev
        </a>

        <nav>
          <a href="#work">Projects</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">
            Let's talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="availability">
              <span className="status-dot" />
              SOFTWARE ENGINEER · WEB DEVELOPER
            </div>

            <h1>
              I build digital
              <br />
              experiences that
              <br />
              <span>mean something.</span>
            </h1>

            <p className="hero-description">
              I'm Ismail Idle, a software engineer passionate about
              building useful web applications and helping businesses
              establish their presence online.
            </p>

            <div className="hero-actions">
              <a className="button-primary" href="#work">
                Explore my work <span>↗</span>
              </a>
              <a className="button-secondary" href="#contact">
                Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span>BASED IN KENYA</span>
              <span className="meta-line" />
              <span>BUILDING FOR THE WEB</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-glow" />

            <div className="profile-photo-frame">
              <img
                src={myPhoto}
                alt="Ismail Idle Mohamed, Software Engineer"
                className="profile-photo"
              />

              <div className="photo-caption">
                <span className="status-dot" />
                <div>
                  <strong>Ismail Idle</strong>
                  <p>Software Engineer · Web Developer</p>
                </div>
              </div>
            </div>

            <div className="floating-tag tag-top">
              {"<"} Code with purpose {"/>"}
            </div>

            <div className="floating-tag tag-bottom">
              ✳ &nbsp; Always learning
            </div>
          </div>
        </section>

        <section className="work-section section" id="work">
          <div className="section-heading">
            <div>
              <span className="eyebrow">SELECTED WORK</span>
              <h2>
                Projects I've worked on<span>.</span>
              </h2>
            </div>
            <a
              className="text-link"
              href="https://github.com/idleismail70-oss"
              target="_blank"
              rel="noreferrer"
            >
              More on GitHub ↗
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-category">
                    {project.category}
                  </span>
                </div>

                <div className="project-symbol">
                  {project.number === "01"
                    ? "↗"
                    : project.number === "02"
                      ? "◫"
                      : "⌘"}
                </div>

                <h3>{project.name}</h3>
                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.label} <span>↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section section" id="about">
          <span className="eyebrow">A LITTLE ABOUT ME</span>
          <h2>
            Technology should solve real problems<span>.</span>
          </h2>

          <div className="about-content">
            <p>
              I'm a software engineer from Kenya who enjoys turning ideas
              into practical digital experiences. My work combines web
              development, problem-solving, and an interest in how
              technology can help businesses serve people better.
            </p>

            <p>
              I'm continuously improving my engineering skills, building
              projects, and exploring AI engineering. I value clean code,
              learning by doing, and creating products with a clear purpose.
            </p>
          </div>
        </section>

        <section className="skills-section section" id="skills">
          <span className="eyebrow">MY TOOLKIT</span>
          <h2>
            Technologies I work with<span>.</span>
          </h2>

          <p className="section-description">
            Tools and technologies I use or am developing experience with.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-item" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="contact-section section" id="contact">
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>
            Let's build something
            <br />
            <span>worth talking about.</span>
          </h2>

          <p>
            Need a website for your business, have a project idea, or want
            to discuss an opportunity? I'd like to hear from you.
          </p>

          <div className="contact-actions">
            <a
              className="button-primary"
              href="https://wa.me/254"
              target="_blank"
              rel="noreferrer"
            >
              Contact me on WhatsApp ↗
            </a>

            <a
              className="button-secondary"
              href="https://github.com/idleismail70-oss"
              target="_blank"
              rel="noreferrer"
            >
              GitHub profile ↗
            </a>

<a
    className="button-secondary"
    href="https://www.linkedin.com/in/ismail-idle-mohamed-56a634264/"
    target="_blank"
    rel="noreferrer"
  >
    LinkedIn profile ↗
  </a>


          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          ismail<span>.</span>dev
        </a>
        <span>Designed with purpose. Built with code.</span>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
