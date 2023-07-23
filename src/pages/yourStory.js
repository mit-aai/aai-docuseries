import React from "react";
import Spinner from "react-spinkit";
import './yourStory.css'

export default function YourStory() {
    React.useEffect(() => {
        document.title = 'Confessions: Your Story';
      }, []);
    return (
        <FormWrapper />
    );
}

class FormWrapper extends React.Component {
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
            <div className="form-container">
                {this.state.loading ? (
                    <div className="spinner-container ">
                        <Spinner className="spinner" name="line-scale-pulse-out" fadeIn="none" color="#bdcab3" />
                    </div>
                ) : null }
                <iframe className="form" title="Your Story" onLoad={this.hideSpinner} src="https://docs.google.com/forms/d/e/1FAIpQLSd2ZQ_tmv7WdL6fqv0RhurP2P8IPGQVmiIWgdMByfhJeWJnAQ/viewform?embedded=true" width="640" height="766" frameBorder="0" marginHeight="0" marginWidth="0"></iframe>
            </div>
        );
    };
}
