const mockStories = {
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
        id: 7,
        title:
              'Investigating the murder of a teenage girl, Cage suddenly learns that a three-way gang war is under way for control of the turf',
        description: '',
        type: 'story',
        thumbnail: undefined,
        characters: {
          items: [],
        },
        comics: {
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/941',
              name: 'Cage Vol. I (Hardcover)',
            },
          ],
        },
      },
      {
        id: 8,
        title:
              'In the wake of September 11th, the world watched as firefighters, police officers and EMT workers selflessly risked their lives',
        description: '',
        type: 'story',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: undefined,
        characters: {
          items: [],
        },
        comics: {
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/942',
              name: 'Call, the Vol. 1: The Brotherhood & the Wagon (Trade Paperback)',
            },
          ],
        },
      },
    ],
  },
};

export default mockStories;
