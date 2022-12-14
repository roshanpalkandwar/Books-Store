
import userDetails from "../models/userDetails.model";

export const addUserDetails=async(body)=>{
    const findUserdetails = await userDetails.findOne({ userID: body.EmailId  });
    let UserInfo = {
        'name': body.name,
        'city': body.city,
        'landmark': body.landmark,
        'state': body.state,
        'fullAddress': body.fullAddress,
        'phoneNumber': body.phoneNumber,
        'pincode': body.pincode,
        'locality': body.locality,
        'addressType': body.addressType,
    }
   
    if (findUserdetails== null) {
        const createUser = await userDetails.create({ userID: body.EmailId , customer: [UserInfo] });
        return createUser;
    }
    else {let addUser = await userDetails.findOneAndUpdate({ _id: findUserdetails._id },  { $push: { customer: UserInfo } }, { new: true })
    return addUser;}
    
    
}