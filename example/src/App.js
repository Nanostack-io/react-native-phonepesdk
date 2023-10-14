import * as React from 'react';
import { useState } from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { PhonepeCheckoutTouch } from 'react-native-phonepesdk';

export default function App() {
  
  const [postData, setPostData] = useState({
    amount: 1
  })

  return (
    <View style={styles.container}>
         <PhonepeCheckoutTouch style={[styles.modalBtn]}
                                onPress={() => {
                                    if (postData.amount) {
                                        // setTimeout(() => {
                                        // setModalOpen(false)
                                        // }, 2000);
                                        // MakePayment()
                                    } else {
                                        RNToasty.Error({
                                            title: "Enter amount to add balance in your wallet"
                                        })
                                    }
                                }}
                                uat={true}
                                // merchantId={"M12LWDYWPNB3"} //required
                                // saltKey={"87cc537e-808e-48f0-bb8e-141e1851bc37"} //required
                                // saltIndex={1} //default "1"
                                merchantId={"PGTESTPAYUAT"} //required
                                saltKey={"099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"} //required
                                amount={postData.amount * 100} //required
                                callback={"https://opebo.in/user/wallet/add-money"} //required
                                redirectUrl={"https://opebo.in/user/wallet/add-money"} //required
                                merchantUserId={"USER_ID"} //required
                                successCallback={() => RechargeWalletApi(postData, toggleModal())}
                                errorCallback={(data) => {
                                    console.log("dataFailed", data)
                                    // setModalOpen(false)
                                    // setAmount(null)

                                }}
                            >
      <Text>Result</Text>
      </PhonepeCheckoutTouch>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
