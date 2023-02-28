import React, { Component } from 'react'

class PortfolioIMG extends Component {
    render() {
        const { data } = this.props;
        return (
            <img class='images-img' src={data} alt='#' />
        );
    }
}
export default PortfolioIMG;