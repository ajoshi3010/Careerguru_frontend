import Footer from "./Footer"
import Navigation from "./Navigation"

function Skills() {
    return (
        <div>
            <Navigation />
            <div style={{ border: "1px solid", borderRadius: "11px", padding: "2%", margin: "5%", height: "500px", position: "relative" }}>
                <label>Educational Qualification:</label>

                <select className="form-select" aria-label="Default select example">

                    <option value="1">10th pass</option>
                    <option value="2">12th pass</option>
                    <option value="3">Btech in CSE</option>
                    <option value="4">Btech in ECE</option>
                    <option value="5">Btech in Chemical Eng</option>
                    <option value="6">Btech in Civil Eng</option>
                    <option value="7">Btech in Mechanical Eng</option>
                    <option value="8">Mtech in CSE</option>
                    <option value="9">Mtech in ECE</option>
                    <option value="10">Mtech in Chemical Eng</option>
                    <option value="11">Mtech in Civil Eng</option>
                    <option value="12">Mtech in Mechanical Eng</option>
                    <option value="13">MBA Graduate </option>
                    <option value="14">BCOM Graduate </option>
                    <option value="15">Mcom Graduate </option>
                    <option value="16">Hospitality Graduate</option>
                </select>


                <a type="button" className="btn btn-primary" href="login"
                    style={{
                        width: "20%", position: "absolute", bottom: "1%", right: "1%", textAlign: "center"
                    }}>Next</a>
            </div>
            <Footer />
        </div>
    )
}
export default Skills