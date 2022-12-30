import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
    AppLayout,
    Loading,
    ModalComp,
    TableCompData,
    TopNav
} from "../../../components";
import { CSVLink, CSVDownload } from "react-csv";
import { BiConversation, BiSearchAlt } from "react-icons/bi";

import moment from "moment";
import { customerColumns, handleSuplierlink } from "../../../utils/datautils";
import styled from "styled-components";

import { useAuth } from "../../../hooks";
import { Dropdown, Form } from "react-bootstrap";
import { Input2 } from "../../../components/form/Input/input";
import { getAllUserProduct } from "../../../services";
import toast from "react-hot-toast";

const Style = styled.div`
    .homepage {
        padding-top: 7rem;
    }
    .start-by-registering {
        padding: 14em 8em;
    }
    .card {
        border-radius: 15px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04);
        background-color: #fff;
    }
    .table {
        color: #4d4f5c;
    }
    .table thead th {
        font-size: 12px;
    }
    .Product td {
        height: 80px;
    }
    .productWrapper {
        width: 55px;
    }
    .iconwrapper {
        width: 35px;
        height: 35px;
        border: 1px solid #e8e7ff;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        padding: 2px;
        margin-right: 10px;
        background: #e8e7ff;
    }
    .dropdown-toggle::after {
        display: none !important;
    }

    input {
        border: none;
        outline: none;
        background: transparent;
        color: black;
        width: 90%;
        text: center;
    }

    .search {
        border-style: solid;
        background-color: white;
        margin: auto;
        width: 50%;
        border-width: 0.5px;
        border-radius: 15px;
        border-color: #f0f2f8;
    }

    @media (max-width: 767px) {
        .homepage {
            padding-top: 14rem;
        }
        .registering-cta {
            left: 0;
        }
    }
    @media (max-width: 480px) {
        .homepage {
            padding-top: 15rem;
        }
        .start-by-registering {
            padding: 12em 5em;
        }
    }
`;

const categories = [{ categoryId: 1, categoryName: "Anti Malaria" }];

export const ProductShowAll = () => {
    const {
        state,
        getProductCat,
        deleteProductFunc,
        UpdateProductFunc,
        getCategoriesFunc
    } = useAuth();

    const { data, error, isLoading } = useQuery(
        "get-products",
        getAllUserProduct,
        {
            // refetchOnWindowFocus: true,
            // refetchInterval: 2000
            // refetchIntervalInBackground: true,
        }
    );

    useEffect(() => {
        if (state?.updateProduct) {
            setEditShow(false);
        }
    }, [state?.updateProduct]);

    const initialState = {};
    const [editShow, setEditShow] = useState(false);
    const [deleteProduct, setDeleteProduct] = useState(false);
    const [editProduct, setEditProduct] = useState(initialState);
    const [picture, setPicture] = useState();

    const [productCategory, setProductCategory] = useState("");

    const handleChangeProductCategory = (e) => {
        setProductCategory(e.target.value);
    };

    useEffect(
        () => {
            getCategoriesFunc();
        },
        [state?.data?._id, getCategoriesFunc],
        getCategoriesFunc
    );

    useEffect(() => {
        if (error) {
            toast.error(error);
        }
    }, [error]);

    const handleDate = (date) => {
        const newdate = moment(date).format("L").split("/");

        const confirmDate = `${newdate[2]}-${newdate[0]}-${newdate[1]}`;
        return confirmDate;
    };

    const handleOnchange = (e) => {
        //    console.log(e.target.name)

        const { name, value } = e.target;
        // console.log(name,value)
        setEditProduct({ ...editProduct, [name]: value });
    };

    const UpdateProduct = () => {
        // console.log(editProduct,'UpdateProduct')
        // const data = {
        //     ...editProduct,
        //     productName: editProduct?.productName,
        //     productSku: editProduct?.productSku,
        //     composition: editProduct?.composition,
        //     price: editProduct?.price,
        //     productImage: picture
        //     //   nafdacReg:"49r9ekse9r",
        //     //   productImage:''
        // };
        const form = new FormData();
        form.append("productName", editProduct?.productName);
        form.append("productSku", editProduct?.productSku);
        form.append("composition", editProduct?.composition);
        form.append("costPerUnit", editProduct?.costPerUnit);
        form.append("nafdacNo", editProduct?.nafdacNo);
        form.append("shelfLife", editProduct?.shelfLife);
        form.append("categoryId", editProduct?.categoryId);
        form.append("productImage", picture);
        form.append("status", editProduct?.status);

        // console.log(form);
        UpdateProductFunc(editProduct?.id, form);
    };

    //console.log(state, "getUserProductList");

    const columns = [
        // {
        //     name: "#",
        //     selector: (row) => console.log(row.length, "row")
        // },
        {
            name: "Product Name",
            selector: (row) => row.productName
        },
        {
            name: "Category",
            selector: (row) =>
                categories.filter((c) => c.categoryId === row.categoryId)[0]
                    .categoryName
        },
        {
            name: "Product SKU",
            selector: (row) => row.productSku
        },
        {
            name: "Expiration Date ",
            selector: (row) => moment(row?.expirationDate).format("MMM Do YY")
        },
        {
            name: "Price",
            selector: (row) => row.costPerUnit
        },
        {
            name: "Status",
            selector: (row) => row?.status
        },
        // {
        //     name: "Image ",
        //     selector: (row) => ""
        // },

        {
            name: "Actions",
            selector: (row) => row.authorized,
            cell: (row) => (
                <Dropdown>
                    <Dropdown.Toggle className="dropdown-6 text-black border text-muted">
                        ...
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item
                            onClick={() => {
                                setEditShow(true);
                                setEditProduct(row);
                                setDeleteProduct(false);
                            }}
                        >
                            Edit
                        </Dropdown.Item>
                        <Dropdown.Item
                            onClick={() => {
                                setDeleteProduct(true);
                                setEditProduct(row);
                                setEditShow(false);
                            }}
                        >
                            Delete
                        </Dropdown.Item>
                        {/* <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
                    </Dropdown.Menu>
                </Dropdown>
            )
        }
    ];

    const headers = [{ label: "Product name", key: "Product name" }];

    const csvr = {
        headers: headers,
        data: columns
    };

    const [query, setQuery] = useState("");

    const search = (getAllUserProduct) => {
        return getAllUserProduct?.filter((row) =>
            row.productName.toLowerCase().includes(query)
        );
    };

    // console.log(state,'state')
    // console.log(editProduct, "getUserProductList");
    return (
        <AppLayout mode="light">
            <Style>
                <div className="d-flex align-items-center search px-1 ">
                    <BiSearchAlt size={20} className="me-2" />
                    <input
                        placeholder="Search Product"
                        className="px-1 py-2 text-black"
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className="mb-3 mt-2">
                    <TopNav
                        RightComp={
                            <div>
                                {/* <button
                                    onClick={() => handleSuplierlink(state)}
                                    className="btn bg-6 text-white font-weight-light  "
                                >
                                    click to copy your Link
                                </button> */}
                                {/* <CSVLink
                                
                             className="mr-2 bg px-2 py-1 bg-1 h6"
                               {...csvr}>
                                   
                                Export
                                </CSVLink>  */}
                            </div>
                        }
                    />
                </div>
                <div className="px-3 px-md-5 shadow bg-white pt-4 height-80">
                    {/* {getUserProductList?.products && !state?.isLoading ? (
                        <TableComp
                            TableHeader={topAllProductHeader}
                            TableBodyData={bodyData}
                            loading={getUserProductList}
                            data={getUserProductList?.products}
                            emptyText="No Product Available"
                        />
                    ) : (
                        <Loading />
                    )} */}
                    {isLoading ? (
                        <Loading height={"40vh"} />
                    ) : (
                        <TableCompData
                            columns={columns}
                            data={search(data)}
                            pagination
                        />
                    )}
                </div>
            </Style>

            <div className="mb-3">
                {/* {console.log(!state?.deletemessage,deleteProduct)} */}
                <ModalComp
                    size={"md"}
                    show={deleteProduct && !state?.deletemessage}
                    handleClose={() => setDeleteProduct(false)}
                    title={<h4 className="text-capitalize">Delete Product</h4>}
                    bodyText={
                        <div>
                            <h4 className="fw-1 text-center mb-3">
                                {" "}
                                Are you Sure You want to delete "
                                {editProduct?.productName}"
                            </h4>
                            <hr />
                            <div className=" text-center">
                                <button
                                    onClick={() => setDeleteProduct(false)}
                                    className="btn border-1 d-2 me-5"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        deleteProductFunc(editProduct?._id);
                                        setDeleteProduct(false);
                                    }}
                                    className="btn btn-danger text-white h3"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    }
                />

                <ModalComp
                    show={editShow && editProduct}
                    handleClose={() => setEditShow(false)}
                    title={
                        <h4 className="text-capitalize">
                            Edit {editProduct?.productName}
                        </h4>
                    }
                    bodyText={
                        <div>
                            <div className="row">
                                <div className="col-md-6">
                                    <Input2
                                        inputclassname={
                                            "border-1 py-1 text-black px-2"
                                        }
                                        label={"Product Name"}
                                        name="productName"
                                        value={editProduct?.productName}
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example1cg"
                                    >
                                        Product Category{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        name="category"
                                        className="form-control form-control-md"
                                        value={editProduct?.categoryId}
                                        onChange={handleOnchange}
                                    >
                                        {/* {console.log(
                                            editProduct,
                                            "UpdateProductCat"
                                        )} */}
                                        <option>Select Category</option>
                                        {getProductCat?.data?.map(
                                            (item, index) => (
                                                <option
                                                    key={index}
                                                    value={item?.id}
                                                >
                                                    {item?.category}
                                                </option>
                                            )
                                        )}
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <Input2
                                        inputclassname={
                                            "border-1 py-1 text-black px-2"
                                        }
                                        label={"Product Sku"}
                                        value={editProduct?.productSku}
                                        name="productSku"
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Input2
                                        inputclassname={
                                            "border-1 py-1 text-black px-2"
                                        }
                                        label={"NAFDAC Number"}
                                        value={editProduct?.nafdacNo}
                                        name="nafdacNo"
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Input2
                                        inputclassname={
                                            "border-1 py-1 text-black px-2"
                                        }
                                        label={"Shelf Life (Years)"}
                                        value={editProduct?.shelfLife}
                                        name="shelfLife"
                                        onChange={handleOnchange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <Input2
                                        inputclassname={
                                            "border-1 py-1 text-black px-2"
                                        }
                                        label={"Product Composition"}
                                        value={editProduct?.composition}
                                        name="composition"
                                        onChange={handleOnchange}
                                    />
                                </div>

                                <div className="col-md-6">
                                    <Input2
                                        inputclassname={
                                            "border-1 py-1 text-black px-2"
                                        }
                                        label={"Product cost Per Unit"}
                                        value={editProduct?.costPerUnit}
                                        name="costPerUnit"
                                        onChange={handleOnchange}
                                    />
                                </div>

                                <div className="col-lg-4 mb-2">
                                    <label
                                        className="form-label"
                                        htmlFor="form3Example1cg"
                                    >
                                        Availability Status{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <select
                                        id="country"
                                        name="status"
                                        className="form-control form-control-md"
                                        value={editProduct?.status}
                                        onChange={handleOnchange}
                                    >
                                        <option>
                                            Select Availability Status
                                        </option>
                                        <option value="Available">
                                            Available
                                        </option>
                                        <option value="Discontinued">
                                            Discontinued
                                        </option>
                                        <option value="Out of stock">
                                            Out of stock
                                        </option>
                                    </select>
                                </div>

                                <div className="col-md-6">
                                    <Form.Group
                                        controlId="formFile"
                                        className="mb-3"
                                    >
                                        <Form.Label>Product Images</Form.Label>
                                        <Form.Control
                                            type="file"
                                            onChange={(e) =>
                                                setPicture(e.target.files[0])
                                            }
                                        />
                                    </Form.Group>
                                </div>
                                <div className="col-lg-6">
                                    <div
                                        className=""
                                        style={{
                                            height: "200px",
                                            maxWidth: "200px",
                                            objectFit: "contain"
                                        }}
                                    >
                                        <img
                                            src={editProduct?.productPhotoUrl}
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-end">
                                <button
                                    onClick={() => setEditProduct(false)}
                                    className="btn border-1 me-5"
                                >
                                    Cancel
                                </button>
                                <button
                                    className="btn bg-7 text-white"
                                    onClick={UpdateProduct}
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    }
                />
                {/* <TopNav
                    TextComp={<h4 className="color-1">Products</h4>}
                    RightComp={
                        <div className="color-2">
                            <Link
                                to="/product/addproduct"
                                className="mr-2 btn bg-1 h6"
                            >
                                <span className="mr-1">
                                    <BiPlus />
                                </span>
                                Add Product
                            </Link>
                        </div>
                    }
                /> */}
            </div>
        </AppLayout>
    );
};
