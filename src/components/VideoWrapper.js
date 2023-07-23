import React from "react";
import Spinner from "react-spinkit";
import './VideoWrapper.css'

export default class VideoWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    };

    hideSpinner = () => {
        this.setState({
            loading: false
        });
    };

    render() {
        return (
            <div className="video-wrapper">
                {this.state.loading ? (
                    <div className="video-spinner-container">
                        <Spinner className="video-spinner" name="line-scale-pulse-out" fadeIn="none" color="#bdcab3" />
                    </div>) : null }
                <iframe className="episode-video" src={this.props.link} onLoad={this.hideSpinner} title="Confessions docuseries" frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    };
}
