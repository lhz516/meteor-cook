module.exports = {
  appName: 'myApp',
  meteorCore: {
    version: '1.4.0.1'
  },
  npm: {
    packages: [
      {
        name: 'react',
        version: '15.3.0'
      }
    ]
  },
  collections: [
    {
      name: 'Posts',
      dbName: 'posts'
    },
    {
      name: 'Comments',
      dbName: 'comments'
    }
  ],
  redux: {
    actions: [],
    reducers: []
  },
  router: {
    routes: [
      {
        name: 'layout',
        component: 'MainLayout',
        subComponents: [
          {
            name: 'navigation',
            component: 'Navigation'
          },
          {
            name: 'footer',
            component: 'Footer'
          }
        ],
        //wrapChildRoutes: true,
        childRoutes: [
          {
            name: 'home',
            path: '/',
            component: 'Home',
          },
          {
            name: 'posts',
            path: '/posts',
            component: 'Posts',
            container: {
              tracker: [

              ],
              state: [

              ],
              dispatch: [

              ]
            },
            childRoutes: [
              {
                name: 'postsIndex',
                isIndex: true,
                component: 'PostsIndex'
              },
              {
                name: 'postDetail',
                path: '/post/:id',
                component: 'Post',
                // childRoutes: [
                //   {
                //     name: 'postEdit',
                //     path: '/post/:id/edit',
                //     component: 'PostEdit'
                //   }
                // ],
                //wrapChildRoutes: true
              }
            ],
            wrapChildRoutes: true
          }
        ]
      }
    ],
    redirects: [
      {
        from: '',
        to: ''
      }
    ]
  }
};
