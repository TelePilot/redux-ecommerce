import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import styled from 'styled-components';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartContainer = styled.div`
	width: 45px;
	height: 45px;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;
`;
const ShoppingCont = styled(ShoppingIcon)`
	width: 24px;
	height: 24px;
`;
const ItemCount = styled.span`
	position: absolute;
	font-size: 10px;
	font-weight: bold;
	bottom: 12px;
`;

const CartIcon = ({ toggleCartHidden }) => {
	return (
		<CartContainer onClick={toggleCartHidden}>
			<ShoppingCont />
			<ItemCount>0</ItemCount>
		</CartContainer>
	);
};

const mapDispatchToProps = dispatch => ({
	toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
