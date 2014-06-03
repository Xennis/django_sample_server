# Django sample server

## PhoneGap REST/JSON client with jQuery (Mobile) and OAuth2

### Used software

* [PhoneGap](http://phonegap.com) (v.3.3)
* [jQuery](http://jquery.com) (v.1.10)
* [jQuery Mobile](http://jquerymobile.com/) (v.1.4)


### Build and run


#### Browser (with Ripple emulator)

Required: Google Crome browser with [Ripple emulator](http://emulate.phonegap.com/) extension

Open the `www/index.html` file in the browser and activate the Ripple emulator.

#### Android (virtual) device

Required: [Android SDK](http://developer.android.com/sdk/)

Connect your Android (virtual) device to the PC and run PhoneGap form shell:

```
# build only
phonegap build android
# build and run
phonegap run android
```

#### Adobe's PhoneGap Build

Required: [PhoneGap Build](http://build.phonegap.com/) account, [PhoneGap Build API Node Module](https://github.com/phonegap/node-phonegap-build-api) (which simplifies the [PhoneGap Build API](http://docs.build.phonegap.com/en_US/3.1.0/developer_api_api.md.html))

Run the [bd_update_app.js](../../~helper/bd_update_app.js) script to put your code to PhoneGap Build:

```
node bd_update_app.js <token> <app_id> <file>
```
