import React from 'react';

import {
    PageSection,
    PageSectionVariants,
    TextContent,
    Text
} from '@patternfly/react-core';

import {Table, TableBody, TableHeader} from "@patternfly/react-table";
import {Link} from "react-router-dom";

const columns = [
    {title: 'ODH Applications'},
    {title: 'Development'},
    {title: 'Training'},
    {title: 'Serving'}
];

const data = [
        {
            cells: [
                {
                    title: <Link to='/'>Linear Regression 1</Link>,
                    props: {column: 'ODH Applications'}
                },
                {
                    title: <Link to='/'>Jupyter Notebook LR-1</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/'>Argo Workflow LR-1</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/'>Seldon Service LR-1</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/'>Linear Regression 2</Link>,
                    props: {column: 'ODH Applications'}
                },
                {
                    title: <Link to='/'>Jupyter Notebook LR-2</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/'>Argo Workflow LR-2</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/'>Seldon Service LR-2</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/'>Flake Analysis 1</Link>,
                    props: {column: 'ODH Applications'}
                },
                {
                    title: <Link to='/'>Jupyter Notebook FA-1</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/'>Argo Workflow FA-1</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/'>Seldon Service FA-1</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/'>Flake Analysis 2</Link>,
                    props: {column: 'ODH Applications'}
                },
                {
                    title: <Link to='/'>Jupyter Notebook FA-2</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/'>Argo Workflow FA-2</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/'>Seldon Service FA-2</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/'>Sentiment Analysis 1</Link>,
                    props: {column: 'ODH Applications'}
                },
                {
                    title: <Link to='/'>Jupyter Notebook SA-1</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/'>Argo Workflow SA-1</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/'>Seldon Service SA-1</Link>,
                    props: {column: 'Serving'}
                },
            ]
        },
        {
            cells: [
                {
                    title: <Link to='/'>Sentiment Analysis 2</Link>,
                    props: {column: 'ODH Applications'}
                },
                {
                    title: <Link to='/'>Jupyter Notebook SA-2</Link>,
                    props: {column: 'Development'}
                },
                {
                    title: <Link to='/'>Argo Workflow SA-2</Link>,
                    props: {column: 'Training'}
                },
                {
                    title: <Link to='/'>Seldon Service SA-2</Link>,
                    props: {column: 'Serving'}
                },
            ]
        }
    ];

function calculateFilteredRows(filter:any, data:any[]) {
    return data;
}

export const OdhAppList = () => {
    const filter = null;
    const filteredRows = calculateFilteredRows(filter, data);
    return (
        <PageSection variant={PageSectionVariants.light} isFilled>
            <TextContent>
                <Text component='h1'>Open Data Hub Applications</Text>
                <Text component='p'>
                    List of Open Data Hub Applications
                </Text>
            </TextContent>
            <Table cells={columns}
                   rows={filteredRows}
                   aria-label='List of ODH Applications'>
                <TableHeader/>
                <TableBody/>
            </Table>
        </PageSection>
    );
};
