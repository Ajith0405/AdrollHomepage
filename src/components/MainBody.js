import React, { useState, useEffect } from 'react'
import img1 from '../images/hero-machine.jpeg'



function MainBody() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const myStringArray = ['marketing newbie.', 'scrappy new entrepreneur.', 'big business marketing department.', 'one-person marketing team.', 'ecommerce store owner.'];
    const [value, setValue] = useState('')

    useEffect(() => {
        // This effect will increment the currentIndex every 2 seconds
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % myStringArray.length);
        }, 2000);

        return () => {
            clearInterval(interval);
        };
    }, [myStringArray]);
    return (
        <div className=''>
            <div className='pt-3 pb-1 d-flex align-items-center justify-content-center' style={{ backgroundColor: '#F875AA', width: '99.5%' }}>
                <p className='text-center' style={{ color: 'wheatWhite' }}>Learn how to optimize your webpages and ad creative at our upcoming workshop 👀 <a className='' href='#' style={{ textDecoration: 'none', color: '#C2D9FF' }}>Register Now <i class="fa-solid fa-arrow-right fa-sm"></i></a></p>
            </div>
            <div className='row content_1 container-fluid'>
                <div className='col-12 col-lg-6 d-flex justify-content-center align-items-center content_1'>
                    <div className=''>
                        <h1 style={{ fontWeight: '700', color: '#113946' }} >Smaller budgets need <br /> smarter dollars</h1>
                        <p style={{ fontWeight: '600' }}>Create, manage, and analyze your display, Facebook, Instagram,<br /> Pinterest, TikTok, and email campaigns from a single platform. AdRoll <br /> helps marketers do more with less.</p>
                        <p>
                            <a className='btn me-2 py-2 px-3' href='#' style={{backgroundColor:'blueviolet',color:'white'}}>Get Started</a>
                            <a className='btn btn-info py-2 px-3 text-light' href='#'>Get In Touch</a>
                        </p>
                    </div>

                </div>
                <div className='col-6 col-lg-6 content_2 d-none d-sm-block' style={{ height: '400px' }}>
                    <div className='content_img h-100'>
                    </div>
                </div>
            </div>
            {/* Content - 2  */}
            <div className='container'>
                <div className='row py-3 justify-content-center'>
                    <div className='col-12 col-lg-6 d-flex flex-column  justify-content-center align-items-center'>
                        <div>
                            <h1 style={{ fontWeight: '600' }}>AdRoll works for the</h1>
                        </div>
                        <div>
                            <h2 style={{ fontWeight: '600',textDecoration:'underline',cursor:'pointer'}}>{myStringArray[currentIndex]}</h2>
                        </div>
                        <div>
                            <p>Our industry-first automation builder gives you full control of <br /> campaigns across display, social, and email — all from one place.</p>
                        </div>
                        <div>
                            <p><a style={{ textDecoration: 'none', color: '#FF6AC2', fontWeight: '700' }}>Explore automation builder <i class="fa-solid fa-arrow-right fa-sm"></i></a></p>
                        </div>
                    </div>
                    <div className='col-12 col-lg-6'>
                        <div className='p-2 d-flex justify-content-center align-items-center' style={{ height: '400px' }}>
                            <img src='https://www.adroll.com/assets/img/ecommerce-marketing/img-automation_studio.png?format=png&auto=webp&width=400' width={'350px'} />
                        </div>

                    </div>
                </div>
                {/* Content - 3  */}
                <div className='container' style={{ margin: '50px 0px 50px 0px' }}>
                    <div className='row d-flex justify-content-center align-items-center'>
                        <div className='col-6 col-sm-2 col-lg-2'>
                            <img className='' src='https://www.adroll.com/assets/img/logos/lounge.png?format=png&auto=webp&width=209' alt='logoes' width={'150px'} />
                        </div>
                        <div className='col-6 col-sm-2 col-lg-2'>
                            <img className='' src='https://www.adroll.com/assets/img/logos/topo-designs.png?format=png&auto=webp&width=209' alt='logoes' width={'150px'} />
                        </div>
                        <div className='col-6 col-sm-2 col-lg-2'>
                            <img className='' src='https://www.adroll.com/assets/img/logos/peyton-jewelry.png?format=png&auto=webp&width=209' alt='logoes' width={'150px'} />
                        </div>
                        <div className='col-6 col-sm-2 col-lg-2'>
                            <img className='' src='https://www.adroll.com/assets/img/logos/shady-rays.png?format=png&auto=webp&width=209' alt='logoes' width={'150px'} />
                        </div>
                        <div className='col-6 col-sm-2 col-lg-2'>
                            <img className='' src='https://www.adroll.com/assets/img/logos/exploading-kittens.png?format=png&auto=webp&width=209' alt='logoes' width={'150px'} />
                        </div>
                        <div className='col-6 col-sm-2 col-lg-2'>
                            <img className='' src='https://www.adroll.com/assets/img/logos/head-kandy.png?format=png&auto=webp&width=209' alt='logoes' width={'150px'} />
                        </div>
                    </div>
                </div>
                {/* Content - 4  */}
                <div className='container' style={{ margin: '50px 0px 50px 0px',padding:'60px 0px 60px 0px',backgroundColor: '#EBF3E8',  }}>
                    <div className='row '>
                        <div className='col-12 col-lg-6'>
                            <div className='p-2 d-flex justify-content-center' >
                                <img src='https://www.adroll.com/assets/img/homepage/customers-find.png?format=png&auto=webp&width=398' width={'350px'} />
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <h1>For 15 years, we've been the leader <b /> in helping our customers find their <b /> best customers</h1>
                            <p>The AdRoll platform is powered by 15+ years of data from hundreds of thousands of brands and billions of shoppers. Let our expertise find the right customers for your business.</p>
                            <p style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px', letterSpacing: '2px', color: '#FF6AC2' }}>Learn more <i className="fa-solid fa-arrow-right"></i></p>

                        </div>
                    </div>
                </div>
                {/* Content - 5  */}
                <div className='container py-3' style={{ margin: '50px 0px 100px 0px', backgroundColor: '' }}>
                    <div className='row '>
                        <div className='col-12 col-lg-6'>
                            <h1>Save time and energy by running all your campaigns across millions of websites and mobile apps — from one place</h1>
                            <p>When we say one-stop shop, we mean one-stop. Launch, pause, and edit ad campaigns across all the places you want to advertise, plus use that data to see your campaigns holistically and make improvements.</p>
                            <p className='plink' style={{  fontSize: window.innerWidth < 990 ? '14px' : '16px' , letterSpacing: '2px',color: '#FF6AC2' }}>Explore ads manager <i className="fa-solid fa-arrow-right"></i></p>

                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='p-2 d-flex justify-content-center' >
                                <img src='https://www.adroll.com/assets/img/homepage/save-time.png?format=png&auto=webp&width=398' width={'350px'} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content - 6 */}
                <div className='container py-3' style={{ margin: '50px 0px 100px 0px',}}>
                    <div className='row '>
                        <div className='col-12 col-lg-6'>
                            <div className='p-2 d-flex justify-content-center' >
                                <img src='https://www.adroll.com/assets/img/homepage/correct-choices.png?format=png&auto=webp&width=398' width={'350px'} />
                            </div>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <h1>Our retargeting and brand awareness ads make billions of correct choices every day</h1>
                            <p>Our AI does what even the most savvy marketer alone cannot. Our powerful machine learning makes more predictions per second than the NASDAQ to attract the right customers to your site and get them buying again and again.</p>
                            <p style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px', letterSpacing: '2px', color: '#FF6AC2' }}>Explore retargeting ads <i className="fa-solid fa-arrow-right"></i></p>
                            <p style={{ fontSize: window.innerWidth < 990 ? '14px' : '16px', letterSpacing: '2px', color: '#FF6AC2' }}>Explore brand awareness ads <i className="fa-solid fa-arrow-right"></i></p>
                            
                        </div>
                    </div>
                </div>
                {/* Content - 7 */}
                <div className='container py-3' style={{ margin: '50px 0px 100px 0px', backgroundColor: '' }}>
                    <div className='row '>
                        <div className='col-12 col-lg-6'>
                            <h1>Experts to manage your advertising</h1>
                            <p>Want to run effective campaigns but don’t have the bandwidth to manage different platforms? AdRoll managed services can be an extension of your marketing team, providing you with a dedicated platform expert to partner with, helping you and your team achieve your marketing goals and maximize return from your campaigns.</p>
                            <p style={{fontSize: window.innerWidth < 990 ? '14px' : '16px' , letterSpacing: '2px',color:'#FF6AC2' }}>Get the support you deserve <i className="fa-solid fa-arrow-right"></i></p>
                        </div>
                        <div className='col-12 col-lg-6'>
                            <div className='p-2 d-flex justify-content-center' >
                                <img src='https://www.adroll.com/assets/img/homepage/experts.png?format=png&auto=webp&width=398' width={'80%'} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content-8 */}
                <div className='content_8' style={{ height: '400px', position: 'relative' }}>
                    <div className='row d-flex align-items-center' style={{ border: '10px solid blue', height: '330px', position: 'absolute', top: '70px', width: '98%' }}>
                        <div className='col-12 col-lg-6' style={{backgroundColor:'white'}}>
                            <div className='ps-3'>
                                <div className='mb-2'>
                                    <img className='' src='https://www.adroll.com/assets/img/homepage/logo-volcanica.png?format=png&auto=webp&width=150' alt='' />
                                </div>
                                <p className='' style={{ fontWeight: '700' }}>"Since last year, our revenue has increased 191%, our attributed conversions 177%, and our engagement 33%. We’re reaching and converting customers higher in the funnel."</p>
                            </div>
                        </div>
                        <div className='col-8 col-lg-6 d-none d-sm-block d-flex justify-content-center' style={{}}>
                            <div className='' style={{ backgroundColor: '#F1B4BB', padding: '20px 70px 60px 50px', borderRadius: '150px 180px 50px 150px', marginLeft: '110px' }}>
                                <h2><span style={{ fontWeight: '600' }}>AdRoll customers</span> make</h2>
                                <h1 style={{ fontSize: '90px', fontWeight: '700' }}>$165B</h1>
                                <h2>in sales<span style={{ fontWeight: '600' }}> every year.</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content-9 */}
                <div className='container py-5'>
                    <div className='d-flex justify-content-center'>
                        <a href=''><img src='https://images.g2crowd.com/uploads/report_medal/image/1004323/medal.svg' alt='batch' width={'90px'} /></a>
                        <a href=''><img src='https://images.g2crowd.com/uploads/report_medal/image/1004325/medal.svg' alt='batch' width={'90px'} /></a>
                        <a href=''><img src='https://images.g2crowd.com/uploads/report_medal/image/1004342/medal.svg' alt='batch' width={'90px'} /></a>
                        <a href=''><img src='https://www.g2.com/shared-assets/product-badges/users-love-us.svg' alt='batch' width={'90px'} /></a>
                    </div>
                </div>
            </div>
            {/* Content-10 */}
            <div className='container-fluid' style={{ margin: '50px 0px 50px 0px', backgroundColor: '#FFDFDF' }}>
                <div className='my-4 text-center' style={{ padding: '100px 0px 100px 0px', }}>
                    <h1 className='mb-2' style={{ fontWeight: '600' }}>Increase ROI. Learn from your data.<br /> Maximize sales.</h1>
                    <div className=''>
                        <a className='btn py-2 px-2 me-2' style={{backgroundColor:'blueviolet',color:'white'}} href='#'>GET STARTED</a>
                        <a className='btn btn-success py-2 px-2 ' href='#'>GET IN TOUCH</a>
                    </div>
                </div>
            </div>
            {/* content-11 */}
            <div className='container'>
                <div className='row'>
                    <div className='col-4 col-lg-2'>
                        <div>
                            <p style={{ fontWeight: '700' }}>Why AdRoll?</p>
                            <p>Overview</p>
                            <p>Pricing</p>
                            <p style={{ fontWeight: '7300' }}>For ecommmerce stores</p>
                            <p>AdRoll for ecommerce</p>
                            <p>Shopify</p>
                            <p>WooCommerce</p>
                            <p>BigCommerce</p>
                            <p>Magento</p>
                        </div>
                    </div>
                    <div className='col-4 col-lg-2'>
                        <div>
                            <p style={{ fontWeight: '700' }}>Marketing Platform</p>
                            <p>One platform, every need</p>
                            <p>Find more customers</p>
                            <p>Build profitable relationships</p>
                            <p>Track and improve results</p>
                            <p>Protect customer data</p>
                            <p style={{ fontWeight: '7300' }}>Marketing Recipes</p>
                            <p>What are marketing recipes?</p>
                            <p>Abandoned cart recovery</p>
                            <p>Customer loyalty</p>
                            <p>Retargeting</p>
                            <p>Brand awareness</p>
                        </div>
                    </div>
                    <div className='col-4 col-lg-2'>
                        <div>
                            <p style={{ fontWeight: '700' }}>Resources</p>
                            <p>Resource library</p>
                            <p>Blog</p>
                            <p>Community</p>
                            <p>Events</p>
                            <p>Help Center</p>
                            <p>Third-Party Cookies</p>
                            <p>Abandoned cart recovery</p>
                            <p>AdRoll UTM Link Builder</p>
                            <p>Digital Marketing Newsletter</p>
                        </div>
                    </div>
                    <div className='col-4 col-lg-2'>
                        <div>
                            <p style={{ fontWeight: '700' }}>Partners</p>
                            <p>Overview</p>
                            <p>Agencies</p>
                            <p>Agency Directory</p>
                            <p>Partner Directory</p>
                            <p>Referral Program</p>
                            <p>API docs</p>
                        </div>
                    </div>
                    <div className='col-4 col-lg-2'>
                        <div>
                            <p style={{ fontWeight: '700' }}>Company</p>
                            <p>About</p>
                            <p>News</p>
                            <p>Careers</p>
                            <p>NextRoll Engineering</p>
                            <p>Referral Program</p>
                            <p>API docs</p>
                        </div>
                    </div>
                    <div className='col-4 col-lg-2'>
                        <div>
                            <div className='d-flex justify-content-between'>
                                <a href='#'><i class="fa-brands fa-facebook fa-xl" style={{ color: 'gray' }}></i></a>
                                <a href='#'><i class="fa-brands fa-instagram fa-xl" style={{ color: 'gray' }}></i></a>
                                <a href='#'><i class="fa-brands fa-linkedin fa-xl" style={{ color: 'gray' }}></i></a>
                                <a href='#'><i class="fa-brands fa-twitter fa-xl" style={{ color: 'gray' }}></i></a>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <img src='https://www.g2.com/products/adroll/widgets/stars?color=white&type=read' alt='' width={'100%'} />
                        </div>
                    </div>

                </div>
            </div>
            {/* Content-12 */}
            <div className='container-fluid my-4'>
                <div>
                    <div className='text-center'>
                        <img src='https://www.adroll.com/assets/svg/logo-nextroll.svg' alt='' width={'150px'} />
                    </div>
                    <div className='text-center my-3 '>
                        <img className='me-2' src='https://www.adroll.com/assets/svg/logo-adroll.svg' alt='' width={'100px'} />
                        <img src='https://www.adroll.com/assets/svg/logo-rollworks.svg' alt='' width={'130px'} />
                    </div>
                    <div className='text-center'>
                        <p style={{ fontSize: '9px', padding: '0', margin: '0' }}>NextRoll is as an equal opportunity employer.</p>
                        <p style={{ fontSize: '9px', padding: '0', margin: '0' }}>We stand alongside organizations that support our Rollers and Community.</p>
                    </div>
                    <div className='container footer_bottom mt-3'>
                        <div className='d-flex justify-content-around'>
                            <p className='' ><a href='#'>Careers</a></p>
                            <p className='' ><a href='#'>Trust Center</a></p>
                            <p className='' ><a href='#'>Terms of Service</a></p>
                            <p className='' ><a href='#'>Website Terms of Use</a></p>
                            <p className='' ><a href='#'>Privacy Notice</a></p>
                            <p className='' ><a href='#'>Infringement Policy</a></p>
                            <p className='' ><a href='#'>Ad Opt Out</a></p>
                            <p className='' ><a href='#'>CCPA Notice at Collection</a></p>
                            <p className='' ><a href='#'>AdChoices</a></p>
                        </div>
                    </div>
                    <div className='text-center footer_bottom2'>
                        <a href='#'>Your Privacy Choices <img src='https://www.adroll.com/assets/img/your-privacy-choices.png' alt='logos' width={'30px'} /> </a>
                    </div>
                    <div className='text-center footer_bottom3 my-3'>
                        <p>© 2006-2023, NextRoll, Inc. All rights reserved. AdRoll is a division of NextRoll. To learn more please visit <a href='#'>nextroll.com.</a></p>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-info' style={{ fontSize: '13px', color: '#FFFBF5' }}>DO NOT SELL OR SHARE MY PERSONAL INFORMATION</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBody