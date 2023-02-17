import React, { Component } from 'react'

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
                        <img class='images-img' src='../assets/Images/photo1.jpg' alt='#' />
                        <img class='images-img' src='../assets/Images/photo2.jpg' alt='#' />
                        <img class='images-img' src='../assets/Images/photo3.jpg' alt='#' />
                        <img class='images-img' src='../assets/Images/photo4.jpg' alt='#' />
                    </div>
                </div>
            </div>
        );
    }
}
export default PORTFOLIO