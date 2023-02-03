import React from 'react'

class HorizontalComponent extends React.Component {
    render() {
        const { urlImg, News }=this.props;
        return (
            <li>
                <a href='/'>
                    <img className='imgMin' src={urlImg} alt='thuan'></img>
                </a>
                <div className='WidgetsList'>
                    <a href='/'>{News}</a>
                </div>
            </li>
        );
    }
}
export default HorizontalComponent;