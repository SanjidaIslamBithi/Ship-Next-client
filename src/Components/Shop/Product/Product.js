import { faCopyright, faExclamationCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Loading from '../../Loading/Loading';
import Fade from 'react-reveal/Fade';
import Bounce from "react-reveal/Bounce";
import Swal from 'sweetalert2';

const Product = () => {
    const { productId } = useParams();

    const [products, setProducts] = useState([]);

    const [isLoading, setIsLoading] = useState(true);
    
    useEffect(() => {
        try {
            async function callApi() {
                let results = await fetch('http://localhost:5000/allproducts');
                results = await results.json();
                results = await results.find(pd => pd?._id === productId);
                setProducts(results);
                setIsLoading(false);
            }
            callApi();
        } catch (error) {
            console.log(error);
        }
    }, [productId])
    
    return (
        <div className="container my-5">
            <div className="px-2 py-4 px-md-4 py-md-3 bg-white shadow rounded">
                {

                    isLoading ?

                        <Loading></Loading>

                        :


                        <div className="row my-5">

                            <Bounce bottom cascade>
                                <h2 className="text-center display-4">
                                    {products?.name}
                                </h2>
                            </Bounce>

                            <div className="col-md-6 ">
                                {/* <Fade >
                                    <div>
                                        <img src={products?.image} className="img-fluid" alt="" />
                                    </div>
                                </Fade> */}
                                <zoom-hover image={products?.img} height="600"> </zoom-hover>
                            </div>
                            <div className="col-md-6 mt-5">
                                <Fade >
                                    <h4 className="fw-bold display-6"> <span className=" text-info">Product Price:</span> $ {products?.price}</h4>
                                    <p className="fw-bold">
                                    <span className=" text-info">Product Name:</span> {products?.name}</p>
                                    <p>
                                        {products?.description}
                                    </p>
                                </Fade>
                                <Link to={`/placeOrder/${productId}`}>
                                    <button className="btn custom-black-btn">
                                        <FontAwesomeIcon icon={faShoppingCart} /> Buy Now
                                    </button>

                                </Link>
                               

                            </div>
                        </div>
                }
            </div>

            
        </div>


    );
};

export default Product;