import "isomorphic-fetch";

// Define actions
const ESTABLISHMENTS_LOADING_STATUS_TRUE = "ESTABLISHMENTS_LOADING_STATUS_TRUE";
const GET_ESTABLISHMENTS_SUCCESS = "GET_ESTABLISHMENTS_SUCCESS";
const GET_ESTABLISHMENTS_ERROR = "GET_ESTABLISHMENTS_ERROR";

// Define action creators
export const establishmentsLoadingStatusTrue = () => ({
  type: ESTABLISHMENTS_LOADING_STATUS_TRUE,
});

export const getEstablishmentsSuccess = (establishments: Establishment[]) => ({
  type: GET_ESTABLISHMENTS_SUCCESS,
  establishments,
});

export const getEstablishmentsError = (error: string) => ({
  type: GET_ESTABLISHMENTS_ERROR,
  error,
});

// GET request to API for all establishments
export const getEstablishments = () => (dispatch: any) => {
  dispatch(establishmentsLoadingStatusTrue());
  let establishmentsEndpoint;

  establishmentsEndpoint = "/api/establishments";

  return fetch(establishmentsEndpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
    },
  })
    .then((response) => {
      if (response.status === 200) {
        console.log("Success after fetch");
        return response.json().then((successResponse) => {
          dispatch(getEstablishmentsSuccess(successResponse));
        });
      }
      return response.json().then((errorResponse) => {
        console.log("Error after fetch");
        dispatch(getEstablishmentsError(errorResponse));
      });
    })
    .catch(
      (error) => console.log(error) // eslint-disable-line
    );
};
