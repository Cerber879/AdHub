import { User, Advertisement, Category, Chat, Message, Review, Favourite, Photo, ChatMember } from './types';

// Начальные данные для пользователя
export const initialUser: User = {
  UserID: '1',
  FullName: 'John Doe',
  INN: '1234567890',
  Rating: 4.5,
  Passport: '1234567890',
  PhoneNumber: '1234567890',
  Login: 'johndoe',
  Password: 'password123',
  Email: 'johndoe@example.com',
};

// Начальные данные для объявления
export const initialAdvertisement: Advertisement = {
  AdvertisementID: '1',
  UserID: '1',
  CategoryID: '1',
  Name: 'iPhone 12',
  Price: 1000,
  Description: 'New iPhone 12 in excellent condition.',
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
