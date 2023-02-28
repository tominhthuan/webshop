import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='navbar'>
                    <a href='thuanido' className='logo'>Shapely Demo</a>
                    <ul className='nav-links'>
                        <i class="fa-solid fa-bars"></i>
                        <div className='fa-menu1'>
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
                                    <a href='huanido' className='aboutthetests'>ABOUTTHETESTS
                                        <i class="fa-solid fa-angle-down" />
                                    </a>
                                    <ul className="submenu">
                                        <li>
                                            <Link to={'/pageimage'}>Page Image Alignment</Link>
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
                                    <a href='huanido' className='level1'>LEVEL1
                                        <i class="fa-solid fa-angle-down" />
                                    </a>
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
                            <div className='search'>
                                <i class="fa-solid fa-magnifying-glass" />
                                <form action='' className='search-box'>
                                    <input type="text" name="hoten" placeholder='Type Here' className='ipt' />
                                    <button id='search-btn' className='btn-search'>Search</button>
                                </form>
                            </div>
                        </div>

                    </ul>


                </div>
            </header>

        );
    }

}
export default Header;
