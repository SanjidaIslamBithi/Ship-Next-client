import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import useAuth from '../../../hooks/useAuth';

import AddReview from '../AddReview/AddReview';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import ManageProducts from '../ManageProducts/ManageProducts/ManageProducts';
import MyOrder from '../MyOrder/MyOrder';
import Payment from '../Payment/Payment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyCheckAlt, faFeatherAlt, faShoppingCart, faSignOutAlt, faPlusCircle, faUserPlus, faTshirt } from '@fortawesome/free-solid-svg-icons';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProduct from '../AddProduct/AddProduct';
import SingleProduct from '../ManageProducts/SingleProduct/SingleProduct';
import UpdateProducts from '../UpdateProducts/UpdateProducts';

const Dashboard = () => {
    let { path, url } = useRouteMatch();

    const { logout, admin } = useAuth();
    return (
        <div className="container-fluid">
            <div className="container my-4">
                <div className="row ">
                    <div className="col-md-3  h-100 bg-white shadow mb-3 rounded sticky-md-top">
                        <div className="dashboard-sidebar ">
                            <p className="text-center mt-4 fw-bold">Dashboard</p>
                            <hr />
                            <ul className="navbar-nav">

                                {!admin &&
                                    <div>
                                        <Link to={`${url}`} className="nav-link menu-bg react-hook-link">
                                            <li className="dashboard-menu nav-item">
                                                <FontAwesomeIcon icon={faShoppingCart} /> My order
                                            </li>
                                        </Link>

                                        <Link to={`${url}/payment`} className="nav-link menu-bg react-hook-link">
                                            <li className="dashboard-menu nav-item">
                                                <FontAwesomeIcon icon={faMoneyCheckAlt} /> Payment
                                            </li>
                                        </Link>
                                        <Link to={`${url}/review`} className="nav-link menu-bg react-hook-link">
                                            <li className="dashboard-menu nav-item">
                                                <FontAwesomeIcon icon={faFeatherAlt} /> Add Review
                                            </li>
                                        </Link>
                                    </div>
                                }

                                {admin &&
                                    <div>
                                        <Link to={`${url}/manageAllOrders`} className="nav-link menu-bg react-hook-link">
                                            <li className="dashboard-menu nav-item">
                                                <FontAwesomeIcon icon={faShoppingCart} /> Manage All Orders
                                            </li>
                                        </Link>

                                        <Link to={`${url}/addProduct`} className="nav-link menu-bg react-hook-link">
                                            <li className="dashboard-menu">
                                                <FontAwesomeIcon icon={faPlusCircle} /> Add A Product
                                            </li>

                                        </Link>

                                        <Link to={`${url}/makeAdmin`} className="nav-link menu-bg react-hook-link">
                                            <li className="dashboard-menu">
                                                <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                                            </li>
                                        </Link>

                                        <Link to={`${url}/manageProducts`} className="nav-link menu-bg react-hook-link">
                                            <li className="dashboard-menu">
                                                <FontAwesomeIcon icon={faTshirt} /> Manage Products
                                            </li>
                                        </Link>
                                    </div>


                                } 

                            </ul>
                            <button className="btn btn-danger mt-5 inline" onClick={logout}>
                                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                            </button>
                        </div>
                    </div>

                    {/* sidebar based on route */}
                    <div className="col-md-9">
                        <Switch>
                            {
                                !admin &&
                                <div>
                                    <Route exact path={path}>
                                        <MyOrder></MyOrder>
                                    </Route>
                                    <Route path={`${path}/payment`}>
                                        <Payment></Payment>
                                    </Route>
                                    <Route path={`${path}/review`}>
                                        <AddReview></AddReview>
                                    </Route>
                                   
                                </div>
                            }

                            {
                                admin && 
                                <div>

                                    <Route exact path={path}>
                                        <ManageAllOrders></ManageAllOrders>
                                    </Route>

                                    <Route path={`${path}/manageAllOrders`}>
                                        <ManageAllOrders></ManageAllOrders>
                                    </Route>

                                    <Route path={`${path}/addProduct`}>
                                        <AddProduct></AddProduct>
                                    </Route>
                                    <Route path={`${path}/makeAdmin`}>
                                        <MakeAdmin></MakeAdmin>
                                    </Route>
                                    <Route path={`${path}/manageProducts`}>
                                        <ManageProducts></ManageProducts>
                                    </Route>
                                    <Route path={`${path}/updateProduct`}>
                                        <UpdateProducts></UpdateProducts>
                                    </Route>
                                </div> 
                            } 

                        </Switch>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;




