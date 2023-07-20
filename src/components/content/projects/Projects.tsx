import { Container, Col, Row } from 'react-bootstrap'
import './Projects.css'
import { useAppSelector } from '../../../app/hooks';

const Projects = () => {
    const resize = useAppSelector((state) => state.navbar.resize)
    return (
        <Container className='projects-wrapper' fluid style={{
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
                                <h1 className='text-light fs-2'>Current</h1>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col className='d-flex w-100'>
                        <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
                            <Row>
                            <div className='p-1 pt-0 mb-2 text-light'>KWF (Kaleidoscope World of Fashion)</div>
                            <div className='code-container border rounded'>
                                <div className="code" onClick={() => console.log('clicked')}>
                                    www.houseofbelleau.com
                                </div>
                                </div>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col className='d-flex w-100'>
                        <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
                            <Row>
                                <h1 className='text-light fs-2'>Completed</h1>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row className='row'>
                    <Col className='d-flex w-100'>
                        <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
                            <Row>
                            <div className='p-1 pt-0 mb-2 text-light'>House of Belle</div>
                            <div className='code-container border rounded'>
                                <div className="code" onClick={() => console.log('clicked')}>
                                    www.houseofbelleau.com
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

export default Projects;
