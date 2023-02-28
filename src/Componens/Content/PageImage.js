import React, { Component } from 'react';
import HorizontalComponent from '../HorizontalComponent';
import MergeComponents from '../MergeComponents';
import CardComp from '../CardComp';

const cardcomp = [
    {
        data: `Welcome to image alignment! The best way to demonstrate the ebb and flow of the various image positioning options is to nestle them snuggly among an ocean of words. Grab a paddle and let's get started.`
    },
];

const topPosts = [
    {
        data: '../assets/Images/slider11.jpg',
        title: 'Template: Featured Image (Horizontal)'
    },
    {
        data: '../assets/Images/slider3.jpg',
        title: 'Hello world!'
    },
    {
        data: '../assets/Images/slider7.jpg',
        title: 'Template: Featured Image (Vertical)'
    },
    {
        data: '../assets/Images/slider5.jpg',
        title: 'Template: Sticky'
    },
    {
        data: '../assets/Images/slider4.jpg',
        title: 'Template: Excerpt (Defined)'
    },
    {
        data: '../assets/Images/slider8.webp',
        title: 'Markup: HTML Tags and Formatting'
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
    },
];

class PageImage extends Component {
    render() {
        return (
            <div>
                <div className='header-callout'>
                    <section className='section11'>
                        <div className='container11'>
                            <div className='col-xs-12'>
                                <h11 className='h11'>Page Image Alignment</h11>
                            </div>
                        </div>
                    </section>
                </div>
                <section className='section12'>
                    <div className='container12'>
                        <div className='primary'>
                            <article className='article12'>
                                <header className='header12'>
                                    <h5>Page Image Alignment</h5>
                                </header>
                                <div className='entry-content'>
                                    {
                                        cardcomp.map((item) => (
                                            <CardComp
                                                news={item.data}
                                            />
                                        ))

                                    }
                                    <p>
                                        On the topic of alignment, it should be noted that users can choose from the options of
                                        <em>None</em>
                                        ,
                                        <em>Left</em>
                                        ,
                                        <em>Right,</em>
                                        and
                                        <em>Center</em>
                                        . In addition, they also get the options of
                                        <em>Thumbnail</em>
                                        ,
                                        <em>Medium</em>
                                        ,
                                        <em>Large</em>
                                        &
                                        <em>Fullsize</em>
                                    </p>
                                    <p>
                                        <img className='contentimg12' src='../assets/Images/image.jpg' alt='thuan' />
                                    </p>
                                    <p>
                                        The image above happens to be
                                        <em><strong> centered</strong></em>
                                    </p>
                                    <p>
                                        <strong>
                                            <img className='alignleft' src='../assets/Images/image2.jpg' alt='thuan' />
                                        </strong>
                                        The rest of this paragraph is filler for the sake of seeing the text wrap around the 150*150 image, which is
                                        <em>
                                            <strong>left aligned</strong>
                                        </em>
                                        .
                                    </p>
                                    <p>
                                        As you can see the should be some space above, below, and to the right of the image.
                                        The text should not be creeping on the image. Creeping is just not right.
                                        Images need breathing room too. Let them speak like you words.
                                        Let them do their jobs without any hassle from the text.
                                        In about one more sentence here, we'll see that the text moves from the right of the image down below the image in seamless transition.
                                        Again, letting the do it's thang. Mission accomplished!
                                    </p>
                                    <p>
                                        And now for a
                                        <em>
                                            <strong>massively large image</strong>
                                        </em>
                                        . It also has
                                        <em>
                                            <strong>no alignment</strong>
                                        </em>
                                    </p>
                                </div>
                            </article>
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
                                    {
                                        topPosts.map((item) => {
                                            return (
                                                <HorizontalComponent
                                                    urlImg={item.data}
                                                    news={item.title}
                                                />
                                            );
                                        })
                                    }
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
export default PageImage;