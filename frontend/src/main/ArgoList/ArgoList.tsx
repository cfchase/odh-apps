import React from 'react';

import {
    PageSection,
    PageSectionVariants,
    TextContent,
    Text
} from '@patternfly/react-core';
import {Link} from "react-router-dom";
import {Table, TableBody, TableHeader} from "@patternfly/react-table";

const columns = [
    {title: 'Argo Workflows'}
]

const data = [
    {
        cells: [
            {
                title: <Link to='/'>Argo Workflow LR-1</Link>,
                props: {column: 'Argo Workflows'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Argo Workflow LR-2</Link>,
                props: {column: 'Argo Workflows'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Argo Workflow FA-1</Link>,
                props: {column: 'Argo Workflows'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Argo Workflow FA-2</Link>,
                props: {column: 'Argo Workflows'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Argo Workflow SA-1</Link>,
                props: {column: 'Argo Workflows'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Argo Workflow SA-2</Link>,
                props: {column: 'Argo Workflows'}
            }
        ]
    }
];

function calculateFilteredRows(filter: any, data: any[]) {
    return data;
}

export const ArgoList = () => {
    const filter = null;
    const filteredRows = calculateFilteredRows(filter, data);

    return (
        <>
            <PageSection variant={PageSectionVariants.light} isFilled>
                <TextContent>
                    <Text component='h1'>Argo Jobs and Workflows</Text>
                    <Text component='p'>
                        List of Argo Workflows
                    </Text>
                </TextContent>
                <Table cells={columns}
                       rows={filteredRows}
                       aria-label='List of Argo Workflows'>
                    <TableHeader/>
                    <TableBody/>
                </Table>
            </PageSection>
        </>)

};
