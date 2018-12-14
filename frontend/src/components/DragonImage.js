import React from "react";
import "../css/dragonImage.css";

export default class DragonImage extends React.Component {

    render() {
        const {pattern, build, size, backgroundColor } = this.props.propertyMap;
        const sizing = { height: size, width: size};
        return (
            <div className="image-wrapper">
                <figure style={{...sizing}} className="dragon-image">
                    <div className="dragon-image__background" style={{backgroundColor, ...sizing}}></div>
                    <img className="dragon-image__pattern" style={{...sizing}} src={pattern} alt="Dragon pattern" />
                    <img className="dragon-image__build" style={{...sizing}} src={build} alt="Dragon build"/>
                </figure>
            </div>
        );
    }
}