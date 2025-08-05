const About = () => {
  const skills = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Redux', 'React Router DOM'],
    'Backend': ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Python'],
    'Database': ['MySQL', 'MongoDB', 'PostgreSQL', 'Mongoose'],
    'Tools & Technologies': ['Firebase Auth', 'Google OAuth', 'Razorpay', 'JWT', 'Git', 'Bitbucket', 'GitLab', 'AJAX', 'Axios', 'TypeScript', 'npm', 'Webpack', 'Postman', 'Babel'],
    'Deployment': ['Firebase Hosting', 'Netlify']
  };

  return (
    <div className="container my-4">
      <h2 className="text-center fs-2 fw-semibold mb-4">Technical Skills</h2>
      <div className="row g-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="col-12 col-sm-6 col-lg-4">
            <div className="bg-light p-3 rounded shadow-sm">
              <h3 className="fs-5 fw-bold mb-2">{category}</h3>
              <ul className="list-unstyled">
                {items.map((item) => (
                  <li key={item}>&#8226; {item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default About;