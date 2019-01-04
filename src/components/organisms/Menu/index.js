import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// import MenuHeader from '../../molecules/MenuHeader';
// import MenuUserCard from '../../molecules/MenuUserCard';
// import MenuSeparator from '../../elements/MenuSeparator';
// import MenuNavigation from '../../molecules/MenuNavigation';
// import MenuFollow from '../../molecules/MenuFollow';
// import MenuFooter from '../../molecules/MenuFooter';

import './styles.css';

class Menu extends Component {
  static propTypes = {
    /** Spotify connected user */
    connectedUser: PropTypes.object
  };

  redirectToHome = () => {
    // redirect to the homepage
    this.props.history.push({
      pathname: '/'
    });
  };

  render() {
    return (
      <div className="Menu-container">
        <div className="MenuUpper-container">
          toto
          {/* 
          <MenuHeader styles={{ marginTop: '32px' }} />
          <MenuUserCard styles={{ marginTop: '64px' }} />
          <MenuSeparator />
          <MenuNavigation />
          <MenuSeparator />
          <MenuFollow />
          <MenuFooter styles={{ marginBottom: '8px' }} /> */}
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
