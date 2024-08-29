import React, { useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import "../components/modal.css";
import { useLocation, useNavigate } from 'react-router-dom';

const CheckOutPage = () => {
    const [show, setShow] =useState(false);
    const [activeTab, setActiveTab] = useState("visa");

    // Handle tab changes
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    }

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleOrderConfirm = () => {
        alert("Your Order is Placed Successfully");
        localStorage.removeItem("cart");
        navigate(from, {replace: true});
    }

  return (
    <div className="modalCard">
      <Button variant="primary" className="py-2" onClick={handleShow}>
        Proceed to Checkout
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        className="modal fade"
        centered
      >
        <div className="modal-dialog">
          <h5 className="px-3 mb-3">Select Your Payment Method</h5>
          <div className="modal-content">
            <div className="modal-body">
              <div className="tabs mt-3">
                <ul className="nav nav-tabs " id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "visa" ? "active" : ""
                      }`}
                      id="visa-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="visa"
                      aria-selected={activeTab === "visa"}
                      onClick={() => handleTabChange("visa")}
                      href="#visa"
                    >
                      <img
                        src="https://getsby.com/wp-content/uploads/2023/01/Visa-Mastercard-1-1536x566.png"
                        alt="Visa"
                        style={{ width: "95px", height: "auto" }}
                      />
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className={`nav-link ${
                        activeTab === "paypal" ? "active" : ""
                      }`}
                      id="paypal-tab"
                      data-toggle="tab"
                      role="tab"
                      aria-controls="paypal"
                      aria-selected={activeTab === "paypal"}
                      onClick={() => handleTabChange("paypal")}
                      href="#paypal"
                    >
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/2560px-PayPal.svg.png"
                        alt="PayPal"
                        style={{
                          width: "110px",
                          height: "auto",
                        }}
                      />
                    </a>
                  </li>
                </ul>

                <div className="tab-content" id="myTabContent">
                  <div
                    className={`tab-pane fade ${
                      activeTab === "visa" ? "show active" : ""
                    }`}
                    id="visa"
                    role="tabpane1"
                    aria-labelledby="visa-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Credit Card</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="cardholder-name"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Name</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="number"
                            id="card-number"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Cardholder Number</span>{" "}
                          <i className="fa fa-eye"></i>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="inputbox" >
                            <input
                              type="text"
                              name="expiry-date"
                              id="expiry-date"
                              className="form-control"
                              required
                            />
                            <span>Expiration Date</span>
                            
                          </div>
                          <div className="inputbox">
                            <input
                              type="text"
                              name="cvv"
                              id="cvv"
                              className="form-control"
                              required
                            />
                            <span>CVV</span>
                          </div>
                        </div>

                        <div className="px-5 pay">
                          <button
                            className="btn btn-success btn-block "
                            onClick={handleOrderConfirm}
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`tab-pane fade ${
                      activeTab === "paypal" ? "show active" : ""
                    }`}
                    id="paypal"
                    role="tabpane1"
                    aria-labelledby="paypal-tab"
                  >
                    <div className="mt-4 mx-4">
                      <div className="text-center">
                        <h5>Paypal Account Info</h5>
                      </div>
                      <div className="form mt-3">
                        <div className="inputbox">
                          <input
                            type="text"
                            name="email"
                            id="paypal-email"
                            className="form-control"
                            required
                          />
                          <span>Enter Your Email</span>
                        </div>
                        <div className="inputbox">
                          <input
                            type="text"
                            name="name"
                            id="paypal-name"
                            min="1"
                            max="999"
                            className="form-control"
                            required
                          />
                          <span>Your Name</span>
                        </div>

                        <div className="d-flex flex-row">
                          <div className="inputbox">
                            <input
                              type="text"
                              name="extra-info"
                              id="extra-info"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                            <span>Extra Info</span>
                          </div>

                          <div className="inputbox">
                            <input
                              type="text"
                              name="additional-info"
                              id="additional-info"
                              min="1"
                              max="999"
                              className="form-control"
                              required
                            />
                          </div>
                        </div>

                        <div className="px-5 pay">
                          <button
                            className="btn btn-success btn-block"
                            onClick={handleOrderConfirm}
                          >
                            Add Paypal
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="mt-3 px-4 p-Disclaimer">
                  <em>Payment Disclaimer:</em> In no event shall payment or
                  partial payment by Owner for any material or service be deemed
                  a waiver of any rights or remedies available to the Owner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CheckOutPage;
