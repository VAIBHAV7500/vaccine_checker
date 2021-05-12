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

* Update your pincode and time interval in the config file.


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

### Using it with CRON [Optional] 
  #### Use it only when you are using Pushover

* In Config, update key `is_cron` as true.

* Know your Node location.
  ```
  whereis node
  ```

* Know your File Path
  ```
  pwd
  ```

* Get your cron schedule expression ( You can use [Crontab.guru](https://crontab.guru/) )

* Add it to crontab.
  ```
  crontab -e
  ```

* Press `i` for insert mode.

* Add the job
  ```
  your_cron_expression your_node_path your_file_path/index.js
  ```

* Press `esc` key.

* Enter `:wq!` to write and exit.

* Verify your cron job.
  ```
  crontab -l
  ```

* To remove all the jobs.
  ```
  crontab -r
  ```