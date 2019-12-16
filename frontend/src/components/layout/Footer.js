import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      // Footer
      <footer className="page-footer font-small bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-12 py-5">
              <div className="mb-5 text-center">
                <a className="fb-ic">
                  <i className="fab fa-facebook-f fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="tw-ic">
                  <i className="fab fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="gplus-ic">
                  <i className="fab fa-google-plus-g fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="li-ic">
                  <i className="fab fa-linkedin-in fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="ins-ic">
                  <i className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x">
                    {" "}
                  </i>
                </a>
                <a className="pin-ic">
                  <i className="fab fa-pinterest fa-lg white-text fa-2x"> </i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3">
          © 2018 Copyright:
          <a href="/" id="footer_home_link">
            DreactJS
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
