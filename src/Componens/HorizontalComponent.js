import React from 'react'

class HorizontalComponent extends React.Component {
    render() {
        const { urlImg, news } = this.props;
        return (
            <li>
                <a href='/'>
                    <img className='imgMin' src={urlImg} alt='thuan'></img>
                </a>
                <div className='WidgetsList'>
                    <a href='/'>{news}</a>
                </div>
            </li>
        );
    }
}
export default HorizontalComponent;