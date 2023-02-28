import React, { Component } from 'react'
import PortfolioIMG from '../PortfolioIMG';

const pictures = [
    {
        url: '../assets/Images/photo1.jpg'
    },
    {
        url: '../assets/Images/photo2.jpg'
    },
    {
        url: '../assets/Images/photo3.jpg'
    },
    {
        url: '../assets/Images/photo4.jpg'
    },
];

class PORTFOLIO extends Component {
    render() {
        return (
            <div>
                <div className='header-callout'>
                    <section className='section11'>
                        <div className='container11'>
                            <div className='col-xs-12'>
                                <h11 className='h11'>PORTFOLIO</h11>
                            </div>
                        </div>
                    </section>
                </div>
                <div>
                    <div className='images'>
                        {
                            pictures.map((item) => (
                                <PortfolioIMG
                                    data={item.url}
                                />
                            ))
                        }
                    </div>
                    <div className='images'>
                        {
                            pictures.map((item) => (
                                <PortfolioIMG
                                    data={item.u}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    }
}
export default PORTFOLIO