import { BrowserRouter, Route, Routes} from "react-router-dom"
import DefaultLaypout from './Layout/DefaltLayout/NavBar'
import { publicRoutes } from './router/route';
import React from 'react';
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        {publicRoutes.map((route, index) => {
          const Page = route.component
          let Layout = DefaultLaypout
          if(route.layout){
            Layout = route.layout
          }else if(route.layout === null){
            Layout = React.Fragment
          }

          return <Route key={index} path={route.path} element = {
            <Layout>
                <Page/>
            </Layout>
          }/>
        })}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
