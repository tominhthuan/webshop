import React, { Component } from 'react'

class BLOG extends Component {
    render() {
        return (
            <div>
                <div className='header-callout'>
                    <section className='section11'>
                        <div className='container11'>
                            <div className='col-xs-12'>
                                <h11 className='h11'>BLOG </h11>
                            </div>
                        </div>


                    </section>
                </div>
                <section className='section12'>
                    <div className='container12'>
                        <div className='primary'>
                            <article className='article12'>
                                <header className='header12'>
                                    <div className='s'>
                                        <img className='contentimg12' src='../assets/Images/slider11.jpg' alt='thuan'></img>
                                    </div>
                                    <span className='shapely-category'>
                                        <a href="thuan"> News </a>
                                    </span>
                                </header>
                                <div className='entry-content'>
                                    <h12 className='post-title'>
                                        <a href='/' className='post-content'> Template: Sticky </a>
                                    </h12>
                                    <div>
                                        <ul className='post-meta'>
                                            <li>
                                                <span className='posted-on'>January 7, 2016October 21, 2020</span>
                                            </li>
                                            <li>
                                                <span className='by'>"by"
                                                    <a href='/'>Aigars</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p>This is a sticky post.</p>
                                        <p>There are a few things to verify:</p>
                                        <ul>
                                            <li>
                                                "The sticky post should be distinctly recognizable in some way in comparison to normal posts. You can style the"
                                                <code>.sticky</code>
                                                " class if you are using the "
                                                <a href='/'>post_class()</a>
                                                " function to generate your post classes, which is a best practice."
                                            </li>
                                            <li>"They should show at the very top of the blog index page, even though they could be several posts back chronologically."</li>
                                            <li>"They should still show up again in their chronologically correct postion in time, but without the sticky indicator."</li>
                                            <li>"If you have a plugin or widget that lists popular posts or comments, make sure that this sticky post is not always at the top of those lists unless it really is popular."</li>
                                        </ul>
                                    </div>
                                </div>

                                <div>
                                    <h14>thuan</h14>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default BLOG