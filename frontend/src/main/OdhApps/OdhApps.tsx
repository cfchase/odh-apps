import React from 'react';

import {
  Card,
  CardBody,
  Gallery,
  GalleryItem,
  PageSection,
  PageSectionVariants,
  TextContent,
  Text
} from '@patternfly/react-core';

export const OdhApps = () => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Text component='h1'>Open Data Hub Applications</Text>
        <Text component='p'>
          List of Open Data Hub Applications
        </Text>
      </TextContent>
    </PageSection>
    <PageSection isFilled>
      <Gallery gutter='md'>
        {Array.apply(0, Array(10)).map((x, i) => (
          <GalleryItem key={i}>
            <Card>
              <CardBody>ODH Application</CardBody>
            </Card>
          </GalleryItem>
        ))}
      </Gallery>
    </PageSection>
  </>
);
