import Navigation from './Navigation'
import Loginbox from './Loginbox'
import Footer from './Footer'
function LoginPage() {
    return (
        <div>
            <Navigation />
            <div className="container" style={{ padding: "2%" }}>
                <div className="row" style={{ padding: "2%" }}>
                    <div className="col-8">
                        <img src="images/loginpage-1.jfif" alt="" />
                    </div>
                    <Loginbox />
                </div>

            </div>
            <Footer />
        </div>
    )
}
export default LoginPage