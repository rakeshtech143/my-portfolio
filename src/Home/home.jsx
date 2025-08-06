import "./home.css"
const Home  = () =>  {

    return(
        <>
            {/* <div className="text-center">
                <h2 className="text-center fs-1 fw-bold mb-4">Hi, I'm Rakesh Kushwaha</h2>
                <p className="fs-5">Full-Stack Web Developer | React.js | Node.js | PostgreSQL</p>
                <p className="mt-4 mx-auto" style={{ maxWidth: '720px' }}>
                    I have 4+ years of experience building scalable web applications, admin dashboards,
                    and e-commerce platforms. I specialize in React, Node, REST APIs, and modern web
                    technologies.
                </p>
            </div> */}
            <section id="hero" class="hero section">
                <img src="assets/images/banner.png" alt="" data-aos="fade-in" class="aos-init aos-animate" />
                <div class="container text-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="100">
                    <div class="row justify-content-center">
                        <div class="col-lg-8">
                            <h2>Rakesh Kushwaha</h2>
                            <p>
                                I have 4+ years of experience building scalable web applications, admin dashboards,
                                and e-commerce platforms. I specialize in React, Node, REST APIs, and modern web
                                technologies.
                            </p>
                            <a href="/about" class="btn-get-started">About Me</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;