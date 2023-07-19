import { Container, Col, Row } from 'react-bootstrap';
import image from './image.jpg';
import './About.css';

const About = () => {
  return (
    <Container className='about-wrapper' fluid style={{
      paddingTop: '6.5rem',
      marginLeft: '20rem',
      width: 'calc(100vw - 20rem)',
      backgroundColor: 'rgb(8, 13, 19)',
      minHeight: '100vh',
    }}>
        <Col lg={11} className='d-flex'>
          <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
            <Row>
                <Col md={5} lg={5}>
                    <h1 className='text-light fs-2'>About Me</h1>
                </Col>
                <Col md={5} lg={5} className='text-center mb-4'>
                    <img src={image} alt="Farid Firoz" className="rounded mx-auto d-block rounded-circle" style={{
                    width: '10rem',
                    height: 'auto',
                    }}/>
                </Col>
            </Row>
          </div>
        </Col>
      <Row className='flex-lg-row'>
        <Col lg={11} className='d-flex'>
          <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
            <Row>
              <Col xs={11} sm={11} md={11} lg={11}>
                <h1 className='text-light fs-2'>About Me</h1>
                <h3 className='fs-4'>Hi there! I'm Farid Firoz, a software engineer based in Perth, Australia.</h3>
                <h3 className='fs-4'>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect (haha), performant experiences.</h3>
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={11} className='d-flex'>
          <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
            <h1 className='text-light fs-2'>What are my skills?</h1>
            <h3>Here are a few technologies I've been working with recently:</h3>
            <h3>Front End</h3>
            <ul style={{ marginLeft: '2rem' }}>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Express</li>
              <li>HTML & CSS</li>
              <li>Bootstrap</li>
              <li>GitHub</li>
              <li>C# .Net</li>
              <li>VBA</li>
              <li>Sap Gui Scripting</li>
            </ul>
            <h3>Back End</h3>
            <ul style={{ marginLeft: '2rem' }}>
              <li>Firebase</li>
              <li>SQL</li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
