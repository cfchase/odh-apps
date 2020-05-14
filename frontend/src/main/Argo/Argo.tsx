import React from 'react';

import {
  PageSection,
  PageSectionVariants,
  TextContent,
  Text
} from '@patternfly/react-core';

export const Argo = () => (
  <>
    <PageSection variant={PageSectionVariants.light}>
      <TextContent>
        <Text component='h1'>Argo Jobs and Workflows</Text>
        <Text component='p'>
          List of Argo Workflows
        </Text>
      </TextContent>
    </PageSection>
    <PageSection isFilled>
    </PageSection>
  </>
);
