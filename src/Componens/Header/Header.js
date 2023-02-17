import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='navbar'>
                    <a href='thuanido' className='logo'>Shapely Demo</a>
                    <ul className='nav-links'>
                        <input type="checkbox" id="checkbox_toggle" />
                        <label for="checkbox_toggle" className="hamburger"><span className="hamburger-line"></span></label>
                        <div className='menu'>
                            <li>
                                <Link to={'/'} className='home'> HOME </Link>
                            </li>
                            <li>
                                <Link to={'/blog'} className='blog'>BLOG</Link>
                            </li>
                            <li>
                                <Link to={'/portfolio'} className='portfolio'>PORTFOLIO</Link>
                            </li>
                            <li>
                                <a href='huanido' className='aboutthetests'>ABOUTTHETESTS</a>
                                <ul className="submenu">
                                    <li>
                                        <a href="huanido">Page Image Alignment</a>
                                    </li>
                                    <li>
                                        <a href="huanido">Page Markup And Formatting</a>
                                    </li>
                                    <li>
                                        <a href="huanido">Clearing Floats</a>
                                    </li>
                                    <li>
                                        <a href="huanido">Page with comments</a>
                                    </li>
                                    <li>
                                        <a href="huanido">Page with comments disabled</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href='huanido' className='level1'>LEVEL1</a>
                                <ul className="submenu2">
                                    <li>
                                        <a href="huanido"> Level 2 </a>
                                        <ul className="submenu3">
                                            <li>
                                                <a href="huanido"> Level 3 </a>
                                            </li>
                                            <li>
                                                <a href="huanido">Level 3A</a>
                                            </li>
                                            <li>
                                                <a href="huanido">Level 3B</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="huanido">Level 2A</a>
                                    </li>
                                    <li>
                                        <a href="huanido">Level 2B</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href='huanido' className='shop'>SHOP</a>
                            </li>
                        </div>
                    </ul>
                </div>






            </header>

        );
    }

}
export default Header;
/*</Header>*/