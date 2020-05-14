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


type NavItemData = {
    id: string,
    label: string,
    href: string
}

type NavGroupData = {
    group: {
        id: string,
        title: string
    },
    children: NavItemData[]
}

const navDataList = [
    {id: 'odh-apps', label: 'ODH Applications', href: '/odh-apps'},
    {
        group: {id: 'dev', title: 'Development'},
        children: [
            {id: 'jupyter', label: 'Jupyter', href: '/jupyter'},
            {id: 'rstudio', label: 'RStudio', href: '/rstudio'}
        ]
    },
    {
        group: {id: 'training', title: 'Training'},
        children: [
            {id: 'argo', label: 'Argo', href: '/argo'},
            {id: 'kf-pipelines', label: 'Kubeflow Pipelines', href: '/kf-pipelines'},
            {id: 'tekton', label: 'Tekton', href: '/tekton'}
        ]
    },
    {
        group: {id: 'serving', title: 'Serving'},
        children: [
            {id: 'seldon', label: 'Seldon', href: '/seldon'},
            {id: 'kf-serving', label: 'Kubeflow Pipelines', href: '/kf-serving'},
            {id: 'tf-serving', label: 'Tensorflow Serving', href: '/tf-serving'}
        ]
    },
]

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

    const navItems = navDataList.map(item => {
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

