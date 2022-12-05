import React from "react";
import { Dropdown } from "react-bootstrap";
import { BiConversation} from "react-icons/bi";
import { BsGlobe } from "react-icons/bs";
import { IoIosNotifications } from "react-icons/io";
import {RiMenu2Line} from 'react-icons/ri'
import styled from "styled-components";

const Style = styled.div`
padding:10px 0;
margin-left:2px;
margin-bottom:14px;
background-color: #fff;
input{
    border:none;
    outline:none;
    background:transparent;
    color:black;
    visibility: hidden
    
     }
.search{
    
}

`;

export  const NewLight =({logout,state:{data},handleShow})=> {
    //console.log(data,'state')
    
    return (
        <Style>
            <div className="d-flex justify-content-between align-items-center px-2 ">
                <div className="d-flex  align-items-center search px-1"><span onClick={handleShow} className="d-block d-md-none video"><RiMenu2Line size={30} />
                
                </span>
                <input 
                placeholder="Search Products" className="px-1 py-2"/></div>
             
             
                <div className="d-flex justify-content-between align-items-center">
                    <div className="me-4 d-none d-sm-block"><BsGlobe size={18} className="me-3"/><BiConversation size={18} className="me-3"/><IoIosNotifications size={18}/></div>
                    <div>
                        <Dropdown>
                            <Dropdown.Toggle className="dropdown-5 text-black text-capitalize" >
                                <>{`${data?.firstName} `}</>
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                              
                                <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown></div></div>
            </div>
        </Style>
    );
};
