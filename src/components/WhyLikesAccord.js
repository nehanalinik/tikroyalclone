import React from "react";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
const WhyLikesAccord = ({ ques, ans }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <section className="why-likes-accord">
            <header>
                <span onClick={() => setShowInfo(!showInfo)}>
                    {showInfo ? <FaMinus /> : <FaPlus />}
                </span>
                <h4>{ques}</h4>
            </header>
            {showInfo && <p>{ans}</p>}
        </section>
    );
};

export default WhyLikesAccord;
