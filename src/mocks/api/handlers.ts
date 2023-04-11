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
const comicDetail = rest.get(`${ENDPOINTS.comics}/3627`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '2d1e4ef1e616c71a7458be3d5013b0fa1ea77075',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 3627,
        digitalId: 0,
        title: 'Storm (2006)',
        issueNumber: 0,
        variantDescription: '',
        description: "The epic, untold love story between Marvel's two pre-eminent Black super heroes -- Storm and the Black Panther -- is finally told, as only New York Times best-selling author Eric Jerome Dickey can do it!  An orphaned street urchin, living by her wits on the unforgiving plains of Africa as she struggles to harness her slowly-developing mutant powers...A warrior Prince, embarking on his rite of passage as he ponders the great responsibility in his future...And a crew of ruthless mercenaries who'll stop at nothing to capture an elusive creature of legend -- the fabled wind-rider.  What sparks occur when their paths intersect?  Don't miss out on this story, True Believer, as it builds to a July Event that will shake the entire Marvel Universe.\r<br>\r<br>32 PGS./T+ SUGGESTED FOR TEENS AND UP ...$2.99\r<br>",
        modified: '2015-01-29T20:04:55-0500',
        isbn: '',
        upc: '',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: "The epic, untold love story between Marvel's two pre-eminent Black super heroes -- Storm and the Black Panther -- is finally told, as only New York Times best-selling author Eric Jerome Dickey can do it!  An orphaned street urchin, living by her wits on the unforgiving plains of Africa as she struggles to harness her slowly-developing mutant powers...A warrior Prince, embarking on his rite of passage as he ponders the great responsibility in his future...And a crew of ruthless mercenaries who'll stop at nothing to capture an elusive creature of legend -- the fabled wind-rider.  What sparks occur when their paths intersect?  Don't miss out on this story, True Believer, as it builds to a July Event that will shake the entire Marvel Universe.\r<br>\r<br>32 PGS./T+ SUGGESTED FOR TEENS AND UP ...$2.99\r<br>",
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/3627',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/3627/storm_2006?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/357',
          name: 'Storm (2006)',
        },
        variants: [],
        collections: [],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2029-12-31T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 0,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/80/4bc5fe7a308d7',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 3,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3627/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/370',
              name: 'Eric Jerome Dickey',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/371',
              name: 'David Hine',
              role: 'penciller',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/243',
              name: 'Mike Mayhew',
              role: 'penciller (cover)',
            },
          ],
          returned: 3,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3627/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
              name: 'Storm',
            },
          ],
          returned: 1,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3627/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/496',
              name: 'Cover #496',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/497',
              name: 'Interior #497',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/3627/events',
          items: [],
          returned: 0,
        },
      },
    ],
  },
})));
const comicCharacters = rest.get(`${ENDPOINTS.comics}/3627/characters`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '8c3144ec134122a044930fc3f870c406ea9e056f',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 1009629,
        name: 'Storm',
        description: 'Ororo Monroe is the descendant of an ancient line of African priestesses, all of whom have white hair, blue eyes, and the potential to wield magic.',
        modified: '2016-05-26T11:50:27-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/40/526963dad214d',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
        comics: {
          available: 862,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009629/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17701',
              name: 'Age of Apocalypse: The Chosen (1995) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43498',
              name: 'A+X (2012) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37996',
              name: 'Age of X: Alpha (2010) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12676',
              name: 'Alpha Flight (1983) #17',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12694',
              name: 'Alpha Flight (1983) #33',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
              name: 'Alpha Flight (1983) #61',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
              name: 'Alpha Flight (1983) #127',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21511',
              name: 'Astonishing X-Men (2004) #25',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21714',
              name: 'Astonishing X-Men (2004) #26',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21941',
              name: 'Astonishing X-Men (2004) #27',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/23087',
              name: 'Astonishing X-Men (2004) #28',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/23937',
              name: 'Astonishing X-Men (2004) #29',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24501',
              name: 'Astonishing X-Men (2004) #30',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24503',
              name: 'Astonishing X-Men (2004) #32',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24504',
              name: 'Astonishing X-Men (2004) #33',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/24505',
              name: 'Astonishing X-Men (2004) #34',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30332',
              name: 'Astonishing X-Men (2004) #35',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38318',
              name: 'Astonishing X-Men (2004) #38',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/38319',
              name: 'Astonishing X-Men (2004) #40',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39318',
              name: 'Astonishing X-Men (2004) #44',
            },
          ],
          returned: 20,
        },
        series: {
          available: 218,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009629/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
              name: 'A+X (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3614',
              name: 'Age of Apocalypse: The Chosen (1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13603',
              name: 'Age of X: Alpha (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
              name: 'Alpha Flight (1983 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/744',
              name: 'Astonishing X-Men (2004 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/31906',
              name: 'Atlantis Attacks: The Original Epic (2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
              name: 'Avengers (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
              name: 'Avengers Assemble (2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/15305',
              name: 'Avengers Vs. X-Men (2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3626',
              name: 'Bishop (1994 - 1995)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20912',
              name: 'Black Panther (2016 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/784',
              name: 'Black Panther (2005 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24291',
              name: 'Black Panther (2018 - 2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/31553',
              name: 'Black Panther (2021 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6804',
              name: 'Black Panther (2009 - 2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2115',
              name: 'Black Panther (1998 - 2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23017',
              name: 'Black Panther and the Crew (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3850',
              name: 'Black Panther Annual (2008)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 1004,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009629/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/497',
              name: 'Interior #497',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/648',
              name: '1 of 2- Black Panther crossover',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/650',
              name: '2 of 2- Black Panther crossover',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/737',
              name: '2 of 5 - Savage Land',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/738',
              name: 'Uncanny X-Men (1963) #457',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/739',
              name: '3 of 5 - Savage Land',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/742',
              name: 'Uncanny X-Men (1963) #459',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/743',
              name: "5 of 5 - World's End",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/745',
              name: '1 of 2 - Mojo Rising',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/747',
              name: '2 of 2 - Mojo Rising',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/749',
              name: '1 of 4 - Season of the Witch',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/760',
              name: 'Uncanny X-Men (1963) #467',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/761',
              name: "2 of 3 - Grey's End",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/765',
              name: '1 of 3 -',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/767',
              name: "2 of 3 - Wand'ring Star",
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/768',
              name: 'UNCANNY X-MEN (1963) #471',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/770',
              name: 'UNCANNY X-MEN (1963) #472',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1420',
              name: 'ULTIMATE X-MEN (2000) #43',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1422',
              name: 'ULTIMATE X-MEN (2000) #44',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1426',
              name: 'ULTIMATE X-MEN (2000) #49',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 30,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009629/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/227',
              name: 'Age of Apocalypse',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
              name: 'Age of X',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
              name: 'Atlantis Attacks',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
              name: 'Avengers VS X-Men',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
              name: 'Civil War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
              name: 'Dark Reign',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/240',
              name: 'Days of Future Present',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/245',
              name: 'Enemy of the State',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
              name: 'Evolutionary War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
              name: 'Fall of the Mutants',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
              name: 'Fatal Attractions',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
              name: 'House of M',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/252',
              name: 'Inferno',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/334',
              name: 'Inhumans Vs. X-Men',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
              name: 'Initiative',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
              name: 'Maximum Security',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/299',
              name: 'Messiah CompleX',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/263',
              name: 'Mutant Massacre',
            },
          ],
          returned: 20,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/characters/1009629/storm?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Storm?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009629/storm?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
      },
    ],
  },
})));
const comicStories = rest.get(`${ENDPOINTS.comics}/3627/stories`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '765e28fcfc8f7b54140ca195af81f77c2b61fba6',
  data: {
    offset: 0,
    limit: 20,
    total: 2,
    count: 2,
    results: [
      {
        id: 496,
        title: 'Cover #496',
        description: '',
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/496',
        type: 'cover',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: null,
        creators: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/496/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/243',
              name: 'Mike Mayhew',
              role: 'penciller (cover)',
            },
          ],
          returned: 1,
        },
        characters: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/496/characters',
          items: [],
          returned: 0,
        },
        series: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/496/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/357',
              name: 'Storm (2006)',
            },
          ],
          returned: 1,
        },
        comics: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/496/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/3627',
              name: 'Storm (2006)',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/496/events',
          items: [],
          returned: 0,
        },
        originalIssue: {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/3627',
          name: 'Storm (2006)',
        },
      },
      {
        id: 497,
        title: 'Interior #497',
        description: '',
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/497',
        type: 'story',
        modified: '1969-12-31T19:00:00-0500',
        thumbnail: null,
        creators: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/497/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/370',
              name: 'Eric Jerome Dickey',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/371',
              name: 'David Hine',
              role: 'penciller',
            },
          ],
          returned: 2,
        },
        characters: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/497/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009629',
              name: 'Storm',
            },
          ],
          returned: 1,
        },
        series: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/497/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/357',
              name: 'Storm (2006)',
            },
          ],
          returned: 1,
        },
        comics: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/497/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/3627',
              name: 'Storm (2006)',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/497/events',
          items: [],
          returned: 0,
        },
        originalIssue: {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/3627',
          name: 'Storm (2006)',
        },
      },
    ],
  },
})));
const handlers = [
  charactersHandler,
  charactersDetailHandler,
  charactersComics,
  charactersStories,
  comicHandler,
  comicDetail,
  comicCharacters,
  comicStories,
];

export default handlers;
