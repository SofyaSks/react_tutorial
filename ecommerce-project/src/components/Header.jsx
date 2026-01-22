import { NavLink, useNavigate, useSearchParams } from "react-router"
import { useState } from "react";
import CartIcon from '../assets/images/icons/cart-icon.png'
import LogoWhite from '../assets/images/logo-white.png'
import MobileLogoWhite from '../assets/images/mobile-logo-white.png';
import SearchIcon from '../assets/images/icons/search-icon.png';
import "./Header.css"

export function Header({ cart }) {

    const [searchParams] = useSearchParams()
    const searchText = searchParams.get('search');

    const [search, setSearch] = useState(searchText || '');

    const navigate = useNavigate()

    function updateSearchBar(event) {
        setSearch(event.target.value)
    }

    function searchProduct() {
        navigate(`/?search=${search}`)
    }

    let totalQuantity = 0;
    cart.forEach((cartItem) => {
        totalQuantity += cartItem.quantity;
    });
    return (
        <>
            <div className="header">
                <div className="left-section">
                    <NavLink to="/" className="header-link">
                        <img className="logo"
                            src={LogoWhite} />
                        <img className="mobile-logo"
                            src={MobileLogoWhite} />
                    </NavLink>
                </div>

                <div className="middle-section">
                    <input value={search} onChange={updateSearchBar}
                        className="search-bar"
                        type="text" placeholder="Search" />

                    <button className="search-button" onClick={searchProduct}>
                        <img className="search-icon" src={SearchIcon} />
                    </button>
                </div>

                <div className="right-section">
                    <NavLink className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </NavLink>

                    <NavLink className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={CartIcon} />
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </NavLink>
                </div>
            </div>
        </>
    )
}