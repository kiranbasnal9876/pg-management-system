import { body } from 'express-validator';


export const add_pg_owner_validation =  [
    body("name").notEmpty().withMessage('Name is required').matches(/^[a-zA-Z ]+$/).withMessage('Name only include characters').isLength({ min: 3, max: 30 }).withMessage("Owner name must be between 3 and 30"),
    body("email").notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
    body("password").notEmpty().withMessage('Password is required').isStrongPassword().withMessage('Password must be 8-15 chars with A-Z, a-z, 0-9 & special char'),
    body("address").notEmpty().withMessage('Address is required').isLength({min:1 , max:100}).withMessage('Address must be between 1 and 100'),
    body("phone").notEmpty().withMessage('Phone number is required').matches(/^[0-9]{10}$/).withMessage('Phone must be 10 digits only'),
    body("state").notEmpty().withMessage('State is required').matches(/^[0-9]{1,2}$/).withMessage('Invalid state'),
    body("district").notEmpty().withMessage('District is required').matches(/^[0-9]{1,4}$/).withMessage('Invalid district'),
    body("pincode").notEmpty().withMessage('Pincode is required').isPostalCode('IN').withMessage('Pincode is invalid'),
    body("status").notEmpty().withMessage('Status is required').matches(/^(0|1)$/).withMessage("Status is invalid"),
    body("profile").notEmpty().withMessage('Profile is required')
];

export const update_pg_owner_validation =  [
    body("name").notEmpty().withMessage('Name is required').matches(/^[a-zA-Z ]+$/).withMessage('Name only include characters').isLength({ min: 3, max: 30 }).withMessage("Owner name must be between 3 and 30"),
    body("email").notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email'),
    body("password").optional({checkFalsy:true}).isStrongPassword().withMessage('Password must be 8-15 chars with A-Z, a-z, 0-9 & special char'),
    body("address").notEmpty().withMessage('Address is required').isLength({min:1 , max:100}).withMessage('Address must be between 1 and 100'),
    body("phone").notEmpty().withMessage('Phone number is required').matches(/^[0-9]{10}$/).withMessage('Phone must be 10 digits only'),
    body("state").notEmpty().withMessage('State is required').matches(/^[0-9]{1,2}$/).withMessage('Invalid state'),
    body("district").notEmpty().withMessage('District is required').matches(/^[0-9]{1,4}$/).withMessage('Invalid district'),
    body("pincode").notEmpty().withMessage('Pincode is required').isPostalCode('IN').withMessage('Pincode is invalid'),
    body("id").notEmpty().withMessage('id is required'),
    body("status").notEmpty().withMessage('Status is required').matches(/^(0|1)$/).withMessage("Status is invalid")
];

export const delete_validation = [
    body("id").notEmpty().withMessage('Id is required to delete').isNumeric().withMessage('Invalid id'),
    body("action").notEmpty().withMessage('Action is required')
]

export const get_list_validation = [
    body("id").notEmpty().withMessage('Id is required for edit').isNumeric().withMessage('Invalid id'),
    body("action").notEmpty().withMessage('Action is required')
]

export const add_room_validation = [
    body("property_id").notEmpty().withMessage('Property id is required'),
    body("room_number").notEmpty().withMessage('Room number is required').matches(/^[0-9]+$/).withMessage('Room number is invalid'),
    body("type").notEmpty().withMessage('Room type is required').matches(/^[0-9]+$/).withMessage('Room type is invalid'),
    body("status").notEmpty().withMessage('Room status is required').matches(/^(0|1)$/).withMessage('Room status is invalid')
]

export const update_room_validation = [
    body("id").notEmpty().withMessage("Room id is required"),
    body("property_id").notEmpty().withMessage('Property id is required'),
    body("room_number").notEmpty().withMessage('Room number is required').matches(/^[0-9]+$/).withMessage('Room number is invalid'),
    body("type").notEmpty().withMessage('Room type is required').matches(/^[0-9]+$/).withMessage('Room type is invalid'),
    body("status").notEmpty().withMessage('Room status is required').matches(/^(0|1)$/).withMessage('Room status is invalid')
]

export const add_property_validation = [
    body("name").notEmpty().withMessage('Property name is required').matches(/^[A-Za-z ]+$/).withMessage('Property name only includes characters').isLength({ min: 3, max: 40 }).withMessage('Property name must be between 3 and 40 characters long'),
    body("location").notEmpty().withMessage('Location is required').isLength({min:1 , max:100}).withMessage('Location must be between 1 and 100'),
    body("state").notEmpty().withMessage('State is required').matches(/^[0-9]+$/).withMessage('Invalid state'),
    body("district").notEmpty().withMessage('District is required').matches(/^[0-9]+$/).withMessage('Invalid distrcit'),
    body("pincode").notEmpty().withMessage('Pincode is required').isPostalCode('IN').withMessage('Pincode is invalid'),
    body("total_rooms").notEmpty().withMessage('Total rooms is required').matches(/^[0-9]+$/).withMessage("Only number is allowed in total rooms"),
    body("status").matches(/^(0|1)$/).withMessage('Property status is invalid')
]



export const update_property_validation = [
    body("id").notEmpty().withMessage("Property id is required"),
    body("name").notEmpty().withMessage('Property name is required').matches(/^[A-Za-z ]+$/).withMessage('Property name only includes characters').isLength({ min: 3, max: 40 }).withMessage('Property name must be between 3 and 40 characters long'),
    body("location").notEmpty().withMessage('Location is required').isLength({min:1 , max:100}).withMessage('Location must be between 1 and 100'),
    body("state").notEmpty().withMessage('State is required').matches(/^[0-9]{1,2}$/).withMessage('Invalid state'),
    body("district").notEmpty().withMessage('District is required').matches(/^[0-9]+$/).withMessage('Invalid district'),
    body("pincode").notEmpty().withMessage('Pincode is required').isPostalCode('IN').withMessage('Pincode is invalid'),
    body("total_rooms").notEmpty().withMessage('Total rooms is required').matches(/^[0-9]+$/).withMessage("Only number is allowed in total rooms"),
    body("status").matches(/^(0|1)$/).withMessage('Property status is invalid')
]

export const login_validation = [

    body("email").notEmpty().withMessage('Email is required'),
    body("password").notEmpty().withMessage('Password is required')

]

export const client_table_validation = [
    body('action').notEmpty().withMessage("Action is required").matches(/(pg_owner)/).withMessage("Action is invalid")
]
export const property_table_validation = [
    body('action').notEmpty().withMessage("Action is required").matches(/(property)/).withMessage("Action is invalid")
]
export const room_table_validation = [
    body('action').notEmpty().withMessage("Action is required").matches(/(rooms)/).withMessage("Action is invalid")
]
export const tenant_table_validation = [
    body('action').notEmpty().withMessage("Action is required").matches(/(tenants)/).withMessage("Action is invalid")
]
export const complaint_tenant_table_validation = [
    body('action').notEmpty().withMessage("Action is required").matches(/(tenant_complaint)/).withMessage("Action is invalid")
]


export const add_tenant_validation = [
    body('pg_id').notEmpty().withMessage('Pg name is required'),
    body('room_id').notEmpty().withMessage('Room number is required'),
    body('name').notEmpty().withMessage('Tenant name is required').matches(/^[A-Za-z ]+$/).withMessage('Tenant name only includes characters').isLength({ min: 3, max: 30 }).withMessage('Tenant name must be between 3 and 40 characters long'),
    body('phone').notEmpty().withMessage('Phone number is required').matches(/^[0-9]{10}$/).withMessage('Phone must be 10 digits only'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is invalid').isLength({max:50 , min:3}).withMessage('Email must be of min 3 and max 50 length'),
    // body('aadhar').notEmpty().withMessage('Aadhar is required').matches(/^data:(.+);base64,(.+)$/).withMessage('Please send a valid format of aadhar card (base64)'),
    // body('pan').notEmpty().withMessage('Pan is required').matches(/^data:(.+);base64,(.+)$/).withMessage('Please send a valid format of pan card (base64)'),
    body('parent_contact').notEmpty().withMessage('Parent number is required').matches(/^[0-9]{10}$/).withMessage('Parent number must be 10 digits only'),
    body('emergency_contact').notEmpty().withMessage('Emergency number is required').matches(/^[0-9]{10}$/).withMessage('Emergency number must be 10 digits only'),
    body("password").notEmpty().withMessage('Password is required').isStrongPassword().withMessage('Password must be 8-15 chars with A-Z, a-z, 0-9 & special char'),
    body('check_in_date').notEmpty().withMessage('Check in date is required').isDate({
        format: 'YYYY-MM-DD',
        delimiters: ['-'],
        strictMode: true,
      }).withMessage('Check in date Is invalid'),
    // body('profile_photo').notEmpty().withMessage('Profile photo is required').matches(/^data:(.+);base64,(.+)$/).withMessage('Profile photo format is invalid'),
    body('rent_status').notEmpty().withMessage('Rent status is required').matches(/^(paid|pending)$/).withMessage('Rent status is invalid'),
    body('gender').notEmpty().withMessage('Gender is required').matches(/^(male|female|other)$/).withMessage('Gender is invalid'),
    body('dob').notEmpty().withMessage('DOB is required').isDate({
        format: 'YYYY-MM-DD',
        delimiters: ['-'],
        strictMode: true,
      }).withMessage('DOB is in invalid format'),
    body('occupation').notEmpty().withMessage('Occupation is required').isLength({min:2 , max:70}).withMessage('Occupation must be min 2 and 70 characters long'),
    body('address').notEmpty().withMessage('Address is required').isLength({max:100}).withMessage("Address max length is 100 only"),
    body("state").notEmpty().withMessage('State is required').matches(/^[0-9]+$/).withMessage('Invalid state'),
    body("district").notEmpty().withMessage('District is required').matches(/^[0-9]+$/).withMessage('Invalid distrcit'),
    body("status").notEmpty().withMessage('Tenant status is required').matches(/^(0|1)$/).withMessage('Tenant status is invalid'),
    body("pincode").notEmpty().withMessage('Pincode is required').isPostalCode('IN').withMessage('Pincode is invalid'),
]

export const update_tenant = [
    body('pg_id').notEmpty().withMessage('Pg name is required'),
    body('room_id').notEmpty().withMessage('Room number is required'),
    body('id').notEmpty().withMessage('Tenant id is required '),
    body('name').notEmpty().withMessage('Tenant name is required').matches(/^[A-Za-z ]+$/).withMessage('Tenant name only includes characters').isLength({ min: 3, max: 30 }).withMessage('Tenant name must be between 3 and 40 characters long'),
    body('phone').notEmpty().withMessage('Phone number is required').matches(/^[0-9]{10}$/).withMessage('Phone must be 10 digits only'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email is invalid'),
    body('aadhar').notEmpty().withMessage('Aadhar is required').matches(/^data:(.+);base64,(.+)$/).withMessage('Please send a valid format of aadhar card (base64)'),
    body('pan').notEmpty().withMessage('Pan is required').matches(/^data:(.+);base64,(.+)$/).withMessage('Please send a valid format of pan card (base64)'),
    body('parent_contact').notEmpty().withMessage('Parent number is required').matches(/^[0-9]{10}$/).withMessage('Parent number must be 10 digits only'),
    body('emergency_contact').notEmpty().withMessage('Emergency number is required').matches(/^[0-9]{10}$/).withMessage('Emergency number must be 10 digits only'),
    body("password").isStrongPassword().withMessage('Password must be 8-15 chars with A-Z, a-z, 0-9 & special char'),
    body('check_in_date').notEmpty().withMessage('Check in date is required').isDate({
        format: 'YYYY-MM-DD',
        delimiters: ['-'],
        strictMode: true,
      }).withMessage('Check in date Is invalid'),
    body('profile_photo').notEmpty().withMessage('Profile photo is required').matches(/^data:(.+);base64,(.+)$/).withMessage('Profile photo format is invalid'),
    body('rent_status').notEmpty().withMessage('Rent status is required').matches(/^(paid|pending)$/).withMessage('Rent status is invalid'),
    body('gender').notEmpty().withMessage('Gender is required').matches(/^(male|female|other)$/).withMessage('Gender is invalid'),
    body('dob').notEmpty().withMessage('DOB is required').isDate({
        format: 'YYYY-MM-DD',
        delimiters: ['-'],
        strictMode: true,
      }).withMessage('DOB is in invalid format'),
    body('occupation').notEmpty().withMessage('Occupation is required').isLength({min:2 , max:50}).withMessage('Occupation must be min 2 and 50 characters long'),
    body('address').notEmpty().withMessage('Address is required').isLength({max:100}).withMessage("Address max length is 100 only"),
    body("state").notEmpty().withMessage('State is required').matches(/^[0-9]+$/).withMessage('Invalid state'),
    body("district").notEmpty().withMessage('District is required').matches(/^[0-9]+$/).withMessage('Invalid distrcit'),
]


export const add_complaint_validation =[
    body("description").notEmpty().withMessage("Description is required").isLength({min:3}).withMessage('Minimum 3 characters must be required').isLength({max:300}).withMessage('Maximum 300 characters is allowed'),
    body('image').optional({checkFalsy:true}),
    body('category').notEmpty().withMessage('Complaint category is required').matches(/^(Food|Water|Wi-Fi|Electricity|Other')$/).withMessage("Invalid Category"),
    body('status').optional({checkFalsy:true}).matches(/^(pending|in-progress|resolved)$/).withMessage("Invalid status")
]

export const update_complaint_validation =[
    body('id').notEmpty().withMessage("Id is required"),
    body("description").notEmpty().withMessage("Description is required").isLength({min:3}).withMessage('Minimum 3 characters must be required').isLength({max:300}).withMessage('Maximum 300 characters is allowed'),
    body('image').optional({checkFalsy:true}),
    body('category').notEmpty().withMessage('Complaint category is required').matches(/^(Food|Water|Wi-Fi|Electricity|Other')$/).withMessage("Invalid Category"),
    body('status').optional({checkFalsy:true}).matches(/^(pending|in-progress|resolved)$/).withMessage("Invalid status")
]