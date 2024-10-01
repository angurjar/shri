import React from 'react';
import { NavLink } from 'react-router-dom';
import './List.css';

const List = (props) => {
    return (
        <div className='search-container'>
            <h2>Products about <span>{props.title}</span></h2>

            <div className='items-list'>
                {props.items && props.items.length > 0 ? (
                    props.items.map(item => (
                        <div key={item.id} className="card">
                            <NavLink to={`/view/${item.id}`} className="card-img">
                                <img src={`http://localhost:5000/${item.image[0]}`} alt={item.productName || 'Product Image'} />
                                <p className='title'>{item.productName}</p>
                                <p className='description'>
                                    {item.description.length > 30 ? `${item.description.substring(0, 30)}...` : item.description}
                                </p>
                            </NavLink>
                        </div>
                    ))
                ) : (
                    <p>No products found.</p> // Display a message if no items are available
                )}
            </div>
        </div>
    );
};

export default List;
