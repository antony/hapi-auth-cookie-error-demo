function register(server, options, next) {

    next();
}

register.attributes = {
  name: 'bar',
  version: require('../package.json').version
};

module.exports.register = register;
