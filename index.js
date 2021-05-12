const axios = require('axios');
const moment = require('moment');
const colors = require('colors');
const FormData = require('form-data');
const config = require('./config');
let usePushover = false;

if(config.pushover.token !== ''){
    usePushover = true;
}

const pincode = config.pincode;
const age = config.your_age;

const time = 60 * config.time_interval; // in seconds

colors.setTheme({
    info: 'yellow',
    help: 'blue',
    warn: 'yellow',
    success: 'green',
    error: 'red'
});

const headers = {
    'Accept': '*/*',
    'Accept-Language': 'en-US,en;q=0.9,es;q=0.8',
    'Connection': 'keep-alive',
    'Content-Type': 'application/x-www-form-urlencoded',
    'DNT': '1',
    'cache-control': 'no-cache',
    'Cookie': '',
    'authority': 'cdn-api.co-vin.in',
    'accept': 'application/json, text/plain, */*',
    'accept-encoding': 'gzip, deflate, br',
    'cache-control': 'no-cache',
    'origin': 'https://www.cowin.gov.in',
    'pragma': 'no-cache',
    'referer': 'https://www.cowin.gov.in/',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="90", "Google Chrome";v="90"',
    'sec-ch-ua-mobile': '?0',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'cross-site',
    'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36'
}

const vaccineDetails = {
  method: 'get',
  url: config.endpoint,
  headers: headers
};

const sendToPushover = () => {
    let data = new FormData();
    data.append('token', config.pushover.token);
    data.append('user', config.pushover.user_key);
    data.append('message', config.success);

    let pushover = {
        method: 'post',
        url: config.pushover.endpoint,
        headers: {
            'Content-Type': 'application/json',
            ...data.getHeaders()
        },
        data: data
    };

    axios(pushover)
    .then((response) => {
        console.log('Sent Data to Pushover'.help);
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
}


const checkForVaccine = async () => {
    console.log(`Checking at ${moment().format()}`.info);
    const date = moment().format('DD-MM-YYYY');
    const params = `?pincode=${pincode}&date=${date}`;
    vaccineDetails.url = vaccineDetails.url + params;
    const response = await axios(vaccineDetails).catch((err) => {
        console.log(err);
    });
    if(response.data){
        const data = response.data;
        if(data.centers){
            data.centers.forEach((center) => {
                if(center.sessions){
                    center.sessions.forEach((session) => {
                        if (session.min_age_limit <= age && session.available_capacity !== 0) {
                            console.log((config.success).success.bold);
                            console.log(session);
                            if(usePushover){
                                sendToPushover();
                            }
                        }
                    });
                }
            });
        }
    }
}

checkForVaccine();
if(!config.is_cron){
    setInterval(checkForVaccine, time * 1000);
}
