import React from "react";
import './EpisodeBlock.css'


export default class EpisodeBlock extends React.Component {

    handleKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
            this.props.clickEp();
        }
    };
    
    render() {
        return (
            <div className="episode-block-wrapper">
                <div className="episode-block"
                     onClick={this.props.clickEp}
                     onKeyDown={this.handleKeyPress}
                     tabIndex="0">
                    <img src={this.props.image}
                        alt={this.props.description}
                        className="episode-still" />
                    <div className="episode-quote" dir="ltr">{this.props.quote}</div>
                    <div className="episode-name">{this.props.name}</div>
                </div>
            </div>
        );
    }
}
