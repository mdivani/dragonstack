import React from "react";

export default class Generation extends React.Component {
    state = {
        generation: {
            generationId: 999,
            expiration: "20-05-1"
        }
    }

    componentDidMount() {
        this.fetchGeneration();
    }

    fetchGeneration = () => {
        fetch("http://localhost:3000/generation")
        .then(response => console.log(response))
        .catch(err => console.error(err));
    }

    render() {
        const { generation } = this.state;

        return (
            <div>
                <h3>Generation {generation.generationId} expires on:</h3>
                <h4>{generation.expiration}</h4>
            </div>
        );
    }
}