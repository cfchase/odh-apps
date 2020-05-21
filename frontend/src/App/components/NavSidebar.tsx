import React from 'react';
import {
    Link,
    useLocation
} from 'react-router-dom';

import {
    Nav,
    NavExpandable,
    NavItem,
    NavList,
    PageSidebar
} from '@patternfly/react-core';

import {
    NavItemData,
    NavGroupData,
    navData
} from '../utilities/NavData';


function createNavItem({id, label, href}: NavItemData, pathname: string): React.ReactNode {
    let isActive = pathname.startsWith(href);

    return (
        <NavItem
            key={id}
            itemId={id}
            isActive={isActive}
        >
            <Link to={href}>{label}</Link>
        </NavItem>
    )
}

function createNavGroup({group, children}: NavGroupData, pathname: string): React.ReactNode {
    const isActive = !!children.find(c => pathname.startsWith(c.href));

    return (
        <NavExpandable
            key={group.id}
            title={group.title}
            groupId={group.id}
            isActive={isActive}
            isExpanded={isActive}
        >
            {children.map(c => createNavItem(c, pathname))}
        </NavExpandable>
    )
}

interface Props {
    isNavOpen: boolean
}

export const NavSidebar = ({isNavOpen}: Props) => {
    let routerLocation = useLocation();

    const navItems = navData.map(item => {
        if (item.group) {
            return createNavGroup(item, routerLocation.pathname);
        }
        return createNavItem(item, routerLocation.pathname);
    });

    const nav = (
        <Nav
            className='nav'
            theme='dark'
            aria-label='Nav'
        >
            <NavList>
                {navItems}
            </NavList>
        </Nav>
    )
    return <PageSidebar isNavOpen={isNavOpen} nav={nav} theme='dark'/>;
}

