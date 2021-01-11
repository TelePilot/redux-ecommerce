import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CustomButton from '../custom-button/custom-button.component';
import styled from 'styled-components';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { withRouter } from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const Cont = styled.div`
	position: absolute;
	width: 240px;
	height: 340px;
	display: flex;
	flex-direction: column;
	padding: 20px;
	border: 1px solid black;
	background-color: white;
	top: 90px;
	right: 40px;
	z-index: 5;
	& > button {
		margin-top: auto;
	}
`;
const CartItemCont = styled.div`
	height: 240px;
	display: flex;
	flex-direction: column;
	overflow: scroll;
`;

const Empty = styled.span`
	font-size: 18px;
	margin: 50px auto;
`;

const CartDropDown = ({ cartItems, history, dispatch }) => {
	return (
		<Cont>
			<CartItemCont>
				{cartItems.length ? (
					cartItems.map((item, idx) => <CartItem key={idx} item={item} />)
				) : (
					<Empty>Your Cart is empty</Empty>
				)}
			</CartItemCont>
			<CustomButton
				onClick={() => {
					history.push('/checkout');
					dispatch(toggleCartHidden());
				}}
			>
				GO TO CHECKOUT
			</CustomButton>
		</Cont>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
