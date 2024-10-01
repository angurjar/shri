import React, { useContext, useEffect, useState } from "react";
import { NavLink, useParams, useHistory } from 'react';
import { SimpleImageSlider } from "react-simple-image-slider";
import { AuthContext } from "../../shared/context/auth-context";
import './View.css';

const View = () => {
    const [product, setProduct] = useState(null);
    const [heartColor, setHeartColor] = useState('ffffff');
    const [owner, setOwner] = useState(null);
    
    const { pid } = useParams();
    const auth = useContext(AuthContext);
    const history = useHistory();

    useEffect(() => {
        const fetchProduct = async () => {
            const res = await fetch(`http://localhost:5000/product/${pid}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const data = await res.json();
            if (res.ok) {
                setProduct(data.product);
                setOwner(data.product.owner);
                if (data.product.heartsUsers.includes(auth.userId)) {
                    setHeartColor('e32636');
                }
                document.title = `View Page - ${data.product.productName}`;
            }
        };
        fetchProduct();
    }, [pid, auth.userId]);

    const heartHandler = async () => {
        if (!auth.isLoggedIn) {
            history.replace('/login');
            return;
        }
        const newColor = heartColor === 'ffffff' ? 'e32636' : 'ffffff';
        setHeartColor(newColor);
        await fetch(`http://localhost:5000/product/heart/${pid}`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${auth.token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'userId': auth.userId
            })
        });
    };

    // Local images for the slider, stored in public or assets folder
    const images = [
        "/images/image1.jpg",
        "/images/image2.jpg",
        "/images/image3.jpg"
        // Add more image paths as needed
    ];

    return (
        <div className="view-container">
            <div className="left">
                {images.length > 0 && (
                    <div className="img">
                        <img
                            className="heart-btn"
                            onClick={heartHandler}
                            src={`https://img.icons8.com/material-rounded/34/${heartColor}/loading-heart.png`}
                            alt="heart icon"
                        />

                        {/* Simple Image Slider for Sliding the Images */}
                        <SimpleImageSlider
                            width={500} // Adjust slider width
                            height={300} // Adjust slider height
                            images={images.map(img => ({ url: img }))} // Map to slider format
                            showBullets={true} // Option to show bullets
                            showNavs={true} // Option to show navigation arrows
                        />
                    </div>
                )}
                {images.length > 0 && <p className="ind">{1} / {images.length}</p>}
            </div>

            {product && owner && (
                <div className="right">
                    <h1 className="title">{product.productName}</h1>
                    <div className="row">
                        <img src="/public/guest-icon.png" alt="guest icon" />
                        <p>{owner.name}</p>
                    </div>
                    <div className="price row">
                        <img src="/public/price-icon.png" alt="price icon" />
                        <p>$ {product.price}</p>
                    </div>
                    <div className="hearts row">
                        <img src="/public/heart-icon.png" alt="heart icon" />
                        <p>{product.hearts}</p>
                    </div>
                    <div className="file-size row">
                        <img src="/public/archive-icon.png" alt="file size icon" />
                        <p>{product.fileSize > 1000000 ? `${Math.round(product.fileSize / (1024 * 1024))}MB` : `${Math.round(product.fileSize / 1024)}KB`}</p>
                    </div>
                    <div className="date row">
                        <img src="/public/calendar-icon.png" alt="calendar icon" />
                        <p>{new Date(product.createdDate).toUTCString()}</p>
                    </div>
                    <div className="row">
                        <img src="/public/download-icon.png" alt="download icon" />
                        <p>{product.downloads}</p>
                    </div>
                    <div className="flex">
                        {auth.isLoggedIn ? <button>ADD TO CART</button> : <NavLink to={'/login'}>Add To Cart</NavLink>}
                        {auth.userId === owner.id && <NavLink className="danger" to={`/delete/${product.id}`}>DELETE</NavLink>}
                        {auth.userId === owner.id && <NavLink className="warning" to={`/update/${product.id}`}>EDIT</NavLink>}
                    </div>
                    <div className="decription">
                        <h2>Description</h2>
                        <p>{product.description}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default View;
