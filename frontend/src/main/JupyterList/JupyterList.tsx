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

export const JupyterList = () => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Text component='h1'>Jupyter Notebooks</Text>
        <Text component='p'>
          List of Jupyter Notebooks
        </Text>
      </TextContent>
    </PageSection>
    <PageSection isFilled>
      <Gallery gutter='md'>
        {Array.apply(0, Array(10)).map((x, i) => (
          <GalleryItem key={i}>
            <Card>
              <CardBody>Notebook</CardBody>
            </Card>
          </GalleryItem>
        ))}
      </Gallery>
    </PageSection>
  </>
);
