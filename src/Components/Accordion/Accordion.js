import React, { useState } from "react";
import "./Accordion.css";
import faqs from "../../fixtures/faqs.json";
import CloseIcon from "@material-ui/icons/Close";
import AddIcon from "@material-ui/icons/Add";
import Form from "../Form/Form";

export default function Accordion() {
  const [toggleShow, setToggleShow] = useState(true);

  const toggle = (i) => {
    if (toggleShow === i) {
      return setToggleShow(null);
    }
    setToggleShow(i);
  };
  return (
    <div className="accordion">
      <div className="accordion__container">
        <h1 className="accordion__title">Frequently Asked Questions</h1>
        <ul className="accordion__list">
          {faqs.map((item, i) => (
            <li key={item.id} className="accordion__item">
              <div
                onClick={() => toggle(i)}
                className="accordion__item--header"
              >
                {item.header}
                {toggleShow === i ? <CloseIcon /> : <AddIcon />}
              </div>
              <div
                className={`accordion__item--body  ${
                  toggleShow === i ? "open" : " closed"
                }  `}
              >
                <span>{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
        <Form
          subtitle2="Ready to watch? Enter your email to create 
                or restart your membership."
        />
      </div>
    </div>
  );
}
