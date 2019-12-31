import React from 'react';
import './TopSlider.scss'
import topSlider1 from '../../asset/img/topSlider1.jpg';


export default function TopSlider(props){
    return(
        <div className={'top-slider'}>
                <div className="bg-image">
                    <img src={topSlider1}/>
                </div>
                <div className='slider-details'>
                    <h1 className='title'>Breakfast Special</h1>
                    <p className='sub'>
                        Enjoy $10 Off When you order two or more of Blueberry Pancake Breakfast
                    </p>

                    <button className='more-btn'>
                        use <span>Breakfast Special</span>
                    </button>
                </div>
            </div>

    )
}