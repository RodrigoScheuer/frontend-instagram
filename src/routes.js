import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed';
import New from './pages/New';

function Routes() {
    return (
        // exact é para pegar exatamente essa rota e não ex.: /new/outra_coisa
        <Switch>
            <Route path="/" exact component={Feed} />
            <Route path="/new" exact component={New} />
        </Switch>
    )
}

export default Routes;