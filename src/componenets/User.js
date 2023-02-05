import Footer from "./Footer";
import Navigation from "./Navigation";

function User() {
    return (
        <div>
            <Navigation />
            <div style={{ border: "1px solid", borderRadius: "11px", padding: "2%", margin: "5%", height: "500px", position: "relative" }}>
                <div style={{ height: "300px" }}>
                    <h3 style={{ color: "grey", textAlign: "center" }}>You are a</h3>

                </div>
                <div style={{ textAlign: "center" }}>
                    <a type="button" className="btn btn-primary" style={{ width: "20%", margin: "1%" }}
                    >Student</a>
                    <a type="button" href="skills" className="btn btn-primary" style={{ width: "20%", margin: "1%" }}
                    >Job Seeker</a>
                    
                </div>

                {/* <a type="button" className="btn btn-primary" style={{ width: "20%", position: "absolute", bottom: "1%", left: "1%", textAlign: "center" }}
                    href="signup">Previous</a> */}
            </div>
            <Footer />
        </div>
    )
}
export default User;