
import HomePage from '../page/Home/Home'
import Matrixdes from '../page/Matrixdes/Matrixdes'
import TarotArea from '../page/TarotArea/TarotArea'
import TarotResult from '../page/TarotArea/TarotResult'
import { Navigate } from 'react-router-dom'
const publicRoutes = [
    {path: '*', component: Navigate, nav: true},
    {path: '/', component: HomePage},
    {path: '/MatrixDestiny', component: Matrixdes},
    {path: '/Tarot', component: TarotArea},
    {path: '/Tarot/result', component: TarotResult}
]

export{publicRoutes}