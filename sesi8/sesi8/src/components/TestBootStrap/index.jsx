import { useState } from "react"
import CustomeButton from "./CustomeButton "

const TestBootStrap = () => {
    const [totalNotif, setTotalNotif] = useState(0)
    const [totalNotif2, setTotalNotif2] = useState(0)
    const [totalNotif3, setTotalNotif3] = useState(0)

    return (
        <div className="container">
            <div className="row">
               <div className="col">
                    <CustomeButton 
                        totalNotif={totalNotif} 
                        setTotalNotif={setTotalNotif}
                        color="info"
                    />
               </div>
               <div className="col">
                    <CustomeButton 
                        totalNotif={totalNotif2} 
                        setTotalNotif={setTotalNotif2}
                        color="danger"
                    />
               </div>
               <div className="col">
                    <CustomeButton 
                        totalNotif={totalNotif3} 
                        setTotalNotif={setTotalNotif3}
                        color="success"
                    />
               </div>
            </div>
        </div>
    )
}

export default TestBootStrap