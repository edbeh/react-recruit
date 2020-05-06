import React from 'react';
import PropTypes from 'prop-types';

const Jumbotron = ({ trialNumber }) => {
    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <div className="breadcrumbs">{`Displaying ${trialNumber} ${trialNumber > 1 ? 'trials' : 'trial'}`}</div>
                <h1 className="title">View All Trials</h1>
            </div>
      </div>
    )
}
Jumbotron.propTypes = {
    trialNumber: PropTypes.number.isRequired
}

export default Jumbotron;