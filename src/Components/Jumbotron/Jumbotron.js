import React, { useEffect, useState } from "react";
import "./Jumbotron.css";
import db from "../../firebase";
import jumbo from "../../fixtures/jumbo.json";
import { InnerContainer } from "../SytleComponent/InnerContainer";

function Jumbotron() {
  const [storyCard, setStoryCard] = useState([]);
  useEffect(() => {
    // App component will run once when it loads and never again
    db.collection("netflix").onSnapshot((snapshot) =>
      setStoryCard(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);
  return (
    <>
      {jumbo.map((item) => (
        <div key={item.id} className="jumbotron">
          <InnerContainer direction={item.direction}>
            <div className="jumbostron__pane">
              <h1 className="jumbostron__pane--title">{item.title}</h1>
              <h2 className="jumbostron__pane--subTitle">{item.subTitle}</h2>
            </div>
            <div className="jumbostron__pane">
              <div className="jumbostron__pane--container">
                <img
                  className="jumbostron__pane--img"
                  src={item.image}
                  alt={item.alt}
                />
                <div className="jumbostron__pane--video">
                  <video autoPlay playsinline muted loop>
                    <source src={item.video} alt={item.alt} type="video/mp4" />
                  </video>
                </div>
              </div>
            </div>
          </InnerContainer>
        </div>
      ))}
    </>
  );
}

export default Jumbotron;
