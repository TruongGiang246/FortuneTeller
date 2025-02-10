
import HomePage from '../page/Home/Home'
import Matrixdes from '../page/Matrixdes/Matrixdes'
import TarotArea from '../page/TarotArea/TarotArea'
const publicRoutes = [
    {path: '/FortuneTeller', component: HomePage},
    {path: '/FortuneTeller/MatrixDestiny', component: Matrixdes},
    {path: '/FortuneTeller/Tarot', component: TarotArea}
]

export{publicRoutes}