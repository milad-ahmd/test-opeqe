import React from 'react';
import './footer.scss'
import Grid from '@material-ui/core/Grid';
import footerImg from '../../asset/img/footerImg.jpg'
import {makeStyles} from '@material-ui/core/styles';
import apple from '../../asset/img/apple.png';
import google from '../../asset/img/google.png';
const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        display: 'flex'
    }
}));

function Footer(props) {
    const classes = useStyles();

    return(
        <div className="margin-top">
            <div className={classes.root}>
                <Grid md={6} xs={12}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center"
                    >
                        <div className="des-image">
                            <img src={footerImg}/>
                        </div>
                    </Grid>
                </Grid>
                <Grid md={6} xs={12}>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <div className='gift-card'>
                            <div style={{textAlign: 'center'}}>
                                <span className="small bold color-MediumGray">Branded</span>&nbsp;<span
                                className="small bold color-Secondary">Gift Card</span>
                            </div>

                            <div className="description">Opeqe provides a wide range of customizable
                                products
                                for reward and incentive programs that can meet your restaurant’s
                                goals.<br/>Whether
                                you are looking to drive the addition of new customers, increase the loyalty
                                of existing ones we have a customized solution for you.
                            </div>

                            <div style={{width: '100%'}}>
                                <button className='online'>
                                    <span className="MuiButton-label">GET ONLINE QUOTE</span>
                                </button>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>

            <div className='extra-order-promotion'>
                <div className="title">Ready to order?</div>
                <div className="sub-title">Browse our menu for dine-in, delivery or pickup and catering
                </div>

                <div className='order-option-bar-footer'>
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
            </div>


            <Grid className='footer' xs={12}>
                <div className='top-l2'>
                    <div className='app'>
                        <div className='apple'>
                            <img src={apple}/>
                        </div>
                        <div className='google'>
                            <img src={google}/>
                        </div>
                    </div>

                    <ul className='links'>
                        <li>About</li>
                        <li>Services</li>
                        <li>Support</li>
                        <li>Gallery</li>
                        <li>Terms</li>
                    </ul>
                </div>

                <div className={classes.root}>
                    <Grid item md={2}>
                    </Grid>
                    <Grid item md={2}>
                        <div className="link-group-l2">
                            <div className="footer-header">Main Menu</div>
                            <div className="body">
                                <a className="link-l2">Pickup</a>
                                <a className="link-l2">Delivery</a>
                            </div>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div className="link-group-l2">
                            <div className="footer-header">Orders</div>
                            <div className="body"><a className="link-l2">Upcoming Orders</a><a
                                className="link-l2">Recent Orders</a></div>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div className="link-group-l2">
                            <div className="footer-header">Reservation</div>
                            <div className="body"><a className="link-l2">Recent
                                Reservation</a><a className="link-l2">Wait
                                To Be Seated</a></div>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                    </Grid>


                </div>

                <div className={classes.root}>
                    <Grid item md={2}>
                        <div className="link-group-l2">
                            <div className="footer-header">Profile</div>
                            <div className="body"><a className="link-l2"
                            >Promos &amp; Credits</a><a
                                className="link-l2" >Rewards</a></div>
                        </div>
                    </Grid>

                    <Grid item md={2}>
                        <div className="link-group-l2">
                            <div className="footer-header">Special Offers</div>
                            <div className="body"><a className="link-l2">Chief
                                Special</a><a className="link-l2">code
                                FREEDINE</a><a className="link-l2">Breakfast
                                Special</a></div>
                        </div>
                    </Grid>

                    <Grid item md={2}>
                        <div className="link-group-l2">
                            <div className="footer-header">Support</div>
                            <div className="body"><a className="link-l2">Contact Us</a><a
                                className="link-l2">Live Chat</a></div>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                        <div className="link-group-l2">
                            <div className="footer-header">FREE FOOD</div>
                            <div className="body"><a className="link-l2">Get $20.00 credit
                                for your next order.</a></div>
                        </div>
                    </Grid>
                    <Grid item md={2}>
                    </Grid>


                </div>
            </Grid>
        </div>
    )
}
export default Footer;
