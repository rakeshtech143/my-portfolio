const Projects = () =>  {
  const projects = [
    {
      title: 'Tweakfunnels (CRM Builder)',
      description: 'CRM platform with drag-and-drop website builder and email campaign tools. Automates funnel creation, order flows, and client communications.',
      techStack: 'React.js, Node.js, Firebase, Email Integration'
    },
    {
      title: 'Appymonk (Admin Dashboard)',
      description: 'Admin dashboard to manage purchases, invoices, sales, employees, vendors, and more. Alerts and automated emails for due invoices.',
      techStack: 'React.js, Node.js, Express.js, JWT, Firebase'
    },
    {
      title: 'Smilewithpets (E-Commerce Website)',
      description: 'Pet product e-commerce site with filtering, Razorpay payment integration, and Firebase authentication.',
      techStack: 'React.js, Node.js, Express.js, MySQL, Firebase'
    },
    {
      title: 'Instagram Auto DM Tool',
      description: 'Chrome extension for sending automated DMs to Instagram users based on target profiles.',
      techStack: 'JavaScript, HTML, CSS, Chrome Extension APIs'
    }
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center fs-2 fw-semibold mb-4">Projects</h2>
      <div className="row g-4">
        {projects.map((project) => (
          <div key={project.title} className="col-md-6">
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="fs-4 fw-bold mb-2">{project.title}</h3>
              <p>{project.description}</p>
              <p className="text-muted small">Tech Stack: {project.techStack}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;