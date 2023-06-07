import React from 'react';
import classes from './Cart.module.css';
import { Modal } from '../UI/Modal';
import { CartItem } from './CartItem';

export const Cart = (props) => {
  const cartCtx = [{id: 'c1', name:'sushi', amount: 2, price:12.99 }];
  const cartItemRemoveHandler = (id) => {
    // cartCtx.removeItem(id);
    console.log('cart item removed');
  }
  const cartItemAddHandler = (item) => {
    // cartCtx.addItem({...item, amount: 1});
    console.log('cart item added');
  }
  const cartitem = <ul className={classes['cart-items']}>
    {cartCtx.map((item) => (
      <CartItem 
        key={item.id} 
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null, item.id)}
        onAdd={cartItemAddHandler.bind(null, item)}
      />
    ))}
  </ul>
  return (
    <Modal onClose= {props.onClose}>
    <div>
        {cartitem}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </div>
    </Modal>
  )
}
