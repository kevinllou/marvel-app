const mockCharacters = [
  {
    id: 1011334,
    name: '3-D Man',
    description: '',
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784',
      extension: 'jpg',
    },
    comics: {
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21366',
          name: 'Avengers: The Initiative (2007) #14',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/24571',
          name: 'Avengers: The Initiative (2007) #14 (SPOTLIGHT VARIANT)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21546',
          name: 'Avengers: The Initiative (2007) #15',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21741',
          name: 'Avengers: The Initiative (2007) #16',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/21975',
          name: 'Avengers: The Initiative (2007) #17',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
          name: 'Avengers: The Initiative (2007) #18',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
          name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
          name: 'Avengers: The Initiative (2007) #19',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/8500',
          name: 'Deadpool (1997) #44',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
          name: 'Marvel Premiere (1972) #35',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
          name: 'Marvel Premiere (1972) #36',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10225',
          name: 'Marvel Premiere (1972) #37',
        },
      ],
    },
    stories: {
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
          name: 'Cover #19947',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
          name: 'The 3-D Man!',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
          name: 'Cover #19949',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/19950',
          name: "The Devil's Music!",
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/19951',
          name: 'Cover #19951',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/19952',
          name: 'Code-Name:  The Cold Warrior!',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/47184',
          name: 'AVENGERS: THE INITIATIVE (2007) #14',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/47185',
          name: 'Avengers: The Initiative (2007) #14 - Int',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/47498',
          name: 'AVENGERS: THE INITIATIVE (2007) #15',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/47499',
          name: 'Avengers: The Initiative (2007) #15 - Int',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/47792',
          name: 'AVENGERS: THE INITIATIVE (2007) #16',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/47793',
          name: 'Avengers: The Initiative (2007) #16 - Int',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/48361',
          name: 'AVENGERS: THE INITIATIVE (2007) #17',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/48362',
          name: 'Avengers: The Initiative (2007) #17 - Int',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/49103',
          name: 'AVENGERS: THE INITIATIVE (2007) #18',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/49104',
          name: 'Avengers: The Initiative (2007) #18 - Int',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
          name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/49888',
          name: 'AVENGERS: THE INITIATIVE (2007) #19',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/49889',
          name: 'Avengers: The Initiative (2007) #19 - Int',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/54371',
          name: 'Avengers: The Initiative (2007) #14, Spotlight Variant - Int',
          type: 'interiorStory',
        },
      ],
    },
  },
  {
    id: 1017100,
    name: 'A-Bomb (HAS)',
    description:
        "Rick Jones has been Hulk's best bud since day one, but now he's more than a friend...he's a teammate! Transformed by a Gamma energy explosion, A-Bomb's thick, armored skin is just as strong and powerful as it is blue. And when he curls into action, he uses it like a giant bowling ball of destruction! ",
    thumbnail: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/5232158de5b16',
      extension: 'jpg',
    },
    comics: {
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/47176',
          name: 'FREE COMIC BOOK DAY 2013 1 (2013) #1',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/40632',
          name: 'Hulk (2008) #53',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/40630',
          name: 'Hulk (2008) #54',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/40628',
          name: 'Hulk (2008) #55',
        },
      ],
    },
    stories: {
      items: [
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/92078',
          name: 'Hulk (2008) #55',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/92079',
          name: 'Interior #92079',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/92082',
          name: 'Hulk (2008) #54',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/92083',
          name: 'Interior #92083',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/92086',
          name: 'Hulk (2008) #53',
          type: 'cover',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/92087',
          name: 'Interior #92087',
          type: 'interiorStory',
        },
        {
          resourceURI: 'http://gateway.marvel.com/v1/public/stories/105929',
          name: 'cover from Free Comic Book Day 2013 (Avengers/Hulk) (2013) #1',
          type: 'cover',
        },
      ],
    },
  },
];

export default mockCharacters;
