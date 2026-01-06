import React from 'react';
import { Hero } from '../components/Sections/Hero';
import { Integrations } from '../components/Sections/Integrations';
import { Problem } from '../components/Sections/Problem';
import { Promise } from '../components/Sections/Promise';
import { HowItWorks } from '../components/Sections/HowItWorks';
import { FeatureWalkthrough } from '../components/Sections/FeatureWalkthrough';
import { UseCases } from '../components/Sections/UseCases';
import { Trust } from '../components/Sections/Trust';
import { Pricing } from '../components/Sections/Pricing';
import { FAQ } from '../components/Sections/FAQ';
import { LaunchOffer } from '../components/Sections/LaunchOffer';
import { SignupForm } from '../components/Sections/SignupForm';

export const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Integrations />
      <Problem />
      <Promise />
      <HowItWorks />
      <FeatureWalkthrough />
      <UseCases />
      <Trust />
      <Pricing />
      <FAQ />
      <LaunchOffer />
      <SignupForm />
    </>
  );
};