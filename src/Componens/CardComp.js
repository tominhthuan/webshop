import React from "react";
import { Component } from "react";

class CardComp extends Component {
    render() {
        const { news } = this.props;
        return (
            <p>
                {news}

            </p>
        );
    }
}
export default CardComp;