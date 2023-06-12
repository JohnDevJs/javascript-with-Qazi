import React from 'react'
import Products from '../Products/Products';
import { Switch, Route, useParams} from 'react-router-dom';


const Routes = () => {
    return(
        <div>
            <Switch>
                <Route path='/' exact></Route>
                <Products/>
            </Switch>
        </div>
    );
};

export default Routes;

