import { Container, Col, Row } from 'react-bootstrap';
import './TopPane.css';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';

const TopPane = () => {
  const navbarValue = useAppSelector(state => state.navbar.value);
  const [title, setTitle] = useState('');
  const [titleDisplay, setTitleDisplay] = useState('');
  const [iterationTime, setIterationTime] = useState(20);
  const [shouldSetIterationTime, setShouldSetIterationTime] = useState(false);

  useEffect(() => {
    switch (navbarValue) {
      case 'About':
        setTitle('Welcome to myPortfolio..|');
          reset();
        break;
      case 'Projects':
        setTitle('Projects..|');
          reset();
        break;
      case 'Contact':
        setTitle('Contact..|');
          reset();
        break;
      default:
        setTitle('Welcome to myPortfolio..|');
          reset();
        break;
    }
  }, [navbarValue]);

  const reset = () => {
    setTitleDisplay('');
    setIterationTime(20);
    setShouldSetIterationTime(true);
  }

  useEffect(() => {
    if (titleDisplay.length === title.length) {
      setShouldSetIterationTime(true);
      const interval = setInterval(() => {
        setTitleDisplay(prevTitleDisplay =>
          prevTitleDisplay.substring(0, prevTitleDisplay.length - 1)
        );
      }, iterationTime);

      return () => {
        clearInterval(interval);
      };
    } else {
      const interval = setInterval(() => {
        setTitleDisplay(prevTitleDisplay =>
          title.substring(0, prevTitleDisplay.length + 1)
        );
      }, iterationTime);

      return () => {
        clearInterval(interval);
      };
    }
  }, [titleDisplay, title, iterationTime]);

  useEffect(() => {
    if (shouldSetIterationTime && titleDisplay.length === title.length) {
      setIterationTime(500);
      setShouldSetIterationTime(false);
    }
  }, [titleDisplay, title, shouldSetIterationTime]);

  return (
    <Container
      fluid
      className='root-container'
      style={{
        height: '6.5rem',
        marginLeft: '20rem',
        width: 'calc(100vw - 20rem)',
        backgroundColor: 'rgb(4, 7, 9)',
        position: 'absolute'
      }}
    >
      <Row>
        <Col
          className='d-flex w-100'
        >
          <div className='title fs-1 text-success text-start p-4'>
            {titleDisplay}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TopPane;
