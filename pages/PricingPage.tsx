import React from 'react';
import { PageHeader } from '../components/UI/PageHeader';
import { Pricing } from '../components/Sections/Pricing';
import { FAQ } from '../components/Sections/FAQ';
import { SignupForm } from '../components/Sections/SignupForm';

export const PricingPage: React.FC = () => {
  return (
    <>
       <PageHeader 
        title="Simple Pricing" 
        subtitle="Transparent plans that grow with you. No hidden fees, no surprises." 
      />
      <div className="-mt-20">
        <Pricing />
      </div>
      <FAQ />
      <SignupForm />
    </>
  );
};