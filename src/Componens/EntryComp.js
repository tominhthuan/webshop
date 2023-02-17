import React from 'react';


//components
import ArticleComponent from './ArticleComponent';

class EntryComp extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <div className='primary2'>
                {
                    data.map(item => {
                        return (
                            <ArticleComponent
                                News={item.new}
                                urlImg={item.url}
                                title={item.titlt}
                                date={item.date}
                                author={item.author}
                                content={item.content}
                                isReadmore={item.isReadmore}
                            />
                        )
                    })
                }
            </div>
        );

    }
}
export default EntryComp;