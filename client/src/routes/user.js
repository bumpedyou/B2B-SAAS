import React from 'react';
import { Router } from '@reach/router';
import Layout from '../components/User/Layout';
import { AccountSettings, PasswordSettings } from '../screens/User/Settings';
import Dashboard from '../screens/User/Dashboard';
import ConfirmedInvite from '../screens/User/ConfirmedInvite';
import TeamApps from '../screens/User/TeamApps';

const Routes = () => {
  return (
    <Layout>
      <Router>
        <Dashboard path="/user/dashboard" />
        <TeamApps path="/user/teamapps" />
        <ConfirmedInvite path="/user/confirmedinvite/:id" />
        <AccountSettings path="/user/settings/account" />
        <PasswordSettings path="/user/settings/password" />
        <Dashboard path="/user" />
      </Router>
    </Layout>
  );
};

export default Routes;
