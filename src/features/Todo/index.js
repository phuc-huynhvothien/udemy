import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import ListPage  from './pages/ListPage'
import DetailPage  from './pages/DetailPage'
TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const match = useRouteMatch();
    if(match){
        console.log(match)
    }

    return (
        <div>
            <Switch>
                <Route path={match.path} component={ListPage} exact />
                <Route path={`${match.path}/:todo`} component={DetailPage} />
            </Switch>
        </div>
    );
}

export default TodoFeature;