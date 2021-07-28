## Background & Objectives

In this project, we are going to play around with the [OpenWeatherMap API](https://openweathermap.org/)! We'll practise AJAX, and discover how we can ask users for their current position!

The users are also able to request the weather conditions in any city they wish by typing it in the search bar.

## Specs

Go to the Terminal, choose a directory where we wish to clone the repository and run:
```bash
git clone git@github.com:Francisco-Webdeveloper/geocoder.git
yarn install
```
Launch local webserver with:

```bash
rake webpack
```
Then open [`localhost:8080`](http://localhost:8080) to test the code in the browser

### Get your API key

First, go to [OpenWeatherMap API](https://home.openweathermap.org/users/sign_up) and create an account to get your API key. You should find it [here](https://home.openweathermap.org/api_keys).


### Current weather

Read the [current weather API doc](https://openweathermap.org/current) to find the endpoint we want to call with `fetch`.


### Get current location

We will also add a link to get the weather in the **current location**. We can do this with browsers' native [`getCurrentPosition()`](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition).

And add an `<a>` tag in the `html` file and bind it to the following callback:

```js
navigator.geolocation.getCurrentPosition((data) => {
  console.log(data);
});
```
There is also an endpoint that takes **coordinates** in the url. Read [the doc](https://openweathermap.org/current) to find the endpoint that takes a latitude and a longitude as parameters.

