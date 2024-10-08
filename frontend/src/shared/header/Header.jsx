import React, { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from 'react-router-dom';  // useNavigate instead of useHistory
import './Header.css';
import logo from '../../logo.png';
import { NavLink } from 'react-router-dom';
import { AuthContext } from "../context/auth-context";

const Header = (props) => {
    const [searchValue, setSearchValue] = useState("");
    const [searchContext, setSearchContext] = useState();
    const [searchFocus, setSearchFocus] = useState(false);
    const [index, setIndex] = useState(0);
    const [dataListValue, setDataListValue] = useState("");
    const [user, setUser] = useState();
    const [menuButton, setMenuButton] = useState(false);

    const datalist = useRef();
    const navigate = useNavigate();  // useNavigate hook
    const auth = useContext(AuthContext);

    const selectDataListValue = (event) => {
        if (event.key === 'Enter') {
            setSearchValue(dataListValue);
            setSearchFocus(false);
        }
    };

    const keyDataListHandler = (event) => {
        if (event.key === 'ArrowDown') {
            if (datalist.current.childNodes.length === 1) {
                datalist.current.childNodes[0].style.backgroundColor = 'rgb(207, 230, 208)';
                setDataListValue(datalist.current.childNodes[0].value);
                return;
            }
            datalist.current.childNodes[index].style.backgroundColor = 'rgb(207, 230, 208)';
            setDataListValue(datalist.current.childNodes[index].value);
            if (index !== 0) datalist.current.childNodes[index - 1].style.backgroundColor = '';
            if (index < searchContext.length - 1) setIndex(index + 1);
        } else if (event.key === 'ArrowUp') {
            if (datalist.current.childNodes.length === 1) {
                datalist.current.childNodes[0].style.backgroundColor = 'rgb(207, 230, 208)';
                setDataListValue(datalist.current.childNodes[0].value);
                return;
            }
            datalist.current.childNodes[index].style.backgroundColor = '';
            setDataListValue(datalist.current.childNodes[index - 1].value);
            datalist.current.childNodes[index - 1].style.backgroundColor = 'rgb(207, 230, 208)';
            if (index > 1) setIndex(index - 1);
        }
    };

    useEffect(() => {
        if (searchValue) {
            fetch('http://localhost:5000/product/search', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ productName: searchValue })
            }).then((res) => res.json()).then(data => setSearchContext(data.products));
        }
    }, [searchValue]);

    useEffect(() => {
        if (auth.userId) {
            fetch(`http://localhost:5000/user/${auth.userId}`, {
                method: 'GET',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
            }).then((res) => res.json()).then(data => setUser(data.user));
        }
    }, [auth.userId]);

    const searchSubmitHandler = (event) => {
        event.preventDefault();
        navigate(`/search/${searchValue}`);  // using navigate
    };

    return (
        <>
            {!props.minimal ? (
                <div className="header" style={{ backgroundImage: 'url(http://localhost:5000/static/images/image3.jpg)', height: menuButton ? "36em" : "" }} >
                    {searchFocus && <div className="black-shadow" onClick={() => { setSearchFocus(false); }}></div>}
                    <div className="header-content" onClick={() => { setSearchFocus(false); }}>
                        <NavLink className="logo" to='/'>
                            <img src={logo} alt="logo" />
                        </NavLink>

                        <div className="content">
                            <div className="links">
                                <NavLink to='/products'>Popular</NavLink>
                                <NavLink to='/products'>Discover</NavLink>
                                <NavLink to='/'>Business</NavLink>
                            </div>
                            <div className="profile">
                                {user && <p>{user.name}</p>}
                            </div>
                            <div className="auth-btn">
                                {!auth.isLoggedIn && <NavLink to='/login'>Login</NavLink>}
                                {!auth.isLoggedIn && <NavLink to='/signup'>Sign Up</NavLink>}
                                {auth.isLoggedIn && <NavLink to='/' onClick={() => { auth.logout(); }}>Logout</NavLink>}
                            </div>
                        </div>

                        <div className="menu" onClick={() => setMenuButton(!menuButton)}>
                            <div />
                            <div />
                            <div />
                        </div>
                    </div>

                    <div className={`rem ${menuButton ? 'content-res' : ''}`}>
                        <div className="links">
                            <NavLink to='/'>Popular</NavLink>
                            <NavLink to='/'>Discover</NavLink>
                            <NavLink to='/'>Business</NavLink>
                        </div>
                    </div>

                    <div className="search-bar" onFocus={() => { setSearchFocus(true); }}>
                        <p>Gabrielle, Video Editor - Find the perfect freelance services for your business</p>
                        <form className="search" onSubmit={searchSubmitHandler}>
                            <input list="lists" type='search' onKeyUp={selectDataListValue} onKeyDown={keyDataListHandler} onChange={(event) => setSearchValue(event.target.value)} value={searchValue} />
                            <button style={{ borderTopRightRadius: searchFocus ? 0 : '5px', borderBottomRightRadius: searchFocus ? 0 : '5px' }}>Search</button>
                        </form>

                        {searchFocus && searchContext &&
                            <div className="datalist" id="lists" ref={datalist}>
                                {searchContext.map(item => (
                                    <input
                                        key={item.id}
                                        defaultValue={item.productName}
                                        onClick={(event) => {
                                            setSearchValue(event.target.value);
                                            setSearchFocus(false);
                                        }}
                                    />
                                ))}
                            </div>
                        }
                    </div>
                </div>
            ) : (
                <div className="minimal-header">
                    <NavLink className="logo" to='/'>
                        <img src={logo} alt="logo" />
                    </NavLink>
                    <div className="search-bar" onFocus={() => { setSearchFocus(true); }}>
                        <form className="search" onSubmit={searchSubmitHandler}>
                            <input list="lists" type='search' onKeyUp={selectDataListValue} onKeyDown={keyDataListHandler} onChange={(event) => setSearchValue(event.target.value)} value={searchValue} />
                            <button style={{ borderTopRightRadius: searchFocus ? 0 : '5px', borderBottomRightRadius: searchFocus ? 0 : '5px' }}>Search</button>
                        </form>

                        {searchFocus && searchContext &&
                            <datalist id="lists">
                                {searchContext.map(item => (
                                    <option key={item.id} value={item.productName}>
                                        {item.productName}
                                    </option>
                                ))}
                            </datalist>
                        }
                    </div>
                    <div className="auth-btn">
                        {!auth.isLoggedIn && <NavLink to='/login'>Login</NavLink>}
                        {!auth.isLoggedIn && <NavLink to='/signup'>Sign Up</NavLink>}
                        {auth.isLoggedIn && <NavLink to='/' onClick={() => { auth.logout(); }}>Logout</NavLink>}
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
