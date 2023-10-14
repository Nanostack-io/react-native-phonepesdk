import { View, Text, Modal, TouchableOpacity, StatusBar, Alert } from 'react-native'
import React, { useRef, useState } from 'react'
import { COLORS } from '../constants'
import base64 from 'react-native-base64'
import { PayApi, PaymentOptionsApi, TransactionStatusApi } from '../apis/paymentActions'
import uuid from 'react-native-uuid';
import WebView from 'react-native-webview'
import { stripTrailingSlash } from '../services/general'
import { useEffect } from 'react'

const PhonepeCheckoutButton = ({ merchantId,
  saltKey,
  saltIndex,
  amount,
  callback,
  redirectUrl,
  merchantUserId,
  // merchantTransactionId,
  mobileNumber,
  successCallback,
  errorCallback,
  uat,
  style,
  onPress,
  disabled,
  children }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [paymentUrl, setPaymentUrl] = useState(null)
  // const [payApiResponse, setPayApiResponse] = useState(null)
  const [merchantTransactionId, setMerchantTransactionId] = useState(null)
  

  const closeModal = () => setModalVisible(false)

  const openModal = () => setModalVisible(true)

  let webViewRef = useRef(null)

  const requestPayload = {
    "merchantId": merchantId,
    "merchantTransactionId": merchantTransactionId,
    "merchantUserId": merchantUserId,
    "amount": amount,
    "callbackUrl": callback,
    "mobileNumber": mobileNumber,
    "redirectUrl": redirectUrl,
    //   "deviceContext": {
    //   "deviceOS": "ANDROID"
    // },
    "paymentInstrument": {
      "type": "PAY_PAGE"
    }
  }

  const handleUPI = () => {

    // if(requestPayload.merchantTransactionId == null){
      let selfGeneratedMerchantTransactionId = uuid.v4()
      requestPayload.merchantTransactionId = selfGeneratedMerchantTransactionId
      setMerchantTransactionId(selfGeneratedMerchantTransactionId)
    // }

    let requestPayloadBase64 = base64.encode(JSON.stringify(requestPayload))
    let postData = { request: requestPayloadBase64 }
    PayApi(postData, { saltKey, saltIndex, uat }, (url) => setPaymentUrl(url))
  }

  const handleGetPaymentOptions = () => {
    let requestPayloadBase64 = base64.encode(JSON.stringify(requestPayload))
    PaymentOptionsApi(merchantId, saltKey, saltIndex)
  }

  const transactionCallBack = (data) => {
    // console.log("onNavigationStateChange", data)
    if ( stripTrailingSlash(data.url) == stripTrailingSlash(redirectUrl)) {
      TransactionStatusApi({
        merchantId, merchantTransactionId: merchantTransactionId,
        saltKey, saltIndex, uat
      }, successCallback, errorCallback)
      // setTimeout(() => {
        setModalVisible(false)
      // },2000);
      // successPaymentCB()
    }
    // else if(data.)
  }

  const defaultCancel = () => {
    setModalVisible(false, errorCallback({ "success": false, "code": "CANCELLED_BY_USER", "message": "Payment Cancelled", }))
    setPaymentUrl(null)
  }

  const cancelButton = () => {
    Alert.alert('Are sure want to cancel payment ?', 'Your Transaction will be cancelled', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () =>  defaultCancel()},
    ]);
  }
  const onButtonPress = () => {
    if(onPress){
      onPress()
    }
    openModal()
    setTimeout(() => {
      defaultCancel()
    }, 3000000);
    // handleGetPaymentOptions()
    handleUPI()
  }


  return (
    <View>
      <Modal visible={modalVisible} style={{ margin: 0 }}
        onRequestClose={cancelButton}
      >
        <StatusBar backgroundColor={COLORS.primary} />

        {paymentUrl && callback && redirectUrl ?
          <WebView
            ref={webViewRef}
            source={{ uri: paymentUrl }}
            style={{ flex: 1 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
            onNavigationStateChange={(e) => transactionCallBack(e)}
            // injectedJavaScript={injectedJavascript}
            scalesPageToFit={true}
            automaticallyAdjustContentInsets={true}
            onError={(e) => console.error("error", e)}
            // onMessage={(event) => {
            //   console.log("event message", event)
            // }}
          /> : null
        }
      </Modal>
      <TouchableOpacity style={style}
        onPress={onButtonPress}
        disabled={disabled}
      >
        {children}
      </TouchableOpacity>
    </View>
  )
}

PhonepeCheckoutButton.defaultProps = {
  merchantId: "PGTESTPAYUAT",
  saltKey: "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399",
  amount: 10000,
  saltIndex: 1,
  merchantTransactionId: null,
  callback: null,
  successCallback: () => { },
  errorCallback: () => { },
  disabled: false
}


export default PhonepeCheckoutButton