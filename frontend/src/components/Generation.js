import React from "react";
import {connect} from "react-redux";
import { fetchGeneration } from "../actions/generation";
import fetchState from "../reducers/fetchState";

const MIN_DELAY = 3000;

class Generation extends React.Component {

    timer = null;

    componentDidMount() {
        this.fetchNextGeneration();
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    fetchNextGeneration = () => {
        this.props.fetchGeneration().then(({ expiration }) => {
            const delay = this.getDelay(expiration);
            this.timer = setTimeout(this.fetchNextGeneration(), delay);
        });
    }

    getDelay = (expiration = new Date()) => {
        const delay = new Date(expiration).getTime() - new Date().getTime();
        return delay < MIN_DELAY ? delay : MIN_DELAY;
    }

    render() {
        const { generation } = this.props;

        if (generation.status === fetchState.error) {
            return (
                <div>
                    {generation.message}
                </div>
            )
        }

        return (
            <div>
                <h3>Generation {generation.generationId} expires on:</h3>
                <h4>{generation.expiration}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    generation: state.generation
});

const mapDispatchToProps = (dispatch) => ({
    fetchGeneration: () => dispatch(fetchGeneration())
});

export default connect(mapStateToProps, mapDispatchToProps)(Generation);