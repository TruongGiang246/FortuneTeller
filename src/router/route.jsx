
import HomePage from '../page/Home/Home'
import Matrixdes from '../page/Matrixdes/Matrixdes'
import TarotArea from '../page/TarotArea/TarotArea'
import Numerology from '../page/Numerology/Numerology'
import DISCQuiz from '../page/disc/Disc'
import AstroChartRequest from '../page/Horoscope/AstroChartRequest'
import Report from '../page/Blog/Report'
import { Navigate } from 'react-router-dom'
import Login from '../page/Login/Login'
import Guide from '../page/Guide/Guide'
import Resource from '../page/Resource/Resource'
const publicRoutes = [
    {path: '*', component: Navigate, nav: true},
    {path: '/', component: HomePage},
    {path: '/MatrixDestiny', component: Matrixdes},
    {path: '/Tarot', component: TarotArea},
    {path: '/Numerology', component: Numerology},
    {path: '/DISC', component: DISCQuiz},
    {path: '/Astrology', component: AstroChartRequest},
    {path: '/Report', component: Report},
    {path: '/Login', component: Login, LoginAuth: true},
    {path: '/Guide', component: Guide},
    {path: '/Resource', component: Resource}
]

export{publicRoutes}