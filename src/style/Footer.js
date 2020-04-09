import React, { Component } from 'react';
import Navbar from "react-bootstrap/Navbar";

class Footer extends Component {
    constructor(props){
        super(props);

    }
    render() {
        return (
            <Navbar expand="lg" fixed={this.props.position} className="footer section-dark-blue clearfix">
                <div className="footer-grid pt-9">
                        <div className="col-sm-4 col-xs-8">
                            <h4 className="mb-8">EDUSYS</h4>
                            <ul className="list-unstyled">
                                <li><a href="/company">About Us</a></li>
                                <li><a href="https://blog.boomr.com">Blog</a></li>
                                <li className=""><a href="/faq">FAQs</a></li>
                                <li className=""><a href="/pricing">Pricing</a></li>
                                <li><a href="/contact">Contact</a></li>
                                <li><a href="/why-us">Why Us?</a></li>
                            </ul>
                        </div>
                </div>
            </Navbar>
        );
    }
}

export default Footer;