import React from "react";
import DragonImage from "./DragonImage";
import { patchy, plain, skinny, slender, sporty, spotted, stocky, striped } from "../assets/index";

const propertyMap = {
    backgroundColor: {
        black: "#263238",
        white: "#cfd8dc",
        green: "#a5d6a7",
        blue: "#0277bd"
    },
    build: { slender, stocky, sporty, skinny },
    pattern: {patchy, plain, spotted, striped},
    size: { small: 100, medium: 140, large: 180, enormous: 220 }
}

export default class DragonAvatar extends React.Component {

    get renderDragonImage() {
        const dragonPropertyMap = {};
        this.props.dragon.traits.forEach(({traitType, traitValue}) => {
            dragonPropertyMap[traitType] = propertyMap[traitType][traitValue];
        });

        return <DragonImage propertyMap={dragonPropertyMap} />
    }

    render() {
        const {generationId, dragonId, traits} = this.props.dragon;
        return (
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}</span>&nbsp;

                {traits.map((trait) => trait.traitValue).join(", ")}
                {this.renderDragonImage}
            </div>
        );
    }
}