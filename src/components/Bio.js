import React from "react";
import LoremIpsum from "react-lorem-ipsum";

const Bio = () => {
    return (
        <div className="p-8">
            <h4 className="mb-4">Bio</h4>
            <div className="text-xl"><LoremIpsum /></div>
        </div>
    )
}

export default Bio
