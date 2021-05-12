const config = {
    pincode: 248140,
    time_interval: 15, // in minutes [NOTE: Don't keep it less than 5 mins, as it may face rate limiting].
    pushover: {
        token: '', // keep this empty if don't have any pushover api.
        user_key: '',
    },
    endpoint: 'https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin',
    success: "Vaccine is Available",
};

module.exports = config;