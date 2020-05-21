import React, {lazy, Suspense} from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';

const OdhAppList = lazy(() => import('../../main/OdhAppList'));
const OdhAppDetail = lazy(() => import('../../main/OdhAppDetail'));
const JupyterList = lazy(() => import('../../main/JupyterList'));
const Argo = lazy(() => import('../../main/ArgoList'));
const SeldonList = lazy(() => import('../../main/SeldonList'));
const NotFound = lazy(() => import('../../main/NotFound'));

export const Routes = () => (
    <Suspense fallback={<div className='route-loading'><h1>Loading...</h1></div>}>
        <Switch>
            <Route path='/' exact render={() => (
                <Redirect to={'/odh-apps'}/>
            )}/>
            <Route path='/odh-apps' exact component={OdhAppList}/>
            <Route path='/odh-apps/:id' exact component={OdhAppDetail}/>
            <Route path='/jupyter' exact component={JupyterList}/>
            <Route path='/rstudio' exact component={NotFound}/>
            <Route path='/argo' exact component={Argo}/>
            <Route path='/kf-pipelines' exact component={NotFound}/>
            <Route path='/tekton' exact component={NotFound}/>
            <Route path='/seldon' exact component={SeldonList}/>
            <Route path='/kf-serving' exact component={NotFound}/>
            <Route path='/tf-serving' exact component={NotFound}/>

            <Route component={ NotFound } />
        </Switch>
    </Suspense>
);

