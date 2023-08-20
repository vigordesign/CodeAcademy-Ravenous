import React from "react";
import styles from "./BusinessList.css";
import Business from "../Business/Business";

const BusinessList = () => {
    return(
        <div className="bizList">
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
            <Business/>
        </div>
    )
};

export default BusinessList;


