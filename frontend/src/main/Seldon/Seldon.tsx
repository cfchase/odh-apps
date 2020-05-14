import React from 'react';

import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text
} from '@patternfly/react-core';

export const Seldon = () => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Text component='h1'>Seldon Deployments</Text>
        <Text component='p'>
          List of Seldon Deployments and associated metrics
        </Text>
      </TextContent>
    </PageSection>
    <PageSection isFilled>

    </PageSection>
  </>
);
