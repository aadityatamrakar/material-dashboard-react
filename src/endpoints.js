
const config = {
    base_url: 'http://timesheettesting-env.eba-fakakc8k.us-east-1.elasticbeanstalk.com',
    api: {
        signin: '/user/auth',
        employee_add: '/employee/register',
        user_add: '/user/add',
    }
}

const endpoints = {
    signin: config.base_url + config.api.signin,
    employee_add: config.base_url + config.api.employee_add,
    user_add: config.base_url + config.api.user_add,
    
};

Object.keys(config.api).forEach((key) => {
    endpoints[key] = config.base_url + config.api[key];
});

export default endpoints;
