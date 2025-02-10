
import HomePage from '../page/Home/Home'
import Matrixdes from '../page/Matrixdes/Matrixdes'
import TarotArea from '../page/TarotArea/TarotArea'
const publicRoutes = [
    {path: '/Home', component: HomePage},
    {path: '/Home/MatrixDestiny', component: Matrixdes},
    {path: '/Home/Tarot', component: TarotArea}
]

export{publicRoutes}