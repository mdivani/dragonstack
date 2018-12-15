import React from "react";
import {connect} from "react-redux";
import {fetchDragon} from "../actions/dragon";
import DragonAvatar from "./DragonAvatar";
import {Button} from "react-bootstrap";

class Dragon extends React.Component {

    componentDidMount() {
        this.props.fetchDragon();
    }

    getNewDragon = () => {
        this.props.fetchDragon();
    }

    render() {
        const {dragon} = this.props;

        return (
            <div>
                <Button onClick={this.getNewDragon}>New Dragon</Button>
                <DragonAvatar dragon = {dragon} />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    dragon: state.dragon
});

const mapDispatchToProps = (dispatch) => ({
    fetchDragon: () => dispatch(fetchDragon())
});

export default connect(mapStateToProps, mapDispatchToProps)(Dragon);