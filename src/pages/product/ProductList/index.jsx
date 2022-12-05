import React, { useState } from "react";
import { ProductSearchCard } from "./shared";
//import ClientLogo from "../../../assets/images/client-logo-1.jpg";

import BackgroundImage1 from "../../../assets/images/pages-background-shape-1.png";
import BackgroundImage3 from "../../../assets/images/pages-background-shape-3.png";

// import Product1 from "../../../assets/images/product-list-1.jpg";
// import Product2 from "../../../assets/images/product-list-2.jpg";
// import Product3 from "../../../assets/images/product-list-3.jpg";

import { AppLayout, Input } from "../../../components";
import { useAuth } from "../../../hooks";


export const ProductList = () => {
    const { getProductList,handleSearchProduct } =useAuth();
    const [searchText,setSearchText] =useState("");

    //console.log(getProductList,"getProductList");

    // const results = [
    //     {
    //         brandLogo: ClientLogo,
    //         brandName: "glaxosmithkline",
    //         discount: 50,
    //         id: 1,
    //         image: Product1,
    //         name: "Granules or powder",
    //         oldPrice: 100,
    //         price: 50
    //     },
    //     {
    //         brandLogo: ClientLogo,
    //         brandName: "glaxosmithkline",
    //         discount: 50,
    //         id: 1,
    //         image: Product2,
    //         name: "Granules or powder",
    //         oldPrice: 100,
    //         price: 50
    //     },
    //     {
    //         brandLogo: ClientLogo,
    //         brandName: "glaxosmithkline",
    //         discount: 50,
    //         id: 1,
    //         image: Product3,
    //         name: "Granules or powder",
    //         oldPrice: 100,
    //         price: 50
    //     },
    //     {
    //         brandLogo: ClientLogo,
    //         brandName: "glaxosmithkline",
    //         discount: 50,
    //         id: 1,
    //         image: Product3,
    //         name: "Granules or powder",
    //         oldPrice: 100,
    //         price: 50
    //     },
    //     {
    //         brandLogo: ClientLogo,
    //         brandName: "glaxosmithkline",
    //         discount: 50,
    //         id: 1,
    //         image: Product3,
    //         name: "Granules or powder",
    //         oldPrice: 100,
    //         price: 50
    //     }
    // ];

    return (
        <AppLayout mode="dark" background={`url(${BackgroundImage3})`}>
            <div className="product-listing-header pb-5">
                <div className="py-3 pt-md-5 pb-3 pb-5 px-4">
                    <div
                        style={{
                            margin: "auto",
                            maxWidth: "710px",

                            position: "relative"
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                width: "100%"
                            }}
                        >
                            <Input
                                placeholder="Search Product Prices"
                                bgColor="#e6ebef"
                                onChange={(e)=>{
                                    handleSearchProduct(e.target.value);
                                    setSearchText(e.target.value);
                                }}
                            />
                        </div>

                        <button
                            style={{
                                background: "#e6ebef",
                                border: "none",
                                outline: "none",
                                paddingLeft: "20px",
                                position: "absolute",
                                right: 20,
                                top: "15px"
                            }}
                        >
                            <i className="fas fa-search " />
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="main-content pt-2 px-3 pt-md-5 pb-2 pb-md-5"
                style={{
                    backgroundColor: "#463c74",
                    backgroundImage: `url(${BackgroundImage1})`
                }}
            >
                <div
                    className="bg-white card container p-4"
                    style={{ borderRadius: "18px" }}
                >
                    <div className="mb-5">
                        <h6>{ getProductList?.find_products?.length>0 ?`Showing 1 -${getProductList?.find_products.length}` :"No Product Found"}</h6>
                        <h5>{`Your results for "${searchText?searchText:"All Product"}"`}</h5> 
                    </div>
                    <div className="product-display">
                        <div className="container">
                            <div className="row">
                                {getProductList?.find_products?.map((result,index) => (
                                    <div
                                        key={index}
                                        className="col-md-3 col-sm-6 mb-4"
                                    >
                                        <ProductSearchCard product={result} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};
