import Footer from "./Footer";
import Navigation from "./Navigation";
function Signup() {
    return (
        <div>
            <Navigation />
            <div style={{ border: "1px solid", borderRadius: "11px", padding: "2%", margin: "5%", height: "500px", position: "relative" }}>

                <div>
                    <h3 style={{ color: "grey", textAlign: "center" }}>Sign up</h3>
                    <div style={{ padding: "1%", textAlign: "center" }}><input style={{ width: "50%" }} type="text" placeholder="First and last name" /></div>
                    <div style={{ padding: "1%", textAlign: "center" }}><input style={{ width: "50%" }} type="text" placeholder="Email" />
                    </div>

                    <div style={{ padding: "1%", textAlign: "center" }}><input style={{ width: "50%" }} type="password"
                        placeholder="Create Password" /></div>
                    <div style={{ padding: "1%", textAlign: "center" }}><input style={{ width: "50%" }} type="password"
                        placeholder="Confirm Password" /></div>
                </div>


                <a type="button" className="btn btn-primary" style={{ width: "20%", position: "absolute", bottom: "1%", right: "1%", textAlign: "center" }}
                    href="user">Next</a>




            </div>
            <Footer />

        </div>
    )
}
export default Signup;