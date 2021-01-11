import React from 'react';
import styled from 'styled-components';

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
	padding-left: 20px;
`;

const RemoveButton = styled.div`
	cursor: pointer;
	padding-left: 12px;
`;
const CheckoutItem = ({ cartItem: { name, quantity, imageUrl, price } }) => {
	return (
		<CheckoutCont>
			<ImageCont>
				<Image src={imageUrl} alt='item' />
			</ImageCont>
			<Details>{name}</Details>
			<Quantity>{quantity}</Quantity>
			<Details>${price}</Details>
			<RemoveButton>&#10005;</RemoveButton>
		</CheckoutCont>
	);
};

export default CheckoutItem;
