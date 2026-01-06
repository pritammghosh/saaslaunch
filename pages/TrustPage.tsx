import React from 'react';
import { PageHeader } from '../components/UI/PageHeader';
import { Trust } from '../components/Sections/Trust';
import { Integrations } from '../components/Sections/Integrations';
import { LaunchOffer } from '../components/Sections/LaunchOffer';

export const TrustPage: React.FC = () => {
  return (
    <>
       <PageHeader 
        title="Customer Stories" 
        subtitle="Join hundreds of fast-moving teams who rely on SaaSLaunch to ship better products." 
      />
      <Trust />
      <Integrations />
      <LaunchOffer />
    </>
  );
};