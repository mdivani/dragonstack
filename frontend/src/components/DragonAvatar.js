import React from "react";

export default class DragonAvatar extends React.Component {

    render() {
        const {generationId, dragonId, traits} = this.props.dragon;
        return (
            <div>
                <span>G{generationId}.</span>
                <span>I{dragonId}</span>&nbsp;

                {traits.map((trait) => trait.traitValue).join(", ")}
            </div>
        );
    }
}