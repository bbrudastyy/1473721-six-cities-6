import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../utils/utils";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadHotels(data)))
);

// export const fetchNearHotelsList = () => (dispatch, _getState, api) => (
//   api.get(`/nearHotels`)
//     .then(({data}) => dispatch(ActionCreator.loadNearHotels(data)))
// );

// export const fetchCommentsList = () => (dispatch, _getState, api) => (
//   api.get(`/comments`)
//     .then(({data}) => dispatch(ActionCreator.loadComments(data)))
// );

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => { })
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const adaptToClient = (hotel) => {
  const adaptedHotel = Object.assign(
      {},
      hotel,
      {
        previewImage: hotel.preview_image,
      }
  );

  delete adaptedHotel.preview_image;

  return adaptedHotel;
};
