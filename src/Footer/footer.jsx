/* eslint-disable jsx-a11y/anchor-is-valid */
import "./footer.css"

const Footer = () => {

    return(
        <>
            <footer id="footer" class="footer light-background">
                <div class="container">
                    <div class="copyright text-center ">
                        <p>© <span>Copyright</span> <strong class="px-1 sitename">Rakesh</strong> <span>All Rights Reserved<br/></span></p>
                    </div>
                    <div class="social-links d-flex justify-content-center">
                        <a href=""><i class="bi bi-twitter-x"></i></a>
                        <a href=""><i class="bi bi-facebook"></i></a>
                        <a href=""><i class="bi bi-instagram"></i></a>
                        <a href=""><i class="bi bi-linkedin"></i></a>
                    </div>
                    {/* <div class="credits">
                        <a href="https://bootstrapmade.com/">BootstrapMade</a> Distributed by <a href="https://themewagon.com">ThemeWagon</a>
                    </div>
                        <a href="https://themewagon.com"></a>
                    </div>
                    <a href="https://themewagon.com"></a> */}
                </div>
            </footer>
        </>
    )
}

export default Footer;