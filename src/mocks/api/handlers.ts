/* eslint-disable import/no-extraneous-dependencies */
import { rest } from 'msw';
import ENDPOINTS from '../../constants/endpoints';
import mockCharacters from '../mockCharacters';
import mockComics from '../mockComics';
import mockStories from '../mockStories';

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
const storyHandler = rest.get(`${ENDPOINTS.stories}`, (req, res, ctx) => res(ctx.status(200), ctx.json(mockStories)));
const storyDetail = rest.get(`${ENDPOINTS.stories}/2326`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: 'b574c092176606abebb38c1cba2e2627a8a7e9f6',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 2326,
        title: 'Avengers (1998) #74',
        description: '"SEARCH FOR SHE-HULK" While the Avengers continue to search the globe for her, Jennifer Walters seeks the one person on Earth who can help control her transformations. Featuring the return of the most demanded Avenger of all! 32 PGS.MARVEL PSR...$2.25',
        resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
        type: 'cover',
        modified: '2017-01-04T15:00:18-0500',
        thumbnail: null,
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/2326/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/181',
              name: 'Geoff Johns',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/194',
              name: 'Scott Kolins',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/500',
              name: 'Christopher Sotomayor',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/410',
              name: 'Rus Wooton',
              role: 'letterer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/2326/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010801',
              name: 'Ant-Man (Scott Lang)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009338',
              name: 'Hawkeye',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009562',
              name: 'Scarlet Witch',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009583',
              name: 'She-Hulk (Jennifer Walters)',
            },
          ],
          returned: 7,
        },
        series: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/2326/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
          ],
          returned: 1,
        },
        comics: {
          available: 1,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/2326/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/348',
              name: 'Avengers (1998) #74',
            },
          ],
          returned: 1,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/stories/2326/events',
          items: [],
          returned: 0,
        },
        originalIssue: {
          resourceURI: 'http://gateway.marvel.com/v1/public/comics/348',
          name: 'Avengers (1998) #74',
        },
      },
    ],
  },
})));

const storyCharacters = rest.get(`${ENDPOINTS.stories}/2326/characters`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: 'e7b44b4366b5f0747648d92bf38e8e42f9b9e199',
  data: {
    offset: 0,
    limit: 20,
    total: 7,
    count: 7,
    results: [
      {
        id: 1010801,
        name: 'Ant-Man (Scott Lang)',
        description: '',
        modified: '2017-01-31T11:03:40-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/20/52696868356a0',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010801',
        comics: {
          available: 137,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010801/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/60151',
              name: 'A YEAR OF MARVELS TPB (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17743',
              name: 'A-Next (1998) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17744',
              name: 'A-Next (1998) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17745',
              name: 'A-Next (1998) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17746',
              name: 'A-Next (1998) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17747',
              name: 'A-Next (1998) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17748',
              name: 'A-Next (1998) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17749',
              name: 'A-Next (1998) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17750',
              name: 'A-Next (1998) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17740',
              name: 'A-Next (1998) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17741',
              name: 'A-Next (1998) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17742',
              name: 'A-Next (1998) #12',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37256',
              name: 'Alias (2001) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37267',
              name: 'Alias (2001) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37277',
              name: 'Alias (2001) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37255',
              name: 'Alias Omnibus (Hardcover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/16899',
              name: 'Amazing Spider-Man Annual (1964) #24',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/55334',
              name: 'The Astonishing Ant-Man Vol. 3: The Trial of Ant-Man (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/55329',
              name: 'The Astonishing Ant-Man (2015) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/81176',
              name: 'Ant-Man (2020) #1',
            },
          ],
          returned: 20,
        },
        series: {
          available: 58,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010801/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22102',
              name: 'A YEAR OF MARVELS TPB (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3620',
              name: 'A-Next (1998 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/672',
              name: 'Alias (2001 - 2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13383',
              name: 'Alias Omnibus (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23058',
              name: 'All-New Guardians of the Galaxy (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
              name: 'Amazing Spider-Man Annual (1964 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/29032',
              name: 'Ant-Man (2020)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/34022',
              name: 'Ant-Man (2022 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24290',
              name: 'Ant-Man & the Wasp (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24415',
              name: 'Ant-Man & the Wasp: Living Legends (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24323',
              name: 'Ant-Man and the Wasp Adventures (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24413',
              name: 'Ant-Man and the Wasp: Lost And Found (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/37409',
              name: 'Ant-Man and the Wasp: Lost and Found Infinity Comic (2023 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/36372',
              name: 'Ant-Man/Giant-Man Epic Collection: Ant-Man No More (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/34081',
              name: 'Ant-Man: Ant-Iversary (2022)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24418',
              name: 'Ant-Man: Astonishing Origins (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/36474',
              name: 'Ant-Man: The Saga Of Scott Lang (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9085',
              name: 'Avengers (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 159,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010801/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
              name: 'Avengers (1998) #74',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13209',
              name: 'Fantastic Four (1961) #384',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13210',
              name: 'My Enemy, My Son!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13215',
              name: 'Fantastic Four (1961) #385',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13216',
              name: 'Into the Deep!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13222',
              name: 'Fantastic Four (1961) #386',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13223',
              name: 'And Then Came Despair',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13229',
              name: 'Fantastic Four (1961) #387',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13231',
              name: 'Nobody Gets Out Alive!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13236',
              name: 'Fantastic Four (1961) #388',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13237',
              name: 'Deadly Is the Dark Raider',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13243',
              name: 'Fantastic Four (1961) #389',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13244',
              name: 'Behold a Fatal Future!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13251',
              name: 'Fantastic Four (1961) #390',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13252',
              name: '"Past Deceptions and Future Lies!"',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13258',
              name: 'Fantastic Four (1961) #391',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13259',
              name: 'If Death Be Our Destiny--!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13264',
              name: 'Fantastic Four (1961) #392',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13265',
              name: 'The Final Gantlet!',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/13270',
              name: 'Fantastic Four (1961) #393',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1010801/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
              name: 'Secret Empire',
            },
          ],
          returned: 2,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/characters/1010801/ant-man_scott_lang?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Ant-Man_(Scott_Lang)?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1010801/ant-man_scott_lang?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
      },
      {
        id: 1009165,
        name: 'Avengers',
        description: "Earth's Mightiest Heroes joined forces to take on threats that were too big for any one hero to tackle. With a roster that has included Captain America, Iron Man, Ant-Man, Hulk, Thor, Wasp and dozens more over the years, the Avengers have come to be regarded as Earth's No. 1 team.",
        modified: '2020-07-21T10:29:09-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/20/5102c774ebae7',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009165',
        comics: {
          available: 2115,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009165/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/102802',
              name: 'A.X.E.: Avengers (2022) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/102808',
              name: 'A.X.E.: Eve Of Judgment (2022) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/100748',
              name: 'A.X.E.: Judgment Day (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/100366',
              name: 'A.X.E.: Judgment Day (2022) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/102807',
              name: 'A.X.E.: Judgment Day (2022) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/102866',
              name: 'A.X.E.: Judgment Day Companion (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/77059',
              name: 'Absolute Carnage: Avengers (2019) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/81255',
              name: 'Acts of Vengeance: Avengers (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/42539',
              name: 'Age of Apocalypse (2012) #2 (Avengers Art Appreciation Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30090',
              name: 'Age of Heroes (2010) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/33566',
              name: 'Age of Heroes (2010) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30092',
              name: 'Age of Heroes (2010) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30093',
              name: 'Age of Heroes (2010) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37405',
              name: 'Age of Ultron (2013) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37406',
              name: 'Age of Ultron (2013) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37407',
              name: 'Age of Ultron (2013) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/45904',
              name: 'Age of Ultron (2013) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/45905',
              name: 'Age of Ultron (2013) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/45906',
              name: 'Age of Ultron (2013) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/45907',
              name: 'Age of Ultron (2013) #9',
            },
          ],
          returned: 20,
        },
        series: {
          available: 655,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009165/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/35453',
              name: 'A.X.E.: Avengers (2022)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/35456',
              name: 'A.X.E.: Eve Of Judgment (2022)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/34459',
              name: 'A.X.E.: Judgment Day (2022)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/34560',
              name: 'A.X.E.: Judgment Day (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/35490',
              name: 'A.X.E.: Judgment Day Companion (2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27631',
              name: 'Absolute Carnage: Avengers (2019)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/29061',
              name: 'Acts of Vengeance: Avengers (2020)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/15331',
              name: 'Age of Apocalypse (2012 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9790',
              name: 'Age of Heroes (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/17318',
              name: 'Age of Ultron (2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
              name: 'Age of X: Universe (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/672',
              name: 'Alias (2001 - 2003)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13383',
              name: 'Alias Omnibus (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16449',
              name: 'All-New X-Men (2012 - 2015)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20443',
              name: 'All-New, All-Different Avengers (2015 - 2016)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22190',
              name: 'All-New, All-Different Avengers Annual (2016)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22374',
              name: 'ALL-NEW, ALL-DIFFERENT AVENGERS HC (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/34554',
              name: 'All-Out Avengers (2022 - 2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/719',
              name: 'Alpha Flight (2004 - 2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
              name: 'Alpha Flight (1983 - 1994)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 2947,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009165/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/490',
              name: 'Interior #490',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/542',
              name: 'Interior #542',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/572',
              name: 'Interior #572',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/574',
              name: 'Interior #574',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/575',
              name: 'Interior #575',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/577',
              name: 'Interior #577',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/579',
              name: 'Interior #579',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/580',
              name: 'Interior #580',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/749',
              name: '1 of 4 - Season of the Witch',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/892',
              name: 'THOR (1998) #81',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1024',
              name: 'Avengers (1998) #80',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1025',
              name: 'Interior #1025',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
              name: 'Avengers (1998) #81',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1027',
              name: 'Interior #1027',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1029',
              name: 'Interior #1029',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1031',
              name: 'Interior #1031',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1039',
              name: 'Interior #1039',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1041',
              name: 'Avengers (1998) #502',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1043',
              name: 'Interior #1043',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1054',
              name: 'Avengers (1998) #72',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 33,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009165/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/314',
              name: 'Age of Ultron',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
              name: 'Avengers Disassembled',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
              name: 'Avengers VS X-Men',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
              name: 'Civil War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/239',
              name: 'Crossing',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
              name: 'Dark Reign',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
              name: 'Evolutionary War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
              name: 'Infinity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
              name: 'Inhumanity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/255',
              name: 'Initiative',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/337',
              name: 'Monsters Unleashed',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/333',
              name: 'Monsters Unleashed',
            },
          ],
          returned: 20,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/68/avengers?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Avengers?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009165/avengers?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
      },
      {
        id: 1009220,
        name: 'Captain America',
        description: "Vowing to serve his country any way he could, young Steve Rogers took the super soldier serum to become America's one-man army. Fighting for the red, white and blue for over 60 years, Captain America is the living, breathing symbol of freedom and liberty.",
        modified: '2020-04-04T19:01:59-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/537ba56d31087',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009220',
        comics: {
          available: 2442,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009220/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43488',
              name: 'A+X (2012) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43501',
              name: 'A+X (2012) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43508',
              name: 'A+X (2012) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17743',
              name: 'A-Next (1998) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17744',
              name: 'A-Next (1998) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17745',
              name: 'A-Next (1998) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17746',
              name: 'A-Next (1998) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17747',
              name: 'A-Next (1998) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17748',
              name: 'A-Next (1998) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17749',
              name: 'A-Next (1998) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17750',
              name: 'A-Next (1998) #9',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17740',
              name: 'A-Next (1998) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17741',
              name: 'A-Next (1998) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17742',
              name: 'A-Next (1998) #12',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/66978',
              name: 'Adventures of Captain America (1991) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/66979',
              name: 'Adventures of Captain America (1991) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/66980',
              name: 'Adventures of Captain America (1991) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/66981',
              name: 'Adventures of Captain America (1991) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/42539',
              name: 'Age of Apocalypse (2012) #2 (Avengers Art Appreciation Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30090',
              name: 'Age of Heroes (2010) #1',
            },
          ],
          returned: 20,
        },
        series: {
          available: 695,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009220/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
              name: 'A+X (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3620',
              name: 'A-Next (1998 - 1999)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24227',
              name: 'Adventures of Captain America (1991 - 1992)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/15331',
              name: 'Age of Apocalypse (2012 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9790',
              name: 'Age of Heroes (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/10235',
              name: 'AGE OF HEROES TPB (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
              name: 'Age of X: Universe (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/7534',
              name: 'All Winners Comics 70th Anniversary Special (2009)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20682',
              name: 'All-New Wolverine (2015 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2114',
              name: 'All-Winners Comics (1941 - 1947)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9865',
              name: 'All-Winners Squad: Band of Heroes (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
              name: 'Alpha Flight (1983 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/25984',
              name: 'Amazing Fantasy (2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
              name: 'Amazing Spider-Man (1999 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9802',
              name: 'Amazing Spider-Man Annual (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
              name: 'Amazing Spider-Man Annual (1964 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1489',
              name: 'AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/14818',
              name: 'Annihilators: Earthfall (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24323',
              name: 'Ant-Man and the Wasp Adventures (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/14696',
              name: 'Art of Marvel Movies: The Art of Captain America - The First Avenger (2011 - Present)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 3610,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009220/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
              name: 'X-MEN (2004) #186',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/892',
              name: 'THOR (1998) #81',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/960',
              name: '3 of ?',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
              name: 'Avengers (1998) #81',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1041',
              name: 'Avengers (1998) #502',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1042',
              name: 'Avengers (1998) #503',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1054',
              name: 'Avengers (1998) #72',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1163',
              name: 'Amazing Spider-Man (1999) #519',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1165',
              name: 'Amazing Spider-Man (1999) #520',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1167',
              name: 'Amazing Spider-Man (1999) #521',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1175',
              name: 'Amazing Spider-Man (1999) #523',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1193',
              name: 'Amazing Spider-Man (1999) #534',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1199',
              name: 'Amazing Spider-Man (1999) #537',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1203',
              name: 'Amazing Spider-Man (1999) #538',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1414',
              name: 'Cover #1414',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1500',
              name: 'Interior #1500',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1501',
              name: 'CAPTAIN AMERICA (2002) #21',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1503',
              name: 'CAPTAIN AMERICA (2002) #22',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1505',
              name: 'CAPTAIN AMERICA (2002) #23',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1606',
              name: 'WEAPON X (2002) #14',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 31,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009220/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/314',
              name: 'Age of Ultron',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
              name: 'Age of X',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/231',
              name: 'Armor Wars',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
              name: 'Avengers Disassembled',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
              name: 'Avengers VS X-Men',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/320',
              name: 'Axis',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
              name: 'Civil War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/248',
              name: 'Fall of the Mutants',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
              name: 'Infinity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
              name: 'Inhumanity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/151',
              name: 'Maximum Carnage',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
              name: 'Maximum Security',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/333',
              name: 'Monsters Unleashed',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/337',
              name: 'Monsters Unleashed',
            },
          ],
          returned: 20,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/8/captain_america?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Captain_America_(Steve_Rogers)?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009220/captain_america?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
      },
      {
        id: 1009338,
        name: 'Hawkeye',
        description: '',
        modified: '2016-06-22T12:53:31-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/e/90/50fecaf4f101b',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009338',
        comics: {
          available: 655,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009338/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43498',
              name: 'A+X (2012) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43507',
              name: 'A+X (2012) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51256',
              name: 'All-New Hawkeye (2015) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51260',
              name: 'All-New Hawkeye (2015) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51262',
              name: 'All-New Hawkeye (2015) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51263',
              name: 'All-New Hawkeye (2015) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/51264',
              name: 'All-New Hawkeye (2015) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/35513',
              name: 'Amazing Spider-Man (1999) #666',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/35528',
              name: 'Amazing Spider-Man (1999) #667',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/35532',
              name: 'Amazing Spider-Man (1999) #668',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/35522',
              name: 'Amazing Spider-Man (1999) #670',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/39981',
              name: 'Annihilators: Earthfall (2011) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/67309',
              name: 'Ant-Man and the Wasp Adventures (Digest)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/29195',
              name: 'Avengers (2010) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/33336',
              name: 'Avengers (2010) #1 (ROMITA JR. VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/33483',
              name: 'Avengers (2010) #1 (DJURDJEVIC VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/33562',
              name: 'Avengers (2010) #1 (ROMITA SR. VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/33572',
              name: 'Avengers (2010) #1 (I AM AN AVENGER BLANK COVER VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/33335',
              name: 'Avengers (2010) #1 (HEROIC AGE VARIANT)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/29205',
              name: 'Avengers (2010) #2',
            },
          ],
          returned: 20,
        },
        series: {
          available: 215,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009338/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
              name: 'A+X (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/17318',
              name: 'Age of Ultron (2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/19255',
              name: 'All-New Hawkeye (2015)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
              name: 'Amazing Spider-Man (1999 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/14818',
              name: 'Annihilators: Earthfall (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24323',
              name: 'Ant-Man and the Wasp Adventures (2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
              name: 'Avengers (1996 - 1997)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22547',
              name: 'Avengers (2016 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9859',
              name: 'Avengers & the Infinity Gauntlet (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
              name: 'Avengers Academy (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
              name: 'Avengers Annual (1967 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13320',
              name: 'Avengers Annual (2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/26449',
              name: 'Avengers Annual (2000)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/15373',
              name: 'Avengers Assemble (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
              name: 'Avengers Assemble (2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
              name: 'Avengers Assemble Vol. 4 (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2384',
              name: 'Avengers Classic (2007 - 2008)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 711,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009338/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1024',
              name: 'Avengers (1998) #80',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
              name: 'Avengers (1998) #81',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1040',
              name: 'Avengers (1998) #502',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1649',
              name: 'Avengers (1998) #77',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1947',
              name: 'Avengers (1998) #78',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1949',
              name: 'Avengers (1998) #79',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2128',
              name: 'Hawkeye (2003) #1',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2130',
              name: 'Hawkeye (2003) #2',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
              name: 'Avengers (1998) #74',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2351',
              name: '1 of 1 - House of M Tie-In',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2357',
              name: '1 of 1 - House of M Tie-In',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2430',
              name: 'Hawkeye (2003) #3',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2432',
              name: 'Hawkeye (2003) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2434',
              name: 'Hawkeye (2003) #5',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2458',
              name: 'Hawkeye (2003) #6',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2460',
              name: 'Hawkeye (2003) #7',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2462',
              name: 'Hawkeye (2003) #8',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2723',
              name: 'ULTIMATES 2 (2004) #1',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2729',
              name: 'ULTIMATES 2 (2004) #4',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3031',
              name: "Avengers: Earth's Mightiest Heroes (2004) #5",
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 19,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009338/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/314',
              name: 'Age of Ultron',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/231',
              name: 'Armor Wars',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
              name: 'Avengers Disassembled',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
              name: 'Avengers VS X-Men',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/239',
              name: 'Crossing',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
              name: 'Dark Reign',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/246',
              name: 'Evolutionary War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
              name: 'House of M',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
              name: 'Infinity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
              name: 'Maximum Security',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
              name: 'Onslaught',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
              name: 'Secret Empire',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
              name: 'Secret Wars',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/309',
              name: 'Shattered Heroes',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
              name: 'Siege',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/305',
              name: 'Spider-Island',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/60',
              name: 'World War Hulks',
            },
          ],
          returned: 19,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/characters/1009338/hawkeye?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Hawkeye_(Clint_Barton)?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009338/hawkeye?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
      },
      {
        id: 1009368,
        name: 'Iron Man',
        description: 'Wounded, captured and forced to build a weapon by his enemies, billionaire industrialist Tony Stark instead created an advanced suit of armor to save his life and escape captivity. Now with a new outlook on life, Tony uses his money and intelligence to make the world a safer, better place as Iron Man.',
        modified: '2016-09-28T12:08:19-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/c0/527bb7b37ff55',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
        comics: {
          available: 2664,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009368/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43495',
              name: 'A+X (2012) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43506',
              name: 'A+X (2012) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22461',
              name: 'Adam: Legend of the Blue Marvel (2008) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22856',
              name: 'Adam: Legend of the Blue Marvel (2008) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/23733',
              name: 'Adam: Legend of the Blue Marvel (2008) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76359',
              name: 'Aero (2019) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/76360',
              name: 'Aero (2019) #12',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30090',
              name: 'Age of Heroes (2010) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/33566',
              name: 'Age of Heroes (2010) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30092',
              name: 'Age of Heroes (2010) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/30093',
              name: 'Age of Heroes (2010) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/67603',
              name: 'Age of Innocence: The Rebirth of Iron Man (1996) #1',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/21280',
              name: 'All-New Iron Manual (2008) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/55363',
              name: 'All-New, All-Different Avengers (2015) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/55364',
              name: 'All-New, All-Different Avengers (2015) #11',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12653',
              name: 'Alpha Flight (1983) #113',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12668',
              name: 'Alpha Flight (1983) #127',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/55311',
              name: 'The Amazing Spider-Man (2017) #13',
            },
          ],
          returned: 20,
        },
        series: {
          available: 660,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009368/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
              name: 'A+X (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6079',
              name: 'Adam: Legend of the Blue Marvel (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/27392',
              name: 'Aero (2019 - 2020)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9790',
              name: 'Age of Heroes (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24380',
              name: 'Age of Innocence: The Rebirth of Iron Man (1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/13896',
              name: 'Age of X: Universe (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/4897',
              name: 'All-New Iron Manual (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20443',
              name: 'All-New, All-Different Avengers (2015 - 2016)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
              name: 'Alpha Flight (1983 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/454',
              name: 'Amazing Spider-Man (1999 - 2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2984',
              name: 'Amazing Spider-Man Annual (1964 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1489',
              name: 'AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/318',
              name: 'AMAZING SPIDER-MAN VOL. 6: HAPPY BIRTHDAY TPB (2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/23446',
              name: 'Amazing Spider-Man: Worldwide Vol. 2 (2017)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6056',
              name: 'ANNIHILATION CLASSIC HC (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/14818',
              name: 'Annihilators: Earthfall (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/14779',
              name: 'Art of Marvel Studios TPB Slipcase (2011 - Present)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9792',
              name: 'Astonishing Spider-Man & Wolverine (2010 - 2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6792',
              name: 'Astonishing Tales (2009)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6697',
              name: 'Astonishing Tales: Iron Man 2020 Digital Comic (2009)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 3992,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009368/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/670',
              name: 'X-MEN (2004) #186',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/892',
              name: 'THOR (1998) #81',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/960',
              name: '3 of ?',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/982',
              name: 'Interior #982',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/984',
              name: 'Interior #984',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/986',
              name: 'Interior #986',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/988',
              name: 'Interior #988',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/990',
              name: 'Interior #990',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/992',
              name: 'Interior #992',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/994',
              name: 'Interior #994',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/996',
              name: 'Interior #996',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/998',
              name: 'Interior #998',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1000',
              name: 'Interior #1000',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1002',
              name: 'AVENGERS DISASSEMBLED TIE-IN! Still reeling from recent traumas, Iron Man must face off against his evil doppelganger. Meanwhile',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1004',
              name: '"THE SINGULARITY" CONCLUSION! PART 4 (OF 4) The battle rages on between Iron Man and his doppelganger, but only one of them can ',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1018',
              name: 'Amazing Spider-Man (1999) #500',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1024',
              name: 'Avengers (1998) #80',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
              name: 'Avengers (1998) #81',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1041',
              name: 'Avengers (1998) #502',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1051',
              name: 'Interior #1051',
              type: 'interiorStory',
            },
          ],
          returned: 20,
        },
        events: {
          available: 31,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009368/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/303',
              name: 'Age of X',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/231',
              name: 'Armor Wars',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
              name: 'Atlantis Attacks',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
              name: 'Avengers Disassembled',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
              name: 'Avengers VS X-Men',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/238',
              name: 'Civil War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/239',
              name: 'Crossing',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
              name: 'Dark Reign',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/245',
              name: 'Enemy of the State',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/249',
              name: 'Fatal Attractions',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
              name: 'House of M',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
              name: 'Infinity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/317',
              name: 'Inhumanity',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
              name: 'Onslaught',
            },
          ],
          returned: 20,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/29/iron_man?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Iron_Man_(Anthony_Stark)?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009368/iron_man?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
      },
      {
        id: 1009562,
        name: 'Scarlet Witch',
        description: '',
        modified: '2016-06-16T14:23:56-0400',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/6/70/5261a7d7c394b',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009562',
        comics: {
          available: 546,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009562/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43509',
              name: 'A+X (2012) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/100090',
              name: 'Alligator Loki Infinity Comic (2022) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12651',
              name: 'Alpha Flight (1983) #111',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/43221',
              name: 'Astonishing X-Men (2004) #51 (Create Your Own Wedding Variant)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/93354',
              name: 'Atlantis Attacks: The Original Epic (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17751',
              name: 'Avengers (1996) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17490',
              name: 'Avengers (1998) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17756',
              name: 'Avengers (1996) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17501',
              name: 'Avengers (1998) #2',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17512',
              name: 'Avengers (1998) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17757',
              name: 'Avengers (1996) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/62682',
              name: 'Avengers (2016) #3.1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17523',
              name: 'Avengers (1998) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17758',
              name: 'Avengers (1996) #4',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17534',
              name: 'Avengers (1998) #5',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17545',
              name: 'Avengers (1998) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17761',
              name: 'Avengers (1996) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17556',
              name: 'Avengers (1998) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17762',
              name: 'Avengers (1996) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17567',
              name: 'Avengers (1998) #8',
            },
          ],
          returned: 20,
        },
        series: {
          available: 190,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009562/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/16450',
              name: 'A+X (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/34402',
              name: 'Alligator Loki Infinity Comic (2022)',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3621',
              name: 'Avengers (1996 - 1997)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1991',
              name: 'Avengers (1963 - 1996)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22547',
              name: 'Avengers (2016 - 2018)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
              name: 'Avengers (1998 - 2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9859',
              name: 'Avengers & the Infinity Gauntlet (2010)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/9086',
              name: 'Avengers Academy (2010 - 2012)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/26449',
              name: 'Avengers Annual (2000)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
              name: 'Avengers Annual (1967 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
              name: 'Avengers Assemble (2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/15373',
              name: 'Avengers Assemble (2012 - 2014)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1496',
              name: 'Avengers Assemble Vol. 2 (2005)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
              name: 'Avengers Assemble Vol. 3 (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
              name: 'Avengers Assemble Vol. 4 (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2929',
              name: 'AVENGERS ASSEMBLE VOL. 5 TPB (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2384',
              name: 'Avengers Classic (2007 - 2008)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 616,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009562/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1024',
              name: 'Avengers (1998) #80',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1026',
              name: 'Avengers (1998) #81',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1040',
              name: 'Avengers (1998) #502',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1054',
              name: 'Avengers (1998) #72',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1947',
              name: 'Avengers (1998) #78',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1949',
              name: 'Avengers (1998) #79',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2295',
              name: 'Avengers (1998) #70',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
              name: 'Avengers (1998) #74',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2863',
              name: 'Cover #2863',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3031',
              name: "Avengers: Earth's Mightiest Heroes (2004) #5",
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3032',
              name: '5 of 8 - 8XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3033',
              name: "Avengers: Earth's Mightiest Heroes (2004) #6",
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3034',
              name: '6 of 8 - 8XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3035',
              name: "Avengers: Earth's Mightiest Heroes (2004) #7",
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3036',
              name: '7 of 8 - 8XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3037',
              name: "Avengers: Earth's Mightiest Heroes (2004) #8",
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3038',
              name: '8 of 8 - 8XLS',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3265',
              name: '2 of 2 - House of M Prelude',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3500',
              name: 'New Avengers (2004) #26',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4474',
              name: '1 of 8 XLS',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 17,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009562/events',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/events/234',
              name: 'Avengers Disassembled',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/310',
              name: 'Avengers VS X-Men',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/320',
              name: 'Axis',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/318',
              name: 'Dark Reign',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/251',
              name: 'House of M',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/315',
              name: 'Infinity',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
              name: 'Maximum Security',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/154',
              name: 'Onslaught',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/319',
              name: 'Original Sin',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/336',
              name: 'Secret Empire',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
              name: 'Secret Wars',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
              name: 'Secret Wars II',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/273',
              name: 'Siege',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/219',
              name: 'Siege of Darkness',
            },
          ],
          returned: 17,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/characters/1009562/scarlet_witch?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/Scarlet_Witch_(Wanda_Maximoff)?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009562/scarlet_witch?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
      },
      {
        id: 1009583,
        name: 'She-Hulk (Jennifer Walters)',
        description: 'Seriously wounded, young lawyer Jennifer Walters was given a blood transfusion by her cousin Bruce Banner. Usually in better control of her powers and temper than the Hulk, She-Hulk has been a high profile New York lawyer as well as an upstanding member of both the Avengers and Fantastic Four.',
        modified: '2014-01-24T18:10:30-0500',
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/7/20/527bb5d64599e',
          extension: 'jpg',
        },
        resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009583',
        comics: {
          available: 498,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009583/comics',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/58636',
              name: "Marvel New Year's Eve Special Infinite Comic (2017) #1",
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/56017',
              name: 'A-Force (2016) #6',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/56018',
              name: 'A-Force (2016) #7',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/56019',
              name: 'A-Force (2016) #8',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/56021',
              name: 'A-Force (2016) #10',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/22461',
              name: 'Adam: Legend of the Blue Marvel (2008) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37405',
              name: 'Age of Ultron (2013) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/37406',
              name: 'Age of Ultron (2013) #4',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/27533',
              name: 'All-New Savage She-Hulk (2009) #3',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/60276',
              name: 'All-New, All-Different Avengers Annual (2016) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/12725',
              name: 'Alpha Flight (1983) #61',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/29321',
              name: 'Atlantis Attacks (2011) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/29322',
              name: 'Atlantis Attacks (DM Only) (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/93354',
              name: 'Atlantis Attacks: The Original Epic (Trade Paperback)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/67002',
              name: 'Avengers (2018) #1',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/comics/17490',
              name: 'Avengers (1998) #1',
            },
          ],
          returned: 20,
        },
        series: {
          available: 161,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009583/series',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/20606',
              name: 'A-Force (2016)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/6079',
              name: 'Adam: Legend of the Blue Marvel (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/17318',
              name: 'Age of Ultron (2013)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/7231',
              name: 'All-New Savage She-Hulk (2009)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/22190',
              name: 'All-New, All-Different Avengers Annual (2016)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2116',
              name: 'Alpha Flight (1983 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/10030',
              name: 'Atlantis Attacks (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/10031',
              name: 'Atlantis Attacks (DM Only) (2011)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/31906',
              name: 'Atlantis Attacks: The Original Epic (2021)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/24229',
              name: 'Avengers (2018 - Present)',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1988',
              name: 'Avengers Annual (1967 - 1994)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1340',
              name: 'Avengers Assemble (2004)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1737',
              name: 'Avengers Assemble Vol. 3 (2006)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/1816',
              name: 'Avengers Assemble Vol. 4 (2007)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/2384',
              name: 'Avengers Classic (2007 - 2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/3971',
              name: 'Avengers Fairy Tales (2008)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/35600',
              name: 'Avengers Unlimited Infinity Comic (2022 - 2023)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/series/158',
              name: 'Avengers Vol. 1: World Trust (2003)',
            },
          ],
          returned: 20,
        },
        stories: {
          available: 572,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009583/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/698',
              name: 'UNCANNY X-MEN (1963) #435',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1054',
              name: 'Avengers (1998) #72',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1947',
              name: 'Avengers (1998) #78',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/1949',
              name: 'Avengers (1998) #79',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2092',
              name: 'Interior #2092',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2249',
              name: 'UNCANNY X-MEN (1963) #436',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
              name: 'Avengers (1998) #74',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3130',
              name: '1 of 1 - Hercules',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3132',
              name: 'Interior #3132',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3134',
              name: 'Interior #3134',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3136',
              name: 'Interior #3136',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3138',
              name: 'Interior #3138',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3140',
              name: 'Interior #3140',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3142',
              name: '"SPACE CASES" As a superhuman lawyer, SHE-HULK has tried some of the strangest cases on Earth... but all of that is about to cha',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3144',
              name: '"ENGAGEMENT RING" PART 2 (OF 2) A titanic tale of foxy boxing in outer space! Yes, FOXY BOXING! On a planet where might makes ri',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3145',
              name: '1 of 3 - Titania',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3146',
              name: '1 of 3 - Titania',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3148',
              name: '2 of 3 - Titania',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/3150',
              name: '3 of 3 - Titania',
              type: 'interiorStory',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/4125',
              name: '3 of 3 - Titannus War',
              type: 'cover',
            },
          ],
          returned: 20,
        },
        events: {
          available: 15,
          collectionURI: 'http://gateway.marvel.com/v1/public/characters/1009583/events',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/116',
              name: 'Acts of Vengeance!',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/314',
              name: 'Age of Ultron',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/233',
              name: 'Atlantis Attacks',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/296',
              name: 'Chaos War',
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
              resourceURI: 'http://gateway.marvel.com/v1/public/events/297',
              name: 'Fall of the Hulks',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/302',
              name: 'Fear Itself',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/29',
              name: 'Infinity War',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/37',
              name: 'Maximum Security',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/269',
              name: 'Secret Invasion',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/270',
              name: 'Secret Wars',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/271',
              name: 'Secret Wars II',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/277',
              name: 'World War Hulk',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/events/280',
              name: 'X-Tinction Agenda',
            },
          ],
          returned: 15,
        },
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/characters/51/she-hulk?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'wiki',
            url: 'http://marvel.com/universe/She-Hulk_(Jennifer_Walters)?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'comiclink',
            url: 'http://marvel.com/comics/characters/1009583/she-hulk_jennifer_walters?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
      },
    ],
  },
})));
const storyComics = rest.get(`${ENDPOINTS.stories}/2326/comics`, (req, res, ctx) => res(ctx.status(200), ctx.json({
  code: 200,
  status: 'Ok',
  copyright: '© 2023 MARVEL',
  attributionText: 'Data provided by Marvel. © 2023 MARVEL',
  attributionHTML: '<a href="http://marvel.com">Data provided by Marvel. © 2023 MARVEL</a>',
  etag: '10699f06e155bd59823f18824ded96459e0850d7',
  data: {
    offset: 0,
    limit: 20,
    total: 1,
    count: 1,
    results: [
      {
        id: 348,
        digitalId: 4116,
        title: 'Avengers (1998) #74',
        issueNumber: 74,
        variantDescription: '',
        description: '"SEARCH FOR SHE-HULK"\r\n\r\nWhile the Avengers continue to search the globe for her, Jennifer Walters seeks the one person on Earth who can help control her transformations. Featuring the return of the most demanded Avenger of all!\r\n32 PGS.MARVEL PSR...$2.25',
        modified: '-0001-11-30T00:00:00-0500',
        isbn: '',
        upc: '5960605481-00511',
        diamondCode: '',
        ean: '',
        issn: '',
        format: 'Comic',
        pageCount: 0,
        textObjects: [
          {
            type: 'issue_solicit_text',
            language: 'en-us',
            text: '"SEARCH FOR SHE-HULK"\r\n\r\nWhile the Avengers continue to search the globe for her, Jennifer Walters seeks the one person on Earth who can help control her transformations. Featuring the return of the most demanded Avenger of all!\r\n32 PGS.MARVEL PSR...$2.25',
          },
        ],
        resourceURI: 'http://gateway.marvel.com/v1/public/comics/348',
        urls: [
          {
            type: 'detail',
            url: 'http://marvel.com/comics/issue/348/avengers_1998_74?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'purchase',
            url: 'http://comicstore.marvel.com/Avengers-74/digital-comic/4116?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'reader',
            url: 'http://marvel.com/digitalcomics/view.htm?iid=4116&utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
          {
            type: 'inAppLink',
            url: 'https://applink.marvel.com/issue/4116?utm_campaign=apiRef&utm_source=a629b570d8fcdc96fab0dfd25f5c77e8',
          },
        ],
        series: {
          resourceURI: 'http://gateway.marvel.com/v1/public/series/354',
          name: 'Avengers (1998 - 2004)',
        },
        variants: [],
        collections: [
          {
            resourceURI: 'http://gateway.marvel.com/v1/public/comics/1251',
            name: 'Avengers Vol. 3: The Search for She-Hulk (Trade Paperback)',
          },
        ],
        collectedIssues: [],
        dates: [
          {
            type: 'onsaleDate',
            date: '2004-01-01T00:00:00-0500',
          },
          {
            type: 'focDate',
            date: '-0001-11-30T00:00:00-0500',
          },
          {
            type: 'unlimitedDate',
            date: '2007-11-13T00:00:00-0500',
          },
          {
            type: 'digitalPurchaseDate',
            date: '2010-04-13T00:00:00-0400',
          },
        ],
        prices: [
          {
            type: 'printPrice',
            price: 2.25,
          },
          {
            type: 'digitalPurchasePrice',
            price: 1.99,
          },
        ],
        thumbnail: {
          path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/60/586d530a711f6',
          extension: 'jpg',
        },
        images: [
          {
            path: 'http://i.annihil.us/u/prod/marvel/i/mg/3/60/586d530a711f6',
            extension: 'jpg',
          },
        ],
        creators: {
          available: 5,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/348/creators',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/2133',
              name: 'Tom Brevoort',
              role: 'editor',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/181',
              name: 'Geoff Johns',
              role: 'writer',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/194',
              name: 'Scott Kolins',
              role: 'penciller (cover)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/500',
              name: 'Christopher Sotomayor',
              role: 'colorist',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/creators/410',
              name: 'Rus Wooton',
              role: 'letterer',
            },
          ],
          returned: 5,
        },
        characters: {
          available: 7,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/348/characters',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1010801',
              name: 'Ant-Man (Scott Lang)',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009165',
              name: 'Avengers',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009220',
              name: 'Captain America',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009338',
              name: 'Hawkeye',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009368',
              name: 'Iron Man',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009562',
              name: 'Scarlet Witch',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/characters/1009583',
              name: 'She-Hulk (Jennifer Walters)',
            },
          ],
          returned: 7,
        },
        stories: {
          available: 2,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/348/stories',
          items: [
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2326',
              name: 'Avengers (1998) #74',
              type: 'cover',
            },
            {
              resourceURI: 'http://gateway.marvel.com/v1/public/stories/2327',
              name: 'Interior #2327',
              type: 'interiorStory',
            },
          ],
          returned: 2,
        },
        events: {
          available: 0,
          collectionURI: 'http://gateway.marvel.com/v1/public/comics/348/events',
          items: [],
          returned: 0,
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
  storyHandler,
  storyDetail,
  storyCharacters,
  storyComics,
];

export default handlers;
