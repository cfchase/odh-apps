import React, {lazy, Suspense} from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

const OdhApps = lazy(() => import('../../main/OdhApps'));
const Jupyter = lazy(() => import('../../main/Jupyter'));
const Argo = lazy(() => import('../../main/Argo'));
const Seldon = lazy(() => import('../../main/Seldon'));
const NotFound = lazy(() => import('../../main/NotFound'));

export const Routes = () => (
    <Suspense fallback={<div className='route-loading'><h1>Loading...</h1></div>}>
        <Switch>
            <Route path="/" exact render={() => (
                <Redirect to={"/odh-apps"}/>
            )}/>
            <Route path='/odh-apps' exact component={OdhApps}/>
            <Route path='/jupyter' exact component={Jupyter}/>
            <Route path='/rstudio' exact component={NotFound}/>
            <Route path='/argo' exact component={Argo}/>
            <Route path='/kf-pipelines' exact component={NotFound}/>
            <Route path='/tekton' exact component={NotFound}/>
            <Route path='/seldon' exact component={Seldon}/>
            <Route path='/kf-serving' exact component={NotFound}/>
            <Route path='/tf-serving' exact component={NotFound}/>

            <Route component={ NotFound } />
        </Switch>
    </Suspense>
);

