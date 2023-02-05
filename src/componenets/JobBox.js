import React from 'react'
function Jobbox(props) {
    return (

        <div className="row p-3 m-4  job1  mb-3 border border-dark p-2 mb-2 border-3 rounded" >
            <div className="row ">
                <div className="col-md-2"><img src="https://cdn.mos.cms.futurecdn.net/LUpDXbnJmZ6zAy3CYwFrk.jpg" className="rounded-circle" style={{ width: "100%" }}></img>
                </div>
                <div className="company_name col">
                    <div className="d-flex flex-row">
                        <h3>{props.cname}</h3>
                        <i className="fa-regular fa-bookmark btn" style={{ marginLeft: "auto" }}></i>
                    </div>
                    <div className="row ">
                        <div className="d-flex flex-row">
                            <div className="sector me-2 m-3">
                                <i className="fa-solid fa-briefcase jobdescription"></i>{props.role}
                            </div>
                            <div className=" me-3 m-3">
                                <i className="fa-solid fa-location-dot  location"></i>{props.location}
                            </div>
                            <div className=" me-3 m-3">
                                <i className="fa-solid fa-users"></i>{props.experience}
                            </div>
                            <div style={{ marginLeft: "auto" }}>
                                <button type="button" className="btn btn-primary m-2" >Apply<i className="fa-sharp fa-solid fa-link"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Jobbox