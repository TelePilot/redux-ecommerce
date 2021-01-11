import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
	selectCartItems,
	selectCartTotal,
} from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
const Cont = styled.div`
	width: 55%;
	min-height: 90vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 50px auto 0;
`;
const Header = styled.div`
	width: 100%;
	padding: 10px 0;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid darkgrey;
`;
const HeaderBlock = styled.div`
	text-transform: capitalize;
	width: 23%;

	&:last-child {
		width: 8%;
	}
`;
const Total = styled.span`
	margin-top: 30px;
	margin-left: auto;
	font-size: 36px;
`;

const Checkout = ({ cartItems, total }) => {
	return (
		<Cont>
			<Header>
				<HeaderBlock>
					<span>Product</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Description</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Quantity</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Price</span>
				</HeaderBlock>
				<HeaderBlock>
					<span>Remove</span>
				</HeaderBlock>
			</Header>
			{cartItems.map(cartItem => (
				<CheckoutItem key={cartItem.id} cartItem={cartItem} />
			))}
			<Total>
				<span>Total: ${total}</span>
			</Total>
		</Cont>
	);
};

const mapStateToProps = createStructuredSelector({
	cartItems: selectCartItems,
	total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
