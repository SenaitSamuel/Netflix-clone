import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__title">Questions? Contact us.</div>
      <div className="footer__break">
        <div className="footer__row">
          <div className="footer__column ">
            <Link className="footer__link" href="#">
              FAQ
            </Link>
            <Link className="footer__link" href="#">
              Investor Relations
            </Link>
            <Link className="footer__link" href="#">
              Ways to Watch
            </Link>
            <Link className="footer__link" href="#">
              Corporate Information
            </Link>
            <Link className="footer__link" href="#">
              Netflix Originals
            </Link>
          </div>
          <div className="footer__column ">
            <Link className="footer__link" href="#">
              Help Centre
            </Link>
            <Link className="footer__link" href="#">
              Jobs
            </Link>
            <Link className="footer__link" href="#">
              Terms of Use
            </Link>
            <Link className="footer__link" href="#">
              Contact Us
            </Link>
          </div>

          <div className="footer__column ">
            <Link className="footer__link" href="#">
              Account
            </Link>
            <Link className="footer__link" href="#">
              Redeem gift cards
            </Link>
            <Link className="footer__link" href="#">
              Privacy
            </Link>
            <Link className="footer__link" href="#">
              Speed Test
            </Link>
          </div>
          <div className="footer__column ">
            <Link className="footer__link" href="#">
              Media Centre
            </Link>
            <Link className="footer__link" href="#">
              Buy gift cards
            </Link>
            <Link className="footer__link" href="#">
              Cookie Preferences
            </Link>
            <Link className="footer__link" href="#">
              Legal Notices
            </Link>
          </div>
        </div>
      </div>
      <div className="footer__text">United Kingdom</div>
    </div>
  );
}
