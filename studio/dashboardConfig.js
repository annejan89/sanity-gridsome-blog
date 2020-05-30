export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ed21e948db2b81702dbd8a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-48imtuc2',
                  apiId: '8e3c6df3-0872-4d10-9813-2fd734315f79'
                },
                {
                  buildHookId: '5ed21e948db2b8b7e2dbd9e6',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-7wi2upku',
                  apiId: '089d56f4-97e2-4404-83da-05977c4fd4ae'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/annejan89/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-7wi2upku.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
