const config = {
    pincode: 248140,
    your_age: 20,
    dose_1: true,
    dose_2: false,
    time_interval: 1, // in minutes [NOTE: Don't keep it less than 5 mins, as it may face rate limiting].
    is_cron: false, // make sure to mark it as true if adding script as a cron
    is_paid: false,
    pushover: {
        token: '', // keep this empty if don't have any pushover account.
        user_key: '',
        endpoint: 'https://api.pushover.net/1/messages.json',
    },
    endpoint: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
    success: "Vaccine is Available",
};

module.exports = config;