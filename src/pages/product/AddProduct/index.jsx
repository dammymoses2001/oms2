import React, { useState } from "react";
import { AppLayout, ModalComp, TopNav } from "../../../components";
import { MdCloudUpload } from "react-icons/md";
import styled from "styled-components";
import useFormValidator from "use-form-input-validator";
import { Button, Input } from "../../../components";
import { useAuth } from "../../../hooks";
import DrapandDropCpmp from "../../../components/form/DropandDrag";
import { useEffect } from "react";

const Style = styled.div`
    .bg-upload {
        border-radius: 15px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.04);
        background-color: #f0f2f8;
    }
`;

export const AddProduct = () => {
    const {
        addNewProoduct,
        getProductCat,
        getCategoriesFunc,
        state: { isLoading,check },
        
        UploadProductViaCVFun
    } = useAuth();

    useEffect(() => {
      if(check){
        
      }
    }, [check])
    

    const [getDownload,setDownload]=useState(false)
    const [helpModal,setHelpModal]=useState(false)
    const [picture,setPicture]=useState(null)
  
    useEffect(() => {
        getCategoriesFunc()
    }, [getCategoriesFunc])
    
  
    const { values, errors, updateField, isAllFieldsValid } = useFormValidator({
        productName: {
            checks: "required",
            value: ""
        },
        productSku: {
            checks: "required",
            value: ""
        },

        productComposition: {
            checks: "required",
            value: ""
        },

        productCategory: {
            checks: "required",
            value: ""
        },
        expiringDate: {
            checks: "required",
            value: ""
        },
        productDescription: {
            checks: "required",
            value: ""
        },
        productPrice: {
            checks: "required",
            value: ""
        }
    });
    //console.log(isLoading, isLoggedIn, "getProductCat");

    const handleRegister = (e) => {
        //  console.log(values,"values");
        e.preventDefault();
        if (isAllFieldsValid()) {
            const form = new FormData();
            form.append('productName',values?.productName)
            form.append('productSku',values?.productSku)
            form.append('costPerUnit',values?.productPrice)
            form.append('category',values?.productCategory)
            form.append('composition',values?.productComposition)
            form.append('expirationDate',values?.expiringDate)
            form.append('nafdacReg',"758849493")
            form.append('productImage',picture[0])
            

             addNewProoduct(form);
        }
    };
    const hiddenFileInput = React.useRef(null);
    const handleClick = event => {
        hiddenFileInput.current.click();
    };
    const handleChange = event => {
        const fileUploaded = event.target.files[0];
        const Form = new FormData();
        Form.append('productCSV', fileUploaded)
        // const value ={
        //     productCSV:fileUploaded
        // }

        // console.log(value)
        UploadProductViaCVFun(Form)
    };

    return (
        <AppLayout mode="light">
            <Style>
               
                <div className="mb-2">
                    <TopNav TextComp={<span className="color-1 h4">Products</span>}
                    RightComp={<button 
                        onClick={()=>setHelpModal(true)}
                        className={`btn bg-1 ${!helpModal && 'animate__animated animate__wobble animate__infinite	infinite'}`}>Upload CSV</button>}
                    />
                </div>
                <div className="text-center bg-upload py-5">
                    <div className="text-center">
                        <MdCloudUpload className="h10 text-muted" />
                    </div>
                    <h5 className="color-2 fw-1 mb-3">
                        Upload Products CSV File
                    </h5>
                    <input
                        type="file"
                        ref={hiddenFileInput}
                        onChange={handleChange}
                        style={{ display: 'none' }}
                        accept=".csv"
                       
                    />
                    <button  disabled={!getDownload} onClick={handleClick} className="btn btn-primary px-4">
                        Choose file
                    </button>
                </div>
                <div className="py-4">
                    <h5 className="color-2 text-center">or</h5>
                </div>
                <div className="bg-white py-5 px-4 ">
                    <form onSubmit={handleRegister} className=" px-md-5">
                        <div className="row  ">
                            <div className="col-lg-8 mb-2">
                                <Input.Input2
                                    required
                                    name="productName"
                                    label={"Product Name"}
                                    labelclassname="h6 fw-3"
                                    placeholder="Enter Product Name"
                                    onChange={updateField}
                                    inputclassname="py-2 border px-2 text-black  "
                                    value={values.productName}
                                    error={errors.productName}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-lg-4 mb-2">
                                <Input.Input2
                                    required
                                    name="productSku"
                                    label={"Product SKU"}
                                    labelclassname="h6 fw-3"
                                    inputclassname="py-2 border px-2 text-black"
                                    placeholder="Enter Product SKU"
                                    onChange={updateField}
                                    value={values.productSku}
                                    error={errors.productSku}
                                    isDisabled={isLoading}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 mb-2">
                                <Input.Input2
                                    label={"Product Composition"}
                                    labelclassname="h6 fw-3"
                                    inputclassname="py-2 border px-2 text-black"
                                    name="productComposition"
                                    placeholder=""
                                    onChange={updateField}
                                    value={values.productComposition}
                                    error={errors.productComposition}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-lg-4 mb-2">
                                {/* <Input.Select
                                    label={"Product Category"}
                                    labelclassName="h6 fw-3"
                                    inputclassname="py-1 border px-2 rounded-0 text-black"
                                    name="productCategory"
                                    placeholder="Select Product Category"
                                    onChange={updateField}
                                    defaultValue={[{value:'call '}]}
                                    error={errors.productCategory}
                                    isDisabled={isLoading}
                                /> */}
                                <label
                                    className="form-label"
                                    htmlFor="form3Example1cg"
                                >
                                    Product Category{" "}
                                    <span className="text-danger">*</span>
                                </label>
                                <select
                                    id="country"
                                    name="productCategory"
                                    className="form-control form-control-md"
                                    value={values.productCategory}
                                    onChange={updateField}
                                >
                                    <option >
                                        Select Category
                                    </option>
                                    {getProductCat?.data.map((item, index) => (
                                        <option key={index} value={item?._id}>
                                            {item?.category}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <Input.Input2
                                    name="expiringDate"
                                    type="date"
                                    label={"Expiring Date"}
                                    labelclassname="h6 fw-3"
                                    inputclassname="py-2 border px-2 text-black"
                                    placeholder=""
                                    onChange={updateField}
                                    value={values.expiringDate}
                                    error={errors.expiringDate}
                                    isDisabled={isLoading}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-8 mb-2">
                                <div className="form-group">
                                    <label className="h6 fw-3">
                                        Product Description{" "}
                                        <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        className="form-control"
                                        rows="6"
                                        name="productDescription"
                                        onChange={updateField}
                                        value={values.productDescription}
                                        error={errors.productDescription}
                                        isDisabled={isLoading}
                                    ></textarea>
                                    <small className="text-danger">
                                        {errors.productDescription}
                                    </small>
                                </div>
                            </div>
                            <div className="col-lg-4 mb-2">
                                <div className="form-group">
                                    <label className="h6 fw-3">
                                        Product Image
                                    </label>
                                    <DrapandDropCpmp  setPicture={setPicture}/>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-between  mx-auto">
                            <div className="col-lg-3 mb-2">
                                <Input.Input2
                                    required
                                    name="productPrice"
                                    label={"Product Price"}
                                    labelclassname="h6 fw-3"
                                    
                                    placeholder="Enter Product Price"
                                    type="number"
                                    onChange={updateField}
                                    inputclassname="py-2 border px-2 text-black"
                                    value={values.productPrice}
                                    error={errors.productPrice}
                                    isDisabled={isLoading}
                                />
                            </div>
                            <div className="col-lg-4 mb-2">
                                <div className="text-right">
                                    <Button
                                        type="submit"
                                        isLoading={isLoading}
                                        // isDisabled={!acceptTerms || isLoading}
                                        // bgColor="#463c74"
                                        className="btn btn-primary px-5 py-3 rounded-2 text-white"
                                        variant="info"
                                    >
                                        Add Product
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-2" />
                    </form>
                </div>
            </Style>
            <ModalComp
                show={helpModal}
                handleClose={()=>setHelpModal(false)}
                title={<div className="color-3">CSV file upload  guidelines</div>}
                size={"md"}
                bodyText={<div>
                    <ul className="mb-5">
                        <li>Download the sample CSV file by clicking the download button</li>
                        <li> Fill in the details by following the format provided </li>
                        <li> After filling then upload the CSV to register your staff or member</li>
                        <li>Note: please do not modify the title of the CSV file</li>
                        <li>Product name, product SKU, expiry date, compostion, price and category are required field</li>
                      
                    </ul>
                    <div className="text-center mb-3">
                        <a className="text-white bg-6 border-0 py-2 px-3 rounded"
                        onClick={()=>{
                            setDownload(true);
                            setHelpModal(false)
                        }}
                        href="https://res.cloudinary.com/dammymoses/raw/upload/v1654983646/Pharamserve/priceList.xlsx"
                        download
                        target={"_blank"} rel="noreferrer"
                        >Download Format</a>
                    </div>
                </div>}
                />
        </AppLayout>
    );
};
