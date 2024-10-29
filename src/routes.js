import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Index from "./Components/Header";


const Routes = () => {
    return (
        <BrowserRouter>
            <Index/>
            <Route path="/" component={Home}/>
            <Route path="/sobre" component={Sobre}/>
            <Route path="/contato" component={Contato} />
        </BrowserRouter>
    )
}

export default Routes;