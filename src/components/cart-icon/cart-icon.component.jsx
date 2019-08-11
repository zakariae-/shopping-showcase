import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {toggoleCartHidden} from '../../redux/cart/cart.actions'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'

import './cart-icon.styles.scss'

const CartIcon = ({toggoleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggoleCartHidden}>
        <ShoppingIcon className='shopping-icon' />
        <span className='item-count'>{itemCount}</span>
    </div>
);

const mapDispachToProps = dispach => ({
    toggoleCartHidden: () => dispach(toggoleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(
    mapStateToProps,
    mapDispachToProps
    )(CartIcon);