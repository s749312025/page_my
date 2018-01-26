// module.exports = {
// 	login: require('./login/'),
//   mainFrame: require('./mainFrame/'),
//   article: require('./article/'),
//   articleDetails: require('./articleDetails/'),
//   articleAdd: require('./articleAdd/'),
// };

module.exports = {
  login: () => import('./login'),
  mainFrame: () => import('./mainFrame'),
  article: () => import('./article'),
  articleDetails: () => import('./articleDetails'),
  articleAdd: () => import('./articleAdd')
};
