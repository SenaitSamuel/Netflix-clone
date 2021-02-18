import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch , Route  } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logOut, selectUser } from "./features/counter/userSlice";
import ProfilePage from "./pages/ProfilePage";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  

  useEffect(() => {
   
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
   
    if(userAuth){
      console.log(userAuth)
      dispatch( login ({
       uid: userAuth.uid,
       email: userAuth.email
     }))
         
    }else {
       dispatch(logOut())
    }
  });
    return unsubscribe;

    
  }, [dispatch])

  return (
    <Router>
      <div className='app'>
      {!user ? (
        <LoginPage/>
      ):(
        <Switch>
          <Route path="/profile">
            <ProfilePage/>
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      )
      }
      </div>
        
    </Router>
  );
}

export default App;