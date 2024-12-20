import { Col, Container, Row } from "react-bootstrap";
import { useAppSelector } from "../../../app/hooks";

const ThreejsVisualizer = () => {
    
      const resize = useAppSelector(state => state.navbar.resize);
      
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
        <Row className="flex-lg-row" lg={12}>
            <Col xs={12} sm={12} md={12} lg={12} className='d-flex'>
                <div className='title fs-4 text-success text-start m-4 p-4 border border-light rounded w-100'>
                    <Row>
                        <Col xs={12} sm={12} md={12} lg={8} xl={8} className='order-lg-2'>
                            <h1 className='text-light fs-2'>3D Visualizer</h1>
                            <h3 className='fs-4'>This is a 3D visualizer that is interactive, it can be used to display data in a more user-friendly way.</h3>
                            <h3 className='fs-4'>It can be used to display data in a more user-friendly way.</h3>
                        </Col>
                    </Row>
                </div>
            </Col>
        </Row>
    </Container>
  )
};

export default ThreejsVisualizer;
