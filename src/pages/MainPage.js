import React from 'react';
import './MainPage.scss'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import FoodList from "../components/FoodList";
import TopSlider from "../components/TopSlider/TopSlider";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/footer";
import Slider from "react-slick";

var data = require('../menu.json');

function ElevationScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

function MainPage(props) {
    var settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Header />
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
            <Grid spacing={3}>
                <Box my={2}>
                    <div className='main'>
                        <TopSlider />
                        <div className='page-body'>
                            <div className='order-option-bar'>
                                <a className="options">
                                    <div className="mode">ASAP Pickup</div>
                                    <div className="sub">395 Santa Monica Pier</div>
                                </a>
                                <button className='change'>
                                    change
                                </button>

                                <div className="type-select">
                                    <div className="item">Delivery</div>
                                    <span className="seperator">or</span>
                                    <div className="item">Pickup</div>
                                </div>
                                <div className="divider"></div>
                                <a className="catering">Catering</a>
                            </div>


                            <FoodList title={'Special Offers'} data={data} />

                            <Footer/>
                        </div>
                    </div>
                </Box>
            </Grid>
        </React.Fragment>
    );
}

export default MainPage;
