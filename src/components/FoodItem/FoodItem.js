import React from 'react';
import './FoodItem.scss'
import { Icon } from 'antd';
export default function FoodItem(props) {
    const food=props.data;
    return (
        <div style={{margin:'15px'}}>
            <div className='image'>
                <img src={food.image} />
                <span className="label">{food.mealType.title}</span>
            </div>

            <div className='more-details'>
                <div className="title">{food.title}</div>
                <div className="sub-title">
                    <a className="main">{food.menuType.title}. </a>
                    <a className="sub">{food.cuisineType.title}. </a>
                    <a className="sub">{food.courseType.title}</a>
                </div>
            </div>

            <div className="extra">
                <span>
                    <span className="tag light">
                        <Icon type="clock-circle" />
                        4-6 Mins</span>
                    <span className="tag dark">${food.price}</span>
                </span>
                <span className="tag green light">Free Pickup</span>
            </div>
        </div>
    )
}
