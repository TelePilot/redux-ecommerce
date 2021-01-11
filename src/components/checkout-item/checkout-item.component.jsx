import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import {
	clearItemFromCart,
	addItem,
	removeItem,
} from '../../redux/cart/cart.actions';

const CheckoutCont = styled.div`
	width: 100%;
	display: flex;
	min-height: 100px;
	border-bottom: 1px solid darkgrey;
	padding: 15px 0;
	font-size: 20px;
	align-items: center;
`;
const ImageCont = styled.div`
	width: 23%;
	padding-right: 15px;
`;
const Image = styled.img`
	width: 100%;
	height: 100%;
`;
const Details = styled.span`
	width: 23%;
`;
const Quantity = styled.span`
	width: 23%;
	display: flex;
`;

const RemoveButton = styled.div`
	cursor: pointer;
	padding-left: 12px;
`;
const Value = styled.span`
	margin: 0 10px;
`;
const Arrow = styled.div`
	cursor: pointer;
`;
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CheckoutCont>
			<ImageCont>
				<Image src={imageUrl} alt='item' />
			</ImageCont>
			<Details>{name}</Details>
			<Quantity>
				<Arrow onClick={() => removeItem(cartItem)}>&#10094;</Arrow>
				<Value>{quantity}</Value>

				<Arrow onClick={() => addItem(cartItem)}>&#10095;</Arrow>
			</Quantity>
			<Details>${price}</Details>
			<RemoveButton onClick={() => clearItem(cartItem)}>&#10005;</RemoveButton>
		</CheckoutCont>
	);
};

const mapDispatchToProps = dispatch => ({
	clearItem: item => dispatch(clearItemFromCart(item)),
	addItem: item => dispatch(addItem(item)),
	removeItem: item => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
