import React from 'react'
import { AppLayout, TopNav } from '../../../components'
import SimpleMap1 from '../../../components/map/Map'
const locations = require("../../../components/map/location.json");

export default function IndividualActivityReport() {
  return (
    <AppLayout>
        <section className='px-lg-4'>
        <div className='mb-5 mt-3'>
            <TopNav
            TextComp={ <h4>Individual Activity Report</h4>}
            // RightComp={
            //     <div className='d-flex'>
            //         <div className='d-flex'><span className='me-2'>Field Rep</span><DropdownComp dropDownText={"Hello"}
                    
            //         /></div>
            //         <div>Hekk</div>
            //     </div>
            // }
            />

            
           
        </div>
        <div className='mb-5'>
            <div className='row g-3'>
                <div className='col-lg-4 bg-6  my-0 ms-0 me-3 px-0 pt-0 pb-2 border-0 rounded'>
                  <div className='bg-white py-3 px-3 border-0'>
                  <h5 className='text-muted fw-normal'>Total Visits</h5>
                    <hr/>
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Visit with orders</h5>}
                    RightComp={<p className='mb-0'>10</p>}
                    />
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Onsite visit</h5>}
                    RightComp={<p className='mb-0'>10</p>}
                    />
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Customers Visited</h5>}
                    RightComp={<p className='mb-0'>10</p>}
                    />
                  </div>
                </div>
                {/*  */}
                <div className='col-lg-4 bg-61   my-0 ms-0 me-3 px-0 pt-0 pb-2  border-0 rounded'>
                  <div className='bg-white py-3 px-3 border-0'>
                  <h5 className='text-muted fw-normal'>Total Plans</h5>
                    <hr/>
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Planned visits</h5>}
                    RightComp={<p className='mb-0'>10</p>}
                    />
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Missed Visits</h5>}
                    RightComp={<p className='mb-0'>10</p>}
                    />
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Unplanned visits</h5>}
                    RightComp={<p className='mb-0'>10</p>}
                    />
                  </div>
                </div>
                {/*  */}
                <div className='col-lg-3 bg-7   my-0 ms-0 me-3 px-0 pt-0 pb-2  border-0 rounded'>
                  <div className='bg-white py-3 px-3 border-0'>
                  <h5 className='text-muted fw-normal'>Sales</h5>
                    <hr/>
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Target</h5>}
                    RightComp={<p className='mb-0'>NGN 240,000</p>}
                    />
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Achievement</h5>}
                    RightComp={<p className='mb-0'>50%</p>}
                    />
                    <TopNav
                    TopNavClassName='mb-3'
                    TextComp={<h5 className='mb-0'>Amout remaining</h5>}
                    RightComp={<p className='mb-0'>NGN 120,000</p>}
                    />
                  </div>
                </div>
            </div>
        </div>
        <div className='bg-white p-3'>
        <TopNav
            TextComp={ <h5>GPS Cordinate</h5>}
            // RightComp={
            //     <div className='d-flex'>
            //         <div className='d-flex'><span className='me-2'>Field Rep</span><DropdownComp dropDownText={"Hello"}
                    
            //         /></div>
            //         <div>Hekk</div>
            //     </div>
            // }
            />
            <div>
            <SimpleMap1 locations={locations} />
            </div>
        </div>
        </section>
    </AppLayout>
  )
}
