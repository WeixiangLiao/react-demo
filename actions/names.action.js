import {appConstants} from "../constants/constant";

export const addName = (newName) => {

    //actuib object
    return {
        type: appConstants.ADD_NAME,
        payload: newName
    };
}
