'use client';
import React, { FunctionComponent } from 'react';
import { useUniqViewSeconds } from '@shared/hooks/use-uniq-view-seconds';

type SignInFormProps = Readonly<{}>;

export const SignInForm: FunctionComponent<SignInFormProps> = () => {
  const uniqueViewSeconds = useUniqViewSeconds();

  return (
    <div>
      {uniqueViewSeconds.map((second) => (
        <p key={second}>{second}</p>
      ))}
    </div>
  );
};
