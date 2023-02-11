import React from 'react';
import PropTypes from 'prop-types';

//Components
import PostsComponent from './PostsComponent';

class MergeComponents extends React.Component {
    render() {
        const {title, data} = this.props;
        return (
            <div className='top-posts-4'>
                <h12>{title}</h12>
                <ul className='widget'>
                    {
                        data.map((item) => (
                            <PostsComponent
                                news={`${item}`}
                            />
                        ))
                    }
                </ul>
            </div>
        );
    }
}

MergeComponents.propTypes = {
    title: PropTypes.string,
    data: PropTypes.array,
}

export default MergeComponents