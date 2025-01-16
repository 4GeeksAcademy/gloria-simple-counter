import React from "react";
import PropTypes from "prop-types";
import { FaRegClock } from "react-icons/fa";

function SimpleCounter({ digitOne, digitTwo, digitThree, digitFour }) {
    return (
        <div className="bigCounter">
            <div className="calendar">
                <i class="fa-solid fa-clock"></i>
            </div>
            <div className="four">{digitFour % 10}</div>
            <div className="three">{digitThree % 10}</div>
            <div className="two">{digitTwo % 10}</div>
            <div className="one">{digitOne % 10}</div>
        </div>


    );
}

SimpleCounter.propTypes = {
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number,
};

export default SimpleCounter