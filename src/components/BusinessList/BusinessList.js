import React from "react";
import styles from "./BusinessList.css";
import Business from "../Business/Business";

const BusinessList = ({businesses}) => {
    return(
        <div className="bizList">
            {businesses.map((business) => (
                <Business business={business} key={business.name}  />
            ))}
        </div>
    )
};

export default BusinessList;