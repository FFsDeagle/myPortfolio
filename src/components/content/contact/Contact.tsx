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
            paddingRight: '0',
            paddingLeft: '0',
          }}>
            <Row className='flex-lg-row' lg={12}>
                <Row className='row'>
                    <Col className='d-flex w-100'>
                        <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
                            <Row>
                                <h1 className='text-light fs-2'>Please contact me on the following:</h1>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col className='d-flex flex-wrap justify-content-center'>
                        <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded'>
                            <Row>
                            <div className='p-1 pt-0 mb-2 text-light'>LinkedIn</div>
                                <div className='code-container d-flex justify-content-center border rounded' 
                                    onClick={() => window.open('https://www.linkedin.com/in/farid-sanullah-93a8b8217/', '_blank')}
                                    style={{
                                        cursor: 'pointer',
                                    }}
                                >
                                    <div className="code align-middle">
                                        <FontAwesomeIcon icon={faLinkedin} size='3x' /> 
                                    </div>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
};

export default Contact;
