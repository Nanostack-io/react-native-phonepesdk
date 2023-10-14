import { sha256 } from "../services/sha256";


export const PayApi = (postData, options, cb) => {

    const { saltKey, saltIndex=1, uat=false } = options

    let xVerify = sha256(postData.request+ "/pg/v1/pay" + saltKey)+"###"+saltIndex

    // console.log(xVerify)
    let headers = new Headers();
    headers.append("X-VERIFY", xVerify);
    headers.append("Content-Type", "application/json");

    let url = uat ? "https://api-preprod.phonepe.com/apis/hermes/pg/v1/pay" : "https://api.phonepe.com/apis/hermes/pg/v1/pay"
      fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(postData),
      })
        .then(response => response.json())
        .then(result => {
          // console.log(result.data)
          // console.log(result.data.instrumentResponse)
          if(cb){
            // cb(result.data)
            cb(result.data.instrumentResponse.redirectInfo.url)
          }
        })
        .catch(error => console.log('error', error, error.message));
}


export const TransactionStatusApi = (options, successCallback, errorCallback) => {

  const { merchantId, merchantTransactionId,saltKey, saltIndex=1, uat=false } = options

  let xVerify = sha256(`/pg/v1/status/${merchantId}/${merchantTransactionId}` + saltKey)+"###"+saltIndex

  console.log(xVerify)
  let headers = new Headers();
  headers.append("X-VERIFY", xVerify);
  headers.append("X-MERCHANT-ID", merchantId);
  headers.append("Content-Type", "application/json");

  let url = uat ? `https://api-preprod.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}` :  `https://api.phonepe.com/apis/hermes/pg/v1/status/${merchantId}/${merchantTransactionId}`
    fetch(url, {
      method: 'GET',
      headers: headers,
      // body: JSON.stringify(postData),
    })
      .then(response => response.json())
      .then(result => {
        console.log("result.data", result)
        // console.log(result.data.instrumentResponse)
        if(result.success && result?.data?.responseCode == "SUCCESS"){
          if(successCallback){
            successCallback(result.data)
            // cb(result.data.instrumentResponse.redirectInfo.url)
          }
        }
        else{
          if(errorCallback){
            errorCallback(result.data)
            // cb(result.data.instrumentResponse.redirectInfo.url)
          }
        }
        
      })
      .catch(error => {
        errorCallback(error)
        // console.log('error', error)
      });
}


export const PaymentOptionsApi = (merchantId, saltKey, saltIndex=1) => {

  let xVerify = sha256(`/pg/v1/options/${merchantId}` + saltKey)+"###"+saltIndex

  console.log(merchantId,xVerify, saltIndex)
  let headers = new Headers();
  headers.append("X-VERIFY", xVerify);
  headers.append("X-MERCHANT-ID", merchantId);
  headers.append("Content-Type", "application/json");

    fetch(`https://api.phonepe.com/apis/hermes/pg/v1/options/${merchantId}`, {
      method: 'GET',
      headers: headers
    })
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
}