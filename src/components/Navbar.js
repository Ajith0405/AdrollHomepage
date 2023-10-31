import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import '../Css/Navbar.css';
import { useState } from 'react';


function Navbar() {
    const [activeDrop, setActiveDrop] = useState(false)
    const [activeDrop2, setActiveDrop2] = useState(false)
    const [activeDrop3, setActiveDrop3] = useState(false)
    const [activeDrop4, setActiveDrop4] = useState(false)


    return (
        <div>
            <div style={{ marginBottom: '75px' }}>
                <nav className="navbar navbar-expand-sm bg-light navbar-light fixed-top" style={{ height: '70px' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"><img src='https://www.adroll.com/assets/svg/logo-adroll.svg' alt='ad_roll' width={'80px'} /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="ms-2 collapse navbar-collapse justify-content-between" id="collapsibleNavbar">
                            <ul className="navbar-nav">
                                <li className="nav-item" onMouseEnter={() => setActiveDrop(true)} onMouseLeave={() => setActiveDrop(false)}>

                                    {window.innerWidth > 990 ? <>   <a
                                        type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" className='nav-link nav_link pc' href="#">
                                        Why AdRoll? <span><KeyboardArrowDownIcon /></span> </a>


                                        <ul style={{ minWidth: '0px', width: '160px', display: activeDrop ? 'block' : 'none' }} className="m-0 py-2 p-0 dropdown-menu shadow"
                                            aria-labelledby="dropdownMenuButton">
                                            <li ><span className="dropdown-item text-center" href="#"><strong>Why Addroll</strong></span></li>
                                            <li ><a className=" dropdown-item" href="#">Managed Services</a></li>
                                            <li ><a className=" dropdown-item" href="#">Case Studies</a></li>
                                        </ul>  </> :
                                        <>
                                            <h6 className='shead'>Why AdRoll?</h6>
                                            <ul className='sbody'>
                                                <li ><a href="#">Managed Services</a></li>
                                                <li ><a href="#">Case Studies</a></li>
                                            </ul> </>
                                    }

                                </li>
                                {/* dropdown-2 */}
                                <li className="nav-item dropdown" onMouseEnter={() => setActiveDrop2(true)} onMouseLeave={() => setActiveDrop2(false)} >
                                    {window.innerWidth > 990 ? <>  <a style={{ position: 'relative' }}
                                        type="button" id="dropdownMenuButton2" data-mdb-toggle="dropdown" aria-expanded="false" className='nav-link nav_link' href="#">
                                        Marketing Platform  <span><KeyboardArrowDownIcon /></span> </a>


                                        <ul style={{
                                            minWidth: '0px', width: '100%', position: 'fixed', left: '0',
                                            transformOrigin: 'top center', transform: activeDrop2 ? 'scaleY(1)' : 'scaleY(0)',
                                            transition: 'transform 0.3s ease-in', display: activeDrop2 ? 'block' : 'none'
                                        }} className="m-0  p-0 dropdown-menu shadow " aria-labelledby="dropdownMenuButton2">

                                            <div className='row justify-content-center mx-3 my-5'>

                                                <div className="col-lg-2 mx-3">
                                                    <strong>Marketing Platform</strong> <br />
                                                    <a style={{ color: '#B931FC' }} href="">Audience & Segmentation</a>
                                                    <a style={{ color: '#B931FC' }} href="">Marketing Automation</a>
                                                    <a style={{ color: '#B931FC' }} href="">Cutomer Privacy</a>
                                                </div>
                                                <div className="col-lg-2 mx-3 ">
                                                    <strong>Campaigns</strong> <br />
                                                    <a style={{ color: '#B931FC' }} href="">Retargeting Ads</a>
                                                    <a style={{ color: '#B931FC' }} href="">Brand Ads</a>
                                                </div>
                                                <div className="col-lg-2 mx-3">
                                                    <strong>Marketing Channels</strong> <br />
                                                    <a style={{ color: '#B931FC' }} href="">Display Advertising</a>
                                                    <a style={{ color: '#B931FC' }} href="">video Advertising</a>
                                                    <a style={{ color: '#B931FC' }} href="">Native Advertising</a>
                                                    <a style={{ color: '#B931FC' }} href="">Email Advertising</a>
                                                </div>
                                                <div className="col-lg-2 mx-3">
                                                    <strong>Connected Channels</strong> <br />
                                                    <a style={{ color: '#B931FC' }} href="">Facebook Advertising</a>
                                                    <a style={{ color: '#B931FC' }} href="">Instagram Advertising</a>
                                                    <a style={{ color: '#B931FC' }} href="">TikTOk Advertising</a>
                                                    <a style={{ color: '#B931FC' }} href="">Google Advertising</a>
                                                </div>
                                                <div className="col-lg-2 mx-3">
                                                    <strong>Analytics</strong> <br />
                                                    <a style={{ color: '#B931FC' }} href="">Cross-channel Performance</a>
                                                    <a style={{ color: '#B931FC' }} href="">Cross-channel Attribution</a>
                                                </div>

                                            </div>
                                            <div className='row '>
                                                <div className='col-lg-12 rbg'> </div>
                                            </div>

                                        </ul>  </> :
                                        <>
                                            <h6 className='shead'>Marketing Platform</h6>
                                            <ul className='sbody'>
                                                <li ><a href="#">Platform Overview</a></li>
                                                <li ><a href="#">Retargeting Ads</a></li>
                                                <li ><a href="#">Brand Awareness</a></li>
                                                <li ><a href="#">Connected Channels</a></li>
                                                <li ><a href="#">Email Marketing</a></li>
                                                <li ><a href="#">Reporting & Insights</a></li>

                                            </ul>  </>}
                                </li>

                                {/* dropdown- 3  */}
                                <li className="nav-item dropdown" onMouseEnter={() => setActiveDrop3(true)} onMouseLeave={() => setActiveDrop3(false)} >
                                    {window.innerWidth > 990 ? <> <a type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" className='nav-link nav_link' href="#">
                                        For Ecommerce <span><KeyboardArrowDownIcon /></span></a>
                                        <ul style={{
                                            minWidth: '0px', width: '205px',
                                            transformOrigin: 'top center', transform: activeDrop3 ? 'scaleY(1)' : 'scaleY(0)',
                                            transition: 'transform 0.3s ease-in', display: activeDrop3 ? 'block' : 'none'
                                        }} className="m-0 py-2 p-0 dropdown-menu shadow " aria-labelledby="dropdownMenuButton">
                                            <li ><span className="dropdown-item text-center" href="#"><strong>Addroll  for Ecommerce</strong></span></li>
                                            <li ><a className=" dropdown-item" href="#">Shopify</a></li>
                                            <li ><a className=" dropdown-item" href="#">Shopify Plus</a></li>
                                            <li ><a className=" dropdown-item" href="#">WooCommerce</a></li>
                                            <li ><a className=" dropdown-item" href="#">Wix</a></li>
                                            <li ><a className=" dropdown-item" href="#">BigCommerce</a></li>
                                            <li ><a className=" dropdown-item" href="#">Magento</a></li>


                                        </ul> </> :
                                        <>  <h6 className="shead">Addroll  for Ecommerce</h6>
                                            <ul className="sbody">
                                                <li ><a href="#">Shopify</a></li>
                                                <li ><a href="#">Shopify Plus</a></li>
                                                <li ><a href="#">WooCommerce</a></li>
                                                <li ><a href="#">Wix</a></li>
                                                <li ><a href="#">BigCommerce</a></li>
                                                <li ><a href="#">Magento</a></li>
                                            </ul> </>}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link nav_link" href="#">Pricing</a>
                                </li>
                                {/* dropdown - 6 */}
                                <li className="nav-item dropdown" onMouseEnter={() => setActiveDrop4(true)} onMouseLeave={() => setActiveDrop4(false)}>
                                    {window.innerWidth > 990 ? <><a type="button" id="dropdownMenuButton" data-mdb-toggle="dropdown" aria-expanded="false" className='nav-link nav_link' href="#">
                                        Why AddRoll?  <span><KeyboardArrowDownIcon /></span> </a>


                                        <ul style={{
                                            minWidth: '0px', width: '100%', position: 'fixed', left: '0',
                                            transformOrigin: 'top center', transform: activeDrop4 ? 'scaleY(1)' : 'scaleY(0)',
                                            transition: 'transform 0.3s ease-in', display: activeDrop4 ? 'block' : 'none'
                                        }} className="m-0  py-2 p-0 dropdown-menu shadow " aria-labelledby="dropdownMenuButton">

                                            <div className='row justify-content-center mx-3 mt-5'>

                                                <div className="col-lg-2">
                                                    <strong>Marketing Resources</strong> <br />
                                                    <div>
                                                        <a style={{ color: '#B931FC' }} href="#">Resources Library</a>
                                                        <a style={{ color: '#B931FC' }} href="#">Addroll blog</a>
                                                        <a style={{ color: '#B931FC' }} href="#">Holiday Marketing Resources </a>
                                                        <a style={{ color: '#B931FC' }} href="#">What is retargeting?</a>
                                                        <a style={{ color: '#B931FC' }} href="#">Marketing Gloserry </a>
                                                        <a style={{ color: '#B931FC' }} href="#">State of Digital Marketing Resources </a>
                                                    </div>

                                                </div>
                                                <div className="col-lg-2 ">
                                                    <strong>Free Tools</strong> <br />
                                                    <a style={{ color: '#B931FC' }} href="#">Return on Ad spend Calculator</a>
                                                    <a style={{ color: '#B931FC' }} href="#">AdRoll UTM Link Builder</a>
                                                    <a style={{ color: '#B931FC' }} href="#">Discound Profit Margin Calculator</a>
                                                </div>
                                                <div className="col-lg-2 ">
                                                    <strong>Community</strong> <br />
                                                    <a style={{ color: '#B931FC' }} href="#">Growth Gorrila </a>
                                                    <a style={{ color: '#B931FC' }} href="#">Small Business</a>
                                                    <a style={{ color: '#B931FC' }} href="#">Events</a>

                                                </div>
                                                <div className="col-lg-2 ">
                                                    <strong>Customer Supports</strong> <br />
                                                    <a style={{ color: '#B931FC' }} href="#">Getting Started </a>
                                                    <a style={{ color: '#B931FC' }} href="#">Help center </a>
                                                    <a style={{ color: '#B931FC' }} href="#">Research Panel</a>

                                                </div>
                                                <div className="col-lg-4 d-flex">
                                                    <div className='w-100 py-3 px-2 box' style={{ height: '100%', background: '#303273' }}>
                                                        <div className='mx-2 rounded-3 h-100 flex-column d-flex justify-content-center align-items-center' style={{ background: '#FFE8E0' }}>
                                                            <img className='m-3 rounded-3 navImage' width='90%' src="https://www.adroll.com/assets/img/promo/holiday-marketing-hero.png?auto=webp&fm=png&width=393" alt="" />
                                                            <h6 className='text-center'>Power up your holiday marketing</h6>
                                                            <p className='text-center px-3'> It might seem early, but the race to holiday revenue is on! 🏃We’re here to guide you through your mission to generate brand awareness, maximize budget, and create campaigns your target audience can’t ignore.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='row' style={{ position: 'relative' }}>
                                                    <div className='col-lg-12 rbg' style={{ position: 'absolute', bottom: '0' }}> </div>
                                                </div>
                                            </div>

                                        </ul>
                                    </> : <>
                                        <h6 className='shead'>Resources </h6>

                                        <ul className='sbody'>
                                            <li><a href="#">AddRoll Blog</a></li>
                                            <li><a href="#">Marketing Glossery</a></li>
                                            <li><a href="#">Events</a></li>
                                            <li><a href="#">Wix</a></li>
                                            <li><a href="#">Getting Started</a></li>
                                            <li><a href="#">Help center</a></li>
                                        </ul>

                                        <h6 className='shead'>Login</h6>
                                        <button className='btn px-1 w-100 rounded-2 btn-purp'>GET STARTED</button>
                                    </>
                                    }
                                </li>
                            </ul>
                            <div className='d-flex align-items-center me-3'>
                                <a className='me-2' href='#' style={{ textDecoration: 'none' }}>Log in</a>
                                <button className='btn' style={{ backgroundColor: '#B931FC', padding: '10px 8px', color: 'whitesmoke' }}>GET STARTED</button>
                            </div>
                        </div>
                    </div>
                </nav>
                <div className="offcanvas offcanvas-end w-75" style={{ background: '#2C3639' }} tabIndex="-1" id="offcanvasNavbar" data-bs-scroll="true">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title">
                            <img src="https://www.adroll.com/assets/svg/logo-adroll-white.svg" width='100px' alt="" /></h5>
                        <button  type="button" className="btn-close btn_close text-reset" data-bs-dismiss="offcanvas"></button>
                    </div>
                    <div className="offcanvas-body canvas_body">
                        <div>
                            <h6 className='shead'>Why AdRoll?</h6>
                            <ul className='sbody'>
                                <li ><a href="#">Managed Services</a></li>
                                <li ><a href="#">Case Studies</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='shead'>Marketing Platform</h6>
                            <ul className='sbody'>
                                <li ><a href="#">Platform Overview</a></li>
                                <li ><a href="#">Retargeting Ads</a></li>
                                <li ><a href="#">Brand Awareness</a></li>
                                <li ><a href="#">Connected Channels</a></li>
                                <li ><a href="#">Email Marketing</a></li>
                                <li ><a href="#">Reporting & Insights</a></li>

                            </ul>
                        </div>
                        <div>
                            <h6 className="shead">Addroll  for Ecommerce</h6>
                            <ul className="sbody">
                                <li ><a href="#">Shopify</a></li>
                                <li ><a href="#">Shopify Plus</a></li>
                                <li ><a href="#">WooCommerce</a></li>
                                <li ><a href="#">Wix</a></li>
                                <li ><a href="#">BigCommerce</a></li>
                                <li ><a href="#">Magento</a></li>
                            </ul>
                        </div>
                        <div>
                            <h6 className='shead'>Resources </h6>

                            <ul className='sbody'>
                                <li ><a href="#">AddRoll Blog</a></li>
                                <li ><a href="#">Marketing Glossery</a></li>
                                <li ><a href="#">Events</a></li>
                                <li ><a href="#">Wix</a></li>
                                <li ><a href="#">Getting Started</a></li>
                                <li ><a href="#">Help center</a></li>
                            </ul>

                            <h6 className='text-center'>Login</h6>
                            <button className='btn px-1 w-100 rounded-2 btn-purp'>GET STARTED</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar