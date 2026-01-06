import React from 'react';
import { PageHeader } from '../components/UI/PageHeader';
import { FeatureWalkthrough } from '../components/Sections/FeatureWalkthrough';
import { HowItWorks } from '../components/Sections/HowItWorks';
import { UseCases } from '../components/Sections/UseCases';
import { LaunchOffer } from '../components/Sections/LaunchOffer';

export const FeaturesPage: React.FC = () => {
  return (
    <>
      <PageHeader 
        title="Built for Speed" 
        subtitle="Explore the toolkit designed to accelerate your product journey from day one." 
      />
      <FeatureWalkthrough />
      <HowItWorks />
      <UseCases />
      <LaunchOffer />
    </>
  );
};