import React from 'react';

import {
    PageSection,
    PageSectionVariants,
    TextContent,
    Text, Divider, Drawer, DrawerContent, DrawerContentBody
} from '@patternfly/react-core';

export const OdhAppDetail = () => {
    return (
        <>
            <PageSection variant={PageSectionVariants.light} isFilled>
                <TextContent>
                    <Text component='h1'>Open Data Hub Applications</Text>
                    <Text component='p'>
                        List of Open Data Hub Applications
                    </Text>
                </TextContent>
            </PageSection>
            <Divider component="div"/>
            <PageSection variant={PageSectionVariants.light} noPadding={true}>
                <Drawer isExpanded={true}>
                    <DrawerContent panelContent={null}>
                        <DrawerContentBody>{null}</DrawerContentBody>
                    </DrawerContent>
                </Drawer>
            </PageSection>
        </>
    );
};
