import { Container, Col, Row } from 'react-bootstrap'
import './NotFound.css'
import { useAppSelector } from '../../../app/hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
    const resize = useAppSelector((state) => state.navbar.resize)
    console.log(resize)
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
                                <h1 className='text-light fs-2'>The page you are trying to access does not exist <FontAwesomeIcon icon={faFaceFrown} size="2x" /></h1>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Row>
        </Container>
    )
};

export default NotFound;
