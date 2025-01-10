import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type AddFavouriteInput = {
  announcementID: Scalars['String']['input'];
};

export type AddToAnnouncementInput = {
  characteristicId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AddToAnnouncementMixedInput = {
  id: Scalars['String']['input'];
  input: AddToAnnouncementInput;
};

export type AnnouncementCharacteristicModel = {
  __typename?: 'AnnouncementCharacteristicModel';
  characteristicId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  productId: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type AnnouncementFiltersInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  displayType?: InputMaybe<Scalars['String']['input']>;
  maxPrice?: InputMaybe<Scalars['Int']['input']>;
  minPrice?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export type AnnouncementModel = {
  __typename?: 'AnnouncementModel';
  announcementCharacteristic?: Maybe<Array<Scalars['String']['output']>>;
  categoryId: Scalars['String']['output'];
  condition: ProductCondition;
  description: Scalars['String']['output'];
  favourites?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Array<Scalars['String']['output']>>;
  placementDate: Scalars['DateTime']['output'];
  price: Scalars['Float']['output'];
  review?: Maybe<Array<Scalars['String']['output']>>;
  status: AnnouncementStatus;
  userId: Scalars['String']['output'];
};

/** Статус объявления */
export enum AnnouncementStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Inactive = 'INACTIVE',
  Sold = 'SOLD'
}

export type CategoryModel = {
  __typename?: 'CategoryModel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
};

export type ChangeDisplayNameInput = {
  displayName: Scalars['String']['input'];
};

export type ChangeEmailInput = {
  email: Scalars['String']['input'];
};

export type ChangePasswordInput = {
  newPassword: Scalars['String']['input'];
  oldPassword: Scalars['String']['input'];
};

export type ChangePhoneNumberInput = {
  phoneNumber: Scalars['String']['input'];
};

export type CharacteristicModel = {
  __typename?: 'CharacteristicModel';
  categoryId: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type ChatInfoOutput = {
  __typename?: 'ChatInfoOutput';
  announcement?: Maybe<AnnouncementModel>;
  createdAt: Scalars['DateTime']['output'];
  lastMessage?: Maybe<Scalars['String']['output']>;
  user_1: UserModel;
  user_2: UserModel;
};

export type CreateAnnouncementInput = {
  categoryId: Scalars['String']['input'];
  condition: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  status: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type CreateCharacteristicInput = {
  categoryId: Scalars['String']['input'];
  name: Scalars['String']['input'];
  type: Scalars['String']['input'];
};

export type CreateMessageInput = {
  Content: Scalars['String']['input'];
  chatID: Scalars['String']['input'];
  status: Scalars['Int']['input'];
  userID: Scalars['String']['input'];
};

export type CreateMessageInputChat = {
  chatId: Scalars['String']['input'];
  content: Scalars['String']['input'];
};

export type CreatePhotoInput = {
  announcementID: Scalars['String']['input'];
  link: Scalars['String']['input'];
};

export type CreateUserInput = {
  displayName: Scalars['String']['input'];
  email?: InputMaybe<Scalars['String']['input']>;
  password: Scalars['String']['input'];
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  typeProfile: Scalars['String']['input'];
};

export type DeviceModel = {
  __typename?: 'DeviceModel';
  browser: Scalars['String']['output'];
  os: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type LocationModel = {
  __typename?: 'LocationModel';
  city: Scalars['String']['output'];
  country: Scalars['String']['output'];
  latidute: Scalars['Float']['output'];
  longitude: Scalars['Float']['output'];
};

export type LoginInput = {
  login: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type MessageModel = {
  __typename?: 'MessageModel';
  chatId: Scalars['String']['output'];
  content: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  isEdited: Scalars['String']['output'];
  senderId: Scalars['String']['output'];
  sentAt: Scalars['DateTime']['output'];
  status: Scalars['Int']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  CreatMessage: Scalars['Boolean']['output'];
  addAnnouncementCharacteristic: Scalars['Boolean']['output'];
  addFavourite: Scalars['Boolean']['output'];
  addPhotoToAnnouncement: Scalars['Boolean']['output'];
  changeDisplayName: Scalars['Boolean']['output'];
  changeEmail: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  changePhoneNumber: Scalars['Boolean']['output'];
  changeProfileAvatar: Scalars['Boolean']['output'];
  clearSessionCookie: Scalars['Boolean']['output'];
  createAnnouncement: Scalars['Boolean']['output'];
  createCategory: Scalars['Boolean']['output'];
  createCharacteristic: Scalars['Boolean']['output'];
  createChat: Scalars['Boolean']['output'];
  createSocialLink: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
  deleteAnnouncement: Scalars['Boolean']['output'];
  deleteAnnouncementCharacteristic: Scalars['Boolean']['output'];
  deleteCategory: Scalars['Boolean']['output'];
  deleteCharacteristic: Scalars['Boolean']['output'];
  deletePhoto: Scalars['Boolean']['output'];
  loginUser: UserModel;
  logoutUser: Scalars['Boolean']['output'];
  removeChat: Scalars['Boolean']['output'];
  removeFavourite: Scalars['Boolean']['output'];
  removeMessage: Scalars['Boolean']['output'];
  removeProfileAvatar: Scalars['Boolean']['output'];
  removeSession: Scalars['Boolean']['output'];
  removeSocialLink: Scalars['Boolean']['output'];
  reorderSocialLinks: Scalars['Boolean']['output'];
  sendMessage: Scalars['Boolean']['output'];
  updateAnnouncement: Scalars['Boolean']['output'];
  updateAnnouncementCharacteristic: Scalars['Boolean']['output'];
  updateCategory: Scalars['Boolean']['output'];
  updateCharacteristic: Scalars['Boolean']['output'];
  updateMessage: Scalars['Boolean']['output'];
  updatePhotos: Scalars['Boolean']['output'];
  updateSocialLink: Scalars['Boolean']['output'];
};


export type MutationCreatMessageArgs = {
  data: CreateMessageInput;
};


export type MutationAddAnnouncementCharacteristicArgs = {
  data: AddToAnnouncementMixedInput;
};


export type MutationAddFavouriteArgs = {
  data: AddFavouriteInput;
};


export type MutationAddPhotoToAnnouncementArgs = {
  data: CreatePhotoInput;
};


export type MutationChangeDisplayNameArgs = {
  data: ChangeDisplayNameInput;
};


export type MutationChangeEmailArgs = {
  data: ChangeEmailInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationChangePhoneNumberArgs = {
  data: ChangePhoneNumberInput;
};


export type MutationChangeProfileAvatarArgs = {
  avatar: Scalars['Upload']['input'];
};


export type MutationCreateAnnouncementArgs = {
  data: CreateAnnouncementInput;
};


export type MutationCreateCategoryArgs = {
  data: CreateCategoryInput;
};


export type MutationCreateCharacteristicArgs = {
  data: CreateCharacteristicInput;
};


export type MutationCreateChatArgs = {
  friendId: Scalars['String']['input'];
  productId: Scalars['String']['input'];
};


export type MutationCreateSocialLinkArgs = {
  data: SocialLinkInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteAnnouncementCharacteristicArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCharacteristicArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationRemoveChatArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveFavouriteArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveMessageArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveSessionArgs = {
  id: Scalars['String']['input'];
};


export type MutationRemoveSocialLinkArgs = {
  id: Scalars['String']['input'];
};


export type MutationReorderSocialLinksArgs = {
  list: Array<SocialLinkOrderInput>;
};


export type MutationSendMessageArgs = {
  input: CreateMessageInputChat;
};


export type MutationUpdateAnnouncementArgs = {
  data: UpdateAnnouncementMixedInput;
};


export type MutationUpdateAnnouncementCharacteristicArgs = {
  data: UpdateAnnouncementCharacteristicMixedInput;
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryMixedInput;
};


export type MutationUpdateCharacteristicArgs = {
  data: UpdateCharacteristicMixedInput;
};


export type MutationUpdateMessageArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type MutationUpdatePhotosArgs = {
  deletePhotoIds: Array<Scalars['String']['input']>;
  newPhotos: Array<CreatePhotoInput>;
};


export type MutationUpdateSocialLinkArgs = {
  data: SocialLinkInput;
  id: Scalars['String']['input'];
};

/** Состояние товара */
export enum ProductCondition {
  New = 'NEW',
  Refurbished = 'REFURBISHED',
  Used = 'USED'
}

export type Query = {
  __typename?: 'Query';
  checkAnnouncementInFavourites: Scalars['Boolean']['output'];
  findAllAnnouncements: Array<AnnouncementModel>;
  findAnnouncementsByFilters: Array<AnnouncementModel>;
  findCharacteristics: Array<CharacteristicModel>;
  findCurrentSession: SessionModel;
  findMessage: Array<MessageModel>;
  findParentCategories: Array<Scalars['String']['output']>;
  findPrewiewSubcategories: Array<SubCutegoryModel>;
  findProfile: UserModel;
  findSessionsByUser: Array<SessionModel>;
  findSocialLinks: Array<SocialLinkModel>;
  findUser: UserModel;
  getAnnouncementById: AnnouncementModel;
  getAnnouncementByIds: Array<AnnouncementModel>;
  getAnnouncementByName: AnnouncementModel;
  getAnnouncementByProfile: Array<AnnouncementModel>;
  getAnnouncementCharacteristics: Array<AnnouncementCharacteristicModel>;
  getAnnouncementsByCategory: Array<AnnouncementModel>;
  getCategoryById: CategoryModel;
  getChats: Array<ChatInfoOutput>;
  getFavouritesByUserId: Array<AnnouncementModel>;
  getMainCategories: Array<CategoryModel>;
  getMessages: Array<MessageModel>;
  getPhotosByAnnouncementId: Array<Scalars['String']['output']>;
  getSubcategories: Array<CategoryModel>;
};


export type QueryCheckAnnouncementInFavouritesArgs = {
  adId: Scalars['String']['input'];
};


export type QueryFindAnnouncementsByFiltersArgs = {
  data: AnnouncementFiltersInput;
};


export type QueryFindCharacteristicsArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindMessageArgs = {
  content: Scalars['String']['input'];
  id: Scalars['String']['input'];
};


export type QueryFindParentCategoriesArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindPrewiewSubcategoriesArgs = {
  id: Scalars['String']['input'];
};


export type QueryFindUserArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAnnouncementByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAnnouncementByIdsArgs = {
  ids: Array<Scalars['String']['input']>;
};


export type QueryGetAnnouncementByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetAnnouncementCharacteristicsArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAnnouncementsByCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetMessagesArgs = {
  chatId: Scalars['String']['input'];
};


export type QueryGetPhotosByAnnouncementIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetSubcategoriesArgs = {
  id: Scalars['String']['input'];
};

export type SessionMetadataModel = {
  __typename?: 'SessionMetadataModel';
  device: DeviceModel;
  ip: Scalars['String']['output'];
  location: LocationModel;
};

export type SessionModel = {
  __typename?: 'SessionModel';
  createdAt: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  metadata: SessionMetadataModel;
  userId: Scalars['String']['output'];
};

export type SocialLinkInput = {
  title: Scalars['String']['input'];
  url: Scalars['String']['input'];
};

export type SocialLinkModel = {
  __typename?: 'SocialLinkModel';
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  position: Scalars['Float']['output'];
  title: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  url: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type SocialLinkOrderInput = {
  id: Scalars['String']['input'];
  position: Scalars['Float']['input'];
};

export type SubCutegoryModel = {
  __typename?: 'SubCutegoryModel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subcategories?: Maybe<Array<CategoryModel>>;
};

export type UpdateAnnouncementCharacteristicInput = {
  characteristicId?: InputMaybe<Scalars['String']['input']>;
  value?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAnnouncementCharacteristicMixedInput = {
  id: Scalars['String']['input'];
  input: UpdateAnnouncementCharacteristicInput;
};

export type UpdateAnnouncementInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateAnnouncementMixedInput = {
  id: Scalars['String']['input'];
  input: UpdateAnnouncementInput;
};

export type UpdateCategoryInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCategoryMixedInput = {
  id: Scalars['String']['input'];
  input: UpdateCategoryInput;
};

export type UpdateCharacteristicInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateCharacteristicMixedInput = {
  id: Scalars['String']['input'];
  input: UpdateCharacteristicInput;
};

export type UserModel = {
  __typename?: 'UserModel';
  avatar?: Maybe<Scalars['String']['output']>;
  bio?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  displayName: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  password: Scalars['String']['output'];
  phoneNumber?: Maybe<Scalars['String']['output']>;
  rating?: Maybe<Scalars['Float']['output']>;
  typeProfile: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
};

export type RemoveMessageMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveMessageMutation = { __typename?: 'Mutation', removeMessage: boolean };

export type SendMessageMutationVariables = Exact<{
  data: CreateMessageInputChat;
}>;


export type SendMessageMutation = { __typename?: 'Mutation', sendMessage: boolean };

export type UpdateMessageMutationVariables = Exact<{
  id: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type UpdateMessageMutation = { __typename?: 'Mutation', updateMessage: boolean };

export type CreateAnnouncementMutationVariables = Exact<{
  data: CreateAnnouncementInput;
}>;


export type CreateAnnouncementMutation = { __typename?: 'Mutation', createAnnouncement: boolean };

export type DeleteAnnouncementMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteAnnouncementMutation = { __typename?: 'Mutation', deleteAnnouncement: boolean };

export type UpdateAnnouncementMutationVariables = Exact<{
  data: UpdateAnnouncementMixedInput;
}>;


export type UpdateAnnouncementMutation = { __typename?: 'Mutation', updateAnnouncement: boolean };

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: boolean };

export type LoginUserMutationVariables = Exact<{
  data: LoginInput;
}>;


export type LoginUserMutation = { __typename?: 'Mutation', loginUser: { __typename?: 'UserModel', email?: string | null, displayName: string } };

export type LogoutUserMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutUserMutation = { __typename?: 'Mutation', logoutUser: boolean };

export type AddToAnnouncementMutationVariables = Exact<{
  data: AddToAnnouncementMixedInput;
}>;


export type AddToAnnouncementMutation = { __typename?: 'Mutation', addAnnouncementCharacteristic: boolean };

export type DeleteAnnouncementCharacteristicMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteAnnouncementCharacteristicMutation = { __typename?: 'Mutation', deleteAnnouncementCharacteristic: boolean };

export type UpdateAnnouncementCharacteristicMutationVariables = Exact<{
  data: UpdateAnnouncementCharacteristicMixedInput;
}>;


export type UpdateAnnouncementCharacteristicMutation = { __typename?: 'Mutation', updateAnnouncementCharacteristic: boolean };

export type CreateCategoryMutationVariables = Exact<{
  data: CreateCategoryInput;
}>;


export type CreateCategoryMutation = { __typename?: 'Mutation', createCategory: boolean };

export type DeleteCategoryMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCategoryMutation = { __typename?: 'Mutation', deleteCategory: boolean };

export type UpdateCategoryMutationVariables = Exact<{
  data: UpdateCategoryMixedInput;
}>;


export type UpdateCategoryMutation = { __typename?: 'Mutation', updateCategory: boolean };

export type CreateCharacteristicMutationVariables = Exact<{
  data: CreateCharacteristicInput;
}>;


export type CreateCharacteristicMutation = { __typename?: 'Mutation', createCharacteristic: boolean };

export type DeleteCharacteristicMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeleteCharacteristicMutation = { __typename?: 'Mutation', deleteCharacteristic: boolean };

export type UpdateCharacteristicMutationVariables = Exact<{
  data: UpdateCharacteristicMixedInput;
}>;


export type UpdateCharacteristicMutation = { __typename?: 'Mutation', updateCharacteristic: boolean };

export type CreateChatMutationVariables = Exact<{
  data: Scalars['String']['input'];
  productId: Scalars['String']['input'];
}>;


export type CreateChatMutation = { __typename?: 'Mutation', createChat: boolean };

export type DeleteChatMutationVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type DeleteChatMutation = { __typename?: 'Mutation', removeChat: boolean };

export type AddFavouriteMutationVariables = Exact<{
  data: AddFavouriteInput;
}>;


export type AddFavouriteMutation = { __typename?: 'Mutation', addFavourite: boolean };

export type RemoveFavouriteMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveFavouriteMutation = { __typename?: 'Mutation', removeFavourite: boolean };

export type AddPhotoToAnnouncementMutationVariables = Exact<{
  data: CreatePhotoInput;
}>;


export type AddPhotoToAnnouncementMutation = { __typename?: 'Mutation', addPhotoToAnnouncement: boolean };

export type DeletePhotoMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type DeletePhotoMutation = { __typename?: 'Mutation', deletePhoto: boolean };

export type UpdatePhotosMutationVariables = Exact<{
  deletePhotoIds: Array<Scalars['String']['input']> | Scalars['String']['input'];
  newPhotos: Array<CreatePhotoInput> | CreatePhotoInput;
}>;


export type UpdatePhotosMutation = { __typename?: 'Mutation', updatePhotos: boolean };

export type ChangeProfileAvatarMutationVariables = Exact<{
  avatar: Scalars['Upload']['input'];
}>;


export type ChangeProfileAvatarMutation = { __typename?: 'Mutation', changeProfileAvatar: boolean };

export type ChangeEmailMutationVariables = Exact<{
  data: ChangeEmailInput;
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail: boolean };

export type ChangeDisplayNameMutationVariables = Exact<{
  data: ChangeDisplayNameInput;
}>;


export type ChangeDisplayNameMutation = { __typename?: 'Mutation', changeDisplayName: boolean };

export type ChangePasswordMutationVariables = Exact<{
  data: ChangePasswordInput;
}>;


export type ChangePasswordMutation = { __typename?: 'Mutation', changePassword: boolean };

export type ChangePhoneNumberMutationVariables = Exact<{
  data: ChangePhoneNumberInput;
}>;


export type ChangePhoneNumberMutation = { __typename?: 'Mutation', changePhoneNumber: boolean };

export type ClearSessionCokkieMutationVariables = Exact<{ [key: string]: never; }>;


export type ClearSessionCokkieMutation = { __typename?: 'Mutation', clearSessionCookie: boolean };

export type CreateSocialLinkMutationVariables = Exact<{
  data: SocialLinkInput;
}>;


export type CreateSocialLinkMutation = { __typename?: 'Mutation', createSocialLink: boolean };

export type RemoveSessionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveSessionMutation = { __typename?: 'Mutation', removeSession: boolean };

export type RemoveSocialLinkMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveSocialLinkMutation = { __typename?: 'Mutation', removeSocialLink: boolean };

export type ReorderSocialLinksMutationVariables = Exact<{
  list: Array<SocialLinkOrderInput> | SocialLinkOrderInput;
}>;


export type ReorderSocialLinksMutation = { __typename?: 'Mutation', reorderSocialLinks: boolean };

export type UpdateSocialLinkMutationVariables = Exact<{
  id: Scalars['String']['input'];
  data: SocialLinkInput;
}>;


export type UpdateSocialLinkMutation = { __typename?: 'Mutation', updateSocialLink: boolean };

export type FindMessageQueryVariables = Exact<{
  data: Scalars['String']['input'];
  id: Scalars['String']['input'];
}>;


export type FindMessageQuery = { __typename?: 'Query', findMessage: Array<{ __typename?: 'MessageModel', status: number, senderId: string, content: string, id: string }> };

export type GetMessagesQueryVariables = Exact<{
  data: Scalars['String']['input'];
}>;


export type GetMessagesQuery = { __typename?: 'Query', getMessages: Array<{ __typename?: 'MessageModel', id: string, chatId: string, senderId: string, content: string, sentAt: any, isEdited: string }> };

export type FindAnnouncementsByFiltersQueryVariables = Exact<{
  filters: AnnouncementFiltersInput;
}>;


export type FindAnnouncementsByFiltersQuery = { __typename?: 'Query', findAnnouncementsByFilters: Array<{ __typename?: 'AnnouncementModel', id: string, userId: string, name: string, price: number, description: string, condition: ProductCondition, status: AnnouncementStatus, placementDate: any, categoryId: string }> };

export type FindAllAnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllAnnouncementsQuery = { __typename?: 'Query', findAllAnnouncements: Array<{ __typename?: 'AnnouncementModel', id: string, userId: string, categoryId: string, name: string, price: number, placementDate: any, description: string, status: AnnouncementStatus, condition: ProductCondition }> };

export type GetAnnouncementQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAnnouncementQuery = { __typename?: 'Query', getAnnouncementById: { __typename?: 'AnnouncementModel', id: string, userId: string, categoryId: string, name: string, price: number, placementDate: any, description: string, status: AnnouncementStatus, condition: ProductCondition } };

export type GetAnnouncementByProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAnnouncementByProfileQuery = { __typename?: 'Query', getAnnouncementByProfile: Array<{ __typename?: 'AnnouncementModel', id: string, userId: string, categoryId: string, name: string, price: number, placementDate: any, description: string, status: AnnouncementStatus, condition: ProductCondition }> };

export type GetAnnouncementsByCategoryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAnnouncementsByCategoryQuery = { __typename?: 'Query', getAnnouncementsByCategory: Array<{ __typename?: 'AnnouncementModel', id: string, name: string, price: number, placementDate: any, description: string, status: AnnouncementStatus, condition: ProductCondition, categoryId: string }> };

export type GetAnnouncementCharacteristicsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAnnouncementCharacteristicsQuery = { __typename?: 'Query', getAnnouncementCharacteristics: Array<{ __typename?: 'AnnouncementCharacteristicModel', id: string, value: string, productId: string, characteristicId: string }> };

export type FindParentCategoriesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindParentCategoriesQuery = { __typename?: 'Query', findParentCategories: Array<string> };

export type FindPrewiewSubcategoriesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindPrewiewSubcategoriesQuery = { __typename?: 'Query', findPrewiewSubcategories: Array<{ __typename?: 'SubCutegoryModel', id: string, name: string, subcategories?: Array<{ __typename?: 'CategoryModel', id: string, name: string }> | null }> };

export type GetCategoryByIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetCategoryByIdQuery = { __typename?: 'Query', getCategoryById: { __typename?: 'CategoryModel', id: string, name: string, parentId?: string | null } };

export type GetMainCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMainCategoriesQuery = { __typename?: 'Query', getMainCategories: Array<{ __typename?: 'CategoryModel', id: string, name: string, parentId?: string | null }> };

export type GetSubcategoriesQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetSubcategoriesQuery = { __typename?: 'Query', getSubcategories: Array<{ __typename?: 'CategoryModel', id: string, name: string }> };

export type FindCharacteristicsQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindCharacteristicsQuery = { __typename?: 'Query', findCharacteristics: Array<{ __typename?: 'CharacteristicModel', id: string, name: string, type: string, categoryId: string }> };

export type GetChatsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetChatsQuery = { __typename?: 'Query', getChats: Array<{ __typename?: 'ChatInfoOutput', createdAt: any, lastMessage?: string | null, user_1: { __typename?: 'UserModel', displayName: string }, user_2: { __typename?: 'UserModel', displayName: string }, announcement?: { __typename?: 'AnnouncementModel', name: string, price: number, description: string } | null }> };

export type CheckAnnouncementInFavouritesQueryVariables = Exact<{
  adId: Scalars['String']['input'];
}>;


export type CheckAnnouncementInFavouritesQuery = { __typename?: 'Query', checkAnnouncementInFavourites: boolean };

export type GetFavouritesByUserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type GetFavouritesByUserIdQuery = { __typename?: 'Query', getFavouritesByUserId: Array<{ __typename?: 'AnnouncementModel', id: string, userId: string, name: string, price: number, description: string, placementDate: any, status: AnnouncementStatus, condition: ProductCondition, categoryId: string }> };

export type GetPhotosByAnnouncementIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPhotosByAnnouncementIdQuery = { __typename?: 'Query', getPhotosByAnnouncementId: Array<string> };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, email?: string | null, phoneNumber?: string | null, typeProfile: string, displayName: string, avatar?: string | null, bio?: string | null, rating?: number | null, createdAt: any } };

export type FindSessionByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSessionByUserQuery = { __typename?: 'Query', findSessionsByUser: Array<{ __typename?: 'SessionModel', id: string, createdAt: string, metadata: { __typename?: 'SessionMetadataModel', ip: string, location: { __typename?: 'LocationModel', city: string, country: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', os: string, browser: string, type: string } } }> };

export type FindSocialLinksQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSocialLinksQuery = { __typename?: 'Query', findSocialLinks: Array<{ __typename?: 'SocialLinkModel', id: string, title: string, url: string, position: number }> };

export type FindUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindUserQuery = { __typename?: 'Query', findUser: { __typename?: 'UserModel', id: string, email?: string | null, phoneNumber?: string | null, typeProfile: string, displayName: string, avatar?: string | null, bio?: string | null, rating?: number | null, createdAt: any } };

export type FindCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentSessionQuery = { __typename?: 'Query', findCurrentSession: { __typename?: 'SessionModel', id: string, createdAt: string, metadata: { __typename?: 'SessionMetadataModel', ip: string, location: { __typename?: 'LocationModel', city: string, country: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', os: string, browser: string, type: string } } } };


export const RemoveMessageDocument = gql`
    mutation removeMessage($id: String!) {
  removeMessage(id: $id)
}
    `;
export type RemoveMessageMutationFn = Apollo.MutationFunction<RemoveMessageMutation, RemoveMessageMutationVariables>;

/**
 * __useRemoveMessageMutation__
 *
 * To run a mutation, you first call `useRemoveMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMessageMutation, { data, loading, error }] = useRemoveMessageMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveMessageMutation(baseOptions?: Apollo.MutationHookOptions<RemoveMessageMutation, RemoveMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveMessageMutation, RemoveMessageMutationVariables>(RemoveMessageDocument, options);
      }
export type RemoveMessageMutationHookResult = ReturnType<typeof useRemoveMessageMutation>;
export type RemoveMessageMutationResult = Apollo.MutationResult<RemoveMessageMutation>;
export type RemoveMessageMutationOptions = Apollo.BaseMutationOptions<RemoveMessageMutation, RemoveMessageMutationVariables>;
export const SendMessageDocument = gql`
    mutation sendMessage($data: CreateMessageInputChat!) {
  sendMessage(input: $data)
}
    `;
export type SendMessageMutationFn = Apollo.MutationFunction<SendMessageMutation, SendMessageMutationVariables>;

/**
 * __useSendMessageMutation__
 *
 * To run a mutation, you first call `useSendMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendMessageMutation, { data, loading, error }] = useSendMessageMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSendMessageMutation(baseOptions?: Apollo.MutationHookOptions<SendMessageMutation, SendMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SendMessageMutation, SendMessageMutationVariables>(SendMessageDocument, options);
      }
export type SendMessageMutationHookResult = ReturnType<typeof useSendMessageMutation>;
export type SendMessageMutationResult = Apollo.MutationResult<SendMessageMutation>;
export type SendMessageMutationOptions = Apollo.BaseMutationOptions<SendMessageMutation, SendMessageMutationVariables>;
export const UpdateMessageDocument = gql`
    mutation UpdateMessage($id: String!, $content: String!) {
  updateMessage(id: $id, content: $content)
}
    `;
export type UpdateMessageMutationFn = Apollo.MutationFunction<UpdateMessageMutation, UpdateMessageMutationVariables>;

/**
 * __useUpdateMessageMutation__
 *
 * To run a mutation, you first call `useUpdateMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMessageMutation, { data, loading, error }] = useUpdateMessageMutation({
 *   variables: {
 *      id: // value for 'id'
 *      content: // value for 'content'
 *   },
 * });
 */
export function useUpdateMessageMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMessageMutation, UpdateMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateMessageMutation, UpdateMessageMutationVariables>(UpdateMessageDocument, options);
      }
export type UpdateMessageMutationHookResult = ReturnType<typeof useUpdateMessageMutation>;
export type UpdateMessageMutationResult = Apollo.MutationResult<UpdateMessageMutation>;
export type UpdateMessageMutationOptions = Apollo.BaseMutationOptions<UpdateMessageMutation, UpdateMessageMutationVariables>;
export const CreateAnnouncementDocument = gql`
    mutation CreateAnnouncement($data: CreateAnnouncementInput!) {
  createAnnouncement(data: $data)
}
    `;
export type CreateAnnouncementMutationFn = Apollo.MutationFunction<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;

/**
 * __useCreateAnnouncementMutation__
 *
 * To run a mutation, you first call `useCreateAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAnnouncementMutation, { data, loading, error }] = useCreateAnnouncementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>(CreateAnnouncementDocument, options);
      }
export type CreateAnnouncementMutationHookResult = ReturnType<typeof useCreateAnnouncementMutation>;
export type CreateAnnouncementMutationResult = Apollo.MutationResult<CreateAnnouncementMutation>;
export type CreateAnnouncementMutationOptions = Apollo.BaseMutationOptions<CreateAnnouncementMutation, CreateAnnouncementMutationVariables>;
export const DeleteAnnouncementDocument = gql`
    mutation DeleteAnnouncement($id: String!) {
  deleteAnnouncement(id: $id)
}
    `;
export type DeleteAnnouncementMutationFn = Apollo.MutationFunction<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;

/**
 * __useDeleteAnnouncementMutation__
 *
 * To run a mutation, you first call `useDeleteAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnnouncementMutation, { data, loading, error }] = useDeleteAnnouncementMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>(DeleteAnnouncementDocument, options);
      }
export type DeleteAnnouncementMutationHookResult = ReturnType<typeof useDeleteAnnouncementMutation>;
export type DeleteAnnouncementMutationResult = Apollo.MutationResult<DeleteAnnouncementMutation>;
export type DeleteAnnouncementMutationOptions = Apollo.BaseMutationOptions<DeleteAnnouncementMutation, DeleteAnnouncementMutationVariables>;
export const UpdateAnnouncementDocument = gql`
    mutation UpdateAnnouncement($data: UpdateAnnouncementMixedInput!) {
  updateAnnouncement(data: $data)
}
    `;
export type UpdateAnnouncementMutationFn = Apollo.MutationFunction<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>;

/**
 * __useUpdateAnnouncementMutation__
 *
 * To run a mutation, you first call `useUpdateAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnnouncementMutation, { data, loading, error }] = useUpdateAnnouncementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>(UpdateAnnouncementDocument, options);
      }
export type UpdateAnnouncementMutationHookResult = ReturnType<typeof useUpdateAnnouncementMutation>;
export type UpdateAnnouncementMutationResult = Apollo.MutationResult<UpdateAnnouncementMutation>;
export type UpdateAnnouncementMutationOptions = Apollo.BaseMutationOptions<UpdateAnnouncementMutation, UpdateAnnouncementMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($data: CreateUserInput!) {
  createUser(data: $data)
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginUserDocument = gql`
    mutation LoginUser($data: LoginInput!) {
  loginUser(data: $data) {
    email
    displayName
  }
}
    `;
export type LoginUserMutationFn = Apollo.MutationFunction<LoginUserMutation, LoginUserMutationVariables>;

/**
 * __useLoginUserMutation__
 *
 * To run a mutation, you first call `useLoginUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginUserMutation, { data, loading, error }] = useLoginUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginUserMutation(baseOptions?: Apollo.MutationHookOptions<LoginUserMutation, LoginUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginUserMutation, LoginUserMutationVariables>(LoginUserDocument, options);
      }
export type LoginUserMutationHookResult = ReturnType<typeof useLoginUserMutation>;
export type LoginUserMutationResult = Apollo.MutationResult<LoginUserMutation>;
export type LoginUserMutationOptions = Apollo.BaseMutationOptions<LoginUserMutation, LoginUserMutationVariables>;
export const LogoutUserDocument = gql`
    mutation LogoutUser {
  logoutUser
}
    `;
export type LogoutUserMutationFn = Apollo.MutationFunction<LogoutUserMutation, LogoutUserMutationVariables>;

/**
 * __useLogoutUserMutation__
 *
 * To run a mutation, you first call `useLogoutUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutUserMutation, { data, loading, error }] = useLogoutUserMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutUserMutation(baseOptions?: Apollo.MutationHookOptions<LogoutUserMutation, LogoutUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutUserMutation, LogoutUserMutationVariables>(LogoutUserDocument, options);
      }
export type LogoutUserMutationHookResult = ReturnType<typeof useLogoutUserMutation>;
export type LogoutUserMutationResult = Apollo.MutationResult<LogoutUserMutation>;
export type LogoutUserMutationOptions = Apollo.BaseMutationOptions<LogoutUserMutation, LogoutUserMutationVariables>;
export const AddToAnnouncementDocument = gql`
    mutation AddToAnnouncement($data: AddToAnnouncementMixedInput!) {
  addAnnouncementCharacteristic(data: $data)
}
    `;
export type AddToAnnouncementMutationFn = Apollo.MutationFunction<AddToAnnouncementMutation, AddToAnnouncementMutationVariables>;

/**
 * __useAddToAnnouncementMutation__
 *
 * To run a mutation, you first call `useAddToAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToAnnouncementMutation, { data, loading, error }] = useAddToAnnouncementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddToAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<AddToAnnouncementMutation, AddToAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToAnnouncementMutation, AddToAnnouncementMutationVariables>(AddToAnnouncementDocument, options);
      }
export type AddToAnnouncementMutationHookResult = ReturnType<typeof useAddToAnnouncementMutation>;
export type AddToAnnouncementMutationResult = Apollo.MutationResult<AddToAnnouncementMutation>;
export type AddToAnnouncementMutationOptions = Apollo.BaseMutationOptions<AddToAnnouncementMutation, AddToAnnouncementMutationVariables>;
export const DeleteAnnouncementCharacteristicDocument = gql`
    mutation DeleteAnnouncementCharacteristic($id: String!) {
  deleteAnnouncementCharacteristic(id: $id)
}
    `;
export type DeleteAnnouncementCharacteristicMutationFn = Apollo.MutationFunction<DeleteAnnouncementCharacteristicMutation, DeleteAnnouncementCharacteristicMutationVariables>;

/**
 * __useDeleteAnnouncementCharacteristicMutation__
 *
 * To run a mutation, you first call `useDeleteAnnouncementCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAnnouncementCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAnnouncementCharacteristicMutation, { data, loading, error }] = useDeleteAnnouncementCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteAnnouncementCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAnnouncementCharacteristicMutation, DeleteAnnouncementCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAnnouncementCharacteristicMutation, DeleteAnnouncementCharacteristicMutationVariables>(DeleteAnnouncementCharacteristicDocument, options);
      }
export type DeleteAnnouncementCharacteristicMutationHookResult = ReturnType<typeof useDeleteAnnouncementCharacteristicMutation>;
export type DeleteAnnouncementCharacteristicMutationResult = Apollo.MutationResult<DeleteAnnouncementCharacteristicMutation>;
export type DeleteAnnouncementCharacteristicMutationOptions = Apollo.BaseMutationOptions<DeleteAnnouncementCharacteristicMutation, DeleteAnnouncementCharacteristicMutationVariables>;
export const UpdateAnnouncementCharacteristicDocument = gql`
    mutation UpdateAnnouncementCharacteristic($data: UpdateAnnouncementCharacteristicMixedInput!) {
  updateAnnouncementCharacteristic(data: $data)
}
    `;
export type UpdateAnnouncementCharacteristicMutationFn = Apollo.MutationFunction<UpdateAnnouncementCharacteristicMutation, UpdateAnnouncementCharacteristicMutationVariables>;

/**
 * __useUpdateAnnouncementCharacteristicMutation__
 *
 * To run a mutation, you first call `useUpdateAnnouncementCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAnnouncementCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAnnouncementCharacteristicMutation, { data, loading, error }] = useUpdateAnnouncementCharacteristicMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateAnnouncementCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAnnouncementCharacteristicMutation, UpdateAnnouncementCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAnnouncementCharacteristicMutation, UpdateAnnouncementCharacteristicMutationVariables>(UpdateAnnouncementCharacteristicDocument, options);
      }
export type UpdateAnnouncementCharacteristicMutationHookResult = ReturnType<typeof useUpdateAnnouncementCharacteristicMutation>;
export type UpdateAnnouncementCharacteristicMutationResult = Apollo.MutationResult<UpdateAnnouncementCharacteristicMutation>;
export type UpdateAnnouncementCharacteristicMutationOptions = Apollo.BaseMutationOptions<UpdateAnnouncementCharacteristicMutation, UpdateAnnouncementCharacteristicMutationVariables>;
export const CreateCategoryDocument = gql`
    mutation CreateCategory($data: CreateCategoryInput!) {
  createCategory(data: $data)
}
    `;
export type CreateCategoryMutationFn = Apollo.MutationFunction<CreateCategoryMutation, CreateCategoryMutationVariables>;

/**
 * __useCreateCategoryMutation__
 *
 * To run a mutation, you first call `useCreateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCategoryMutation, { data, loading, error }] = useCreateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<CreateCategoryMutation, CreateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCategoryMutation, CreateCategoryMutationVariables>(CreateCategoryDocument, options);
      }
export type CreateCategoryMutationHookResult = ReturnType<typeof useCreateCategoryMutation>;
export type CreateCategoryMutationResult = Apollo.MutationResult<CreateCategoryMutation>;
export type CreateCategoryMutationOptions = Apollo.BaseMutationOptions<CreateCategoryMutation, CreateCategoryMutationVariables>;
export const DeleteCategoryDocument = gql`
    mutation DeleteCategory($id: String!) {
  deleteCategory(id: $id)
}
    `;
export type DeleteCategoryMutationFn = Apollo.MutationFunction<DeleteCategoryMutation, DeleteCategoryMutationVariables>;

/**
 * __useDeleteCategoryMutation__
 *
 * To run a mutation, you first call `useDeleteCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCategoryMutation, { data, loading, error }] = useDeleteCategoryMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCategoryMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCategoryMutation, DeleteCategoryMutationVariables>(DeleteCategoryDocument, options);
      }
export type DeleteCategoryMutationHookResult = ReturnType<typeof useDeleteCategoryMutation>;
export type DeleteCategoryMutationResult = Apollo.MutationResult<DeleteCategoryMutation>;
export type DeleteCategoryMutationOptions = Apollo.BaseMutationOptions<DeleteCategoryMutation, DeleteCategoryMutationVariables>;
export const UpdateCategoryDocument = gql`
    mutation UpdateCategory($data: UpdateCategoryMixedInput!) {
  updateCategory(data: $data)
}
    `;
export type UpdateCategoryMutationFn = Apollo.MutationFunction<UpdateCategoryMutation, UpdateCategoryMutationVariables>;

/**
 * __useUpdateCategoryMutation__
 *
 * To run a mutation, you first call `useUpdateCategoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCategoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCategoryMutation, { data, loading, error }] = useUpdateCategoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCategoryMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCategoryMutation, UpdateCategoryMutationVariables>(UpdateCategoryDocument, options);
      }
export type UpdateCategoryMutationHookResult = ReturnType<typeof useUpdateCategoryMutation>;
export type UpdateCategoryMutationResult = Apollo.MutationResult<UpdateCategoryMutation>;
export type UpdateCategoryMutationOptions = Apollo.BaseMutationOptions<UpdateCategoryMutation, UpdateCategoryMutationVariables>;
export const CreateCharacteristicDocument = gql`
    mutation CreateCharacteristic($data: CreateCharacteristicInput!) {
  createCharacteristic(data: $data)
}
    `;
export type CreateCharacteristicMutationFn = Apollo.MutationFunction<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>;

/**
 * __useCreateCharacteristicMutation__
 *
 * To run a mutation, you first call `useCreateCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCharacteristicMutation, { data, loading, error }] = useCreateCharacteristicMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>(CreateCharacteristicDocument, options);
      }
export type CreateCharacteristicMutationHookResult = ReturnType<typeof useCreateCharacteristicMutation>;
export type CreateCharacteristicMutationResult = Apollo.MutationResult<CreateCharacteristicMutation>;
export type CreateCharacteristicMutationOptions = Apollo.BaseMutationOptions<CreateCharacteristicMutation, CreateCharacteristicMutationVariables>;
export const DeleteCharacteristicDocument = gql`
    mutation DeleteCharacteristic($id: String!) {
  deleteCharacteristic(id: $id)
}
    `;
export type DeleteCharacteristicMutationFn = Apollo.MutationFunction<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>;

/**
 * __useDeleteCharacteristicMutation__
 *
 * To run a mutation, you first call `useDeleteCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCharacteristicMutation, { data, loading, error }] = useDeleteCharacteristicMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>(DeleteCharacteristicDocument, options);
      }
export type DeleteCharacteristicMutationHookResult = ReturnType<typeof useDeleteCharacteristicMutation>;
export type DeleteCharacteristicMutationResult = Apollo.MutationResult<DeleteCharacteristicMutation>;
export type DeleteCharacteristicMutationOptions = Apollo.BaseMutationOptions<DeleteCharacteristicMutation, DeleteCharacteristicMutationVariables>;
export const UpdateCharacteristicDocument = gql`
    mutation UpdateCharacteristic($data: UpdateCharacteristicMixedInput!) {
  updateCharacteristic(data: $data)
}
    `;
export type UpdateCharacteristicMutationFn = Apollo.MutationFunction<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>;

/**
 * __useUpdateCharacteristicMutation__
 *
 * To run a mutation, you first call `useUpdateCharacteristicMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCharacteristicMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCharacteristicMutation, { data, loading, error }] = useUpdateCharacteristicMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateCharacteristicMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>(UpdateCharacteristicDocument, options);
      }
export type UpdateCharacteristicMutationHookResult = ReturnType<typeof useUpdateCharacteristicMutation>;
export type UpdateCharacteristicMutationResult = Apollo.MutationResult<UpdateCharacteristicMutation>;
export type UpdateCharacteristicMutationOptions = Apollo.BaseMutationOptions<UpdateCharacteristicMutation, UpdateCharacteristicMutationVariables>;
export const CreateChatDocument = gql`
    mutation CreateChat($data: String!, $productId: String!) {
  createChat(friendId: $data, productId: $productId)
}
    `;
export type CreateChatMutationFn = Apollo.MutationFunction<CreateChatMutation, CreateChatMutationVariables>;

/**
 * __useCreateChatMutation__
 *
 * To run a mutation, you first call `useCreateChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createChatMutation, { data, loading, error }] = useCreateChatMutation({
 *   variables: {
 *      data: // value for 'data'
 *      productId: // value for 'productId'
 *   },
 * });
 */
export function useCreateChatMutation(baseOptions?: Apollo.MutationHookOptions<CreateChatMutation, CreateChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateChatMutation, CreateChatMutationVariables>(CreateChatDocument, options);
      }
export type CreateChatMutationHookResult = ReturnType<typeof useCreateChatMutation>;
export type CreateChatMutationResult = Apollo.MutationResult<CreateChatMutation>;
export type CreateChatMutationOptions = Apollo.BaseMutationOptions<CreateChatMutation, CreateChatMutationVariables>;
export const DeleteChatDocument = gql`
    mutation DeleteChat($data: String!) {
  removeChat(id: $data)
}
    `;
export type DeleteChatMutationFn = Apollo.MutationFunction<DeleteChatMutation, DeleteChatMutationVariables>;

/**
 * __useDeleteChatMutation__
 *
 * To run a mutation, you first call `useDeleteChatMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteChatMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteChatMutation, { data, loading, error }] = useDeleteChatMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useDeleteChatMutation(baseOptions?: Apollo.MutationHookOptions<DeleteChatMutation, DeleteChatMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteChatMutation, DeleteChatMutationVariables>(DeleteChatDocument, options);
      }
export type DeleteChatMutationHookResult = ReturnType<typeof useDeleteChatMutation>;
export type DeleteChatMutationResult = Apollo.MutationResult<DeleteChatMutation>;
export type DeleteChatMutationOptions = Apollo.BaseMutationOptions<DeleteChatMutation, DeleteChatMutationVariables>;
export const AddFavouriteDocument = gql`
    mutation AddFavourite($data: AddFavouriteInput!) {
  addFavourite(data: $data)
}
    `;
export type AddFavouriteMutationFn = Apollo.MutationFunction<AddFavouriteMutation, AddFavouriteMutationVariables>;

/**
 * __useAddFavouriteMutation__
 *
 * To run a mutation, you first call `useAddFavouriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavouriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavouriteMutation, { data, loading, error }] = useAddFavouriteMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddFavouriteMutation(baseOptions?: Apollo.MutationHookOptions<AddFavouriteMutation, AddFavouriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFavouriteMutation, AddFavouriteMutationVariables>(AddFavouriteDocument, options);
      }
export type AddFavouriteMutationHookResult = ReturnType<typeof useAddFavouriteMutation>;
export type AddFavouriteMutationResult = Apollo.MutationResult<AddFavouriteMutation>;
export type AddFavouriteMutationOptions = Apollo.BaseMutationOptions<AddFavouriteMutation, AddFavouriteMutationVariables>;
export const RemoveFavouriteDocument = gql`
    mutation RemoveFavourite($id: String!) {
  removeFavourite(id: $id)
}
    `;
export type RemoveFavouriteMutationFn = Apollo.MutationFunction<RemoveFavouriteMutation, RemoveFavouriteMutationVariables>;

/**
 * __useRemoveFavouriteMutation__
 *
 * To run a mutation, you first call `useRemoveFavouriteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavouriteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavouriteMutation, { data, loading, error }] = useRemoveFavouriteMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveFavouriteMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavouriteMutation, RemoveFavouriteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFavouriteMutation, RemoveFavouriteMutationVariables>(RemoveFavouriteDocument, options);
      }
export type RemoveFavouriteMutationHookResult = ReturnType<typeof useRemoveFavouriteMutation>;
export type RemoveFavouriteMutationResult = Apollo.MutationResult<RemoveFavouriteMutation>;
export type RemoveFavouriteMutationOptions = Apollo.BaseMutationOptions<RemoveFavouriteMutation, RemoveFavouriteMutationVariables>;
export const AddPhotoToAnnouncementDocument = gql`
    mutation AddPhotoToAnnouncement($data: CreatePhotoInput!) {
  addPhotoToAnnouncement(data: $data)
}
    `;
export type AddPhotoToAnnouncementMutationFn = Apollo.MutationFunction<AddPhotoToAnnouncementMutation, AddPhotoToAnnouncementMutationVariables>;

/**
 * __useAddPhotoToAnnouncementMutation__
 *
 * To run a mutation, you first call `useAddPhotoToAnnouncementMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddPhotoToAnnouncementMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addPhotoToAnnouncementMutation, { data, loading, error }] = useAddPhotoToAnnouncementMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useAddPhotoToAnnouncementMutation(baseOptions?: Apollo.MutationHookOptions<AddPhotoToAnnouncementMutation, AddPhotoToAnnouncementMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddPhotoToAnnouncementMutation, AddPhotoToAnnouncementMutationVariables>(AddPhotoToAnnouncementDocument, options);
      }
export type AddPhotoToAnnouncementMutationHookResult = ReturnType<typeof useAddPhotoToAnnouncementMutation>;
export type AddPhotoToAnnouncementMutationResult = Apollo.MutationResult<AddPhotoToAnnouncementMutation>;
export type AddPhotoToAnnouncementMutationOptions = Apollo.BaseMutationOptions<AddPhotoToAnnouncementMutation, AddPhotoToAnnouncementMutationVariables>;
export const DeletePhotoDocument = gql`
    mutation DeletePhoto($id: String!) {
  deletePhoto(id: $id)
}
    `;
export type DeletePhotoMutationFn = Apollo.MutationFunction<DeletePhotoMutation, DeletePhotoMutationVariables>;

/**
 * __useDeletePhotoMutation__
 *
 * To run a mutation, you first call `useDeletePhotoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePhotoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePhotoMutation, { data, loading, error }] = useDeletePhotoMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeletePhotoMutation(baseOptions?: Apollo.MutationHookOptions<DeletePhotoMutation, DeletePhotoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePhotoMutation, DeletePhotoMutationVariables>(DeletePhotoDocument, options);
      }
export type DeletePhotoMutationHookResult = ReturnType<typeof useDeletePhotoMutation>;
export type DeletePhotoMutationResult = Apollo.MutationResult<DeletePhotoMutation>;
export type DeletePhotoMutationOptions = Apollo.BaseMutationOptions<DeletePhotoMutation, DeletePhotoMutationVariables>;
export const UpdatePhotosDocument = gql`
    mutation updatePhotos($deletePhotoIds: [String!]!, $newPhotos: [CreatePhotoInput!]!) {
  updatePhotos(deletePhotoIds: $deletePhotoIds, newPhotos: $newPhotos)
}
    `;
export type UpdatePhotosMutationFn = Apollo.MutationFunction<UpdatePhotosMutation, UpdatePhotosMutationVariables>;

/**
 * __useUpdatePhotosMutation__
 *
 * To run a mutation, you first call `useUpdatePhotosMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePhotosMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePhotosMutation, { data, loading, error }] = useUpdatePhotosMutation({
 *   variables: {
 *      deletePhotoIds: // value for 'deletePhotoIds'
 *      newPhotos: // value for 'newPhotos'
 *   },
 * });
 */
export function useUpdatePhotosMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePhotosMutation, UpdatePhotosMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePhotosMutation, UpdatePhotosMutationVariables>(UpdatePhotosDocument, options);
      }
export type UpdatePhotosMutationHookResult = ReturnType<typeof useUpdatePhotosMutation>;
export type UpdatePhotosMutationResult = Apollo.MutationResult<UpdatePhotosMutation>;
export type UpdatePhotosMutationOptions = Apollo.BaseMutationOptions<UpdatePhotosMutation, UpdatePhotosMutationVariables>;
export const ChangeProfileAvatarDocument = gql`
    mutation ChangeProfileAvatar($avatar: Upload!) {
  changeProfileAvatar(avatar: $avatar)
}
    `;
export type ChangeProfileAvatarMutationFn = Apollo.MutationFunction<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;

/**
 * __useChangeProfileAvatarMutation__
 *
 * To run a mutation, you first call `useChangeProfileAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeProfileAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeProfileAvatarMutation, { data, loading, error }] = useChangeProfileAvatarMutation({
 *   variables: {
 *      avatar: // value for 'avatar'
 *   },
 * });
 */
export function useChangeProfileAvatarMutation(baseOptions?: Apollo.MutationHookOptions<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>(ChangeProfileAvatarDocument, options);
      }
export type ChangeProfileAvatarMutationHookResult = ReturnType<typeof useChangeProfileAvatarMutation>;
export type ChangeProfileAvatarMutationResult = Apollo.MutationResult<ChangeProfileAvatarMutation>;
export type ChangeProfileAvatarMutationOptions = Apollo.BaseMutationOptions<ChangeProfileAvatarMutation, ChangeProfileAvatarMutationVariables>;
export const ChangeEmailDocument = gql`
    mutation ChangeEmail($data: ChangeEmailInput!) {
  changeEmail(data: $data)
}
    `;
export type ChangeEmailMutationFn = Apollo.MutationFunction<ChangeEmailMutation, ChangeEmailMutationVariables>;

/**
 * __useChangeEmailMutation__
 *
 * To run a mutation, you first call `useChangeEmailMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeEmailMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeEmailMutation, { data, loading, error }] = useChangeEmailMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeEmailMutation(baseOptions?: Apollo.MutationHookOptions<ChangeEmailMutation, ChangeEmailMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeEmailMutation, ChangeEmailMutationVariables>(ChangeEmailDocument, options);
      }
export type ChangeEmailMutationHookResult = ReturnType<typeof useChangeEmailMutation>;
export type ChangeEmailMutationResult = Apollo.MutationResult<ChangeEmailMutation>;
export type ChangeEmailMutationOptions = Apollo.BaseMutationOptions<ChangeEmailMutation, ChangeEmailMutationVariables>;
export const ChangeDisplayNameDocument = gql`
    mutation ChangeDisplayName($data: ChangeDisplayNameInput!) {
  changeDisplayName(data: $data)
}
    `;
export type ChangeDisplayNameMutationFn = Apollo.MutationFunction<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>;

/**
 * __useChangeDisplayNameMutation__
 *
 * To run a mutation, you first call `useChangeDisplayNameMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangeDisplayNameMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changeDisplayNameMutation, { data, loading, error }] = useChangeDisplayNameMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangeDisplayNameMutation(baseOptions?: Apollo.MutationHookOptions<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>(ChangeDisplayNameDocument, options);
      }
export type ChangeDisplayNameMutationHookResult = ReturnType<typeof useChangeDisplayNameMutation>;
export type ChangeDisplayNameMutationResult = Apollo.MutationResult<ChangeDisplayNameMutation>;
export type ChangeDisplayNameMutationOptions = Apollo.BaseMutationOptions<ChangeDisplayNameMutation, ChangeDisplayNameMutationVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data)
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const ChangePhoneNumberDocument = gql`
    mutation ChangePhoneNumber($data: ChangePhoneNumberInput!) {
  changePhoneNumber(data: $data)
}
    `;
export type ChangePhoneNumberMutationFn = Apollo.MutationFunction<ChangePhoneNumberMutation, ChangePhoneNumberMutationVariables>;

/**
 * __useChangePhoneNumberMutation__
 *
 * To run a mutation, you first call `useChangePhoneNumberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePhoneNumberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePhoneNumberMutation, { data, loading, error }] = useChangePhoneNumberMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useChangePhoneNumberMutation(baseOptions?: Apollo.MutationHookOptions<ChangePhoneNumberMutation, ChangePhoneNumberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePhoneNumberMutation, ChangePhoneNumberMutationVariables>(ChangePhoneNumberDocument, options);
      }
export type ChangePhoneNumberMutationHookResult = ReturnType<typeof useChangePhoneNumberMutation>;
export type ChangePhoneNumberMutationResult = Apollo.MutationResult<ChangePhoneNumberMutation>;
export type ChangePhoneNumberMutationOptions = Apollo.BaseMutationOptions<ChangePhoneNumberMutation, ChangePhoneNumberMutationVariables>;
export const ClearSessionCokkieDocument = gql`
    mutation ClearSessionCokkie {
  clearSessionCookie
}
    `;
export type ClearSessionCokkieMutationFn = Apollo.MutationFunction<ClearSessionCokkieMutation, ClearSessionCokkieMutationVariables>;

/**
 * __useClearSessionCokkieMutation__
 *
 * To run a mutation, you first call `useClearSessionCokkieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearSessionCokkieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearSessionCokkieMutation, { data, loading, error }] = useClearSessionCokkieMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearSessionCokkieMutation(baseOptions?: Apollo.MutationHookOptions<ClearSessionCokkieMutation, ClearSessionCokkieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ClearSessionCokkieMutation, ClearSessionCokkieMutationVariables>(ClearSessionCokkieDocument, options);
      }
export type ClearSessionCokkieMutationHookResult = ReturnType<typeof useClearSessionCokkieMutation>;
export type ClearSessionCokkieMutationResult = Apollo.MutationResult<ClearSessionCokkieMutation>;
export type ClearSessionCokkieMutationOptions = Apollo.BaseMutationOptions<ClearSessionCokkieMutation, ClearSessionCokkieMutationVariables>;
export const CreateSocialLinkDocument = gql`
    mutation CreateSocialLink($data: SocialLinkInput!) {
  createSocialLink(data: $data)
}
    `;
export type CreateSocialLinkMutationFn = Apollo.MutationFunction<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;

/**
 * __useCreateSocialLinkMutation__
 *
 * To run a mutation, you first call `useCreateSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createSocialLinkMutation, { data, loading, error }] = useCreateSocialLinkMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateSocialLinkMutation(baseOptions?: Apollo.MutationHookOptions<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>(CreateSocialLinkDocument, options);
      }
export type CreateSocialLinkMutationHookResult = ReturnType<typeof useCreateSocialLinkMutation>;
export type CreateSocialLinkMutationResult = Apollo.MutationResult<CreateSocialLinkMutation>;
export type CreateSocialLinkMutationOptions = Apollo.BaseMutationOptions<CreateSocialLinkMutation, CreateSocialLinkMutationVariables>;
export const RemoveSessionDocument = gql`
    mutation RemoveSession($id: String!) {
  removeSession(id: $id)
}
    `;
export type RemoveSessionMutationFn = Apollo.MutationFunction<RemoveSessionMutation, RemoveSessionMutationVariables>;

/**
 * __useRemoveSessionMutation__
 *
 * To run a mutation, you first call `useRemoveSessionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSessionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSessionMutation, { data, loading, error }] = useRemoveSessionMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSessionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSessionMutation, RemoveSessionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSessionMutation, RemoveSessionMutationVariables>(RemoveSessionDocument, options);
      }
export type RemoveSessionMutationHookResult = ReturnType<typeof useRemoveSessionMutation>;
export type RemoveSessionMutationResult = Apollo.MutationResult<RemoveSessionMutation>;
export type RemoveSessionMutationOptions = Apollo.BaseMutationOptions<RemoveSessionMutation, RemoveSessionMutationVariables>;
export const RemoveSocialLinkDocument = gql`
    mutation RemoveSocialLink($id: String!) {
  removeSocialLink(id: $id)
}
    `;
export type RemoveSocialLinkMutationFn = Apollo.MutationFunction<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>;

/**
 * __useRemoveSocialLinkMutation__
 *
 * To run a mutation, you first call `useRemoveSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeSocialLinkMutation, { data, loading, error }] = useRemoveSocialLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRemoveSocialLinkMutation(baseOptions?: Apollo.MutationHookOptions<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>(RemoveSocialLinkDocument, options);
      }
export type RemoveSocialLinkMutationHookResult = ReturnType<typeof useRemoveSocialLinkMutation>;
export type RemoveSocialLinkMutationResult = Apollo.MutationResult<RemoveSocialLinkMutation>;
export type RemoveSocialLinkMutationOptions = Apollo.BaseMutationOptions<RemoveSocialLinkMutation, RemoveSocialLinkMutationVariables>;
export const ReorderSocialLinksDocument = gql`
    mutation ReorderSocialLinks($list: [SocialLinkOrderInput!]!) {
  reorderSocialLinks(list: $list)
}
    `;
export type ReorderSocialLinksMutationFn = Apollo.MutationFunction<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>;

/**
 * __useReorderSocialLinksMutation__
 *
 * To run a mutation, you first call `useReorderSocialLinksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useReorderSocialLinksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [reorderSocialLinksMutation, { data, loading, error }] = useReorderSocialLinksMutation({
 *   variables: {
 *      list: // value for 'list'
 *   },
 * });
 */
export function useReorderSocialLinksMutation(baseOptions?: Apollo.MutationHookOptions<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>(ReorderSocialLinksDocument, options);
      }
export type ReorderSocialLinksMutationHookResult = ReturnType<typeof useReorderSocialLinksMutation>;
export type ReorderSocialLinksMutationResult = Apollo.MutationResult<ReorderSocialLinksMutation>;
export type ReorderSocialLinksMutationOptions = Apollo.BaseMutationOptions<ReorderSocialLinksMutation, ReorderSocialLinksMutationVariables>;
export const UpdateSocialLinkDocument = gql`
    mutation UpdateSocialLink($id: String!, $data: SocialLinkInput!) {
  updateSocialLink(id: $id, data: $data)
}
    `;
export type UpdateSocialLinkMutationFn = Apollo.MutationFunction<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>;

/**
 * __useUpdateSocialLinkMutation__
 *
 * To run a mutation, you first call `useUpdateSocialLinkMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateSocialLinkMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateSocialLinkMutation, { data, loading, error }] = useUpdateSocialLinkMutation({
 *   variables: {
 *      id: // value for 'id'
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateSocialLinkMutation(baseOptions?: Apollo.MutationHookOptions<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>(UpdateSocialLinkDocument, options);
      }
export type UpdateSocialLinkMutationHookResult = ReturnType<typeof useUpdateSocialLinkMutation>;
export type UpdateSocialLinkMutationResult = Apollo.MutationResult<UpdateSocialLinkMutation>;
export type UpdateSocialLinkMutationOptions = Apollo.BaseMutationOptions<UpdateSocialLinkMutation, UpdateSocialLinkMutationVariables>;
export const FindMessageDocument = gql`
    query FindMessage($data: String!, $id: String!) {
  findMessage(content: $data, id: $id) {
    status
    senderId
    content
    id
  }
}
    `;

/**
 * __useFindMessageQuery__
 *
 * To run a query within a React component, call `useFindMessageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindMessageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindMessageQuery({
 *   variables: {
 *      data: // value for 'data'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindMessageQuery(baseOptions: Apollo.QueryHookOptions<FindMessageQuery, FindMessageQueryVariables> & ({ variables: FindMessageQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindMessageQuery, FindMessageQueryVariables>(FindMessageDocument, options);
      }
export function useFindMessageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindMessageQuery, FindMessageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindMessageQuery, FindMessageQueryVariables>(FindMessageDocument, options);
        }
export function useFindMessageSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindMessageQuery, FindMessageQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindMessageQuery, FindMessageQueryVariables>(FindMessageDocument, options);
        }
export type FindMessageQueryHookResult = ReturnType<typeof useFindMessageQuery>;
export type FindMessageLazyQueryHookResult = ReturnType<typeof useFindMessageLazyQuery>;
export type FindMessageSuspenseQueryHookResult = ReturnType<typeof useFindMessageSuspenseQuery>;
export type FindMessageQueryResult = Apollo.QueryResult<FindMessageQuery, FindMessageQueryVariables>;
export const GetMessagesDocument = gql`
    query getMessages($data: String!) {
  getMessages(chatId: $data) {
    id
    chatId
    senderId
    content
    sentAt
    isEdited
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables> & ({ variables: GetMessagesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export function useGetMessagesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesSuspenseQueryHookResult = ReturnType<typeof useGetMessagesSuspenseQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const FindAnnouncementsByFiltersDocument = gql`
    query FindAnnouncementsByFilters($filters: AnnouncementFiltersInput!) {
  findAnnouncementsByFilters(data: $filters) {
    id
    userId
    name
    price
    description
    condition
    status
    placementDate
    categoryId
  }
}
    `;

/**
 * __useFindAnnouncementsByFiltersQuery__
 *
 * To run a query within a React component, call `useFindAnnouncementsByFiltersQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAnnouncementsByFiltersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAnnouncementsByFiltersQuery({
 *   variables: {
 *      filters: // value for 'filters'
 *   },
 * });
 */
export function useFindAnnouncementsByFiltersQuery(baseOptions: Apollo.QueryHookOptions<FindAnnouncementsByFiltersQuery, FindAnnouncementsByFiltersQueryVariables> & ({ variables: FindAnnouncementsByFiltersQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAnnouncementsByFiltersQuery, FindAnnouncementsByFiltersQueryVariables>(FindAnnouncementsByFiltersDocument, options);
      }
export function useFindAnnouncementsByFiltersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAnnouncementsByFiltersQuery, FindAnnouncementsByFiltersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAnnouncementsByFiltersQuery, FindAnnouncementsByFiltersQueryVariables>(FindAnnouncementsByFiltersDocument, options);
        }
export function useFindAnnouncementsByFiltersSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAnnouncementsByFiltersQuery, FindAnnouncementsByFiltersQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAnnouncementsByFiltersQuery, FindAnnouncementsByFiltersQueryVariables>(FindAnnouncementsByFiltersDocument, options);
        }
export type FindAnnouncementsByFiltersQueryHookResult = ReturnType<typeof useFindAnnouncementsByFiltersQuery>;
export type FindAnnouncementsByFiltersLazyQueryHookResult = ReturnType<typeof useFindAnnouncementsByFiltersLazyQuery>;
export type FindAnnouncementsByFiltersSuspenseQueryHookResult = ReturnType<typeof useFindAnnouncementsByFiltersSuspenseQuery>;
export type FindAnnouncementsByFiltersQueryResult = Apollo.QueryResult<FindAnnouncementsByFiltersQuery, FindAnnouncementsByFiltersQueryVariables>;
export const FindAllAnnouncementsDocument = gql`
    query FindAllAnnouncements {
  findAllAnnouncements {
    id
    userId
    categoryId
    name
    price
    placementDate
    description
    status
    condition
  }
}
    `;

/**
 * __useFindAllAnnouncementsQuery__
 *
 * To run a query within a React component, call `useFindAllAnnouncementsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindAllAnnouncementsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindAllAnnouncementsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindAllAnnouncementsQuery(baseOptions?: Apollo.QueryHookOptions<FindAllAnnouncementsQuery, FindAllAnnouncementsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindAllAnnouncementsQuery, FindAllAnnouncementsQueryVariables>(FindAllAnnouncementsDocument, options);
      }
export function useFindAllAnnouncementsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindAllAnnouncementsQuery, FindAllAnnouncementsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindAllAnnouncementsQuery, FindAllAnnouncementsQueryVariables>(FindAllAnnouncementsDocument, options);
        }
export function useFindAllAnnouncementsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindAllAnnouncementsQuery, FindAllAnnouncementsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindAllAnnouncementsQuery, FindAllAnnouncementsQueryVariables>(FindAllAnnouncementsDocument, options);
        }
export type FindAllAnnouncementsQueryHookResult = ReturnType<typeof useFindAllAnnouncementsQuery>;
export type FindAllAnnouncementsLazyQueryHookResult = ReturnType<typeof useFindAllAnnouncementsLazyQuery>;
export type FindAllAnnouncementsSuspenseQueryHookResult = ReturnType<typeof useFindAllAnnouncementsSuspenseQuery>;
export type FindAllAnnouncementsQueryResult = Apollo.QueryResult<FindAllAnnouncementsQuery, FindAllAnnouncementsQueryVariables>;
export const GetAnnouncementDocument = gql`
    query GetAnnouncement($id: String!) {
  getAnnouncementById(id: $id) {
    id
    userId
    categoryId
    name
    price
    placementDate
    description
    status
    condition
  }
}
    `;

/**
 * __useGetAnnouncementQuery__
 *
 * To run a query within a React component, call `useGetAnnouncementQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnnouncementQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnnouncementQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAnnouncementQuery(baseOptions: Apollo.QueryHookOptions<GetAnnouncementQuery, GetAnnouncementQueryVariables> & ({ variables: GetAnnouncementQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnnouncementQuery, GetAnnouncementQueryVariables>(GetAnnouncementDocument, options);
      }
export function useGetAnnouncementLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnnouncementQuery, GetAnnouncementQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnnouncementQuery, GetAnnouncementQueryVariables>(GetAnnouncementDocument, options);
        }
export function useGetAnnouncementSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnnouncementQuery, GetAnnouncementQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnnouncementQuery, GetAnnouncementQueryVariables>(GetAnnouncementDocument, options);
        }
export type GetAnnouncementQueryHookResult = ReturnType<typeof useGetAnnouncementQuery>;
export type GetAnnouncementLazyQueryHookResult = ReturnType<typeof useGetAnnouncementLazyQuery>;
export type GetAnnouncementSuspenseQueryHookResult = ReturnType<typeof useGetAnnouncementSuspenseQuery>;
export type GetAnnouncementQueryResult = Apollo.QueryResult<GetAnnouncementQuery, GetAnnouncementQueryVariables>;
export const GetAnnouncementByProfileDocument = gql`
    query GetAnnouncementByProfile {
  getAnnouncementByProfile {
    id
    userId
    categoryId
    name
    price
    placementDate
    description
    status
    condition
  }
}
    `;

/**
 * __useGetAnnouncementByProfileQuery__
 *
 * To run a query within a React component, call `useGetAnnouncementByProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnnouncementByProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnnouncementByProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAnnouncementByProfileQuery(baseOptions?: Apollo.QueryHookOptions<GetAnnouncementByProfileQuery, GetAnnouncementByProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnnouncementByProfileQuery, GetAnnouncementByProfileQueryVariables>(GetAnnouncementByProfileDocument, options);
      }
export function useGetAnnouncementByProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnnouncementByProfileQuery, GetAnnouncementByProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnnouncementByProfileQuery, GetAnnouncementByProfileQueryVariables>(GetAnnouncementByProfileDocument, options);
        }
export function useGetAnnouncementByProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnnouncementByProfileQuery, GetAnnouncementByProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnnouncementByProfileQuery, GetAnnouncementByProfileQueryVariables>(GetAnnouncementByProfileDocument, options);
        }
export type GetAnnouncementByProfileQueryHookResult = ReturnType<typeof useGetAnnouncementByProfileQuery>;
export type GetAnnouncementByProfileLazyQueryHookResult = ReturnType<typeof useGetAnnouncementByProfileLazyQuery>;
export type GetAnnouncementByProfileSuspenseQueryHookResult = ReturnType<typeof useGetAnnouncementByProfileSuspenseQuery>;
export type GetAnnouncementByProfileQueryResult = Apollo.QueryResult<GetAnnouncementByProfileQuery, GetAnnouncementByProfileQueryVariables>;
export const GetAnnouncementsByCategoryDocument = gql`
    query GetAnnouncementsByCategory($id: String!) {
  getAnnouncementsByCategory(id: $id) {
    id
    name
    price
    placementDate
    description
    status
    condition
    categoryId
  }
}
    `;

/**
 * __useGetAnnouncementsByCategoryQuery__
 *
 * To run a query within a React component, call `useGetAnnouncementsByCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnnouncementsByCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnnouncementsByCategoryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAnnouncementsByCategoryQuery(baseOptions: Apollo.QueryHookOptions<GetAnnouncementsByCategoryQuery, GetAnnouncementsByCategoryQueryVariables> & ({ variables: GetAnnouncementsByCategoryQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnnouncementsByCategoryQuery, GetAnnouncementsByCategoryQueryVariables>(GetAnnouncementsByCategoryDocument, options);
      }
export function useGetAnnouncementsByCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnnouncementsByCategoryQuery, GetAnnouncementsByCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnnouncementsByCategoryQuery, GetAnnouncementsByCategoryQueryVariables>(GetAnnouncementsByCategoryDocument, options);
        }
export function useGetAnnouncementsByCategorySuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnnouncementsByCategoryQuery, GetAnnouncementsByCategoryQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnnouncementsByCategoryQuery, GetAnnouncementsByCategoryQueryVariables>(GetAnnouncementsByCategoryDocument, options);
        }
export type GetAnnouncementsByCategoryQueryHookResult = ReturnType<typeof useGetAnnouncementsByCategoryQuery>;
export type GetAnnouncementsByCategoryLazyQueryHookResult = ReturnType<typeof useGetAnnouncementsByCategoryLazyQuery>;
export type GetAnnouncementsByCategorySuspenseQueryHookResult = ReturnType<typeof useGetAnnouncementsByCategorySuspenseQuery>;
export type GetAnnouncementsByCategoryQueryResult = Apollo.QueryResult<GetAnnouncementsByCategoryQuery, GetAnnouncementsByCategoryQueryVariables>;
export const GetAnnouncementCharacteristicsDocument = gql`
    query GetAnnouncementCharacteristics($id: String!) {
  getAnnouncementCharacteristics(id: $id) {
    id
    value
    productId
    characteristicId
  }
}
    `;

/**
 * __useGetAnnouncementCharacteristicsQuery__
 *
 * To run a query within a React component, call `useGetAnnouncementCharacteristicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAnnouncementCharacteristicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAnnouncementCharacteristicsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAnnouncementCharacteristicsQuery(baseOptions: Apollo.QueryHookOptions<GetAnnouncementCharacteristicsQuery, GetAnnouncementCharacteristicsQueryVariables> & ({ variables: GetAnnouncementCharacteristicsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAnnouncementCharacteristicsQuery, GetAnnouncementCharacteristicsQueryVariables>(GetAnnouncementCharacteristicsDocument, options);
      }
export function useGetAnnouncementCharacteristicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAnnouncementCharacteristicsQuery, GetAnnouncementCharacteristicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAnnouncementCharacteristicsQuery, GetAnnouncementCharacteristicsQueryVariables>(GetAnnouncementCharacteristicsDocument, options);
        }
export function useGetAnnouncementCharacteristicsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetAnnouncementCharacteristicsQuery, GetAnnouncementCharacteristicsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetAnnouncementCharacteristicsQuery, GetAnnouncementCharacteristicsQueryVariables>(GetAnnouncementCharacteristicsDocument, options);
        }
export type GetAnnouncementCharacteristicsQueryHookResult = ReturnType<typeof useGetAnnouncementCharacteristicsQuery>;
export type GetAnnouncementCharacteristicsLazyQueryHookResult = ReturnType<typeof useGetAnnouncementCharacteristicsLazyQuery>;
export type GetAnnouncementCharacteristicsSuspenseQueryHookResult = ReturnType<typeof useGetAnnouncementCharacteristicsSuspenseQuery>;
export type GetAnnouncementCharacteristicsQueryResult = Apollo.QueryResult<GetAnnouncementCharacteristicsQuery, GetAnnouncementCharacteristicsQueryVariables>;
export const FindParentCategoriesDocument = gql`
    query FindParentCategories($id: String!) {
  findParentCategories(id: $id)
}
    `;

/**
 * __useFindParentCategoriesQuery__
 *
 * To run a query within a React component, call `useFindParentCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindParentCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindParentCategoriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindParentCategoriesQuery(baseOptions: Apollo.QueryHookOptions<FindParentCategoriesQuery, FindParentCategoriesQueryVariables> & ({ variables: FindParentCategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindParentCategoriesQuery, FindParentCategoriesQueryVariables>(FindParentCategoriesDocument, options);
      }
export function useFindParentCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindParentCategoriesQuery, FindParentCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindParentCategoriesQuery, FindParentCategoriesQueryVariables>(FindParentCategoriesDocument, options);
        }
export function useFindParentCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindParentCategoriesQuery, FindParentCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindParentCategoriesQuery, FindParentCategoriesQueryVariables>(FindParentCategoriesDocument, options);
        }
export type FindParentCategoriesQueryHookResult = ReturnType<typeof useFindParentCategoriesQuery>;
export type FindParentCategoriesLazyQueryHookResult = ReturnType<typeof useFindParentCategoriesLazyQuery>;
export type FindParentCategoriesSuspenseQueryHookResult = ReturnType<typeof useFindParentCategoriesSuspenseQuery>;
export type FindParentCategoriesQueryResult = Apollo.QueryResult<FindParentCategoriesQuery, FindParentCategoriesQueryVariables>;
export const FindPrewiewSubcategoriesDocument = gql`
    query FindPrewiewSubcategories($id: String!) {
  findPrewiewSubcategories(id: $id) {
    id
    name
    subcategories {
      id
      name
    }
  }
}
    `;

/**
 * __useFindPrewiewSubcategoriesQuery__
 *
 * To run a query within a React component, call `useFindPrewiewSubcategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindPrewiewSubcategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindPrewiewSubcategoriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindPrewiewSubcategoriesQuery(baseOptions: Apollo.QueryHookOptions<FindPrewiewSubcategoriesQuery, FindPrewiewSubcategoriesQueryVariables> & ({ variables: FindPrewiewSubcategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindPrewiewSubcategoriesQuery, FindPrewiewSubcategoriesQueryVariables>(FindPrewiewSubcategoriesDocument, options);
      }
export function useFindPrewiewSubcategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindPrewiewSubcategoriesQuery, FindPrewiewSubcategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindPrewiewSubcategoriesQuery, FindPrewiewSubcategoriesQueryVariables>(FindPrewiewSubcategoriesDocument, options);
        }
export function useFindPrewiewSubcategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindPrewiewSubcategoriesQuery, FindPrewiewSubcategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindPrewiewSubcategoriesQuery, FindPrewiewSubcategoriesQueryVariables>(FindPrewiewSubcategoriesDocument, options);
        }
export type FindPrewiewSubcategoriesQueryHookResult = ReturnType<typeof useFindPrewiewSubcategoriesQuery>;
export type FindPrewiewSubcategoriesLazyQueryHookResult = ReturnType<typeof useFindPrewiewSubcategoriesLazyQuery>;
export type FindPrewiewSubcategoriesSuspenseQueryHookResult = ReturnType<typeof useFindPrewiewSubcategoriesSuspenseQuery>;
export type FindPrewiewSubcategoriesQueryResult = Apollo.QueryResult<FindPrewiewSubcategoriesQuery, FindPrewiewSubcategoriesQueryVariables>;
export const GetCategoryByIdDocument = gql`
    query GetCategoryById($id: String!) {
  getCategoryById(id: $id) {
    id
    name
    parentId
  }
}
    `;

/**
 * __useGetCategoryByIdQuery__
 *
 * To run a query within a React component, call `useGetCategoryByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoryByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoryByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCategoryByIdQuery(baseOptions: Apollo.QueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables> & ({ variables: GetCategoryByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, options);
      }
export function useGetCategoryByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, options);
        }
export function useGetCategoryByIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>(GetCategoryByIdDocument, options);
        }
export type GetCategoryByIdQueryHookResult = ReturnType<typeof useGetCategoryByIdQuery>;
export type GetCategoryByIdLazyQueryHookResult = ReturnType<typeof useGetCategoryByIdLazyQuery>;
export type GetCategoryByIdSuspenseQueryHookResult = ReturnType<typeof useGetCategoryByIdSuspenseQuery>;
export type GetCategoryByIdQueryResult = Apollo.QueryResult<GetCategoryByIdQuery, GetCategoryByIdQueryVariables>;
export const GetMainCategoriesDocument = gql`
    query GetMainCategories {
  getMainCategories {
    id
    name
    parentId
  }
}
    `;

/**
 * __useGetMainCategoriesQuery__
 *
 * To run a query within a React component, call `useGetMainCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMainCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMainCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMainCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetMainCategoriesQuery, GetMainCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMainCategoriesQuery, GetMainCategoriesQueryVariables>(GetMainCategoriesDocument, options);
      }
export function useGetMainCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMainCategoriesQuery, GetMainCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMainCategoriesQuery, GetMainCategoriesQueryVariables>(GetMainCategoriesDocument, options);
        }
export function useGetMainCategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetMainCategoriesQuery, GetMainCategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMainCategoriesQuery, GetMainCategoriesQueryVariables>(GetMainCategoriesDocument, options);
        }
export type GetMainCategoriesQueryHookResult = ReturnType<typeof useGetMainCategoriesQuery>;
export type GetMainCategoriesLazyQueryHookResult = ReturnType<typeof useGetMainCategoriesLazyQuery>;
export type GetMainCategoriesSuspenseQueryHookResult = ReturnType<typeof useGetMainCategoriesSuspenseQuery>;
export type GetMainCategoriesQueryResult = Apollo.QueryResult<GetMainCategoriesQuery, GetMainCategoriesQueryVariables>;
export const GetSubcategoriesDocument = gql`
    query GetSubcategories($id: String!) {
  getSubcategories(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetSubcategoriesQuery__
 *
 * To run a query within a React component, call `useGetSubcategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubcategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubcategoriesQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetSubcategoriesQuery(baseOptions: Apollo.QueryHookOptions<GetSubcategoriesQuery, GetSubcategoriesQueryVariables> & ({ variables: GetSubcategoriesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubcategoriesQuery, GetSubcategoriesQueryVariables>(GetSubcategoriesDocument, options);
      }
export function useGetSubcategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubcategoriesQuery, GetSubcategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubcategoriesQuery, GetSubcategoriesQueryVariables>(GetSubcategoriesDocument, options);
        }
export function useGetSubcategoriesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetSubcategoriesQuery, GetSubcategoriesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetSubcategoriesQuery, GetSubcategoriesQueryVariables>(GetSubcategoriesDocument, options);
        }
export type GetSubcategoriesQueryHookResult = ReturnType<typeof useGetSubcategoriesQuery>;
export type GetSubcategoriesLazyQueryHookResult = ReturnType<typeof useGetSubcategoriesLazyQuery>;
export type GetSubcategoriesSuspenseQueryHookResult = ReturnType<typeof useGetSubcategoriesSuspenseQuery>;
export type GetSubcategoriesQueryResult = Apollo.QueryResult<GetSubcategoriesQuery, GetSubcategoriesQueryVariables>;
export const FindCharacteristicsDocument = gql`
    query FindCharacteristics($id: String!) {
  findCharacteristics(id: $id) {
    id
    name
    type
    categoryId
  }
}
    `;

/**
 * __useFindCharacteristicsQuery__
 *
 * To run a query within a React component, call `useFindCharacteristicsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCharacteristicsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCharacteristicsQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindCharacteristicsQuery(baseOptions: Apollo.QueryHookOptions<FindCharacteristicsQuery, FindCharacteristicsQueryVariables> & ({ variables: FindCharacteristicsQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCharacteristicsQuery, FindCharacteristicsQueryVariables>(FindCharacteristicsDocument, options);
      }
export function useFindCharacteristicsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCharacteristicsQuery, FindCharacteristicsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCharacteristicsQuery, FindCharacteristicsQueryVariables>(FindCharacteristicsDocument, options);
        }
export function useFindCharacteristicsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindCharacteristicsQuery, FindCharacteristicsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCharacteristicsQuery, FindCharacteristicsQueryVariables>(FindCharacteristicsDocument, options);
        }
export type FindCharacteristicsQueryHookResult = ReturnType<typeof useFindCharacteristicsQuery>;
export type FindCharacteristicsLazyQueryHookResult = ReturnType<typeof useFindCharacteristicsLazyQuery>;
export type FindCharacteristicsSuspenseQueryHookResult = ReturnType<typeof useFindCharacteristicsSuspenseQuery>;
export type FindCharacteristicsQueryResult = Apollo.QueryResult<FindCharacteristicsQuery, FindCharacteristicsQueryVariables>;
export const GetChatsDocument = gql`
    query GetChats {
  getChats {
    createdAt
    lastMessage
    user_1 {
      displayName
    }
    user_2 {
      displayName
    }
    announcement {
      name
      price
      description
    }
  }
}
    `;

/**
 * __useGetChatsQuery__
 *
 * To run a query within a React component, call `useGetChatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetChatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetChatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetChatsQuery(baseOptions?: Apollo.QueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
      }
export function useGetChatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
        }
export function useGetChatsSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetChatsQuery, GetChatsQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetChatsQuery, GetChatsQueryVariables>(GetChatsDocument, options);
        }
export type GetChatsQueryHookResult = ReturnType<typeof useGetChatsQuery>;
export type GetChatsLazyQueryHookResult = ReturnType<typeof useGetChatsLazyQuery>;
export type GetChatsSuspenseQueryHookResult = ReturnType<typeof useGetChatsSuspenseQuery>;
export type GetChatsQueryResult = Apollo.QueryResult<GetChatsQuery, GetChatsQueryVariables>;
export const CheckAnnouncementInFavouritesDocument = gql`
    query CheckAnnouncementInFavourites($adId: String!) {
  checkAnnouncementInFavourites(adId: $adId)
}
    `;

/**
 * __useCheckAnnouncementInFavouritesQuery__
 *
 * To run a query within a React component, call `useCheckAnnouncementInFavouritesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckAnnouncementInFavouritesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckAnnouncementInFavouritesQuery({
 *   variables: {
 *      adId: // value for 'adId'
 *   },
 * });
 */
export function useCheckAnnouncementInFavouritesQuery(baseOptions: Apollo.QueryHookOptions<CheckAnnouncementInFavouritesQuery, CheckAnnouncementInFavouritesQueryVariables> & ({ variables: CheckAnnouncementInFavouritesQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckAnnouncementInFavouritesQuery, CheckAnnouncementInFavouritesQueryVariables>(CheckAnnouncementInFavouritesDocument, options);
      }
export function useCheckAnnouncementInFavouritesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckAnnouncementInFavouritesQuery, CheckAnnouncementInFavouritesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckAnnouncementInFavouritesQuery, CheckAnnouncementInFavouritesQueryVariables>(CheckAnnouncementInFavouritesDocument, options);
        }
export function useCheckAnnouncementInFavouritesSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<CheckAnnouncementInFavouritesQuery, CheckAnnouncementInFavouritesQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<CheckAnnouncementInFavouritesQuery, CheckAnnouncementInFavouritesQueryVariables>(CheckAnnouncementInFavouritesDocument, options);
        }
export type CheckAnnouncementInFavouritesQueryHookResult = ReturnType<typeof useCheckAnnouncementInFavouritesQuery>;
export type CheckAnnouncementInFavouritesLazyQueryHookResult = ReturnType<typeof useCheckAnnouncementInFavouritesLazyQuery>;
export type CheckAnnouncementInFavouritesSuspenseQueryHookResult = ReturnType<typeof useCheckAnnouncementInFavouritesSuspenseQuery>;
export type CheckAnnouncementInFavouritesQueryResult = Apollo.QueryResult<CheckAnnouncementInFavouritesQuery, CheckAnnouncementInFavouritesQueryVariables>;
export const GetFavouritesByUserIdDocument = gql`
    query GetFavouritesByUserId {
  getFavouritesByUserId {
    id
    userId
    name
    price
    description
    placementDate
    status
    condition
    categoryId
  }
}
    `;

/**
 * __useGetFavouritesByUserIdQuery__
 *
 * To run a query within a React component, call `useGetFavouritesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFavouritesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFavouritesByUserIdQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetFavouritesByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetFavouritesByUserIdQuery, GetFavouritesByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetFavouritesByUserIdQuery, GetFavouritesByUserIdQueryVariables>(GetFavouritesByUserIdDocument, options);
      }
export function useGetFavouritesByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetFavouritesByUserIdQuery, GetFavouritesByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetFavouritesByUserIdQuery, GetFavouritesByUserIdQueryVariables>(GetFavouritesByUserIdDocument, options);
        }
export function useGetFavouritesByUserIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetFavouritesByUserIdQuery, GetFavouritesByUserIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetFavouritesByUserIdQuery, GetFavouritesByUserIdQueryVariables>(GetFavouritesByUserIdDocument, options);
        }
export type GetFavouritesByUserIdQueryHookResult = ReturnType<typeof useGetFavouritesByUserIdQuery>;
export type GetFavouritesByUserIdLazyQueryHookResult = ReturnType<typeof useGetFavouritesByUserIdLazyQuery>;
export type GetFavouritesByUserIdSuspenseQueryHookResult = ReturnType<typeof useGetFavouritesByUserIdSuspenseQuery>;
export type GetFavouritesByUserIdQueryResult = Apollo.QueryResult<GetFavouritesByUserIdQuery, GetFavouritesByUserIdQueryVariables>;
export const GetPhotosByAnnouncementIdDocument = gql`
    query GetPhotosByAnnouncementId($id: String!) {
  getPhotosByAnnouncementId(id: $id)
}
    `;

/**
 * __useGetPhotosByAnnouncementIdQuery__
 *
 * To run a query within a React component, call `useGetPhotosByAnnouncementIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPhotosByAnnouncementIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPhotosByAnnouncementIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPhotosByAnnouncementIdQuery(baseOptions: Apollo.QueryHookOptions<GetPhotosByAnnouncementIdQuery, GetPhotosByAnnouncementIdQueryVariables> & ({ variables: GetPhotosByAnnouncementIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPhotosByAnnouncementIdQuery, GetPhotosByAnnouncementIdQueryVariables>(GetPhotosByAnnouncementIdDocument, options);
      }
export function useGetPhotosByAnnouncementIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPhotosByAnnouncementIdQuery, GetPhotosByAnnouncementIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPhotosByAnnouncementIdQuery, GetPhotosByAnnouncementIdQueryVariables>(GetPhotosByAnnouncementIdDocument, options);
        }
export function useGetPhotosByAnnouncementIdSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<GetPhotosByAnnouncementIdQuery, GetPhotosByAnnouncementIdQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetPhotosByAnnouncementIdQuery, GetPhotosByAnnouncementIdQueryVariables>(GetPhotosByAnnouncementIdDocument, options);
        }
export type GetPhotosByAnnouncementIdQueryHookResult = ReturnType<typeof useGetPhotosByAnnouncementIdQuery>;
export type GetPhotosByAnnouncementIdLazyQueryHookResult = ReturnType<typeof useGetPhotosByAnnouncementIdLazyQuery>;
export type GetPhotosByAnnouncementIdSuspenseQueryHookResult = ReturnType<typeof useGetPhotosByAnnouncementIdSuspenseQuery>;
export type GetPhotosByAnnouncementIdQueryResult = Apollo.QueryResult<GetPhotosByAnnouncementIdQuery, GetPhotosByAnnouncementIdQueryVariables>;
export const FindProfileDocument = gql`
    query FindProfile {
  findProfile {
    id
    email
    phoneNumber
    typeProfile
    displayName
    avatar
    bio
    rating
    createdAt
  }
}
    `;

/**
 * __useFindProfileQuery__
 *
 * To run a query within a React component, call `useFindProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindProfileQuery(baseOptions?: Apollo.QueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
      }
export function useFindProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export function useFindProfileSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindProfileQuery, FindProfileQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindProfileQuery, FindProfileQueryVariables>(FindProfileDocument, options);
        }
export type FindProfileQueryHookResult = ReturnType<typeof useFindProfileQuery>;
export type FindProfileLazyQueryHookResult = ReturnType<typeof useFindProfileLazyQuery>;
export type FindProfileSuspenseQueryHookResult = ReturnType<typeof useFindProfileSuspenseQuery>;
export type FindProfileQueryResult = Apollo.QueryResult<FindProfileQuery, FindProfileQueryVariables>;
export const FindSessionByUserDocument = gql`
    query FindSessionByUser {
  findSessionsByUser {
    id
    createdAt
    metadata {
      location {
        city
        country
        latidute
        longitude
      }
      device {
        os
        browser
        type
      }
      ip
    }
  }
}
    `;

/**
 * __useFindSessionByUserQuery__
 *
 * To run a query within a React component, call `useFindSessionByUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSessionByUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSessionByUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSessionByUserQuery(baseOptions?: Apollo.QueryHookOptions<FindSessionByUserQuery, FindSessionByUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSessionByUserQuery, FindSessionByUserQueryVariables>(FindSessionByUserDocument, options);
      }
export function useFindSessionByUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSessionByUserQuery, FindSessionByUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSessionByUserQuery, FindSessionByUserQueryVariables>(FindSessionByUserDocument, options);
        }
export function useFindSessionByUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSessionByUserQuery, FindSessionByUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSessionByUserQuery, FindSessionByUserQueryVariables>(FindSessionByUserDocument, options);
        }
export type FindSessionByUserQueryHookResult = ReturnType<typeof useFindSessionByUserQuery>;
export type FindSessionByUserLazyQueryHookResult = ReturnType<typeof useFindSessionByUserLazyQuery>;
export type FindSessionByUserSuspenseQueryHookResult = ReturnType<typeof useFindSessionByUserSuspenseQuery>;
export type FindSessionByUserQueryResult = Apollo.QueryResult<FindSessionByUserQuery, FindSessionByUserQueryVariables>;
export const FindSocialLinksDocument = gql`
    query FindSocialLinks {
  findSocialLinks {
    id
    title
    url
    position
  }
}
    `;

/**
 * __useFindSocialLinksQuery__
 *
 * To run a query within a React component, call `useFindSocialLinksQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindSocialLinksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindSocialLinksQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindSocialLinksQuery(baseOptions?: Apollo.QueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
      }
export function useFindSocialLinksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
        }
export function useFindSocialLinksSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindSocialLinksQuery, FindSocialLinksQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindSocialLinksQuery, FindSocialLinksQueryVariables>(FindSocialLinksDocument, options);
        }
export type FindSocialLinksQueryHookResult = ReturnType<typeof useFindSocialLinksQuery>;
export type FindSocialLinksLazyQueryHookResult = ReturnType<typeof useFindSocialLinksLazyQuery>;
export type FindSocialLinksSuspenseQueryHookResult = ReturnType<typeof useFindSocialLinksSuspenseQuery>;
export type FindSocialLinksQueryResult = Apollo.QueryResult<FindSocialLinksQuery, FindSocialLinksQueryVariables>;
export const FindUserDocument = gql`
    query FindUser($id: String!) {
  findUser(id: $id) {
    id
    email
    phoneNumber
    typeProfile
    displayName
    avatar
    bio
    rating
    createdAt
  }
}
    `;

/**
 * __useFindUserQuery__
 *
 * To run a query within a React component, call `useFindUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindUserQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFindUserQuery(baseOptions: Apollo.QueryHookOptions<FindUserQuery, FindUserQueryVariables> & ({ variables: FindUserQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
      }
export function useFindUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export function useFindUserSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindUserQuery, FindUserQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindUserQuery, FindUserQueryVariables>(FindUserDocument, options);
        }
export type FindUserQueryHookResult = ReturnType<typeof useFindUserQuery>;
export type FindUserLazyQueryHookResult = ReturnType<typeof useFindUserLazyQuery>;
export type FindUserSuspenseQueryHookResult = ReturnType<typeof useFindUserSuspenseQuery>;
export type FindUserQueryResult = Apollo.QueryResult<FindUserQuery, FindUserQueryVariables>;
export const FindCurrentSessionDocument = gql`
    query FindCurrentSession {
  findCurrentSession {
    id
    createdAt
    metadata {
      location {
        city
        country
        latidute
        longitude
      }
      device {
        os
        browser
        type
      }
      ip
    }
  }
}
    `;

/**
 * __useFindCurrentSessionQuery__
 *
 * To run a query within a React component, call `useFindCurrentSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useFindCurrentSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFindCurrentSessionQuery({
 *   variables: {
 *   },
 * });
 */
export function useFindCurrentSessionQuery(baseOptions?: Apollo.QueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
      }
export function useFindCurrentSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export function useFindCurrentSessionSuspenseQuery(baseOptions?: Apollo.SkipToken | Apollo.SuspenseQueryHookOptions<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>) {
          const options = baseOptions === Apollo.skipToken ? baseOptions : {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>(FindCurrentSessionDocument, options);
        }
export type FindCurrentSessionQueryHookResult = ReturnType<typeof useFindCurrentSessionQuery>;
export type FindCurrentSessionLazyQueryHookResult = ReturnType<typeof useFindCurrentSessionLazyQuery>;
export type FindCurrentSessionSuspenseQueryHookResult = ReturnType<typeof useFindCurrentSessionSuspenseQuery>;
export type FindCurrentSessionQueryResult = Apollo.QueryResult<FindCurrentSessionQuery, FindCurrentSessionQueryVariables>;