import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './index.css'; // GOOD
import './App.css'
import Header from './header/header';
import Contact from './Contact/contact';
import Footer from './Footer/footer';
import About from './About/about';
import Resume from './Resume/resume';


function Home() {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold mb-4">Hi, I'm Rakesh Kushwaha</h2>
      <p className="text-lg">Full-Stack Web Developer | React.js | Node.js | PostgreSQL</p>
      <p className="mt-4 max-w-2xl mx-auto">
        I have 4+ years of experience building scalable web applications, admin dashboards,
        and e-commerce platforms. I specialize in React, Node, REST APIs, and modern web
        technologies.
      </p>
    </div>
  );
}

function Skills() {
  const skills = {
    'Frontend': ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'React.js', 'Redux', 'React Router DOM'],
    'Backend': ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Python'],
    'Database': ['MySQL', 'MongoDB', 'PostgreSQL', 'Mongoose'],
    'Tools & Technologies': ['Firebase Auth', 'Google OAuth', 'Razorpay', 'JWT', 'Git', 'Bitbucket', 'GitLab', 'AJAX', 'Axios', 'TypeScript', 'npm', 'Webpack', 'Postman', 'Babel'],
    'Deployment': ['Firebase Hosting', 'Netlify']
  };

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-center">Technical Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow">
            <h3 className="text-xl font-bold mb-2">{category}</h3>
            <ul className="list-disc list-inside space-y-1">
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function Projects() {
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
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-center">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="mb-2">{project.description}</p>
            <p className="text-sm text-gray-700 dark:text-gray-300">Tech Stack: {project.techStack}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Experience() {
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
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-center">Experience</h2>
      <div className="space-y-6">
        {experience.map((job) => (
          <div key={job.company} className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow">
            <h3 className="text-2xl font-bold">{job.role}</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">{job.company} — {job.duration}</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              {job.details.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}


function App() {
  const [darkMode, setDarkMode] = useState(false);
  
   return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Router>
          {/* <header className="p-4 flex justify-between items-center shadow-md bg-gray-100 dark:bg-gray-800">
            <h1 className="text-xl font-bold">Rakesh Kushwaha</h1>
            <nav className="space-x-4">
              <Link to="/">Home</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/experience">Experience</Link>
              <Link to="/contact">Contact</Link>
              <button onClick={() => setDarkMode(!darkMode)} className="ml-4 px-2 py-1 bg-blue-500 text-white rounded">
                {darkMode ? 'Light' : 'Dark'} Mode
              </button>
            </nav>
          </header> */}
          <Header setDarkMode={setDarkMode} darkMode={darkMode}/>
          <main className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/resume" element={<Resume />} />
              <Route path="/portfolio" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </div>
      <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center active">
        <i class="bi bi-arrow-up-short"></i>
      </a>
    </div>
  );
}

export default App;
