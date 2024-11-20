import { User, Advertisement, Category, Chat, Message, Review, Favourite, Photo, ChatMember } from './types';

export const photos = [
  'https://avatars.mds.yandex.net/i?id=61db66a2245d8ffc75e4b746a73a26d2_l-5252229-images-thumbs&n=13',
  'https://i.ytimg.com/vi/AZiFoyaOSe4/maxresdefault.jpg',
  "https://i.ytimg.com/vi/gIyLUPxf83U/maxresdefault.jpg",
  'https://avatars.mds.yandex.net/i?id=2ee40a4e2fa0866cade2086262ae1b62_l-4034321-images-thumbs&n=13',
  'https://steamuserimages-a.akamaihd.net/ugc/1839171845737875078/03A9B87FA220C15AABB72F5FDE52F18490A15A58/?imw=512&amp;imh=320&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
  'https://get.wallhere.com/photo/landscape-mountains-lake-nature-reflection-grass-sky-river-national-park-valley-wilderness-Alps-tree-autumn-leaf-mountain-season-tarn-loch-mountainous-landforms-mountain-range-590185.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBkJigufyq00dk5hZq_acK0ix6Gq5LMj59Kg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpnDR_juCifCfNFAdXQ5mv2l9kg5TsDQkLhQ&s',
  'https://img1.akspic.ru/previews/5/3/0/9/7/179035/179035-voda-gora-gidroresursy-rastenie-oblako-500x.jpg'
]

// Начальные данные для пользователя
export const initialUser: User = {
  UserID: '1',
  FullName: 'John Doe',
  Rating: 4.5,
  PhoneNumber: '1234567890',
  Login: 'johndoe',
  Password: 'password123',
  Email: 'johndoe@example.com',
  LinkPhoto: 'https://avatars.mds.yandex.net/i?id=0f7cf436170dc2ecbeca202d337903a2_l-5378083-images-thumbs&n=13'
};

// Начальные данные для объявления
export const initialAdvertisement: Advertisement = {
  AdvertisementID: '1',
  UserID: '1',
  Condition: 'Новый',
  Date: '14.08.2024 г.',
  CategoryID: '1',
  Name: 'iPhone 12 кватро турбо 4 на 4 120гб',
  Price: 120000,
  Description: 'Существуют две основные трактовки понятия «текст»: имманентная (расширенная, философски нагруженная) и репрезентативная (более частная). Имманентный подход подразумевает отношение к тексту как к автономной реальности, нацеленность на выявление его внутренней структуры. Репрезентативный — рассмотрение текста как особой формы представления информации о внешней тексту действительности.',
  Status: 1,
};

// Начальные данные для категории
export const initialCategory: Category = {
  CategoryID: '1',
  Name: 'Electronics',
  ParentCategoryID: '0',
};

// Начальные данные для чата
export const initialChat: Chat = {
  ChatID: '1',
  Name: 'General Chat',
};

// Начальные данные для сообщения
export const initialMessage: Message = {
  MessageID: '1',
  UserID: '1',
  ChatID: '1',
  Content: 'Hello, how are you?',
  Status: 1,
  Date: '2023-10-01',
};

// Начальные данные для отзыва
export const initialReview: Review = {
  ReviewID: '1',
  UserID: '1',
  AdvertisementID: '1',
  Grade: 5,
  Description: 'Great product, highly recommend!',
};

// Начальные данные для избранного
export const initialFavourite: Favourite = {
  FavouritesID: '1',
  UserID: '1',
  AdvertisementID: '1',
};

// Начальные данные для фотографии
export const initialPhoto: Photo = {
  PhotoID: '1',
  AdvertisementID: '1',
  Name: 'iPhone 12 Photo',
  Resolution: '1920x1080',
  Link: 'https://example.com/iphone12.jpg',
};

// Начальные данные для члена чата
export const initialChatMember: ChatMember = {
  ChatMembersID: '1',
  UserID: '1',
  ChatID: '1',
};
