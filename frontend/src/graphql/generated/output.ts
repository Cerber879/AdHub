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

export type AnnouncementModel = {
  __typename?: 'AnnouncementModel';
  announcementCharacteristic?: Maybe<Array<Scalars['String']['output']>>;
  categoryId: Scalars['Float']['output'];
  condition: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  favourites?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  photo?: Maybe<Array<Scalars['String']['output']>>;
  placementDate: Scalars['DateTime']['output'];
  price: Scalars['Float']['output'];
  review?: Maybe<Array<Scalars['String']['output']>>;
  status: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  userId: Scalars['String']['output'];
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
  addPhotoToAnnouncement: PhotoModel;
  changeEmail: Scalars['Boolean']['output'];
  changePassword: Scalars['Boolean']['output'];
  changeProfileAvatar: Scalars['Boolean']['output'];
  clearSessionCookie: Scalars['Boolean']['output'];
  createAnnouncement: Scalars['Boolean']['output'];
  createUser: Scalars['Boolean']['output'];
  deleteAnnouncement: Scalars['Boolean']['output'];
  deletePhoto: Scalars['Boolean']['output'];
  loginUser: UserModel;
  logoutUser: Scalars['Boolean']['output'];
  removeProfileAvatar: Scalars['Boolean']['output'];
  removeSession: Scalars['Boolean']['output'];
  updateAnnouncement: Scalars['Boolean']['output'];
  updatePhoto: PhotoModel;
};


export type MutationAddPhotoToAnnouncementArgs = {
  input: CreatePhotoInput;
};


export type MutationChangeEmailArgs = {
  data: ChangePhoneNumberInput;
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};


export type MutationChangeProfileAvatarArgs = {
  avatar: Scalars['Upload']['input'];
};


export type MutationCreateAnnouncementArgs = {
  data: CreateAnnouncementInput;
};


export type MutationCreateUserArgs = {
  data: CreateUserInput;
};


export type MutationDeleteAnnouncementArgs = {
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
  id: Scalars['String']['input'];
  input: UpdateAnnouncementInput;
};


export type MutationUpdatePhotoArgs = {
  id: Scalars['String']['input'];
  input: UpdatePhotoInput;
};

export type PhotoModel = {
  __typename?: 'PhotoModel';
  announcementID: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  name: Scalars['String']['output'];
  resolution: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  findCurrentSession: SessionModel;
  findProfile: UserModel;
  findSessionsByUser: Array<SessionModel>;
  getAnnouncementById: AnnouncementModel;
  getAnnouncementsByCategory: Array<AnnouncementModel>;
  getPhotosByAnnouncementID: Array<PhotoModel>;
};


export type QueryGetAnnouncementByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetAnnouncementsByCategoryArgs = {
  categoryId: Scalars['String']['input'];
};


export type QueryGetPhotosByAnnouncementIdArgs = {
  announcementID: Scalars['String']['input'];
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

export type UpdateAnnouncementInput = {
  categoryId?: InputMaybe<Scalars['String']['input']>;
  condition?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  status?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePhotoInput = {
  link?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  resolution?: InputMaybe<Scalars['String']['input']>;
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

export type CreateUserMutationVariables = Exact<{
  data: CreateUserInput;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: boolean };


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