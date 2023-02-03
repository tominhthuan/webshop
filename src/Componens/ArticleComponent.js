import React from 'react'

class ArticleComponent extends React.Component {
    render() {
        const { urlImg, title, date, author, content, News, isReadmore = true } = this.props;
        return (
            <article className='article12'>
                <header className='header12'>
                    <a className='s' href='/'>
                        <img className='contentimg12' src={urlImg} alt='thuan'></img>
                    </a>
                    <span className='shapely-category'>
                        <a href="thuan">{News}</a>
                    </span>
                </header>
                <div className='entry-content'>
                    <h12 className='post-title'>
                        <a href='/' className='post-content'>{title}</a>
                    </h12>
                    <div>
                        <ul className='post-meta'>
                            <li>
                                <span className='posted-on'>{date}</span>
                            </li>
                            <li>
                                <span className='by'>by
                                    <a href='/'>{author}</a>
                                </span>
                            </li>
                        </ul>
                    </div>
                    {content}
                    {isReadmore && <p className='pbtn'><a href='/' className='btn'>Read more</a></p>}
                </div>
            </article>
        );
    }
}
export default ArticleComponent;