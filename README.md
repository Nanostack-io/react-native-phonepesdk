# react-native-phonepesdk

<!-- Package for phonepe -->

## Installation

Using npm:

```shell
npm install react-native-phonepesdk
```

or using yarn:

```shell
yarn add react-native-phonepesdk
```

For Expo Users:

```shell
npx expo install react-native-phonepesdk
```

## Usage

### Steps

1. Import PhonepeCheckoutTouch module to your component:
    ```js
    import { PhonepeCheckoutTouch } from 'react-native-phonepesdk';
    ```

2. Wrap PhonepeCheckoutTouch, Like TouchableOpacity:

    ```js
        <PhonepeCheckoutTouch
            merchantId={"PGTESTPAYUAT"} //required
            saltKey={"099eb0cd-02cf-4e2a-8aca-3e6c6aff0399"} //required
            saltIndex={1} //default "1"
            amount={1000} //required
            callback={"https://nanostack.io/callback"} //required
            merchantUserId={"USER_ID"} //required
            successCallback={(data) => console.log(data)}
            errorCallback={(data) => console.log(data)}
            uat={true} //default false for production usage. Mark true for UAT testing
        >
          <Text>Button</Text>
        </PhonepeCheckoutTouch>
    ```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---
<!-- 
Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob) -->
