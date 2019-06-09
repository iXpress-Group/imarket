import React, {Component} from 'react';
import '../css/pages/product.css';
import '../css/pages/footer.css';

class Footer extends Component {
    render() {
        return (
            <div>
                <section className="footer">
                    <div className="container text-center">
                        <div className="row">
                            <div className="col-md-4">
                                <h1>Useful Links</h1>
                                <p>Privacy Policy</p>
                                <p>Terms & Condition</p>
                                <p>Return Policy</p>
                                <p>Trader's Policy</p>
                            </div>
                            <div className="col-md-4">
                                <h1>Company</h1>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>Opportunity</p>
                            </div>
                            <div className="col-md-4">
                                <h1>Follow Us On</h1>
                                <p>
                                    <i className="fa fa-facebook-official"/>
                                    Facebook
                                </p>
                            </div>
                        </div>
                        <hr/>
                        <p className="copyright">© 2019 iXpress Market | All Right Reserved</p>
                    </div>
                </section>
            </div>
        );
    }
}

export default Footer;
