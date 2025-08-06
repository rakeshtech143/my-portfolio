import './resume.css'

const Resume = () => {
    const education = [
        {
            course_name: 'Bachelor of Computer Application (BCA)',
            batch: 'Nov 2024 – Apr 2025',
            college:'Microtek College of Management and Technology, Varansi, Uttar Pradesh',
            details: 'Microtek Group of Institutions was established in year 1999-2000 with admission to shoulder the noble responsibility of producing young and dynamic professionals in the field of Computer & Management Science, Bio Technology , Paramedical Sciences , Mass Communication and Journalism etc, ready to face challenges and demands of the highly changing corporate and industries.'
        },
        // {
        //     course_name: 'Bachelor of Computer Application (BCA)',
        //     batch: 'Nov 2024 – Apr 2025',
        //     college:'Microtek College of Management and Technology, Varansi, Uttar Pradesh',
        //     details: 'Microtek Group of Institutions was established in year 1999-2000 with admission to shoulder the noble responsibility of producing young and dynamic professionals in the field of Computer & Management Science, Bio Technology , Paramedical Sciences , Mass Communication and Journalism etc, ready to face challenges and demands of the highly changing corporate and industries.'
        // }
    ];
    const experience = [
        {
            company: 'Ads and Funnel Pvt. Ltd',
            role: 'Software Developer',
            duration: 'Nov 2024 – Apr 2025',
            details: [
                'Worked for 6 months as a Software Developer.',
                'Developed and maintained custom sales funnel builder using React.js and Node.js',
                'Automated lead management and order flows with integrated email alerts.',
                'Building and optimizing sales funnels for various digital marketing platforms.',
                'Built scalable backend for funnel analytics and campaign tracking.',
                'Monitor and troubleshoot created application',
            ]
        },
        {
            company: 'Virtualis Analytica Web Solutions LLP',
            role: 'React & Node Developer',
            duration: 'Jan 2021 – Sep 2024',
            details: [
                'Design and implement E-Commerce project using React, Node, Express.js, Firebase, GoogleAuth, JWT and MySQL',
                'Designed and deployed scalable RESTful APIs using Express.js and MySQL. ',
                'Design and implement Admin Dashboard project using React, Node, Express.js and JWT.',
                'Built Admin Dashboard with role-based access and real-time reports. ',
                'Experience with writing SQL queries, stored procedures in an application. ',
            ]
        }
    ];
    return(
        <>
            <section id="resume" class="resume section">
                <div class="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Resume</h2>
                    {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <h3 class="resume-title">Sumary</h3>
                            <div class="resume-item pb-0">
                                <h4>Rakesh Kushwaha</h4>
                                <p><em>Experienced React and Node.js developer with 4+ years of hands-on experience in designing, developing, and maintaining complex front-end and back-end architectures for web applications. Proficient in React.js for building interactive and responsive user interfaces. Strong understanding of state management and modern front-end development practices (Hooks, Functional Components). Beginner in Node.js for server-side logic and building RESTful APIs. Skilled in database design and management using MySQL databases. Solid knowledge of HTML5, CSS3, and responsive design principles. Ability to write clean, maintainable, and well-documented code following best practices. Developed and maintained front-end and back-end components using React.js and Node..</em></p>
                                <ul>
                                    <li>Noida, Uttar Pradesh, 201301</li>
                                    <li>(+91) 63914744528 / 9807411781</li>
                                    <li>rakeshkushwaha9670@gmail.com</li>
                                </ul>
                            </div>

                            <h3 class="resume-title">Education</h3>
                            {education.map((edu) => (
                                <div key={edu.course_name} class="resume-item">
                                    <h4>{edu.course_name}</h4>
                                    <h5>{edu.batch}</h5>
                                    <p><em>{edu.college}</em></p>
                                    <p>{edu.details}</p>
                                </div>
                            ))}
                        </div>
                        <div class="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <h3 class="resume-title">Professional Experience</h3>
                            {experience.map((job) => (
                                <div key={job.company} class="resume-item">
                                    <h4>{job.role}</h4>
                                    <h5>{job.duration}</h5>
                                    <p><em>{job.company}</em></p>
                                    <ul>
                                        {job.details.map((point, index) => (
                                            <li key={index}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume;