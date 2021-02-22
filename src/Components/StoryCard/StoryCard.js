import React, { useEffect, useState } from 'react';
import './StoryCard.css'
import db from '../../firebase'


function StoryCard() {

    const [storyCard,setStoryCard] =useState([])
  useEffect(()=> {
    // App component will run once when it loads and never again
     db.collection('netflix').onSnapshot(snapshot=>(
        setStoryCard(snapshot.docs.map(doc=>doc.data()))
     ))
  }, [])
    return (
        <>
        {storyCard.map((story, index) => (
        <div className='storyCard' key={index}>
            
       
                <div className="storyCard__text" >
                    <h1 className="storyCard__title"> {story.title} </h1>
                    <h2 className="storyCard__subtitle">{story.subtitle} </h2>
                </div>
            <div className="storyCard__body">
                <div className="storyCard__body-container">
                    <img alt="" className="storyCard__body-img" 
                        src={story.image} />
                    <div className="storyCard__body-item">
                        {story.video ? (
                             <video className="storyCard__body-video" autoPlay loop muted>
                             <source 
                             src={story.video}
                              type="video/mp4"
                              />
                           </video>

                        ):(
                            <div class="storyCard__body-image">
                                <img class="our-story-card-img" src= {story.image2}  alt="" />
                                </div>
                        )}
                       
                          
                          {story.text-0 && story.text-1 ?
                           (
                            <div className="storyCard__body-text">
                           <div  className="text-0" >{story.text-0}</div>
                              <div  className="text-1">{story.text-1}</div>
                              </div>
                              ):
                          (<div className="storyCard__body-text"></div>)
                        }
                            
                    </div>
                    </div>
            </div>
            <div className="StoryCard__center-pixel"></div>
            
         
            </div>
           

    
           ) )}
        </>
    )
}

export default StoryCard