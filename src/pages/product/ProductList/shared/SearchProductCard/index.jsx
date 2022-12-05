import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import ClientLogo from "../../../../../assets/images/client-logo-1.jpg";
import Product1 from "../../../../../assets/images/product-list-1.jpg";
import { formatMoney } from "../../../../../utils";

const Style = styled.span`
    .card-text{
       
  /* margin: 14.7px 133.5px 6.8px 0.3px; */
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 18px;
  letter-spacing: normal;
  text-align: left;
  color: #8b8a8a;
    }
    .new-price{
        font-family: Poppins;
  font-size: 15px;
 
  font-stretch: normal;
  font-style: normal;
  font-weight:500;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #000;
    }
`;

export const ProductSearchCard = ({ product }) => {
    return (
        <Style>
            <div className="product-list">
                <div className="card">
                    <div className="wishlist px-3 py-3 d-flex align-items-center justify-content-between w-100">
                        <span className="text-left offer">
                            {/* <h5 className="d-inline">{product.discount}%</h5> */}
                        </span>
                        <span className="text-right wishlist-icon">
                            <a href=" ">
                                <i className="bi bi-heart-fill" />
                            </a>
                        </span>
                    </div>
                    <Link to={`/products/${product._id}`}>
                        <img
                            className="card-img-top pt-4"
                            src={Product1}
                            alt="Card cap"
                        />
                    </Link>
                </div>
                <div className="card-body px-0">
                    <Link to={`/products/${product._id}`}>
                        <h6 className="card-text text-capitalize">{product?.productName}</h6>
                    </Link>
                    <div className="d-flex card-title pt-2">
                        <h6 className=" new-price mr-4">
                            <span className="currency">₦</span>
                            {formatMoney(product?.costPerUnit)}
                        </h6>
                        <h6 className="old-price text-muted">
                            {/* <span className="currency disabled">N</span>
                            {"2,000"} */}
                        </h6>
                    </div>
                    <div className="prododuct-logo">
                        <img src={ClientLogo} alt="glaxosmithkline" />{" "}
                        <span>{product?.supplier?.supplierName}</span>
                    </div>
                </div>
            </div>
        </Style>
    );
};

ProductSearchCard.propTypes = {
    product: PropTypes.object.isRequired
};
