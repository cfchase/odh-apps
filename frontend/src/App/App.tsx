import React, {useState} from 'react';
import { withRouter } from "react-router-dom";
import {Page} from '@patternfly/react-core';
import {Header, NavSidebar, Routes} from './components';


import './App.scss';

export const App = withRouter(() => {
    const [isNavOpen, setIsNavOpen] = useState<boolean>(true);

    const onNavToggle = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <Page
            header={<Header isNavOpen={isNavOpen} onNavToggle={onNavToggle}/>}
            sidebar={<NavSidebar isNavOpen={isNavOpen}/>}
            className='app'>
            <Routes/>
        </Page>
    );
});

