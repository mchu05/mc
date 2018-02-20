var feed = new Instafeed({
    get: 'user',
    userId: '22975752',
    accessToken:'22975752.2a7da3a.1480ebd7ccad458dad109aa95357c24f',
    limit: '10',
    sortBy: 'most-recent',
    // target: 'instafeed',
    //tagName: 'awesome',
    //resolution: 'standard_resolution',
    clientId: '2a7da3a55dab4e5da71adfa0448293c7',
    template: '<img src="{{image}}" alt="{{caption}}" />'
});
feed.run();