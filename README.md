<h1 align='center'>
  Covid Vaccine Checker
  
  [![GitHub version](https://badge.fury.io/gh/vaibhav7500%2Flets_watch.svg)](https://badge.fury.io/gh/vaibhav7500%2Flets_watch)
  
  
</h1>

<p align='center'>
  Check for Vaccine Locally at regular interval of time.
</p>

### Prerequisites

* NodeJS

### Usage
* Clone Repository

* Install NPM Packages

    ```bash
    npm install  # or yarn install
    ```

* Copy Config
    ```bash
    cp ./config/index.sample.js ./config/index.js
    ```

* Update your pincode and interval to check in the config file.


* Run Project

    ```bash
    npm start
    ```

### Integrate Pushover for Push Notification [Optional]

* Go to [Pushover](https://pushover.net/)
* Create Account
* Create an Application
* Copy App Token and User Key and paste it in Config.
* Install and Login to Pushover on your phone.

  You'll get Pushover Notifications on Phone.