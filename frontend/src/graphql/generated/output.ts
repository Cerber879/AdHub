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
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  favourites?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Array<Scalars['String']['output']>>;
  placementDate: Scalars['DateTime']['output'];
  price: Scalars['Float']['output'];
  review?: Maybe<Array<Scalars['String']['output']>>;
  status: AnnouncementStatus;
  updatedAt: Scalars['DateTime']['output'];
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

export type CreateAnnouncementInput = {
  categoryId: Scalars['String']['input'];
  condition: Scalars['String']['input'];
  description: Scalars['String']['input'];
  name: Scalars['String']['input'];
  placementDate: Scalars['DateTime']['input'];
  price: Scalars['Float']['input'];
  status: Scalars['String']['input'];
};

export type CreateCategoryInput = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type CreatePhotoInput = {
  announcementID: Scalars['String']['input'];
  link: Scalars['String']['input'];
  name: Scalars['String']['input'];
  resolution: Scalars['String']['input'];
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

export type Mutation = {
  __typename?: 'Mutation';
  addPhotoToAnnouncement: Scalars['Boolean']['output'];
  changeEmail: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  changePhoneNumber: Scalars['Boolean']['output'];
  changeProfileAvatar: Scalars['Boolean']['output'];
  clearSessionCookie: Scalars['Boolean']['output'];
  createAnnouncement: Scalars['Boolean']['output'];
  createCategory: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
  deleteAnnouncement: Scalars['Boolean']['output'];
  deleteCategory: Scalars['Boolean']['output'];
  deletePhoto: Scalars['Boolean']['output'];
  loginUser: UserModel;
  logoutUser: Scalars['Boolean']['output'];
  removeProfileAvatar: Scalars['Boolean']['output'];
  removeSession: Scalars['Boolean']['output'];
  updateAnnouncement: Scalars['Boolean']['output'];
  updateCategory: Scalars['Boolean']['output'];
  updatePhotos: Scalars['Boolean']['output'];
};


export type MutationAddPhotoToAnnouncementArgs = {
  data: CreatePhotoInput;
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


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteAnnouncementArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeleteCategoryArgs = {
  id: Scalars['String']['input'];
};


export type MutationDeletePhotoArgs = {
  id: Scalars['String']['input'];
};


export type MutationLoginUserArgs = {
  data: LoginInput;
};


export type MutationRemoveSessionArgs = {
  id: Scalars['String']['input'];
};


export type MutationUpdateAnnouncementArgs = {
  data: UpdateAnnouncementMixedInput;
};


export type MutationUpdateCategoryArgs = {
  data: UpdateCategoryMixedInput;
};


export type MutationUpdatePhotosArgs = {
  deletePhotoIds: Array<Scalars['String']['input']>;
  newPhotos: Array<CreatePhotoInput>;
};

export type PhotoModel = {
  __typename?: 'PhotoModel';
  announcementID: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  resolution: Scalars['String']['output'];
};

/** Состояние товара */
export enum ProductCondition {
  New = 'NEW',
  Refurbished = 'REFURBISHED',
  Used = 'USED'
}

export type Query = {
  __typename?: 'Query';
  findAllAnnouncements: Array<AnnouncementModel>;
  findAnnouncementsByFilters: Array<AnnouncementModel>;
  findCurrentSession: SessionModel;
  findParentCategories: Array<Scalars['String']['output']>;
  findPrewiewSubcategories: Array<SubCutegoryModel>;
  findProfile: UserModel;
  findSessionsByUser: Array<SessionModel>;
  findUser: UserModel;
  getAnnouncementById: AnnouncementModel;
  getAnnouncementByName: AnnouncementModel;
  getAnnouncementsByCategory: Array<AnnouncementModel>;
  getCategoryById: CategoryModel;
  getMainCategories: Array<CategoryModel>;
  getPhotosByAnnouncementID: Array<PhotoModel>;
  getSubcategories: Array<CategoryModel>;
};


export type QueryFindAnnouncementsByFiltersArgs = {
  data: AnnouncementFiltersInput;
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


export type QueryGetAnnouncementByNameArgs = {
  name: Scalars['String']['input'];
};


export type QueryGetAnnouncementsByCategoryArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetCategoryByIdArgs = {
  id: Scalars['String']['input'];
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

export type SubCutegoryModel = {
  __typename?: 'SubCutegoryModel';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  subcategories?: Maybe<Array<CategoryModel>>;
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

export type ChangeEmailMutationVariables = Exact<{
  data: ChangeEmailInput;
}>;


export type ChangeEmailMutation = { __typename?: 'Mutation', changeEmail: boolean };

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

export type RemoveSessionMutationVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type RemoveSessionMutation = { __typename?: 'Mutation', removeSession: boolean };

export type FindAnnouncementsByFiltersQueryVariables = Exact<{
  filters: AnnouncementFiltersInput;
}>;


export type FindAnnouncementsByFiltersQuery = { __typename?: 'Query', findAnnouncementsByFilters: Array<{ __typename?: 'AnnouncementModel', id: string, userId: string, name: string, price: number, description: string, condition: ProductCondition, status: AnnouncementStatus, placementDate: any, categoryId: string }> };

export type FindAllAnnouncementsQueryVariables = Exact<{ [key: string]: never; }>;


export type FindAllAnnouncementsQuery = { __typename?: 'Query', findAllAnnouncements: Array<{ __typename?: 'AnnouncementModel', id: string, userId: string, categoryId: string, name: string, price: number, placementDate: any, description: string, status: AnnouncementStatus, condition: ProductCondition, createdAt: any, updatedAt: any }> };

export type GetAnnouncementQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAnnouncementQuery = { __typename?: 'Query', getAnnouncementById: { __typename?: 'AnnouncementModel', id: string, userId: string, categoryId: string, name: string, price: number, placementDate: any, description: string, status: AnnouncementStatus, condition: ProductCondition } };

export type GetAnnouncementsByCategoryQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetAnnouncementsByCategoryQuery = { __typename?: 'Query', getAnnouncementsByCategory: Array<{ __typename?: 'AnnouncementModel', id: string, name: string, price: number, placementDate: any, description: string, status: AnnouncementStatus, condition: ProductCondition, categoryId: string }> };

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

export type GetPhotosByAnnouncementIdQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type GetPhotosByAnnouncementIdQuery = { __typename?: 'Query', getPhotosByAnnouncementID: Array<{ __typename?: 'PhotoModel', id: string, name: string, resolution: string, link: string }> };

export type FindProfileQueryVariables = Exact<{ [key: string]: never; }>;


export type FindProfileQuery = { __typename?: 'Query', findProfile: { __typename?: 'UserModel', id: string, email?: string | null, phoneNumber?: string | null, typeProfile: string, displayName: string, avatar?: string | null, bio?: string | null, rating?: number | null, createdAt: any } };

export type FindSessionByUserQueryVariables = Exact<{ [key: string]: never; }>;


export type FindSessionByUserQuery = { __typename?: 'Query', findSessionsByUser: Array<{ __typename?: 'SessionModel', id: string, createdAt: string, metadata: { __typename?: 'SessionMetadataModel', ip: string, location: { __typename?: 'LocationModel', city: string, country: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', os: string, browser: string, type: string } } }> };

export type FindUserQueryVariables = Exact<{
  id: Scalars['String']['input'];
}>;


export type FindUserQuery = { __typename?: 'Query', findUser: { __typename?: 'UserModel', id: string, email?: string | null, phoneNumber?: string | null, typeProfile: string, displayName: string, avatar?: string | null, bio?: string | null, rating?: number | null, createdAt: any } };

export type FindCurrentSessionQueryVariables = Exact<{ [key: string]: never; }>;


export type FindCurrentSessionQuery = { __typename?: 'Query', findCurrentSession: { __typename?: 'SessionModel', id: string, createdAt: string, metadata: { __typename?: 'SessionMetadataModel', ip: string, location: { __typename?: 'LocationModel', city: string, country: string, latidute: number, longitude: number }, device: { __typename?: 'DeviceModel', os: string, browser: string, type: string } } } };


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
    createdAt
    updatedAt
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
export const GetPhotosByAnnouncementIdDocument = gql`
    query GetPhotosByAnnouncementID($id: String!) {
  getPhotosByAnnouncementID(id: $id) {
    id
    name
    resolution
    link
  }
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