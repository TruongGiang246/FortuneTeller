import { BrowserRouter, Route, Routes} from "react-router-dom"
import DefaultLaypout from './Layout/DefaltLayout/NavBar'
import { publicRoutes } from './router/route';
import React from 'react';
import './App.css'
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from "./page/Login/fireBase";
function App() {


  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName,
          email: currentUser.email,
          photo: currentUser.photoURL,
          uid: currentUser.uid,
        });
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  return (
    <div className="top_wrapper">
      <BrowserRouter basename="/FortuneTeller">
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          let Layout = DefaultLaypout
          if(route.layout){
            Layout = route.layout
          }else if(route.layout === null){
            Layout = React.Fragment
          }

          if(route.LoginAuth){
            return <Route key={index} path={route.path} element = {
              route.nav ? (<Page to="/"/>) : ( <Layout><Page user={user}/></Layout>)
            }/>
          }

          return <Route key={index} path={route.path} element = {
            route.nav ? (<Page to="/"/>) : ( <Layout><Page/></Layout>)
          }/>
        })}
        

      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
