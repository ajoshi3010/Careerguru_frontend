// import React from 'react'
import Navigation from './Navigation'
import Footer from './Footer'
function Homepage() {
    return (
        <div><Navigation />
            <div className="container" style={{padding: "2%"}}>
                <div className="row" style={{padding: "2%"}}>
                    <div className="col-4">
                        <img style={{width: "90%"}} src="images/homepage-1.jfif" alt="" />
                    </div>
                    <div className="col-8">
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum. <br />
                        <span><a type="button" className="btn btn-primary" href="/signup">Get
                            Started</a></span>
                        <hr />
                    </div>



                </div>
                <div className="row" id="About" style={{padding: "2%"}}>

                    <div className="col-8">
                        What is Lorem Ipsum?
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                        <hr />
                    </div>
                    <div className="col-4">
                        <img src="images/homepage-1.jfif" alt="" />
                    </div>
                </div>
            </div>
            <Footer/>
        </div>

    )
}
export default Homepage