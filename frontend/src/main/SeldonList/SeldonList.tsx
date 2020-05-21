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
    {title: 'Seldon Deployments'}
]


const data = [
    {
        cells: [
            {
                title: <Link to='/'>Seldon Deployment LR-1</Link>,
                props: {column: 'Seldon Deployments'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Seldon Deployment LR-2</Link>,
                props: {column: 'Seldon Deployments'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Seldon Deployment FA-1</Link>,
                props: {column: 'Seldon Deployments'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Seldon Deployment FA-2</Link>,
                props: {column: 'Seldon Deployments'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Seldon Deployment SA-1</Link>,
                props: {column: 'Seldon Deployments'}
            }
        ]
    },
    {
        cells: [
            {
                title: <Link to='/'>Seldon Deployment SA-2</Link>,
                props: {column: 'Seldon Deployments'}
            }
        ]
    }
];

function calculateFilteredRows(filter: any, data: any[]) {
    return data;
}

export const SeldonList = () => {
    const filter = null;
    const filteredRows = calculateFilteredRows(filter, data);

    return (
        <>
            <PageSection variant={PageSectionVariants.light} isFilled>
                <TextContent>
                    <Text component='h1'>Seldon Deployments</Text>
                    <Text component='p'>
                        List of Seldon Deployments and associated metrics
                    </Text>
                </TextContent>
                <Table cells={columns}
                       rows={filteredRows}
                       aria-label='List of ODH Applications'>
                    <TableHeader/>
                    <TableBody/>
                </Table>
            </PageSection>
        </>
    )
};
