var path = require('path');

var root = path.join(__dirname, '..');

module.exports = {
  root: root,
  appRoot: path.join(root, 'app'),
  pages: ['rules', 'problems', 'faq', 'mail', 'photos', 'history', 'organizers',
    '2012', '2013s', '2013f', '2014s', '2014f']
};
