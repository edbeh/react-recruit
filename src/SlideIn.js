import React from 'react';
import { ButtonStatus } from './Card.js'
import Tooltip from '@material-ui/core/ToolTip';

const SlideIn = ({ card }) => {
    return (
      <div className="modal fade" key={card.trialID} id={`slide-in-${card.trialID}`} tabindex="-1" role="dialog" aria-labelledby={`slide-in-${card.trialID}`} aria-hidden="true">
        <div className="modal-dialog modal-dialog-slideout modal-lg" role="document">
            <div className="modal-content">
                <div className="modal-header">
                    <div>
                        <h5 className="modal-title" id="exampleModalLabel">Study ID: {card.trialID}</h5>
                        <ButtonStatus status={card.recruiting}/>
                    </div>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div className="modal-body">
                    <div>
                        <h6 className="font-weight-bold">Protocol Title:</h6>
                        <span>{card.protocolTitle}</span>
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Primary Purpose:</h6>
                        <span>{card.primaryPurpose}</span>
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Therapeutic Area:</h6>
                        <span>{card.therapeuticArea}</span>
                    </div>
                    <br/>
                    <div>
                    <h6 className="font-weight-bold">{card.conditions.length > 1 ? 'Target Conditions' : 'Target Condition'} <ButtonInfo content="The disease, disorder, syndrome, illness, or injury that is being studied." /> :</h6>
                        {card.conditions.map(condition => <p>{condition}</p>)}
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Estimated Enrolment <ButtonInfo content="Number of participants that the researchers need for this study."/> :</h6>
                        <span>{card.estimatedEnrolment} participants</span>
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Locations Available <ButtonInfo content={'Locations that are currently conducting this study. You may specify your preferred location during your application.'}/> :</h6>
                        {card.locations.map(location => <p>{location}</p>)}
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Study Category:</h6>
                        <span>{card.studyType} trial</span>
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Study Type <ButtonInfo content="A process or action that is the focus of a clinical study. Interventions include drugs, medical devices, procedures, vaccines, and other products that are either investigational or already available. Interventions can also include noninvasive approaches, such as education or modifying diet and exercise."/> :</h6>
                        <span>{card.studyMethod} trial</span>
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Study Phase:</h6>
                        <span>Phase {card.studyPhase} trial</span>
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Accepts Healthy Volunteer:</h6>
                        <span>{card.healthyVolunteer ? 'Yes' : 'No'}</span>
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Reimbursement Provided:</h6>
                        <span>{card.reimbursement ? 'Yes' : 'No'}</span>
                    </div>
                    <br/>

                    <div>
                        <h6 className="font-weight-bold">Inclusion criteria:</h6>
                        <table className="table table-borderless table-sm">
                            {card.inclusionCriteria.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}.</td>
                                        <td>{item[0] !== item[0].toUpperCase() ? item.replace(item[0], item[0].toUpperCase()) : item}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                    <br/>
                    <div>
                        <h6 className="font-weight-bold">Exclusion criteria:</h6>
                        <table className="table table-borderless table-sm">
                            {card.exclusionCriteria.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}.</td>
                                        <td>{item[0] !== item[0].toUpperCase() ? item.replace(item[0], item[0].toUpperCase()) : item}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </div>
                    <br/>
                    
                    <form className="border p-3">
                        <div className="form-check" data-toggle="collapse" data-target={`#form-${card.trialID}`}>
                            <label className="form-check-label">
                                <input type="checkbox" class="form-check-input" value="" />I have read the information above and acknowledge that I fulfill all study criteria to the best of my knowledge. I agree to be contacted by the study team to participate in this trial.
                            </label>
                        </div>
                        <div id={`form-${card.trialID}`} className="collapse text-center">
                            <input required type="text" className="form-control form-control mt-3" placeholder="Name" name="name"/>
                            <input required type="email" className="form-control form-control mt-3" placeholder="Email" name="email"/>
                            <input required type="tel" className="form-control form-control mt-3" placeholder="Contact No." name="contactNo"/>
                            <textarea className="form-control" placeholder="Remarks" rows="3"></textarea>
                            <button type="button" className="btn btn-primary">Send to Study Team</button>
                        </div>
                    </form>

                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    {/* <button type="button" className="btn btn-primary">Apply</button> */}
                </div>
            </div>
        </div>
        </div>
    )
}

const ButtonInfo = ({ content }) => {
    return (
        <Tooltip title={content} arrow>
            <i className="fa fa-info-circle"></i>
        </Tooltip>
    )
}

export default SlideIn;