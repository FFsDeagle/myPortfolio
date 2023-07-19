import { Container, Col, Row } from 'react-bootstrap'
import './Projects.css'

const Projects = () => {
    return (
        <Container className='projects-wrapper' fluid style={{
            paddingTop: '6.5rem',
            marginLeft: '20rem',
            width: 'calc(100vw - 20rem)',
            backgroundColor: 'rgb(8, 13, 19)',
            height: 'calc(100vh)',
            }}>
                <Row>
                    <Col className='d-flex w-100'>
                        <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
                            <Row>
                                <h1 className='text-light fs-2'>Projects</h1>
                            </Row>
                        </div>
                    </Col>
                </Row>
                <Row>
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
            </Container>
    )
};

export default Projects;
