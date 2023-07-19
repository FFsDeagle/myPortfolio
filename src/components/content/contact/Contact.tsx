import { Container, Col, Row } from 'react-bootstrap'

const Contact = () => {
    return (
        <Container fluid style={{
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
                            </Row>
                        </div>
                    </Col>
                </Row>
        </Container>
    )
};

export default Contact;
