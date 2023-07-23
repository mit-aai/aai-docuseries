import React from "react";
import './Credits.css'

export default function People() {
    return (
        <>
            <div className="people-credit-wrapper">
                <div className="people-credit-container"> 
                    <div className="people-credit-box">
                        <div className="people-credit-title">Interviewees</div>
                        <div className="people-credit-names">
                            Jason <br />
                            Marco <br />
                            Neosha <br />
                            Nikasha <br />
                            Raj <br />
                            Shreya <br />
                            Anonymous [5]
                        </div>
                    </div>

                    <div className="people-credit-box">
                        <div className="people-credit-title">Interviewers</div>
                        <div className="people-credit-names">
                            Alana Chandler <br />
                            Elaine Wu <br />
                            Emily Huang <br />
                            Felix Li <br />
                            Lulu Tian <br />
                        </div>
                    </div>

                    <div className="people-credit-box">
                        <div className="people-credit-title">Editors</div>
                        <div className="people-credit-names">
                            Alana Chandler <br />
                            Emily Huang <br />
                            Emily Kang <br />
                            Lulu Tian <br />
                        </div>
                    </div>

                    <div className="people-credit-box">
                        <div className="people-credit-title">Website</div>
                        <div className="people-credit-names">
                            Derek Yen <br />
                            Elaine Wu <br />
                        </div>
                    </div>

                    <div className="people-credit-box">
                        <div className="people-credit-title">Support</div>
                        <div className="people-credit-names">
                            Emily Wong <br />
                            Jason Li <br />
                            May Huang <br />
                            Sophia Zheng <br />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
