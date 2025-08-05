const Experience = () => {
  const experience = [
    {
      company: 'Ads and Funnel Pvt. Ltd',
      role: 'Software Developer',
      duration: 'Nov 2024 – Apr 2025',
      details: [
        'Developed custom sales funnel builder using React.js and Node.js.',
        'Automated lead management and campaign analytics backend.',
        'Monitored, optimized and automated apps for marketing platforms.'
      ]
    },
    {
      company: 'Virtualis Analytica Web Solutions LLP',
      role: 'React & Node Developer',
      duration: 'Jan 2021 – Sep 2024',
      details: [
        'Built Admin Dashboard with role-based access and real-time reports.',
        'Developed E-Commerce site with Razorpay and Firebase login.',
        'Deployed REST APIs using Express.js and MySQL.',
        'Maintained deployment pipelines and handled client communication.'
      ]
    },
    {
      company: 'Itspell Technology',
      role: 'React & PHP Developer',
      duration: 'Feb 2020 – Aug 2020',
      details: [
        'Built dynamic modules using Core PHP and MySQL.',
        'Integrated payment gateway and SMS API.',
        'Created admin panels and session management system.'
      ]
    }
  ];

  return (
    <div className="container my-4">
      <h2 className="text-center fs-2 fw-semibold mb-4">Experience</h2>
      <div className="row g-4">
        {experience.map((job) => (
          <div key={job.company} className="col-12">
            <div className="bg-light p-4 rounded shadow-sm">
              <h3 className="fs-4 fw-bold">{job.role}</h3>
              <p className="text-muted small">{job.company} — {job.duration}</p>
              <ul>
                {job.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;