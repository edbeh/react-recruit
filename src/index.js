import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const data = [
  {
    posterID: "A0001",
    trialID: "T0001",
    recruiting: true,
    estimatedEnrolment: 50,
    protocolTitle:
      "Complementary Role of Herbal Traditional Chinese Medicine in Management of Mild to Moderate Childhood Asthma (TraCMAst)",
    studyType: "Drug",
    studyMethod: "Interventional",
    studyPhase: "I",
    therapeuticArea: "Respiratory",
    primaryPurpose: "Treatment",
    conditions: ["Asthma", "Bronchoectasis"],
    studyDuration: "6 months",
    locations: ["Singapore General Hospital", "Changi General Hospital"],
    targetAge: { min: 21, max: 99 },
    targetGender: ["male", "female"],
    healthyVolunteer: false,
    reimbursement: true,
    inclusionCriteria: [
      "Written informed consent.",
      "If female patient with child bearing potential, patient may not be pregnant at the study entry and must utilize reliable birth control for the duration of her participation into the study.",
      "Critical Limb Ischaemia, Rutherford category 4 (ischaemic rest pain), 5 (minor tissue loss) or 6 (major tissue loss).",
      "Stenosis (>50% luminal loss) or occlusion of infra-genicular arteries (defined as: distal to the infra-popliteal artery), including the tibiofibular trunk, the anterior tibial artery, the posterior tibial artery and the peroneal artery.",
    ],
    exclusionCriteria: [
      "Acute limb ischaemia.",
      "Patients without (expected) distal runoff to the index site.",
      "Life expectancy of less than 6 months.",
    ],
  },
  {
    posterID: "A0001",
    trialID: "T0002",
    recruiting: false,
    estimatedEnrolment: 20,
    protocolTitle:
      "A Phase 1, Randomized, Placebo-Controlled Study to Evaluate the Safety, Tolerability, Pharmacokinetics, and Antiviral Activity of VIR-3434",
    studyType: "Drug",
    studyMethod: "Observational",
    studyPhase: "II",
    primaryPurpose: "Treatment",
    therapeuticArea: "Infectious Diseases",
    conditions: ["Viral Infection"],
    studyDuration: "3 months",
    locations: ["Singapore General Hospital"],
    targetAge: { min: 16, max: 24 },
    targetGender: ["male", "female"],
    healthyVolunteer: false,
    reimbursement: false,
    inclusionCriteria: [
      "Written informed consent.",
      "If female patient with child bearing potential, patient may not be pregnant at the study entry and must utilize reliable birth control for the duration of her participation into the study.",
      "Critical Limb Ischaemia, Rutherford category 4 (ischaemic rest pain), 5 (minor tissue loss) or 6 (major tissue loss).",
      "Stenosis (>50% luminal loss) or occlusion of infra-genicular arteries (defined as: distal to the infra-popliteal artery), including the tibiofibular trunk, the anterior tibial artery, the posterior tibial artery and the peroneal artery.",
    ],
    exclusionCriteria: [
      "Acute limb ischaemia.",
      "Patients without (expected) distal runoff to the index site.",
      "Life expectancy of less than 6 months.",
    ],
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
