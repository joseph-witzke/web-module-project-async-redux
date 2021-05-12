
export const GET_START = "GET_START";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL = "GET_FAIL"; 

export const getStart = () => {
    return({type: GET_START });
}

export const getSuccess = (person) => {
    return({type: GET_SUCCESS, payload:person});
}

export const getFail = (error) => {
    return ({type: GET_FAIL, payload:error});
}