function Loginbox() {
    return (
        <div className="col-4" style={{ border: "1px solid", borderRadius: "11px" }}>
            <h3 style={{ color: "grey" }}>Login here</h3>
            <div style={{ padding: "5%" }}><input style={{ width: "90%" }} type="text" placeholder="Username" /></div>

            <div style={{ padding: "5%" }}><input style={{ width: "90%" }} type="password" placeholder="Password" /></div>
            <div style={{ padding: "5%" }}><a type="button" className="btn btn-primary"
                style={{ width: "90%" }}
                href="dashboard">Login</a></div>
            <div style={{ padding: "5%" }}><a style={{ color: "black", textAlign: "center" }}>Forgot Password?</a>
            </div>
            <div style={{ padding: "5%" }}>Dont have an account?<a href="signup">Sign Up</a></div>
        </div>
    )
}
export default Loginbox