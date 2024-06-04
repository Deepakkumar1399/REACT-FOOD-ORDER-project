import Image from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import { useContext } from 'react';
import CartContext from '../store/CartContext.jsx';
import UserProgressContext from '../store/UserProgressContext.jsx';
export default function Header(){
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
        return totalNumberOfItems + item.quantity;
    },0);

    function handleShowCart(){
        userProgressCtx.showCart();
    }
    return(
        <header id="main-header">
            <div id="title">
                <img src={Image} alt='A Resturant'/>
                <h1>FOODBOX</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                    Cart({totalCartItems})
                </Button>
            </nav>
        </header>
    )
}