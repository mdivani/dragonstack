import React from "react";

const MIN_DELAY = 3000;

export default class Generation extends React.Component {
    state = {
        generation: {
            generationId: "",
            expiration: ""
        }
    }

    timer = null;

    componentDidMount() {
        this.fetchNextGeneration();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    fetchGeneration = () => {
        return fetch("http://localhost:3001/generation")
        .then(response => response.json())
        .then(data => {
            if (data.generation) {
                this.setState({generation: data.generation})
            }
            return data.generation;
        })
        .catch(err => console.error(err));
    }

    fetchNextGeneration = () => {
        this.fetchGeneration().then(({ expiration }) => {
            const delay = this.getDelay(expiration);
            this.timer = setTimeout(this.fetchNextGeneration(), delay);
        });
    }

    getDelay = (expiration = new Date()) => {
        const delay = new Date(expiration).getTime() - new Date().getTime();
        return delay < MIN_DELAY ? delay : MIN_DELAY;
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