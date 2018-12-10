import React from "react";

export default class Generation extends React.Component {

    render() {
        const generation = {
            generationId: 999,
            expiration: "20-05-1"
        }
        return (
            <div>
                <h3>Generation {generation.generationId} expires on:</h3>
                <h4>{generation.expiration}</h4>
            </div>
        );
    }
}