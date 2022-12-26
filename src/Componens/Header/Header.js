import React, { Component } from 'react'
import { Link } from 'react-router-dom';
class Header extends Component {
    render(){
        return (
            <header className='header'>
                <div className='logo'>
                    <ul className='nav'>
                        <li>
                            <a href='thuanido'>Shapely Demo</a>
                        </li>
                    </ul>
                </div>
                <div className='menu'>
                    <ul className='nav2'>
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
                    </ul>               
                </div>
            </header>
            );
    }
    
}
export default Header;