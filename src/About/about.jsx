import Counter from "../components/counter"; // adjust path if different
import ProgressBar from "../components/progressbar";
import './about.css'

const About = () => {
  // const skills = {
  //   'Frontend': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Redux', 'React Router DOM'],
  //   'Backend': ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Python'],
  //   'Database': ['MySQL', 'MongoDB', 'PostgreSQL', 'Mongoose'],
  //   'Tools & Technologies': ['Firebase Auth', 'Google OAuth', 'Razorpay', 'JWT', 'Git', 'Bitbucket', 'GitLab', 'AJAX', 'Axios', 'TypeScript', 'npm', 'Webpack', 'Postman', 'Babel'],
  //   'Deployment': ['Firebase Hosting', 'Netlify']
  // };
  return (
    // <div className="container my-4">
    //   <h2 className="text-center fs-2 fw-semibold mb-4">Technical Skills</h2>
    //   <div className="row g-4">
    //     {Object.entries(skills).map(([category, items]) => (
    //       <div key={category} className="col-12 col-sm-6 col-lg-4">
    //         <div className="bg-light p-3 rounded shadow-sm">
    //           <h3 className="fs-5 fw-bold mb-2">{category}</h3>
    //           <ul className="list-unstyled">
    //             {items.map((item) => (
    //               <li key={item}>&#8226; {item}</li>
    //             ))}
    //           </ul>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <>
      <section id="about" class="about section">
        <div class="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>About</h2>
          {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
        </div>
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4 justify-content-center">
            <div class="col-lg-4">
              <img src="assets/img/profile-img.jpg" class="img-fluid" alt="" />
            </div>
            <div class="col-lg-8 content">
              <h2>React &amp; Node Developer</h2>
              <p class="fst-italic py-3">
                Full-Stack Web Developer with 4+ years of experience building scalable web
                applications using React.js, Node.js, Express.js, and MySQL/MongoDB. Strong in
                creating admin dashboards, e-commerce platforms, and CRM systems. Proficient in
                designing REST APIs, integrating third-party services like Firebase and Razorpay, and
                automating workflows. Excellent problem-solving and communication skills.
              </p>
              <div class="row">
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>14 Feb 1999</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 6391474528 / 9807411781</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>City:</strong> <span>Noida, Uttar Pradesh</span></li>
                  </ul>
                </div>
                <div class="col-lg-6">
                  <ul>
                    <li><i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>26</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>BCA</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Email:</strong> <span>rakeshkushwaha9670@gmail.com</span></li>
                    <li><i class="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              {/* <p class="py-3">
                Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque.
              </p> */}
            </div>
          </div>
        </div>
      </section>
      <section id="skills" class="skills section">
        <div class="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Skills</h2>
          <p>I am a skilled front-end developer experienced in creating visually stunning and user-friendly websites and application and I am a collaborative and creative fullstack developer, experienced in React and Node.I design and develop complex interfaces.</p>
        </div>
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="row skills-content skills-animation">
            <div class="col-lg-6">
              <div class="progress">
                <span class="skill"><span>HTML</span> <i class="val">100%</i></span>
                <ProgressBar value={100} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>CSS</span> <i class="val">80%</i></span>
                <ProgressBar value={80} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>JavaScript</span> <i class="val">70%</i></span>
                <ProgressBar value={70} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>Bootstrap</span> <i class="val">75%</i></span>
                <ProgressBar value={75} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>React</span> <i class="val">85%</i></span>
                <ProgressBar value={85} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>Node</span> <i class="val">50%</i></span>
                <ProgressBar value={50} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>Redux</span> <i class="val">45%</i></span>
                <ProgressBar value={45} minValue={0} maxValue={100} />
              </div>
            </div>
            <div class="col-lg-6">
              <div class="progress">
                <span class="skill"><span>Express Js</span> <i class="val">60%</i></span>
                <ProgressBar value={60} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>MySql</span> <i class="val">50%</i></span>
                <ProgressBar value={50} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>Python</span> <i class="val">40%</i></span>
                <ProgressBar value={40} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>MongoDB</span> <i class="val">60%</i></span>
                <ProgressBar value={60} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>PHP</span> <i class="val">70%</i></span>
                <ProgressBar value={70} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>Django</span> <i class="val">35%</i></span>
                <ProgressBar value={35} minValue={0} maxValue={100} />
              </div>
              <div class="progress">
                <span class="skill"><span>Wordpress</span> <i class="val">55%</i></span>
                <ProgressBar value={55} minValue={0} maxValue={100} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="stats" class="stats section">
        <div class="container section-title aos-init aos-animate" data-aos="fade-up">
          <h2>Facts</h2>
          {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
        </div>
        <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <div class="row gy-4">
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <Counter begin={0} end={8} time={2000} easing="outCube" />
                <p>Clients</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <Counter begin={0} end={5} time={2000} easing="outCube"/>
                <p>Projects</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <Counter begin={0} end={2100} time={2000} easing="outCube"/>
                <p>Hours Of Support</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-6">
              <div class="stats-item text-center w-100 h-100">
                <Counter begin={0} end={35} time={2000} easing="outCube" />
                <p>Workers</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default About;