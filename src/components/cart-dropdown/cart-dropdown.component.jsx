import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import styled from 'styled-components';
import CartItem from '../cart-item/cart-item.component';
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

const CartDropDown = ({ cartItems }) => {
	return (
		<Cont>
			<CartItemCont>
				{cartItems.map((item, idx) => (
					<CartItem key={idx} item={item} />
				))}
			</CartItemCont>
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</Cont>
	);
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
