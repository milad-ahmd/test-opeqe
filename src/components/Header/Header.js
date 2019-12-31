import React from 'react';
import './Header.scss';
import { Icon } from 'antd';
import logo from '../../asset/img/logo.jpg';

function Header(props) {
    return (
        <div className='header'>
            <a>
                <img src={logo} className='logo' />
            </a>
            <ul className={'footerItem'}>
                <li>
                    <a>Reservation</a>
                </li>
                <li>
                    <a>Orders</a>
                </li>
                <li>
                    <button className={'login-btn'}>
                        log in
                    </button>
                </li>
                <li>
                    <button className={'signup-btn'}>
                        sign up
                    </button>
                </li>
                <li>
                    <Icon className={'cart'} type="shopping-cart" />
                </li>
            </ul>
        </div>

    )
}
export default Header;
