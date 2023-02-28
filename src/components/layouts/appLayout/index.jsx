// import PropTypes from "prop-types";
import React, { useState } from "react";
import styled from "styled-components";
import { AppHeader } from "./Header";
import { SideBar } from "../../../components";
import { OffcanvasComp } from "../../offCanvas";




export const AppLayout = ({ background, mode = "light", children }) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <Style>
            <div className="Wrapper">
                <div className="d-none">  <OffcanvasComp show={show} handleClose={handleClose}/></div>
              
                <div className="sideWrapper d-none d-lg-block px-3 mt-5">
                    <SideBar/>                 
                  
                </div>
                <div className="MainWrapper ">
                    <AppHeader mode={mode} handleShow={handleShow} />
                    <div className="px-3">{children}</div> 
                    {/* <Footer/> */}
                </div>

              
            </div>
          
        </Style>
    );
};
// AppLayout.propTypes = {
//     background: PropTypes.string,
//     children: PropTypes.node,
//     mode: PropTypes.oneOf(["light", "dark"]).isRequired
// };

const Style = styled.div`

.Wrapper{
    display:flex;
}
.sideWrapper{
    background-color: #fff;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 220px;
    overflow-y: scroll;
}
img{
    width:80%;
}
.MainWrapper{
    width: 100%;
    /* border: 1px solid; */
    margin-left: 220px;
    background-color: #f4f4f4;
    overflow: hidden;
    min-height: 100vh;
    
}

.butns{
   display: flex;
  justify-content: space-between;
}

.btn1{
    margin-left: 10px
}

.text-center h6{
    font-size:15px;
    font-weight:400;
}

input{
    border:none;
    outline:none;
    background:transparent;
    color:black;
    text: center;
    width: 90%;
}


    .searchf{
   border-style: solid;
   background-color:white;
    margin: auto;
   width: 50%;
   border-width: 0px;
   border-radius: 15px;
   border-color: #F0F2F8;
}
@media screen and (max-width: 992px) {
    .MainWrapper{
        margin-left: 0;

}
}




`;