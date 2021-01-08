import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import styled from 'styled-components';

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
const CartItems = styled.div`cart-items {
    height: 240px;
    display: flex;
    flex-direction: column;
    overflow: scroll;`;

const CartDropDown = () => {
	return (
		<Cont>
			<CartItems />
			<CustomButton>GO TO CHECKOUT</CustomButton>
		</Cont>
	);
};

export default CartDropDown;
