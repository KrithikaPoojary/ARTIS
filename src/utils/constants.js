// src/utils/constants.js
export const incidentCategories = [
  { value: 'property-damage', label: 'Property Damage' },
  { value: 'environmental-spill', label: 'Environmental Spill' },
  { value: 'environmental-complaint', label: 'Environmental Complaint' },
  { value: 'environmental-damage', label: 'Environmental Damage' },
  { value: 'near-miss', label: 'Near Miss' },
  { value: 'first-aid', label: 'First Aid Injury' },
  { value: 'medical-treatment', label: 'Medical Treatment Injury' },
  { value: 'lost-time', label: 'Lost Time Incident' },
  { value: 'other', label: 'Other' }
];

export const personTypes = [
  { value: 'artis-employee', label: 'ARTIS Employee' },
  { value: 'contractor', label: 'Contractor Employee' },
  { value: 'client', label: 'Client Employee' },
  { value: 'non-employee', label: 'Non Employee' },
  { value: 'other', label: 'Other' }
];

export const severityLevels = [
  { value: 'fatal', label: 'Fatal' },
  { value: 'serious', label: 'Serious Harm' },
  { value: 'minor', label: 'Minor Harm' },
  { value: 'no-harm', label: 'No Harm/ Near Miss' },
  { value: 'other', label: 'Other' }
];

export const natureInjuries = [
  { value: 'fracture', label: 'Fracture' },
  { value: 'dislocation', label: 'Dislocation' },
  { value: 'sprain', label: 'Sprain/ Strain' },
  { value: 'internal', label: 'Internal Injury' },
  { value: 'amputation', label: 'Amputation' },
  { value: 'open-wound', label: 'Open Wound' },
  { value: 'superficial', label: 'Superficial Injury' },
  { value: 'contusion', label: 'Contusion' },
  { value: 'foreign-body', label: 'Foreign Body' },
  { value: 'burns', label: 'Burns' },
  { value: 'toxic', label: 'Toxic Effects' },
  { value: 'environmental', label: 'Environmental Effect' },
  { value: 'multiple', label: 'Multiple Injuries' },
  { value: 'other', label: 'Other' }
];

export const bodyLocations = [
  { value: 'eye', label: 'Eye' },
  { value: 'ear', label: 'Ear' },
  { value: 'face', label: 'Face' },
  { value: 'head', label: 'Head' },
  { value: 'neck', label: 'Neck' },
  { value: 'back', label: 'Back' },
  { value: 'truck', label: 'Truck' },
  { value: 'shoulder', label: 'Shoulder/ Arms' },
  { value: 'hand', label: 'Hand/ Fingers' },
  { value: 'hips', label: 'Hips/ Leg' },
  { value: 'feet', label: 'Feet/ Toes' },
  { value: 'internal-organs', label: 'Internal Organs' },
  { value: 'multiple', label: 'Multiple' },
  { value: 'other', label: 'Other' }
];

export const mechanisms = [
  { value: 'fall-height', label: 'Fall From Height' },
  { value: 'fall-same', label: 'Fall On the Same Level' },
  { value: 'strike-against', label: 'Strike Against' },
  { value: 'struck-by', label: 'Struck by' },
  { value: 'noise', label: 'Exposure to Noise' },
  { value: 'pressure', label: 'Exposure Of Pressure' },
  { value: 'repetitive', label: 'Repetitive Movement' },
  { value: 'muscular', label: 'Other Muscular Stress' },
  { value: 'electricity', label: 'Contact With Electricity' },
  { value: 'temperature', label: 'Exposure To Hot & Cold' },
  { value: 'substances', label: 'Exposure To Substance' },
  { value: 'other', label: 'Other' }
];

export const agencies = [
  { value: 'machinery', label: 'Machinery/ Plant' },
  { value: 'mobile-plant', label: 'Mobile Plant' },
  { value: 'road-transport', label: 'Road Transport' },
  { value: 'other-transport', label: 'Other Transport' },
  { value: 'power-equipment', label: 'Power Equipment Tools' },
  { value: 'non-powered', label: 'Non-Powered Equipment\'s' },
  { value: 'chemical', label: 'Chemicals' },
  { value: 'other-materials', label: 'Other Materials' },
  { value: 'outdoor', label: 'Outdoor Environment' },
  { value: 'vessel', label: 'Internal Vessel Environment' },
  { value: 'ppe', label: 'PPE' },
  { value: 'unspecified', label: 'Unspecified Agencies' },
  { value: 'other', label: 'Other' }
];

export const positions = [
  { value: 'mechanical-technician', label: 'Mechanical Technician' },
  { value: 'ba-technician', label: 'BA Technician' },
  { value: 'hse-officer', label: 'HSE Officer' },
  { value: 'project-engineer', label: 'Project Engineer' },
  { value: 'project-manager', label: 'Project Manager' },
  { value: 'ba-supervisor', label: 'BA Supervisor' },
  { value: 'mechanical-supervisor', label: 'Mechanical Supervisor' },
  { value: 'other', label: 'Other' }
];

export const departments = [
  { value: 'mechanical', label: 'Mechanical' },
  { value: 'ba', label: 'BA' },
  { value: 'hse', label: 'HSE' },
  { value: 'hr', label: 'HR' },
  { value: 'staff', label: 'Staff' },
  { value: 'other', label: 'Other' }
];

// Field labels for display
export const fieldLabels = {
  location: 'Location',
  incident_category: 'Incident Category',
  reporting_date: 'Reporting Date',
  reporting_time: 'Reporting Time',
  injured_name: 'Injured Person Name',
  nationality: 'Nationality',
  address: 'Address',
  person_type: 'Person Working Under',
  injury_type: 'Type of Injury',
  body_part: 'Part of Body',
  injury_cause: 'Cause of Injury',
  occurred_date: 'Occurred Date',
  occurred_time: 'Occurred Time',
  severity: 'Severity',
  nature_injury: 'Nature of Injury',
  body_location: 'Body Location',
  mechanism: 'Mechanism of Injury',
  agency: 'Agency of Injury',
  first_aid: 'First Aid Given',
  reported_to: 'Reported To',
  witnesses: 'Witnesses Present',
  instructions: 'Instructions Given',
  contributing_factors: 'Contributing Factors',
  root_cause: 'Root Cause',
  immediate_action: 'Immediate Action Plan',
  follow_up_action: 'Follow-up Action Plan',
  responsibility: 'Responsibility Of',
  remedial_action: 'Remedial Action Required',
  remedial_implemented: 'Remedial Action Implemented',
  file_approve: 'File and Approve',
  reasons_not_implemented: 'Reasons Not Implemented',
  control_person_name: 'Control Person Name',
  control_person_position: 'Control Person Position',
  control_person_department: 'Control Person Department',
  control_person_date: 'Control Person Date',
  form_complete: 'Form Complete',
  form_insufficient: 'Form Insufficient',
  form_closed: 'Form Closed',
  further_actions: 'Further Actions Required',
  approved: 'Approved',
  file_reference: 'File for Reference'
};