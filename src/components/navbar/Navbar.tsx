import { Container, Row, Col, Button } from 'react-bootstrap'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, fab } from '@fortawesome/free-brands-svg-icons';
import { useAppDispatch } from '../../app/hooks';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {

    const resize = useAppSelector(state => state.navbar.resize); // get resize state from redux store to determine if navbar should be hidden or not
    const currentPage = useAppSelector(state => state.navbar.value); 
    const [prevPage, setPrevPage] = useState('');
    const [changeMenu, setChangeMenu] = useState(false);

    const [width, setWidth] = useState(0);  
    const [menu, setMenu] = useState(false); // state to determine if menu is open or not
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    // check size of window on mount and resize
    const handleResize = () => {
        setWidth(window.innerWidth);
      };
      
      useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); 
      
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    // resize navbar on window resize
    useEffect(() => {
        const updateWindowDimensions = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateWindowDimensions);

        if(width < 768) {
            const navbar = document.querySelector('.navbar');
            navbar?.classList.add('hide');
            dispatch({ type: 'navbar/resizeWindow', payload: true })
        }else {
            const navbar = document.querySelector('.navbar');
            navbar?.classList.remove('hide');
            dispatch({ type: 'navbar/resizeWindow', payload: false })
        }

        return () => window.removeEventListener('resize', updateWindowDimensions);
    },[width])

    useEffect(() => {
        if (changeMenu) {
            setChangeMenu(false);
            return;
        }
        
        if (menu && !changeMenu) {
            setPrevPage(currentPage);
            dispatch({ type: 'navbar/changePage', payload: 'Menu' });
        } else {
            dispatch({ type: 'navbar/changePage', payload: prevPage });
        }
    }, [menu]);

    useEffect(() => {
    if(changeMenu) {
        setMenu(false);
    }
    },[changeMenu])
      
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
        <>
        {
            !resize ?
            <div
                className='navbar'
                style={{
                    height: '100vh',
                    width: resize ? '0' : '20rem',
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
            :
            <div
                className='mobile-navbar' 
                style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '2rem',
                    cursor: 'pointer',
                }}
            >
                <div onClick={() => setMenu(!menu)}>
                    <FontAwesomeIcon color='rgb(25,135,84)' size="2x" icon={menu ? faClose : faBars} />
                </div>
            </div>
        }
        {
            menu && 
            <Container
                fluid
                className='sticky-element'
                style={{
                    backgroundColor: 'rgb(4, 7, 9)',
                    position: 'absolute',
                    height: '100vh',
                }}
            >
                <Row>
                    <Col>
                        {
                            menuItems.map((items, index) => {
                                return (
                                    <div className='d-flex justify-content-center m-2' key={index}>
                                        <Button 
                                        onClick={() => {
                                            setChangeMenu(true);
                                            if(items.name === 'Github') {
                                                dispatch({ type: 'navbar/changePage', payload: prevPage });
                                                window.open('https://github.com/FFsDeagle/', '_blank');
                                                return;
                                            }else {
                                                dispatch({ type: 'navbar/changePage', payload: items.name });
                                            }
                                            navigate(items.link);
                                        }} variant='secondary' className='button-class mt-2 fs-4 border-1 w-100 rounded border-light'>{items?.name} {items?.icon}</Button>
                                    </div>
                                )
                            })
                        }
                    </Col>
                </Row>
            </Container>
        }
        </>
    )
};

export default Navbar;
