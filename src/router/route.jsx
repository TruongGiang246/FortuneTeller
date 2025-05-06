
import HomePage from '../page/Home/Home'
import Matrixdes from '../page/Matrixdes/Matrixdes'
import TarotArea from '../page/TarotArea/TarotArea'
import TarotResult from '../page/TarotArea/TarotResult'
import Numerology from '../page/Numerology/Numerology'
import Blog from '../page/Blog/Blog'
import DISCQuiz from '../page/disc/Disc'
import AstroChartRequest from '../page/Horoscope/AstroChartRequest'
import Report from '../page/Blog/Report'
import { Navigate } from 'react-router-dom'
import Login from '../page/Login/Login'
import Guide from '../page/Guide/Guide'
const publicRoutes = [
    {path: '*', component: Navigate, nav: true},
    {path: '/', component: HomePage},
    {path: '/MatrixDestiny', component: Matrixdes},
    {path: '/Tarot', component: TarotArea},
    {path: '/Tarot/result', component: TarotResult},
    {path: '/Numerology', component: Numerology},
    {path: '/Personal_Report', component: Blog},
    {path: '/DISC', component: DISCQuiz},
    {path: '/Astrology', component: AstroChartRequest},
    {path: '/Personal_Report/Report', component: Report},
    {path: '/Login', component: Login},
    {path: '/Guide', component: Guide}
]

export{publicRoutes}