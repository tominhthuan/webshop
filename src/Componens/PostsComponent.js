import React from 'react'

class PostsComponent extends React.Component {
    render() {
        const {News}=this.props;
        return (
            <li>
                <a href='/'>{News}</a>
            </li>
        );
    }
}
export default PostsComponent;