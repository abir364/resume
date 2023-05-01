import React from 'react';
import ResumeHeader from './ResumeHeader';
import Profile from './Profile';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';

const Resume = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-10 ">
      <ResumeHeader />
      <Profile />
      <Education />
      <Projects />
      <Skills />
    </div>
  );
};

export default Resume;
