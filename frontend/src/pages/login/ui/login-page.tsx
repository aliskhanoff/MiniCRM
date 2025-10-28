import { LoginForm } from '@/features';
import { Template } from '@/shared/ui/pages/template';
import NetworkState from '@/shared/ui/state/networkstate';
import React from 'react';

export const LoginPage: React.FC = () => {
  return <Template>
    <NetworkState onlineContent={<LoginForm />} />
    </Template> ;
};

export default LoginPage;
