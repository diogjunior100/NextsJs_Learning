import {BrowserRouter, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Requisicoes from "./Components/Requisicoes";

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component={Home}/>
            <Route path="/Nutri" component={Requisicoes}/>
        </BrowserRouter>
    )
}

export default Routes;