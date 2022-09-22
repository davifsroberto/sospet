import { Header } from '@components/Header';
import { Poster } from '@components/Poster';
import React from 'react';
import { FlatGrid } from 'react-native-super-grid';
import { PosterType } from 'src/types/poster.type';

const posters: PosterType[] = [
  {
    id: 1,
    image: {
      uri: 'https://www.ispca.ie/uploads/happy-tails.jpg',
      alt: 'Missing - Tobby',
    },
    title: 'MISSING',
    petName: 'Tobby',
    petSex: '♂️',
    registerDate: '15 minutes ago',
    local: 'Waterford, Holycross',
    colorTitle: 'lightBlue.500',
  },
  {
    id: 2,
    image: {
      uri: 'https://i.pinimg.com/564x/2f/a0/84/2fa084aa53de7d60076d4f145e97bd0b.jpg',
      alt: 'Missing - Yellow Bird',
    },
    title: 'FOUND',
    petName: 'Yellow Bird',
    petSex: '',
    registerDate: '2 days ago',
    local: 'Dromod More, Ballymartin Beg',
    colorTitle: 'green.600',
  },
  {
    id: 3,
    image: {
      uri: 'https://scontent-dub4-1.xx.fbcdn.net/v/t39.30808-6/306531612_10159023448935017_1155141023908123369_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=666b5a&_nc_ohc=L8zh8jJe8qUAX9R29c0&_nc_ht=scontent-dub4-1.xx&oh=00_AT_HhZL3Hxnf7gomVu7CkTPvB16ffhAeAAayuevXasmptA&oe=632C3162',
      alt: 'Missing - Cat',
    },
    title: 'MISSING',
    petName: 'Cat',
    petSex: '♀️',
    registerDate: '6 hours ago',
    local: 'Waterford, Ballybeg',
    colorTitle: 'lightBlue.500',
  },
  {
    id: 4,
    image: {
      uri: 'https://www.ispca.ie/images/made/-/lostfound/IMG-20220825-WA0000_270_210_c1.jpg',
      alt: 'Found - White Dog',
    },
    title: 'FOUND',
    petName: 'White Dog',
    petSex: '',
    registerDate: '1 day ago',
    local: 'Dromod More, Ballymartin Beg',
    colorTitle: 'green.600',
  },
];

export function HomeScreen() {
  return (
    <>
      <Header />

      <FlatGrid
        data={posters}
        renderItem={({ item, index }) => <Poster poster={item} key={index} />}
        itemDimension={300}
      />
    </>
  );
}
