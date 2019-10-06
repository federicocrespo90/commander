import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withRouter } from 'react-router-dom';
import {
    translate,
    MenuItemLink,
} from 'react-admin';

import products from '../products';

class Menu extends Component {
    state = {
        menuCatalog: false,
        menuSales: false,
        menuCustomers: false,
    };

    static propTypes = {
        onMenuClick: PropTypes.func,
        logout: PropTypes.object,
    };

    handleToggle = menu => {
        this.setState(state => ({ [menu]: !state[menu] }));
    };

    render() {
        const { onMenuClick } = this.props;
        return (
            <div>
                {' '}
                <MenuItemLink
                        to={`/products`}
                        primaryText={'Products'}
                        leftIcon={<products.icon />}
                        onClick={onMenuClick}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    open: state.admin.ui.sidebarOpen,
    theme: state.theme,
    locale: state.i18n.locale,
});

const enhance = compose(
    withRouter,
    connect(
        mapStateToProps,
        {}
    ),
    translate
);

export default enhance(Menu);
