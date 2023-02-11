import React from 'react'

class PostsComponent extends React.Component {
    render() {
        const {news}=this.props;
        return (
            <li>
                <a href='/'>{news}</a>
            </li>
        );
    }
}
export default PostsComponent;