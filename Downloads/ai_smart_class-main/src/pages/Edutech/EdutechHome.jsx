// src/pages/EdutechHome.jsx
import React from 'react';
import EdutechNavbar from '../../components/edutechComponents/homeComponents/EdutechNavbar';
import EdutechMainSection from '../../components/edutechComponents/homeComponents/EdutechMainSection';
import EdutechCurriculum from '../../components/edutechComponents/homeComponents/EdutechCurriculum';
import EdutechWhyUs from '../../components/edutechComponents/homeComponents/EdutechWhyUs';
import EdutechTestimonials from '../../components/edutechComponents/homeComponents/EdutechTestimonials';
import EdutechFAQ from '../../components/edutechComponents/homeComponents/EdutechFAQ';
import EdutechFooter from '../../components/edutechComponents/homeComponents/EdutechFooter';

const EdutechHome = () => {
  return (
    <>
      <EdutechNavbar />
      <EdutechMainSection />
      <EdutechCurriculum />
      <EdutechWhyUs />
      <EdutechTestimonials />
      <EdutechFAQ />
      <EdutechFooter />
    </>
  );
};

export default EdutechHome;
