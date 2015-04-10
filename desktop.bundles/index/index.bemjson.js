//noinspection BadExpressionStatementJS
({
    block: 'page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [{ elem: 'js', url: '_index.js' }],
    mods: { theme: 'islands' },
    content: [
        {
            block: 'header',
            title: 'User\'s issues'
        },
        {
            block: 'content',
            content: [
                {
                    block: 'spin',
                    mods: { theme: 'islands', size: 'm', visible: true }
                }, {
                    block: 'issues-grid'
                }
            ]
        }
    ]
});
