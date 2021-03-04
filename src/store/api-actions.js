import {ActionCreator} from "./action";
import {AuthorizationStatus} from "../utils/utils";

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(ActionCreator.loadHotels(data)))
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadHotel(data)))
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(ActionCreator.loadComments(data)))
);

export const fetchNear = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(ActionCreator.loadNearHotels(data)))
);

export const fetchHotelsFavotiteList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(ActionCreator.loadFavoriteList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(ActionCreator.setLogin(data.email));
    })
    .catch(() => { })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const commentPost = (id, data) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, data)
    .then((res) => dispatch(ActionCreator.loadComments(res)))
);

export const favoritePost = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)))
);

export const adaptToClientHotel = (hotel) => {
  const adaptedHotel = Object.assign(
      {},
      hotel,
      {
        previewImage: hotel.preview_image,
        isPremium: hotel.is_premium,
        isFavorite: hotel.is_favorite,
        host: {
          id: hotel.host.id,
          name: hotel.host.name,
          isPro: hotel.host.is_pro,
          avatarUrl: hotel.host.avatar_url
        }
      }
  );

  delete adaptedHotel.preview_image;
  delete adaptedHotel.is_premium;
  delete adaptedHotel.is_favorite;
  delete adaptedHotel.host.is_pro;
  delete adaptedHotel.host.avatar_url;

  return adaptedHotel;
};

export const adaptToClientComment = (comment) => {
  const adaptedComment = Object.assign(
      {},
      comment,
      {
        text: comment.comment,
        user: {
          avatarUrl: comment.user.avatar_url,
          id: comment.user.id,
          isPro: comment.user.is_pro,
          name: comment.user.name
        }
      }
  );

  delete adaptedComment.user.avatar_url;
  delete adaptedComment.user.is_pro;
  delete adaptedComment.comment;

  return adaptedComment;
};

export const adaptToServerHotel = (hotel) => {
  const adaptedHotel = Object.assign(
      {},
      hotel,
      {
        "preview_image": hotel.previewImage,
        "is_premium": hotel.isPremium,
        "is_favorite": hotel.isFavorite,
        "host": {
          "id": hotel.host.id,
          "name": hotel.host.name,
          "is_pro": hotel.host.isPro,
          "avatar_url": hotel.host.avatarUrl
        }
      }
  );

  delete adaptedHotel.previewImage;
  delete adaptedHotel.isPremium;
  delete adaptedHotel.isFavorite;
  delete adaptedHotel.host.isPro;
  delete adaptedHotel.host.avatarUrl;

  return adaptedHotel;
};
