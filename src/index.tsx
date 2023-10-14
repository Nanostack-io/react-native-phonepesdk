import React from 'react'
import PhonepeCheckoutButton from './components/PhonepeCheckoutButton.js';

export const PhonepeCheckoutTouch = ({
  children,
  merchantId,
  saltKey,
  saltIndex,
  amount,
  callback,
  redirectUrl,
  merchantUserId,
  mobileNumber,
  uat,
  successCallback,
  errorCallback,
  style,
  onPress,
  disabled
}: {
  children: any;
  merchantId: string;
  saltKey: string;
  saltIndex: number;
  amount: number;
  callback: string;
  redirectUrl: string;
  merchantUserId: string;
  mobileNumber: number;
  uat: boolean;
  successCallback: (data: any) => {},
  errorCallback: (data: any) => {},
  onPress: () => {},
  style: object,
  disabled: boolean
}) => {
  return (
    <PhonepeCheckoutButton
      merchantId={merchantId} //required
      saltKey={saltKey} //required
      saltIndex={saltIndex} //required
      amount={amount} //required
      callback={callback} //required
      redirectUrl={redirectUrl} //required
      merchantUserId={merchantUserId} //required
      successCallback={successCallback}
      errorCallback={errorCallback}
      mobileNumber={mobileNumber}
      uat={uat}
      style={style}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </PhonepeCheckoutButton>
  );
};

