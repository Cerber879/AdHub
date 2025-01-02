
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model Characteristic
 * 
 */
export type Characteristic = $Result.DefaultSelection<Prisma.$CharacteristicPayload>
/**
 * Model AnnouncementCharacteristic
 * 
 */
export type AnnouncementCharacteristic = $Result.DefaultSelection<Prisma.$AnnouncementCharacteristicPayload>
/**
 * Model Chat
 * 
 */
export type Chat = $Result.DefaultSelection<Prisma.$ChatPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model ChatMembers
 * 
 */
export type ChatMembers = $Result.DefaultSelection<Prisma.$ChatMembersPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Favourites
 * 
 */
export type Favourites = $Result.DefaultSelection<Prisma.$FavouritesPayload>
/**
 * Model Photo
 * 
 */
export type Photo = $Result.DefaultSelection<Prisma.$PhotoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AnnouncementStatus: {
  ACTIVE: 'ACTIVE',
  SOLD: 'SOLD',
  INACTIVE: 'INACTIVE',
  EXPIRED: 'EXPIRED'
};

export type AnnouncementStatus = (typeof AnnouncementStatus)[keyof typeof AnnouncementStatus]


export const ProductCondition: {
  NEW: 'NEW',
  USED: 'USED',
  REFURBISHED: 'REFURBISHED'
};

export type ProductCondition = (typeof ProductCondition)[keyof typeof ProductCondition]

}

export type AnnouncementStatus = $Enums.AnnouncementStatus

export const AnnouncementStatus: typeof $Enums.AnnouncementStatus

export type ProductCondition = $Enums.ProductCondition

export const ProductCondition: typeof $Enums.ProductCondition

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs>;

  /**
   * `prisma.characteristic`: Exposes CRUD operations for the **Characteristic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Characteristics
    * const characteristics = await prisma.characteristic.findMany()
    * ```
    */
  get characteristic(): Prisma.CharacteristicDelegate<ExtArgs>;

  /**
   * `prisma.announcementCharacteristic`: Exposes CRUD operations for the **AnnouncementCharacteristic** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AnnouncementCharacteristics
    * const announcementCharacteristics = await prisma.announcementCharacteristic.findMany()
    * ```
    */
  get announcementCharacteristic(): Prisma.AnnouncementCharacteristicDelegate<ExtArgs>;

  /**
   * `prisma.chat`: Exposes CRUD operations for the **Chat** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Chats
    * const chats = await prisma.chat.findMany()
    * ```
    */
  get chat(): Prisma.ChatDelegate<ExtArgs>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs>;

  /**
   * `prisma.chatMembers`: Exposes CRUD operations for the **ChatMembers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ChatMembers
    * const chatMembers = await prisma.chatMembers.findMany()
    * ```
    */
  get chatMembers(): Prisma.ChatMembersDelegate<ExtArgs>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs>;

  /**
   * `prisma.favourites`: Exposes CRUD operations for the **Favourites** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favourites
    * const favourites = await prisma.favourites.findMany()
    * ```
    */
  get favourites(): Prisma.FavouritesDelegate<ExtArgs>;

  /**
   * `prisma.photo`: Exposes CRUD operations for the **Photo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Photos
    * const photos = await prisma.photo.findMany()
    * ```
    */
  get photo(): Prisma.PhotoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.1.0
   * Query Engine version: 11f085a2012c0f4778414c8db2651556ee0ef959
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Category: 'Category',
    Announcement: 'Announcement',
    Characteristic: 'Characteristic',
    AnnouncementCharacteristic: 'AnnouncementCharacteristic',
    Chat: 'Chat',
    Message: 'Message',
    ChatMembers: 'ChatMembers',
    Review: 'Review',
    Favourites: 'Favourites',
    Photo: 'Photo'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "category" | "announcement" | "characteristic" | "announcementCharacteristic" | "chat" | "message" | "chatMembers" | "review" | "favourites" | "photo"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      Characteristic: {
        payload: Prisma.$CharacteristicPayload<ExtArgs>
        fields: Prisma.CharacteristicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacteristicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacteristicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          findFirst: {
            args: Prisma.CharacteristicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacteristicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          findMany: {
            args: Prisma.CharacteristicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>[]
          }
          create: {
            args: Prisma.CharacteristicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          createMany: {
            args: Prisma.CharacteristicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CharacteristicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>[]
          }
          delete: {
            args: Prisma.CharacteristicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          update: {
            args: Prisma.CharacteristicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          deleteMany: {
            args: Prisma.CharacteristicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CharacteristicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CharacteristicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CharacteristicPayload>
          }
          aggregate: {
            args: Prisma.CharacteristicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCharacteristic>
          }
          groupBy: {
            args: Prisma.CharacteristicGroupByArgs<ExtArgs>
            result: $Utils.Optional<CharacteristicGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacteristicCountArgs<ExtArgs>
            result: $Utils.Optional<CharacteristicCountAggregateOutputType> | number
          }
        }
      }
      AnnouncementCharacteristic: {
        payload: Prisma.$AnnouncementCharacteristicPayload<ExtArgs>
        fields: Prisma.AnnouncementCharacteristicFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementCharacteristicFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementCharacteristicFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementCharacteristicFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementCharacteristicFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload>
          }
          findMany: {
            args: Prisma.AnnouncementCharacteristicFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCharacteristicCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCharacteristicCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCharacteristicCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementCharacteristicDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload>
          }
          update: {
            args: Prisma.AnnouncementCharacteristicUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementCharacteristicDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementCharacteristicUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnnouncementCharacteristicUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementCharacteristicPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementCharacteristicAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncementCharacteristic>
          }
          groupBy: {
            args: Prisma.AnnouncementCharacteristicGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCharacteristicGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCharacteristicCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCharacteristicCountAggregateOutputType> | number
          }
        }
      }
      Chat: {
        payload: Prisma.$ChatPayload<ExtArgs>
        fields: Prisma.ChatFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findFirst: {
            args: Prisma.ChatFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          findMany: {
            args: Prisma.ChatFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          create: {
            args: Prisma.ChatCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          createMany: {
            args: Prisma.ChatCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>[]
          }
          delete: {
            args: Prisma.ChatDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          update: {
            args: Prisma.ChatUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          deleteMany: {
            args: Prisma.ChatDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatPayload>
          }
          aggregate: {
            args: Prisma.ChatAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChat>
          }
          groupBy: {
            args: Prisma.ChatGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatCountArgs<ExtArgs>
            result: $Utils.Optional<ChatCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      ChatMembers: {
        payload: Prisma.$ChatMembersPayload<ExtArgs>
        fields: Prisma.ChatMembersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChatMembersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChatMembersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload>
          }
          findFirst: {
            args: Prisma.ChatMembersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChatMembersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload>
          }
          findMany: {
            args: Prisma.ChatMembersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload>[]
          }
          create: {
            args: Prisma.ChatMembersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload>
          }
          createMany: {
            args: Prisma.ChatMembersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChatMembersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload>[]
          }
          delete: {
            args: Prisma.ChatMembersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload>
          }
          update: {
            args: Prisma.ChatMembersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload>
          }
          deleteMany: {
            args: Prisma.ChatMembersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChatMembersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChatMembersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChatMembersPayload>
          }
          aggregate: {
            args: Prisma.ChatMembersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChatMembers>
          }
          groupBy: {
            args: Prisma.ChatMembersGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChatMembersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChatMembersCountArgs<ExtArgs>
            result: $Utils.Optional<ChatMembersCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Favourites: {
        payload: Prisma.$FavouritesPayload<ExtArgs>
        fields: Prisma.FavouritesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavouritesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavouritesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          findFirst: {
            args: Prisma.FavouritesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavouritesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          findMany: {
            args: Prisma.FavouritesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>[]
          }
          create: {
            args: Prisma.FavouritesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          createMany: {
            args: Prisma.FavouritesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavouritesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>[]
          }
          delete: {
            args: Prisma.FavouritesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          update: {
            args: Prisma.FavouritesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          deleteMany: {
            args: Prisma.FavouritesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavouritesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FavouritesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavouritesPayload>
          }
          aggregate: {
            args: Prisma.FavouritesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavourites>
          }
          groupBy: {
            args: Prisma.FavouritesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavouritesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavouritesCountArgs<ExtArgs>
            result: $Utils.Optional<FavouritesCountAggregateOutputType> | number
          }
        }
      }
      Photo: {
        payload: Prisma.$PhotoPayload<ExtArgs>
        fields: Prisma.PhotoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PhotoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PhotoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findFirst: {
            args: Prisma.PhotoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PhotoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          findMany: {
            args: Prisma.PhotoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          create: {
            args: Prisma.PhotoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          createMany: {
            args: Prisma.PhotoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PhotoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>[]
          }
          delete: {
            args: Prisma.PhotoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          update: {
            args: Prisma.PhotoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          deleteMany: {
            args: Prisma.PhotoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PhotoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PhotoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PhotoPayload>
          }
          aggregate: {
            args: Prisma.PhotoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePhoto>
          }
          groupBy: {
            args: Prisma.PhotoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PhotoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PhotoCountArgs<ExtArgs>
            result: $Utils.Optional<PhotoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    announcement: number
    message: number
    chatMembers: number
    Review: number
    Favourites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | UserCountOutputTypeCountAnnouncementArgs
    message?: boolean | UserCountOutputTypeCountMessageArgs
    chatMembers?: boolean | UserCountOutputTypeCountChatMembersArgs
    Review?: boolean | UserCountOutputTypeCountReviewArgs
    Favourites?: boolean | UserCountOutputTypeCountFavouritesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChatMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMembersWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritesWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    children: number
    announcement: number
    characteristic: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | CategoryCountOutputTypeCountChildrenArgs
    announcement?: boolean | CategoryCountOutputTypeCountAnnouncementArgs
    characteristic?: boolean | CategoryCountOutputTypeCountCharacteristicArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountChildrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountAnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacteristicWhereInput
  }


  /**
   * Count Type AnnouncementCountOutputType
   */

  export type AnnouncementCountOutputType = {
    photo: number
    review: number
    favourites: number
    announcementCharacteristic: number
  }

  export type AnnouncementCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | AnnouncementCountOutputTypeCountPhotoArgs
    review?: boolean | AnnouncementCountOutputTypeCountReviewArgs
    favourites?: boolean | AnnouncementCountOutputTypeCountFavouritesArgs
    announcementCharacteristic?: boolean | AnnouncementCountOutputTypeCountAnnouncementCharacteristicArgs
  }

  // Custom InputTypes
  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCountOutputType
     */
    select?: AnnouncementCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountPhotoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountFavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritesWhereInput
  }

  /**
   * AnnouncementCountOutputType without action
   */
  export type AnnouncementCountOutputTypeCountAnnouncementCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementCharacteristicWhereInput
  }


  /**
   * Count Type CharacteristicCountOutputType
   */

  export type CharacteristicCountOutputType = {
    announcementCharacteristic: number
  }

  export type CharacteristicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcementCharacteristic?: boolean | CharacteristicCountOutputTypeCountAnnouncementCharacteristicArgs
  }

  // Custom InputTypes
  /**
   * CharacteristicCountOutputType without action
   */
  export type CharacteristicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacteristicCountOutputType
     */
    select?: CharacteristicCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CharacteristicCountOutputType without action
   */
  export type CharacteristicCountOutputTypeCountAnnouncementCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementCharacteristicWhereInput
  }


  /**
   * Count Type ChatCountOutputType
   */

  export type ChatCountOutputType = {
    messages: number
    chatMembers: number
  }

  export type ChatCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | ChatCountOutputTypeCountMessagesArgs
    chatMembers?: boolean | ChatCountOutputTypeCountChatMembersArgs
  }

  // Custom InputTypes
  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatCountOutputType
     */
    select?: ChatCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ChatCountOutputType without action
   */
  export type ChatCountOutputTypeCountChatMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMembersWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    rating: number | null
  }

  export type UserSumAggregateOutputType = {
    rating: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    displayName: string | null
    typeProfile: string | null
    rating: number | null
    avatar: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phoneNumber: string | null
    password: string | null
    displayName: string | null
    typeProfile: string | null
    rating: number | null
    avatar: string | null
    bio: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phoneNumber: number
    password: number
    displayName: number
    typeProfile: number
    rating: number
    avatar: number
    bio: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    rating?: true
  }

  export type UserSumAggregateInputType = {
    rating?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    displayName?: true
    typeProfile?: true
    rating?: true
    avatar?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    displayName?: true
    typeProfile?: true
    rating?: true
    avatar?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phoneNumber?: true
    password?: true
    displayName?: true
    typeProfile?: true
    rating?: true
    avatar?: true
    bio?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string | null
    phoneNumber: string | null
    password: string
    displayName: string
    typeProfile: string
    rating: number | null
    avatar: string | null
    bio: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    displayName?: boolean
    typeProfile?: boolean
    rating?: boolean
    avatar?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    announcement?: boolean | User$announcementArgs<ExtArgs>
    message?: boolean | User$messageArgs<ExtArgs>
    chatMembers?: boolean | User$chatMembersArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    Favourites?: boolean | User$FavouritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    displayName?: boolean
    typeProfile?: boolean
    rating?: boolean
    avatar?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phoneNumber?: boolean
    password?: boolean
    displayName?: boolean
    typeProfile?: boolean
    rating?: boolean
    avatar?: boolean
    bio?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | User$announcementArgs<ExtArgs>
    message?: boolean | User$messageArgs<ExtArgs>
    chatMembers?: boolean | User$chatMembersArgs<ExtArgs>
    Review?: boolean | User$ReviewArgs<ExtArgs>
    Favourites?: boolean | User$FavouritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>[]
      message: Prisma.$MessagePayload<ExtArgs>[]
      chatMembers: Prisma.$ChatMembersPayload<ExtArgs>[]
      Review: Prisma.$ReviewPayload<ExtArgs>[]
      Favourites: Prisma.$FavouritesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string | null
      phoneNumber: string | null
      password: string
      displayName: string
      typeProfile: string
      rating: number | null
      avatar: string | null
      bio: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends User$announcementArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany"> | Null>
    message<T extends User$messageArgs<ExtArgs> = {}>(args?: Subset<T, User$messageArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    chatMembers<T extends User$chatMembersArgs<ExtArgs> = {}>(args?: Subset<T, User$chatMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "findMany"> | Null>
    Review<T extends User$ReviewArgs<ExtArgs> = {}>(args?: Subset<T, User$ReviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    Favourites<T extends User$FavouritesArgs<ExtArgs> = {}>(args?: Subset<T, User$FavouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly typeProfile: FieldRef<"User", 'String'>
    readonly rating: FieldRef<"User", 'Float'>
    readonly avatar: FieldRef<"User", 'String'>
    readonly bio: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.announcement
   */
  export type User$announcementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * User.message
   */
  export type User$messageArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * User.chatMembers
   */
  export type User$chatMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    where?: ChatMembersWhereInput
    orderBy?: ChatMembersOrderByWithRelationInput | ChatMembersOrderByWithRelationInput[]
    cursor?: ChatMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMembersScalarFieldEnum | ChatMembersScalarFieldEnum[]
  }

  /**
   * User.Review
   */
  export type User$ReviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.Favourites
   */
  export type User$FavouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    where?: FavouritesWhereInput
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    cursor?: FavouritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    parent_id: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    parent_id: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    parent_id: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    parent_id?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    parent_id: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_id?: boolean
    children?: boolean | Category$childrenArgs<ExtArgs>
    announcement?: boolean | Category$announcementArgs<ExtArgs>
    characteristic?: boolean | Category$characteristicArgs<ExtArgs>
    parent?: boolean | Category$parentArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    parent_id?: boolean
    parent?: boolean | Category$parentArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    parent_id?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    children?: boolean | Category$childrenArgs<ExtArgs>
    announcement?: boolean | Category$announcementArgs<ExtArgs>
    characteristic?: boolean | Category$characteristicArgs<ExtArgs>
    parent?: boolean | Category$parentArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    parent?: boolean | Category$parentArgs<ExtArgs>
  }

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      children: Prisma.$CategoryPayload<ExtArgs>[]
      announcement: Prisma.$AnnouncementPayload<ExtArgs>[]
      characteristic: Prisma.$CharacteristicPayload<ExtArgs>[]
      parent: Prisma.$CategoryPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      parent_id: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    children<T extends Category$childrenArgs<ExtArgs> = {}>(args?: Subset<T, Category$childrenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany"> | Null>
    announcement<T extends Category$announcementArgs<ExtArgs> = {}>(args?: Subset<T, Category$announcementArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany"> | Null>
    characteristic<T extends Category$characteristicArgs<ExtArgs> = {}>(args?: Subset<T, Category$characteristicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findMany"> | Null>
    parent<T extends Category$parentArgs<ExtArgs> = {}>(args?: Subset<T, Category$parentArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly parent_id: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.children
   */
  export type Category$childrenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category.announcement
   */
  export type Category$announcementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Category.characteristic
   */
  export type Category$characteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    where?: CharacteristicWhereInput
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    cursor?: CharacteristicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CharacteristicScalarFieldEnum | CharacteristicScalarFieldEnum[]
  }

  /**
   * Category.parent
   */
  export type Category$parentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    price: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    price: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    description: string | null
    placementDate: Date | null
    status: $Enums.AnnouncementStatus | null
    condition: $Enums.ProductCondition | null
    userId: string | null
    categoryId: string | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: string | null
    name: string | null
    price: number | null
    description: string | null
    placementDate: Date | null
    status: $Enums.AnnouncementStatus | null
    condition: $Enums.ProductCondition | null
    userId: string | null
    categoryId: string | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    placementDate: number
    status: number
    condition: number
    userId: number
    categoryId: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    price?: true
  }

  export type AnnouncementSumAggregateInputType = {
    price?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    placementDate?: true
    status?: true
    condition?: true
    userId?: true
    categoryId?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    placementDate?: true
    status?: true
    condition?: true
    userId?: true
    categoryId?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    placementDate?: true
    status?: true
    condition?: true
    userId?: true
    categoryId?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: string
    name: string
    price: number
    description: string
    placementDate: Date
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
    categoryId: string
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    placementDate?: boolean
    status?: boolean
    condition?: boolean
    userId?: boolean
    categoryId?: boolean
    photo?: boolean | Announcement$photoArgs<ExtArgs>
    review?: boolean | Announcement$reviewArgs<ExtArgs>
    favourites?: boolean | Announcement$favouritesArgs<ExtArgs>
    announcementCharacteristic?: boolean | Announcement$announcementCharacteristicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    placementDate?: boolean
    status?: boolean
    condition?: boolean
    userId?: boolean
    categoryId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    placementDate?: boolean
    status?: boolean
    condition?: boolean
    userId?: boolean
    categoryId?: boolean
  }

  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    photo?: boolean | Announcement$photoArgs<ExtArgs>
    review?: boolean | Announcement$reviewArgs<ExtArgs>
    favourites?: boolean | Announcement$favouritesArgs<ExtArgs>
    announcementCharacteristic?: boolean | Announcement$announcementCharacteristicArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    _count?: boolean | AnnouncementCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      photo: Prisma.$PhotoPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs>[]
      favourites: Prisma.$FavouritesPayload<ExtArgs>[]
      announcementCharacteristic: Prisma.$AnnouncementCharacteristicPayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      price: number
      description: string
      placementDate: Date
      status: $Enums.AnnouncementStatus
      condition: $Enums.ProductCondition
      userId: string
      categoryId: string
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    photo<T extends Announcement$photoArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$photoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany"> | Null>
    review<T extends Announcement$reviewArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$reviewArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany"> | Null>
    favourites<T extends Announcement$favouritesArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$favouritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findMany"> | Null>
    announcementCharacteristic<T extends Announcement$announcementCharacteristicArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$announcementCharacteristicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "findMany"> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */ 
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'String'>
    readonly name: FieldRef<"Announcement", 'String'>
    readonly price: FieldRef<"Announcement", 'Float'>
    readonly description: FieldRef<"Announcement", 'String'>
    readonly placementDate: FieldRef<"Announcement", 'DateTime'>
    readonly status: FieldRef<"Announcement", 'AnnouncementStatus'>
    readonly condition: FieldRef<"Announcement", 'ProductCondition'>
    readonly userId: FieldRef<"Announcement", 'String'>
    readonly categoryId: FieldRef<"Announcement", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
  }

  /**
   * Announcement.photo
   */
  export type Announcement$photoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    cursor?: PhotoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Announcement.review
   */
  export type Announcement$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Announcement.favourites
   */
  export type Announcement$favouritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    where?: FavouritesWhereInput
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    cursor?: FavouritesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * Announcement.announcementCharacteristic
   */
  export type Announcement$announcementCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    where?: AnnouncementCharacteristicWhereInput
    orderBy?: AnnouncementCharacteristicOrderByWithRelationInput | AnnouncementCharacteristicOrderByWithRelationInput[]
    cursor?: AnnouncementCharacteristicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementCharacteristicScalarFieldEnum | AnnouncementCharacteristicScalarFieldEnum[]
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model Characteristic
   */

  export type AggregateCharacteristic = {
    _count: CharacteristicCountAggregateOutputType | null
    _min: CharacteristicMinAggregateOutputType | null
    _max: CharacteristicMaxAggregateOutputType | null
  }

  export type CharacteristicMinAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    categoryId: string | null
  }

  export type CharacteristicMaxAggregateOutputType = {
    id: string | null
    name: string | null
    type: string | null
    categoryId: string | null
  }

  export type CharacteristicCountAggregateOutputType = {
    id: number
    name: number
    type: number
    categoryId: number
    _all: number
  }


  export type CharacteristicMinAggregateInputType = {
    id?: true
    name?: true
    type?: true
    categoryId?: true
  }

  export type CharacteristicMaxAggregateInputType = {
    id?: true
    name?: true
    type?: true
    categoryId?: true
  }

  export type CharacteristicCountAggregateInputType = {
    id?: true
    name?: true
    type?: true
    categoryId?: true
    _all?: true
  }

  export type CharacteristicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characteristic to aggregate.
     */
    where?: CharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characteristics to fetch.
     */
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Characteristics
    **/
    _count?: true | CharacteristicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacteristicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacteristicMaxAggregateInputType
  }

  export type GetCharacteristicAggregateType<T extends CharacteristicAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacteristic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacteristic[P]>
      : GetScalarType<T[P], AggregateCharacteristic[P]>
  }




  export type CharacteristicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacteristicWhereInput
    orderBy?: CharacteristicOrderByWithAggregationInput | CharacteristicOrderByWithAggregationInput[]
    by: CharacteristicScalarFieldEnum[] | CharacteristicScalarFieldEnum
    having?: CharacteristicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacteristicCountAggregateInputType | true
    _min?: CharacteristicMinAggregateInputType
    _max?: CharacteristicMaxAggregateInputType
  }

  export type CharacteristicGroupByOutputType = {
    id: string
    name: string
    type: string
    categoryId: string
    _count: CharacteristicCountAggregateOutputType | null
    _min: CharacteristicMinAggregateOutputType | null
    _max: CharacteristicMaxAggregateOutputType | null
  }

  type GetCharacteristicGroupByPayload<T extends CharacteristicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacteristicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacteristicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacteristicGroupByOutputType[P]>
            : GetScalarType<T[P], CharacteristicGroupByOutputType[P]>
        }
      >
    >


  export type CharacteristicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    announcementCharacteristic?: boolean | Characteristic$announcementCharacteristicArgs<ExtArgs>
    _count?: boolean | CharacteristicCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characteristic"]>

  export type CharacteristicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    type?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["characteristic"]>

  export type CharacteristicSelectScalar = {
    id?: boolean
    name?: boolean
    type?: boolean
    categoryId?: boolean
  }

  export type CharacteristicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    announcementCharacteristic?: boolean | Characteristic$announcementCharacteristicArgs<ExtArgs>
    _count?: boolean | CharacteristicCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CharacteristicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $CharacteristicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Characteristic"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      announcementCharacteristic: Prisma.$AnnouncementCharacteristicPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      type: string
      categoryId: string
    }, ExtArgs["result"]["characteristic"]>
    composites: {}
  }

  type CharacteristicGetPayload<S extends boolean | null | undefined | CharacteristicDefaultArgs> = $Result.GetResult<Prisma.$CharacteristicPayload, S>

  type CharacteristicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacteristicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacteristicCountAggregateInputType | true
    }

  export interface CharacteristicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Characteristic'], meta: { name: 'Characteristic' } }
    /**
     * Find zero or one Characteristic that matches the filter.
     * @param {CharacteristicFindUniqueArgs} args - Arguments to find a Characteristic
     * @example
     * // Get one Characteristic
     * const characteristic = await prisma.characteristic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CharacteristicFindUniqueArgs>(args: SelectSubset<T, CharacteristicFindUniqueArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Characteristic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacteristicFindUniqueOrThrowArgs} args - Arguments to find a Characteristic
     * @example
     * // Get one Characteristic
     * const characteristic = await prisma.characteristic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CharacteristicFindUniqueOrThrowArgs>(args: SelectSubset<T, CharacteristicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Characteristic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicFindFirstArgs} args - Arguments to find a Characteristic
     * @example
     * // Get one Characteristic
     * const characteristic = await prisma.characteristic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CharacteristicFindFirstArgs>(args?: SelectSubset<T, CharacteristicFindFirstArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Characteristic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicFindFirstOrThrowArgs} args - Arguments to find a Characteristic
     * @example
     * // Get one Characteristic
     * const characteristic = await prisma.characteristic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CharacteristicFindFirstOrThrowArgs>(args?: SelectSubset<T, CharacteristicFindFirstOrThrowArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Characteristics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Characteristics
     * const characteristics = await prisma.characteristic.findMany()
     * 
     * // Get first 10 Characteristics
     * const characteristics = await prisma.characteristic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characteristicWithIdOnly = await prisma.characteristic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CharacteristicFindManyArgs>(args?: SelectSubset<T, CharacteristicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Characteristic.
     * @param {CharacteristicCreateArgs} args - Arguments to create a Characteristic.
     * @example
     * // Create one Characteristic
     * const Characteristic = await prisma.characteristic.create({
     *   data: {
     *     // ... data to create a Characteristic
     *   }
     * })
     * 
     */
    create<T extends CharacteristicCreateArgs>(args: SelectSubset<T, CharacteristicCreateArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Characteristics.
     * @param {CharacteristicCreateManyArgs} args - Arguments to create many Characteristics.
     * @example
     * // Create many Characteristics
     * const characteristic = await prisma.characteristic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CharacteristicCreateManyArgs>(args?: SelectSubset<T, CharacteristicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Characteristics and returns the data saved in the database.
     * @param {CharacteristicCreateManyAndReturnArgs} args - Arguments to create many Characteristics.
     * @example
     * // Create many Characteristics
     * const characteristic = await prisma.characteristic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Characteristics and only return the `id`
     * const characteristicWithIdOnly = await prisma.characteristic.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CharacteristicCreateManyAndReturnArgs>(args?: SelectSubset<T, CharacteristicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Characteristic.
     * @param {CharacteristicDeleteArgs} args - Arguments to delete one Characteristic.
     * @example
     * // Delete one Characteristic
     * const Characteristic = await prisma.characteristic.delete({
     *   where: {
     *     // ... filter to delete one Characteristic
     *   }
     * })
     * 
     */
    delete<T extends CharacteristicDeleteArgs>(args: SelectSubset<T, CharacteristicDeleteArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Characteristic.
     * @param {CharacteristicUpdateArgs} args - Arguments to update one Characteristic.
     * @example
     * // Update one Characteristic
     * const characteristic = await prisma.characteristic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CharacteristicUpdateArgs>(args: SelectSubset<T, CharacteristicUpdateArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Characteristics.
     * @param {CharacteristicDeleteManyArgs} args - Arguments to filter Characteristics to delete.
     * @example
     * // Delete a few Characteristics
     * const { count } = await prisma.characteristic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CharacteristicDeleteManyArgs>(args?: SelectSubset<T, CharacteristicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Characteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Characteristics
     * const characteristic = await prisma.characteristic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CharacteristicUpdateManyArgs>(args: SelectSubset<T, CharacteristicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Characteristic.
     * @param {CharacteristicUpsertArgs} args - Arguments to update or create a Characteristic.
     * @example
     * // Update or create a Characteristic
     * const characteristic = await prisma.characteristic.upsert({
     *   create: {
     *     // ... data to create a Characteristic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Characteristic we want to update
     *   }
     * })
     */
    upsert<T extends CharacteristicUpsertArgs>(args: SelectSubset<T, CharacteristicUpsertArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Characteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicCountArgs} args - Arguments to filter Characteristics to count.
     * @example
     * // Count the number of Characteristics
     * const count = await prisma.characteristic.count({
     *   where: {
     *     // ... the filter for the Characteristics we want to count
     *   }
     * })
    **/
    count<T extends CharacteristicCountArgs>(
      args?: Subset<T, CharacteristicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacteristicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Characteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacteristicAggregateArgs>(args: Subset<T, CharacteristicAggregateArgs>): Prisma.PrismaPromise<GetCharacteristicAggregateType<T>>

    /**
     * Group by Characteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacteristicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacteristicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacteristicGroupByArgs['orderBy'] }
        : { orderBy?: CharacteristicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacteristicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacteristicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Characteristic model
   */
  readonly fields: CharacteristicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Characteristic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacteristicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    announcementCharacteristic<T extends Characteristic$announcementCharacteristicArgs<ExtArgs> = {}>(args?: Subset<T, Characteristic$announcementCharacteristicArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Characteristic model
   */ 
  interface CharacteristicFieldRefs {
    readonly id: FieldRef<"Characteristic", 'String'>
    readonly name: FieldRef<"Characteristic", 'String'>
    readonly type: FieldRef<"Characteristic", 'String'>
    readonly categoryId: FieldRef<"Characteristic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Characteristic findUnique
   */
  export type CharacteristicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristic to fetch.
     */
    where: CharacteristicWhereUniqueInput
  }

  /**
   * Characteristic findUniqueOrThrow
   */
  export type CharacteristicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristic to fetch.
     */
    where: CharacteristicWhereUniqueInput
  }

  /**
   * Characteristic findFirst
   */
  export type CharacteristicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristic to fetch.
     */
    where?: CharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characteristics to fetch.
     */
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characteristics.
     */
    cursor?: CharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characteristics.
     */
    distinct?: CharacteristicScalarFieldEnum | CharacteristicScalarFieldEnum[]
  }

  /**
   * Characteristic findFirstOrThrow
   */
  export type CharacteristicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristic to fetch.
     */
    where?: CharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characteristics to fetch.
     */
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Characteristics.
     */
    cursor?: CharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Characteristics.
     */
    distinct?: CharacteristicScalarFieldEnum | CharacteristicScalarFieldEnum[]
  }

  /**
   * Characteristic findMany
   */
  export type CharacteristicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which Characteristics to fetch.
     */
    where?: CharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Characteristics to fetch.
     */
    orderBy?: CharacteristicOrderByWithRelationInput | CharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Characteristics.
     */
    cursor?: CharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Characteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Characteristics.
     */
    skip?: number
    distinct?: CharacteristicScalarFieldEnum | CharacteristicScalarFieldEnum[]
  }

  /**
   * Characteristic create
   */
  export type CharacteristicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * The data needed to create a Characteristic.
     */
    data: XOR<CharacteristicCreateInput, CharacteristicUncheckedCreateInput>
  }

  /**
   * Characteristic createMany
   */
  export type CharacteristicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Characteristics.
     */
    data: CharacteristicCreateManyInput | CharacteristicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Characteristic createManyAndReturn
   */
  export type CharacteristicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Characteristics.
     */
    data: CharacteristicCreateManyInput | CharacteristicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Characteristic update
   */
  export type CharacteristicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * The data needed to update a Characteristic.
     */
    data: XOR<CharacteristicUpdateInput, CharacteristicUncheckedUpdateInput>
    /**
     * Choose, which Characteristic to update.
     */
    where: CharacteristicWhereUniqueInput
  }

  /**
   * Characteristic updateMany
   */
  export type CharacteristicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Characteristics.
     */
    data: XOR<CharacteristicUpdateManyMutationInput, CharacteristicUncheckedUpdateManyInput>
    /**
     * Filter which Characteristics to update
     */
    where?: CharacteristicWhereInput
  }

  /**
   * Characteristic upsert
   */
  export type CharacteristicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * The filter to search for the Characteristic to update in case it exists.
     */
    where: CharacteristicWhereUniqueInput
    /**
     * In case the Characteristic found by the `where` argument doesn't exist, create a new Characteristic with this data.
     */
    create: XOR<CharacteristicCreateInput, CharacteristicUncheckedCreateInput>
    /**
     * In case the Characteristic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacteristicUpdateInput, CharacteristicUncheckedUpdateInput>
  }

  /**
   * Characteristic delete
   */
  export type CharacteristicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
    /**
     * Filter which Characteristic to delete.
     */
    where: CharacteristicWhereUniqueInput
  }

  /**
   * Characteristic deleteMany
   */
  export type CharacteristicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Characteristics to delete
     */
    where?: CharacteristicWhereInput
  }

  /**
   * Characteristic.announcementCharacteristic
   */
  export type Characteristic$announcementCharacteristicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    where?: AnnouncementCharacteristicWhereInput
    orderBy?: AnnouncementCharacteristicOrderByWithRelationInput | AnnouncementCharacteristicOrderByWithRelationInput[]
    cursor?: AnnouncementCharacteristicWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementCharacteristicScalarFieldEnum | AnnouncementCharacteristicScalarFieldEnum[]
  }

  /**
   * Characteristic without action
   */
  export type CharacteristicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Characteristic
     */
    select?: CharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CharacteristicInclude<ExtArgs> | null
  }


  /**
   * Model AnnouncementCharacteristic
   */

  export type AggregateAnnouncementCharacteristic = {
    _count: AnnouncementCharacteristicCountAggregateOutputType | null
    _min: AnnouncementCharacteristicMinAggregateOutputType | null
    _max: AnnouncementCharacteristicMaxAggregateOutputType | null
  }

  export type AnnouncementCharacteristicMinAggregateOutputType = {
    id: string | null
    value: string | null
    productId: string | null
    characteristicId: string | null
  }

  export type AnnouncementCharacteristicMaxAggregateOutputType = {
    id: string | null
    value: string | null
    productId: string | null
    characteristicId: string | null
  }

  export type AnnouncementCharacteristicCountAggregateOutputType = {
    id: number
    value: number
    productId: number
    characteristicId: number
    _all: number
  }


  export type AnnouncementCharacteristicMinAggregateInputType = {
    id?: true
    value?: true
    productId?: true
    characteristicId?: true
  }

  export type AnnouncementCharacteristicMaxAggregateInputType = {
    id?: true
    value?: true
    productId?: true
    characteristicId?: true
  }

  export type AnnouncementCharacteristicCountAggregateInputType = {
    id?: true
    value?: true
    productId?: true
    characteristicId?: true
    _all?: true
  }

  export type AnnouncementCharacteristicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementCharacteristic to aggregate.
     */
    where?: AnnouncementCharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementCharacteristics to fetch.
     */
    orderBy?: AnnouncementCharacteristicOrderByWithRelationInput | AnnouncementCharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementCharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AnnouncementCharacteristics
    **/
    _count?: true | AnnouncementCharacteristicCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementCharacteristicMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementCharacteristicMaxAggregateInputType
  }

  export type GetAnnouncementCharacteristicAggregateType<T extends AnnouncementCharacteristicAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncementCharacteristic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncementCharacteristic[P]>
      : GetScalarType<T[P], AggregateAnnouncementCharacteristic[P]>
  }




  export type AnnouncementCharacteristicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementCharacteristicWhereInput
    orderBy?: AnnouncementCharacteristicOrderByWithAggregationInput | AnnouncementCharacteristicOrderByWithAggregationInput[]
    by: AnnouncementCharacteristicScalarFieldEnum[] | AnnouncementCharacteristicScalarFieldEnum
    having?: AnnouncementCharacteristicScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCharacteristicCountAggregateInputType | true
    _min?: AnnouncementCharacteristicMinAggregateInputType
    _max?: AnnouncementCharacteristicMaxAggregateInputType
  }

  export type AnnouncementCharacteristicGroupByOutputType = {
    id: string
    value: string
    productId: string
    characteristicId: string
    _count: AnnouncementCharacteristicCountAggregateOutputType | null
    _min: AnnouncementCharacteristicMinAggregateOutputType | null
    _max: AnnouncementCharacteristicMaxAggregateOutputType | null
  }

  type GetAnnouncementCharacteristicGroupByPayload<T extends AnnouncementCharacteristicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementCharacteristicGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementCharacteristicGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementCharacteristicGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementCharacteristicGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementCharacteristicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    productId?: boolean
    characteristicId?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    characteristic?: boolean | CharacteristicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementCharacteristic"]>

  export type AnnouncementCharacteristicSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    value?: boolean
    productId?: boolean
    characteristicId?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    characteristic?: boolean | CharacteristicDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcementCharacteristic"]>

  export type AnnouncementCharacteristicSelectScalar = {
    id?: boolean
    value?: boolean
    productId?: boolean
    characteristicId?: boolean
  }

  export type AnnouncementCharacteristicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    characteristic?: boolean | CharacteristicDefaultArgs<ExtArgs>
  }
  export type AnnouncementCharacteristicIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
    characteristic?: boolean | CharacteristicDefaultArgs<ExtArgs>
  }

  export type $AnnouncementCharacteristicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AnnouncementCharacteristic"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
      characteristic: Prisma.$CharacteristicPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      value: string
      productId: string
      characteristicId: string
    }, ExtArgs["result"]["announcementCharacteristic"]>
    composites: {}
  }

  type AnnouncementCharacteristicGetPayload<S extends boolean | null | undefined | AnnouncementCharacteristicDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementCharacteristicPayload, S>

  type AnnouncementCharacteristicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnnouncementCharacteristicFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnnouncementCharacteristicCountAggregateInputType | true
    }

  export interface AnnouncementCharacteristicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AnnouncementCharacteristic'], meta: { name: 'AnnouncementCharacteristic' } }
    /**
     * Find zero or one AnnouncementCharacteristic that matches the filter.
     * @param {AnnouncementCharacteristicFindUniqueArgs} args - Arguments to find a AnnouncementCharacteristic
     * @example
     * // Get one AnnouncementCharacteristic
     * const announcementCharacteristic = await prisma.announcementCharacteristic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementCharacteristicFindUniqueArgs>(args: SelectSubset<T, AnnouncementCharacteristicFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementCharacteristicClient<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AnnouncementCharacteristic that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnnouncementCharacteristicFindUniqueOrThrowArgs} args - Arguments to find a AnnouncementCharacteristic
     * @example
     * // Get one AnnouncementCharacteristic
     * const announcementCharacteristic = await prisma.announcementCharacteristic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementCharacteristicFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementCharacteristicFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementCharacteristicClient<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AnnouncementCharacteristic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCharacteristicFindFirstArgs} args - Arguments to find a AnnouncementCharacteristic
     * @example
     * // Get one AnnouncementCharacteristic
     * const announcementCharacteristic = await prisma.announcementCharacteristic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementCharacteristicFindFirstArgs>(args?: SelectSubset<T, AnnouncementCharacteristicFindFirstArgs<ExtArgs>>): Prisma__AnnouncementCharacteristicClient<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AnnouncementCharacteristic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCharacteristicFindFirstOrThrowArgs} args - Arguments to find a AnnouncementCharacteristic
     * @example
     * // Get one AnnouncementCharacteristic
     * const announcementCharacteristic = await prisma.announcementCharacteristic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementCharacteristicFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementCharacteristicFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementCharacteristicClient<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AnnouncementCharacteristics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCharacteristicFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AnnouncementCharacteristics
     * const announcementCharacteristics = await prisma.announcementCharacteristic.findMany()
     * 
     * // Get first 10 AnnouncementCharacteristics
     * const announcementCharacteristics = await prisma.announcementCharacteristic.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementCharacteristicWithIdOnly = await prisma.announcementCharacteristic.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementCharacteristicFindManyArgs>(args?: SelectSubset<T, AnnouncementCharacteristicFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AnnouncementCharacteristic.
     * @param {AnnouncementCharacteristicCreateArgs} args - Arguments to create a AnnouncementCharacteristic.
     * @example
     * // Create one AnnouncementCharacteristic
     * const AnnouncementCharacteristic = await prisma.announcementCharacteristic.create({
     *   data: {
     *     // ... data to create a AnnouncementCharacteristic
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCharacteristicCreateArgs>(args: SelectSubset<T, AnnouncementCharacteristicCreateArgs<ExtArgs>>): Prisma__AnnouncementCharacteristicClient<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AnnouncementCharacteristics.
     * @param {AnnouncementCharacteristicCreateManyArgs} args - Arguments to create many AnnouncementCharacteristics.
     * @example
     * // Create many AnnouncementCharacteristics
     * const announcementCharacteristic = await prisma.announcementCharacteristic.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCharacteristicCreateManyArgs>(args?: SelectSubset<T, AnnouncementCharacteristicCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AnnouncementCharacteristics and returns the data saved in the database.
     * @param {AnnouncementCharacteristicCreateManyAndReturnArgs} args - Arguments to create many AnnouncementCharacteristics.
     * @example
     * // Create many AnnouncementCharacteristics
     * const announcementCharacteristic = await prisma.announcementCharacteristic.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AnnouncementCharacteristics and only return the `id`
     * const announcementCharacteristicWithIdOnly = await prisma.announcementCharacteristic.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCharacteristicCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCharacteristicCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AnnouncementCharacteristic.
     * @param {AnnouncementCharacteristicDeleteArgs} args - Arguments to delete one AnnouncementCharacteristic.
     * @example
     * // Delete one AnnouncementCharacteristic
     * const AnnouncementCharacteristic = await prisma.announcementCharacteristic.delete({
     *   where: {
     *     // ... filter to delete one AnnouncementCharacteristic
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementCharacteristicDeleteArgs>(args: SelectSubset<T, AnnouncementCharacteristicDeleteArgs<ExtArgs>>): Prisma__AnnouncementCharacteristicClient<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AnnouncementCharacteristic.
     * @param {AnnouncementCharacteristicUpdateArgs} args - Arguments to update one AnnouncementCharacteristic.
     * @example
     * // Update one AnnouncementCharacteristic
     * const announcementCharacteristic = await prisma.announcementCharacteristic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementCharacteristicUpdateArgs>(args: SelectSubset<T, AnnouncementCharacteristicUpdateArgs<ExtArgs>>): Prisma__AnnouncementCharacteristicClient<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AnnouncementCharacteristics.
     * @param {AnnouncementCharacteristicDeleteManyArgs} args - Arguments to filter AnnouncementCharacteristics to delete.
     * @example
     * // Delete a few AnnouncementCharacteristics
     * const { count } = await prisma.announcementCharacteristic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementCharacteristicDeleteManyArgs>(args?: SelectSubset<T, AnnouncementCharacteristicDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AnnouncementCharacteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCharacteristicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AnnouncementCharacteristics
     * const announcementCharacteristic = await prisma.announcementCharacteristic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementCharacteristicUpdateManyArgs>(args: SelectSubset<T, AnnouncementCharacteristicUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AnnouncementCharacteristic.
     * @param {AnnouncementCharacteristicUpsertArgs} args - Arguments to update or create a AnnouncementCharacteristic.
     * @example
     * // Update or create a AnnouncementCharacteristic
     * const announcementCharacteristic = await prisma.announcementCharacteristic.upsert({
     *   create: {
     *     // ... data to create a AnnouncementCharacteristic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AnnouncementCharacteristic we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementCharacteristicUpsertArgs>(args: SelectSubset<T, AnnouncementCharacteristicUpsertArgs<ExtArgs>>): Prisma__AnnouncementCharacteristicClient<$Result.GetResult<Prisma.$AnnouncementCharacteristicPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AnnouncementCharacteristics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCharacteristicCountArgs} args - Arguments to filter AnnouncementCharacteristics to count.
     * @example
     * // Count the number of AnnouncementCharacteristics
     * const count = await prisma.announcementCharacteristic.count({
     *   where: {
     *     // ... the filter for the AnnouncementCharacteristics we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCharacteristicCountArgs>(
      args?: Subset<T, AnnouncementCharacteristicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCharacteristicCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AnnouncementCharacteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCharacteristicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementCharacteristicAggregateArgs>(args: Subset<T, AnnouncementCharacteristicAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementCharacteristicAggregateType<T>>

    /**
     * Group by AnnouncementCharacteristic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCharacteristicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementCharacteristicGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementCharacteristicGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementCharacteristicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementCharacteristicGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementCharacteristicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AnnouncementCharacteristic model
   */
  readonly fields: AnnouncementCharacteristicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AnnouncementCharacteristic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementCharacteristicClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    characteristic<T extends CharacteristicDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CharacteristicDefaultArgs<ExtArgs>>): Prisma__CharacteristicClient<$Result.GetResult<Prisma.$CharacteristicPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AnnouncementCharacteristic model
   */ 
  interface AnnouncementCharacteristicFieldRefs {
    readonly id: FieldRef<"AnnouncementCharacteristic", 'String'>
    readonly value: FieldRef<"AnnouncementCharacteristic", 'String'>
    readonly productId: FieldRef<"AnnouncementCharacteristic", 'String'>
    readonly characteristicId: FieldRef<"AnnouncementCharacteristic", 'String'>
  }
    

  // Custom InputTypes
  /**
   * AnnouncementCharacteristic findUnique
   */
  export type AnnouncementCharacteristicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementCharacteristic to fetch.
     */
    where: AnnouncementCharacteristicWhereUniqueInput
  }

  /**
   * AnnouncementCharacteristic findUniqueOrThrow
   */
  export type AnnouncementCharacteristicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementCharacteristic to fetch.
     */
    where: AnnouncementCharacteristicWhereUniqueInput
  }

  /**
   * AnnouncementCharacteristic findFirst
   */
  export type AnnouncementCharacteristicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementCharacteristic to fetch.
     */
    where?: AnnouncementCharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementCharacteristics to fetch.
     */
    orderBy?: AnnouncementCharacteristicOrderByWithRelationInput | AnnouncementCharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementCharacteristics.
     */
    cursor?: AnnouncementCharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementCharacteristics.
     */
    distinct?: AnnouncementCharacteristicScalarFieldEnum | AnnouncementCharacteristicScalarFieldEnum[]
  }

  /**
   * AnnouncementCharacteristic findFirstOrThrow
   */
  export type AnnouncementCharacteristicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementCharacteristic to fetch.
     */
    where?: AnnouncementCharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementCharacteristics to fetch.
     */
    orderBy?: AnnouncementCharacteristicOrderByWithRelationInput | AnnouncementCharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AnnouncementCharacteristics.
     */
    cursor?: AnnouncementCharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementCharacteristics.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AnnouncementCharacteristics.
     */
    distinct?: AnnouncementCharacteristicScalarFieldEnum | AnnouncementCharacteristicScalarFieldEnum[]
  }

  /**
   * AnnouncementCharacteristic findMany
   */
  export type AnnouncementCharacteristicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * Filter, which AnnouncementCharacteristics to fetch.
     */
    where?: AnnouncementCharacteristicWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AnnouncementCharacteristics to fetch.
     */
    orderBy?: AnnouncementCharacteristicOrderByWithRelationInput | AnnouncementCharacteristicOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AnnouncementCharacteristics.
     */
    cursor?: AnnouncementCharacteristicWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AnnouncementCharacteristics from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AnnouncementCharacteristics.
     */
    skip?: number
    distinct?: AnnouncementCharacteristicScalarFieldEnum | AnnouncementCharacteristicScalarFieldEnum[]
  }

  /**
   * AnnouncementCharacteristic create
   */
  export type AnnouncementCharacteristicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * The data needed to create a AnnouncementCharacteristic.
     */
    data: XOR<AnnouncementCharacteristicCreateInput, AnnouncementCharacteristicUncheckedCreateInput>
  }

  /**
   * AnnouncementCharacteristic createMany
   */
  export type AnnouncementCharacteristicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AnnouncementCharacteristics.
     */
    data: AnnouncementCharacteristicCreateManyInput | AnnouncementCharacteristicCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AnnouncementCharacteristic createManyAndReturn
   */
  export type AnnouncementCharacteristicCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AnnouncementCharacteristics.
     */
    data: AnnouncementCharacteristicCreateManyInput | AnnouncementCharacteristicCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AnnouncementCharacteristic update
   */
  export type AnnouncementCharacteristicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * The data needed to update a AnnouncementCharacteristic.
     */
    data: XOR<AnnouncementCharacteristicUpdateInput, AnnouncementCharacteristicUncheckedUpdateInput>
    /**
     * Choose, which AnnouncementCharacteristic to update.
     */
    where: AnnouncementCharacteristicWhereUniqueInput
  }

  /**
   * AnnouncementCharacteristic updateMany
   */
  export type AnnouncementCharacteristicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AnnouncementCharacteristics.
     */
    data: XOR<AnnouncementCharacteristicUpdateManyMutationInput, AnnouncementCharacteristicUncheckedUpdateManyInput>
    /**
     * Filter which AnnouncementCharacteristics to update
     */
    where?: AnnouncementCharacteristicWhereInput
  }

  /**
   * AnnouncementCharacteristic upsert
   */
  export type AnnouncementCharacteristicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * The filter to search for the AnnouncementCharacteristic to update in case it exists.
     */
    where: AnnouncementCharacteristicWhereUniqueInput
    /**
     * In case the AnnouncementCharacteristic found by the `where` argument doesn't exist, create a new AnnouncementCharacteristic with this data.
     */
    create: XOR<AnnouncementCharacteristicCreateInput, AnnouncementCharacteristicUncheckedCreateInput>
    /**
     * In case the AnnouncementCharacteristic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementCharacteristicUpdateInput, AnnouncementCharacteristicUncheckedUpdateInput>
  }

  /**
   * AnnouncementCharacteristic delete
   */
  export type AnnouncementCharacteristicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
    /**
     * Filter which AnnouncementCharacteristic to delete.
     */
    where: AnnouncementCharacteristicWhereUniqueInput
  }

  /**
   * AnnouncementCharacteristic deleteMany
   */
  export type AnnouncementCharacteristicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AnnouncementCharacteristics to delete
     */
    where?: AnnouncementCharacteristicWhereInput
  }

  /**
   * AnnouncementCharacteristic without action
   */
  export type AnnouncementCharacteristicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AnnouncementCharacteristic
     */
    select?: AnnouncementCharacteristicSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementCharacteristicInclude<ExtArgs> | null
  }


  /**
   * Model Chat
   */

  export type AggregateChat = {
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  export type ChatMinAggregateOutputType = {
    id: string | null
  }

  export type ChatMaxAggregateOutputType = {
    id: string | null
  }

  export type ChatCountAggregateOutputType = {
    id: number
    _all: number
  }


  export type ChatMinAggregateInputType = {
    id?: true
  }

  export type ChatMaxAggregateInputType = {
    id?: true
  }

  export type ChatCountAggregateInputType = {
    id?: true
    _all?: true
  }

  export type ChatAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chat to aggregate.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Chats
    **/
    _count?: true | ChatCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMaxAggregateInputType
  }

  export type GetChatAggregateType<T extends ChatAggregateArgs> = {
        [P in keyof T & keyof AggregateChat]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChat[P]>
      : GetScalarType<T[P], AggregateChat[P]>
  }




  export type ChatGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatWhereInput
    orderBy?: ChatOrderByWithAggregationInput | ChatOrderByWithAggregationInput[]
    by: ChatScalarFieldEnum[] | ChatScalarFieldEnum
    having?: ChatScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatCountAggregateInputType | true
    _min?: ChatMinAggregateInputType
    _max?: ChatMaxAggregateInputType
  }

  export type ChatGroupByOutputType = {
    id: string
    _count: ChatCountAggregateOutputType | null
    _min: ChatMinAggregateOutputType | null
    _max: ChatMaxAggregateOutputType | null
  }

  type GetChatGroupByPayload<T extends ChatGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatGroupByOutputType[P]>
            : GetScalarType<T[P], ChatGroupByOutputType[P]>
        }
      >
    >


  export type ChatSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    chatMembers?: boolean | Chat$chatMembersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
  }, ExtArgs["result"]["chat"]>

  export type ChatSelectScalar = {
    id?: boolean
  }

  export type ChatInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    messages?: boolean | Chat$messagesArgs<ExtArgs>
    chatMembers?: boolean | Chat$chatMembersArgs<ExtArgs>
    _count?: boolean | ChatCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChatIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ChatPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Chat"
    objects: {
      messages: Prisma.$MessagePayload<ExtArgs>[]
      chatMembers: Prisma.$ChatMembersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
    }, ExtArgs["result"]["chat"]>
    composites: {}
  }

  type ChatGetPayload<S extends boolean | null | undefined | ChatDefaultArgs> = $Result.GetResult<Prisma.$ChatPayload, S>

  type ChatCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatCountAggregateInputType | true
    }

  export interface ChatDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Chat'], meta: { name: 'Chat' } }
    /**
     * Find zero or one Chat that matches the filter.
     * @param {ChatFindUniqueArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatFindUniqueArgs>(args: SelectSubset<T, ChatFindUniqueArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Chat that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatFindUniqueOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Chat that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatFindFirstArgs>(args?: SelectSubset<T, ChatFindFirstArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Chat that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindFirstOrThrowArgs} args - Arguments to find a Chat
     * @example
     * // Get one Chat
     * const chat = await prisma.chat.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Chats that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Chats
     * const chats = await prisma.chat.findMany()
     * 
     * // Get first 10 Chats
     * const chats = await prisma.chat.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatWithIdOnly = await prisma.chat.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatFindManyArgs>(args?: SelectSubset<T, ChatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Chat.
     * @param {ChatCreateArgs} args - Arguments to create a Chat.
     * @example
     * // Create one Chat
     * const Chat = await prisma.chat.create({
     *   data: {
     *     // ... data to create a Chat
     *   }
     * })
     * 
     */
    create<T extends ChatCreateArgs>(args: SelectSubset<T, ChatCreateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Chats.
     * @param {ChatCreateManyArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatCreateManyArgs>(args?: SelectSubset<T, ChatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Chats and returns the data saved in the database.
     * @param {ChatCreateManyAndReturnArgs} args - Arguments to create many Chats.
     * @example
     * // Create many Chats
     * const chat = await prisma.chat.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Chats and only return the `id`
     * const chatWithIdOnly = await prisma.chat.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Chat.
     * @param {ChatDeleteArgs} args - Arguments to delete one Chat.
     * @example
     * // Delete one Chat
     * const Chat = await prisma.chat.delete({
     *   where: {
     *     // ... filter to delete one Chat
     *   }
     * })
     * 
     */
    delete<T extends ChatDeleteArgs>(args: SelectSubset<T, ChatDeleteArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Chat.
     * @param {ChatUpdateArgs} args - Arguments to update one Chat.
     * @example
     * // Update one Chat
     * const chat = await prisma.chat.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatUpdateArgs>(args: SelectSubset<T, ChatUpdateArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Chats.
     * @param {ChatDeleteManyArgs} args - Arguments to filter Chats to delete.
     * @example
     * // Delete a few Chats
     * const { count } = await prisma.chat.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatDeleteManyArgs>(args?: SelectSubset<T, ChatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Chats
     * const chat = await prisma.chat.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatUpdateManyArgs>(args: SelectSubset<T, ChatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Chat.
     * @param {ChatUpsertArgs} args - Arguments to update or create a Chat.
     * @example
     * // Update or create a Chat
     * const chat = await prisma.chat.upsert({
     *   create: {
     *     // ... data to create a Chat
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Chat we want to update
     *   }
     * })
     */
    upsert<T extends ChatUpsertArgs>(args: SelectSubset<T, ChatUpsertArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Chats.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatCountArgs} args - Arguments to filter Chats to count.
     * @example
     * // Count the number of Chats
     * const count = await prisma.chat.count({
     *   where: {
     *     // ... the filter for the Chats we want to count
     *   }
     * })
    **/
    count<T extends ChatCountArgs>(
      args?: Subset<T, ChatCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatAggregateArgs>(args: Subset<T, ChatAggregateArgs>): Prisma.PrismaPromise<GetChatAggregateType<T>>

    /**
     * Group by Chat.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatGroupByArgs['orderBy'] }
        : { orderBy?: ChatGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Chat model
   */
  readonly fields: ChatFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Chat.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    messages<T extends Chat$messagesArgs<ExtArgs> = {}>(args?: Subset<T, Chat$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany"> | Null>
    chatMembers<T extends Chat$chatMembersArgs<ExtArgs> = {}>(args?: Subset<T, Chat$chatMembersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Chat model
   */ 
  interface ChatFieldRefs {
    readonly id: FieldRef<"Chat", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Chat findUnique
   */
  export type ChatFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findUniqueOrThrow
   */
  export type ChatFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat findFirst
   */
  export type ChatFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findFirstOrThrow
   */
  export type ChatFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chat to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Chats.
     */
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat findMany
   */
  export type ChatFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter, which Chats to fetch.
     */
    where?: ChatWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Chats to fetch.
     */
    orderBy?: ChatOrderByWithRelationInput | ChatOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Chats.
     */
    cursor?: ChatWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Chats from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Chats.
     */
    skip?: number
    distinct?: ChatScalarFieldEnum | ChatScalarFieldEnum[]
  }

  /**
   * Chat create
   */
  export type ChatCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to create a Chat.
     */
    data?: XOR<ChatCreateInput, ChatUncheckedCreateInput>
  }

  /**
   * Chat createMany
   */
  export type ChatCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat createManyAndReturn
   */
  export type ChatCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Chats.
     */
    data: ChatCreateManyInput | ChatCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Chat update
   */
  export type ChatUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The data needed to update a Chat.
     */
    data: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
    /**
     * Choose, which Chat to update.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat updateMany
   */
  export type ChatUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Chats.
     */
    data: XOR<ChatUpdateManyMutationInput, ChatUncheckedUpdateManyInput>
    /**
     * Filter which Chats to update
     */
    where?: ChatWhereInput
  }

  /**
   * Chat upsert
   */
  export type ChatUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * The filter to search for the Chat to update in case it exists.
     */
    where: ChatWhereUniqueInput
    /**
     * In case the Chat found by the `where` argument doesn't exist, create a new Chat with this data.
     */
    create: XOR<ChatCreateInput, ChatUncheckedCreateInput>
    /**
     * In case the Chat was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatUpdateInput, ChatUncheckedUpdateInput>
  }

  /**
   * Chat delete
   */
  export type ChatDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
    /**
     * Filter which Chat to delete.
     */
    where: ChatWhereUniqueInput
  }

  /**
   * Chat deleteMany
   */
  export type ChatDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Chats to delete
     */
    where?: ChatWhereInput
  }

  /**
   * Chat.messages
   */
  export type Chat$messagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Chat.chatMembers
   */
  export type Chat$chatMembersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    where?: ChatMembersWhereInput
    orderBy?: ChatMembersOrderByWithRelationInput | ChatMembersOrderByWithRelationInput[]
    cursor?: ChatMembersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChatMembersScalarFieldEnum | ChatMembersScalarFieldEnum[]
  }

  /**
   * Chat without action
   */
  export type ChatDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Chat
     */
    select?: ChatSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageAvgAggregateOutputType = {
    Status: number | null
  }

  export type MessageSumAggregateOutputType = {
    Status: number | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    Content: string | null
    Status: number | null
    Date: Date | null
    userID: string | null
    chatID: string | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    Content: string | null
    Status: number | null
    Date: Date | null
    userID: string | null
    chatID: string | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    Content: number
    Status: number
    Date: number
    userID: number
    chatID: number
    _all: number
  }


  export type MessageAvgAggregateInputType = {
    Status?: true
  }

  export type MessageSumAggregateInputType = {
    Status?: true
  }

  export type MessageMinAggregateInputType = {
    id?: true
    Content?: true
    Status?: true
    Date?: true
    userID?: true
    chatID?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    Content?: true
    Status?: true
    Date?: true
    userID?: true
    chatID?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    Content?: true
    Status?: true
    Date?: true
    userID?: true
    chatID?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _avg?: MessageAvgAggregateInputType
    _sum?: MessageSumAggregateInputType
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    Content: string
    Status: number
    Date: Date
    userID: string
    chatID: string
    _count: MessageCountAggregateOutputType | null
    _avg: MessageAvgAggregateOutputType | null
    _sum: MessageSumAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Content?: boolean
    Status?: boolean
    Date?: boolean
    userID?: boolean
    chatID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    Content?: boolean
    Status?: boolean
    Date?: boolean
    userID?: boolean
    chatID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    Content?: boolean
    Status?: boolean
    Date?: boolean
    userID?: boolean
    chatID?: boolean
  }

  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      Content: string
      Status: number
      Date: Date
      userID: string
      chatID: string
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */ 
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly Content: FieldRef<"Message", 'String'>
    readonly Status: FieldRef<"Message", 'Int'>
    readonly Date: FieldRef<"Message", 'DateTime'>
    readonly userID: FieldRef<"Message", 'String'>
    readonly chatID: FieldRef<"Message", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Model ChatMembers
   */

  export type AggregateChatMembers = {
    _count: ChatMembersCountAggregateOutputType | null
    _min: ChatMembersMinAggregateOutputType | null
    _max: ChatMembersMaxAggregateOutputType | null
  }

  export type ChatMembersMinAggregateOutputType = {
    id: string | null
    chatID: string | null
    userID: string | null
  }

  export type ChatMembersMaxAggregateOutputType = {
    id: string | null
    chatID: string | null
    userID: string | null
  }

  export type ChatMembersCountAggregateOutputType = {
    id: number
    chatID: number
    userID: number
    _all: number
  }


  export type ChatMembersMinAggregateInputType = {
    id?: true
    chatID?: true
    userID?: true
  }

  export type ChatMembersMaxAggregateInputType = {
    id?: true
    chatID?: true
    userID?: true
  }

  export type ChatMembersCountAggregateInputType = {
    id?: true
    chatID?: true
    userID?: true
    _all?: true
  }

  export type ChatMembersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMembers to aggregate.
     */
    where?: ChatMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMembersOrderByWithRelationInput | ChatMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChatMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ChatMembers
    **/
    _count?: true | ChatMembersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChatMembersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChatMembersMaxAggregateInputType
  }

  export type GetChatMembersAggregateType<T extends ChatMembersAggregateArgs> = {
        [P in keyof T & keyof AggregateChatMembers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChatMembers[P]>
      : GetScalarType<T[P], AggregateChatMembers[P]>
  }




  export type ChatMembersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChatMembersWhereInput
    orderBy?: ChatMembersOrderByWithAggregationInput | ChatMembersOrderByWithAggregationInput[]
    by: ChatMembersScalarFieldEnum[] | ChatMembersScalarFieldEnum
    having?: ChatMembersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChatMembersCountAggregateInputType | true
    _min?: ChatMembersMinAggregateInputType
    _max?: ChatMembersMaxAggregateInputType
  }

  export type ChatMembersGroupByOutputType = {
    id: string
    chatID: string
    userID: string
    _count: ChatMembersCountAggregateOutputType | null
    _min: ChatMembersMinAggregateOutputType | null
    _max: ChatMembersMaxAggregateOutputType | null
  }

  type GetChatMembersGroupByPayload<T extends ChatMembersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChatMembersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChatMembersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChatMembersGroupByOutputType[P]>
            : GetScalarType<T[P], ChatMembersGroupByOutputType[P]>
        }
      >
    >


  export type ChatMembersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatID?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMembers"]>

  export type ChatMembersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    chatID?: boolean
    userID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["chatMembers"]>

  export type ChatMembersSelectScalar = {
    id?: boolean
    chatID?: boolean
    userID?: boolean
  }

  export type ChatMembersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }
  export type ChatMembersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    chat?: boolean | ChatDefaultArgs<ExtArgs>
  }

  export type $ChatMembersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ChatMembers"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      chat: Prisma.$ChatPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      chatID: string
      userID: string
    }, ExtArgs["result"]["chatMembers"]>
    composites: {}
  }

  type ChatMembersGetPayload<S extends boolean | null | undefined | ChatMembersDefaultArgs> = $Result.GetResult<Prisma.$ChatMembersPayload, S>

  type ChatMembersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChatMembersFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChatMembersCountAggregateInputType | true
    }

  export interface ChatMembersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ChatMembers'], meta: { name: 'ChatMembers' } }
    /**
     * Find zero or one ChatMembers that matches the filter.
     * @param {ChatMembersFindUniqueArgs} args - Arguments to find a ChatMembers
     * @example
     * // Get one ChatMembers
     * const chatMembers = await prisma.chatMembers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChatMembersFindUniqueArgs>(args: SelectSubset<T, ChatMembersFindUniqueArgs<ExtArgs>>): Prisma__ChatMembersClient<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ChatMembers that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChatMembersFindUniqueOrThrowArgs} args - Arguments to find a ChatMembers
     * @example
     * // Get one ChatMembers
     * const chatMembers = await prisma.chatMembers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChatMembersFindUniqueOrThrowArgs>(args: SelectSubset<T, ChatMembersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChatMembersClient<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ChatMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMembersFindFirstArgs} args - Arguments to find a ChatMembers
     * @example
     * // Get one ChatMembers
     * const chatMembers = await prisma.chatMembers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChatMembersFindFirstArgs>(args?: SelectSubset<T, ChatMembersFindFirstArgs<ExtArgs>>): Prisma__ChatMembersClient<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ChatMembers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMembersFindFirstOrThrowArgs} args - Arguments to find a ChatMembers
     * @example
     * // Get one ChatMembers
     * const chatMembers = await prisma.chatMembers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChatMembersFindFirstOrThrowArgs>(args?: SelectSubset<T, ChatMembersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChatMembersClient<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ChatMembers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMembersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ChatMembers
     * const chatMembers = await prisma.chatMembers.findMany()
     * 
     * // Get first 10 ChatMembers
     * const chatMembers = await prisma.chatMembers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const chatMembersWithIdOnly = await prisma.chatMembers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChatMembersFindManyArgs>(args?: SelectSubset<T, ChatMembersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ChatMembers.
     * @param {ChatMembersCreateArgs} args - Arguments to create a ChatMembers.
     * @example
     * // Create one ChatMembers
     * const ChatMembers = await prisma.chatMembers.create({
     *   data: {
     *     // ... data to create a ChatMembers
     *   }
     * })
     * 
     */
    create<T extends ChatMembersCreateArgs>(args: SelectSubset<T, ChatMembersCreateArgs<ExtArgs>>): Prisma__ChatMembersClient<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ChatMembers.
     * @param {ChatMembersCreateManyArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMembers = await prisma.chatMembers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChatMembersCreateManyArgs>(args?: SelectSubset<T, ChatMembersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ChatMembers and returns the data saved in the database.
     * @param {ChatMembersCreateManyAndReturnArgs} args - Arguments to create many ChatMembers.
     * @example
     * // Create many ChatMembers
     * const chatMembers = await prisma.chatMembers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ChatMembers and only return the `id`
     * const chatMembersWithIdOnly = await prisma.chatMembers.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChatMembersCreateManyAndReturnArgs>(args?: SelectSubset<T, ChatMembersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ChatMembers.
     * @param {ChatMembersDeleteArgs} args - Arguments to delete one ChatMembers.
     * @example
     * // Delete one ChatMembers
     * const ChatMembers = await prisma.chatMembers.delete({
     *   where: {
     *     // ... filter to delete one ChatMembers
     *   }
     * })
     * 
     */
    delete<T extends ChatMembersDeleteArgs>(args: SelectSubset<T, ChatMembersDeleteArgs<ExtArgs>>): Prisma__ChatMembersClient<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ChatMembers.
     * @param {ChatMembersUpdateArgs} args - Arguments to update one ChatMembers.
     * @example
     * // Update one ChatMembers
     * const chatMembers = await prisma.chatMembers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChatMembersUpdateArgs>(args: SelectSubset<T, ChatMembersUpdateArgs<ExtArgs>>): Prisma__ChatMembersClient<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ChatMembers.
     * @param {ChatMembersDeleteManyArgs} args - Arguments to filter ChatMembers to delete.
     * @example
     * // Delete a few ChatMembers
     * const { count } = await prisma.chatMembers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChatMembersDeleteManyArgs>(args?: SelectSubset<T, ChatMembersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMembersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ChatMembers
     * const chatMembers = await prisma.chatMembers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChatMembersUpdateManyArgs>(args: SelectSubset<T, ChatMembersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ChatMembers.
     * @param {ChatMembersUpsertArgs} args - Arguments to update or create a ChatMembers.
     * @example
     * // Update or create a ChatMembers
     * const chatMembers = await prisma.chatMembers.upsert({
     *   create: {
     *     // ... data to create a ChatMembers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ChatMembers we want to update
     *   }
     * })
     */
    upsert<T extends ChatMembersUpsertArgs>(args: SelectSubset<T, ChatMembersUpsertArgs<ExtArgs>>): Prisma__ChatMembersClient<$Result.GetResult<Prisma.$ChatMembersPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMembersCountArgs} args - Arguments to filter ChatMembers to count.
     * @example
     * // Count the number of ChatMembers
     * const count = await prisma.chatMembers.count({
     *   where: {
     *     // ... the filter for the ChatMembers we want to count
     *   }
     * })
    **/
    count<T extends ChatMembersCountArgs>(
      args?: Subset<T, ChatMembersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChatMembersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMembersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChatMembersAggregateArgs>(args: Subset<T, ChatMembersAggregateArgs>): Prisma.PrismaPromise<GetChatMembersAggregateType<T>>

    /**
     * Group by ChatMembers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChatMembersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChatMembersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChatMembersGroupByArgs['orderBy'] }
        : { orderBy?: ChatMembersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChatMembersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChatMembersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ChatMembers model
   */
  readonly fields: ChatMembersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ChatMembers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChatMembersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    chat<T extends ChatDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChatDefaultArgs<ExtArgs>>): Prisma__ChatClient<$Result.GetResult<Prisma.$ChatPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ChatMembers model
   */ 
  interface ChatMembersFieldRefs {
    readonly id: FieldRef<"ChatMembers", 'String'>
    readonly chatID: FieldRef<"ChatMembers", 'String'>
    readonly userID: FieldRef<"ChatMembers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ChatMembers findUnique
   */
  export type ChatMembersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where: ChatMembersWhereUniqueInput
  }

  /**
   * ChatMembers findUniqueOrThrow
   */
  export type ChatMembersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where: ChatMembersWhereUniqueInput
  }

  /**
   * ChatMembers findFirst
   */
  export type ChatMembersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where?: ChatMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMembersOrderByWithRelationInput | ChatMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMembersScalarFieldEnum | ChatMembersScalarFieldEnum[]
  }

  /**
   * ChatMembers findFirstOrThrow
   */
  export type ChatMembersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where?: ChatMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMembersOrderByWithRelationInput | ChatMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ChatMembers.
     */
    cursor?: ChatMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ChatMembers.
     */
    distinct?: ChatMembersScalarFieldEnum | ChatMembersScalarFieldEnum[]
  }

  /**
   * ChatMembers findMany
   */
  export type ChatMembersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * Filter, which ChatMembers to fetch.
     */
    where?: ChatMembersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ChatMembers to fetch.
     */
    orderBy?: ChatMembersOrderByWithRelationInput | ChatMembersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ChatMembers.
     */
    cursor?: ChatMembersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ChatMembers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ChatMembers.
     */
    skip?: number
    distinct?: ChatMembersScalarFieldEnum | ChatMembersScalarFieldEnum[]
  }

  /**
   * ChatMembers create
   */
  export type ChatMembersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * The data needed to create a ChatMembers.
     */
    data: XOR<ChatMembersCreateInput, ChatMembersUncheckedCreateInput>
  }

  /**
   * ChatMembers createMany
   */
  export type ChatMembersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMembersCreateManyInput | ChatMembersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ChatMembers createManyAndReturn
   */
  export type ChatMembersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ChatMembers.
     */
    data: ChatMembersCreateManyInput | ChatMembersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ChatMembers update
   */
  export type ChatMembersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * The data needed to update a ChatMembers.
     */
    data: XOR<ChatMembersUpdateInput, ChatMembersUncheckedUpdateInput>
    /**
     * Choose, which ChatMembers to update.
     */
    where: ChatMembersWhereUniqueInput
  }

  /**
   * ChatMembers updateMany
   */
  export type ChatMembersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ChatMembers.
     */
    data: XOR<ChatMembersUpdateManyMutationInput, ChatMembersUncheckedUpdateManyInput>
    /**
     * Filter which ChatMembers to update
     */
    where?: ChatMembersWhereInput
  }

  /**
   * ChatMembers upsert
   */
  export type ChatMembersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * The filter to search for the ChatMembers to update in case it exists.
     */
    where: ChatMembersWhereUniqueInput
    /**
     * In case the ChatMembers found by the `where` argument doesn't exist, create a new ChatMembers with this data.
     */
    create: XOR<ChatMembersCreateInput, ChatMembersUncheckedCreateInput>
    /**
     * In case the ChatMembers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChatMembersUpdateInput, ChatMembersUncheckedUpdateInput>
  }

  /**
   * ChatMembers delete
   */
  export type ChatMembersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
    /**
     * Filter which ChatMembers to delete.
     */
    where: ChatMembersWhereUniqueInput
  }

  /**
   * ChatMembers deleteMany
   */
  export type ChatMembersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ChatMembers to delete
     */
    where?: ChatMembersWhereInput
  }

  /**
   * ChatMembers without action
   */
  export type ChatMembersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChatMembers
     */
    select?: ChatMembersSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChatMembersInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    grade: number | null
  }

  export type ReviewSumAggregateOutputType = {
    grade: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    grade: number | null
    description: string | null
    userID: string | null
    announcementID: string | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    grade: number | null
    description: string | null
    userID: string | null
    announcementID: string | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    grade: number
    description: number
    userID: number
    announcementID: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    grade?: true
  }

  export type ReviewSumAggregateInputType = {
    grade?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    grade?: true
    description?: true
    userID?: true
    announcementID?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    grade?: true
    description?: true
    userID?: true
    announcementID?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    grade?: true
    description?: true
    userID?: true
    announcementID?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    grade: number
    description: string
    userID: string
    announcementID: string
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    description?: boolean
    userID?: boolean
    announcementID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    grade?: boolean
    description?: boolean
    userID?: boolean
    announcementID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    grade?: boolean
    description?: boolean
    userID?: boolean
    announcementID?: boolean
  }

  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      grade: number
      description: string
      userID: string
      announcementID: string
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */ 
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly grade: FieldRef<"Review", 'Float'>
    readonly description: FieldRef<"Review", 'String'>
    readonly userID: FieldRef<"Review", 'String'>
    readonly announcementID: FieldRef<"Review", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Favourites
   */

  export type AggregateFavourites = {
    _count: FavouritesCountAggregateOutputType | null
    _min: FavouritesMinAggregateOutputType | null
    _max: FavouritesMaxAggregateOutputType | null
  }

  export type FavouritesMinAggregateOutputType = {
    id: string | null
    userID: string | null
    announcementID: string | null
  }

  export type FavouritesMaxAggregateOutputType = {
    id: string | null
    userID: string | null
    announcementID: string | null
  }

  export type FavouritesCountAggregateOutputType = {
    id: number
    userID: number
    announcementID: number
    _all: number
  }


  export type FavouritesMinAggregateInputType = {
    id?: true
    userID?: true
    announcementID?: true
  }

  export type FavouritesMaxAggregateInputType = {
    id?: true
    userID?: true
    announcementID?: true
  }

  export type FavouritesCountAggregateInputType = {
    id?: true
    userID?: true
    announcementID?: true
    _all?: true
  }

  export type FavouritesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourites to aggregate.
     */
    where?: FavouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favourites
    **/
    _count?: true | FavouritesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavouritesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavouritesMaxAggregateInputType
  }

  export type GetFavouritesAggregateType<T extends FavouritesAggregateArgs> = {
        [P in keyof T & keyof AggregateFavourites]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavourites[P]>
      : GetScalarType<T[P], AggregateFavourites[P]>
  }




  export type FavouritesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavouritesWhereInput
    orderBy?: FavouritesOrderByWithAggregationInput | FavouritesOrderByWithAggregationInput[]
    by: FavouritesScalarFieldEnum[] | FavouritesScalarFieldEnum
    having?: FavouritesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavouritesCountAggregateInputType | true
    _min?: FavouritesMinAggregateInputType
    _max?: FavouritesMaxAggregateInputType
  }

  export type FavouritesGroupByOutputType = {
    id: string
    userID: string
    announcementID: string
    _count: FavouritesCountAggregateOutputType | null
    _min: FavouritesMinAggregateOutputType | null
    _max: FavouritesMaxAggregateOutputType | null
  }

  type GetFavouritesGroupByPayload<T extends FavouritesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavouritesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavouritesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavouritesGroupByOutputType[P]>
            : GetScalarType<T[P], FavouritesGroupByOutputType[P]>
        }
      >
    >


  export type FavouritesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    announcementID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>

  export type FavouritesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userID?: boolean
    announcementID?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favourites"]>

  export type FavouritesSelectScalar = {
    id?: boolean
    userID?: boolean
    announcementID?: boolean
  }

  export type FavouritesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }
  export type FavouritesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }

  export type $FavouritesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favourites"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userID: string
      announcementID: string
    }, ExtArgs["result"]["favourites"]>
    composites: {}
  }

  type FavouritesGetPayload<S extends boolean | null | undefined | FavouritesDefaultArgs> = $Result.GetResult<Prisma.$FavouritesPayload, S>

  type FavouritesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FavouritesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FavouritesCountAggregateInputType | true
    }

  export interface FavouritesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favourites'], meta: { name: 'Favourites' } }
    /**
     * Find zero or one Favourites that matches the filter.
     * @param {FavouritesFindUniqueArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavouritesFindUniqueArgs>(args: SelectSubset<T, FavouritesFindUniqueArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Favourites that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FavouritesFindUniqueOrThrowArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavouritesFindUniqueOrThrowArgs>(args: SelectSubset<T, FavouritesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesFindFirstArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavouritesFindFirstArgs>(args?: SelectSubset<T, FavouritesFindFirstArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Favourites that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesFindFirstOrThrowArgs} args - Arguments to find a Favourites
     * @example
     * // Get one Favourites
     * const favourites = await prisma.favourites.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavouritesFindFirstOrThrowArgs>(args?: SelectSubset<T, FavouritesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Favourites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favourites
     * const favourites = await prisma.favourites.findMany()
     * 
     * // Get first 10 Favourites
     * const favourites = await prisma.favourites.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favouritesWithIdOnly = await prisma.favourites.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavouritesFindManyArgs>(args?: SelectSubset<T, FavouritesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Favourites.
     * @param {FavouritesCreateArgs} args - Arguments to create a Favourites.
     * @example
     * // Create one Favourites
     * const Favourites = await prisma.favourites.create({
     *   data: {
     *     // ... data to create a Favourites
     *   }
     * })
     * 
     */
    create<T extends FavouritesCreateArgs>(args: SelectSubset<T, FavouritesCreateArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Favourites.
     * @param {FavouritesCreateManyArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourites = await prisma.favourites.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavouritesCreateManyArgs>(args?: SelectSubset<T, FavouritesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favourites and returns the data saved in the database.
     * @param {FavouritesCreateManyAndReturnArgs} args - Arguments to create many Favourites.
     * @example
     * // Create many Favourites
     * const favourites = await prisma.favourites.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favourites and only return the `id`
     * const favouritesWithIdOnly = await prisma.favourites.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavouritesCreateManyAndReturnArgs>(args?: SelectSubset<T, FavouritesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Favourites.
     * @param {FavouritesDeleteArgs} args - Arguments to delete one Favourites.
     * @example
     * // Delete one Favourites
     * const Favourites = await prisma.favourites.delete({
     *   where: {
     *     // ... filter to delete one Favourites
     *   }
     * })
     * 
     */
    delete<T extends FavouritesDeleteArgs>(args: SelectSubset<T, FavouritesDeleteArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Favourites.
     * @param {FavouritesUpdateArgs} args - Arguments to update one Favourites.
     * @example
     * // Update one Favourites
     * const favourites = await prisma.favourites.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavouritesUpdateArgs>(args: SelectSubset<T, FavouritesUpdateArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Favourites.
     * @param {FavouritesDeleteManyArgs} args - Arguments to filter Favourites to delete.
     * @example
     * // Delete a few Favourites
     * const { count } = await prisma.favourites.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavouritesDeleteManyArgs>(args?: SelectSubset<T, FavouritesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favourites
     * const favourites = await prisma.favourites.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavouritesUpdateManyArgs>(args: SelectSubset<T, FavouritesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Favourites.
     * @param {FavouritesUpsertArgs} args - Arguments to update or create a Favourites.
     * @example
     * // Update or create a Favourites
     * const favourites = await prisma.favourites.upsert({
     *   create: {
     *     // ... data to create a Favourites
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favourites we want to update
     *   }
     * })
     */
    upsert<T extends FavouritesUpsertArgs>(args: SelectSubset<T, FavouritesUpsertArgs<ExtArgs>>): Prisma__FavouritesClient<$Result.GetResult<Prisma.$FavouritesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesCountArgs} args - Arguments to filter Favourites to count.
     * @example
     * // Count the number of Favourites
     * const count = await prisma.favourites.count({
     *   where: {
     *     // ... the filter for the Favourites we want to count
     *   }
     * })
    **/
    count<T extends FavouritesCountArgs>(
      args?: Subset<T, FavouritesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavouritesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FavouritesAggregateArgs>(args: Subset<T, FavouritesAggregateArgs>): Prisma.PrismaPromise<GetFavouritesAggregateType<T>>

    /**
     * Group by Favourites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavouritesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FavouritesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavouritesGroupByArgs['orderBy'] }
        : { orderBy?: FavouritesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FavouritesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavouritesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favourites model
   */
  readonly fields: FavouritesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favourites.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavouritesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favourites model
   */ 
  interface FavouritesFieldRefs {
    readonly id: FieldRef<"Favourites", 'String'>
    readonly userID: FieldRef<"Favourites", 'String'>
    readonly announcementID: FieldRef<"Favourites", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Favourites findUnique
   */
  export type FavouritesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where: FavouritesWhereUniqueInput
  }

  /**
   * Favourites findUniqueOrThrow
   */
  export type FavouritesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where: FavouritesWhereUniqueInput
  }

  /**
   * Favourites findFirst
   */
  export type FavouritesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * Favourites findFirstOrThrow
   */
  export type FavouritesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favourites.
     */
    cursor?: FavouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favourites.
     */
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * Favourites findMany
   */
  export type FavouritesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter, which Favourites to fetch.
     */
    where?: FavouritesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favourites to fetch.
     */
    orderBy?: FavouritesOrderByWithRelationInput | FavouritesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favourites.
     */
    cursor?: FavouritesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favourites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favourites.
     */
    skip?: number
    distinct?: FavouritesScalarFieldEnum | FavouritesScalarFieldEnum[]
  }

  /**
   * Favourites create
   */
  export type FavouritesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * The data needed to create a Favourites.
     */
    data: XOR<FavouritesCreateInput, FavouritesUncheckedCreateInput>
  }

  /**
   * Favourites createMany
   */
  export type FavouritesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favourites.
     */
    data: FavouritesCreateManyInput | FavouritesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favourites createManyAndReturn
   */
  export type FavouritesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Favourites.
     */
    data: FavouritesCreateManyInput | FavouritesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favourites update
   */
  export type FavouritesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * The data needed to update a Favourites.
     */
    data: XOR<FavouritesUpdateInput, FavouritesUncheckedUpdateInput>
    /**
     * Choose, which Favourites to update.
     */
    where: FavouritesWhereUniqueInput
  }

  /**
   * Favourites updateMany
   */
  export type FavouritesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favourites.
     */
    data: XOR<FavouritesUpdateManyMutationInput, FavouritesUncheckedUpdateManyInput>
    /**
     * Filter which Favourites to update
     */
    where?: FavouritesWhereInput
  }

  /**
   * Favourites upsert
   */
  export type FavouritesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * The filter to search for the Favourites to update in case it exists.
     */
    where: FavouritesWhereUniqueInput
    /**
     * In case the Favourites found by the `where` argument doesn't exist, create a new Favourites with this data.
     */
    create: XOR<FavouritesCreateInput, FavouritesUncheckedCreateInput>
    /**
     * In case the Favourites was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavouritesUpdateInput, FavouritesUncheckedUpdateInput>
  }

  /**
   * Favourites delete
   */
  export type FavouritesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
    /**
     * Filter which Favourites to delete.
     */
    where: FavouritesWhereUniqueInput
  }

  /**
   * Favourites deleteMany
   */
  export type FavouritesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favourites to delete
     */
    where?: FavouritesWhereInput
  }

  /**
   * Favourites without action
   */
  export type FavouritesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favourites
     */
    select?: FavouritesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavouritesInclude<ExtArgs> | null
  }


  /**
   * Model Photo
   */

  export type AggregatePhoto = {
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  export type PhotoMinAggregateOutputType = {
    PhotoID: string | null
    name: string | null
    resolution: string | null
    link: string | null
    announcementID: string | null
  }

  export type PhotoMaxAggregateOutputType = {
    PhotoID: string | null
    name: string | null
    resolution: string | null
    link: string | null
    announcementID: string | null
  }

  export type PhotoCountAggregateOutputType = {
    PhotoID: number
    name: number
    resolution: number
    link: number
    announcementID: number
    _all: number
  }


  export type PhotoMinAggregateInputType = {
    PhotoID?: true
    name?: true
    resolution?: true
    link?: true
    announcementID?: true
  }

  export type PhotoMaxAggregateInputType = {
    PhotoID?: true
    name?: true
    resolution?: true
    link?: true
    announcementID?: true
  }

  export type PhotoCountAggregateInputType = {
    PhotoID?: true
    name?: true
    resolution?: true
    link?: true
    announcementID?: true
    _all?: true
  }

  export type PhotoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photo to aggregate.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Photos
    **/
    _count?: true | PhotoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PhotoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PhotoMaxAggregateInputType
  }

  export type GetPhotoAggregateType<T extends PhotoAggregateArgs> = {
        [P in keyof T & keyof AggregatePhoto]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePhoto[P]>
      : GetScalarType<T[P], AggregatePhoto[P]>
  }




  export type PhotoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PhotoWhereInput
    orderBy?: PhotoOrderByWithAggregationInput | PhotoOrderByWithAggregationInput[]
    by: PhotoScalarFieldEnum[] | PhotoScalarFieldEnum
    having?: PhotoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PhotoCountAggregateInputType | true
    _min?: PhotoMinAggregateInputType
    _max?: PhotoMaxAggregateInputType
  }

  export type PhotoGroupByOutputType = {
    PhotoID: string
    name: string
    resolution: string
    link: string
    announcementID: string
    _count: PhotoCountAggregateOutputType | null
    _min: PhotoMinAggregateOutputType | null
    _max: PhotoMaxAggregateOutputType | null
  }

  type GetPhotoGroupByPayload<T extends PhotoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PhotoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PhotoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PhotoGroupByOutputType[P]>
            : GetScalarType<T[P], PhotoGroupByOutputType[P]>
        }
      >
    >


  export type PhotoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PhotoID?: boolean
    name?: boolean
    resolution?: boolean
    link?: boolean
    announcementID?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    PhotoID?: boolean
    name?: boolean
    resolution?: boolean
    link?: boolean
    announcementID?: boolean
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["photo"]>

  export type PhotoSelectScalar = {
    PhotoID?: boolean
    name?: boolean
    resolution?: boolean
    link?: boolean
    announcementID?: boolean
  }

  export type PhotoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }
  export type PhotoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    announcement?: boolean | AnnouncementDefaultArgs<ExtArgs>
  }

  export type $PhotoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Photo"
    objects: {
      announcement: Prisma.$AnnouncementPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      PhotoID: string
      name: string
      resolution: string
      link: string
      announcementID: string
    }, ExtArgs["result"]["photo"]>
    composites: {}
  }

  type PhotoGetPayload<S extends boolean | null | undefined | PhotoDefaultArgs> = $Result.GetResult<Prisma.$PhotoPayload, S>

  type PhotoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PhotoFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PhotoCountAggregateInputType | true
    }

  export interface PhotoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Photo'], meta: { name: 'Photo' } }
    /**
     * Find zero or one Photo that matches the filter.
     * @param {PhotoFindUniqueArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PhotoFindUniqueArgs>(args: SelectSubset<T, PhotoFindUniqueArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Photo that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PhotoFindUniqueOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PhotoFindUniqueOrThrowArgs>(args: SelectSubset<T, PhotoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Photo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PhotoFindFirstArgs>(args?: SelectSubset<T, PhotoFindFirstArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Photo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindFirstOrThrowArgs} args - Arguments to find a Photo
     * @example
     * // Get one Photo
     * const photo = await prisma.photo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PhotoFindFirstOrThrowArgs>(args?: SelectSubset<T, PhotoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Photos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Photos
     * const photos = await prisma.photo.findMany()
     * 
     * // Get first 10 Photos
     * const photos = await prisma.photo.findMany({ take: 10 })
     * 
     * // Only select the `PhotoID`
     * const photoWithPhotoIDOnly = await prisma.photo.findMany({ select: { PhotoID: true } })
     * 
     */
    findMany<T extends PhotoFindManyArgs>(args?: SelectSubset<T, PhotoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Photo.
     * @param {PhotoCreateArgs} args - Arguments to create a Photo.
     * @example
     * // Create one Photo
     * const Photo = await prisma.photo.create({
     *   data: {
     *     // ... data to create a Photo
     *   }
     * })
     * 
     */
    create<T extends PhotoCreateArgs>(args: SelectSubset<T, PhotoCreateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Photos.
     * @param {PhotoCreateManyArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PhotoCreateManyArgs>(args?: SelectSubset<T, PhotoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Photos and returns the data saved in the database.
     * @param {PhotoCreateManyAndReturnArgs} args - Arguments to create many Photos.
     * @example
     * // Create many Photos
     * const photo = await prisma.photo.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Photos and only return the `PhotoID`
     * const photoWithPhotoIDOnly = await prisma.photo.createManyAndReturn({ 
     *   select: { PhotoID: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PhotoCreateManyAndReturnArgs>(args?: SelectSubset<T, PhotoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Photo.
     * @param {PhotoDeleteArgs} args - Arguments to delete one Photo.
     * @example
     * // Delete one Photo
     * const Photo = await prisma.photo.delete({
     *   where: {
     *     // ... filter to delete one Photo
     *   }
     * })
     * 
     */
    delete<T extends PhotoDeleteArgs>(args: SelectSubset<T, PhotoDeleteArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Photo.
     * @param {PhotoUpdateArgs} args - Arguments to update one Photo.
     * @example
     * // Update one Photo
     * const photo = await prisma.photo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PhotoUpdateArgs>(args: SelectSubset<T, PhotoUpdateArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Photos.
     * @param {PhotoDeleteManyArgs} args - Arguments to filter Photos to delete.
     * @example
     * // Delete a few Photos
     * const { count } = await prisma.photo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PhotoDeleteManyArgs>(args?: SelectSubset<T, PhotoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Photos
     * const photo = await prisma.photo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PhotoUpdateManyArgs>(args: SelectSubset<T, PhotoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Photo.
     * @param {PhotoUpsertArgs} args - Arguments to update or create a Photo.
     * @example
     * // Update or create a Photo
     * const photo = await prisma.photo.upsert({
     *   create: {
     *     // ... data to create a Photo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Photo we want to update
     *   }
     * })
     */
    upsert<T extends PhotoUpsertArgs>(args: SelectSubset<T, PhotoUpsertArgs<ExtArgs>>): Prisma__PhotoClient<$Result.GetResult<Prisma.$PhotoPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Photos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoCountArgs} args - Arguments to filter Photos to count.
     * @example
     * // Count the number of Photos
     * const count = await prisma.photo.count({
     *   where: {
     *     // ... the filter for the Photos we want to count
     *   }
     * })
    **/
    count<T extends PhotoCountArgs>(
      args?: Subset<T, PhotoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PhotoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PhotoAggregateArgs>(args: Subset<T, PhotoAggregateArgs>): Prisma.PrismaPromise<GetPhotoAggregateType<T>>

    /**
     * Group by Photo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PhotoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PhotoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PhotoGroupByArgs['orderBy'] }
        : { orderBy?: PhotoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PhotoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPhotoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Photo model
   */
  readonly fields: PhotoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Photo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PhotoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    announcement<T extends AnnouncementDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AnnouncementDefaultArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Photo model
   */ 
  interface PhotoFieldRefs {
    readonly PhotoID: FieldRef<"Photo", 'String'>
    readonly name: FieldRef<"Photo", 'String'>
    readonly resolution: FieldRef<"Photo", 'String'>
    readonly link: FieldRef<"Photo", 'String'>
    readonly announcementID: FieldRef<"Photo", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Photo findUnique
   */
  export type PhotoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findUniqueOrThrow
   */
  export type PhotoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo findFirst
   */
  export type PhotoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findFirstOrThrow
   */
  export type PhotoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photo to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Photos.
     */
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo findMany
   */
  export type PhotoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter, which Photos to fetch.
     */
    where?: PhotoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Photos to fetch.
     */
    orderBy?: PhotoOrderByWithRelationInput | PhotoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Photos.
     */
    cursor?: PhotoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Photos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Photos.
     */
    skip?: number
    distinct?: PhotoScalarFieldEnum | PhotoScalarFieldEnum[]
  }

  /**
   * Photo create
   */
  export type PhotoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to create a Photo.
     */
    data: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
  }

  /**
   * Photo createMany
   */
  export type PhotoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Photo createManyAndReturn
   */
  export type PhotoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Photos.
     */
    data: PhotoCreateManyInput | PhotoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Photo update
   */
  export type PhotoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The data needed to update a Photo.
     */
    data: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
    /**
     * Choose, which Photo to update.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo updateMany
   */
  export type PhotoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Photos.
     */
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyInput>
    /**
     * Filter which Photos to update
     */
    where?: PhotoWhereInput
  }

  /**
   * Photo upsert
   */
  export type PhotoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * The filter to search for the Photo to update in case it exists.
     */
    where: PhotoWhereUniqueInput
    /**
     * In case the Photo found by the `where` argument doesn't exist, create a new Photo with this data.
     */
    create: XOR<PhotoCreateInput, PhotoUncheckedCreateInput>
    /**
     * In case the Photo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PhotoUpdateInput, PhotoUncheckedUpdateInput>
  }

  /**
   * Photo delete
   */
  export type PhotoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
    /**
     * Filter which Photo to delete.
     */
    where: PhotoWhereUniqueInput
  }

  /**
   * Photo deleteMany
   */
  export type PhotoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Photos to delete
     */
    where?: PhotoWhereInput
  }

  /**
   * Photo without action
   */
  export type PhotoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Photo
     */
    select?: PhotoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PhotoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phoneNumber: 'phoneNumber',
    password: 'password',
    displayName: 'displayName',
    typeProfile: 'typeProfile',
    rating: 'rating',
    avatar: 'avatar',
    bio: 'bio',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    parent_id: 'parent_id'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    placementDate: 'placementDate',
    status: 'status',
    condition: 'condition',
    userId: 'userId',
    categoryId: 'categoryId'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const CharacteristicScalarFieldEnum: {
    id: 'id',
    name: 'name',
    type: 'type',
    categoryId: 'categoryId'
  };

  export type CharacteristicScalarFieldEnum = (typeof CharacteristicScalarFieldEnum)[keyof typeof CharacteristicScalarFieldEnum]


  export const AnnouncementCharacteristicScalarFieldEnum: {
    id: 'id',
    value: 'value',
    productId: 'productId',
    characteristicId: 'characteristicId'
  };

  export type AnnouncementCharacteristicScalarFieldEnum = (typeof AnnouncementCharacteristicScalarFieldEnum)[keyof typeof AnnouncementCharacteristicScalarFieldEnum]


  export const ChatScalarFieldEnum: {
    id: 'id'
  };

  export type ChatScalarFieldEnum = (typeof ChatScalarFieldEnum)[keyof typeof ChatScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    Content: 'Content',
    Status: 'Status',
    Date: 'Date',
    userID: 'userID',
    chatID: 'chatID'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const ChatMembersScalarFieldEnum: {
    id: 'id',
    chatID: 'chatID',
    userID: 'userID'
  };

  export type ChatMembersScalarFieldEnum = (typeof ChatMembersScalarFieldEnum)[keyof typeof ChatMembersScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    grade: 'grade',
    description: 'description',
    userID: 'userID',
    announcementID: 'announcementID'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const FavouritesScalarFieldEnum: {
    id: 'id',
    userID: 'userID',
    announcementID: 'announcementID'
  };

  export type FavouritesScalarFieldEnum = (typeof FavouritesScalarFieldEnum)[keyof typeof FavouritesScalarFieldEnum]


  export const PhotoScalarFieldEnum: {
    PhotoID: 'PhotoID',
    name: 'name',
    resolution: 'resolution',
    link: 'link',
    announcementID: 'announcementID'
  };

  export type PhotoScalarFieldEnum = (typeof PhotoScalarFieldEnum)[keyof typeof PhotoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'AnnouncementStatus'
   */
  export type EnumAnnouncementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementStatus'>
    


  /**
   * Reference to a field of type 'AnnouncementStatus[]'
   */
  export type ListEnumAnnouncementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AnnouncementStatus[]'>
    


  /**
   * Reference to a field of type 'ProductCondition'
   */
  export type EnumProductConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCondition'>
    


  /**
   * Reference to a field of type 'ProductCondition[]'
   */
  export type ListEnumProductConditionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ProductCondition[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    phoneNumber?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    typeProfile?: StringFilter<"User"> | string
    rating?: FloatNullableFilter<"User"> | number | null
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    announcement?: AnnouncementListRelationFilter
    message?: MessageListRelationFilter
    chatMembers?: ChatMembersListRelationFilter
    Review?: ReviewListRelationFilter
    Favourites?: FavouritesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    displayName?: SortOrder
    typeProfile?: SortOrder
    rating?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    announcement?: AnnouncementOrderByRelationAggregateInput
    message?: MessageOrderByRelationAggregateInput
    chatMembers?: ChatMembersOrderByRelationAggregateInput
    Review?: ReviewOrderByRelationAggregateInput
    Favourites?: FavouritesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phoneNumber?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    typeProfile?: StringFilter<"User"> | string
    rating?: FloatNullableFilter<"User"> | number | null
    avatar?: StringNullableFilter<"User"> | string | null
    bio?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    announcement?: AnnouncementListRelationFilter
    message?: MessageListRelationFilter
    chatMembers?: ChatMembersListRelationFilter
    Review?: ReviewListRelationFilter
    Favourites?: FavouritesListRelationFilter
  }, "id" | "email" | "phoneNumber">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    password?: SortOrder
    displayName?: SortOrder
    typeProfile?: SortOrder
    rating?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    typeProfile?: StringWithAggregatesFilter<"User"> | string
    rating?: FloatNullableWithAggregatesFilter<"User"> | number | null
    avatar?: StringNullableWithAggregatesFilter<"User"> | string | null
    bio?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    parent_id?: StringNullableFilter<"Category"> | string | null
    children?: CategoryListRelationFilter
    announcement?: AnnouncementListRelationFilter
    characteristic?: CharacteristicListRelationFilter
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    children?: CategoryOrderByRelationAggregateInput
    announcement?: AnnouncementOrderByRelationAggregateInput
    characteristic?: CharacteristicOrderByRelationAggregateInput
    parent?: CategoryOrderByWithRelationInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    parent_id?: StringNullableFilter<"Category"> | string | null
    children?: CategoryListRelationFilter
    announcement?: AnnouncementListRelationFilter
    characteristic?: CharacteristicListRelationFilter
    parent?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    parent_id?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: StringFilter<"Announcement"> | string
    name?: StringFilter<"Announcement"> | string
    price?: FloatFilter<"Announcement"> | number
    description?: StringFilter<"Announcement"> | string
    placementDate?: DateTimeFilter<"Announcement"> | Date | string
    status?: EnumAnnouncementStatusFilter<"Announcement"> | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFilter<"Announcement"> | $Enums.ProductCondition
    userId?: StringFilter<"Announcement"> | string
    categoryId?: StringFilter<"Announcement"> | string
    photo?: PhotoListRelationFilter
    review?: ReviewListRelationFilter
    favourites?: FavouritesListRelationFilter
    announcementCharacteristic?: AnnouncementCharacteristicListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    placementDate?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    photo?: PhotoOrderByRelationAggregateInput
    review?: ReviewOrderByRelationAggregateInput
    favourites?: FavouritesOrderByRelationAggregateInput
    announcementCharacteristic?: AnnouncementCharacteristicOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    name?: StringFilter<"Announcement"> | string
    price?: FloatFilter<"Announcement"> | number
    description?: StringFilter<"Announcement"> | string
    placementDate?: DateTimeFilter<"Announcement"> | Date | string
    status?: EnumAnnouncementStatusFilter<"Announcement"> | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFilter<"Announcement"> | $Enums.ProductCondition
    userId?: StringFilter<"Announcement"> | string
    categoryId?: StringFilter<"Announcement"> | string
    photo?: PhotoListRelationFilter
    review?: ReviewListRelationFilter
    favourites?: FavouritesListRelationFilter
    announcementCharacteristic?: AnnouncementCharacteristicListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    placementDate?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Announcement"> | string
    name?: StringWithAggregatesFilter<"Announcement"> | string
    price?: FloatWithAggregatesFilter<"Announcement"> | number
    description?: StringWithAggregatesFilter<"Announcement"> | string
    placementDate?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
    status?: EnumAnnouncementStatusWithAggregatesFilter<"Announcement"> | $Enums.AnnouncementStatus
    condition?: EnumProductConditionWithAggregatesFilter<"Announcement"> | $Enums.ProductCondition
    userId?: StringWithAggregatesFilter<"Announcement"> | string
    categoryId?: StringWithAggregatesFilter<"Announcement"> | string
  }

  export type CharacteristicWhereInput = {
    AND?: CharacteristicWhereInput | CharacteristicWhereInput[]
    OR?: CharacteristicWhereInput[]
    NOT?: CharacteristicWhereInput | CharacteristicWhereInput[]
    id?: StringFilter<"Characteristic"> | string
    name?: StringFilter<"Characteristic"> | string
    type?: StringFilter<"Characteristic"> | string
    categoryId?: StringFilter<"Characteristic"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    announcementCharacteristic?: AnnouncementCharacteristicListRelationFilter
  }

  export type CharacteristicOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    announcementCharacteristic?: AnnouncementCharacteristicOrderByRelationAggregateInput
  }

  export type CharacteristicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CharacteristicWhereInput | CharacteristicWhereInput[]
    OR?: CharacteristicWhereInput[]
    NOT?: CharacteristicWhereInput | CharacteristicWhereInput[]
    name?: StringFilter<"Characteristic"> | string
    type?: StringFilter<"Characteristic"> | string
    categoryId?: StringFilter<"Characteristic"> | string
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    announcementCharacteristic?: AnnouncementCharacteristicListRelationFilter
  }, "id">

  export type CharacteristicOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
    _count?: CharacteristicCountOrderByAggregateInput
    _max?: CharacteristicMaxOrderByAggregateInput
    _min?: CharacteristicMinOrderByAggregateInput
  }

  export type CharacteristicScalarWhereWithAggregatesInput = {
    AND?: CharacteristicScalarWhereWithAggregatesInput | CharacteristicScalarWhereWithAggregatesInput[]
    OR?: CharacteristicScalarWhereWithAggregatesInput[]
    NOT?: CharacteristicScalarWhereWithAggregatesInput | CharacteristicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Characteristic"> | string
    name?: StringWithAggregatesFilter<"Characteristic"> | string
    type?: StringWithAggregatesFilter<"Characteristic"> | string
    categoryId?: StringWithAggregatesFilter<"Characteristic"> | string
  }

  export type AnnouncementCharacteristicWhereInput = {
    AND?: AnnouncementCharacteristicWhereInput | AnnouncementCharacteristicWhereInput[]
    OR?: AnnouncementCharacteristicWhereInput[]
    NOT?: AnnouncementCharacteristicWhereInput | AnnouncementCharacteristicWhereInput[]
    id?: StringFilter<"AnnouncementCharacteristic"> | string
    value?: StringFilter<"AnnouncementCharacteristic"> | string
    productId?: StringFilter<"AnnouncementCharacteristic"> | string
    characteristicId?: StringFilter<"AnnouncementCharacteristic"> | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    characteristic?: XOR<CharacteristicScalarRelationFilter, CharacteristicWhereInput>
  }

  export type AnnouncementCharacteristicOrderByWithRelationInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    characteristicId?: SortOrder
    announcement?: AnnouncementOrderByWithRelationInput
    characteristic?: CharacteristicOrderByWithRelationInput
  }

  export type AnnouncementCharacteristicWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AnnouncementCharacteristicWhereInput | AnnouncementCharacteristicWhereInput[]
    OR?: AnnouncementCharacteristicWhereInput[]
    NOT?: AnnouncementCharacteristicWhereInput | AnnouncementCharacteristicWhereInput[]
    value?: StringFilter<"AnnouncementCharacteristic"> | string
    productId?: StringFilter<"AnnouncementCharacteristic"> | string
    characteristicId?: StringFilter<"AnnouncementCharacteristic"> | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
    characteristic?: XOR<CharacteristicScalarRelationFilter, CharacteristicWhereInput>
  }, "id">

  export type AnnouncementCharacteristicOrderByWithAggregationInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    characteristicId?: SortOrder
    _count?: AnnouncementCharacteristicCountOrderByAggregateInput
    _max?: AnnouncementCharacteristicMaxOrderByAggregateInput
    _min?: AnnouncementCharacteristicMinOrderByAggregateInput
  }

  export type AnnouncementCharacteristicScalarWhereWithAggregatesInput = {
    AND?: AnnouncementCharacteristicScalarWhereWithAggregatesInput | AnnouncementCharacteristicScalarWhereWithAggregatesInput[]
    OR?: AnnouncementCharacteristicScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementCharacteristicScalarWhereWithAggregatesInput | AnnouncementCharacteristicScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AnnouncementCharacteristic"> | string
    value?: StringWithAggregatesFilter<"AnnouncementCharacteristic"> | string
    productId?: StringWithAggregatesFilter<"AnnouncementCharacteristic"> | string
    characteristicId?: StringWithAggregatesFilter<"AnnouncementCharacteristic"> | string
  }

  export type ChatWhereInput = {
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    id?: StringFilter<"Chat"> | string
    messages?: MessageListRelationFilter
    chatMembers?: ChatMembersListRelationFilter
  }

  export type ChatOrderByWithRelationInput = {
    id?: SortOrder
    messages?: MessageOrderByRelationAggregateInput
    chatMembers?: ChatMembersOrderByRelationAggregateInput
  }

  export type ChatWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatWhereInput | ChatWhereInput[]
    OR?: ChatWhereInput[]
    NOT?: ChatWhereInput | ChatWhereInput[]
    messages?: MessageListRelationFilter
    chatMembers?: ChatMembersListRelationFilter
  }, "id">

  export type ChatOrderByWithAggregationInput = {
    id?: SortOrder
    _count?: ChatCountOrderByAggregateInput
    _max?: ChatMaxOrderByAggregateInput
    _min?: ChatMinOrderByAggregateInput
  }

  export type ChatScalarWhereWithAggregatesInput = {
    AND?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    OR?: ChatScalarWhereWithAggregatesInput[]
    NOT?: ChatScalarWhereWithAggregatesInput | ChatScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Chat"> | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    Content?: StringFilter<"Message"> | string
    Status?: IntFilter<"Message"> | number
    Date?: DateTimeFilter<"Message"> | Date | string
    userID?: StringFilter<"Message"> | string
    chatID?: StringFilter<"Message"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    Content?: SortOrder
    Status?: SortOrder
    Date?: SortOrder
    userID?: SortOrder
    chatID?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    Content?: StringFilter<"Message"> | string
    Status?: IntFilter<"Message"> | number
    Date?: DateTimeFilter<"Message"> | Date | string
    userID?: StringFilter<"Message"> | string
    chatID?: StringFilter<"Message"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    Content?: SortOrder
    Status?: SortOrder
    Date?: SortOrder
    userID?: SortOrder
    chatID?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _avg?: MessageAvgOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
    _sum?: MessageSumOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    Content?: StringWithAggregatesFilter<"Message"> | string
    Status?: IntWithAggregatesFilter<"Message"> | number
    Date?: DateTimeWithAggregatesFilter<"Message"> | Date | string
    userID?: StringWithAggregatesFilter<"Message"> | string
    chatID?: StringWithAggregatesFilter<"Message"> | string
  }

  export type ChatMembersWhereInput = {
    AND?: ChatMembersWhereInput | ChatMembersWhereInput[]
    OR?: ChatMembersWhereInput[]
    NOT?: ChatMembersWhereInput | ChatMembersWhereInput[]
    id?: StringFilter<"ChatMembers"> | string
    chatID?: StringFilter<"ChatMembers"> | string
    userID?: StringFilter<"ChatMembers"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }

  export type ChatMembersOrderByWithRelationInput = {
    id?: SortOrder
    chatID?: SortOrder
    userID?: SortOrder
    user?: UserOrderByWithRelationInput
    chat?: ChatOrderByWithRelationInput
  }

  export type ChatMembersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChatMembersWhereInput | ChatMembersWhereInput[]
    OR?: ChatMembersWhereInput[]
    NOT?: ChatMembersWhereInput | ChatMembersWhereInput[]
    chatID?: StringFilter<"ChatMembers"> | string
    userID?: StringFilter<"ChatMembers"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    chat?: XOR<ChatScalarRelationFilter, ChatWhereInput>
  }, "id">

  export type ChatMembersOrderByWithAggregationInput = {
    id?: SortOrder
    chatID?: SortOrder
    userID?: SortOrder
    _count?: ChatMembersCountOrderByAggregateInput
    _max?: ChatMembersMaxOrderByAggregateInput
    _min?: ChatMembersMinOrderByAggregateInput
  }

  export type ChatMembersScalarWhereWithAggregatesInput = {
    AND?: ChatMembersScalarWhereWithAggregatesInput | ChatMembersScalarWhereWithAggregatesInput[]
    OR?: ChatMembersScalarWhereWithAggregatesInput[]
    NOT?: ChatMembersScalarWhereWithAggregatesInput | ChatMembersScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ChatMembers"> | string
    chatID?: StringWithAggregatesFilter<"ChatMembers"> | string
    userID?: StringWithAggregatesFilter<"ChatMembers"> | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    grade?: FloatFilter<"Review"> | number
    description?: StringFilter<"Review"> | string
    userID?: StringFilter<"Review"> | string
    announcementID?: StringFilter<"Review"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    grade?: SortOrder
    description?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
    user?: UserOrderByWithRelationInput
    announcement?: AnnouncementOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    grade?: FloatFilter<"Review"> | number
    description?: StringFilter<"Review"> | string
    userID?: StringFilter<"Review"> | string
    announcementID?: StringFilter<"Review"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    grade?: SortOrder
    description?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    grade?: FloatWithAggregatesFilter<"Review"> | number
    description?: StringWithAggregatesFilter<"Review"> | string
    userID?: StringWithAggregatesFilter<"Review"> | string
    announcementID?: StringWithAggregatesFilter<"Review"> | string
  }

  export type FavouritesWhereInput = {
    AND?: FavouritesWhereInput | FavouritesWhereInput[]
    OR?: FavouritesWhereInput[]
    NOT?: FavouritesWhereInput | FavouritesWhereInput[]
    id?: StringFilter<"Favourites"> | string
    userID?: StringFilter<"Favourites"> | string
    announcementID?: StringFilter<"Favourites"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
  }

  export type FavouritesOrderByWithRelationInput = {
    id?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
    user?: UserOrderByWithRelationInput
    announcement?: AnnouncementOrderByWithRelationInput
  }

  export type FavouritesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FavouritesWhereInput | FavouritesWhereInput[]
    OR?: FavouritesWhereInput[]
    NOT?: FavouritesWhereInput | FavouritesWhereInput[]
    userID?: StringFilter<"Favourites"> | string
    announcementID?: StringFilter<"Favourites"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
  }, "id">

  export type FavouritesOrderByWithAggregationInput = {
    id?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
    _count?: FavouritesCountOrderByAggregateInput
    _max?: FavouritesMaxOrderByAggregateInput
    _min?: FavouritesMinOrderByAggregateInput
  }

  export type FavouritesScalarWhereWithAggregatesInput = {
    AND?: FavouritesScalarWhereWithAggregatesInput | FavouritesScalarWhereWithAggregatesInput[]
    OR?: FavouritesScalarWhereWithAggregatesInput[]
    NOT?: FavouritesScalarWhereWithAggregatesInput | FavouritesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Favourites"> | string
    userID?: StringWithAggregatesFilter<"Favourites"> | string
    announcementID?: StringWithAggregatesFilter<"Favourites"> | string
  }

  export type PhotoWhereInput = {
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    PhotoID?: StringFilter<"Photo"> | string
    name?: StringFilter<"Photo"> | string
    resolution?: StringFilter<"Photo"> | string
    link?: StringFilter<"Photo"> | string
    announcementID?: StringFilter<"Photo"> | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
  }

  export type PhotoOrderByWithRelationInput = {
    PhotoID?: SortOrder
    name?: SortOrder
    resolution?: SortOrder
    link?: SortOrder
    announcementID?: SortOrder
    announcement?: AnnouncementOrderByWithRelationInput
  }

  export type PhotoWhereUniqueInput = Prisma.AtLeast<{
    PhotoID?: string
    AND?: PhotoWhereInput | PhotoWhereInput[]
    OR?: PhotoWhereInput[]
    NOT?: PhotoWhereInput | PhotoWhereInput[]
    name?: StringFilter<"Photo"> | string
    resolution?: StringFilter<"Photo"> | string
    link?: StringFilter<"Photo"> | string
    announcementID?: StringFilter<"Photo"> | string
    announcement?: XOR<AnnouncementScalarRelationFilter, AnnouncementWhereInput>
  }, "PhotoID">

  export type PhotoOrderByWithAggregationInput = {
    PhotoID?: SortOrder
    name?: SortOrder
    resolution?: SortOrder
    link?: SortOrder
    announcementID?: SortOrder
    _count?: PhotoCountOrderByAggregateInput
    _max?: PhotoMaxOrderByAggregateInput
    _min?: PhotoMinOrderByAggregateInput
  }

  export type PhotoScalarWhereWithAggregatesInput = {
    AND?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    OR?: PhotoScalarWhereWithAggregatesInput[]
    NOT?: PhotoScalarWhereWithAggregatesInput | PhotoScalarWhereWithAggregatesInput[]
    PhotoID?: StringWithAggregatesFilter<"Photo"> | string
    name?: StringWithAggregatesFilter<"Photo"> | string
    resolution?: StringWithAggregatesFilter<"Photo"> | string
    link?: StringWithAggregatesFilter<"Photo"> | string
    announcementID?: StringWithAggregatesFilter<"Photo"> | string
  }

  export type UserCreateInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementCreateNestedManyWithoutUserInput
    message?: MessageCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    Favourites?: FavouritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
    message?: MessageUncheckedCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateManyWithoutUserNestedInput
    message?: MessageUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
    message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    children?: CategoryCreateNestedManyWithoutParentInput
    announcement?: AnnouncementCreateNestedManyWithoutCategoryInput
    characteristic?: CharacteristicCreateNestedManyWithoutCategoryInput
    parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    parent_id?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutCategoryInput
    characteristic?: CharacteristicUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    announcement?: AnnouncementUpdateManyWithoutCategoryNestedInput
    characteristic?: CharacteristicUpdateManyWithoutCategoryNestedInput
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    announcement?: AnnouncementUncheckedUpdateManyWithoutCategoryNestedInput
    characteristic?: CharacteristicUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    parent_id?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AnnouncementCreateInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    photo?: PhotoCreateNestedManyWithoutAnnouncementInput
    review?: ReviewCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicCreateNestedManyWithoutAnnouncementInput
    user: UserCreateNestedOneWithoutAnnouncementInput
    category: CategoryCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
    categoryId: string
    photo?: PhotoUncheckedCreateNestedManyWithoutAnnouncementInput
    review?: ReviewUncheckedCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    photo?: PhotoUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUpdateManyWithoutAnnouncementNestedInput
    user?: UserUpdateOneRequiredWithoutAnnouncementNestedInput
    category?: CategoryUpdateOneRequiredWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    photo?: PhotoUncheckedUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUncheckedUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementCreateManyInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
    categoryId: string
  }

  export type AnnouncementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacteristicCreateInput = {
    id?: string
    name: string
    type: string
    category: CategoryCreateNestedOneWithoutCharacteristicInput
    announcementCharacteristic?: AnnouncementCharacteristicCreateNestedManyWithoutCharacteristicInput
  }

  export type CharacteristicUncheckedCreateInput = {
    id?: string
    name: string
    type: string
    categoryId: string
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedCreateNestedManyWithoutCharacteristicInput
  }

  export type CharacteristicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutCharacteristicNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUpdateManyWithoutCharacteristicNestedInput
  }

  export type CharacteristicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedUpdateManyWithoutCharacteristicNestedInput
  }

  export type CharacteristicCreateManyInput = {
    id?: string
    name: string
    type: string
    categoryId: string
  }

  export type CharacteristicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type CharacteristicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementCharacteristicCreateInput = {
    id?: string
    value: string
    announcement: AnnouncementCreateNestedOneWithoutAnnouncementCharacteristicInput
    characteristic: CharacteristicCreateNestedOneWithoutAnnouncementCharacteristicInput
  }

  export type AnnouncementCharacteristicUncheckedCreateInput = {
    id?: string
    value: string
    productId: string
    characteristicId: string
  }

  export type AnnouncementCharacteristicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    announcement?: AnnouncementUpdateOneRequiredWithoutAnnouncementCharacteristicNestedInput
    characteristic?: CharacteristicUpdateOneRequiredWithoutAnnouncementCharacteristicNestedInput
  }

  export type AnnouncementCharacteristicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    characteristicId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementCharacteristicCreateManyInput = {
    id?: string
    value: string
    productId: string
    characteristicId: string
  }

  export type AnnouncementCharacteristicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementCharacteristicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    characteristicId?: StringFieldUpdateOperationsInput | string
  }

  export type ChatCreateInput = {
    id?: string
    messages?: MessageCreateNestedManyWithoutChatInput
    chatMembers?: ChatMembersCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateInput = {
    id?: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
    chatMembers?: ChatMembersUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutChatNestedInput
    chatMembers?: ChatMembersUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
    chatMembers?: ChatMembersUncheckedUpdateManyWithoutChatNestedInput
  }

  export type ChatCreateManyInput = {
    id?: string
  }

  export type ChatUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ChatUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    user: UserCreateNestedOneWithoutMessageInput
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    userID: string
    chatID: string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessageNestedInput
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: StringFieldUpdateOperationsInput | string
    chatID?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    userID: string
    chatID: string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: StringFieldUpdateOperationsInput | string
    chatID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMembersCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutChatMembersInput
    chat: ChatCreateNestedOneWithoutChatMembersInput
  }

  export type ChatMembersUncheckedCreateInput = {
    id?: string
    chatID: string
    userID: string
  }

  export type ChatMembersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutChatMembersNestedInput
    chat?: ChatUpdateOneRequiredWithoutChatMembersNestedInput
  }

  export type ChatMembersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMembersCreateManyInput = {
    id?: string
    chatID: string
    userID: string
  }

  export type ChatMembersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMembersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatID?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateInput = {
    id?: string
    grade: number
    description: string
    user: UserCreateNestedOneWithoutReviewInput
    announcement: AnnouncementCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    grade: number
    description: string
    userID: string
    announcementID: string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
    announcement?: AnnouncementUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    grade: number
    description: string
    userID: string
    announcementID: string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritesCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutFavouritesInput
    announcement: AnnouncementCreateNestedOneWithoutFavouritesInput
  }

  export type FavouritesUncheckedCreateInput = {
    id?: string
    userID: string
    announcementID: string
  }

  export type FavouritesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
    announcement?: AnnouncementUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouritesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritesCreateManyInput = {
    id?: string
    userID: string
    announcementID: string
  }

  export type FavouritesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateInput = {
    PhotoID?: string
    name: string
    resolution: string
    link: string
    announcement: AnnouncementCreateNestedOneWithoutPhotoInput
  }

  export type PhotoUncheckedCreateInput = {
    PhotoID?: string
    name: string
    resolution: string
    link: string
    announcementID: string
  }

  export type PhotoUpdateInput = {
    PhotoID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    announcement?: AnnouncementUpdateOneRequiredWithoutPhotoNestedInput
  }

  export type PhotoUncheckedUpdateInput = {
    PhotoID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateManyInput = {
    PhotoID?: string
    name: string
    resolution: string
    link: string
    announcementID: string
  }

  export type PhotoUpdateManyMutationInput = {
    PhotoID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyInput = {
    PhotoID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type ChatMembersListRelationFilter = {
    every?: ChatMembersWhereInput
    some?: ChatMembersWhereInput
    none?: ChatMembersWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type FavouritesListRelationFilter = {
    every?: FavouritesWhereInput
    some?: FavouritesWhereInput
    none?: FavouritesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChatMembersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavouritesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    typeProfile?: SortOrder
    rating?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    typeProfile?: SortOrder
    rating?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phoneNumber?: SortOrder
    password?: SortOrder
    displayName?: SortOrder
    typeProfile?: SortOrder
    rating?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type CharacteristicListRelationFilter = {
    every?: CharacteristicWhereInput
    some?: CharacteristicWhereInput
    none?: CharacteristicWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CharacteristicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    parent_id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type EnumAnnouncementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementStatus | EnumAnnouncementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementStatusFilter<$PrismaModel> | $Enums.AnnouncementStatus
  }

  export type EnumProductConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCondition | EnumProductConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumProductConditionFilter<$PrismaModel> | $Enums.ProductCondition
  }

  export type PhotoListRelationFilter = {
    every?: PhotoWhereInput
    some?: PhotoWhereInput
    none?: PhotoWhereInput
  }

  export type AnnouncementCharacteristicListRelationFilter = {
    every?: AnnouncementCharacteristicWhereInput
    some?: AnnouncementCharacteristicWhereInput
    none?: AnnouncementCharacteristicWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type PhotoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementCharacteristicOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    placementDate?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    price?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    placementDate?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    placementDate?: SortOrder
    status?: SortOrder
    condition?: SortOrder
    userId?: SortOrder
    categoryId?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    price?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type EnumAnnouncementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementStatus | EnumAnnouncementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementStatusFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementStatusFilter<$PrismaModel>
  }

  export type EnumProductConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCondition | EnumProductConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumProductConditionWithAggregatesFilter<$PrismaModel> | $Enums.ProductCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductConditionFilter<$PrismaModel>
    _max?: NestedEnumProductConditionFilter<$PrismaModel>
  }

  export type CharacteristicCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type CharacteristicMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type CharacteristicMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    type?: SortOrder
    categoryId?: SortOrder
  }

  export type AnnouncementScalarRelationFilter = {
    is?: AnnouncementWhereInput
    isNot?: AnnouncementWhereInput
  }

  export type CharacteristicScalarRelationFilter = {
    is?: CharacteristicWhereInput
    isNot?: CharacteristicWhereInput
  }

  export type AnnouncementCharacteristicCountOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    characteristicId?: SortOrder
  }

  export type AnnouncementCharacteristicMaxOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    characteristicId?: SortOrder
  }

  export type AnnouncementCharacteristicMinOrderByAggregateInput = {
    id?: SortOrder
    value?: SortOrder
    productId?: SortOrder
    characteristicId?: SortOrder
  }

  export type ChatCountOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMaxOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ChatMinOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ChatScalarRelationFilter = {
    is?: ChatWhereInput
    isNot?: ChatWhereInput
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    Content?: SortOrder
    Status?: SortOrder
    Date?: SortOrder
    userID?: SortOrder
    chatID?: SortOrder
  }

  export type MessageAvgOrderByAggregateInput = {
    Status?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    Content?: SortOrder
    Status?: SortOrder
    Date?: SortOrder
    userID?: SortOrder
    chatID?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    Content?: SortOrder
    Status?: SortOrder
    Date?: SortOrder
    userID?: SortOrder
    chatID?: SortOrder
  }

  export type MessageSumOrderByAggregateInput = {
    Status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ChatMembersCountOrderByAggregateInput = {
    id?: SortOrder
    chatID?: SortOrder
    userID?: SortOrder
  }

  export type ChatMembersMaxOrderByAggregateInput = {
    id?: SortOrder
    chatID?: SortOrder
    userID?: SortOrder
  }

  export type ChatMembersMinOrderByAggregateInput = {
    id?: SortOrder
    chatID?: SortOrder
    userID?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    description?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    description?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    grade?: SortOrder
    description?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    grade?: SortOrder
  }

  export type FavouritesCountOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
  }

  export type FavouritesMaxOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
  }

  export type FavouritesMinOrderByAggregateInput = {
    id?: SortOrder
    userID?: SortOrder
    announcementID?: SortOrder
  }

  export type PhotoCountOrderByAggregateInput = {
    PhotoID?: SortOrder
    name?: SortOrder
    resolution?: SortOrder
    link?: SortOrder
    announcementID?: SortOrder
  }

  export type PhotoMaxOrderByAggregateInput = {
    PhotoID?: SortOrder
    name?: SortOrder
    resolution?: SortOrder
    link?: SortOrder
    announcementID?: SortOrder
  }

  export type PhotoMinOrderByAggregateInput = {
    PhotoID?: SortOrder
    name?: SortOrder
    resolution?: SortOrder
    link?: SortOrder
    announcementID?: SortOrder
  }

  export type AnnouncementCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMembersCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMembersCreateWithoutUserInput, ChatMembersUncheckedCreateWithoutUserInput> | ChatMembersCreateWithoutUserInput[] | ChatMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMembersCreateOrConnectWithoutUserInput | ChatMembersCreateOrConnectWithoutUserInput[]
    createMany?: ChatMembersCreateManyUserInputEnvelope
    connect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FavouritesCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput> | FavouritesCreateWithoutUserInput[] | FavouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutUserInput | FavouritesCreateOrConnectWithoutUserInput[]
    createMany?: FavouritesCreateManyUserInputEnvelope
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMembersUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ChatMembersCreateWithoutUserInput, ChatMembersUncheckedCreateWithoutUserInput> | ChatMembersCreateWithoutUserInput[] | ChatMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMembersCreateOrConnectWithoutUserInput | ChatMembersCreateOrConnectWithoutUserInput[]
    createMany?: ChatMembersCreateManyUserInputEnvelope
    connect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FavouritesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput> | FavouritesCreateWithoutUserInput[] | FavouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutUserInput | FavouritesCreateOrConnectWithoutUserInput[]
    createMany?: FavouritesCreateManyUserInputEnvelope
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AnnouncementUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutUserInput | AnnouncementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutUserInput | AnnouncementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutUserInput | AnnouncementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMembersUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMembersCreateWithoutUserInput, ChatMembersUncheckedCreateWithoutUserInput> | ChatMembersCreateWithoutUserInput[] | ChatMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMembersCreateOrConnectWithoutUserInput | ChatMembersCreateOrConnectWithoutUserInput[]
    upsert?: ChatMembersUpsertWithWhereUniqueWithoutUserInput | ChatMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMembersCreateManyUserInputEnvelope
    set?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    disconnect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    delete?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    connect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    update?: ChatMembersUpdateWithWhereUniqueWithoutUserInput | ChatMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMembersUpdateManyWithWhereWithoutUserInput | ChatMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMembersScalarWhereInput | ChatMembersScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FavouritesUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput> | FavouritesCreateWithoutUserInput[] | FavouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutUserInput | FavouritesCreateOrConnectWithoutUserInput[]
    upsert?: FavouritesUpsertWithWhereUniqueWithoutUserInput | FavouritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouritesCreateManyUserInputEnvelope
    set?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    disconnect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    delete?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    update?: FavouritesUpdateWithWhereUniqueWithoutUserInput | FavouritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouritesUpdateManyWithWhereWithoutUserInput | FavouritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput> | AnnouncementCreateWithoutUserInput[] | AnnouncementUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutUserInput | AnnouncementCreateOrConnectWithoutUserInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutUserInput | AnnouncementUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AnnouncementCreateManyUserInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutUserInput | AnnouncementUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutUserInput | AnnouncementUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput> | MessageCreateWithoutUserInput[] | MessageUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutUserInput | MessageCreateOrConnectWithoutUserInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutUserInput | MessageUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageCreateManyUserInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutUserInput | MessageUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutUserInput | MessageUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMembersUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ChatMembersCreateWithoutUserInput, ChatMembersUncheckedCreateWithoutUserInput> | ChatMembersCreateWithoutUserInput[] | ChatMembersUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ChatMembersCreateOrConnectWithoutUserInput | ChatMembersCreateOrConnectWithoutUserInput[]
    upsert?: ChatMembersUpsertWithWhereUniqueWithoutUserInput | ChatMembersUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ChatMembersCreateManyUserInputEnvelope
    set?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    disconnect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    delete?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    connect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    update?: ChatMembersUpdateWithWhereUniqueWithoutUserInput | ChatMembersUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ChatMembersUpdateManyWithWhereWithoutUserInput | ChatMembersUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ChatMembersScalarWhereInput | ChatMembersScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FavouritesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput> | FavouritesCreateWithoutUserInput[] | FavouritesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutUserInput | FavouritesCreateOrConnectWithoutUserInput[]
    upsert?: FavouritesUpsertWithWhereUniqueWithoutUserInput | FavouritesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavouritesCreateManyUserInputEnvelope
    set?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    disconnect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    delete?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    update?: FavouritesUpdateWithWhereUniqueWithoutUserInput | FavouritesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavouritesUpdateManyWithWhereWithoutUserInput | FavouritesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
  }

  export type CategoryCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AnnouncementCreateWithoutCategoryInput, AnnouncementUncheckedCreateWithoutCategoryInput> | AnnouncementCreateWithoutCategoryInput[] | AnnouncementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCategoryInput | AnnouncementCreateOrConnectWithoutCategoryInput[]
    createMany?: AnnouncementCreateManyCategoryInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type CharacteristicCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CharacteristicCreateWithoutCategoryInput, CharacteristicUncheckedCreateWithoutCategoryInput> | CharacteristicCreateWithoutCategoryInput[] | CharacteristicUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CharacteristicCreateOrConnectWithoutCategoryInput | CharacteristicCreateOrConnectWithoutCategoryInput[]
    createMany?: CharacteristicCreateManyCategoryInputEnvelope
    connect?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutChildrenInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    connect?: CategoryWhereUniqueInput
  }

  export type CategoryUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<AnnouncementCreateWithoutCategoryInput, AnnouncementUncheckedCreateWithoutCategoryInput> | AnnouncementCreateWithoutCategoryInput[] | AnnouncementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCategoryInput | AnnouncementCreateOrConnectWithoutCategoryInput[]
    createMany?: AnnouncementCreateManyCategoryInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type CharacteristicUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<CharacteristicCreateWithoutCategoryInput, CharacteristicUncheckedCreateWithoutCategoryInput> | CharacteristicCreateWithoutCategoryInput[] | CharacteristicUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CharacteristicCreateOrConnectWithoutCategoryInput | CharacteristicCreateOrConnectWithoutCategoryInput[]
    createMany?: CharacteristicCreateManyCategoryInputEnvelope
    connect?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
  }

  export type CategoryUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AnnouncementCreateWithoutCategoryInput, AnnouncementUncheckedCreateWithoutCategoryInput> | AnnouncementCreateWithoutCategoryInput[] | AnnouncementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCategoryInput | AnnouncementCreateOrConnectWithoutCategoryInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutCategoryInput | AnnouncementUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AnnouncementCreateManyCategoryInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutCategoryInput | AnnouncementUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutCategoryInput | AnnouncementUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type CharacteristicUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CharacteristicCreateWithoutCategoryInput, CharacteristicUncheckedCreateWithoutCategoryInput> | CharacteristicCreateWithoutCategoryInput[] | CharacteristicUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CharacteristicCreateOrConnectWithoutCategoryInput | CharacteristicCreateOrConnectWithoutCategoryInput[]
    upsert?: CharacteristicUpsertWithWhereUniqueWithoutCategoryInput | CharacteristicUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CharacteristicCreateManyCategoryInputEnvelope
    set?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
    disconnect?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
    delete?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
    connect?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
    update?: CharacteristicUpdateWithWhereUniqueWithoutCategoryInput | CharacteristicUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CharacteristicUpdateManyWithWhereWithoutCategoryInput | CharacteristicUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CharacteristicScalarWhereInput | CharacteristicScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutChildrenInput
    upsert?: CategoryUpsertWithoutChildrenInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutChildrenInput, CategoryUpdateWithoutChildrenInput>, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput> | CategoryCreateWithoutParentInput[] | CategoryUncheckedCreateWithoutParentInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutParentInput | CategoryCreateOrConnectWithoutParentInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutParentInput | CategoryUpsertWithWhereUniqueWithoutParentInput[]
    createMany?: CategoryCreateManyParentInputEnvelope
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutParentInput | CategoryUpdateWithWhereUniqueWithoutParentInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutParentInput | CategoryUpdateManyWithWhereWithoutParentInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<AnnouncementCreateWithoutCategoryInput, AnnouncementUncheckedCreateWithoutCategoryInput> | AnnouncementCreateWithoutCategoryInput[] | AnnouncementUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCategoryInput | AnnouncementCreateOrConnectWithoutCategoryInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutCategoryInput | AnnouncementUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: AnnouncementCreateManyCategoryInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutCategoryInput | AnnouncementUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutCategoryInput | AnnouncementUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type CharacteristicUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<CharacteristicCreateWithoutCategoryInput, CharacteristicUncheckedCreateWithoutCategoryInput> | CharacteristicCreateWithoutCategoryInput[] | CharacteristicUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: CharacteristicCreateOrConnectWithoutCategoryInput | CharacteristicCreateOrConnectWithoutCategoryInput[]
    upsert?: CharacteristicUpsertWithWhereUniqueWithoutCategoryInput | CharacteristicUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: CharacteristicCreateManyCategoryInputEnvelope
    set?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
    disconnect?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
    delete?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
    connect?: CharacteristicWhereUniqueInput | CharacteristicWhereUniqueInput[]
    update?: CharacteristicUpdateWithWhereUniqueWithoutCategoryInput | CharacteristicUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: CharacteristicUpdateManyWithWhereWithoutCategoryInput | CharacteristicUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: CharacteristicScalarWhereInput | CharacteristicScalarWhereInput[]
  }

  export type PhotoCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<PhotoCreateWithoutAnnouncementInput, PhotoUncheckedCreateWithoutAnnouncementInput> | PhotoCreateWithoutAnnouncementInput[] | PhotoUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAnnouncementInput | PhotoCreateOrConnectWithoutAnnouncementInput[]
    createMany?: PhotoCreateManyAnnouncementInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<ReviewCreateWithoutAnnouncementInput, ReviewUncheckedCreateWithoutAnnouncementInput> | ReviewCreateWithoutAnnouncementInput[] | ReviewUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAnnouncementInput | ReviewCreateOrConnectWithoutAnnouncementInput[]
    createMany?: ReviewCreateManyAnnouncementInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FavouritesCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<FavouritesCreateWithoutAnnouncementInput, FavouritesUncheckedCreateWithoutAnnouncementInput> | FavouritesCreateWithoutAnnouncementInput[] | FavouritesUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutAnnouncementInput | FavouritesCreateOrConnectWithoutAnnouncementInput[]
    createMany?: FavouritesCreateManyAnnouncementInputEnvelope
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
  }

  export type AnnouncementCharacteristicCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<AnnouncementCharacteristicCreateWithoutAnnouncementInput, AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput> | AnnouncementCharacteristicCreateWithoutAnnouncementInput[] | AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput | AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput[]
    createMany?: AnnouncementCharacteristicCreateManyAnnouncementInputEnvelope
    connect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutAnnouncementInput = {
    create?: XOR<UserCreateWithoutAnnouncementInput, UserUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutAnnouncementInput = {
    create?: XOR<CategoryCreateWithoutAnnouncementInput, CategoryUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAnnouncementInput
    connect?: CategoryWhereUniqueInput
  }

  export type PhotoUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<PhotoCreateWithoutAnnouncementInput, PhotoUncheckedCreateWithoutAnnouncementInput> | PhotoCreateWithoutAnnouncementInput[] | PhotoUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAnnouncementInput | PhotoCreateOrConnectWithoutAnnouncementInput[]
    createMany?: PhotoCreateManyAnnouncementInputEnvelope
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<ReviewCreateWithoutAnnouncementInput, ReviewUncheckedCreateWithoutAnnouncementInput> | ReviewCreateWithoutAnnouncementInput[] | ReviewUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAnnouncementInput | ReviewCreateOrConnectWithoutAnnouncementInput[]
    createMany?: ReviewCreateManyAnnouncementInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FavouritesUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<FavouritesCreateWithoutAnnouncementInput, FavouritesUncheckedCreateWithoutAnnouncementInput> | FavouritesCreateWithoutAnnouncementInput[] | FavouritesUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutAnnouncementInput | FavouritesCreateOrConnectWithoutAnnouncementInput[]
    createMany?: FavouritesCreateManyAnnouncementInputEnvelope
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
  }

  export type AnnouncementCharacteristicUncheckedCreateNestedManyWithoutAnnouncementInput = {
    create?: XOR<AnnouncementCharacteristicCreateWithoutAnnouncementInput, AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput> | AnnouncementCharacteristicCreateWithoutAnnouncementInput[] | AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput | AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput[]
    createMany?: AnnouncementCharacteristicCreateManyAnnouncementInputEnvelope
    connect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumAnnouncementStatusFieldUpdateOperationsInput = {
    set?: $Enums.AnnouncementStatus
  }

  export type EnumProductConditionFieldUpdateOperationsInput = {
    set?: $Enums.ProductCondition
  }

  export type PhotoUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<PhotoCreateWithoutAnnouncementInput, PhotoUncheckedCreateWithoutAnnouncementInput> | PhotoCreateWithoutAnnouncementInput[] | PhotoUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAnnouncementInput | PhotoCreateOrConnectWithoutAnnouncementInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutAnnouncementInput | PhotoUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: PhotoCreateManyAnnouncementInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutAnnouncementInput | PhotoUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutAnnouncementInput | PhotoUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<ReviewCreateWithoutAnnouncementInput, ReviewUncheckedCreateWithoutAnnouncementInput> | ReviewCreateWithoutAnnouncementInput[] | ReviewUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAnnouncementInput | ReviewCreateOrConnectWithoutAnnouncementInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAnnouncementInput | ReviewUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: ReviewCreateManyAnnouncementInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAnnouncementInput | ReviewUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAnnouncementInput | ReviewUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FavouritesUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<FavouritesCreateWithoutAnnouncementInput, FavouritesUncheckedCreateWithoutAnnouncementInput> | FavouritesCreateWithoutAnnouncementInput[] | FavouritesUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutAnnouncementInput | FavouritesCreateOrConnectWithoutAnnouncementInput[]
    upsert?: FavouritesUpsertWithWhereUniqueWithoutAnnouncementInput | FavouritesUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: FavouritesCreateManyAnnouncementInputEnvelope
    set?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    disconnect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    delete?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    update?: FavouritesUpdateWithWhereUniqueWithoutAnnouncementInput | FavouritesUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: FavouritesUpdateManyWithWhereWithoutAnnouncementInput | FavouritesUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
  }

  export type AnnouncementCharacteristicUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<AnnouncementCharacteristicCreateWithoutAnnouncementInput, AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput> | AnnouncementCharacteristicCreateWithoutAnnouncementInput[] | AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput | AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput[]
    upsert?: AnnouncementCharacteristicUpsertWithWhereUniqueWithoutAnnouncementInput | AnnouncementCharacteristicUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: AnnouncementCharacteristicCreateManyAnnouncementInputEnvelope
    set?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    disconnect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    delete?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    connect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    update?: AnnouncementCharacteristicUpdateWithWhereUniqueWithoutAnnouncementInput | AnnouncementCharacteristicUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: AnnouncementCharacteristicUpdateManyWithWhereWithoutAnnouncementInput | AnnouncementCharacteristicUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: AnnouncementCharacteristicScalarWhereInput | AnnouncementCharacteristicScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutAnnouncementNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementInput, UserUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementInput
    upsert?: UserUpsertWithoutAnnouncementInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementInput, UserUpdateWithoutAnnouncementInput>, UserUncheckedUpdateWithoutAnnouncementInput>
  }

  export type CategoryUpdateOneRequiredWithoutAnnouncementNestedInput = {
    create?: XOR<CategoryCreateWithoutAnnouncementInput, CategoryUncheckedCreateWithoutAnnouncementInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutAnnouncementInput
    upsert?: CategoryUpsertWithoutAnnouncementInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutAnnouncementInput, CategoryUpdateWithoutAnnouncementInput>, CategoryUncheckedUpdateWithoutAnnouncementInput>
  }

  export type PhotoUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<PhotoCreateWithoutAnnouncementInput, PhotoUncheckedCreateWithoutAnnouncementInput> | PhotoCreateWithoutAnnouncementInput[] | PhotoUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: PhotoCreateOrConnectWithoutAnnouncementInput | PhotoCreateOrConnectWithoutAnnouncementInput[]
    upsert?: PhotoUpsertWithWhereUniqueWithoutAnnouncementInput | PhotoUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: PhotoCreateManyAnnouncementInputEnvelope
    set?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    disconnect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    delete?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    connect?: PhotoWhereUniqueInput | PhotoWhereUniqueInput[]
    update?: PhotoUpdateWithWhereUniqueWithoutAnnouncementInput | PhotoUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: PhotoUpdateManyWithWhereWithoutAnnouncementInput | PhotoUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<ReviewCreateWithoutAnnouncementInput, ReviewUncheckedCreateWithoutAnnouncementInput> | ReviewCreateWithoutAnnouncementInput[] | ReviewUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAnnouncementInput | ReviewCreateOrConnectWithoutAnnouncementInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAnnouncementInput | ReviewUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: ReviewCreateManyAnnouncementInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAnnouncementInput | ReviewUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAnnouncementInput | ReviewUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FavouritesUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<FavouritesCreateWithoutAnnouncementInput, FavouritesUncheckedCreateWithoutAnnouncementInput> | FavouritesCreateWithoutAnnouncementInput[] | FavouritesUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: FavouritesCreateOrConnectWithoutAnnouncementInput | FavouritesCreateOrConnectWithoutAnnouncementInput[]
    upsert?: FavouritesUpsertWithWhereUniqueWithoutAnnouncementInput | FavouritesUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: FavouritesCreateManyAnnouncementInputEnvelope
    set?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    disconnect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    delete?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    connect?: FavouritesWhereUniqueInput | FavouritesWhereUniqueInput[]
    update?: FavouritesUpdateWithWhereUniqueWithoutAnnouncementInput | FavouritesUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: FavouritesUpdateManyWithWhereWithoutAnnouncementInput | FavouritesUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
  }

  export type AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementNestedInput = {
    create?: XOR<AnnouncementCharacteristicCreateWithoutAnnouncementInput, AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput> | AnnouncementCharacteristicCreateWithoutAnnouncementInput[] | AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput[]
    connectOrCreate?: AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput | AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput[]
    upsert?: AnnouncementCharacteristicUpsertWithWhereUniqueWithoutAnnouncementInput | AnnouncementCharacteristicUpsertWithWhereUniqueWithoutAnnouncementInput[]
    createMany?: AnnouncementCharacteristicCreateManyAnnouncementInputEnvelope
    set?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    disconnect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    delete?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    connect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    update?: AnnouncementCharacteristicUpdateWithWhereUniqueWithoutAnnouncementInput | AnnouncementCharacteristicUpdateWithWhereUniqueWithoutAnnouncementInput[]
    updateMany?: AnnouncementCharacteristicUpdateManyWithWhereWithoutAnnouncementInput | AnnouncementCharacteristicUpdateManyWithWhereWithoutAnnouncementInput[]
    deleteMany?: AnnouncementCharacteristicScalarWhereInput | AnnouncementCharacteristicScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutCharacteristicInput = {
    create?: XOR<CategoryCreateWithoutCharacteristicInput, CategoryUncheckedCreateWithoutCharacteristicInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCharacteristicInput
    connect?: CategoryWhereUniqueInput
  }

  export type AnnouncementCharacteristicCreateNestedManyWithoutCharacteristicInput = {
    create?: XOR<AnnouncementCharacteristicCreateWithoutCharacteristicInput, AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput> | AnnouncementCharacteristicCreateWithoutCharacteristicInput[] | AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput[]
    connectOrCreate?: AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput | AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput[]
    createMany?: AnnouncementCharacteristicCreateManyCharacteristicInputEnvelope
    connect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
  }

  export type AnnouncementCharacteristicUncheckedCreateNestedManyWithoutCharacteristicInput = {
    create?: XOR<AnnouncementCharacteristicCreateWithoutCharacteristicInput, AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput> | AnnouncementCharacteristicCreateWithoutCharacteristicInput[] | AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput[]
    connectOrCreate?: AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput | AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput[]
    createMany?: AnnouncementCharacteristicCreateManyCharacteristicInputEnvelope
    connect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
  }

  export type CategoryUpdateOneRequiredWithoutCharacteristicNestedInput = {
    create?: XOR<CategoryCreateWithoutCharacteristicInput, CategoryUncheckedCreateWithoutCharacteristicInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutCharacteristicInput
    upsert?: CategoryUpsertWithoutCharacteristicInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutCharacteristicInput, CategoryUpdateWithoutCharacteristicInput>, CategoryUncheckedUpdateWithoutCharacteristicInput>
  }

  export type AnnouncementCharacteristicUpdateManyWithoutCharacteristicNestedInput = {
    create?: XOR<AnnouncementCharacteristicCreateWithoutCharacteristicInput, AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput> | AnnouncementCharacteristicCreateWithoutCharacteristicInput[] | AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput[]
    connectOrCreate?: AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput | AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput[]
    upsert?: AnnouncementCharacteristicUpsertWithWhereUniqueWithoutCharacteristicInput | AnnouncementCharacteristicUpsertWithWhereUniqueWithoutCharacteristicInput[]
    createMany?: AnnouncementCharacteristicCreateManyCharacteristicInputEnvelope
    set?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    disconnect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    delete?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    connect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    update?: AnnouncementCharacteristicUpdateWithWhereUniqueWithoutCharacteristicInput | AnnouncementCharacteristicUpdateWithWhereUniqueWithoutCharacteristicInput[]
    updateMany?: AnnouncementCharacteristicUpdateManyWithWhereWithoutCharacteristicInput | AnnouncementCharacteristicUpdateManyWithWhereWithoutCharacteristicInput[]
    deleteMany?: AnnouncementCharacteristicScalarWhereInput | AnnouncementCharacteristicScalarWhereInput[]
  }

  export type AnnouncementCharacteristicUncheckedUpdateManyWithoutCharacteristicNestedInput = {
    create?: XOR<AnnouncementCharacteristicCreateWithoutCharacteristicInput, AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput> | AnnouncementCharacteristicCreateWithoutCharacteristicInput[] | AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput[]
    connectOrCreate?: AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput | AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput[]
    upsert?: AnnouncementCharacteristicUpsertWithWhereUniqueWithoutCharacteristicInput | AnnouncementCharacteristicUpsertWithWhereUniqueWithoutCharacteristicInput[]
    createMany?: AnnouncementCharacteristicCreateManyCharacteristicInputEnvelope
    set?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    disconnect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    delete?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    connect?: AnnouncementCharacteristicWhereUniqueInput | AnnouncementCharacteristicWhereUniqueInput[]
    update?: AnnouncementCharacteristicUpdateWithWhereUniqueWithoutCharacteristicInput | AnnouncementCharacteristicUpdateWithWhereUniqueWithoutCharacteristicInput[]
    updateMany?: AnnouncementCharacteristicUpdateManyWithWhereWithoutCharacteristicInput | AnnouncementCharacteristicUpdateManyWithWhereWithoutCharacteristicInput[]
    deleteMany?: AnnouncementCharacteristicScalarWhereInput | AnnouncementCharacteristicScalarWhereInput[]
  }

  export type AnnouncementCreateNestedOneWithoutAnnouncementCharacteristicInput = {
    create?: XOR<AnnouncementCreateWithoutAnnouncementCharacteristicInput, AnnouncementUncheckedCreateWithoutAnnouncementCharacteristicInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAnnouncementCharacteristicInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type CharacteristicCreateNestedOneWithoutAnnouncementCharacteristicInput = {
    create?: XOR<CharacteristicCreateWithoutAnnouncementCharacteristicInput, CharacteristicUncheckedCreateWithoutAnnouncementCharacteristicInput>
    connectOrCreate?: CharacteristicCreateOrConnectWithoutAnnouncementCharacteristicInput
    connect?: CharacteristicWhereUniqueInput
  }

  export type AnnouncementUpdateOneRequiredWithoutAnnouncementCharacteristicNestedInput = {
    create?: XOR<AnnouncementCreateWithoutAnnouncementCharacteristicInput, AnnouncementUncheckedCreateWithoutAnnouncementCharacteristicInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutAnnouncementCharacteristicInput
    upsert?: AnnouncementUpsertWithoutAnnouncementCharacteristicInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutAnnouncementCharacteristicInput, AnnouncementUpdateWithoutAnnouncementCharacteristicInput>, AnnouncementUncheckedUpdateWithoutAnnouncementCharacteristicInput>
  }

  export type CharacteristicUpdateOneRequiredWithoutAnnouncementCharacteristicNestedInput = {
    create?: XOR<CharacteristicCreateWithoutAnnouncementCharacteristicInput, CharacteristicUncheckedCreateWithoutAnnouncementCharacteristicInput>
    connectOrCreate?: CharacteristicCreateOrConnectWithoutAnnouncementCharacteristicInput
    upsert?: CharacteristicUpsertWithoutAnnouncementCharacteristicInput
    connect?: CharacteristicWhereUniqueInput
    update?: XOR<XOR<CharacteristicUpdateToOneWithWhereWithoutAnnouncementCharacteristicInput, CharacteristicUpdateWithoutAnnouncementCharacteristicInput>, CharacteristicUncheckedUpdateWithoutAnnouncementCharacteristicInput>
  }

  export type MessageCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMembersCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMembersCreateWithoutChatInput, ChatMembersUncheckedCreateWithoutChatInput> | ChatMembersCreateWithoutChatInput[] | ChatMembersUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMembersCreateOrConnectWithoutChatInput | ChatMembersCreateOrConnectWithoutChatInput[]
    createMany?: ChatMembersCreateManyChatInputEnvelope
    connect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type ChatMembersUncheckedCreateNestedManyWithoutChatInput = {
    create?: XOR<ChatMembersCreateWithoutChatInput, ChatMembersUncheckedCreateWithoutChatInput> | ChatMembersCreateWithoutChatInput[] | ChatMembersUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMembersCreateOrConnectWithoutChatInput | ChatMembersCreateOrConnectWithoutChatInput[]
    createMany?: ChatMembersCreateManyChatInputEnvelope
    connect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
  }

  export type MessageUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMembersUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMembersCreateWithoutChatInput, ChatMembersUncheckedCreateWithoutChatInput> | ChatMembersCreateWithoutChatInput[] | ChatMembersUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMembersCreateOrConnectWithoutChatInput | ChatMembersCreateOrConnectWithoutChatInput[]
    upsert?: ChatMembersUpsertWithWhereUniqueWithoutChatInput | ChatMembersUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMembersCreateManyChatInputEnvelope
    set?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    disconnect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    delete?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    connect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    update?: ChatMembersUpdateWithWhereUniqueWithoutChatInput | ChatMembersUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMembersUpdateManyWithWhereWithoutChatInput | ChatMembersUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMembersScalarWhereInput | ChatMembersScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput> | MessageCreateWithoutChatInput[] | MessageUncheckedCreateWithoutChatInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutChatInput | MessageCreateOrConnectWithoutChatInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutChatInput | MessageUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: MessageCreateManyChatInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutChatInput | MessageUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutChatInput | MessageUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type ChatMembersUncheckedUpdateManyWithoutChatNestedInput = {
    create?: XOR<ChatMembersCreateWithoutChatInput, ChatMembersUncheckedCreateWithoutChatInput> | ChatMembersCreateWithoutChatInput[] | ChatMembersUncheckedCreateWithoutChatInput[]
    connectOrCreate?: ChatMembersCreateOrConnectWithoutChatInput | ChatMembersCreateOrConnectWithoutChatInput[]
    upsert?: ChatMembersUpsertWithWhereUniqueWithoutChatInput | ChatMembersUpsertWithWhereUniqueWithoutChatInput[]
    createMany?: ChatMembersCreateManyChatInputEnvelope
    set?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    disconnect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    delete?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    connect?: ChatMembersWhereUniqueInput | ChatMembersWhereUniqueInput[]
    update?: ChatMembersUpdateWithWhereUniqueWithoutChatInput | ChatMembersUpdateWithWhereUniqueWithoutChatInput[]
    updateMany?: ChatMembersUpdateManyWithWhereWithoutChatInput | ChatMembersUpdateManyWithWhereWithoutChatInput[]
    deleteMany?: ChatMembersScalarWhereInput | ChatMembersScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMessageInput = {
    create?: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutMessagesInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    connect?: ChatWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutMessageNestedInput = {
    create?: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageInput
    upsert?: UserUpsertWithoutMessageInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessageInput, UserUpdateWithoutMessageInput>, UserUncheckedUpdateWithoutMessageInput>
  }

  export type ChatUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: ChatCreateOrConnectWithoutMessagesInput
    upsert?: ChatUpsertWithoutMessagesInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutMessagesInput, ChatUpdateWithoutMessagesInput>, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type UserCreateNestedOneWithoutChatMembersInput = {
    create?: XOR<UserCreateWithoutChatMembersInput, UserUncheckedCreateWithoutChatMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMembersInput
    connect?: UserWhereUniqueInput
  }

  export type ChatCreateNestedOneWithoutChatMembersInput = {
    create?: XOR<ChatCreateWithoutChatMembersInput, ChatUncheckedCreateWithoutChatMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutChatMembersInput
    connect?: ChatWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutChatMembersNestedInput = {
    create?: XOR<UserCreateWithoutChatMembersInput, UserUncheckedCreateWithoutChatMembersInput>
    connectOrCreate?: UserCreateOrConnectWithoutChatMembersInput
    upsert?: UserUpsertWithoutChatMembersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChatMembersInput, UserUpdateWithoutChatMembersInput>, UserUncheckedUpdateWithoutChatMembersInput>
  }

  export type ChatUpdateOneRequiredWithoutChatMembersNestedInput = {
    create?: XOR<ChatCreateWithoutChatMembersInput, ChatUncheckedCreateWithoutChatMembersInput>
    connectOrCreate?: ChatCreateOrConnectWithoutChatMembersInput
    upsert?: ChatUpsertWithoutChatMembersInput
    connect?: ChatWhereUniqueInput
    update?: XOR<XOR<ChatUpdateToOneWithWhereWithoutChatMembersInput, ChatUpdateWithoutChatMembersInput>, ChatUncheckedUpdateWithoutChatMembersInput>
  }

  export type UserCreateNestedOneWithoutReviewInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    connect?: UserWhereUniqueInput
  }

  export type AnnouncementCreateNestedOneWithoutReviewInput = {
    create?: XOR<AnnouncementCreateWithoutReviewInput, AnnouncementUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutReviewInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewInput
    upsert?: UserUpsertWithoutReviewInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewInput, UserUpdateWithoutReviewInput>, UserUncheckedUpdateWithoutReviewInput>
  }

  export type AnnouncementUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<AnnouncementCreateWithoutReviewInput, AnnouncementUncheckedCreateWithoutReviewInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutReviewInput
    upsert?: AnnouncementUpsertWithoutReviewInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutReviewInput, AnnouncementUpdateWithoutReviewInput>, AnnouncementUncheckedUpdateWithoutReviewInput>
  }

  export type UserCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    connect?: UserWhereUniqueInput
  }

  export type AnnouncementCreateNestedOneWithoutFavouritesInput = {
    create?: XOR<AnnouncementCreateWithoutFavouritesInput, AnnouncementUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutFavouritesInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavouritesInput
    upsert?: UserUpsertWithoutFavouritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavouritesInput, UserUpdateWithoutFavouritesInput>, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type AnnouncementUpdateOneRequiredWithoutFavouritesNestedInput = {
    create?: XOR<AnnouncementCreateWithoutFavouritesInput, AnnouncementUncheckedCreateWithoutFavouritesInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutFavouritesInput
    upsert?: AnnouncementUpsertWithoutFavouritesInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutFavouritesInput, AnnouncementUpdateWithoutFavouritesInput>, AnnouncementUncheckedUpdateWithoutFavouritesInput>
  }

  export type AnnouncementCreateNestedOneWithoutPhotoInput = {
    create?: XOR<AnnouncementCreateWithoutPhotoInput, AnnouncementUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutPhotoInput
    connect?: AnnouncementWhereUniqueInput
  }

  export type AnnouncementUpdateOneRequiredWithoutPhotoNestedInput = {
    create?: XOR<AnnouncementCreateWithoutPhotoInput, AnnouncementUncheckedCreateWithoutPhotoInput>
    connectOrCreate?: AnnouncementCreateOrConnectWithoutPhotoInput
    upsert?: AnnouncementUpsertWithoutPhotoInput
    connect?: AnnouncementWhereUniqueInput
    update?: XOR<XOR<AnnouncementUpdateToOneWithWhereWithoutPhotoInput, AnnouncementUpdateWithoutPhotoInput>, AnnouncementUncheckedUpdateWithoutPhotoInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumAnnouncementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementStatus | EnumAnnouncementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementStatusFilter<$PrismaModel> | $Enums.AnnouncementStatus
  }

  export type NestedEnumProductConditionFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCondition | EnumProductConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumProductConditionFilter<$PrismaModel> | $Enums.ProductCondition
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumAnnouncementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AnnouncementStatus | EnumAnnouncementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AnnouncementStatus[] | ListEnumAnnouncementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAnnouncementStatusWithAggregatesFilter<$PrismaModel> | $Enums.AnnouncementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAnnouncementStatusFilter<$PrismaModel>
    _max?: NestedEnumAnnouncementStatusFilter<$PrismaModel>
  }

  export type NestedEnumProductConditionWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ProductCondition | EnumProductConditionFieldRefInput<$PrismaModel>
    in?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel>
    notIn?: $Enums.ProductCondition[] | ListEnumProductConditionFieldRefInput<$PrismaModel>
    not?: NestedEnumProductConditionWithAggregatesFilter<$PrismaModel> | $Enums.ProductCondition
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumProductConditionFilter<$PrismaModel>
    _max?: NestedEnumProductConditionFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AnnouncementCreateWithoutUserInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    photo?: PhotoCreateNestedManyWithoutAnnouncementInput
    review?: ReviewCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicCreateNestedManyWithoutAnnouncementInput
    category: CategoryCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    categoryId: string
    photo?: PhotoUncheckedCreateNestedManyWithoutAnnouncementInput
    review?: ReviewUncheckedCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput>
  }

  export type AnnouncementCreateManyUserInputEnvelope = {
    data: AnnouncementCreateManyUserInput | AnnouncementCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutUserInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    chat: ChatCreateNestedOneWithoutMessagesInput
  }

  export type MessageUncheckedCreateWithoutUserInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    chatID: string
  }

  export type MessageCreateOrConnectWithoutUserInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageCreateManyUserInputEnvelope = {
    data: MessageCreateManyUserInput | MessageCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ChatMembersCreateWithoutUserInput = {
    id?: string
    chat: ChatCreateNestedOneWithoutChatMembersInput
  }

  export type ChatMembersUncheckedCreateWithoutUserInput = {
    id?: string
    chatID: string
  }

  export type ChatMembersCreateOrConnectWithoutUserInput = {
    where: ChatMembersWhereUniqueInput
    create: XOR<ChatMembersCreateWithoutUserInput, ChatMembersUncheckedCreateWithoutUserInput>
  }

  export type ChatMembersCreateManyUserInputEnvelope = {
    data: ChatMembersCreateManyUserInput | ChatMembersCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    grade: number
    description: string
    announcement: AnnouncementCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    grade: number
    description: string
    announcementID: string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavouritesCreateWithoutUserInput = {
    id?: string
    announcement: AnnouncementCreateNestedOneWithoutFavouritesInput
  }

  export type FavouritesUncheckedCreateWithoutUserInput = {
    id?: string
    announcementID: string
  }

  export type FavouritesCreateOrConnectWithoutUserInput = {
    where: FavouritesWhereUniqueInput
    create: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput>
  }

  export type FavouritesCreateManyUserInputEnvelope = {
    data: FavouritesCreateManyUserInput | FavouritesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutUserInput, AnnouncementUncheckedUpdateWithoutUserInput>
    create: XOR<AnnouncementCreateWithoutUserInput, AnnouncementUncheckedCreateWithoutUserInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutUserInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutUserInput, AnnouncementUncheckedUpdateWithoutUserInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutUserInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutUserInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: StringFilter<"Announcement"> | string
    name?: StringFilter<"Announcement"> | string
    price?: FloatFilter<"Announcement"> | number
    description?: StringFilter<"Announcement"> | string
    placementDate?: DateTimeFilter<"Announcement"> | Date | string
    status?: EnumAnnouncementStatusFilter<"Announcement"> | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFilter<"Announcement"> | $Enums.ProductCondition
    userId?: StringFilter<"Announcement"> | string
    categoryId?: StringFilter<"Announcement"> | string
  }

  export type MessageUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
    create: XOR<MessageCreateWithoutUserInput, MessageUncheckedCreateWithoutUserInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutUserInput, MessageUncheckedUpdateWithoutUserInput>
  }

  export type MessageUpdateManyWithWhereWithoutUserInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: StringFilter<"Message"> | string
    Content?: StringFilter<"Message"> | string
    Status?: IntFilter<"Message"> | number
    Date?: DateTimeFilter<"Message"> | Date | string
    userID?: StringFilter<"Message"> | string
    chatID?: StringFilter<"Message"> | string
  }

  export type ChatMembersUpsertWithWhereUniqueWithoutUserInput = {
    where: ChatMembersWhereUniqueInput
    update: XOR<ChatMembersUpdateWithoutUserInput, ChatMembersUncheckedUpdateWithoutUserInput>
    create: XOR<ChatMembersCreateWithoutUserInput, ChatMembersUncheckedCreateWithoutUserInput>
  }

  export type ChatMembersUpdateWithWhereUniqueWithoutUserInput = {
    where: ChatMembersWhereUniqueInput
    data: XOR<ChatMembersUpdateWithoutUserInput, ChatMembersUncheckedUpdateWithoutUserInput>
  }

  export type ChatMembersUpdateManyWithWhereWithoutUserInput = {
    where: ChatMembersScalarWhereInput
    data: XOR<ChatMembersUpdateManyMutationInput, ChatMembersUncheckedUpdateManyWithoutUserInput>
  }

  export type ChatMembersScalarWhereInput = {
    AND?: ChatMembersScalarWhereInput | ChatMembersScalarWhereInput[]
    OR?: ChatMembersScalarWhereInput[]
    NOT?: ChatMembersScalarWhereInput | ChatMembersScalarWhereInput[]
    id?: StringFilter<"ChatMembers"> | string
    chatID?: StringFilter<"ChatMembers"> | string
    userID?: StringFilter<"ChatMembers"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    grade?: FloatFilter<"Review"> | number
    description?: StringFilter<"Review"> | string
    userID?: StringFilter<"Review"> | string
    announcementID?: StringFilter<"Review"> | string
  }

  export type FavouritesUpsertWithWhereUniqueWithoutUserInput = {
    where: FavouritesWhereUniqueInput
    update: XOR<FavouritesUpdateWithoutUserInput, FavouritesUncheckedUpdateWithoutUserInput>
    create: XOR<FavouritesCreateWithoutUserInput, FavouritesUncheckedCreateWithoutUserInput>
  }

  export type FavouritesUpdateWithWhereUniqueWithoutUserInput = {
    where: FavouritesWhereUniqueInput
    data: XOR<FavouritesUpdateWithoutUserInput, FavouritesUncheckedUpdateWithoutUserInput>
  }

  export type FavouritesUpdateManyWithWhereWithoutUserInput = {
    where: FavouritesScalarWhereInput
    data: XOR<FavouritesUpdateManyMutationInput, FavouritesUncheckedUpdateManyWithoutUserInput>
  }

  export type FavouritesScalarWhereInput = {
    AND?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
    OR?: FavouritesScalarWhereInput[]
    NOT?: FavouritesScalarWhereInput | FavouritesScalarWhereInput[]
    id?: StringFilter<"Favourites"> | string
    userID?: StringFilter<"Favourites"> | string
    announcementID?: StringFilter<"Favourites"> | string
  }

  export type CategoryCreateWithoutParentInput = {
    id?: string
    name: string
    children?: CategoryCreateNestedManyWithoutParentInput
    announcement?: AnnouncementCreateNestedManyWithoutCategoryInput
    characteristic?: CharacteristicCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateWithoutParentInput = {
    id?: string
    name: string
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutCategoryInput
    characteristic?: CharacteristicUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutParentInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryCreateManyParentInputEnvelope = {
    data: CategoryCreateManyParentInput | CategoryCreateManyParentInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutCategoryInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    photo?: PhotoCreateNestedManyWithoutAnnouncementInput
    review?: ReviewCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicCreateNestedManyWithoutAnnouncementInput
    user: UserCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
    photo?: PhotoUncheckedCreateNestedManyWithoutAnnouncementInput
    review?: ReviewUncheckedCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutCategoryInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutCategoryInput, AnnouncementUncheckedCreateWithoutCategoryInput>
  }

  export type AnnouncementCreateManyCategoryInputEnvelope = {
    data: AnnouncementCreateManyCategoryInput | AnnouncementCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CharacteristicCreateWithoutCategoryInput = {
    id?: string
    name: string
    type: string
    announcementCharacteristic?: AnnouncementCharacteristicCreateNestedManyWithoutCharacteristicInput
  }

  export type CharacteristicUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    type: string
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedCreateNestedManyWithoutCharacteristicInput
  }

  export type CharacteristicCreateOrConnectWithoutCategoryInput = {
    where: CharacteristicWhereUniqueInput
    create: XOR<CharacteristicCreateWithoutCategoryInput, CharacteristicUncheckedCreateWithoutCategoryInput>
  }

  export type CharacteristicCreateManyCategoryInputEnvelope = {
    data: CharacteristicCreateManyCategoryInput | CharacteristicCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutChildrenInput = {
    id?: string
    name: string
    announcement?: AnnouncementCreateNestedManyWithoutCategoryInput
    characteristic?: CharacteristicCreateNestedManyWithoutCategoryInput
    parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateWithoutChildrenInput = {
    id?: string
    name: string
    parent_id?: string | null
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutCategoryInput
    characteristic?: CharacteristicUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutChildrenInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
  }

  export type CategoryUpsertWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
    create: XOR<CategoryCreateWithoutParentInput, CategoryUncheckedCreateWithoutParentInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutParentInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutParentInput, CategoryUncheckedUpdateWithoutParentInput>
  }

  export type CategoryUpdateManyWithWhereWithoutParentInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutParentInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    parent_id?: StringNullableFilter<"Category"> | string | null
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutCategoryInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutCategoryInput, AnnouncementUncheckedUpdateWithoutCategoryInput>
    create: XOR<AnnouncementCreateWithoutCategoryInput, AnnouncementUncheckedCreateWithoutCategoryInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutCategoryInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutCategoryInput, AnnouncementUncheckedUpdateWithoutCategoryInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutCategoryInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CharacteristicUpsertWithWhereUniqueWithoutCategoryInput = {
    where: CharacteristicWhereUniqueInput
    update: XOR<CharacteristicUpdateWithoutCategoryInput, CharacteristicUncheckedUpdateWithoutCategoryInput>
    create: XOR<CharacteristicCreateWithoutCategoryInput, CharacteristicUncheckedCreateWithoutCategoryInput>
  }

  export type CharacteristicUpdateWithWhereUniqueWithoutCategoryInput = {
    where: CharacteristicWhereUniqueInput
    data: XOR<CharacteristicUpdateWithoutCategoryInput, CharacteristicUncheckedUpdateWithoutCategoryInput>
  }

  export type CharacteristicUpdateManyWithWhereWithoutCategoryInput = {
    where: CharacteristicScalarWhereInput
    data: XOR<CharacteristicUpdateManyMutationInput, CharacteristicUncheckedUpdateManyWithoutCategoryInput>
  }

  export type CharacteristicScalarWhereInput = {
    AND?: CharacteristicScalarWhereInput | CharacteristicScalarWhereInput[]
    OR?: CharacteristicScalarWhereInput[]
    NOT?: CharacteristicScalarWhereInput | CharacteristicScalarWhereInput[]
    id?: StringFilter<"Characteristic"> | string
    name?: StringFilter<"Characteristic"> | string
    type?: StringFilter<"Characteristic"> | string
    categoryId?: StringFilter<"Characteristic"> | string
  }

  export type CategoryUpsertWithoutChildrenInput = {
    update: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
    create: XOR<CategoryCreateWithoutChildrenInput, CategoryUncheckedCreateWithoutChildrenInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutChildrenInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutChildrenInput, CategoryUncheckedUpdateWithoutChildrenInput>
  }

  export type CategoryUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    announcement?: AnnouncementUpdateManyWithoutCategoryNestedInput
    characteristic?: CharacteristicUpdateManyWithoutCategoryNestedInput
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
  }

  export type CategoryUncheckedUpdateWithoutChildrenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    announcement?: AnnouncementUncheckedUpdateManyWithoutCategoryNestedInput
    characteristic?: CharacteristicUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type PhotoCreateWithoutAnnouncementInput = {
    PhotoID?: string
    name: string
    resolution: string
    link: string
  }

  export type PhotoUncheckedCreateWithoutAnnouncementInput = {
    PhotoID?: string
    name: string
    resolution: string
    link: string
  }

  export type PhotoCreateOrConnectWithoutAnnouncementInput = {
    where: PhotoWhereUniqueInput
    create: XOR<PhotoCreateWithoutAnnouncementInput, PhotoUncheckedCreateWithoutAnnouncementInput>
  }

  export type PhotoCreateManyAnnouncementInputEnvelope = {
    data: PhotoCreateManyAnnouncementInput | PhotoCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutAnnouncementInput = {
    id?: string
    grade: number
    description: string
    user: UserCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    grade: number
    description: string
    userID: string
  }

  export type ReviewCreateOrConnectWithoutAnnouncementInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAnnouncementInput, ReviewUncheckedCreateWithoutAnnouncementInput>
  }

  export type ReviewCreateManyAnnouncementInputEnvelope = {
    data: ReviewCreateManyAnnouncementInput | ReviewCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type FavouritesCreateWithoutAnnouncementInput = {
    id?: string
    user: UserCreateNestedOneWithoutFavouritesInput
  }

  export type FavouritesUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    userID: string
  }

  export type FavouritesCreateOrConnectWithoutAnnouncementInput = {
    where: FavouritesWhereUniqueInput
    create: XOR<FavouritesCreateWithoutAnnouncementInput, FavouritesUncheckedCreateWithoutAnnouncementInput>
  }

  export type FavouritesCreateManyAnnouncementInputEnvelope = {
    data: FavouritesCreateManyAnnouncementInput | FavouritesCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCharacteristicCreateWithoutAnnouncementInput = {
    id?: string
    value: string
    characteristic: CharacteristicCreateNestedOneWithoutAnnouncementCharacteristicInput
  }

  export type AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    value: string
    characteristicId: string
  }

  export type AnnouncementCharacteristicCreateOrConnectWithoutAnnouncementInput = {
    where: AnnouncementCharacteristicWhereUniqueInput
    create: XOR<AnnouncementCharacteristicCreateWithoutAnnouncementInput, AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput>
  }

  export type AnnouncementCharacteristicCreateManyAnnouncementInputEnvelope = {
    data: AnnouncementCharacteristicCreateManyAnnouncementInput | AnnouncementCharacteristicCreateManyAnnouncementInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAnnouncementInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    message?: MessageCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    Favourites?: FavouritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    message?: MessageUncheckedCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAnnouncementInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementInput, UserUncheckedCreateWithoutAnnouncementInput>
  }

  export type CategoryCreateWithoutAnnouncementInput = {
    id?: string
    name: string
    children?: CategoryCreateNestedManyWithoutParentInput
    characteristic?: CharacteristicCreateNestedManyWithoutCategoryInput
    parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateWithoutAnnouncementInput = {
    id?: string
    name: string
    parent_id?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    characteristic?: CharacteristicUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutAnnouncementInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutAnnouncementInput, CategoryUncheckedCreateWithoutAnnouncementInput>
  }

  export type PhotoUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: PhotoWhereUniqueInput
    update: XOR<PhotoUpdateWithoutAnnouncementInput, PhotoUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<PhotoCreateWithoutAnnouncementInput, PhotoUncheckedCreateWithoutAnnouncementInput>
  }

  export type PhotoUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: PhotoWhereUniqueInput
    data: XOR<PhotoUpdateWithoutAnnouncementInput, PhotoUncheckedUpdateWithoutAnnouncementInput>
  }

  export type PhotoUpdateManyWithWhereWithoutAnnouncementInput = {
    where: PhotoScalarWhereInput
    data: XOR<PhotoUpdateManyMutationInput, PhotoUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type PhotoScalarWhereInput = {
    AND?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    OR?: PhotoScalarWhereInput[]
    NOT?: PhotoScalarWhereInput | PhotoScalarWhereInput[]
    PhotoID?: StringFilter<"Photo"> | string
    name?: StringFilter<"Photo"> | string
    resolution?: StringFilter<"Photo"> | string
    link?: StringFilter<"Photo"> | string
    announcementID?: StringFilter<"Photo"> | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutAnnouncementInput, ReviewUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<ReviewCreateWithoutAnnouncementInput, ReviewUncheckedCreateWithoutAnnouncementInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutAnnouncementInput, ReviewUncheckedUpdateWithoutAnnouncementInput>
  }

  export type ReviewUpdateManyWithWhereWithoutAnnouncementInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type FavouritesUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: FavouritesWhereUniqueInput
    update: XOR<FavouritesUpdateWithoutAnnouncementInput, FavouritesUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<FavouritesCreateWithoutAnnouncementInput, FavouritesUncheckedCreateWithoutAnnouncementInput>
  }

  export type FavouritesUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: FavouritesWhereUniqueInput
    data: XOR<FavouritesUpdateWithoutAnnouncementInput, FavouritesUncheckedUpdateWithoutAnnouncementInput>
  }

  export type FavouritesUpdateManyWithWhereWithoutAnnouncementInput = {
    where: FavouritesScalarWhereInput
    data: XOR<FavouritesUpdateManyMutationInput, FavouritesUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type AnnouncementCharacteristicUpsertWithWhereUniqueWithoutAnnouncementInput = {
    where: AnnouncementCharacteristicWhereUniqueInput
    update: XOR<AnnouncementCharacteristicUpdateWithoutAnnouncementInput, AnnouncementCharacteristicUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<AnnouncementCharacteristicCreateWithoutAnnouncementInput, AnnouncementCharacteristicUncheckedCreateWithoutAnnouncementInput>
  }

  export type AnnouncementCharacteristicUpdateWithWhereUniqueWithoutAnnouncementInput = {
    where: AnnouncementCharacteristicWhereUniqueInput
    data: XOR<AnnouncementCharacteristicUpdateWithoutAnnouncementInput, AnnouncementCharacteristicUncheckedUpdateWithoutAnnouncementInput>
  }

  export type AnnouncementCharacteristicUpdateManyWithWhereWithoutAnnouncementInput = {
    where: AnnouncementCharacteristicScalarWhereInput
    data: XOR<AnnouncementCharacteristicUpdateManyMutationInput, AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementInput>
  }

  export type AnnouncementCharacteristicScalarWhereInput = {
    AND?: AnnouncementCharacteristicScalarWhereInput | AnnouncementCharacteristicScalarWhereInput[]
    OR?: AnnouncementCharacteristicScalarWhereInput[]
    NOT?: AnnouncementCharacteristicScalarWhereInput | AnnouncementCharacteristicScalarWhereInput[]
    id?: StringFilter<"AnnouncementCharacteristic"> | string
    value?: StringFilter<"AnnouncementCharacteristic"> | string
    productId?: StringFilter<"AnnouncementCharacteristic"> | string
    characteristicId?: StringFilter<"AnnouncementCharacteristic"> | string
  }

  export type UserUpsertWithoutAnnouncementInput = {
    update: XOR<UserUpdateWithoutAnnouncementInput, UserUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<UserCreateWithoutAnnouncementInput, UserUncheckedCreateWithoutAnnouncementInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementInput, UserUncheckedUpdateWithoutAnnouncementInput>
  }

  export type UserUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type CategoryUpsertWithoutAnnouncementInput = {
    update: XOR<CategoryUpdateWithoutAnnouncementInput, CategoryUncheckedUpdateWithoutAnnouncementInput>
    create: XOR<CategoryCreateWithoutAnnouncementInput, CategoryUncheckedCreateWithoutAnnouncementInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutAnnouncementInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutAnnouncementInput, CategoryUncheckedUpdateWithoutAnnouncementInput>
  }

  export type CategoryUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    characteristic?: CharacteristicUpdateManyWithoutCategoryNestedInput
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
  }

  export type CategoryUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    characteristic?: CharacteristicUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateWithoutCharacteristicInput = {
    id?: string
    name: string
    children?: CategoryCreateNestedManyWithoutParentInput
    announcement?: AnnouncementCreateNestedManyWithoutCategoryInput
    parent?: CategoryCreateNestedOneWithoutChildrenInput
  }

  export type CategoryUncheckedCreateWithoutCharacteristicInput = {
    id?: string
    name: string
    parent_id?: string | null
    children?: CategoryUncheckedCreateNestedManyWithoutParentInput
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryCreateOrConnectWithoutCharacteristicInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutCharacteristicInput, CategoryUncheckedCreateWithoutCharacteristicInput>
  }

  export type AnnouncementCharacteristicCreateWithoutCharacteristicInput = {
    id?: string
    value: string
    announcement: AnnouncementCreateNestedOneWithoutAnnouncementCharacteristicInput
  }

  export type AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput = {
    id?: string
    value: string
    productId: string
  }

  export type AnnouncementCharacteristicCreateOrConnectWithoutCharacteristicInput = {
    where: AnnouncementCharacteristicWhereUniqueInput
    create: XOR<AnnouncementCharacteristicCreateWithoutCharacteristicInput, AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput>
  }

  export type AnnouncementCharacteristicCreateManyCharacteristicInputEnvelope = {
    data: AnnouncementCharacteristicCreateManyCharacteristicInput | AnnouncementCharacteristicCreateManyCharacteristicInput[]
    skipDuplicates?: boolean
  }

  export type CategoryUpsertWithoutCharacteristicInput = {
    update: XOR<CategoryUpdateWithoutCharacteristicInput, CategoryUncheckedUpdateWithoutCharacteristicInput>
    create: XOR<CategoryCreateWithoutCharacteristicInput, CategoryUncheckedCreateWithoutCharacteristicInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutCharacteristicInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutCharacteristicInput, CategoryUncheckedUpdateWithoutCharacteristicInput>
  }

  export type CategoryUpdateWithoutCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    announcement?: AnnouncementUpdateManyWithoutCategoryNestedInput
    parent?: CategoryUpdateOneWithoutChildrenNestedInput
  }

  export type CategoryUncheckedUpdateWithoutCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    parent_id?: NullableStringFieldUpdateOperationsInput | string | null
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    announcement?: AnnouncementUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type AnnouncementCharacteristicUpsertWithWhereUniqueWithoutCharacteristicInput = {
    where: AnnouncementCharacteristicWhereUniqueInput
    update: XOR<AnnouncementCharacteristicUpdateWithoutCharacteristicInput, AnnouncementCharacteristicUncheckedUpdateWithoutCharacteristicInput>
    create: XOR<AnnouncementCharacteristicCreateWithoutCharacteristicInput, AnnouncementCharacteristicUncheckedCreateWithoutCharacteristicInput>
  }

  export type AnnouncementCharacteristicUpdateWithWhereUniqueWithoutCharacteristicInput = {
    where: AnnouncementCharacteristicWhereUniqueInput
    data: XOR<AnnouncementCharacteristicUpdateWithoutCharacteristicInput, AnnouncementCharacteristicUncheckedUpdateWithoutCharacteristicInput>
  }

  export type AnnouncementCharacteristicUpdateManyWithWhereWithoutCharacteristicInput = {
    where: AnnouncementCharacteristicScalarWhereInput
    data: XOR<AnnouncementCharacteristicUpdateManyMutationInput, AnnouncementCharacteristicUncheckedUpdateManyWithoutCharacteristicInput>
  }

  export type AnnouncementCreateWithoutAnnouncementCharacteristicInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    photo?: PhotoCreateNestedManyWithoutAnnouncementInput
    review?: ReviewCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesCreateNestedManyWithoutAnnouncementInput
    user: UserCreateNestedOneWithoutAnnouncementInput
    category: CategoryCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutAnnouncementCharacteristicInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
    categoryId: string
    photo?: PhotoUncheckedCreateNestedManyWithoutAnnouncementInput
    review?: ReviewUncheckedCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutAnnouncementCharacteristicInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutAnnouncementCharacteristicInput, AnnouncementUncheckedCreateWithoutAnnouncementCharacteristicInput>
  }

  export type CharacteristicCreateWithoutAnnouncementCharacteristicInput = {
    id?: string
    name: string
    type: string
    category: CategoryCreateNestedOneWithoutCharacteristicInput
  }

  export type CharacteristicUncheckedCreateWithoutAnnouncementCharacteristicInput = {
    id?: string
    name: string
    type: string
    categoryId: string
  }

  export type CharacteristicCreateOrConnectWithoutAnnouncementCharacteristicInput = {
    where: CharacteristicWhereUniqueInput
    create: XOR<CharacteristicCreateWithoutAnnouncementCharacteristicInput, CharacteristicUncheckedCreateWithoutAnnouncementCharacteristicInput>
  }

  export type AnnouncementUpsertWithoutAnnouncementCharacteristicInput = {
    update: XOR<AnnouncementUpdateWithoutAnnouncementCharacteristicInput, AnnouncementUncheckedUpdateWithoutAnnouncementCharacteristicInput>
    create: XOR<AnnouncementCreateWithoutAnnouncementCharacteristicInput, AnnouncementUncheckedCreateWithoutAnnouncementCharacteristicInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutAnnouncementCharacteristicInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutAnnouncementCharacteristicInput, AnnouncementUncheckedUpdateWithoutAnnouncementCharacteristicInput>
  }

  export type AnnouncementUpdateWithoutAnnouncementCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    photo?: PhotoUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUpdateManyWithoutAnnouncementNestedInput
    user?: UserUpdateOneRequiredWithoutAnnouncementNestedInput
    category?: CategoryUpdateOneRequiredWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutAnnouncementCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    photo?: PhotoUncheckedUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUncheckedUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type CharacteristicUpsertWithoutAnnouncementCharacteristicInput = {
    update: XOR<CharacteristicUpdateWithoutAnnouncementCharacteristicInput, CharacteristicUncheckedUpdateWithoutAnnouncementCharacteristicInput>
    create: XOR<CharacteristicCreateWithoutAnnouncementCharacteristicInput, CharacteristicUncheckedCreateWithoutAnnouncementCharacteristicInput>
    where?: CharacteristicWhereInput
  }

  export type CharacteristicUpdateToOneWithWhereWithoutAnnouncementCharacteristicInput = {
    where?: CharacteristicWhereInput
    data: XOR<CharacteristicUpdateWithoutAnnouncementCharacteristicInput, CharacteristicUncheckedUpdateWithoutAnnouncementCharacteristicInput>
  }

  export type CharacteristicUpdateWithoutAnnouncementCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutCharacteristicNestedInput
  }

  export type CharacteristicUncheckedUpdateWithoutAnnouncementCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateWithoutChatInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    user: UserCreateNestedOneWithoutMessageInput
  }

  export type MessageUncheckedCreateWithoutChatInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    userID: string
  }

  export type MessageCreateOrConnectWithoutChatInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageCreateManyChatInputEnvelope = {
    data: MessageCreateManyChatInput | MessageCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type ChatMembersCreateWithoutChatInput = {
    id?: string
    user: UserCreateNestedOneWithoutChatMembersInput
  }

  export type ChatMembersUncheckedCreateWithoutChatInput = {
    id?: string
    userID: string
  }

  export type ChatMembersCreateOrConnectWithoutChatInput = {
    where: ChatMembersWhereUniqueInput
    create: XOR<ChatMembersCreateWithoutChatInput, ChatMembersUncheckedCreateWithoutChatInput>
  }

  export type ChatMembersCreateManyChatInputEnvelope = {
    data: ChatMembersCreateManyChatInput | ChatMembersCreateManyChatInput[]
    skipDuplicates?: boolean
  }

  export type MessageUpsertWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
    create: XOR<MessageCreateWithoutChatInput, MessageUncheckedCreateWithoutChatInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutChatInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutChatInput, MessageUncheckedUpdateWithoutChatInput>
  }

  export type MessageUpdateManyWithWhereWithoutChatInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutChatInput>
  }

  export type ChatMembersUpsertWithWhereUniqueWithoutChatInput = {
    where: ChatMembersWhereUniqueInput
    update: XOR<ChatMembersUpdateWithoutChatInput, ChatMembersUncheckedUpdateWithoutChatInput>
    create: XOR<ChatMembersCreateWithoutChatInput, ChatMembersUncheckedCreateWithoutChatInput>
  }

  export type ChatMembersUpdateWithWhereUniqueWithoutChatInput = {
    where: ChatMembersWhereUniqueInput
    data: XOR<ChatMembersUpdateWithoutChatInput, ChatMembersUncheckedUpdateWithoutChatInput>
  }

  export type ChatMembersUpdateManyWithWhereWithoutChatInput = {
    where: ChatMembersScalarWhereInput
    data: XOR<ChatMembersUpdateManyMutationInput, ChatMembersUncheckedUpdateManyWithoutChatInput>
  }

  export type UserCreateWithoutMessageInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    Favourites?: FavouritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessageInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessageInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
  }

  export type ChatCreateWithoutMessagesInput = {
    id?: string
    chatMembers?: ChatMembersCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutMessagesInput = {
    id?: string
    chatMembers?: ChatMembersUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutMessagesInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
  }

  export type UserUpsertWithoutMessageInput = {
    update: XOR<UserUpdateWithoutMessageInput, UserUncheckedUpdateWithoutMessageInput>
    create: XOR<UserCreateWithoutMessageInput, UserUncheckedCreateWithoutMessageInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessageInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessageInput, UserUncheckedUpdateWithoutMessageInput>
  }

  export type UserUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessageInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutMessagesInput = {
    update: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
    create: XOR<ChatCreateWithoutMessagesInput, ChatUncheckedCreateWithoutMessagesInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutMessagesInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutMessagesInput, ChatUncheckedUpdateWithoutMessagesInput>
  }

  export type ChatUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatMembers?: ChatMembersUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatMembers?: ChatMembersUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserCreateWithoutChatMembersInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementCreateNestedManyWithoutUserInput
    message?: MessageCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
    Favourites?: FavouritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutChatMembersInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
    message?: MessageUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
    Favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutChatMembersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChatMembersInput, UserUncheckedCreateWithoutChatMembersInput>
  }

  export type ChatCreateWithoutChatMembersInput = {
    id?: string
    messages?: MessageCreateNestedManyWithoutChatInput
  }

  export type ChatUncheckedCreateWithoutChatMembersInput = {
    id?: string
    messages?: MessageUncheckedCreateNestedManyWithoutChatInput
  }

  export type ChatCreateOrConnectWithoutChatMembersInput = {
    where: ChatWhereUniqueInput
    create: XOR<ChatCreateWithoutChatMembersInput, ChatUncheckedCreateWithoutChatMembersInput>
  }

  export type UserUpsertWithoutChatMembersInput = {
    update: XOR<UserUpdateWithoutChatMembersInput, UserUncheckedUpdateWithoutChatMembersInput>
    create: XOR<UserCreateWithoutChatMembersInput, UserUncheckedCreateWithoutChatMembersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChatMembersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChatMembersInput, UserUncheckedUpdateWithoutChatMembersInput>
  }

  export type UserUpdateWithoutChatMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateManyWithoutUserNestedInput
    message?: MessageUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutChatMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
    message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ChatUpsertWithoutChatMembersInput = {
    update: XOR<ChatUpdateWithoutChatMembersInput, ChatUncheckedUpdateWithoutChatMembersInput>
    create: XOR<ChatCreateWithoutChatMembersInput, ChatUncheckedCreateWithoutChatMembersInput>
    where?: ChatWhereInput
  }

  export type ChatUpdateToOneWithWhereWithoutChatMembersInput = {
    where?: ChatWhereInput
    data: XOR<ChatUpdateWithoutChatMembersInput, ChatUncheckedUpdateWithoutChatMembersInput>
  }

  export type ChatUpdateWithoutChatMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUpdateManyWithoutChatNestedInput
  }

  export type ChatUncheckedUpdateWithoutChatMembersInput = {
    id?: StringFieldUpdateOperationsInput | string
    messages?: MessageUncheckedUpdateManyWithoutChatNestedInput
  }

  export type UserCreateWithoutReviewInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementCreateNestedManyWithoutUserInput
    message?: MessageCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersCreateNestedManyWithoutUserInput
    Favourites?: FavouritesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
    message?: MessageUncheckedCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersUncheckedCreateNestedManyWithoutUserInput
    Favourites?: FavouritesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
  }

  export type AnnouncementCreateWithoutReviewInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    photo?: PhotoCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicCreateNestedManyWithoutAnnouncementInput
    user: UserCreateNestedOneWithoutAnnouncementInput
    category: CategoryCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutReviewInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
    categoryId: string
    photo?: PhotoUncheckedCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutReviewInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutReviewInput, AnnouncementUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewInput = {
    update: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
    create: XOR<UserCreateWithoutReviewInput, UserUncheckedCreateWithoutReviewInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewInput, UserUncheckedUpdateWithoutReviewInput>
  }

  export type UserUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateManyWithoutUserNestedInput
    message?: MessageUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
    message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUncheckedUpdateManyWithoutUserNestedInput
    Favourites?: FavouritesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnnouncementUpsertWithoutReviewInput = {
    update: XOR<AnnouncementUpdateWithoutReviewInput, AnnouncementUncheckedUpdateWithoutReviewInput>
    create: XOR<AnnouncementCreateWithoutReviewInput, AnnouncementUncheckedCreateWithoutReviewInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutReviewInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutReviewInput, AnnouncementUncheckedUpdateWithoutReviewInput>
  }

  export type AnnouncementUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    photo?: PhotoUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUpdateManyWithoutAnnouncementNestedInput
    user?: UserUpdateOneRequiredWithoutAnnouncementNestedInput
    category?: CategoryUpdateOneRequiredWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    photo?: PhotoUncheckedUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type UserCreateWithoutFavouritesInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementCreateNestedManyWithoutUserInput
    message?: MessageCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersCreateNestedManyWithoutUserInput
    Review?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavouritesInput = {
    id?: string
    email?: string | null
    phoneNumber?: string | null
    password: string
    displayName: string
    typeProfile: string
    rating?: number | null
    avatar?: string | null
    bio?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    announcement?: AnnouncementUncheckedCreateNestedManyWithoutUserInput
    message?: MessageUncheckedCreateNestedManyWithoutUserInput
    chatMembers?: ChatMembersUncheckedCreateNestedManyWithoutUserInput
    Review?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavouritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
  }

  export type AnnouncementCreateWithoutFavouritesInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    photo?: PhotoCreateNestedManyWithoutAnnouncementInput
    review?: ReviewCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicCreateNestedManyWithoutAnnouncementInput
    user: UserCreateNestedOneWithoutAnnouncementInput
    category: CategoryCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutFavouritesInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
    categoryId: string
    photo?: PhotoUncheckedCreateNestedManyWithoutAnnouncementInput
    review?: ReviewUncheckedCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutFavouritesInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutFavouritesInput, AnnouncementUncheckedCreateWithoutFavouritesInput>
  }

  export type UserUpsertWithoutFavouritesInput = {
    update: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
    create: XOR<UserCreateWithoutFavouritesInput, UserUncheckedCreateWithoutFavouritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavouritesInput, UserUncheckedUpdateWithoutFavouritesInput>
  }

  export type UserUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUpdateManyWithoutUserNestedInput
    message?: MessageUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUpdateManyWithoutUserNestedInput
    Review?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    typeProfile?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    announcement?: AnnouncementUncheckedUpdateManyWithoutUserNestedInput
    message?: MessageUncheckedUpdateManyWithoutUserNestedInput
    chatMembers?: ChatMembersUncheckedUpdateManyWithoutUserNestedInput
    Review?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AnnouncementUpsertWithoutFavouritesInput = {
    update: XOR<AnnouncementUpdateWithoutFavouritesInput, AnnouncementUncheckedUpdateWithoutFavouritesInput>
    create: XOR<AnnouncementCreateWithoutFavouritesInput, AnnouncementUncheckedCreateWithoutFavouritesInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutFavouritesInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutFavouritesInput, AnnouncementUncheckedUpdateWithoutFavouritesInput>
  }

  export type AnnouncementUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    photo?: PhotoUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUpdateManyWithoutAnnouncementNestedInput
    user?: UserUpdateOneRequiredWithoutAnnouncementNestedInput
    category?: CategoryUpdateOneRequiredWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutFavouritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    photo?: PhotoUncheckedUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUncheckedUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementCreateWithoutPhotoInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    review?: ReviewCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicCreateNestedManyWithoutAnnouncementInput
    user: UserCreateNestedOneWithoutAnnouncementInput
    category: CategoryCreateNestedOneWithoutAnnouncementInput
  }

  export type AnnouncementUncheckedCreateWithoutPhotoInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
    categoryId: string
    review?: ReviewUncheckedCreateNestedManyWithoutAnnouncementInput
    favourites?: FavouritesUncheckedCreateNestedManyWithoutAnnouncementInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedCreateNestedManyWithoutAnnouncementInput
  }

  export type AnnouncementCreateOrConnectWithoutPhotoInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutPhotoInput, AnnouncementUncheckedCreateWithoutPhotoInput>
  }

  export type AnnouncementUpsertWithoutPhotoInput = {
    update: XOR<AnnouncementUpdateWithoutPhotoInput, AnnouncementUncheckedUpdateWithoutPhotoInput>
    create: XOR<AnnouncementCreateWithoutPhotoInput, AnnouncementUncheckedCreateWithoutPhotoInput>
    where?: AnnouncementWhereInput
  }

  export type AnnouncementUpdateToOneWithWhereWithoutPhotoInput = {
    where?: AnnouncementWhereInput
    data: XOR<AnnouncementUpdateWithoutPhotoInput, AnnouncementUncheckedUpdateWithoutPhotoInput>
  }

  export type AnnouncementUpdateWithoutPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    review?: ReviewUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUpdateManyWithoutAnnouncementNestedInput
    user?: UserUpdateOneRequiredWithoutAnnouncementNestedInput
    category?: CategoryUpdateOneRequiredWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutPhotoInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    userId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    review?: ReviewUncheckedUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementCreateManyUserInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    categoryId: string
  }

  export type MessageCreateManyUserInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    chatID: string
  }

  export type ChatMembersCreateManyUserInput = {
    id?: string
    chatID: string
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    grade: number
    description: string
    announcementID: string
  }

  export type FavouritesCreateManyUserInput = {
    id?: string
    announcementID: string
  }

  export type AnnouncementUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    photo?: PhotoUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUpdateManyWithoutAnnouncementNestedInput
    category?: CategoryUpdateOneRequiredWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    categoryId?: StringFieldUpdateOperationsInput | string
    photo?: PhotoUncheckedUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUncheckedUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    chat?: ChatUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    chatID?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    chatID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMembersUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chat?: ChatUpdateOneRequiredWithoutChatMembersNestedInput
  }

  export type ChatMembersUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMembersUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    chatID?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    announcement?: AnnouncementUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcement?: AnnouncementUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouritesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    announcementID?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateManyParentInput = {
    id?: string
    name: string
  }

  export type AnnouncementCreateManyCategoryInput = {
    id?: string
    name: string
    price: number
    description: string
    placementDate: Date | string
    status: $Enums.AnnouncementStatus
    condition: $Enums.ProductCondition
    userId: string
  }

  export type CharacteristicCreateManyCategoryInput = {
    id?: string
    name: string
    type: string
  }

  export type CategoryUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    children?: CategoryUpdateManyWithoutParentNestedInput
    announcement?: AnnouncementUpdateManyWithoutCategoryNestedInput
    characteristic?: CharacteristicUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    children?: CategoryUncheckedUpdateManyWithoutParentNestedInput
    announcement?: AnnouncementUncheckedUpdateManyWithoutCategoryNestedInput
    characteristic?: CharacteristicUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateManyWithoutParentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    photo?: PhotoUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUpdateManyWithoutAnnouncementNestedInput
    user?: UserUpdateOneRequiredWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    userId?: StringFieldUpdateOperationsInput | string
    photo?: PhotoUncheckedUpdateManyWithoutAnnouncementNestedInput
    review?: ReviewUncheckedUpdateManyWithoutAnnouncementNestedInput
    favourites?: FavouritesUncheckedUpdateManyWithoutAnnouncementNestedInput
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementNestedInput
  }

  export type AnnouncementUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    price?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    placementDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumAnnouncementStatusFieldUpdateOperationsInput | $Enums.AnnouncementStatus
    condition?: EnumProductConditionFieldUpdateOperationsInput | $Enums.ProductCondition
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CharacteristicUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    announcementCharacteristic?: AnnouncementCharacteristicUpdateManyWithoutCharacteristicNestedInput
  }

  export type CharacteristicUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    announcementCharacteristic?: AnnouncementCharacteristicUncheckedUpdateManyWithoutCharacteristicNestedInput
  }

  export type CharacteristicUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoCreateManyAnnouncementInput = {
    PhotoID?: string
    name: string
    resolution: string
    link: string
  }

  export type ReviewCreateManyAnnouncementInput = {
    id?: string
    grade: number
    description: string
    userID: string
  }

  export type FavouritesCreateManyAnnouncementInput = {
    id?: string
    userID: string
  }

  export type AnnouncementCharacteristicCreateManyAnnouncementInput = {
    id?: string
    value: string
    characteristicId: string
  }

  export type PhotoUpdateWithoutAnnouncementInput = {
    PhotoID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateWithoutAnnouncementInput = {
    PhotoID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type PhotoUncheckedUpdateManyWithoutAnnouncementInput = {
    PhotoID?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    resolution?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    grade?: FloatFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritesUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFavouritesNestedInput
  }

  export type FavouritesUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type FavouritesUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementCharacteristicUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    characteristic?: CharacteristicUpdateOneRequiredWithoutAnnouncementCharacteristicNestedInput
  }

  export type AnnouncementCharacteristicUncheckedUpdateWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    characteristicId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementCharacteristicUncheckedUpdateManyWithoutAnnouncementInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    characteristicId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementCharacteristicCreateManyCharacteristicInput = {
    id?: string
    value: string
    productId: string
  }

  export type AnnouncementCharacteristicUpdateWithoutCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    announcement?: AnnouncementUpdateOneRequiredWithoutAnnouncementCharacteristicNestedInput
  }

  export type AnnouncementCharacteristicUncheckedUpdateWithoutCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type AnnouncementCharacteristicUncheckedUpdateManyWithoutCharacteristicInput = {
    id?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
  }

  export type MessageCreateManyChatInput = {
    id?: string
    Content: string
    Status?: number
    Date?: Date | string
    userID: string
  }

  export type ChatMembersCreateManyChatInput = {
    id?: string
    userID: string
  }

  export type MessageUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMessageNestedInput
  }

  export type MessageUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type MessageUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    Content?: StringFieldUpdateOperationsInput | string
    Status?: IntFieldUpdateOperationsInput | number
    Date?: DateTimeFieldUpdateOperationsInput | Date | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMembersUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutChatMembersNestedInput
  }

  export type ChatMembersUncheckedUpdateWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }

  export type ChatMembersUncheckedUpdateManyWithoutChatInput = {
    id?: StringFieldUpdateOperationsInput | string
    userID?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}