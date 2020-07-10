---
title: Sign In with Apple with Javascript [EN]
date: "2020-07-10T22:12:03.284Z"
description: "Sign In with Apple with Javascript"
---
 
# Sign In with Apple with Javascript

<br />
Sign in with Apple provides a fast, private way to sign into apps and websites, giving people a consistent experience they can trust and the convenience of not having to remember multiple accounts and passwords.
<br />
<br />

### Configuring Your Webpage for Sign in with Apple
<br />


1. **Embed Sign in with Apple JS in Your Webpage**

```html
<script type="text/javascript" src="https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"></script>
```
<br />

2. **Setting the authorization object using the JavaScript APIs and display a Sign in with Apple button**
```html
<script type="text/javascript">
    AppleID.auth.init({
        clientId : '[CLIENT_ID]',
        scope : '[SCOPES]',
        redirectURI : '[REDIRECT_URI]',
        state : '[STATE]',
        usePopup : true //or false defaults to false
    });
</script>
```
<br />

3. **Add button, recommend we to follow [Apple’s guidelines](https://apple.co/2BJmMJB) as they provide a comprehensive documentation on this matter.**

```html
<div id="appleid-signin" data-color="black" data-border="true" data-type="sign in"></div>
```

![alt text](https://apple.co/3e9xDJX "Buttom Sign In with Apple")
<br />
<br />


4. **Handle the Authorization Response**

The HTTP body contains the result parameters with a content-type of application/x-www-form-urlencoded. A successful response contains the following parameters:

> code

A single-use authentication code that is valid for five minutes.

> id_token

A JSON web token containing the user’s identify information.

> state

The state passed by the init function.

> user

A JSON string containing the data requested in the scope property. The returned data is in the following format: 
```json
{ "name": { "firstName": string, "lastName": string }, "email": string }
```

To handle the response, add an event listener:

```javascript
//Listen for authorization success
document.addEventListener('AppleIDSignInOnSuccess', (data) => {
     //handle successful response
});

//Listen for authorization failures
document.addEventListener('AppleIDSignInOnFailure', (error) => {
     //handle error.
});
```

Font: 

- https://developer.apple.com/documentation/sign_in_with_apple/sign_in_with_apple_js/configuring_your_webpage_for_sign_in_with_apple

- https://medium.com/shopstyle-engineering/sign-in-with-apple-for-angular-8-and-nodejs-server-f37e6a81545a


<br />
<br />
 