import React from 'react';
import PropTypes from 'prop-types';
import SlideIn from './SlideIn.js'
import './Card.css';

const Card = ({ card, index }) => {
    return (
        <tr key={card.trialID}>
            <td className="table-serial">
                <span>{index + 1}.</span>
            </td>
            <td className="table-content">
            <span><a data-toggle="modal" href={`#slide-in-${card.trialID}`}>{card.protocolTitle}</a></span>
            <br/>
            <div className="table-content-info">
                <table className="table table-borderless table-sm">
                    <tbody>
                        <tr>
                            <td>Type of Trial:</td>
                            <td>{card.studyType}, {card.studyMethod}</td>
                        </tr>
                        <tr>
                            <td>Healthy Volunteer:</td>
                            <td>{card.healthyVolunteer ? 'Yes' : 'No'}</td>
                        </tr>
                        <tr>
                            <td>Therapeutic Area:</td>
                            <td>{card.therapeuticArea}</td>
                        </tr>
                        <tr>
                            <td>Participation Duration:</td>
                            <td>{card.studyDuration}</td>
                        </tr>
                        <tr>
                            <td>{card.locations.length > 1 ? 'Locations:' : 'Location:'}</td>
                            <td>{card.locations.map(location => <p>{location}</p>)}</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>
            {/* bottom row */}
            <div className="table-content-more">
                <span className="button-favorite">
                    <i className="fa fa-heart"></i> Save to Favorite
                </span>
                <ButtonStatus status={card.recruiting}/>
            </div>
            </td>

            <SlideIn card={card}/>
        </tr>
    )
}
Card.propTypes = {
    card: PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
}

const ButtonStatus = ({ status }) => {
    return <span className={`status-badge ${status ? 'status-active' : 'status-inactive'}`}>{status ? 'Recruiting' : 'Not Recruiting'}</span>
}

export { Card, ButtonStatus };