import React from "react";
import DragonAvatar from "./DragonAvatar";

const DEFAULT_DRAGON = {
    dragonId: "",
    generationId: "",
    nickname: "",
    birthdate: "",
    traits: []

}

export default class Dragon extends React.Component {
    state = {
        dragon: DEFAULT_DRAGON
    }

    componentDidMount() {
        this.fetchDragon();
    }

    fetchDragon = () => {
        fetch("http://localhost:3001/dragon/new")
        .then((response) => response.json())
        .then((data) => {
            this.setState({dragon: data.dragon});
        })
        .catch((error) => console.error("error", error));
    }

    render() {
        return (
            <DragonAvatar dragon = {this.state.dragon} />
        );
    }
}