import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import BreadCrumb from '../../UI/BreadCrumb';
import img from '../../../images/doc/doctor 3.jpg';
import './BookingCheckout.css';
import { Link } from 'react-router-dom';

const BookingCheckout = () => {
    return (
        <>
            <Navbar />
            <BreadCrumb />
            <div className="content" style={{ margin: '7rem 0' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-lg-8">
                            <div className="card">
                                <div className="card-body">

                                    <form action="">

                                        <div className="info-widget">
                                            <h4 className="card-title">Personal Information</h4>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group card-label">
                                                        <label>First Name</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group card-label">
                                                        <label>Last Name</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group card-label">
                                                        <label>Email</label>
                                                        <input className="form-control" type="email" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-12">
                                                    <div className="form-group card-label">
                                                        <label>Phone</label>
                                                        <input className="form-control" type="text" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="exist-customer">Existing Customer? <a href="#">Click here to login</a></div>
                                        </div>

                                        <div className="payment-widget">
                                            <h4 className="card-title">Payment Method</h4>

                                            <div className="payment-list">
                                                <label className="payment-radio credit-card-option">
                                                    <input type="radio" name="radio" checked />
                                                    <span className="checkmark"></span>
                                                    Credit card
                                                </label>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group card-label">
                                                            <label for="card_name">Name on Card</label>
                                                            <input className="form-control" id="card_name" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group card-label">
                                                            <label for="card_number">Card Number</label>
                                                            <input className="form-control" id="card_number" placeholder="1234  5678  9876  5432" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group card-label">
                                                            <label for="expiry_month">Expiry Month</label>
                                                            <input className="form-control" id="expiry_month" placeholder="MM" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group card-label">
                                                            <label for="expiry_year">Expiry Year</label>
                                                            <input className="form-control" id="expiry_year" placeholder="YY" type="text" />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group card-label">
                                                            <label for="cvv">CVV</label>
                                                            <input className="form-control" id="cvv" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="payment-list">
                                                <label className="payment-radio paypal-option">
                                                    <input type="radio" name="radio" />
                                                    <span className="checkmark"></span>
                                                    Paypal
                                                </label>
                                            </div>
                                            <div className="terms-accept">
                                                <div className="custom-checkbox">
                                                    <input type="checkbox" id="terms_accept" />
                                                    <label for="terms_accept">I have read and accept <a href="#">Terms &amp; Conditions</a></label>
                                                </div>
                                            </div>
                                            <div className="submit-section mt-4">
                                                <Link to={'/booking/success'}>
                                                    <button type="submit" className="btn btn-primary submit-btn">Confirm and Pay</button>
                                                </Link>
                                            </div>

                                        </div>
                                    </form>

                                </div>
                            </div>

                        </div>

                        <div className="col-md-5 col-lg-4 theiaStickySidebar">

                            <div className="card booking-card">
                                <div className="card-header">
                                    <h4 className="card-title">Booking Summary</h4>
                                </div>
                                <div className="card-body">

                                    <div className="booking-doc-info">
                                        <a href="doctor-profile.html" className="booking-doc-img">
                                            <img src={img} alt="User Image" />
                                        </a>
                                        <div className="booking-info">
                                            <h4><a href="doctor-profile.html">Dr. Darren Elder</a></h4>
                                            <div className="rating">
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star filled"></i>
                                                <i className="fas fa-star"></i>
                                                <span className="d-inline-block average-rating">35</span>
                                            </div>
                                            <div className="clinic-details">
                                                <p className="doc-location"><i className="fas fa-map-marker-alt"></i> Newyork, USA</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="booking-summary">
                                        <div className="booking-item-wrap">
                                            <ul className="booking-date">
                                                <li>Date <span>16 Nov 2019</span></li>
                                                <li>Time <span>10:00 AM</span></li>
                                            </ul>
                                            <ul className="booking-fee">
                                                <li>Consulting Fee <span>$100</span></li>
                                                <li>Booking Fee <span>$10</span></li>
                                                <li>Video Call <span>$50</span></li>
                                            </ul>
                                            <div className="booking-total">
                                                <ul className="booking-total-list">
                                                    <li>
                                                        <span>Total</span>
                                                        <span className="total-cost">$160</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </>
    )
}

export default BookingCheckout