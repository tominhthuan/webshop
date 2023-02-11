import React, { Component } from 'react'

//componet
import ArticleComponent from './ArticleComponent';
import HorizontalComponent from './HorizontalComponent';

import MergeComponents from './MergeComponents';

{/* <HorizontalComponent
                                        urlImg={'../assets/Images/slider11.jpg'}
                                        News={'Template: Featured Image (Horizontal)'}
                                    /> */}
{/* <HorizontalComponent
                                        urlImg={'../assets/Images/slider3.jpg'}
                                        News={'Hello world!'}
                                    />
                                    <HorizontalComponent
                                        urlImg={'../assets/Images/slider7.jpg'}
                                        News={'Template: Featured Image (Vertical)'}
                                    />
                                    <HorizontalComponent
                                        urlImg={'../assets/Images/slider5.jpg'}
                                        News={'Template: Sticky'}
                                    />
                                    <HorizontalComponent
                                        urlImg={'../assets/Images/slider4.jpg'}
                                        News={'Template: Excerpt (Defined)'}
                                    />
                                    <HorizontalComponent
                                        urlImg={'../assets/Images/slider8.webp'}
                                        News={'Markup: HTML Tags and Formatting'}
                                    /> */}
const tops = [
    {
        imgs: ['slider1', 'slider2', 'slider3'],
        newss: ['Template: Featured Image (Horizontal)', 'Hello world!','Template: Featured Image (Vertical)','Template: Sticky','Template: Excerpt (Defined)','Markup: HTML Tags and Formatting']
    },
    
];




const blocks = [
    {
        title: 'Recent Posts',
        data: ['Template: More Tag', 'Hello world!', 'Markup: HTML Tags and Formatting', 'Markup: Image Alignment', 'Markup: Text Alignment']
    },
    {
        title: 'Categories',
        data: ['Edge Case', 'Markup', 'Markup', 'News', 'Post Formats', 'Template']
    }
];


class BLOG extends Component {
    render() {
        // console.log(tops[0].imgs[0]);
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
                                    <a className='s' href='/'>
                                        <img className='contentimg12' src='../assets/Images/slider11.jpg' alt='thuan'></img>
                                    </a>
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
                                                <span className='by'>by
                                                    <a href='/'> Aigars</a>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <p>This is a sticky post.</p>
                                    <p>There are a few things to verify:</p>
                                    <ul className='post-meta2'>
                                        <li>
                                            The sticky post should be distinctly recognizable in some way in comparison to normal posts. You can style the
                                            <code>.sticky</code>
                                            class if you are using the
                                            <a href='/'> post_class() </a>
                                            function to generate your post classes, which is a best practice.
                                        </li>
                                        <li>They should show at the very top of the blog index page, even though they could be several posts back chronologically.</li>
                                        <li>They should still show up again in their chronologically correct postion in time, but without the sticky indicator.</li>
                                        <li>If you have a plugin or widget that lists popular posts or comments, make sure that this sticky post is not always at the top of those lists unless it really is popular.</li>
                                    </ul>

                                </div>
                            </article>
                            <div className='primary2'>
                                <ArticleComponent
                                    News={'News'}
                                    urlImg={'../assets/Images/slider3.jpg'}
                                    title={'Template: More Tag'}
                                    date={'March 15, 2016October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <React.Fragment>
                                            <p>
                                                This content is before the
                                                <a href='/'> more tag</a>
                                                .
                                            </p>
                                            <p>Right after this sentence should be a “continue reading” button of some sort.</p>
                                        </React.Fragment>
                                    )}
                                    isReadmore={true}
                                />
                                <ArticleComponent
                                    News={'News'}
                                    urlImg={'../assets/Images/slider4.jpg'}
                                    title={'Hello world!'}
                                    date={'February 23, 2016October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <React.Fragment>
                                            <p>
                                                Welcome to
                                                <a href='/'> colorlib.com</a>
                                                . This is your first post. Edit or delete it, then start blogging!
                                            </p>
                                        </React.Fragment>
                                    )}
                                    isReadmore={false}
                                />
                            </div>
                            <div className='primary2'>
                                <ArticleComponent
                                    News={'Markup'}
                                    urlImg={'../assets/Images/slider5.jpg'}
                                    title={'Markup: HTML Tags and Formatting'}
                                    date={'January 11, 2016October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <p>
                                            HTML Tags and Formatting
                                        </p>
                                    )}
                                    isReadmore={true}
                                />
                                <ArticleComponent
                                    News={'Markup'}
                                    urlImg={'../assets/Images/slider5.jpg'}
                                    title={'Markup: Image Alignment'}
                                    date={'January 10, 2016October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <p>
                                            Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let’s get started.
                                        </p>
                                    )}
                                    isReadmore={true}
                                />
                            </div>
                            <div className='primary2'>
                                <ArticleComponent
                                    News={'Markup'}
                                    urlImg={'../assets/Images/slider6.jpg'}
                                    title={'Markup: Text Alignment'}
                                    date={'January 09, 2016October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <React.Fragment>
                                            <h13>Default</h13>
                                            <p>
                                                This is a paragraph. It should not have any alignment of any kind.
                                                It should just flow like you would normally expect. Nothing fancy.
                                                Just straight up text, free flowing, with love.
                                            </p>
                                            <p>
                                                Completely neutral and not picking a side or sitting on the fence.
                                                It just is. It just freaking is. It likes where it is. It does not feel compelled to pick a side. Leave him be.
                                                It will just be better that way. Trust me.
                                            </p>
                                        </React.Fragment>
                                    )}
                                    isReadmore={true}
                                />
                                <ArticleComponent
                                    News={'Markup'}
                                    urlImg={'../assets/Images/slider7.jpg'}
                                    title={'Markup: Title With Special Characters'}
                                    date={'January 05, 2016October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <p>
                                            Putting special characters in the title should have no adverse effect on the layout or functionality.
                                        </p>
                                    )}
                                    isReadmore={true}
                                />

                            </div>
                            <div className='primary2'>
                                <ArticleComponent
                                    News={'Markup'}
                                    urlImg={'../assets/Images/slider12.jpg'}
                                    title={'Markup: Title With Markup'}
                                    date={'January 05, 2016October 21, 2020'}
                                    author={'Aigars'}
                                    isReadmore={true}
                                />
                                <ArticleComponent
                                    News={'Edge'}
                                    urlImg={'../assets/Images/slider13.jpg'}
                                    title={'Edge Case: Nested And Mixed Lists'}
                                    date={'May 15, 2015October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <p>
                                            Nested and mixed lists are an interesting beast. It’s a corner case to make sure that
                                        </p>
                                    )}
                                    isReadmore={true}
                                />
                            </div>
                            <div className='primary2'>
                                <ArticleComponent
                                    News={'News'}
                                    urlImg={'../assets/Images/slider14.jpg'}
                                    title={'Template: Featured Image (Vertical)'}
                                    date={'March 15, 2015October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <React.Fragment>
                                            <p>
                                                This post should display a
                                                <a href='/'> featured image</a>
                                                , if the theme
                                                <a href='/'> supports it</a>
                                                .
                                            </p>
                                            <p>Non-square images can provide some unique styling issues.</p>
                                            <p>This post tests a vertical featured image.</p>
                                        </React.Fragment>
                                    )}
                                    isReadmore={false}
                                />
                                <ArticleComponent
                                    News={'News'}
                                    urlImg={'../assets/Images/slider15.jpg'}
                                    title={'Template: Featured Image (Horizontal)'}
                                    date={'March 15, 2015October 21, 2020'}
                                    author={'Aigars'}
                                    content={(
                                        <React.Fragment>
                                            <p>
                                                This post should display a
                                                <a href='/'> featured image</a>
                                                , if the theme
                                                <a href='/'> supports it</a>
                                                .
                                            </p>
                                            <p>Non-square images can provide some unique styling issues.</p>
                                            <p>This post tests a vertical featured image.</p>
                                        </React.Fragment>
                                    )}
                                    isReadmore={false}
                                />
                            </div>
                        </div>
                        <aside className='secondary'>
                            <div className='search-2'>
                                <form className='search'>
                                    <input className='input' type='text' placeholder='Type here'></input>
                                </form>
                            </div>
                            <div className='top-posts-4'>
                                <h12>Top Posts</h12>
                                <ul className='widgets'>
                                    {tops.map(item => {
                                        return (
                                            <HorizontalComponent
                                                // urlImg={`../assets/Images/${item}.jpg`}
                                                // News={'Template: Featured Image (Horizontal)'}
                                                urlImg={item.imgs}
                                                News={item.newss}
                                            />
                                        )
                                    })}
                                </ul>
                            </div>
                            {
                                blocks.map((item) => {
                                    return (
                                        <MergeComponents
                                            title={item.title}
                                            data={item.data}
                                        />
                                    );
                                })
                            }
                        </aside>
                    </div>
                </section>
            </div>
        );
    }
}
export default BLOG