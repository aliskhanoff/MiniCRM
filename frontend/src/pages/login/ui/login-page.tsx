import { LoginForm } from '@/features';
import { Template } from '@/shared/ui/pages/template';
import NetworkState from '@/shared/ui/state/networkstate';
import React from 'react';

export const LoginPage: React.FC = () => {
  return (
    <div>
      <Template>
        <NetworkState onlineContent={<LoginForm />} />
      </Template>
    </div>
  );
};

export default LoginPage;
