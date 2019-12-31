import React from 'react';
import './FoodList.scss'
import Grid from '@material-ui/core/Grid';
import FoodItem from './FoodItem/FoodItem'
import Slider from "react-slick";


function FoodList(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        loop:false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            ]
      };
    return (
        <Grid container>
            <Grid item xs={1}>
            </Grid>
            <Grid item xs={10}>
                <div className="each-product-header">
                    <div className="title">{props.title}</div>
                </div>
                <div className="horizontal-list-container scroll-bar">
                    <div className="bar">
                        <div className="cursor"></div>
                    </div>
                </div>


                    <React.Fragment>
                    <Slider {...settings}>

                        {props.data.map((item, index) => {
                            return (
                                <Grid className='slider-main' item xs={12}>
                                    <FoodItem key={index} data={item} />
                                </Grid>
                            )
                        })}
                        </Slider>

                    </React.Fragment>



            </Grid>
            <Grid item xs={1}>
            </Grid>

        </Grid>

    )
}
export default FoodList;
