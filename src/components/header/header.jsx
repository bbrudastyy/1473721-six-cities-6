import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../utils/utils';
import PropTypes from 'prop-types';
import {logout} from '../../store/api-actions';
import {getAuthorizationStatus, getLoginName} from '../../store/user/selectors';

const getElement = (stateAuthorization, loginName) => stateAuthorization === AuthorizationStatus.AUTH ? (<span className="header__user-name user__name">{loginName}</span>) : (<span className="header__login">Sign in</span>);

const Header = ({loginName, authorizationStatus, onLogout}) => {

  const history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onLogout();
    history.push(`/login`);
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to="/" onClick={(evt) => {
              evt.preventDefault();
              history.push(`/`);
            }}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width={81} height={41} />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={`/favorites`}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {getElement(authorizationStatus, loginName)}
                </Link>
              </li>
              {authorizationStatus === AuthorizationStatus.AUTH ?
                (<li style={{marginLeft: 5, marginTop: 2}} className="header__nav-item">
                  <button className="button" onClick={handleSubmit}>Выйти</button>
                </li>) : ``
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
  loginName: PropTypes.string
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthorizationStatus(state),
  loginName: getLoginName(state)
});


const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export {Header};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
