/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import ENDPOINTS from '../../constants/endpoints';
import mockCharacters from '../mockCharacters';
import mockComics from '../mockComics';

const charactersHandler = rest.get(`${ENDPOINTS.characters}`, (req, res, ctx) => {
  const nameParameter = req.url.searchParams.get('nameStartsWith');
  if (nameParameter) {
    return res(ctx.status(200), ctx.json({
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
            id: 1009351,
            name: 'Hulk',
            description: 'Caught in a gamma bomb explosion while trying to save the life of a teenager, Dr. Bruce Banner was transformed into the incredibly powerful creature called the Hulk. An all too often misunderstood hero, the angrier the Hulk gets, the stronger the Hulk gets.',
            thumbnail: {
              path: 'http://i.annihil.us/u/prod/marvel/i/mg/5/a0/538615ca33ab0',
              extension: 'jpg',
            },
            comics: {
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/41112',
                  name: '5 Ronin (Hardcover)',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/36365',
                  name: '5 Ronin (2010) #2',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/38753',
                  name: '5 Ronin (2010) #2 (BROOKS COVER)',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/43488',
                  name: 'A+X (2012) #1',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/43506',
                  name: 'A+X (2012) #7',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/77060',
                  name: 'Absolute Carnage: Immortal Hulk (2019) #1',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/320',
                  name: 'Actor Presents Spider-Man and the Incredible Hulk (2003) #1',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/38524',
                  name: 'Age of X: Universe (2011) #1',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/38523',
                  name: 'Age of X: Universe (2011) #2',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/24053',
                  name: 'All-New Savage She-Hulk (2009) #1',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/24252',
                  name: 'All-New Savage She-Hulk (2009) #2',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/12689',
                  name: 'Alpha Flight (1983) #29',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/12650',
                  name: 'Alpha Flight (1983) #110',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
                  name: 'Alpha Flight (1983) #111',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
                  name: 'Alpha Flight (1983) #127',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/35528',
                  name: 'Amazing Spider-Man (1999) #667',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/16904',
                  name: 'Amazing Spider-Man Annual (1964) #3',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/16886',
                  name: 'Amazing Spider-Man Annual (1964) #12',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/36956',
                  name: 'Amazing Spider-Man Annual (2011) #38',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/comics/67309',
                  name: 'Ant-Man and the Wasp Adventures (Digest)',
                },
              ],
            },
            stories: {
              items: [
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/702',
                  name: 'INCREDIBLE HULK (1999) #62',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/703',
                  name: 'Interior #703',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/704',
                  name: 'INCREDIBLE HULK (1999) #63',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/705',
                  name: 'Interior #705',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/706',
                  name: 'INCREDIBLE HULK (1999) #64',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/707',
                  name: 'Interior #707',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/872',
                  name: 'HULK: GRAY (2003) #2',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/873',
                  name: 'Interior #873',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/874',
                  name: 'HULK: GRAY (2003) #3',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/875',
                  name: 'Interior #875',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1134',
                  name: 'Interior #1134',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1217',
                  name: 'INCREDIBLE HULK (1999) #68',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1218',
                  name: 'Interior #1218',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1219',
                  name: 'INCREDIBLE HULK (1999) #69',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1220',
                  name: 'Interior #1220',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1221',
                  name: 'INCREDIBLE HULK (1999) #70',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1222',
                  name: 'Interior #1222',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1223',
                  name: 'INCREDIBLE HULK (1999) #71',
                  type: 'cover',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1224',
                  name: 'Interior #1224',
                  type: 'interiorStory',
                },
                {
                  resourceURI: 'http://gateway.marvel.com/v1/public/stories/1225',
                  name: 'INCREDIBLE HULK (1999) #75',
                  type: 'cover',
                },
              ],
            },
          },
        ],
      },
    }));
  }
  return res(ctx.status(200), ctx.json(mockCharacters));
});
const charactersDetailHandler = rest.get(`${ENDPOINTS.characters}/1011334`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
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
    ],
  },
})));
const charactersComics = rest.get(`${ENDPOINTS.characters}/1011334/comics`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: 'MARVEL',
  data: {
    results: [
      {
        id: 22506,
        digitalId: 10949,
        title: 'Avengers: The Initiative (2007) #19',
        issueNumber: 19,
        variantDescription: '',
        description: 'Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program. Will the Kill Krew Army win the day?',
        modified: '2015-10-27T16:38:23-0400',
        isbn: '',
        upc: '5960606084-01911',
        diamondCode: 'SEP082362',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_preview_text',
            language: 'en-us',
            text: 'Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program. Will the Kill Krew Army win the day?',
          },
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "SECRET INVASION Tie-In!\r<br>\"V-S DAY\"\r<br>It's been leading to this since the Hank Pym Skrull first came up with the idea for a Fifty State Initiative.  This is the final assault in the Secret Invasion, a nation-wide plan that will test the limits of 3-D MAN'S superhuman militia, THE KILL KREW ARMY! Join 3-D MAN, CLOUD 9, KOMODO, HARDBALL, and heroes around America in the battle that will decide the fate of the planet and the future of the Initiative program.  Win or lose, there's no turning back.  After today, everything changes.\r<br>Rated T+ ...$2.99\r<br>",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/22506',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/22506/avengers_the_initiative_2007_19?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Avengers-The-Initiative-19/digital-comic/10949?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=10949&utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/10949?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
          name: 'Avengers: The Initiative (2007 - 2010)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2008-12-17T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '2008-11-27T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2010-02-23T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2011-08-09T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/d/03/58dd080719806',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22506/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/452',
              name: 'Virtual Calligr',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12581',
              name: 'Vc Chris Eliopoulos',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1400',
              name: 'Bong Dazo',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11765',
              name: 'Christos Gage',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12983',
              name: 'Dan Slott',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8706',
              name: 'Jay David Ramos',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/500',
              name: 'Christopher Sotomayor',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/8584',
              name: 'Harvey Tolibao',
              role: 'inker',
            },
          ],
          returned: 9,
        },
        characters: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22506/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010802',
              name: "Ant-Man (Eric O'Grady)",
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009284',
              name: 'Dum Dum Dugan',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011490',
              name: 'Hank Pym',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010821',
              name: 'Hardball',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009376',
              name: 'Jocasta',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010818',
              name: 'Komodo (Melati Kusuma)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009737',
              name: 'Yellowjacket (Hank Pym)',
            },
          ],
          returned: 9,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22506/stories',
          items: [
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
          ],
          returned: 2,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22506/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
      },
      {
        id: 22300,
        digitalId: 0,
        title: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
        issueNumber: 18,
        variantDescription: 'ZOMBIE VARIANT',
        description: "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99\r<br>",
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960606084-01821',
        diamondCode: 'AUG082378',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99\r<br>",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/22300/avengers_the_initiative_2007_18_zombie_variant/zombie_variant?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
          name: 'Avengers: The Initiative (2007 - 2010)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
            name: 'Avengers: The Initiative (2007) #18',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2008-10-29T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2008-10-09T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/10/4e94a23255996',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/1/10/4e94a23255996',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/b/20/4bb63aa561aa0',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 8,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22300/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1054',
              name: 'Juan Doe',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11765',
              name: 'Christos Gage',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12983',
              name: 'Dan Slott',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/548',
              name: 'Andrew Hennessy',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4981',
              name: 'Steve Kurth',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1405',
              name: 'Matt Milla',
              role: 'colorist',
            },
          ],
          returned: 8,
        },
        characters: {
          available: 9,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22300/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010802',
              name: "Ant-Man (Eric O'Grady)",
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010823',
              name: 'Cloud 9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009284',
              name: 'Dum Dum Dugan',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010702',
              name: 'Gravity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011490',
              name: 'Hank Pym',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010818',
              name: 'Komodo (Melati Kusuma)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009599',
              name: 'Skrulls',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011057',
              name: 'Slapstick',
            },
          ],
          returned: 9,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22300/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49105',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/49106',
              name: 'Avengers: The Initiative (2007) #18, Zombie Variant - Int',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22300/events',
          items: [],
          returned: 0,
        },
      },
      {
        id: 22299,
        digitalId: 10948,
        title: 'Avengers: The Initiative (2007) #18',
        issueNumber: 18,
        variantDescription: '',
        description: "Now that the Kill Krew knows Skrullowjacket's master plan, can they stop the true mission of the Fifty State Initiative? Plus, Thor Girl vs. Ultra Girl! One is more than she appears to be and the other's a Skrull!",
        modified: '2014-08-05T14:09:33-0400',
        isbn: '',
        upc: '5960606084-01811',
        diamondCode: 'AUG082377',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 32,
        textObjects: [
          {
            type: 'issue_preview_text',
            language: 'en-us',
            text: "Now that the Kill Krew knows Skrullowjacket's master plan, can they stop the true mission of the Fifty State Initiative? Plus, Thor Girl vs. Ultra Girl! One is more than she appears to be and the other's a Skrull!",
          },
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "SECRET INVASION TIE-IN!\r<br>THE EXPLOSIVE FINALE STARTS HERE!\r<br>Now that the KILL KREW knows Skrullowjacket's master plan, can they stop the TRUE purpose of the Fifty State Initiative? Plus:  It's THOR GIRL vs. ULTRA GIRL!  One is more than she appears to be... and the other's a Skrull. And, after fourteen issues, are we REALLY going to unmask MUTANT ZERO?!\r<br>Rated T+ ...$2.99",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/22299',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/22299/avengers_the_initiative_2007_18?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Avengers-The-Initiative-18/digital-comic/10948?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=10948&utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/10948?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/1945',
          name: 'Avengers: The Initiative (2007 - 2010)',
        },
        variants: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/22300',
            name: 'Avengers: The Initiative (2007) #18 (ZOMBIE VARIANT)',
          },
        ],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2008-10-29T00:00:00-0400',
          },
          {
            type: 'focDate',
            date: '2008-10-09T00:00:00-0400',
          },
          {
            type: 'unlimitedDate',
            date: '2010-02-09T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2011-08-09T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.99,
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/58dd057d304d1',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/20/58dd057d304d1',
            extension: 'jpg',
          },
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/4bb6d098d144a',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22299/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/5251',
              name: 'Vc Joe Caramagna',
              role: 'letterer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/11765',
              name: 'Christos Gage',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/12983',
              name: 'Dan Slott',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/548',
              name: 'Andrew Hennessy',
              role: 'inker',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/4981',
              name: 'Steve Kurth',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/1405',
              name: 'Matt Milla',
              role: 'colorist',
            },
          ],
          returned: 7,
        },
        characters: {
          available: 13,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22299/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010802',
              name: "Ant-Man (Eric O'Grady)",
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010823',
              name: 'Cloud 9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009284',
              name: 'Dum Dum Dugan',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010702',
              name: 'Gravity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011490',
              name: 'Hank Pym',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010821',
              name: 'Hardball',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009376',
              name: 'Jocasta',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010818',
              name: 'Komodo (Melati Kusuma)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009599',
              name: 'Skrulls',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010820',
              name: 'Thor Girl',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009737',
              name: 'Yellowjacket (Hank Pym)',
            },
          ],
          returned: 13,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22299/stories',
          items: [
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
          ],
          returned: 2,
        },
        events: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/22299/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
          ],
          returned: 1,
        },
      },
    ],
  },

})));

const charactersStories = rest.get(`${ENDPOINTS.characters}/1011334/stories`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: 'MARVEL',
  data: {
    results: [
      {
        id: 19947,
        title: 'Cover #19947',
        description: '',
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/19947',
        type: 'cover',
        modified: '2023-04-05T17:42:00-0400',
        thumbnail: null,
        creators: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19947/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/196',
              name: 'Jack Kirby',
              role: 'penciller (cover)',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19947/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
          ],
          returned: 1,
        },
        series: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19947/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 1,
        },
        comics: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19947/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19947/events',
          items: [],
          returned: 0,
        },
        originalIssue: {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
          name: 'Marvel Premiere (1972) #35',
        },
      },
      {
        id: 19948,
        title: 'The 3-D Man!',
        description: '',
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/19948',
        type: 'story',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: null,
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19948/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19948/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
          ],
          returned: 1,
        },
        series: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19948/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 1,
        },
        comics: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19948/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
              name: 'Marvel Premiere (1972) #35',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19948/events',
          items: [],
          returned: 0,
        },
        originalIssue: {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10223',
          name: 'Marvel Premiere (1972) #35',
        },
      },
      {
        id: 19949,
        title: 'Cover #19949',
        description: '',
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/19949',
        type: 'cover',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: null,
        creators: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19949/creators',
          items: [],
          returned: 0,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19949/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1011334',
              name: '3-D Man',
            },
          ],
          returned: 1,
        },
        series: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19949/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2045',
              name: 'Marvel Premiere (1972 - 1981)',
            },
          ],
          returned: 1,
        },
        comics: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19949/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
              name: 'Marvel Premiere (1972) #36',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/19949/events',
          items: [],
          returned: 0,
        },
        originalIssue: {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/10224',
          name: 'Marvel Premiere (1972) #36',
        },
      },
    ],
  },

})));

const comicHandler = rest.get(`${ENDPOINTS.comics}`, (req, res, ctx) => res(ctx.status(200), ctx.json(mockComics)));
const handlers = [
  charactersHandler,
  charactersDetailHandler,
  charactersComics,
  charactersStories,
  comicHandler,
];

export default handlers;
