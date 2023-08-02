import React from "react";
import "../Profile.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Body1, Title1, Title3, Subtitle2 } from '@fluentui/react-components';


export interface Education {
  school: string;
  degree: string;
  graduationYear: number;
}

export interface Experience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string[];
}

interface ProfileProps {
  name: string;
  title: string;
  email: string;
  phone: string;
  linkedIn: string;
  summary: string;
  education: Education[];
  experience: Experience[];
}

const Profile: React.FC<ProfileProps> = ({
  name,
  title,
  email,
  phone,
  linkedIn,
  summary,
  education,
  experience,
}) => {
  return (
    <div className="resume">
      <Container>
        <Row>
          <Title1>{name}</Title1>
          <Title3>{title}</Title3>
        </Row>
        <Row>
          <Col>Email: {email}</Col>
          <Col>Phone: {phone}</Col>
          <Col>LinkedIn: {linkedIn}</Col>
        </Row>
        <Row><Col> </Col></Row>
        <Row>
          <Col>
            <Subtitle2>Summary</Subtitle2>
          </Col>
          </Row>
          <Row>
          <Col>
            <Body1>{summary}</Body1>
            </Col>
        </Row>
        <Row>
            {/* <div className="experience">
              <Subtitle2>Experience</Subtitle2>
              {experience.map((exp, index) => (
                <div key={index}>
                  <h>{exp.position}</h4>
                  <p>{exp.company}</p>
                  <p>
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <ul>
                    {exp.description.map((d, i) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div> */}
        </Row>
        <Row>
          <div className="education">
            <h4>Education</h4>
            {education.map((edu, index) => (
              <div key={index}>
                <Body1>{edu.school}</Body1><br/>
                <Body1>{edu.degree}</Body1><br/>
                <Body1>Graduation Year: {edu.graduationYear}</Body1>
              </div>
            ))}
          </div>
        </Row>
      </Container>
      
    </div>
  );
};

export default Profile;
