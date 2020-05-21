import React, {useState} from 'react';
import {Link, useLocation, withRouter} from 'react-router-dom';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import { AppState} from './reducer';

import {
    Breadcrumb,
    BreadcrumbItem,
    Page
} from '@patternfly/react-core';

import {
    Header,
    NavSidebar,
    Routes
} from './components';

import {navMap} from './utilities/NavData'

import './App.scss';
import * as H from 'history';

export const App = withRouter(() => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(true);

    const onNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <Page
            header={<Header isNavOpen={isNavOpen} onNavToggle={onNavToggle}/>}
            sidebar={<NavSidebar isNavOpen={isNavOpen}/>}
            isManagedSidebar
            className='app'>
            <Routes/>
        </Page>
    );
});

function buildBreadcrumb(location: H.Location<H.LocationState>) {
    let re = /^(\/[a-z-]*)/;
    let match = re.exec(location.pathname)
    let link: string = match ? match[1] : '/';
    link = link || '/';
    console.log(match);
    const breadcrumb = (
        <Breadcrumb>
            <BreadcrumbItem isActive> {navMap[link]}</BreadcrumbItem>
        </Breadcrumb>
    );

    return breadcrumb;
}

type StateProps = {
};

interface DispatchProps {
}

const mapStateToProps = (state: AppState): StateProps => {
    return {
    };
};

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(App);