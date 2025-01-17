import React from "react";
import "../css/footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Karen</h4>
            <h1 className="list-unstyled">
              <li></li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Marlys</h4>
            <ui className="list-unstyled">
              <li></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Antonella</h4>
            <ui className="list-unstyled">
              <li></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} PELIS REVIEWS | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
