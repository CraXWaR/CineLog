
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Movie
 * 
 */
export type Movie = $Result.DefaultSelection<Prisma.$MoviePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserFriends
 * 
 */
export type UserFriends = $Result.DefaultSelection<Prisma.$UserFriendsPayload>
/**
 * Model UserWatchLater
 * 
 */
export type UserWatchLater = $Result.DefaultSelection<Prisma.$UserWatchLaterPayload>
/**
 * Model UserWatched
 * 
 */
export type UserWatched = $Result.DefaultSelection<Prisma.$UserWatchedPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Movies
 * const movies = await prisma.movie.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Movies
   * const movies = await prisma.movie.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.movie`: Exposes CRUD operations for the **Movie** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movie.findMany()
    * ```
    */
  get movie(): Prisma.MovieDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userFriends`: Exposes CRUD operations for the **UserFriends** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFriends
    * const userFriends = await prisma.userFriends.findMany()
    * ```
    */
  get userFriends(): Prisma.UserFriendsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWatchLater`: Exposes CRUD operations for the **UserWatchLater** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWatchLaters
    * const userWatchLaters = await prisma.userWatchLater.findMany()
    * ```
    */
  get userWatchLater(): Prisma.UserWatchLaterDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userWatched`: Exposes CRUD operations for the **UserWatched** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserWatcheds
    * const userWatcheds = await prisma.userWatched.findMany()
    * ```
    */
  get userWatched(): Prisma.UserWatchedDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.6.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Movie: 'Movie',
    User: 'User',
    UserFriends: 'UserFriends',
    UserWatchLater: 'UserWatchLater',
    UserWatched: 'UserWatched'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "movie" | "user" | "userFriends" | "userWatchLater" | "userWatched"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Movie: {
        payload: Prisma.$MoviePayload<ExtArgs>
        fields: Prisma.MovieFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findFirst: {
            args: Prisma.MovieFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          findMany: {
            args: Prisma.MovieFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          create: {
            args: Prisma.MovieCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          createMany: {
            args: Prisma.MovieCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovieCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          delete: {
            args: Prisma.MovieDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          update: {
            args: Prisma.MovieUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          deleteMany: {
            args: Prisma.MovieDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovieUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MovieUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>[]
          }
          upsert: {
            args: Prisma.MovieUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MoviePayload>
          }
          aggregate: {
            args: Prisma.MovieAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovie>
          }
          groupBy: {
            args: Prisma.MovieGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovieGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieCountArgs<ExtArgs>
            result: $Utils.Optional<MovieCountAggregateOutputType> | number
          }
        }
      }
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      UserFriends: {
        payload: Prisma.$UserFriendsPayload<ExtArgs>
        fields: Prisma.UserFriendsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFriendsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFriendsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>
          }
          findFirst: {
            args: Prisma.UserFriendsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFriendsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>
          }
          findMany: {
            args: Prisma.UserFriendsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>[]
          }
          create: {
            args: Prisma.UserFriendsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>
          }
          createMany: {
            args: Prisma.UserFriendsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserFriendsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>[]
          }
          delete: {
            args: Prisma.UserFriendsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>
          }
          update: {
            args: Prisma.UserFriendsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>
          }
          deleteMany: {
            args: Prisma.UserFriendsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserFriendsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserFriendsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>[]
          }
          upsert: {
            args: Prisma.UserFriendsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserFriendsPayload>
          }
          aggregate: {
            args: Prisma.UserFriendsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserFriends>
          }
          groupBy: {
            args: Prisma.UserFriendsGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserFriendsGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserFriendsCountArgs<ExtArgs>
            result: $Utils.Optional<UserFriendsCountAggregateOutputType> | number
          }
        }
      }
      UserWatchLater: {
        payload: Prisma.$UserWatchLaterPayload<ExtArgs>
        fields: Prisma.UserWatchLaterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWatchLaterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWatchLaterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>
          }
          findFirst: {
            args: Prisma.UserWatchLaterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWatchLaterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>
          }
          findMany: {
            args: Prisma.UserWatchLaterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>[]
          }
          create: {
            args: Prisma.UserWatchLaterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>
          }
          createMany: {
            args: Prisma.UserWatchLaterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWatchLaterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>[]
          }
          delete: {
            args: Prisma.UserWatchLaterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>
          }
          update: {
            args: Prisma.UserWatchLaterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>
          }
          deleteMany: {
            args: Prisma.UserWatchLaterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWatchLaterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWatchLaterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>[]
          }
          upsert: {
            args: Prisma.UserWatchLaterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchLaterPayload>
          }
          aggregate: {
            args: Prisma.UserWatchLaterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWatchLater>
          }
          groupBy: {
            args: Prisma.UserWatchLaterGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWatchLaterGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWatchLaterCountArgs<ExtArgs>
            result: $Utils.Optional<UserWatchLaterCountAggregateOutputType> | number
          }
        }
      }
      UserWatched: {
        payload: Prisma.$UserWatchedPayload<ExtArgs>
        fields: Prisma.UserWatchedFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserWatchedFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserWatchedFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>
          }
          findFirst: {
            args: Prisma.UserWatchedFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserWatchedFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>
          }
          findMany: {
            args: Prisma.UserWatchedFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>[]
          }
          create: {
            args: Prisma.UserWatchedCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>
          }
          createMany: {
            args: Prisma.UserWatchedCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserWatchedCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>[]
          }
          delete: {
            args: Prisma.UserWatchedDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>
          }
          update: {
            args: Prisma.UserWatchedUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>
          }
          deleteMany: {
            args: Prisma.UserWatchedDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserWatchedUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserWatchedUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>[]
          }
          upsert: {
            args: Prisma.UserWatchedUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserWatchedPayload>
          }
          aggregate: {
            args: Prisma.UserWatchedAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserWatched>
          }
          groupBy: {
            args: Prisma.UserWatchedGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserWatchedGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserWatchedCountArgs<ExtArgs>
            result: $Utils.Optional<UserWatchedCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    movie?: MovieOmit
    user?: UserOmit
    userFriends?: UserFriendsOmit
    userWatchLater?: UserWatchLaterOmit
    userWatched?: UserWatchedOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Count Type MovieCountOutputType
   */

  export type MovieCountOutputType = {
    watched: number
    watchLater: number
  }

  export type MovieCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watched?: boolean | MovieCountOutputTypeCountWatchedArgs
    watchLater?: boolean | MovieCountOutputTypeCountWatchLaterArgs
  }

  // Custom InputTypes
  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieCountOutputType
     */
    select?: MovieCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountWatchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchedWhereInput
  }

  /**
   * MovieCountOutputType without action
   */
  export type MovieCountOutputTypeCountWatchLaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchLaterWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    watched: number
    watchLater: number
    friends: number
    friendOf: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watched?: boolean | UserCountOutputTypeCountWatchedArgs
    watchLater?: boolean | UserCountOutputTypeCountWatchLaterArgs
    friends?: boolean | UserCountOutputTypeCountFriendsArgs
    friendOf?: boolean | UserCountOutputTypeCountFriendOfArgs
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
  export type UserCountOutputTypeCountWatchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchedWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWatchLaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchLaterWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFriendsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFriendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFriendsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Movie
   */

  export type AggregateMovie = {
    _count: MovieCountAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  export type MovieMinAggregateOutputType = {
    id: string | null
    tmdbId: string | null
  }

  export type MovieMaxAggregateOutputType = {
    id: string | null
    tmdbId: string | null
  }

  export type MovieCountAggregateOutputType = {
    id: number
    tmdbId: number
    _all: number
  }


  export type MovieMinAggregateInputType = {
    id?: true
    tmdbId?: true
  }

  export type MovieMaxAggregateInputType = {
    id?: true
    tmdbId?: true
  }

  export type MovieCountAggregateInputType = {
    id?: true
    tmdbId?: true
    _all?: true
  }

  export type MovieAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movie to aggregate.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movies
    **/
    _count?: true | MovieCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieMaxAggregateInputType
  }

  export type GetMovieAggregateType<T extends MovieAggregateArgs> = {
        [P in keyof T & keyof AggregateMovie]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovie[P]>
      : GetScalarType<T[P], AggregateMovie[P]>
  }




  export type MovieGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieWhereInput
    orderBy?: MovieOrderByWithAggregationInput | MovieOrderByWithAggregationInput[]
    by: MovieScalarFieldEnum[] | MovieScalarFieldEnum
    having?: MovieScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieCountAggregateInputType | true
    _min?: MovieMinAggregateInputType
    _max?: MovieMaxAggregateInputType
  }

  export type MovieGroupByOutputType = {
    id: string
    tmdbId: string
    _count: MovieCountAggregateOutputType | null
    _min: MovieMinAggregateOutputType | null
    _max: MovieMaxAggregateOutputType | null
  }

  type GetMovieGroupByPayload<T extends MovieGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGroupByOutputType[P]>
        }
      >
    >


  export type MovieSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
    watched?: boolean | Movie$watchedArgs<ExtArgs>
    watchLater?: boolean | Movie$watchLaterArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tmdbId?: boolean
  }, ExtArgs["result"]["movie"]>

  export type MovieSelectScalar = {
    id?: boolean
    tmdbId?: boolean
  }

  export type MovieOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tmdbId", ExtArgs["result"]["movie"]>
  export type MovieInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watched?: boolean | Movie$watchedArgs<ExtArgs>
    watchLater?: boolean | Movie$watchLaterArgs<ExtArgs>
    _count?: boolean | MovieCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MovieIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MovieIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MoviePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movie"
    objects: {
      watched: Prisma.$UserWatchedPayload<ExtArgs>[]
      watchLater: Prisma.$UserWatchLaterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tmdbId: string
    }, ExtArgs["result"]["movie"]>
    composites: {}
  }

  type MovieGetPayload<S extends boolean | null | undefined | MovieDefaultArgs> = $Result.GetResult<Prisma.$MoviePayload, S>

  type MovieCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MovieFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MovieCountAggregateInputType | true
    }

  export interface MovieDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movie'], meta: { name: 'Movie' } }
    /**
     * Find zero or one Movie that matches the filter.
     * @param {MovieFindUniqueArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovieFindUniqueArgs>(args: SelectSubset<T, MovieFindUniqueArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Movie that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MovieFindUniqueOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovieFindUniqueOrThrowArgs>(args: SelectSubset<T, MovieFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovieFindFirstArgs>(args?: SelectSubset<T, MovieFindFirstArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Movie that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindFirstOrThrowArgs} args - Arguments to find a Movie
     * @example
     * // Get one Movie
     * const movie = await prisma.movie.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovieFindFirstOrThrowArgs>(args?: SelectSubset<T, MovieFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movie.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movie.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movieWithIdOnly = await prisma.movie.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovieFindManyArgs>(args?: SelectSubset<T, MovieFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Movie.
     * @param {MovieCreateArgs} args - Arguments to create a Movie.
     * @example
     * // Create one Movie
     * const Movie = await prisma.movie.create({
     *   data: {
     *     // ... data to create a Movie
     *   }
     * })
     * 
     */
    create<T extends MovieCreateArgs>(args: SelectSubset<T, MovieCreateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Movies.
     * @param {MovieCreateManyArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovieCreateManyArgs>(args?: SelectSubset<T, MovieCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movies and returns the data saved in the database.
     * @param {MovieCreateManyAndReturnArgs} args - Arguments to create many Movies.
     * @example
     * // Create many Movies
     * const movie = await prisma.movie.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovieCreateManyAndReturnArgs>(args?: SelectSubset<T, MovieCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Movie.
     * @param {MovieDeleteArgs} args - Arguments to delete one Movie.
     * @example
     * // Delete one Movie
     * const Movie = await prisma.movie.delete({
     *   where: {
     *     // ... filter to delete one Movie
     *   }
     * })
     * 
     */
    delete<T extends MovieDeleteArgs>(args: SelectSubset<T, MovieDeleteArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Movie.
     * @param {MovieUpdateArgs} args - Arguments to update one Movie.
     * @example
     * // Update one Movie
     * const movie = await prisma.movie.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovieUpdateArgs>(args: SelectSubset<T, MovieUpdateArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Movies.
     * @param {MovieDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movie.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovieDeleteManyArgs>(args?: SelectSubset<T, MovieDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovieUpdateManyArgs>(args: SelectSubset<T, MovieUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies and returns the data updated in the database.
     * @param {MovieUpdateManyAndReturnArgs} args - Arguments to update many Movies.
     * @example
     * // Update many Movies
     * const movie = await prisma.movie.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Movies and only return the `id`
     * const movieWithIdOnly = await prisma.movie.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MovieUpdateManyAndReturnArgs>(args: SelectSubset<T, MovieUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Movie.
     * @param {MovieUpsertArgs} args - Arguments to update or create a Movie.
     * @example
     * // Update or create a Movie
     * const movie = await prisma.movie.upsert({
     *   create: {
     *     // ... data to create a Movie
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movie we want to update
     *   }
     * })
     */
    upsert<T extends MovieUpsertArgs>(args: SelectSubset<T, MovieUpsertArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movie.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MovieCountArgs>(
      args?: Subset<T, MovieCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieAggregateArgs>(args: Subset<T, MovieAggregateArgs>): Prisma.PrismaPromise<GetMovieAggregateType<T>>

    /**
     * Group by Movie.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGroupByArgs} args - Group by arguments.
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
      T extends MovieGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGroupByArgs['orderBy'] }
        : { orderBy?: MovieGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movie model
   */
  readonly fields: MovieFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movie.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watched<T extends Movie$watchedArgs<ExtArgs> = {}>(args?: Subset<T, Movie$watchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchLater<T extends Movie$watchLaterArgs<ExtArgs> = {}>(args?: Subset<T, Movie$watchLaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Movie model
   */
  interface MovieFieldRefs {
    readonly id: FieldRef<"Movie", 'String'>
    readonly tmdbId: FieldRef<"Movie", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Movie findUnique
   */
  export type MovieFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findUniqueOrThrow
   */
  export type MovieFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie findFirst
   */
  export type MovieFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findFirstOrThrow
   */
  export type MovieFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movie to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie findMany
   */
  export type MovieFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MovieWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MovieOrderByWithRelationInput | MovieOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MovieWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movies.
     */
    distinct?: MovieScalarFieldEnum | MovieScalarFieldEnum[]
  }

  /**
   * Movie create
   */
  export type MovieCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to create a Movie.
     */
    data: XOR<MovieCreateInput, MovieUncheckedCreateInput>
  }

  /**
   * Movie createMany
   */
  export type MovieCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie createManyAndReturn
   */
  export type MovieCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to create many Movies.
     */
    data: MovieCreateManyInput | MovieCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movie update
   */
  export type MovieUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The data needed to update a Movie.
     */
    data: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
    /**
     * Choose, which Movie to update.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie updateMany
   */
  export type MovieUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie updateManyAndReturn
   */
  export type MovieUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * The data used to update Movies.
     */
    data: XOR<MovieUpdateManyMutationInput, MovieUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to update.
     */
    limit?: number
  }

  /**
   * Movie upsert
   */
  export type MovieUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * The filter to search for the Movie to update in case it exists.
     */
    where: MovieWhereUniqueInput
    /**
     * In case the Movie found by the `where` argument doesn't exist, create a new Movie with this data.
     */
    create: XOR<MovieCreateInput, MovieUncheckedCreateInput>
    /**
     * In case the Movie was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieUpdateInput, MovieUncheckedUpdateInput>
  }

  /**
   * Movie delete
   */
  export type MovieDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
    /**
     * Filter which Movie to delete.
     */
    where: MovieWhereUniqueInput
  }

  /**
   * Movie deleteMany
   */
  export type MovieDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MovieWhereInput
    /**
     * Limit how many Movies to delete.
     */
    limit?: number
  }

  /**
   * Movie.watched
   */
  export type Movie$watchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    where?: UserWatchedWhereInput
    orderBy?: UserWatchedOrderByWithRelationInput | UserWatchedOrderByWithRelationInput[]
    cursor?: UserWatchedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWatchedScalarFieldEnum | UserWatchedScalarFieldEnum[]
  }

  /**
   * Movie.watchLater
   */
  export type Movie$watchLaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    where?: UserWatchLaterWhereInput
    orderBy?: UserWatchLaterOrderByWithRelationInput | UserWatchLaterOrderByWithRelationInput[]
    cursor?: UserWatchLaterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWatchLaterScalarFieldEnum | UserWatchLaterScalarFieldEnum[]
  }

  /**
   * Movie without action
   */
  export type MovieDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movie
     */
    select?: MovieSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Movie
     */
    omit?: MovieOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    watched?: boolean | User$watchedArgs<ExtArgs>
    watchLater?: boolean | User$watchLaterArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    watched?: boolean | User$watchedArgs<ExtArgs>
    watchLater?: boolean | User$watchLaterArgs<ExtArgs>
    friends?: boolean | User$friendsArgs<ExtArgs>
    friendOf?: boolean | User$friendOfArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      watched: Prisma.$UserWatchedPayload<ExtArgs>[]
      watchLater: Prisma.$UserWatchLaterPayload<ExtArgs>[]
      friends: Prisma.$UserFriendsPayload<ExtArgs>[]
      friendOf: Prisma.$UserFriendsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    watched<T extends User$watchedArgs<ExtArgs> = {}>(args?: Subset<T, User$watchedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    watchLater<T extends User$watchLaterArgs<ExtArgs> = {}>(args?: Subset<T, User$watchLaterArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friends<T extends User$friendsArgs<ExtArgs> = {}>(args?: Subset<T, User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    friendOf<T extends User$friendOfArgs<ExtArgs> = {}>(args?: Subset<T, User$friendOfArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.watched
   */
  export type User$watchedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    where?: UserWatchedWhereInput
    orderBy?: UserWatchedOrderByWithRelationInput | UserWatchedOrderByWithRelationInput[]
    cursor?: UserWatchedWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWatchedScalarFieldEnum | UserWatchedScalarFieldEnum[]
  }

  /**
   * User.watchLater
   */
  export type User$watchLaterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    where?: UserWatchLaterWhereInput
    orderBy?: UserWatchLaterOrderByWithRelationInput | UserWatchLaterOrderByWithRelationInput[]
    cursor?: UserWatchLaterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserWatchLaterScalarFieldEnum | UserWatchLaterScalarFieldEnum[]
  }

  /**
   * User.friends
   */
  export type User$friendsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    where?: UserFriendsWhereInput
    orderBy?: UserFriendsOrderByWithRelationInput | UserFriendsOrderByWithRelationInput[]
    cursor?: UserFriendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFriendsScalarFieldEnum | UserFriendsScalarFieldEnum[]
  }

  /**
   * User.friendOf
   */
  export type User$friendOfArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    where?: UserFriendsWhereInput
    orderBy?: UserFriendsOrderByWithRelationInput | UserFriendsOrderByWithRelationInput[]
    cursor?: UserFriendsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFriendsScalarFieldEnum | UserFriendsScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserFriends
   */

  export type AggregateUserFriends = {
    _count: UserFriendsCountAggregateOutputType | null
    _min: UserFriendsMinAggregateOutputType | null
    _max: UserFriendsMaxAggregateOutputType | null
  }

  export type UserFriendsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    status: string | null
  }

  export type UserFriendsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    friendId: string | null
    status: string | null
  }

  export type UserFriendsCountAggregateOutputType = {
    id: number
    userId: number
    friendId: number
    status: number
    _all: number
  }


  export type UserFriendsMinAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
  }

  export type UserFriendsMaxAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
  }

  export type UserFriendsCountAggregateInputType = {
    id?: true
    userId?: true
    friendId?: true
    status?: true
    _all?: true
  }

  export type UserFriendsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFriends to aggregate.
     */
    where?: UserFriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFriends to fetch.
     */
    orderBy?: UserFriendsOrderByWithRelationInput | UserFriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFriends
    **/
    _count?: true | UserFriendsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFriendsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFriendsMaxAggregateInputType
  }

  export type GetUserFriendsAggregateType<T extends UserFriendsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFriends]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFriends[P]>
      : GetScalarType<T[P], AggregateUserFriends[P]>
  }




  export type UserFriendsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFriendsWhereInput
    orderBy?: UserFriendsOrderByWithAggregationInput | UserFriendsOrderByWithAggregationInput[]
    by: UserFriendsScalarFieldEnum[] | UserFriendsScalarFieldEnum
    having?: UserFriendsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFriendsCountAggregateInputType | true
    _min?: UserFriendsMinAggregateInputType
    _max?: UserFriendsMaxAggregateInputType
  }

  export type UserFriendsGroupByOutputType = {
    id: string
    userId: string
    friendId: string
    status: string
    _count: UserFriendsCountAggregateOutputType | null
    _min: UserFriendsMinAggregateOutputType | null
    _max: UserFriendsMaxAggregateOutputType | null
  }

  type GetUserFriendsGroupByPayload<T extends UserFriendsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFriendsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFriendsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFriendsGroupByOutputType[P]>
            : GetScalarType<T[P], UserFriendsGroupByOutputType[P]>
        }
      >
    >


  export type UserFriendsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFriends"]>

  export type UserFriendsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFriends"]>

  export type UserFriendsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFriends"]>

  export type UserFriendsSelectScalar = {
    id?: boolean
    userId?: boolean
    friendId?: boolean
    status?: boolean
  }

  export type UserFriendsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "friendId" | "status", ExtArgs["result"]["userFriends"]>
  export type UserFriendsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFriendsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type UserFriendsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    friend?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $UserFriendsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFriends"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      friend: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      friendId: string
      status: string
    }, ExtArgs["result"]["userFriends"]>
    composites: {}
  }

  type UserFriendsGetPayload<S extends boolean | null | undefined | UserFriendsDefaultArgs> = $Result.GetResult<Prisma.$UserFriendsPayload, S>

  type UserFriendsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFriendsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserFriendsCountAggregateInputType | true
    }

  export interface UserFriendsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFriends'], meta: { name: 'UserFriends' } }
    /**
     * Find zero or one UserFriends that matches the filter.
     * @param {UserFriendsFindUniqueArgs} args - Arguments to find a UserFriends
     * @example
     * // Get one UserFriends
     * const userFriends = await prisma.userFriends.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFriendsFindUniqueArgs>(args: SelectSubset<T, UserFriendsFindUniqueArgs<ExtArgs>>): Prisma__UserFriendsClient<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserFriends that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFriendsFindUniqueOrThrowArgs} args - Arguments to find a UserFriends
     * @example
     * // Get one UserFriends
     * const userFriends = await prisma.userFriends.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFriendsFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFriendsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserFriendsClient<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFriends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFriendsFindFirstArgs} args - Arguments to find a UserFriends
     * @example
     * // Get one UserFriends
     * const userFriends = await prisma.userFriends.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFriendsFindFirstArgs>(args?: SelectSubset<T, UserFriendsFindFirstArgs<ExtArgs>>): Prisma__UserFriendsClient<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserFriends that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFriendsFindFirstOrThrowArgs} args - Arguments to find a UserFriends
     * @example
     * // Get one UserFriends
     * const userFriends = await prisma.userFriends.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFriendsFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFriendsFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserFriendsClient<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserFriends that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFriendsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFriends
     * const userFriends = await prisma.userFriends.findMany()
     * 
     * // Get first 10 UserFriends
     * const userFriends = await prisma.userFriends.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFriendsWithIdOnly = await prisma.userFriends.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFriendsFindManyArgs>(args?: SelectSubset<T, UserFriendsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserFriends.
     * @param {UserFriendsCreateArgs} args - Arguments to create a UserFriends.
     * @example
     * // Create one UserFriends
     * const UserFriends = await prisma.userFriends.create({
     *   data: {
     *     // ... data to create a UserFriends
     *   }
     * })
     * 
     */
    create<T extends UserFriendsCreateArgs>(args: SelectSubset<T, UserFriendsCreateArgs<ExtArgs>>): Prisma__UserFriendsClient<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserFriends.
     * @param {UserFriendsCreateManyArgs} args - Arguments to create many UserFriends.
     * @example
     * // Create many UserFriends
     * const userFriends = await prisma.userFriends.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserFriendsCreateManyArgs>(args?: SelectSubset<T, UserFriendsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserFriends and returns the data saved in the database.
     * @param {UserFriendsCreateManyAndReturnArgs} args - Arguments to create many UserFriends.
     * @example
     * // Create many UserFriends
     * const userFriends = await prisma.userFriends.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserFriends and only return the `id`
     * const userFriendsWithIdOnly = await prisma.userFriends.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserFriendsCreateManyAndReturnArgs>(args?: SelectSubset<T, UserFriendsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserFriends.
     * @param {UserFriendsDeleteArgs} args - Arguments to delete one UserFriends.
     * @example
     * // Delete one UserFriends
     * const UserFriends = await prisma.userFriends.delete({
     *   where: {
     *     // ... filter to delete one UserFriends
     *   }
     * })
     * 
     */
    delete<T extends UserFriendsDeleteArgs>(args: SelectSubset<T, UserFriendsDeleteArgs<ExtArgs>>): Prisma__UserFriendsClient<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserFriends.
     * @param {UserFriendsUpdateArgs} args - Arguments to update one UserFriends.
     * @example
     * // Update one UserFriends
     * const userFriends = await prisma.userFriends.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserFriendsUpdateArgs>(args: SelectSubset<T, UserFriendsUpdateArgs<ExtArgs>>): Prisma__UserFriendsClient<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserFriends.
     * @param {UserFriendsDeleteManyArgs} args - Arguments to filter UserFriends to delete.
     * @example
     * // Delete a few UserFriends
     * const { count } = await prisma.userFriends.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserFriendsDeleteManyArgs>(args?: SelectSubset<T, UserFriendsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFriendsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFriends
     * const userFriends = await prisma.userFriends.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserFriendsUpdateManyArgs>(args: SelectSubset<T, UserFriendsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFriends and returns the data updated in the database.
     * @param {UserFriendsUpdateManyAndReturnArgs} args - Arguments to update many UserFriends.
     * @example
     * // Update many UserFriends
     * const userFriends = await prisma.userFriends.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserFriends and only return the `id`
     * const userFriendsWithIdOnly = await prisma.userFriends.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserFriendsUpdateManyAndReturnArgs>(args: SelectSubset<T, UserFriendsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserFriends.
     * @param {UserFriendsUpsertArgs} args - Arguments to update or create a UserFriends.
     * @example
     * // Update or create a UserFriends
     * const userFriends = await prisma.userFriends.upsert({
     *   create: {
     *     // ... data to create a UserFriends
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFriends we want to update
     *   }
     * })
     */
    upsert<T extends UserFriendsUpsertArgs>(args: SelectSubset<T, UserFriendsUpsertArgs<ExtArgs>>): Prisma__UserFriendsClient<$Result.GetResult<Prisma.$UserFriendsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFriendsCountArgs} args - Arguments to filter UserFriends to count.
     * @example
     * // Count the number of UserFriends
     * const count = await prisma.userFriends.count({
     *   where: {
     *     // ... the filter for the UserFriends we want to count
     *   }
     * })
    **/
    count<T extends UserFriendsCountArgs>(
      args?: Subset<T, UserFriendsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFriendsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFriendsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserFriendsAggregateArgs>(args: Subset<T, UserFriendsAggregateArgs>): Prisma.PrismaPromise<GetUserFriendsAggregateType<T>>

    /**
     * Group by UserFriends.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFriendsGroupByArgs} args - Group by arguments.
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
      T extends UserFriendsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFriendsGroupByArgs['orderBy'] }
        : { orderBy?: UserFriendsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserFriendsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFriendsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFriends model
   */
  readonly fields: UserFriendsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFriends.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFriendsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    friend<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserFriends model
   */
  interface UserFriendsFieldRefs {
    readonly id: FieldRef<"UserFriends", 'String'>
    readonly userId: FieldRef<"UserFriends", 'String'>
    readonly friendId: FieldRef<"UserFriends", 'String'>
    readonly status: FieldRef<"UserFriends", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserFriends findUnique
   */
  export type UserFriendsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * Filter, which UserFriends to fetch.
     */
    where: UserFriendsWhereUniqueInput
  }

  /**
   * UserFriends findUniqueOrThrow
   */
  export type UserFriendsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * Filter, which UserFriends to fetch.
     */
    where: UserFriendsWhereUniqueInput
  }

  /**
   * UserFriends findFirst
   */
  export type UserFriendsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * Filter, which UserFriends to fetch.
     */
    where?: UserFriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFriends to fetch.
     */
    orderBy?: UserFriendsOrderByWithRelationInput | UserFriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFriends.
     */
    cursor?: UserFriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFriends.
     */
    distinct?: UserFriendsScalarFieldEnum | UserFriendsScalarFieldEnum[]
  }

  /**
   * UserFriends findFirstOrThrow
   */
  export type UserFriendsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * Filter, which UserFriends to fetch.
     */
    where?: UserFriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFriends to fetch.
     */
    orderBy?: UserFriendsOrderByWithRelationInput | UserFriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFriends.
     */
    cursor?: UserFriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFriends.
     */
    distinct?: UserFriendsScalarFieldEnum | UserFriendsScalarFieldEnum[]
  }

  /**
   * UserFriends findMany
   */
  export type UserFriendsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * Filter, which UserFriends to fetch.
     */
    where?: UserFriendsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFriends to fetch.
     */
    orderBy?: UserFriendsOrderByWithRelationInput | UserFriendsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFriends.
     */
    cursor?: UserFriendsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFriends from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFriends.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFriends.
     */
    distinct?: UserFriendsScalarFieldEnum | UserFriendsScalarFieldEnum[]
  }

  /**
   * UserFriends create
   */
  export type UserFriendsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFriends.
     */
    data: XOR<UserFriendsCreateInput, UserFriendsUncheckedCreateInput>
  }

  /**
   * UserFriends createMany
   */
  export type UserFriendsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFriends.
     */
    data: UserFriendsCreateManyInput | UserFriendsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserFriends createManyAndReturn
   */
  export type UserFriendsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * The data used to create many UserFriends.
     */
    data: UserFriendsCreateManyInput | UserFriendsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFriends update
   */
  export type UserFriendsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFriends.
     */
    data: XOR<UserFriendsUpdateInput, UserFriendsUncheckedUpdateInput>
    /**
     * Choose, which UserFriends to update.
     */
    where: UserFriendsWhereUniqueInput
  }

  /**
   * UserFriends updateMany
   */
  export type UserFriendsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFriends.
     */
    data: XOR<UserFriendsUpdateManyMutationInput, UserFriendsUncheckedUpdateManyInput>
    /**
     * Filter which UserFriends to update
     */
    where?: UserFriendsWhereInput
    /**
     * Limit how many UserFriends to update.
     */
    limit?: number
  }

  /**
   * UserFriends updateManyAndReturn
   */
  export type UserFriendsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * The data used to update UserFriends.
     */
    data: XOR<UserFriendsUpdateManyMutationInput, UserFriendsUncheckedUpdateManyInput>
    /**
     * Filter which UserFriends to update
     */
    where?: UserFriendsWhereInput
    /**
     * Limit how many UserFriends to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserFriends upsert
   */
  export type UserFriendsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFriends to update in case it exists.
     */
    where: UserFriendsWhereUniqueInput
    /**
     * In case the UserFriends found by the `where` argument doesn't exist, create a new UserFriends with this data.
     */
    create: XOR<UserFriendsCreateInput, UserFriendsUncheckedCreateInput>
    /**
     * In case the UserFriends was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFriendsUpdateInput, UserFriendsUncheckedUpdateInput>
  }

  /**
   * UserFriends delete
   */
  export type UserFriendsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
    /**
     * Filter which UserFriends to delete.
     */
    where: UserFriendsWhereUniqueInput
  }

  /**
   * UserFriends deleteMany
   */
  export type UserFriendsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFriends to delete
     */
    where?: UserFriendsWhereInput
    /**
     * Limit how many UserFriends to delete.
     */
    limit?: number
  }

  /**
   * UserFriends without action
   */
  export type UserFriendsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFriends
     */
    select?: UserFriendsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserFriends
     */
    omit?: UserFriendsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserFriendsInclude<ExtArgs> | null
  }


  /**
   * Model UserWatchLater
   */

  export type AggregateUserWatchLater = {
    _count: UserWatchLaterCountAggregateOutputType | null
    _min: UserWatchLaterMinAggregateOutputType | null
    _max: UserWatchLaterMaxAggregateOutputType | null
  }

  export type UserWatchLaterMinAggregateOutputType = {
    id: string | null
    userId: string | null
    movieId: string | null
    addedAt: Date | null
  }

  export type UserWatchLaterMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    movieId: string | null
    addedAt: Date | null
  }

  export type UserWatchLaterCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    addedAt: number
    _all: number
  }


  export type UserWatchLaterMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    addedAt?: true
  }

  export type UserWatchLaterMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    addedAt?: true
  }

  export type UserWatchLaterCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    addedAt?: true
    _all?: true
  }

  export type UserWatchLaterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWatchLater to aggregate.
     */
    where?: UserWatchLaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchLaters to fetch.
     */
    orderBy?: UserWatchLaterOrderByWithRelationInput | UserWatchLaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWatchLaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchLaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchLaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWatchLaters
    **/
    _count?: true | UserWatchLaterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWatchLaterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWatchLaterMaxAggregateInputType
  }

  export type GetUserWatchLaterAggregateType<T extends UserWatchLaterAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWatchLater]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWatchLater[P]>
      : GetScalarType<T[P], AggregateUserWatchLater[P]>
  }




  export type UserWatchLaterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchLaterWhereInput
    orderBy?: UserWatchLaterOrderByWithAggregationInput | UserWatchLaterOrderByWithAggregationInput[]
    by: UserWatchLaterScalarFieldEnum[] | UserWatchLaterScalarFieldEnum
    having?: UserWatchLaterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWatchLaterCountAggregateInputType | true
    _min?: UserWatchLaterMinAggregateInputType
    _max?: UserWatchLaterMaxAggregateInputType
  }

  export type UserWatchLaterGroupByOutputType = {
    id: string
    userId: string
    movieId: string
    addedAt: Date
    _count: UserWatchLaterCountAggregateOutputType | null
    _min: UserWatchLaterMinAggregateOutputType | null
    _max: UserWatchLaterMaxAggregateOutputType | null
  }

  type GetUserWatchLaterGroupByPayload<T extends UserWatchLaterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWatchLaterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWatchLaterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWatchLaterGroupByOutputType[P]>
            : GetScalarType<T[P], UserWatchLaterGroupByOutputType[P]>
        }
      >
    >


  export type UserWatchLaterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchLater"]>

  export type UserWatchLaterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchLater"]>

  export type UserWatchLaterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    addedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatchLater"]>

  export type UserWatchLaterSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    addedAt?: boolean
  }

  export type UserWatchLaterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieId" | "addedAt", ExtArgs["result"]["userWatchLater"]>
  export type UserWatchLaterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type UserWatchLaterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type UserWatchLaterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $UserWatchLaterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWatchLater"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      movieId: string
      addedAt: Date
    }, ExtArgs["result"]["userWatchLater"]>
    composites: {}
  }

  type UserWatchLaterGetPayload<S extends boolean | null | undefined | UserWatchLaterDefaultArgs> = $Result.GetResult<Prisma.$UserWatchLaterPayload, S>

  type UserWatchLaterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWatchLaterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWatchLaterCountAggregateInputType | true
    }

  export interface UserWatchLaterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWatchLater'], meta: { name: 'UserWatchLater' } }
    /**
     * Find zero or one UserWatchLater that matches the filter.
     * @param {UserWatchLaterFindUniqueArgs} args - Arguments to find a UserWatchLater
     * @example
     * // Get one UserWatchLater
     * const userWatchLater = await prisma.userWatchLater.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWatchLaterFindUniqueArgs>(args: SelectSubset<T, UserWatchLaterFindUniqueArgs<ExtArgs>>): Prisma__UserWatchLaterClient<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWatchLater that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWatchLaterFindUniqueOrThrowArgs} args - Arguments to find a UserWatchLater
     * @example
     * // Get one UserWatchLater
     * const userWatchLater = await prisma.userWatchLater.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWatchLaterFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWatchLaterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWatchLaterClient<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWatchLater that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchLaterFindFirstArgs} args - Arguments to find a UserWatchLater
     * @example
     * // Get one UserWatchLater
     * const userWatchLater = await prisma.userWatchLater.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWatchLaterFindFirstArgs>(args?: SelectSubset<T, UserWatchLaterFindFirstArgs<ExtArgs>>): Prisma__UserWatchLaterClient<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWatchLater that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchLaterFindFirstOrThrowArgs} args - Arguments to find a UserWatchLater
     * @example
     * // Get one UserWatchLater
     * const userWatchLater = await prisma.userWatchLater.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWatchLaterFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWatchLaterFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWatchLaterClient<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWatchLaters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchLaterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWatchLaters
     * const userWatchLaters = await prisma.userWatchLater.findMany()
     * 
     * // Get first 10 UserWatchLaters
     * const userWatchLaters = await prisma.userWatchLater.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWatchLaterWithIdOnly = await prisma.userWatchLater.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWatchLaterFindManyArgs>(args?: SelectSubset<T, UserWatchLaterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWatchLater.
     * @param {UserWatchLaterCreateArgs} args - Arguments to create a UserWatchLater.
     * @example
     * // Create one UserWatchLater
     * const UserWatchLater = await prisma.userWatchLater.create({
     *   data: {
     *     // ... data to create a UserWatchLater
     *   }
     * })
     * 
     */
    create<T extends UserWatchLaterCreateArgs>(args: SelectSubset<T, UserWatchLaterCreateArgs<ExtArgs>>): Prisma__UserWatchLaterClient<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWatchLaters.
     * @param {UserWatchLaterCreateManyArgs} args - Arguments to create many UserWatchLaters.
     * @example
     * // Create many UserWatchLaters
     * const userWatchLater = await prisma.userWatchLater.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWatchLaterCreateManyArgs>(args?: SelectSubset<T, UserWatchLaterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWatchLaters and returns the data saved in the database.
     * @param {UserWatchLaterCreateManyAndReturnArgs} args - Arguments to create many UserWatchLaters.
     * @example
     * // Create many UserWatchLaters
     * const userWatchLater = await prisma.userWatchLater.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWatchLaters and only return the `id`
     * const userWatchLaterWithIdOnly = await prisma.userWatchLater.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWatchLaterCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWatchLaterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWatchLater.
     * @param {UserWatchLaterDeleteArgs} args - Arguments to delete one UserWatchLater.
     * @example
     * // Delete one UserWatchLater
     * const UserWatchLater = await prisma.userWatchLater.delete({
     *   where: {
     *     // ... filter to delete one UserWatchLater
     *   }
     * })
     * 
     */
    delete<T extends UserWatchLaterDeleteArgs>(args: SelectSubset<T, UserWatchLaterDeleteArgs<ExtArgs>>): Prisma__UserWatchLaterClient<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWatchLater.
     * @param {UserWatchLaterUpdateArgs} args - Arguments to update one UserWatchLater.
     * @example
     * // Update one UserWatchLater
     * const userWatchLater = await prisma.userWatchLater.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWatchLaterUpdateArgs>(args: SelectSubset<T, UserWatchLaterUpdateArgs<ExtArgs>>): Prisma__UserWatchLaterClient<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWatchLaters.
     * @param {UserWatchLaterDeleteManyArgs} args - Arguments to filter UserWatchLaters to delete.
     * @example
     * // Delete a few UserWatchLaters
     * const { count } = await prisma.userWatchLater.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWatchLaterDeleteManyArgs>(args?: SelectSubset<T, UserWatchLaterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWatchLaters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchLaterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWatchLaters
     * const userWatchLater = await prisma.userWatchLater.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWatchLaterUpdateManyArgs>(args: SelectSubset<T, UserWatchLaterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWatchLaters and returns the data updated in the database.
     * @param {UserWatchLaterUpdateManyAndReturnArgs} args - Arguments to update many UserWatchLaters.
     * @example
     * // Update many UserWatchLaters
     * const userWatchLater = await prisma.userWatchLater.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWatchLaters and only return the `id`
     * const userWatchLaterWithIdOnly = await prisma.userWatchLater.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserWatchLaterUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWatchLaterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWatchLater.
     * @param {UserWatchLaterUpsertArgs} args - Arguments to update or create a UserWatchLater.
     * @example
     * // Update or create a UserWatchLater
     * const userWatchLater = await prisma.userWatchLater.upsert({
     *   create: {
     *     // ... data to create a UserWatchLater
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWatchLater we want to update
     *   }
     * })
     */
    upsert<T extends UserWatchLaterUpsertArgs>(args: SelectSubset<T, UserWatchLaterUpsertArgs<ExtArgs>>): Prisma__UserWatchLaterClient<$Result.GetResult<Prisma.$UserWatchLaterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWatchLaters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchLaterCountArgs} args - Arguments to filter UserWatchLaters to count.
     * @example
     * // Count the number of UserWatchLaters
     * const count = await prisma.userWatchLater.count({
     *   where: {
     *     // ... the filter for the UserWatchLaters we want to count
     *   }
     * })
    **/
    count<T extends UserWatchLaterCountArgs>(
      args?: Subset<T, UserWatchLaterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWatchLaterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWatchLater.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchLaterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWatchLaterAggregateArgs>(args: Subset<T, UserWatchLaterAggregateArgs>): Prisma.PrismaPromise<GetUserWatchLaterAggregateType<T>>

    /**
     * Group by UserWatchLater.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchLaterGroupByArgs} args - Group by arguments.
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
      T extends UserWatchLaterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWatchLaterGroupByArgs['orderBy'] }
        : { orderBy?: UserWatchLaterGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWatchLaterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWatchLaterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWatchLater model
   */
  readonly fields: UserWatchLaterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWatchLater.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWatchLaterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserWatchLater model
   */
  interface UserWatchLaterFieldRefs {
    readonly id: FieldRef<"UserWatchLater", 'String'>
    readonly userId: FieldRef<"UserWatchLater", 'String'>
    readonly movieId: FieldRef<"UserWatchLater", 'String'>
    readonly addedAt: FieldRef<"UserWatchLater", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWatchLater findUnique
   */
  export type UserWatchLaterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchLater to fetch.
     */
    where: UserWatchLaterWhereUniqueInput
  }

  /**
   * UserWatchLater findUniqueOrThrow
   */
  export type UserWatchLaterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchLater to fetch.
     */
    where: UserWatchLaterWhereUniqueInput
  }

  /**
   * UserWatchLater findFirst
   */
  export type UserWatchLaterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchLater to fetch.
     */
    where?: UserWatchLaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchLaters to fetch.
     */
    orderBy?: UserWatchLaterOrderByWithRelationInput | UserWatchLaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWatchLaters.
     */
    cursor?: UserWatchLaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchLaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchLaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatchLaters.
     */
    distinct?: UserWatchLaterScalarFieldEnum | UserWatchLaterScalarFieldEnum[]
  }

  /**
   * UserWatchLater findFirstOrThrow
   */
  export type UserWatchLaterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchLater to fetch.
     */
    where?: UserWatchLaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchLaters to fetch.
     */
    orderBy?: UserWatchLaterOrderByWithRelationInput | UserWatchLaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWatchLaters.
     */
    cursor?: UserWatchLaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchLaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchLaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatchLaters.
     */
    distinct?: UserWatchLaterScalarFieldEnum | UserWatchLaterScalarFieldEnum[]
  }

  /**
   * UserWatchLater findMany
   */
  export type UserWatchLaterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * Filter, which UserWatchLaters to fetch.
     */
    where?: UserWatchLaterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatchLaters to fetch.
     */
    orderBy?: UserWatchLaterOrderByWithRelationInput | UserWatchLaterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWatchLaters.
     */
    cursor?: UserWatchLaterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatchLaters from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatchLaters.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatchLaters.
     */
    distinct?: UserWatchLaterScalarFieldEnum | UserWatchLaterScalarFieldEnum[]
  }

  /**
   * UserWatchLater create
   */
  export type UserWatchLaterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWatchLater.
     */
    data: XOR<UserWatchLaterCreateInput, UserWatchLaterUncheckedCreateInput>
  }

  /**
   * UserWatchLater createMany
   */
  export type UserWatchLaterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWatchLaters.
     */
    data: UserWatchLaterCreateManyInput | UserWatchLaterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWatchLater createManyAndReturn
   */
  export type UserWatchLaterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * The data used to create many UserWatchLaters.
     */
    data: UserWatchLaterCreateManyInput | UserWatchLaterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWatchLater update
   */
  export type UserWatchLaterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWatchLater.
     */
    data: XOR<UserWatchLaterUpdateInput, UserWatchLaterUncheckedUpdateInput>
    /**
     * Choose, which UserWatchLater to update.
     */
    where: UserWatchLaterWhereUniqueInput
  }

  /**
   * UserWatchLater updateMany
   */
  export type UserWatchLaterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWatchLaters.
     */
    data: XOR<UserWatchLaterUpdateManyMutationInput, UserWatchLaterUncheckedUpdateManyInput>
    /**
     * Filter which UserWatchLaters to update
     */
    where?: UserWatchLaterWhereInput
    /**
     * Limit how many UserWatchLaters to update.
     */
    limit?: number
  }

  /**
   * UserWatchLater updateManyAndReturn
   */
  export type UserWatchLaterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * The data used to update UserWatchLaters.
     */
    data: XOR<UserWatchLaterUpdateManyMutationInput, UserWatchLaterUncheckedUpdateManyInput>
    /**
     * Filter which UserWatchLaters to update
     */
    where?: UserWatchLaterWhereInput
    /**
     * Limit how many UserWatchLaters to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWatchLater upsert
   */
  export type UserWatchLaterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWatchLater to update in case it exists.
     */
    where: UserWatchLaterWhereUniqueInput
    /**
     * In case the UserWatchLater found by the `where` argument doesn't exist, create a new UserWatchLater with this data.
     */
    create: XOR<UserWatchLaterCreateInput, UserWatchLaterUncheckedCreateInput>
    /**
     * In case the UserWatchLater was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWatchLaterUpdateInput, UserWatchLaterUncheckedUpdateInput>
  }

  /**
   * UserWatchLater delete
   */
  export type UserWatchLaterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
    /**
     * Filter which UserWatchLater to delete.
     */
    where: UserWatchLaterWhereUniqueInput
  }

  /**
   * UserWatchLater deleteMany
   */
  export type UserWatchLaterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWatchLaters to delete
     */
    where?: UserWatchLaterWhereInput
    /**
     * Limit how many UserWatchLaters to delete.
     */
    limit?: number
  }

  /**
   * UserWatchLater without action
   */
  export type UserWatchLaterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatchLater
     */
    select?: UserWatchLaterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatchLater
     */
    omit?: UserWatchLaterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchLaterInclude<ExtArgs> | null
  }


  /**
   * Model UserWatched
   */

  export type AggregateUserWatched = {
    _count: UserWatchedCountAggregateOutputType | null
    _min: UserWatchedMinAggregateOutputType | null
    _max: UserWatchedMaxAggregateOutputType | null
  }

  export type UserWatchedMinAggregateOutputType = {
    id: string | null
    userId: string | null
    movieId: string | null
    review: string | null
    watchedAt: Date | null
  }

  export type UserWatchedMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    movieId: string | null
    review: string | null
    watchedAt: Date | null
  }

  export type UserWatchedCountAggregateOutputType = {
    id: number
    userId: number
    movieId: number
    review: number
    watchedAt: number
    _all: number
  }


  export type UserWatchedMinAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    review?: true
    watchedAt?: true
  }

  export type UserWatchedMaxAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    review?: true
    watchedAt?: true
  }

  export type UserWatchedCountAggregateInputType = {
    id?: true
    userId?: true
    movieId?: true
    review?: true
    watchedAt?: true
    _all?: true
  }

  export type UserWatchedAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWatched to aggregate.
     */
    where?: UserWatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatcheds to fetch.
     */
    orderBy?: UserWatchedOrderByWithRelationInput | UserWatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserWatcheds
    **/
    _count?: true | UserWatchedCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserWatchedMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserWatchedMaxAggregateInputType
  }

  export type GetUserWatchedAggregateType<T extends UserWatchedAggregateArgs> = {
        [P in keyof T & keyof AggregateUserWatched]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserWatched[P]>
      : GetScalarType<T[P], AggregateUserWatched[P]>
  }




  export type UserWatchedGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWatchedWhereInput
    orderBy?: UserWatchedOrderByWithAggregationInput | UserWatchedOrderByWithAggregationInput[]
    by: UserWatchedScalarFieldEnum[] | UserWatchedScalarFieldEnum
    having?: UserWatchedScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserWatchedCountAggregateInputType | true
    _min?: UserWatchedMinAggregateInputType
    _max?: UserWatchedMaxAggregateInputType
  }

  export type UserWatchedGroupByOutputType = {
    id: string
    userId: string
    movieId: string
    review: string | null
    watchedAt: Date
    _count: UserWatchedCountAggregateOutputType | null
    _min: UserWatchedMinAggregateOutputType | null
    _max: UserWatchedMaxAggregateOutputType | null
  }

  type GetUserWatchedGroupByPayload<T extends UserWatchedGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserWatchedGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserWatchedGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserWatchedGroupByOutputType[P]>
            : GetScalarType<T[P], UserWatchedGroupByOutputType[P]>
        }
      >
    >


  export type UserWatchedSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    review?: boolean
    watchedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatched"]>

  export type UserWatchedSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    review?: boolean
    watchedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatched"]>

  export type UserWatchedSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    movieId?: boolean
    review?: boolean
    watchedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userWatched"]>

  export type UserWatchedSelectScalar = {
    id?: boolean
    userId?: boolean
    movieId?: boolean
    review?: boolean
    watchedAt?: boolean
  }

  export type UserWatchedOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "movieId" | "review" | "watchedAt", ExtArgs["result"]["userWatched"]>
  export type UserWatchedInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type UserWatchedIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }
  export type UserWatchedIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    movie?: boolean | MovieDefaultArgs<ExtArgs>
  }

  export type $UserWatchedPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserWatched"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      movie: Prisma.$MoviePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      movieId: string
      review: string | null
      watchedAt: Date
    }, ExtArgs["result"]["userWatched"]>
    composites: {}
  }

  type UserWatchedGetPayload<S extends boolean | null | undefined | UserWatchedDefaultArgs> = $Result.GetResult<Prisma.$UserWatchedPayload, S>

  type UserWatchedCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserWatchedFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserWatchedCountAggregateInputType | true
    }

  export interface UserWatchedDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserWatched'], meta: { name: 'UserWatched' } }
    /**
     * Find zero or one UserWatched that matches the filter.
     * @param {UserWatchedFindUniqueArgs} args - Arguments to find a UserWatched
     * @example
     * // Get one UserWatched
     * const userWatched = await prisma.userWatched.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserWatchedFindUniqueArgs>(args: SelectSubset<T, UserWatchedFindUniqueArgs<ExtArgs>>): Prisma__UserWatchedClient<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserWatched that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserWatchedFindUniqueOrThrowArgs} args - Arguments to find a UserWatched
     * @example
     * // Get one UserWatched
     * const userWatched = await prisma.userWatched.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserWatchedFindUniqueOrThrowArgs>(args: SelectSubset<T, UserWatchedFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserWatchedClient<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWatched that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchedFindFirstArgs} args - Arguments to find a UserWatched
     * @example
     * // Get one UserWatched
     * const userWatched = await prisma.userWatched.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserWatchedFindFirstArgs>(args?: SelectSubset<T, UserWatchedFindFirstArgs<ExtArgs>>): Prisma__UserWatchedClient<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserWatched that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchedFindFirstOrThrowArgs} args - Arguments to find a UserWatched
     * @example
     * // Get one UserWatched
     * const userWatched = await prisma.userWatched.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserWatchedFindFirstOrThrowArgs>(args?: SelectSubset<T, UserWatchedFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserWatchedClient<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserWatcheds that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchedFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserWatcheds
     * const userWatcheds = await prisma.userWatched.findMany()
     * 
     * // Get first 10 UserWatcheds
     * const userWatcheds = await prisma.userWatched.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWatchedWithIdOnly = await prisma.userWatched.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserWatchedFindManyArgs>(args?: SelectSubset<T, UserWatchedFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserWatched.
     * @param {UserWatchedCreateArgs} args - Arguments to create a UserWatched.
     * @example
     * // Create one UserWatched
     * const UserWatched = await prisma.userWatched.create({
     *   data: {
     *     // ... data to create a UserWatched
     *   }
     * })
     * 
     */
    create<T extends UserWatchedCreateArgs>(args: SelectSubset<T, UserWatchedCreateArgs<ExtArgs>>): Prisma__UserWatchedClient<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserWatcheds.
     * @param {UserWatchedCreateManyArgs} args - Arguments to create many UserWatcheds.
     * @example
     * // Create many UserWatcheds
     * const userWatched = await prisma.userWatched.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserWatchedCreateManyArgs>(args?: SelectSubset<T, UserWatchedCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserWatcheds and returns the data saved in the database.
     * @param {UserWatchedCreateManyAndReturnArgs} args - Arguments to create many UserWatcheds.
     * @example
     * // Create many UserWatcheds
     * const userWatched = await prisma.userWatched.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserWatcheds and only return the `id`
     * const userWatchedWithIdOnly = await prisma.userWatched.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserWatchedCreateManyAndReturnArgs>(args?: SelectSubset<T, UserWatchedCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserWatched.
     * @param {UserWatchedDeleteArgs} args - Arguments to delete one UserWatched.
     * @example
     * // Delete one UserWatched
     * const UserWatched = await prisma.userWatched.delete({
     *   where: {
     *     // ... filter to delete one UserWatched
     *   }
     * })
     * 
     */
    delete<T extends UserWatchedDeleteArgs>(args: SelectSubset<T, UserWatchedDeleteArgs<ExtArgs>>): Prisma__UserWatchedClient<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserWatched.
     * @param {UserWatchedUpdateArgs} args - Arguments to update one UserWatched.
     * @example
     * // Update one UserWatched
     * const userWatched = await prisma.userWatched.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserWatchedUpdateArgs>(args: SelectSubset<T, UserWatchedUpdateArgs<ExtArgs>>): Prisma__UserWatchedClient<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserWatcheds.
     * @param {UserWatchedDeleteManyArgs} args - Arguments to filter UserWatcheds to delete.
     * @example
     * // Delete a few UserWatcheds
     * const { count } = await prisma.userWatched.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserWatchedDeleteManyArgs>(args?: SelectSubset<T, UserWatchedDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWatcheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchedUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserWatcheds
     * const userWatched = await prisma.userWatched.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserWatchedUpdateManyArgs>(args: SelectSubset<T, UserWatchedUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserWatcheds and returns the data updated in the database.
     * @param {UserWatchedUpdateManyAndReturnArgs} args - Arguments to update many UserWatcheds.
     * @example
     * // Update many UserWatcheds
     * const userWatched = await prisma.userWatched.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserWatcheds and only return the `id`
     * const userWatchedWithIdOnly = await prisma.userWatched.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserWatchedUpdateManyAndReturnArgs>(args: SelectSubset<T, UserWatchedUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserWatched.
     * @param {UserWatchedUpsertArgs} args - Arguments to update or create a UserWatched.
     * @example
     * // Update or create a UserWatched
     * const userWatched = await prisma.userWatched.upsert({
     *   create: {
     *     // ... data to create a UserWatched
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserWatched we want to update
     *   }
     * })
     */
    upsert<T extends UserWatchedUpsertArgs>(args: SelectSubset<T, UserWatchedUpsertArgs<ExtArgs>>): Prisma__UserWatchedClient<$Result.GetResult<Prisma.$UserWatchedPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserWatcheds.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchedCountArgs} args - Arguments to filter UserWatcheds to count.
     * @example
     * // Count the number of UserWatcheds
     * const count = await prisma.userWatched.count({
     *   where: {
     *     // ... the filter for the UserWatcheds we want to count
     *   }
     * })
    **/
    count<T extends UserWatchedCountArgs>(
      args?: Subset<T, UserWatchedCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserWatchedCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserWatched.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchedAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserWatchedAggregateArgs>(args: Subset<T, UserWatchedAggregateArgs>): Prisma.PrismaPromise<GetUserWatchedAggregateType<T>>

    /**
     * Group by UserWatched.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserWatchedGroupByArgs} args - Group by arguments.
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
      T extends UserWatchedGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserWatchedGroupByArgs['orderBy'] }
        : { orderBy?: UserWatchedGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserWatchedGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserWatchedGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserWatched model
   */
  readonly fields: UserWatchedFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserWatched.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserWatchedClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    movie<T extends MovieDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MovieDefaultArgs<ExtArgs>>): Prisma__MovieClient<$Result.GetResult<Prisma.$MoviePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserWatched model
   */
  interface UserWatchedFieldRefs {
    readonly id: FieldRef<"UserWatched", 'String'>
    readonly userId: FieldRef<"UserWatched", 'String'>
    readonly movieId: FieldRef<"UserWatched", 'String'>
    readonly review: FieldRef<"UserWatched", 'String'>
    readonly watchedAt: FieldRef<"UserWatched", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserWatched findUnique
   */
  export type UserWatchedFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * Filter, which UserWatched to fetch.
     */
    where: UserWatchedWhereUniqueInput
  }

  /**
   * UserWatched findUniqueOrThrow
   */
  export type UserWatchedFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * Filter, which UserWatched to fetch.
     */
    where: UserWatchedWhereUniqueInput
  }

  /**
   * UserWatched findFirst
   */
  export type UserWatchedFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * Filter, which UserWatched to fetch.
     */
    where?: UserWatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatcheds to fetch.
     */
    orderBy?: UserWatchedOrderByWithRelationInput | UserWatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWatcheds.
     */
    cursor?: UserWatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatcheds.
     */
    distinct?: UserWatchedScalarFieldEnum | UserWatchedScalarFieldEnum[]
  }

  /**
   * UserWatched findFirstOrThrow
   */
  export type UserWatchedFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * Filter, which UserWatched to fetch.
     */
    where?: UserWatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatcheds to fetch.
     */
    orderBy?: UserWatchedOrderByWithRelationInput | UserWatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserWatcheds.
     */
    cursor?: UserWatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatcheds.
     */
    distinct?: UserWatchedScalarFieldEnum | UserWatchedScalarFieldEnum[]
  }

  /**
   * UserWatched findMany
   */
  export type UserWatchedFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * Filter, which UserWatcheds to fetch.
     */
    where?: UserWatchedWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserWatcheds to fetch.
     */
    orderBy?: UserWatchedOrderByWithRelationInput | UserWatchedOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserWatcheds.
     */
    cursor?: UserWatchedWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserWatcheds from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserWatcheds.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserWatcheds.
     */
    distinct?: UserWatchedScalarFieldEnum | UserWatchedScalarFieldEnum[]
  }

  /**
   * UserWatched create
   */
  export type UserWatchedCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * The data needed to create a UserWatched.
     */
    data: XOR<UserWatchedCreateInput, UserWatchedUncheckedCreateInput>
  }

  /**
   * UserWatched createMany
   */
  export type UserWatchedCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserWatcheds.
     */
    data: UserWatchedCreateManyInput | UserWatchedCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserWatched createManyAndReturn
   */
  export type UserWatchedCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * The data used to create many UserWatcheds.
     */
    data: UserWatchedCreateManyInput | UserWatchedCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWatched update
   */
  export type UserWatchedUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * The data needed to update a UserWatched.
     */
    data: XOR<UserWatchedUpdateInput, UserWatchedUncheckedUpdateInput>
    /**
     * Choose, which UserWatched to update.
     */
    where: UserWatchedWhereUniqueInput
  }

  /**
   * UserWatched updateMany
   */
  export type UserWatchedUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserWatcheds.
     */
    data: XOR<UserWatchedUpdateManyMutationInput, UserWatchedUncheckedUpdateManyInput>
    /**
     * Filter which UserWatcheds to update
     */
    where?: UserWatchedWhereInput
    /**
     * Limit how many UserWatcheds to update.
     */
    limit?: number
  }

  /**
   * UserWatched updateManyAndReturn
   */
  export type UserWatchedUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * The data used to update UserWatcheds.
     */
    data: XOR<UserWatchedUpdateManyMutationInput, UserWatchedUncheckedUpdateManyInput>
    /**
     * Filter which UserWatcheds to update
     */
    where?: UserWatchedWhereInput
    /**
     * Limit how many UserWatcheds to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserWatched upsert
   */
  export type UserWatchedUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * The filter to search for the UserWatched to update in case it exists.
     */
    where: UserWatchedWhereUniqueInput
    /**
     * In case the UserWatched found by the `where` argument doesn't exist, create a new UserWatched with this data.
     */
    create: XOR<UserWatchedCreateInput, UserWatchedUncheckedCreateInput>
    /**
     * In case the UserWatched was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserWatchedUpdateInput, UserWatchedUncheckedUpdateInput>
  }

  /**
   * UserWatched delete
   */
  export type UserWatchedDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
    /**
     * Filter which UserWatched to delete.
     */
    where: UserWatchedWhereUniqueInput
  }

  /**
   * UserWatched deleteMany
   */
  export type UserWatchedDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserWatcheds to delete
     */
    where?: UserWatchedWhereInput
    /**
     * Limit how many UserWatcheds to delete.
     */
    limit?: number
  }

  /**
   * UserWatched without action
   */
  export type UserWatchedDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserWatched
     */
    select?: UserWatchedSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserWatched
     */
    omit?: UserWatchedOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserWatchedInclude<ExtArgs> | null
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


  export const MovieScalarFieldEnum: {
    id: 'id',
    tmdbId: 'tmdbId'
  };

  export type MovieScalarFieldEnum = (typeof MovieScalarFieldEnum)[keyof typeof MovieScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserFriendsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    status: 'status'
  };

  export type UserFriendsScalarFieldEnum = (typeof UserFriendsScalarFieldEnum)[keyof typeof UserFriendsScalarFieldEnum]


  export const UserWatchLaterScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    addedAt: 'addedAt'
  };

  export type UserWatchLaterScalarFieldEnum = (typeof UserWatchLaterScalarFieldEnum)[keyof typeof UserWatchLaterScalarFieldEnum]


  export const UserWatchedScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    movieId: 'movieId',
    review: 'review',
    watchedAt: 'watchedAt'
  };

  export type UserWatchedScalarFieldEnum = (typeof UserWatchedScalarFieldEnum)[keyof typeof UserWatchedScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


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


  export type MovieWhereInput = {
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    id?: StringFilter<"Movie"> | string
    tmdbId?: StringFilter<"Movie"> | string
    watched?: UserWatchedListRelationFilter
    watchLater?: UserWatchLaterListRelationFilter
  }

  export type MovieOrderByWithRelationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    watched?: UserWatchedOrderByRelationAggregateInput
    watchLater?: UserWatchLaterOrderByRelationAggregateInput
  }

  export type MovieWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tmdbId?: string
    AND?: MovieWhereInput | MovieWhereInput[]
    OR?: MovieWhereInput[]
    NOT?: MovieWhereInput | MovieWhereInput[]
    watched?: UserWatchedListRelationFilter
    watchLater?: UserWatchLaterListRelationFilter
  }, "id" | "tmdbId">

  export type MovieOrderByWithAggregationInput = {
    id?: SortOrder
    tmdbId?: SortOrder
    _count?: MovieCountOrderByAggregateInput
    _max?: MovieMaxOrderByAggregateInput
    _min?: MovieMinOrderByAggregateInput
  }

  export type MovieScalarWhereWithAggregatesInput = {
    AND?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    OR?: MovieScalarWhereWithAggregatesInput[]
    NOT?: MovieScalarWhereWithAggregatesInput | MovieScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Movie"> | string
    tmdbId?: StringWithAggregatesFilter<"Movie"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    watched?: UserWatchedListRelationFilter
    watchLater?: UserWatchLaterListRelationFilter
    friends?: UserFriendsListRelationFilter
    friendOf?: UserFriendsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    watched?: UserWatchedOrderByRelationAggregateInput
    watchLater?: UserWatchLaterOrderByRelationAggregateInput
    friends?: UserFriendsOrderByRelationAggregateInput
    friendOf?: UserFriendsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    watched?: UserWatchedListRelationFilter
    watchLater?: UserWatchLaterListRelationFilter
    friends?: UserFriendsListRelationFilter
    friendOf?: UserFriendsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserFriendsWhereInput = {
    AND?: UserFriendsWhereInput | UserFriendsWhereInput[]
    OR?: UserFriendsWhereInput[]
    NOT?: UserFriendsWhereInput | UserFriendsWhereInput[]
    id?: StringFilter<"UserFriends"> | string
    userId?: StringFilter<"UserFriends"> | string
    friendId?: StringFilter<"UserFriends"> | string
    status?: StringFilter<"UserFriends"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type UserFriendsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    user?: UserOrderByWithRelationInput
    friend?: UserOrderByWithRelationInput
  }

  export type UserFriendsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_friendId?: UserFriendsUserIdFriendIdCompoundUniqueInput
    AND?: UserFriendsWhereInput | UserFriendsWhereInput[]
    OR?: UserFriendsWhereInput[]
    NOT?: UserFriendsWhereInput | UserFriendsWhereInput[]
    userId?: StringFilter<"UserFriends"> | string
    friendId?: StringFilter<"UserFriends"> | string
    status?: StringFilter<"UserFriends"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    friend?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId_friendId">

  export type UserFriendsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
    _count?: UserFriendsCountOrderByAggregateInput
    _max?: UserFriendsMaxOrderByAggregateInput
    _min?: UserFriendsMinOrderByAggregateInput
  }

  export type UserFriendsScalarWhereWithAggregatesInput = {
    AND?: UserFriendsScalarWhereWithAggregatesInput | UserFriendsScalarWhereWithAggregatesInput[]
    OR?: UserFriendsScalarWhereWithAggregatesInput[]
    NOT?: UserFriendsScalarWhereWithAggregatesInput | UserFriendsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFriends"> | string
    userId?: StringWithAggregatesFilter<"UserFriends"> | string
    friendId?: StringWithAggregatesFilter<"UserFriends"> | string
    status?: StringWithAggregatesFilter<"UserFriends"> | string
  }

  export type UserWatchLaterWhereInput = {
    AND?: UserWatchLaterWhereInput | UserWatchLaterWhereInput[]
    OR?: UserWatchLaterWhereInput[]
    NOT?: UserWatchLaterWhereInput | UserWatchLaterWhereInput[]
    id?: StringFilter<"UserWatchLater"> | string
    userId?: StringFilter<"UserWatchLater"> | string
    movieId?: StringFilter<"UserWatchLater"> | string
    addedAt?: DateTimeFilter<"UserWatchLater"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type UserWatchLaterOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type UserWatchLaterWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_movieId?: UserWatchLaterUserIdMovieIdCompoundUniqueInput
    AND?: UserWatchLaterWhereInput | UserWatchLaterWhereInput[]
    OR?: UserWatchLaterWhereInput[]
    NOT?: UserWatchLaterWhereInput | UserWatchLaterWhereInput[]
    userId?: StringFilter<"UserWatchLater"> | string
    movieId?: StringFilter<"UserWatchLater"> | string
    addedAt?: DateTimeFilter<"UserWatchLater"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "id" | "userId_movieId">

  export type UserWatchLaterOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
    _count?: UserWatchLaterCountOrderByAggregateInput
    _max?: UserWatchLaterMaxOrderByAggregateInput
    _min?: UserWatchLaterMinOrderByAggregateInput
  }

  export type UserWatchLaterScalarWhereWithAggregatesInput = {
    AND?: UserWatchLaterScalarWhereWithAggregatesInput | UserWatchLaterScalarWhereWithAggregatesInput[]
    OR?: UserWatchLaterScalarWhereWithAggregatesInput[]
    NOT?: UserWatchLaterScalarWhereWithAggregatesInput | UserWatchLaterScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWatchLater"> | string
    userId?: StringWithAggregatesFilter<"UserWatchLater"> | string
    movieId?: StringWithAggregatesFilter<"UserWatchLater"> | string
    addedAt?: DateTimeWithAggregatesFilter<"UserWatchLater"> | Date | string
  }

  export type UserWatchedWhereInput = {
    AND?: UserWatchedWhereInput | UserWatchedWhereInput[]
    OR?: UserWatchedWhereInput[]
    NOT?: UserWatchedWhereInput | UserWatchedWhereInput[]
    id?: StringFilter<"UserWatched"> | string
    userId?: StringFilter<"UserWatched"> | string
    movieId?: StringFilter<"UserWatched"> | string
    review?: StringNullableFilter<"UserWatched"> | string | null
    watchedAt?: DateTimeFilter<"UserWatched"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }

  export type UserWatchedOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    review?: SortOrderInput | SortOrder
    watchedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MovieOrderByWithRelationInput
  }

  export type UserWatchedWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_movieId?: UserWatchedUserIdMovieIdCompoundUniqueInput
    AND?: UserWatchedWhereInput | UserWatchedWhereInput[]
    OR?: UserWatchedWhereInput[]
    NOT?: UserWatchedWhereInput | UserWatchedWhereInput[]
    userId?: StringFilter<"UserWatched"> | string
    movieId?: StringFilter<"UserWatched"> | string
    review?: StringNullableFilter<"UserWatched"> | string | null
    watchedAt?: DateTimeFilter<"UserWatched"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    movie?: XOR<MovieScalarRelationFilter, MovieWhereInput>
  }, "id" | "userId_movieId">

  export type UserWatchedOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    review?: SortOrderInput | SortOrder
    watchedAt?: SortOrder
    _count?: UserWatchedCountOrderByAggregateInput
    _max?: UserWatchedMaxOrderByAggregateInput
    _min?: UserWatchedMinOrderByAggregateInput
  }

  export type UserWatchedScalarWhereWithAggregatesInput = {
    AND?: UserWatchedScalarWhereWithAggregatesInput | UserWatchedScalarWhereWithAggregatesInput[]
    OR?: UserWatchedScalarWhereWithAggregatesInput[]
    NOT?: UserWatchedScalarWhereWithAggregatesInput | UserWatchedScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserWatched"> | string
    userId?: StringWithAggregatesFilter<"UserWatched"> | string
    movieId?: StringWithAggregatesFilter<"UserWatched"> | string
    review?: StringNullableWithAggregatesFilter<"UserWatched"> | string | null
    watchedAt?: DateTimeWithAggregatesFilter<"UserWatched"> | Date | string
  }

  export type MovieCreateInput = {
    id?: string
    tmdbId: string
    watched?: UserWatchedCreateNestedManyWithoutMovieInput
    watchLater?: UserWatchLaterCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateInput = {
    id?: string
    tmdbId: string
    watched?: UserWatchedUncheckedCreateNestedManyWithoutMovieInput
    watchLater?: UserWatchLaterUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: StringFieldUpdateOperationsInput | string
    watched?: UserWatchedUpdateManyWithoutMovieNestedInput
    watchLater?: UserWatchLaterUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: StringFieldUpdateOperationsInput | string
    watched?: UserWatchedUncheckedUpdateManyWithoutMovieNestedInput
    watchLater?: UserWatchLaterUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MovieCreateManyInput = {
    id?: string
    tmdbId: string
  }

  export type MovieUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: StringFieldUpdateOperationsInput | string
  }

  export type MovieUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watched?: UserWatchedCreateNestedManyWithoutUserInput
    watchLater?: UserWatchLaterCreateNestedManyWithoutUserInput
    friends?: UserFriendsCreateNestedManyWithoutUserInput
    friendOf?: UserFriendsCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watched?: UserWatchedUncheckedCreateNestedManyWithoutUserInput
    watchLater?: UserWatchLaterUncheckedCreateNestedManyWithoutUserInput
    friends?: UserFriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: UserFriendsUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watched?: UserWatchedUpdateManyWithoutUserNestedInput
    watchLater?: UserWatchLaterUpdateManyWithoutUserNestedInput
    friends?: UserFriendsUpdateManyWithoutUserNestedInput
    friendOf?: UserFriendsUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watched?: UserWatchedUncheckedUpdateManyWithoutUserNestedInput
    watchLater?: UserWatchLaterUncheckedUpdateManyWithoutUserNestedInput
    friends?: UserFriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: UserFriendsUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFriendsCreateInput = {
    id?: string
    status?: string
    user: UserCreateNestedOneWithoutFriendsInput
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type UserFriendsUncheckedCreateInput = {
    id?: string
    userId: string
    friendId: string
    status?: string
  }

  export type UserFriendsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type UserFriendsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserFriendsCreateManyInput = {
    id?: string
    userId: string
    friendId: string
    status?: string
  }

  export type UserFriendsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserFriendsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserWatchLaterCreateInput = {
    id?: string
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchLaterInput
    movie: MovieCreateNestedOneWithoutWatchLaterInput
  }

  export type UserWatchLaterUncheckedCreateInput = {
    id?: string
    userId: string
    movieId: string
    addedAt?: Date | string
  }

  export type UserWatchLaterUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchLaterNestedInput
    movie?: MovieUpdateOneRequiredWithoutWatchLaterNestedInput
  }

  export type UserWatchLaterUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchLaterCreateManyInput = {
    id?: string
    userId: string
    movieId: string
    addedAt?: Date | string
  }

  export type UserWatchLaterUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchLaterUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchedCreateInput = {
    id?: string
    review?: string | null
    watchedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchedInput
    movie: MovieCreateNestedOneWithoutWatchedInput
  }

  export type UserWatchedUncheckedCreateInput = {
    id?: string
    userId: string
    movieId: string
    review?: string | null
    watchedAt?: Date | string
  }

  export type UserWatchedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchedNestedInput
    movie?: MovieUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type UserWatchedUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchedCreateManyInput = {
    id?: string
    userId: string
    movieId: string
    review?: string | null
    watchedAt?: Date | string
  }

  export type UserWatchedUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchedUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type UserWatchedListRelationFilter = {
    every?: UserWatchedWhereInput
    some?: UserWatchedWhereInput
    none?: UserWatchedWhereInput
  }

  export type UserWatchLaterListRelationFilter = {
    every?: UserWatchLaterWhereInput
    some?: UserWatchLaterWhereInput
    none?: UserWatchLaterWhereInput
  }

  export type UserWatchedOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserWatchLaterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MovieCountOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
  }

  export type MovieMaxOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
  }

  export type MovieMinOrderByAggregateInput = {
    id?: SortOrder
    tmdbId?: SortOrder
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

  export type UserFriendsListRelationFilter = {
    every?: UserFriendsWhereInput
    some?: UserFriendsWhereInput
    none?: UserFriendsWhereInput
  }

  export type UserFriendsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserFriendsUserIdFriendIdCompoundUniqueInput = {
    userId: string
    friendId: string
  }

  export type UserFriendsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
  }

  export type UserFriendsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
  }

  export type UserFriendsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    friendId?: SortOrder
    status?: SortOrder
  }

  export type MovieScalarRelationFilter = {
    is?: MovieWhereInput
    isNot?: MovieWhereInput
  }

  export type UserWatchLaterUserIdMovieIdCompoundUniqueInput = {
    userId: string
    movieId: string
  }

  export type UserWatchLaterCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
  }

  export type UserWatchLaterMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
  }

  export type UserWatchLaterMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    addedAt?: SortOrder
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserWatchedUserIdMovieIdCompoundUniqueInput = {
    userId: string
    movieId: string
  }

  export type UserWatchedCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    review?: SortOrder
    watchedAt?: SortOrder
  }

  export type UserWatchedMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    review?: SortOrder
    watchedAt?: SortOrder
  }

  export type UserWatchedMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    movieId?: SortOrder
    review?: SortOrder
    watchedAt?: SortOrder
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

  export type UserWatchedCreateNestedManyWithoutMovieInput = {
    create?: XOR<UserWatchedCreateWithoutMovieInput, UserWatchedUncheckedCreateWithoutMovieInput> | UserWatchedCreateWithoutMovieInput[] | UserWatchedUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: UserWatchedCreateOrConnectWithoutMovieInput | UserWatchedCreateOrConnectWithoutMovieInput[]
    createMany?: UserWatchedCreateManyMovieInputEnvelope
    connect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
  }

  export type UserWatchLaterCreateNestedManyWithoutMovieInput = {
    create?: XOR<UserWatchLaterCreateWithoutMovieInput, UserWatchLaterUncheckedCreateWithoutMovieInput> | UserWatchLaterCreateWithoutMovieInput[] | UserWatchLaterUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: UserWatchLaterCreateOrConnectWithoutMovieInput | UserWatchLaterCreateOrConnectWithoutMovieInput[]
    createMany?: UserWatchLaterCreateManyMovieInputEnvelope
    connect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
  }

  export type UserWatchedUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<UserWatchedCreateWithoutMovieInput, UserWatchedUncheckedCreateWithoutMovieInput> | UserWatchedCreateWithoutMovieInput[] | UserWatchedUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: UserWatchedCreateOrConnectWithoutMovieInput | UserWatchedCreateOrConnectWithoutMovieInput[]
    createMany?: UserWatchedCreateManyMovieInputEnvelope
    connect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
  }

  export type UserWatchLaterUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<UserWatchLaterCreateWithoutMovieInput, UserWatchLaterUncheckedCreateWithoutMovieInput> | UserWatchLaterCreateWithoutMovieInput[] | UserWatchLaterUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: UserWatchLaterCreateOrConnectWithoutMovieInput | UserWatchLaterCreateOrConnectWithoutMovieInput[]
    createMany?: UserWatchLaterCreateManyMovieInputEnvelope
    connect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UserWatchedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<UserWatchedCreateWithoutMovieInput, UserWatchedUncheckedCreateWithoutMovieInput> | UserWatchedCreateWithoutMovieInput[] | UserWatchedUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: UserWatchedCreateOrConnectWithoutMovieInput | UserWatchedCreateOrConnectWithoutMovieInput[]
    upsert?: UserWatchedUpsertWithWhereUniqueWithoutMovieInput | UserWatchedUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: UserWatchedCreateManyMovieInputEnvelope
    set?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    disconnect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    delete?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    connect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    update?: UserWatchedUpdateWithWhereUniqueWithoutMovieInput | UserWatchedUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: UserWatchedUpdateManyWithWhereWithoutMovieInput | UserWatchedUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: UserWatchedScalarWhereInput | UserWatchedScalarWhereInput[]
  }

  export type UserWatchLaterUpdateManyWithoutMovieNestedInput = {
    create?: XOR<UserWatchLaterCreateWithoutMovieInput, UserWatchLaterUncheckedCreateWithoutMovieInput> | UserWatchLaterCreateWithoutMovieInput[] | UserWatchLaterUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: UserWatchLaterCreateOrConnectWithoutMovieInput | UserWatchLaterCreateOrConnectWithoutMovieInput[]
    upsert?: UserWatchLaterUpsertWithWhereUniqueWithoutMovieInput | UserWatchLaterUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: UserWatchLaterCreateManyMovieInputEnvelope
    set?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    disconnect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    delete?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    connect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    update?: UserWatchLaterUpdateWithWhereUniqueWithoutMovieInput | UserWatchLaterUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: UserWatchLaterUpdateManyWithWhereWithoutMovieInput | UserWatchLaterUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: UserWatchLaterScalarWhereInput | UserWatchLaterScalarWhereInput[]
  }

  export type UserWatchedUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<UserWatchedCreateWithoutMovieInput, UserWatchedUncheckedCreateWithoutMovieInput> | UserWatchedCreateWithoutMovieInput[] | UserWatchedUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: UserWatchedCreateOrConnectWithoutMovieInput | UserWatchedCreateOrConnectWithoutMovieInput[]
    upsert?: UserWatchedUpsertWithWhereUniqueWithoutMovieInput | UserWatchedUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: UserWatchedCreateManyMovieInputEnvelope
    set?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    disconnect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    delete?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    connect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    update?: UserWatchedUpdateWithWhereUniqueWithoutMovieInput | UserWatchedUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: UserWatchedUpdateManyWithWhereWithoutMovieInput | UserWatchedUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: UserWatchedScalarWhereInput | UserWatchedScalarWhereInput[]
  }

  export type UserWatchLaterUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<UserWatchLaterCreateWithoutMovieInput, UserWatchLaterUncheckedCreateWithoutMovieInput> | UserWatchLaterCreateWithoutMovieInput[] | UserWatchLaterUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: UserWatchLaterCreateOrConnectWithoutMovieInput | UserWatchLaterCreateOrConnectWithoutMovieInput[]
    upsert?: UserWatchLaterUpsertWithWhereUniqueWithoutMovieInput | UserWatchLaterUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: UserWatchLaterCreateManyMovieInputEnvelope
    set?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    disconnect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    delete?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    connect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    update?: UserWatchLaterUpdateWithWhereUniqueWithoutMovieInput | UserWatchLaterUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: UserWatchLaterUpdateManyWithWhereWithoutMovieInput | UserWatchLaterUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: UserWatchLaterScalarWhereInput | UserWatchLaterScalarWhereInput[]
  }

  export type UserWatchedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWatchedCreateWithoutUserInput, UserWatchedUncheckedCreateWithoutUserInput> | UserWatchedCreateWithoutUserInput[] | UserWatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWatchedCreateOrConnectWithoutUserInput | UserWatchedCreateOrConnectWithoutUserInput[]
    createMany?: UserWatchedCreateManyUserInputEnvelope
    connect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
  }

  export type UserWatchLaterCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWatchLaterCreateWithoutUserInput, UserWatchLaterUncheckedCreateWithoutUserInput> | UserWatchLaterCreateWithoutUserInput[] | UserWatchLaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWatchLaterCreateOrConnectWithoutUserInput | UserWatchLaterCreateOrConnectWithoutUserInput[]
    createMany?: UserWatchLaterCreateManyUserInputEnvelope
    connect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
  }

  export type UserFriendsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFriendsCreateWithoutUserInput, UserFriendsUncheckedCreateWithoutUserInput> | UserFriendsCreateWithoutUserInput[] | UserFriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFriendsCreateOrConnectWithoutUserInput | UserFriendsCreateOrConnectWithoutUserInput[]
    createMany?: UserFriendsCreateManyUserInputEnvelope
    connect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
  }

  export type UserFriendsCreateNestedManyWithoutFriendInput = {
    create?: XOR<UserFriendsCreateWithoutFriendInput, UserFriendsUncheckedCreateWithoutFriendInput> | UserFriendsCreateWithoutFriendInput[] | UserFriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: UserFriendsCreateOrConnectWithoutFriendInput | UserFriendsCreateOrConnectWithoutFriendInput[]
    createMany?: UserFriendsCreateManyFriendInputEnvelope
    connect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
  }

  export type UserWatchedUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWatchedCreateWithoutUserInput, UserWatchedUncheckedCreateWithoutUserInput> | UserWatchedCreateWithoutUserInput[] | UserWatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWatchedCreateOrConnectWithoutUserInput | UserWatchedCreateOrConnectWithoutUserInput[]
    createMany?: UserWatchedCreateManyUserInputEnvelope
    connect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
  }

  export type UserWatchLaterUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserWatchLaterCreateWithoutUserInput, UserWatchLaterUncheckedCreateWithoutUserInput> | UserWatchLaterCreateWithoutUserInput[] | UserWatchLaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWatchLaterCreateOrConnectWithoutUserInput | UserWatchLaterCreateOrConnectWithoutUserInput[]
    createMany?: UserWatchLaterCreateManyUserInputEnvelope
    connect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
  }

  export type UserFriendsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFriendsCreateWithoutUserInput, UserFriendsUncheckedCreateWithoutUserInput> | UserFriendsCreateWithoutUserInput[] | UserFriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFriendsCreateOrConnectWithoutUserInput | UserFriendsCreateOrConnectWithoutUserInput[]
    createMany?: UserFriendsCreateManyUserInputEnvelope
    connect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
  }

  export type UserFriendsUncheckedCreateNestedManyWithoutFriendInput = {
    create?: XOR<UserFriendsCreateWithoutFriendInput, UserFriendsUncheckedCreateWithoutFriendInput> | UserFriendsCreateWithoutFriendInput[] | UserFriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: UserFriendsCreateOrConnectWithoutFriendInput | UserFriendsCreateOrConnectWithoutFriendInput[]
    createMany?: UserFriendsCreateManyFriendInputEnvelope
    connect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserWatchedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWatchedCreateWithoutUserInput, UserWatchedUncheckedCreateWithoutUserInput> | UserWatchedCreateWithoutUserInput[] | UserWatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWatchedCreateOrConnectWithoutUserInput | UserWatchedCreateOrConnectWithoutUserInput[]
    upsert?: UserWatchedUpsertWithWhereUniqueWithoutUserInput | UserWatchedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWatchedCreateManyUserInputEnvelope
    set?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    disconnect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    delete?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    connect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    update?: UserWatchedUpdateWithWhereUniqueWithoutUserInput | UserWatchedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWatchedUpdateManyWithWhereWithoutUserInput | UserWatchedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWatchedScalarWhereInput | UserWatchedScalarWhereInput[]
  }

  export type UserWatchLaterUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWatchLaterCreateWithoutUserInput, UserWatchLaterUncheckedCreateWithoutUserInput> | UserWatchLaterCreateWithoutUserInput[] | UserWatchLaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWatchLaterCreateOrConnectWithoutUserInput | UserWatchLaterCreateOrConnectWithoutUserInput[]
    upsert?: UserWatchLaterUpsertWithWhereUniqueWithoutUserInput | UserWatchLaterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWatchLaterCreateManyUserInputEnvelope
    set?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    disconnect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    delete?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    connect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    update?: UserWatchLaterUpdateWithWhereUniqueWithoutUserInput | UserWatchLaterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWatchLaterUpdateManyWithWhereWithoutUserInput | UserWatchLaterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWatchLaterScalarWhereInput | UserWatchLaterScalarWhereInput[]
  }

  export type UserFriendsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFriendsCreateWithoutUserInput, UserFriendsUncheckedCreateWithoutUserInput> | UserFriendsCreateWithoutUserInput[] | UserFriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFriendsCreateOrConnectWithoutUserInput | UserFriendsCreateOrConnectWithoutUserInput[]
    upsert?: UserFriendsUpsertWithWhereUniqueWithoutUserInput | UserFriendsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFriendsCreateManyUserInputEnvelope
    set?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    disconnect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    delete?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    connect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    update?: UserFriendsUpdateWithWhereUniqueWithoutUserInput | UserFriendsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFriendsUpdateManyWithWhereWithoutUserInput | UserFriendsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFriendsScalarWhereInput | UserFriendsScalarWhereInput[]
  }

  export type UserFriendsUpdateManyWithoutFriendNestedInput = {
    create?: XOR<UserFriendsCreateWithoutFriendInput, UserFriendsUncheckedCreateWithoutFriendInput> | UserFriendsCreateWithoutFriendInput[] | UserFriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: UserFriendsCreateOrConnectWithoutFriendInput | UserFriendsCreateOrConnectWithoutFriendInput[]
    upsert?: UserFriendsUpsertWithWhereUniqueWithoutFriendInput | UserFriendsUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: UserFriendsCreateManyFriendInputEnvelope
    set?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    disconnect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    delete?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    connect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    update?: UserFriendsUpdateWithWhereUniqueWithoutFriendInput | UserFriendsUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: UserFriendsUpdateManyWithWhereWithoutFriendInput | UserFriendsUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: UserFriendsScalarWhereInput | UserFriendsScalarWhereInput[]
  }

  export type UserWatchedUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWatchedCreateWithoutUserInput, UserWatchedUncheckedCreateWithoutUserInput> | UserWatchedCreateWithoutUserInput[] | UserWatchedUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWatchedCreateOrConnectWithoutUserInput | UserWatchedCreateOrConnectWithoutUserInput[]
    upsert?: UserWatchedUpsertWithWhereUniqueWithoutUserInput | UserWatchedUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWatchedCreateManyUserInputEnvelope
    set?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    disconnect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    delete?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    connect?: UserWatchedWhereUniqueInput | UserWatchedWhereUniqueInput[]
    update?: UserWatchedUpdateWithWhereUniqueWithoutUserInput | UserWatchedUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWatchedUpdateManyWithWhereWithoutUserInput | UserWatchedUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWatchedScalarWhereInput | UserWatchedScalarWhereInput[]
  }

  export type UserWatchLaterUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserWatchLaterCreateWithoutUserInput, UserWatchLaterUncheckedCreateWithoutUserInput> | UserWatchLaterCreateWithoutUserInput[] | UserWatchLaterUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserWatchLaterCreateOrConnectWithoutUserInput | UserWatchLaterCreateOrConnectWithoutUserInput[]
    upsert?: UserWatchLaterUpsertWithWhereUniqueWithoutUserInput | UserWatchLaterUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserWatchLaterCreateManyUserInputEnvelope
    set?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    disconnect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    delete?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    connect?: UserWatchLaterWhereUniqueInput | UserWatchLaterWhereUniqueInput[]
    update?: UserWatchLaterUpdateWithWhereUniqueWithoutUserInput | UserWatchLaterUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserWatchLaterUpdateManyWithWhereWithoutUserInput | UserWatchLaterUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserWatchLaterScalarWhereInput | UserWatchLaterScalarWhereInput[]
  }

  export type UserFriendsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFriendsCreateWithoutUserInput, UserFriendsUncheckedCreateWithoutUserInput> | UserFriendsCreateWithoutUserInput[] | UserFriendsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFriendsCreateOrConnectWithoutUserInput | UserFriendsCreateOrConnectWithoutUserInput[]
    upsert?: UserFriendsUpsertWithWhereUniqueWithoutUserInput | UserFriendsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFriendsCreateManyUserInputEnvelope
    set?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    disconnect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    delete?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    connect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    update?: UserFriendsUpdateWithWhereUniqueWithoutUserInput | UserFriendsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFriendsUpdateManyWithWhereWithoutUserInput | UserFriendsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFriendsScalarWhereInput | UserFriendsScalarWhereInput[]
  }

  export type UserFriendsUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: XOR<UserFriendsCreateWithoutFriendInput, UserFriendsUncheckedCreateWithoutFriendInput> | UserFriendsCreateWithoutFriendInput[] | UserFriendsUncheckedCreateWithoutFriendInput[]
    connectOrCreate?: UserFriendsCreateOrConnectWithoutFriendInput | UserFriendsCreateOrConnectWithoutFriendInput[]
    upsert?: UserFriendsUpsertWithWhereUniqueWithoutFriendInput | UserFriendsUpsertWithWhereUniqueWithoutFriendInput[]
    createMany?: UserFriendsCreateManyFriendInputEnvelope
    set?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    disconnect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    delete?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    connect?: UserFriendsWhereUniqueInput | UserFriendsWhereUniqueInput[]
    update?: UserFriendsUpdateWithWhereUniqueWithoutFriendInput | UserFriendsUpdateWithWhereUniqueWithoutFriendInput[]
    updateMany?: UserFriendsUpdateManyWithWhereWithoutFriendInput | UserFriendsUpdateManyWithWhereWithoutFriendInput[]
    deleteMany?: UserFriendsScalarWhereInput | UserFriendsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutFriendsInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFriendOfInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendsInput
    upsert?: UserUpsertWithoutFriendsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendsInput, UserUpdateWithoutFriendsInput>, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateOneRequiredWithoutFriendOfNestedInput = {
    create?: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    connectOrCreate?: UserCreateOrConnectWithoutFriendOfInput
    upsert?: UserUpsertWithoutFriendOfInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFriendOfInput, UserUpdateWithoutFriendOfInput>, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserCreateNestedOneWithoutWatchLaterInput = {
    create?: XOR<UserCreateWithoutWatchLaterInput, UserUncheckedCreateWithoutWatchLaterInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchLaterInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutWatchLaterInput = {
    create?: XOR<MovieCreateWithoutWatchLaterInput, MovieUncheckedCreateWithoutWatchLaterInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchLaterInput
    connect?: MovieWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWatchLaterNestedInput = {
    create?: XOR<UserCreateWithoutWatchLaterInput, UserUncheckedCreateWithoutWatchLaterInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchLaterInput
    upsert?: UserUpsertWithoutWatchLaterInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchLaterInput, UserUpdateWithoutWatchLaterInput>, UserUncheckedUpdateWithoutWatchLaterInput>
  }

  export type MovieUpdateOneRequiredWithoutWatchLaterNestedInput = {
    create?: XOR<MovieCreateWithoutWatchLaterInput, MovieUncheckedCreateWithoutWatchLaterInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchLaterInput
    upsert?: MovieUpsertWithoutWatchLaterInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutWatchLaterInput, MovieUpdateWithoutWatchLaterInput>, MovieUncheckedUpdateWithoutWatchLaterInput>
  }

  export type UserCreateNestedOneWithoutWatchedInput = {
    create?: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchedInput
    connect?: UserWhereUniqueInput
  }

  export type MovieCreateNestedOneWithoutWatchedInput = {
    create?: XOR<MovieCreateWithoutWatchedInput, MovieUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchedInput
    connect?: MovieWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutWatchedNestedInput = {
    create?: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: UserCreateOrConnectWithoutWatchedInput
    upsert?: UserUpsertWithoutWatchedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWatchedInput, UserUpdateWithoutWatchedInput>, UserUncheckedUpdateWithoutWatchedInput>
  }

  export type MovieUpdateOneRequiredWithoutWatchedNestedInput = {
    create?: XOR<MovieCreateWithoutWatchedInput, MovieUncheckedCreateWithoutWatchedInput>
    connectOrCreate?: MovieCreateOrConnectWithoutWatchedInput
    upsert?: MovieUpsertWithoutWatchedInput
    connect?: MovieWhereUniqueInput
    update?: XOR<XOR<MovieUpdateToOneWithWhereWithoutWatchedInput, MovieUpdateWithoutWatchedInput>, MovieUncheckedUpdateWithoutWatchedInput>
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

  export type UserWatchedCreateWithoutMovieInput = {
    id?: string
    review?: string | null
    watchedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchedInput
  }

  export type UserWatchedUncheckedCreateWithoutMovieInput = {
    id?: string
    userId: string
    review?: string | null
    watchedAt?: Date | string
  }

  export type UserWatchedCreateOrConnectWithoutMovieInput = {
    where: UserWatchedWhereUniqueInput
    create: XOR<UserWatchedCreateWithoutMovieInput, UserWatchedUncheckedCreateWithoutMovieInput>
  }

  export type UserWatchedCreateManyMovieInputEnvelope = {
    data: UserWatchedCreateManyMovieInput | UserWatchedCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type UserWatchLaterCreateWithoutMovieInput = {
    id?: string
    addedAt?: Date | string
    user: UserCreateNestedOneWithoutWatchLaterInput
  }

  export type UserWatchLaterUncheckedCreateWithoutMovieInput = {
    id?: string
    userId: string
    addedAt?: Date | string
  }

  export type UserWatchLaterCreateOrConnectWithoutMovieInput = {
    where: UserWatchLaterWhereUniqueInput
    create: XOR<UserWatchLaterCreateWithoutMovieInput, UserWatchLaterUncheckedCreateWithoutMovieInput>
  }

  export type UserWatchLaterCreateManyMovieInputEnvelope = {
    data: UserWatchLaterCreateManyMovieInput | UserWatchLaterCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type UserWatchedUpsertWithWhereUniqueWithoutMovieInput = {
    where: UserWatchedWhereUniqueInput
    update: XOR<UserWatchedUpdateWithoutMovieInput, UserWatchedUncheckedUpdateWithoutMovieInput>
    create: XOR<UserWatchedCreateWithoutMovieInput, UserWatchedUncheckedCreateWithoutMovieInput>
  }

  export type UserWatchedUpdateWithWhereUniqueWithoutMovieInput = {
    where: UserWatchedWhereUniqueInput
    data: XOR<UserWatchedUpdateWithoutMovieInput, UserWatchedUncheckedUpdateWithoutMovieInput>
  }

  export type UserWatchedUpdateManyWithWhereWithoutMovieInput = {
    where: UserWatchedScalarWhereInput
    data: XOR<UserWatchedUpdateManyMutationInput, UserWatchedUncheckedUpdateManyWithoutMovieInput>
  }

  export type UserWatchedScalarWhereInput = {
    AND?: UserWatchedScalarWhereInput | UserWatchedScalarWhereInput[]
    OR?: UserWatchedScalarWhereInput[]
    NOT?: UserWatchedScalarWhereInput | UserWatchedScalarWhereInput[]
    id?: StringFilter<"UserWatched"> | string
    userId?: StringFilter<"UserWatched"> | string
    movieId?: StringFilter<"UserWatched"> | string
    review?: StringNullableFilter<"UserWatched"> | string | null
    watchedAt?: DateTimeFilter<"UserWatched"> | Date | string
  }

  export type UserWatchLaterUpsertWithWhereUniqueWithoutMovieInput = {
    where: UserWatchLaterWhereUniqueInput
    update: XOR<UserWatchLaterUpdateWithoutMovieInput, UserWatchLaterUncheckedUpdateWithoutMovieInput>
    create: XOR<UserWatchLaterCreateWithoutMovieInput, UserWatchLaterUncheckedCreateWithoutMovieInput>
  }

  export type UserWatchLaterUpdateWithWhereUniqueWithoutMovieInput = {
    where: UserWatchLaterWhereUniqueInput
    data: XOR<UserWatchLaterUpdateWithoutMovieInput, UserWatchLaterUncheckedUpdateWithoutMovieInput>
  }

  export type UserWatchLaterUpdateManyWithWhereWithoutMovieInput = {
    where: UserWatchLaterScalarWhereInput
    data: XOR<UserWatchLaterUpdateManyMutationInput, UserWatchLaterUncheckedUpdateManyWithoutMovieInput>
  }

  export type UserWatchLaterScalarWhereInput = {
    AND?: UserWatchLaterScalarWhereInput | UserWatchLaterScalarWhereInput[]
    OR?: UserWatchLaterScalarWhereInput[]
    NOT?: UserWatchLaterScalarWhereInput | UserWatchLaterScalarWhereInput[]
    id?: StringFilter<"UserWatchLater"> | string
    userId?: StringFilter<"UserWatchLater"> | string
    movieId?: StringFilter<"UserWatchLater"> | string
    addedAt?: DateTimeFilter<"UserWatchLater"> | Date | string
  }

  export type UserWatchedCreateWithoutUserInput = {
    id?: string
    review?: string | null
    watchedAt?: Date | string
    movie: MovieCreateNestedOneWithoutWatchedInput
  }

  export type UserWatchedUncheckedCreateWithoutUserInput = {
    id?: string
    movieId: string
    review?: string | null
    watchedAt?: Date | string
  }

  export type UserWatchedCreateOrConnectWithoutUserInput = {
    where: UserWatchedWhereUniqueInput
    create: XOR<UserWatchedCreateWithoutUserInput, UserWatchedUncheckedCreateWithoutUserInput>
  }

  export type UserWatchedCreateManyUserInputEnvelope = {
    data: UserWatchedCreateManyUserInput | UserWatchedCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserWatchLaterCreateWithoutUserInput = {
    id?: string
    addedAt?: Date | string
    movie: MovieCreateNestedOneWithoutWatchLaterInput
  }

  export type UserWatchLaterUncheckedCreateWithoutUserInput = {
    id?: string
    movieId: string
    addedAt?: Date | string
  }

  export type UserWatchLaterCreateOrConnectWithoutUserInput = {
    where: UserWatchLaterWhereUniqueInput
    create: XOR<UserWatchLaterCreateWithoutUserInput, UserWatchLaterUncheckedCreateWithoutUserInput>
  }

  export type UserWatchLaterCreateManyUserInputEnvelope = {
    data: UserWatchLaterCreateManyUserInput | UserWatchLaterCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFriendsCreateWithoutUserInput = {
    id?: string
    status?: string
    friend: UserCreateNestedOneWithoutFriendOfInput
  }

  export type UserFriendsUncheckedCreateWithoutUserInput = {
    id?: string
    friendId: string
    status?: string
  }

  export type UserFriendsCreateOrConnectWithoutUserInput = {
    where: UserFriendsWhereUniqueInput
    create: XOR<UserFriendsCreateWithoutUserInput, UserFriendsUncheckedCreateWithoutUserInput>
  }

  export type UserFriendsCreateManyUserInputEnvelope = {
    data: UserFriendsCreateManyUserInput | UserFriendsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserFriendsCreateWithoutFriendInput = {
    id?: string
    status?: string
    user: UserCreateNestedOneWithoutFriendsInput
  }

  export type UserFriendsUncheckedCreateWithoutFriendInput = {
    id?: string
    userId: string
    status?: string
  }

  export type UserFriendsCreateOrConnectWithoutFriendInput = {
    where: UserFriendsWhereUniqueInput
    create: XOR<UserFriendsCreateWithoutFriendInput, UserFriendsUncheckedCreateWithoutFriendInput>
  }

  export type UserFriendsCreateManyFriendInputEnvelope = {
    data: UserFriendsCreateManyFriendInput | UserFriendsCreateManyFriendInput[]
    skipDuplicates?: boolean
  }

  export type UserWatchedUpsertWithWhereUniqueWithoutUserInput = {
    where: UserWatchedWhereUniqueInput
    update: XOR<UserWatchedUpdateWithoutUserInput, UserWatchedUncheckedUpdateWithoutUserInput>
    create: XOR<UserWatchedCreateWithoutUserInput, UserWatchedUncheckedCreateWithoutUserInput>
  }

  export type UserWatchedUpdateWithWhereUniqueWithoutUserInput = {
    where: UserWatchedWhereUniqueInput
    data: XOR<UserWatchedUpdateWithoutUserInput, UserWatchedUncheckedUpdateWithoutUserInput>
  }

  export type UserWatchedUpdateManyWithWhereWithoutUserInput = {
    where: UserWatchedScalarWhereInput
    data: XOR<UserWatchedUpdateManyMutationInput, UserWatchedUncheckedUpdateManyWithoutUserInput>
  }

  export type UserWatchLaterUpsertWithWhereUniqueWithoutUserInput = {
    where: UserWatchLaterWhereUniqueInput
    update: XOR<UserWatchLaterUpdateWithoutUserInput, UserWatchLaterUncheckedUpdateWithoutUserInput>
    create: XOR<UserWatchLaterCreateWithoutUserInput, UserWatchLaterUncheckedCreateWithoutUserInput>
  }

  export type UserWatchLaterUpdateWithWhereUniqueWithoutUserInput = {
    where: UserWatchLaterWhereUniqueInput
    data: XOR<UserWatchLaterUpdateWithoutUserInput, UserWatchLaterUncheckedUpdateWithoutUserInput>
  }

  export type UserWatchLaterUpdateManyWithWhereWithoutUserInput = {
    where: UserWatchLaterScalarWhereInput
    data: XOR<UserWatchLaterUpdateManyMutationInput, UserWatchLaterUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFriendsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFriendsWhereUniqueInput
    update: XOR<UserFriendsUpdateWithoutUserInput, UserFriendsUncheckedUpdateWithoutUserInput>
    create: XOR<UserFriendsCreateWithoutUserInput, UserFriendsUncheckedCreateWithoutUserInput>
  }

  export type UserFriendsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFriendsWhereUniqueInput
    data: XOR<UserFriendsUpdateWithoutUserInput, UserFriendsUncheckedUpdateWithoutUserInput>
  }

  export type UserFriendsUpdateManyWithWhereWithoutUserInput = {
    where: UserFriendsScalarWhereInput
    data: XOR<UserFriendsUpdateManyMutationInput, UserFriendsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFriendsScalarWhereInput = {
    AND?: UserFriendsScalarWhereInput | UserFriendsScalarWhereInput[]
    OR?: UserFriendsScalarWhereInput[]
    NOT?: UserFriendsScalarWhereInput | UserFriendsScalarWhereInput[]
    id?: StringFilter<"UserFriends"> | string
    userId?: StringFilter<"UserFriends"> | string
    friendId?: StringFilter<"UserFriends"> | string
    status?: StringFilter<"UserFriends"> | string
  }

  export type UserFriendsUpsertWithWhereUniqueWithoutFriendInput = {
    where: UserFriendsWhereUniqueInput
    update: XOR<UserFriendsUpdateWithoutFriendInput, UserFriendsUncheckedUpdateWithoutFriendInput>
    create: XOR<UserFriendsCreateWithoutFriendInput, UserFriendsUncheckedCreateWithoutFriendInput>
  }

  export type UserFriendsUpdateWithWhereUniqueWithoutFriendInput = {
    where: UserFriendsWhereUniqueInput
    data: XOR<UserFriendsUpdateWithoutFriendInput, UserFriendsUncheckedUpdateWithoutFriendInput>
  }

  export type UserFriendsUpdateManyWithWhereWithoutFriendInput = {
    where: UserFriendsScalarWhereInput
    data: XOR<UserFriendsUpdateManyMutationInput, UserFriendsUncheckedUpdateManyWithoutFriendInput>
  }

  export type UserCreateWithoutFriendsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watched?: UserWatchedCreateNestedManyWithoutUserInput
    watchLater?: UserWatchLaterCreateNestedManyWithoutUserInput
    friendOf?: UserFriendsCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutFriendsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watched?: UserWatchedUncheckedCreateNestedManyWithoutUserInput
    watchLater?: UserWatchLaterUncheckedCreateNestedManyWithoutUserInput
    friendOf?: UserFriendsUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutFriendsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
  }

  export type UserCreateWithoutFriendOfInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watched?: UserWatchedCreateNestedManyWithoutUserInput
    watchLater?: UserWatchLaterCreateNestedManyWithoutUserInput
    friends?: UserFriendsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFriendOfInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watched?: UserWatchedUncheckedCreateNestedManyWithoutUserInput
    watchLater?: UserWatchLaterUncheckedCreateNestedManyWithoutUserInput
    friends?: UserFriendsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFriendOfInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
  }

  export type UserUpsertWithoutFriendsInput = {
    update: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
    create: XOR<UserCreateWithoutFriendsInput, UserUncheckedCreateWithoutFriendsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendsInput, UserUncheckedUpdateWithoutFriendsInput>
  }

  export type UserUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watched?: UserWatchedUpdateManyWithoutUserNestedInput
    watchLater?: UserWatchLaterUpdateManyWithoutUserNestedInput
    friendOf?: UserFriendsUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watched?: UserWatchedUncheckedUpdateManyWithoutUserNestedInput
    watchLater?: UserWatchLaterUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: UserFriendsUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type UserUpsertWithoutFriendOfInput = {
    update: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
    create: XOR<UserCreateWithoutFriendOfInput, UserUncheckedCreateWithoutFriendOfInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFriendOfInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFriendOfInput, UserUncheckedUpdateWithoutFriendOfInput>
  }

  export type UserUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watched?: UserWatchedUpdateManyWithoutUserNestedInput
    watchLater?: UserWatchLaterUpdateManyWithoutUserNestedInput
    friends?: UserFriendsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFriendOfInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watched?: UserWatchedUncheckedUpdateManyWithoutUserNestedInput
    watchLater?: UserWatchLaterUncheckedUpdateManyWithoutUserNestedInput
    friends?: UserFriendsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWatchLaterInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watched?: UserWatchedCreateNestedManyWithoutUserInput
    friends?: UserFriendsCreateNestedManyWithoutUserInput
    friendOf?: UserFriendsCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutWatchLaterInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watched?: UserWatchedUncheckedCreateNestedManyWithoutUserInput
    friends?: UserFriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: UserFriendsUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutWatchLaterInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchLaterInput, UserUncheckedCreateWithoutWatchLaterInput>
  }

  export type MovieCreateWithoutWatchLaterInput = {
    id?: string
    tmdbId: string
    watched?: UserWatchedCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutWatchLaterInput = {
    id?: string
    tmdbId: string
    watched?: UserWatchedUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutWatchLaterInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutWatchLaterInput, MovieUncheckedCreateWithoutWatchLaterInput>
  }

  export type UserUpsertWithoutWatchLaterInput = {
    update: XOR<UserUpdateWithoutWatchLaterInput, UserUncheckedUpdateWithoutWatchLaterInput>
    create: XOR<UserCreateWithoutWatchLaterInput, UserUncheckedCreateWithoutWatchLaterInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchLaterInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchLaterInput, UserUncheckedUpdateWithoutWatchLaterInput>
  }

  export type UserUpdateWithoutWatchLaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watched?: UserWatchedUpdateManyWithoutUserNestedInput
    friends?: UserFriendsUpdateManyWithoutUserNestedInput
    friendOf?: UserFriendsUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchLaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watched?: UserWatchedUncheckedUpdateManyWithoutUserNestedInput
    friends?: UserFriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: UserFriendsUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type MovieUpsertWithoutWatchLaterInput = {
    update: XOR<MovieUpdateWithoutWatchLaterInput, MovieUncheckedUpdateWithoutWatchLaterInput>
    create: XOR<MovieCreateWithoutWatchLaterInput, MovieUncheckedCreateWithoutWatchLaterInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutWatchLaterInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutWatchLaterInput, MovieUncheckedUpdateWithoutWatchLaterInput>
  }

  export type MovieUpdateWithoutWatchLaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: StringFieldUpdateOperationsInput | string
    watched?: UserWatchedUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutWatchLaterInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: StringFieldUpdateOperationsInput | string
    watched?: UserWatchedUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserCreateWithoutWatchedInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchLater?: UserWatchLaterCreateNestedManyWithoutUserInput
    friends?: UserFriendsCreateNestedManyWithoutUserInput
    friendOf?: UserFriendsCreateNestedManyWithoutFriendInput
  }

  export type UserUncheckedCreateWithoutWatchedInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    watchLater?: UserWatchLaterUncheckedCreateNestedManyWithoutUserInput
    friends?: UserFriendsUncheckedCreateNestedManyWithoutUserInput
    friendOf?: UserFriendsUncheckedCreateNestedManyWithoutFriendInput
  }

  export type UserCreateOrConnectWithoutWatchedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
  }

  export type MovieCreateWithoutWatchedInput = {
    id?: string
    tmdbId: string
    watchLater?: UserWatchLaterCreateNestedManyWithoutMovieInput
  }

  export type MovieUncheckedCreateWithoutWatchedInput = {
    id?: string
    tmdbId: string
    watchLater?: UserWatchLaterUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MovieCreateOrConnectWithoutWatchedInput = {
    where: MovieWhereUniqueInput
    create: XOR<MovieCreateWithoutWatchedInput, MovieUncheckedCreateWithoutWatchedInput>
  }

  export type UserUpsertWithoutWatchedInput = {
    update: XOR<UserUpdateWithoutWatchedInput, UserUncheckedUpdateWithoutWatchedInput>
    create: XOR<UserCreateWithoutWatchedInput, UserUncheckedCreateWithoutWatchedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWatchedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWatchedInput, UserUncheckedUpdateWithoutWatchedInput>
  }

  export type UserUpdateWithoutWatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchLater?: UserWatchLaterUpdateManyWithoutUserNestedInput
    friends?: UserFriendsUpdateManyWithoutUserNestedInput
    friendOf?: UserFriendsUpdateManyWithoutFriendNestedInput
  }

  export type UserUncheckedUpdateWithoutWatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    watchLater?: UserWatchLaterUncheckedUpdateManyWithoutUserNestedInput
    friends?: UserFriendsUncheckedUpdateManyWithoutUserNestedInput
    friendOf?: UserFriendsUncheckedUpdateManyWithoutFriendNestedInput
  }

  export type MovieUpsertWithoutWatchedInput = {
    update: XOR<MovieUpdateWithoutWatchedInput, MovieUncheckedUpdateWithoutWatchedInput>
    create: XOR<MovieCreateWithoutWatchedInput, MovieUncheckedCreateWithoutWatchedInput>
    where?: MovieWhereInput
  }

  export type MovieUpdateToOneWithWhereWithoutWatchedInput = {
    where?: MovieWhereInput
    data: XOR<MovieUpdateWithoutWatchedInput, MovieUncheckedUpdateWithoutWatchedInput>
  }

  export type MovieUpdateWithoutWatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: StringFieldUpdateOperationsInput | string
    watchLater?: UserWatchLaterUpdateManyWithoutMovieNestedInput
  }

  export type MovieUncheckedUpdateWithoutWatchedInput = {
    id?: StringFieldUpdateOperationsInput | string
    tmdbId?: StringFieldUpdateOperationsInput | string
    watchLater?: UserWatchLaterUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type UserWatchedCreateManyMovieInput = {
    id?: string
    userId: string
    review?: string | null
    watchedAt?: Date | string
  }

  export type UserWatchLaterCreateManyMovieInput = {
    id?: string
    userId: string
    addedAt?: Date | string
  }

  export type UserWatchedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type UserWatchedUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchedUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchLaterUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWatchLaterNestedInput
  }

  export type UserWatchLaterUncheckedUpdateWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchLaterUncheckedUpdateManyWithoutMovieInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchedCreateManyUserInput = {
    id?: string
    movieId: string
    review?: string | null
    watchedAt?: Date | string
  }

  export type UserWatchLaterCreateManyUserInput = {
    id?: string
    movieId: string
    addedAt?: Date | string
  }

  export type UserFriendsCreateManyUserInput = {
    id?: string
    friendId: string
    status?: string
  }

  export type UserFriendsCreateManyFriendInput = {
    id?: string
    userId: string
    status?: string
  }

  export type UserWatchedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutWatchedNestedInput
  }

  export type UserWatchedUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchedUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    review?: NullableStringFieldUpdateOperationsInput | string | null
    watchedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchLaterUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movie?: MovieUpdateOneRequiredWithoutWatchLaterNestedInput
  }

  export type UserWatchLaterUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserWatchLaterUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    movieId?: StringFieldUpdateOperationsInput | string
    addedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFriendsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    friend?: UserUpdateOneRequiredWithoutFriendOfNestedInput
  }

  export type UserFriendsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserFriendsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    friendId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserFriendsUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    user?: UserUpdateOneRequiredWithoutFriendsNestedInput
  }

  export type UserFriendsUncheckedUpdateWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserFriendsUncheckedUpdateManyWithoutFriendInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
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