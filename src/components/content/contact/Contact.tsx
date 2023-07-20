import { Container, Col, Row } from 'react-bootstrap'
import './Contact.css'
import { useAppSelector } from '../../../app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const resize = useAppSelector((state) => state.navbar.resize)
    return (
        <Container className='contact-wrapper' fluid style={{
            marginLeft: resize ? '0' : '20rem',
            width: resize ? '' : 'calc(100vw - 20rem)',
            backgroundColor: 'rgb(8, 13, 19)',
            height: '100vh',
            paddingBottom: '10rem',
          }}>
                <Row>
                    <Col className='d-flex w-100'>
                        <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
                            <Row>
                                <h1 className='text-light fs-2'>Please contact me on either of the following:</h1>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className='d-flex w-100'>
                        <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
                            <Row>
                            <div className='p-1 pt-0 mb-2 text-light'>LinkedIn</div>
                            <div className='code-container border rounded' style={{
                                cursor: 'pointer',
                            }}>
                                <div className="code align-middle" onClick={() => window.open('https://www.linkedin.com/in/farid-sanullah-93a8b8217/', '_blank')}>
                                    <FontAwesomeIcon icon={faLinkedin} size='3x' /> 
                                </div>
                            </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
};

export default Contact;
