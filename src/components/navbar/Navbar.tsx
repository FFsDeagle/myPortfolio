import { Container, Row, Col, Button } from 'react-bootstrap'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';

const Navbar = ({navbarState}: any) => {

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // get navbar selection list from db and configure application to display it
    // maybe a good method would be to allow component creation in a within this app
    const menuItems = [
        {
            index: 0,
            name: 'About',
            link: '/about',
        },
        {
            index: 1,
            name: 'Projects',
            link: '/projects',
        },
        {
            index: 2,
            name: 'Contact',
            link: '/contact',
        },
        {
            index: 3,
            name: 'Github',
            link: '/github',
            icon: <FontAwesomeIcon icon={faGithub} />
        }
    ]

    return (
        <div
            className='navbar'
            style={{
                height: '100vh',
                width: '20rem',
                position: 'absolute',
                backgroundColor: 'rgb(13,17,23)',
                borderRight: '10px solid rgb(4, 7, 9)',
            }}
        >
            <Container className='h-100 text-light d-flex flex-column align-items-middle justify-content-start'>
                <Row className='d-flex'>
                    <Col>
                        <div className='fs-2 pt-4'>Farid Firoz</div>
                    </Col>
                </Row>
                <div className='mt-4 w-75'>
                    {
                        menuItems.map((items, index) => {
                            return (
                                <div className='d-flex justify-content-center m-2' key={index}>
                                    <Button onClick={() => {
                                        // console.log('Link Clicked:', items.name);
                                        dispatch({ type: 'navbar/changePage', payload: items.name });
                                        if(items.name === 'Github') {
                                            window.open('https://github.com/FFsDeagle/', '_blank');
                                            return;
                                        }
                                        navigate(items.link);
                                    }} variant='secondary' className='button-class mt-2 fs-4 border-1 w-100 rounded border-light'>{items?.name} {items?.icon}</Button>
                                </div>
                            )
                        })
                    }
                </div>
            </Container>
        </div>
    )
};

export default Navbar;
