import {loadComments, loadFavoriteList, loadHotel, loadHotels, loadNearHotels, requireAuthorization, setFavoriteHotel, setLogin} from "./action";
import {AuthorizationStatus} from "../utils/utils";

const BOOL_TRANSLATE_NUM = {
  false: 1,
  true: 0
};

export const fetchHotelsList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then(({data}) => dispatch(loadHotels(data)))
);

export const fetchHotel = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}`)
    .then(({data}) => dispatch(loadHotel(data)))
    .catch(() => { })
);

export const fetchComments = (id) => (dispatch, _getState, api) => (
  api.get(`/comments/${id}`)
    .then(({data}) => dispatch(loadComments(data)))
    .catch(() => { })
);

export const fetchNear = (id) => (dispatch, _getState, api) => (
  api.get(`/hotels/${id}/nearby`)
    .then(({data}) => dispatch(loadNearHotels(data)))
    .catch(() => { })
);

export const fetchHotelsFavotiteList = () => (dispatch, _getState, api) => (
  api.get(`/favorite`)
    .then(({data}) => dispatch(loadFavoriteList(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(({data}) => {
      dispatch(requireAuthorization(AuthorizationStatus.AUTH));
      dispatch(setLogin(data.email));
    })
    .catch(() => { })
);

export const logout = () => (dispatch, _getState, api) => (
  api.get(`/logout`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.NO_AUTH)))
);

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);

export const commentPost = (id, {rating, comment}) => (dispatch, _getState, api) => (
  api.post(`/comments/${id}`, {rating, comment})
    .then(({data}) => dispatch(loadComments(data)))
);

export const favoritePost = (id, isFavorite, offersList) => (dispatch, _getState, api) => (
  api.post(`/favorite/${id}/${BOOL_TRANSLATE_NUM[isFavorite]}`)
    .then(({data}) => dispatch(setFavoriteHotel(adaptToClientHotel(data), offersList)))
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
