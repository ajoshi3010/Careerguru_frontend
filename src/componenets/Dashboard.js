import Jobbox from "./JobBox"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Records from "../top_recommendations.json"


function Dashboard() {
    return (
        <div>
            <Navigation />
            <p>
                <h3>Top Recommendations</h3>
            </p>
            {
                Records.map((record)=>{
                    let comp_name=record.cname;
                    let role=record.role;
                    let exp=record.experience;
                    let loc=record.location;
                    return(
                        <Jobbox cname={comp_name} role={role} experience={exp} location={loc}/>
                    )
                })
            }

            <p>
                <h3>All Recommendations</h3>
            </p>
            

        </div>
    )
}
export default Dashboard;