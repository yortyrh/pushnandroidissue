## 🐛 Bug Report
While running the guide from https://docs.expo.io/versions/v37.0.0/guides/push-notifications,
I'm getting the error `Couldn't get GCM token on device.`

Please run the following project in local expo client to reproduce it
https://github.com/yortyrh/pushnandroidissue

### Environment

```
  Expo CLI 3.17.15 environment info:
    System:
      OS: Windows 10 10.0.18362
    Binaries:
      Node: 12.0.0 - D:\Soft\nodejs\node.EXE
      Yarn: 1.19.1 - D:\Soft\Yarn\bin\yarn.CMD
      npm: 6.9.0 - D:\Soft\nodejs\npm.CMD
    npmPackages:
      expo: ~37.0.3 => 37.0.4
      react: ~16.9.0 => 16.9.0
      react-native: https://github.com/expo/react-native/archive/sdk-37.0.0.tar.gz => 0.61.4
```

This happens in Android using the expo client

### Steps to Reproduce
1) Execute the following steps in windows CMD.
```
$ git clone git@github.com:yortyrh/pushnandroidissue.git
$ cd pushnandroidissue
$ yarn install
$ yarn start
```

2) Once the application starts, it shows the alert: "Error: Couldn't get GCM token on device"

### Expected Behavior
It should show **Token**: <the push notification token> and no alert 

### Actual Behavior
It shows **Token**: <empty> and the Alert: "Error: Couldn't get GCM token on device"

<img src="/assets/push-notifications-token-issue.png" width="300">

### Reproducible Demo
https://github.com/yortyrh/pushnandroidissue
