const mockComics = {
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  data: {
    offset: 0,
    limit: 20,
    total: 1562,
    count: 20,
    results: [
      {
        id: 82967,
        title: 'Marvel Previews (2017)',
        description: '',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        characters: {
          items: [],
        },
        stories: {
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183698',
              name: 'cover from Marvel Previews (2017)',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/183699',
              name: 'story from Marvel Previews (2017)',
              type: 'interiorStory',
            },
          ],
        },
      },
      {
        id: 82965,
        title: 'Marvel (2017)',
        description: '',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available',
          extension: 'jpg',
        },
        characters: {
          items: [],
        },
        stories: {
          items: [],
        },
      },
    ],
  },
};

export default mockComics;
