import React from 'react'
import PropTypes from 'prop-types'

const CardComponent = ({ title, amount }) => {
    return (
        <div className="card custom-card-1">
            <div className="card-body mt-4">
                <h3 className="card-title">{title}</h3>
                <p className="card-text display-4 mt-4">{amount}</p>
            </div>
        </div>
    )
}

CardComponent.propTypes = {
    title: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default CardComponent