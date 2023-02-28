import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <footer className='footer'>
                <div className='container-footer'>
                    <div className='row-footer'>
                        <div className='footer-credits'>
                            Theme by
                            <a href='/'> Colorlib </a>
                            Powered by
                            <a href='/'> WordPress</a>
                        </div>
                        <div className='col-sm-6'>
                            <nav className='social-icons'>
                                <ul className='social-list'>
                                    <li>
                                        <a href='/'>
                                            <i class="fa-brands fa-facebook-f"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i class="fa-brands fa-twitter"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i class="fa-brands fa-linkedin-in"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i class="fa-brands fa-youtube"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href='/'>
                                            <i class="fa-brands fa-instagram"></i>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
export default Footer;