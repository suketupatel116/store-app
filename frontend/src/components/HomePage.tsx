import React from "react";
import Profile, { Education, Experience } from "./Profile";

const HomePage: React.FC = () => {
  const educationData: Education[] = [
    {
      school: "University of XYZ",
      degree: "Bachelor of Science in Computer Science",
      graduationYear: 2022,
    },
    // Add more education entries as needed
  ];

  const experienceData: Experience[] = [
    {
      company: "Tri-Check Income Tax Service Inc.",
      position: "Software Engineer",
      startDate: "Nov. 2022",
      endDate: "Present",
      description:
        // eslint-disable-next-line no-multi-str
        [
          "Work with CPAs to determine the needs to simplify the tax filing process for our team.",
          "Analyze the gathered information and deliver the technical solution using Python and Django based features.",
          "Work in a fast paced environment to continuously deliver features.",
          "Configure and manage AWS services and integration of application with other cloud services.",
          "Participate in product design reviews to provide input on functional requirements, product design, schedules, or potential problems.",
          "Work with different teams to develop cross-functional software solutions.",
          "Modify existing software to correct errors, or upgrade interfaces and improve performance."
      ]
    },
    // Add more experience entries as needed
  ];

  return (
    <div>
      <Profile
        name="John Doe"
        title="Software Engineer"
        email="john.doe@example.com"
        phone="(123) 456-7890"
        linkedIn="linkedin.com/in/johndoe"
        summary="Results-driven software engineer with a passion for building efficient and scalable web applications. Skilled in JavaScript, React, and Node.js. Strong problem-solving and communication skills."
        education={educationData}
        experience={experienceData}
      />
    </div>
  );
};

export default HomePage;
