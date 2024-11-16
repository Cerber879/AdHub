// Тип данных для пользователя
export interface User {
    UserID: string;
    FullName: string;
    Rating: number;
    PhoneNumber: string;
    Email: string;
    Login: string;
    Password: string;
  }
  
  // Тип данных для объявления
  export interface Advertisement {
    AdvertisementID: string;
    UserID: string;
    CategoryID: string;
    Name: string;
    Price: number;
    Description: string;
    Status: number;
  }
  
  // Тип данных для категории
  export interface Category {
    CategoryID: string;
    Name: string;
    ParentCategoryID?: string;
  }
  
  // Тип данных для чата
  export interface Chat {
    ChatID: string;
    Name: string;
  }
  
  // Тип данных для сообщения
  export interface Message {
    MessageID: string;
    UserID: string;
    ChatID: string;
    Content: string;
    Status: number;
    Date: string;
  }
  
  // Тип данных для отзыва
  export interface Review {
    ReviewID: string;
    UserID: string;
    AdvertisementID: string;
    Grade: number;
    Description: string;
  }
  
  // Тип данных для избранного
  export interface Favourite {
    FavouritesID: string;
    UserID: string;
    AdvertisementID: string;
  }
  
  // Тип данных для фотографии
  export interface Photo {
    PhotoID: string;
    AdvertisementID: string;
    Name: string;
    Resolution: string;
    Link: string;
  }
  
  // Тип данных для члена чата
  export interface ChatMember {
    ChatMembersID: string;
    UserID: string;
    ChatID: string;
  }
  