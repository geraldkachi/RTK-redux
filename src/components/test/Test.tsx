import Img from './card1.jpg'
import Visa from './visa.jpeg'
import Discover from './discover.jpg'
import PayPal from './paypal.png'
import './test.css'

const Test = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className=" navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 mx-5">
                            <li className="nav-item mx-4">
                                <a className="nav-link active disabled" href='!#' aria-current="page" >TRIP</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link disabled" href='!#' >RECENTLY VIEWED</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link disabled" href='!#'>BOOKINGS</a>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div className="rounded-circle">
                                <div className="d-flex float-right">
                                    <div className="rounded-circle" style={{ borderRadius: '50%' }}>
                                        <img src={Img} alt="alt-card" width={40} height={40} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="container overflow-hidden">
                <hr className='my-3' />
                <div className='d-flex justify-content-between flex-wrap'>
                    <div>
                        <h4>Personal Information</h4>
                        <h6 className='lead'>Choose Your method payment</h6>
                    </div>  
                    <div className='d-flex'>
                        <div>
                            <span className="m-3">
                                <img src={Visa} alt="visa" width={30} height={15} />
                            </span>
                            <span className="me-3">
                                <img src={Discover} alt="Discover" width={60} height={30} />
                            </span>
                        </div>
                        <span className="paypal">
                                <img src={PayPal} alt="paypal" width={100} height={30} />
                        </span>
                    </div>
                </div>
                {/* grid */}
                <div className="row my-4">
                    <div className="col">
                        <div className='mb-5'><img src={Img} alt="Cards" /></div>
                    </div>
                    <div className="col-md-6 overflow-hidden">
                        <form>
                            <div className="row">
                                <div className="col-md-6 A">
                                    <div className="mb-3">
                                        <label className="form-label">Credit card number</label>
                                        <input type="number" className="form-control" placeholder='0000 0000 0000 0000' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Security Code</label>
                                        <input type="number" className="form-control" placeholder='420' id="exampleInputEmail1" aria-describedby="emailHelp" />
                                        {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
                                    </div>
                                </div>
                                <div className="col-md-6 B">
                                    <div className="mb-3">
                                        <label className="form-label">Expiration Date</label>
                                        <input type="number" className="form-control" placeholder='03/24' id="exampleInputPassword1" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Postal Code</label>
                                        <input type="number" className="form-control" placeholder='10119' id="exampleInputPassword1" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3 form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                {/* <label className="form-check-label">Check me out</label> */}
                                <div id="emailHelp" className="form-text">Use this card for the next purchase</div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 py-3">Add card</button>
                        </form>
                    </div>
                    <hr className='my-4' />

                    <div className="d-flex justify-content-between">
                        <div>
                            <h6 className='font-weight-bold text-uppercase'>Subtotal</h6>
                            <h6 className='font-weight-bold text-uppercase'>Estimatd TAX</h6>
                            <h6 className='font-weight-bold text-uppercase'>Promotion Code: <span className='lead form-text'>Z4KXLM9A</span></h6>
                        </div>
                        <div className='text-end'>
                            <h6 className='font-weight-bold text-uppercase'>₦ 2,4970.00</h6>
                            <h6 className='font-weight-bold text-uppercase'>₦ 119.64</h6>
                            <h6 className='font-weight-bold text-uppercase'>₦ -60.00</h6>
                        </div>
                    </div>
                    <hr className='my-4' />

                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <div className="col-md-6">
                            <button type="submit" className="btn btn-primary py-3">Complete Payment</button>
                        </div>
                        <h2>Total: ₦2556.64</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Test