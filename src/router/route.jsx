
import HomePage from '../page/Home/Home'
import Matrixdes from '../page/Matrixdes/Matrixdes'
import TarotArea from '../page/TarotArea/TarotArea'
import TarotResult from '../page/TarotArea/TarotResult'
import Numerology from '../page/Numerology/Numerology'
import Blog from '../page/Blog/Blog'
import InBlox from '../page/Blog/InBlox'
import { Navigate } from 'react-router-dom'
const publicRoutes = [
    {path: '*', component: Navigate, nav: true},
    {path: '/', component: HomePage},
    {path: '/MatrixDestiny', component: Matrixdes},
    {path: '/Tarot', component: TarotArea},
    {path: '/Tarot/result', component: TarotResult},
    {path: '/Numerology', component: Numerology},
    {path: '/Blog', component: Blog},
    {path: '/Blog/Content', component: InBlox}
]

export{publicRoutes}