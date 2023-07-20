import { Container, Col, Row } from 'react-bootstrap';
import image from './image.jpg';
import './About.css';
import { useAppSelector } from '../../../app/hooks';

const About = () => {

  const resize = useAppSelector(state => state.navbar.resize);
  console.log(resize)

  return (
    <Container className='about-wrapper' fluid style={{
      marginLeft: resize ? '0' : '20rem',
      width: resize ? '' : 'calc(100vw - 20rem)',
      backgroundColor: 'rgb(8, 13, 19)',
      height: '100vh',
      paddingBottom: '10rem',
      paddingRight: '0',
      paddingLeft: '0',
    }}>
      <Row className='flex-lg-row' lg={12}>
        <Col xs={12} sm={12} md={12} lg={12} className='d-flex'>
          <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={8} xl={8} className='order-lg-2'>
                <h1 className='text-light fs-2'>About Me</h1>
                <h3 className='fs-4'>Hi there! I'm Farid Firoz, a Front-End Developer based in Perth, Australia.</h3>
                <h3 className='fs-4'>I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect (haha), performant experiences.</h3>
              </Col>
              <Col xs={12} sm={12} md={12} lg={4} xl={4} className='h-100 m-auto order-lg-1'>
                <img src={image} alt="Farid Firoz" className="rounded-circle img-fluid" style={{
                  maxWidth: '100%',
                  height: 'auto',
                }} />
              </Col>
            </Row>
          </div>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12} className='d-flex'>
          <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
            <h1 className='text-light fs-2'>What are my skills?</h1>
            <h3>Here are a few technologies I've been working with recently:</h3>
            <h3>Front End</h3>
            <ul style={{ marginLeft: '2rem' }}>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Redux Toolkit</li>
              <li>TypeScript</li>
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
