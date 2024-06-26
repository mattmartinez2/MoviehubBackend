
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
 * Model Movies
 * 
 */
export type Movies = $Result.DefaultSelection<Prisma.$MoviesPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model MovieGenre
 * 
 */
export type MovieGenre = $Result.DefaultSelection<Prisma.$MovieGenrePayload>
/**
 * Model LikeMovies
 * 
 */
export type LikeMovies = $Result.DefaultSelection<Prisma.$LikeMoviesPayload>
/**
 * Model Actors
 * 
 */
export type Actors = $Result.DefaultSelection<Prisma.$ActorsPayload>

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
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

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
   * `prisma.movies`: Exposes CRUD operations for the **Movies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movies
    * const movies = await prisma.movies.findMany()
    * ```
    */
  get movies(): Prisma.MoviesDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs>;

  /**
   * `prisma.movieGenre`: Exposes CRUD operations for the **MovieGenre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MovieGenres
    * const movieGenres = await prisma.movieGenre.findMany()
    * ```
    */
  get movieGenre(): Prisma.MovieGenreDelegate<ExtArgs>;

  /**
   * `prisma.likeMovies`: Exposes CRUD operations for the **LikeMovies** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LikeMovies
    * const likeMovies = await prisma.likeMovies.findMany()
    * ```
    */
  get likeMovies(): Prisma.LikeMoviesDelegate<ExtArgs>;

  /**
   * `prisma.actors`: Exposes CRUD operations for the **Actors** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Actors
    * const actors = await prisma.actors.findMany()
    * ```
    */
  get actors(): Prisma.ActorsDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.13.0
   * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Movies: 'Movies',
    Genre: 'Genre',
    MovieGenre: 'MovieGenre',
    LikeMovies: 'LikeMovies',
    Actors: 'Actors'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'movies' | 'genre' | 'movieGenre' | 'likeMovies' | 'actors'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Movies: {
        payload: Prisma.$MoviesPayload<ExtArgs>
        fields: Prisma.MoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MoviesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MoviesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findFirst: {
            args: Prisma.MoviesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MoviesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          findMany: {
            args: Prisma.MoviesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>[]
          }
          create: {
            args: Prisma.MoviesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          createMany: {
            args: Prisma.MoviesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MoviesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          update: {
            args: Prisma.MoviesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          deleteMany: {
            args: Prisma.MoviesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MoviesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MoviesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MoviesPayload>
          }
          aggregate: {
            args: Prisma.MoviesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovies>
          }
          groupBy: {
            args: Prisma.MoviesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.MoviesCountArgs<ExtArgs>,
            result: $Utils.Optional<MoviesCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>,
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      MovieGenre: {
        payload: Prisma.$MovieGenrePayload<ExtArgs>
        fields: Prisma.MovieGenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovieGenreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovieGenreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          findFirst: {
            args: Prisma.MovieGenreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovieGenreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          findMany: {
            args: Prisma.MovieGenreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>[]
          }
          create: {
            args: Prisma.MovieGenreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          createMany: {
            args: Prisma.MovieGenreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MovieGenreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          update: {
            args: Prisma.MovieGenreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          deleteMany: {
            args: Prisma.MovieGenreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MovieGenreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MovieGenreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MovieGenrePayload>
          }
          aggregate: {
            args: Prisma.MovieGenreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMovieGenre>
          }
          groupBy: {
            args: Prisma.MovieGenreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MovieGenreGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovieGenreCountArgs<ExtArgs>,
            result: $Utils.Optional<MovieGenreCountAggregateOutputType> | number
          }
        }
      }
      LikeMovies: {
        payload: Prisma.$LikeMoviesPayload<ExtArgs>
        fields: Prisma.LikeMoviesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LikeMoviesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LikeMoviesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload>
          }
          findFirst: {
            args: Prisma.LikeMoviesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LikeMoviesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload>
          }
          findMany: {
            args: Prisma.LikeMoviesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload>[]
          }
          create: {
            args: Prisma.LikeMoviesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload>
          }
          createMany: {
            args: Prisma.LikeMoviesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.LikeMoviesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload>
          }
          update: {
            args: Prisma.LikeMoviesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload>
          }
          deleteMany: {
            args: Prisma.LikeMoviesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.LikeMoviesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.LikeMoviesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$LikeMoviesPayload>
          }
          aggregate: {
            args: Prisma.LikeMoviesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateLikeMovies>
          }
          groupBy: {
            args: Prisma.LikeMoviesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<LikeMoviesGroupByOutputType>[]
          }
          count: {
            args: Prisma.LikeMoviesCountArgs<ExtArgs>,
            result: $Utils.Optional<LikeMoviesCountAggregateOutputType> | number
          }
        }
      }
      Actors: {
        payload: Prisma.$ActorsPayload<ExtArgs>
        fields: Prisma.ActorsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ActorsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ActorsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          findFirst: {
            args: Prisma.ActorsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ActorsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          findMany: {
            args: Prisma.ActorsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>[]
          }
          create: {
            args: Prisma.ActorsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          createMany: {
            args: Prisma.ActorsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ActorsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          update: {
            args: Prisma.ActorsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          deleteMany: {
            args: Prisma.ActorsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ActorsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ActorsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ActorsPayload>
          }
          aggregate: {
            args: Prisma.ActorsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateActors>
          }
          groupBy: {
            args: Prisma.ActorsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ActorsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ActorsCountArgs<ExtArgs>,
            result: $Utils.Optional<ActorsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.DriverAdapter | null
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
    movies: number
    likedBy: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | UserCountOutputTypeCountMoviesArgs
    likedBy?: boolean | UserCountOutputTypeCountLikedByArgs
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
  export type UserCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeMoviesWhereInput
  }


  /**
   * Count Type MoviesCountOutputType
   */

  export type MoviesCountOutputType = {
    genres: number
    actors: number
    likedBy: number
  }

  export type MoviesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    genres?: boolean | MoviesCountOutputTypeCountGenresArgs
    actors?: boolean | MoviesCountOutputTypeCountActorsArgs
    likedBy?: boolean | MoviesCountOutputTypeCountLikedByArgs
  }

  // Custom InputTypes
  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MoviesCountOutputType
     */
    select?: MoviesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountGenresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenreWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountActorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorsWhereInput
  }

  /**
   * MoviesCountOutputType without action
   */
  export type MoviesCountOutputTypeCountLikedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeMoviesWhereInput
  }


  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    movies: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | GenreCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenreWhereInput
  }


  /**
   * Count Type ActorsCountOutputType
   */

  export type ActorsCountOutputType = {
    movies: number
  }

  export type ActorsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | ActorsCountOutputTypeCountMoviesArgs
  }

  // Custom InputTypes
  /**
   * ActorsCountOutputType without action
   */
  export type ActorsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ActorsCountOutputType
     */
    select?: ActorsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ActorsCountOutputType without action
   */
  export type ActorsCountOutputTypeCountMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
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
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    password: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createAt?: true
    updateAt?: true
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
    id: number
    name: string
    email: string
    password: string
    createAt: Date
    updateAt: Date
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
    name?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
    movies?: boolean | User$moviesArgs<ExtArgs>
    likedBy?: boolean | User$likedByArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | User$moviesArgs<ExtArgs>
    likedBy?: boolean | User$likedByArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>[]
      likedBy: Prisma.$LikeMoviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      password: string
      createAt: Date
      updateAt: Date
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
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movies<T extends User$moviesArgs<ExtArgs> = {}>(args?: Subset<T, User$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    likedBy<T extends User$likedByArgs<ExtArgs> = {}>(args?: Subset<T, User$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createAt: FieldRef<"User", 'DateTime'>
    readonly updateAt: FieldRef<"User", 'DateTime'>
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
   * User.movies
   */
  export type User$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    cursor?: MoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * User.likedBy
   */
  export type User$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    where?: LikeMoviesWhereInput
    orderBy?: LikeMoviesOrderByWithRelationInput | LikeMoviesOrderByWithRelationInput[]
    cursor?: LikeMoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeMoviesScalarFieldEnum | LikeMoviesScalarFieldEnum[]
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
   * Model Movies
   */

  export type AggregateMovies = {
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  export type MoviesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MoviesSumAggregateOutputType = {
    id: number | null
    userId: number | null
  }

  export type MoviesMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    sinopsis: string | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type MoviesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
    sinopsis: string | null
    createAt: Date | null
    updateAt: Date | null
    userId: number | null
  }

  export type MoviesCountAggregateOutputType = {
    id: number
    name: number
    image: number
    sinopsis: number
    createAt: number
    updateAt: number
    userId: number
    _all: number
  }


  export type MoviesAvgAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MoviesSumAggregateInputType = {
    id?: true
    userId?: true
  }

  export type MoviesMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
    sinopsis?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type MoviesMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
    sinopsis?: true
    createAt?: true
    updateAt?: true
    userId?: true
  }

  export type MoviesCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    sinopsis?: true
    createAt?: true
    updateAt?: true
    userId?: true
    _all?: true
  }

  export type MoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to aggregate.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MoviesWhereUniqueInput
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
    _count?: true | MoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MoviesMaxAggregateInputType
  }

  export type GetMoviesAggregateType<T extends MoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovies[P]>
      : GetScalarType<T[P], AggregateMovies[P]>
  }




  export type MoviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithAggregationInput | MoviesOrderByWithAggregationInput[]
    by: MoviesScalarFieldEnum[] | MoviesScalarFieldEnum
    having?: MoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MoviesCountAggregateInputType | true
    _avg?: MoviesAvgAggregateInputType
    _sum?: MoviesSumAggregateInputType
    _min?: MoviesMinAggregateInputType
    _max?: MoviesMaxAggregateInputType
  }

  export type MoviesGroupByOutputType = {
    id: number
    name: string
    image: string
    sinopsis: string
    createAt: Date
    updateAt: Date
    userId: number
    _count: MoviesCountAggregateOutputType | null
    _avg: MoviesAvgAggregateOutputType | null
    _sum: MoviesSumAggregateOutputType | null
    _min: MoviesMinAggregateOutputType | null
    _max: MoviesMaxAggregateOutputType | null
  }

  type GetMoviesGroupByPayload<T extends MoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MoviesGroupByOutputType[P]>
            : GetScalarType<T[P], MoviesGroupByOutputType[P]>
        }
      >
    >


  export type MoviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    sinopsis?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    genres?: boolean | Movies$genresArgs<ExtArgs>
    actors?: boolean | Movies$actorsArgs<ExtArgs>
    likedBy?: boolean | Movies$likedByArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movies"]>

  export type MoviesSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
    sinopsis?: boolean
    createAt?: boolean
    updateAt?: boolean
    userId?: boolean
  }


  export type MoviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    genres?: boolean | Movies$genresArgs<ExtArgs>
    actors?: boolean | Movies$actorsArgs<ExtArgs>
    likedBy?: boolean | Movies$likedByArgs<ExtArgs>
    _count?: boolean | MoviesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $MoviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movies"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      genres: Prisma.$MovieGenrePayload<ExtArgs>[]
      actors: Prisma.$ActorsPayload<ExtArgs>[]
      likedBy: Prisma.$LikeMoviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
      sinopsis: string
      createAt: Date
      updateAt: Date
      userId: number
    }, ExtArgs["result"]["movies"]>
    composites: {}
  }


  type MoviesGetPayload<S extends boolean | null | undefined | MoviesDefaultArgs> = $Result.GetResult<Prisma.$MoviesPayload, S>

  type MoviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MoviesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MoviesCountAggregateInputType | true
    }

  export interface MoviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movies'], meta: { name: 'Movies' } }
    /**
     * Find zero or one Movies that matches the filter.
     * @param {MoviesFindUniqueArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MoviesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesFindUniqueArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Movies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MoviesFindUniqueOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MoviesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MoviesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindFirstArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Movies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindFirstOrThrowArgs} args - Arguments to find a Movies
     * @example
     * // Get one Movies
     * const movies = await prisma.movies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MoviesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Movies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movies
     * const movies = await prisma.movies.findMany()
     * 
     * // Get first 10 Movies
     * const movies = await prisma.movies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const moviesWithIdOnly = await prisma.movies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MoviesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Movies.
     * @param {MoviesCreateArgs} args - Arguments to create a Movies.
     * @example
     * // Create one Movies
     * const Movies = await prisma.movies.create({
     *   data: {
     *     // ... data to create a Movies
     *   }
     * })
     * 
    **/
    create<T extends MoviesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesCreateArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Movies.
     *     @param {MoviesCreateManyArgs} args - Arguments to create many Movies.
     *     @example
     *     // Create many Movies
     *     const movies = await prisma.movies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MoviesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Movies.
     * @param {MoviesDeleteArgs} args - Arguments to delete one Movies.
     * @example
     * // Delete one Movies
     * const Movies = await prisma.movies.delete({
     *   where: {
     *     // ... filter to delete one Movies
     *   }
     * })
     * 
    **/
    delete<T extends MoviesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesDeleteArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Movies.
     * @param {MoviesUpdateArgs} args - Arguments to update one Movies.
     * @example
     * // Update one Movies
     * const movies = await prisma.movies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MoviesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpdateArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Movies.
     * @param {MoviesDeleteManyArgs} args - Arguments to filter Movies to delete.
     * @example
     * // Delete a few Movies
     * const { count } = await prisma.movies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MoviesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MoviesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movies
     * const movies = await prisma.movies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MoviesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movies.
     * @param {MoviesUpsertArgs} args - Arguments to update or create a Movies.
     * @example
     * // Update or create a Movies
     * const movies = await prisma.movies.upsert({
     *   create: {
     *     // ... data to create a Movies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movies we want to update
     *   }
     * })
    **/
    upsert<T extends MoviesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MoviesUpsertArgs<ExtArgs>>
    ): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesCountArgs} args - Arguments to filter Movies to count.
     * @example
     * // Count the number of Movies
     * const count = await prisma.movies.count({
     *   where: {
     *     // ... the filter for the Movies we want to count
     *   }
     * })
    **/
    count<T extends MoviesCountArgs>(
      args?: Subset<T, MoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MoviesAggregateArgs>(args: Subset<T, MoviesAggregateArgs>): Prisma.PrismaPromise<GetMoviesAggregateType<T>>

    /**
     * Group by Movies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MoviesGroupByArgs} args - Group by arguments.
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
      T extends MoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MoviesGroupByArgs['orderBy'] }
        : { orderBy?: MoviesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movies model
   */
  readonly fields: MoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MoviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    genres<T extends Movies$genresArgs<ExtArgs> = {}>(args?: Subset<T, Movies$genresArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'findMany'> | Null>;

    actors<T extends Movies$actorsArgs<ExtArgs> = {}>(args?: Subset<T, Movies$actorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'findMany'> | Null>;

    likedBy<T extends Movies$likedByArgs<ExtArgs> = {}>(args?: Subset<T, Movies$likedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Movies model
   */ 
  interface MoviesFieldRefs {
    readonly id: FieldRef<"Movies", 'Int'>
    readonly name: FieldRef<"Movies", 'String'>
    readonly image: FieldRef<"Movies", 'String'>
    readonly sinopsis: FieldRef<"Movies", 'String'>
    readonly createAt: FieldRef<"Movies", 'DateTime'>
    readonly updateAt: FieldRef<"Movies", 'DateTime'>
    readonly userId: FieldRef<"Movies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Movies findUnique
   */
  export type MoviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findUniqueOrThrow
   */
  export type MoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies findFirst
   */
  export type MoviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
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
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findFirstOrThrow
   */
  export type MoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movies.
     */
    cursor?: MoviesWhereUniqueInput
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
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies findMany
   */
  export type MoviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter, which Movies to fetch.
     */
    where?: MoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movies to fetch.
     */
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movies.
     */
    cursor?: MoviesWhereUniqueInput
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
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Movies create
   */
  export type MoviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a Movies.
     */
    data: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
  }

  /**
   * Movies createMany
   */
  export type MoviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movies.
     */
    data: MoviesCreateManyInput | MoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Movies update
   */
  export type MoviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a Movies.
     */
    data: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
    /**
     * Choose, which Movies to update.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies updateMany
   */
  export type MoviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movies.
     */
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyInput>
    /**
     * Filter which Movies to update
     */
    where?: MoviesWhereInput
  }

  /**
   * Movies upsert
   */
  export type MoviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the Movies to update in case it exists.
     */
    where: MoviesWhereUniqueInput
    /**
     * In case the Movies found by the `where` argument doesn't exist, create a new Movies with this data.
     */
    create: XOR<MoviesCreateInput, MoviesUncheckedCreateInput>
    /**
     * In case the Movies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MoviesUpdateInput, MoviesUncheckedUpdateInput>
  }

  /**
   * Movies delete
   */
  export type MoviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    /**
     * Filter which Movies to delete.
     */
    where: MoviesWhereUniqueInput
  }

  /**
   * Movies deleteMany
   */
  export type MoviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movies to delete
     */
    where?: MoviesWhereInput
  }

  /**
   * Movies.genres
   */
  export type Movies$genresArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    where?: MovieGenreWhereInput
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    cursor?: MovieGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * Movies.actors
   */
  export type Movies$actorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    where?: ActorsWhereInput
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    cursor?: ActorsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ActorsScalarFieldEnum | ActorsScalarFieldEnum[]
  }

  /**
   * Movies.likedBy
   */
  export type Movies$likedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    where?: LikeMoviesWhereInput
    orderBy?: LikeMoviesOrderByWithRelationInput | LikeMoviesOrderByWithRelationInput[]
    cursor?: LikeMoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LikeMoviesScalarFieldEnum | LikeMoviesScalarFieldEnum[]
  }

  /**
   * Movies without action
   */
  export type MoviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
  }


  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreAvgAggregateOutputType = {
    id: number | null
  }

  export type GenreSumAggregateOutputType = {
    id: number | null
  }

  export type GenreMinAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type GenreMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createAt: Date | null
    updateAt: Date | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updateAt: number
    _all: number
  }


  export type GenreAvgAggregateInputType = {
    id?: true
  }

  export type GenreSumAggregateInputType = {
    id?: true
  }

  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updateAt?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _avg?: GenreAvgAggregateInputType
    _sum?: GenreSumAggregateInputType
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: number
    name: string
    createAt: Date
    updateAt: Date
    _count: GenreCountAggregateOutputType | null
    _avg: GenreAvgAggregateOutputType | null
    _sum: GenreSumAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
    movies?: boolean | Genre$moviesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
    createAt?: boolean
    updateAt?: boolean
  }


  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Genre$moviesArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      movies: Prisma.$MovieGenrePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createAt: Date
      updateAt: Date
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }


  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreCreateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
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
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movies<T extends Genre$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Genre$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'Int'>
    readonly name: FieldRef<"Genre", 'String'>
    readonly createAt: FieldRef<"Genre", 'DateTime'>
    readonly updateAt: FieldRef<"Genre", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }

  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }

  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }

  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }

  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }

  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }

  /**
   * Genre.movies
   */
  export type Genre$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    where?: MovieGenreWhereInput
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    cursor?: MovieGenreWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GenreInclude<ExtArgs> | null
  }


  /**
   * Model MovieGenre
   */

  export type AggregateMovieGenre = {
    _count: MovieGenreCountAggregateOutputType | null
    _avg: MovieGenreAvgAggregateOutputType | null
    _sum: MovieGenreSumAggregateOutputType | null
    _min: MovieGenreMinAggregateOutputType | null
    _max: MovieGenreMaxAggregateOutputType | null
  }

  export type MovieGenreAvgAggregateOutputType = {
    movieId: number | null
    genreId: number | null
  }

  export type MovieGenreSumAggregateOutputType = {
    movieId: number | null
    genreId: number | null
  }

  export type MovieGenreMinAggregateOutputType = {
    movieId: number | null
    genreId: number | null
  }

  export type MovieGenreMaxAggregateOutputType = {
    movieId: number | null
    genreId: number | null
  }

  export type MovieGenreCountAggregateOutputType = {
    movieId: number
    genreId: number
    _all: number
  }


  export type MovieGenreAvgAggregateInputType = {
    movieId?: true
    genreId?: true
  }

  export type MovieGenreSumAggregateInputType = {
    movieId?: true
    genreId?: true
  }

  export type MovieGenreMinAggregateInputType = {
    movieId?: true
    genreId?: true
  }

  export type MovieGenreMaxAggregateInputType = {
    movieId?: true
    genreId?: true
  }

  export type MovieGenreCountAggregateInputType = {
    movieId?: true
    genreId?: true
    _all?: true
  }

  export type MovieGenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieGenre to aggregate.
     */
    where?: MovieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MovieGenres
    **/
    _count?: true | MovieGenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovieGenreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovieGenreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovieGenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovieGenreMaxAggregateInputType
  }

  export type GetMovieGenreAggregateType<T extends MovieGenreAggregateArgs> = {
        [P in keyof T & keyof AggregateMovieGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovieGenre[P]>
      : GetScalarType<T[P], AggregateMovieGenre[P]>
  }




  export type MovieGenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovieGenreWhereInput
    orderBy?: MovieGenreOrderByWithAggregationInput | MovieGenreOrderByWithAggregationInput[]
    by: MovieGenreScalarFieldEnum[] | MovieGenreScalarFieldEnum
    having?: MovieGenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovieGenreCountAggregateInputType | true
    _avg?: MovieGenreAvgAggregateInputType
    _sum?: MovieGenreSumAggregateInputType
    _min?: MovieGenreMinAggregateInputType
    _max?: MovieGenreMaxAggregateInputType
  }

  export type MovieGenreGroupByOutputType = {
    movieId: number
    genreId: number
    _count: MovieGenreCountAggregateOutputType | null
    _avg: MovieGenreAvgAggregateOutputType | null
    _sum: MovieGenreSumAggregateOutputType | null
    _min: MovieGenreMinAggregateOutputType | null
    _max: MovieGenreMaxAggregateOutputType | null
  }

  type GetMovieGenreGroupByPayload<T extends MovieGenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovieGenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovieGenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovieGenreGroupByOutputType[P]>
            : GetScalarType<T[P], MovieGenreGroupByOutputType[P]>
        }
      >
    >


  export type MovieGenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    movieId?: boolean
    genreId?: boolean
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movieGenre"]>

  export type MovieGenreSelectScalar = {
    movieId?: boolean
    genreId?: boolean
  }


  export type MovieGenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movie?: boolean | MoviesDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
  }


  export type $MovieGenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MovieGenre"
    objects: {
      movie: Prisma.$MoviesPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      movieId: number
      genreId: number
    }, ExtArgs["result"]["movieGenre"]>
    composites: {}
  }


  type MovieGenreGetPayload<S extends boolean | null | undefined | MovieGenreDefaultArgs> = $Result.GetResult<Prisma.$MovieGenrePayload, S>

  type MovieGenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovieGenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovieGenreCountAggregateInputType | true
    }

  export interface MovieGenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MovieGenre'], meta: { name: 'MovieGenre' } }
    /**
     * Find zero or one MovieGenre that matches the filter.
     * @param {MovieGenreFindUniqueArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MovieGenreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MovieGenreFindUniqueArgs<ExtArgs>>
    ): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MovieGenre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MovieGenreFindUniqueOrThrowArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MovieGenreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieGenreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MovieGenre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreFindFirstArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MovieGenreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieGenreFindFirstArgs<ExtArgs>>
    ): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MovieGenre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreFindFirstOrThrowArgs} args - Arguments to find a MovieGenre
     * @example
     * // Get one MovieGenre
     * const movieGenre = await prisma.movieGenre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MovieGenreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieGenreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MovieGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MovieGenres
     * const movieGenres = await prisma.movieGenre.findMany()
     * 
     * // Get first 10 MovieGenres
     * const movieGenres = await prisma.movieGenre.findMany({ take: 10 })
     * 
     * // Only select the `movieId`
     * const movieGenreWithMovieIdOnly = await prisma.movieGenre.findMany({ select: { movieId: true } })
     * 
    **/
    findMany<T extends MovieGenreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieGenreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MovieGenre.
     * @param {MovieGenreCreateArgs} args - Arguments to create a MovieGenre.
     * @example
     * // Create one MovieGenre
     * const MovieGenre = await prisma.movieGenre.create({
     *   data: {
     *     // ... data to create a MovieGenre
     *   }
     * })
     * 
    **/
    create<T extends MovieGenreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieGenreCreateArgs<ExtArgs>>
    ): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MovieGenres.
     *     @param {MovieGenreCreateManyArgs} args - Arguments to create many MovieGenres.
     *     @example
     *     // Create many MovieGenres
     *     const movieGenre = await prisma.movieGenre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MovieGenreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieGenreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MovieGenre.
     * @param {MovieGenreDeleteArgs} args - Arguments to delete one MovieGenre.
     * @example
     * // Delete one MovieGenre
     * const MovieGenre = await prisma.movieGenre.delete({
     *   where: {
     *     // ... filter to delete one MovieGenre
     *   }
     * })
     * 
    **/
    delete<T extends MovieGenreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MovieGenreDeleteArgs<ExtArgs>>
    ): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MovieGenre.
     * @param {MovieGenreUpdateArgs} args - Arguments to update one MovieGenre.
     * @example
     * // Update one MovieGenre
     * const movieGenre = await prisma.movieGenre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MovieGenreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MovieGenreUpdateArgs<ExtArgs>>
    ): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MovieGenres.
     * @param {MovieGenreDeleteManyArgs} args - Arguments to filter MovieGenres to delete.
     * @example
     * // Delete a few MovieGenres
     * const { count } = await prisma.movieGenre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MovieGenreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MovieGenreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MovieGenres
     * const movieGenre = await prisma.movieGenre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MovieGenreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MovieGenreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MovieGenre.
     * @param {MovieGenreUpsertArgs} args - Arguments to update or create a MovieGenre.
     * @example
     * // Update or create a MovieGenre
     * const movieGenre = await prisma.movieGenre.upsert({
     *   create: {
     *     // ... data to create a MovieGenre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MovieGenre we want to update
     *   }
     * })
    **/
    upsert<T extends MovieGenreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MovieGenreUpsertArgs<ExtArgs>>
    ): Prisma__MovieGenreClient<$Result.GetResult<Prisma.$MovieGenrePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MovieGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreCountArgs} args - Arguments to filter MovieGenres to count.
     * @example
     * // Count the number of MovieGenres
     * const count = await prisma.movieGenre.count({
     *   where: {
     *     // ... the filter for the MovieGenres we want to count
     *   }
     * })
    **/
    count<T extends MovieGenreCountArgs>(
      args?: Subset<T, MovieGenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovieGenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MovieGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovieGenreAggregateArgs>(args: Subset<T, MovieGenreAggregateArgs>): Prisma.PrismaPromise<GetMovieGenreAggregateType<T>>

    /**
     * Group by MovieGenre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovieGenreGroupByArgs} args - Group by arguments.
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
      T extends MovieGenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovieGenreGroupByArgs['orderBy'] }
        : { orderBy?: MovieGenreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovieGenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovieGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MovieGenre model
   */
  readonly fields: MovieGenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MovieGenre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovieGenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movie<T extends MoviesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MoviesDefaultArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MovieGenre model
   */ 
  interface MovieGenreFieldRefs {
    readonly movieId: FieldRef<"MovieGenre", 'Int'>
    readonly genreId: FieldRef<"MovieGenre", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * MovieGenre findUnique
   */
  export type MovieGenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenre to fetch.
     */
    where: MovieGenreWhereUniqueInput
  }

  /**
   * MovieGenre findUniqueOrThrow
   */
  export type MovieGenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenre to fetch.
     */
    where: MovieGenreWhereUniqueInput
  }

  /**
   * MovieGenre findFirst
   */
  export type MovieGenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenre to fetch.
     */
    where?: MovieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieGenres.
     */
    cursor?: MovieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieGenres.
     */
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * MovieGenre findFirstOrThrow
   */
  export type MovieGenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenre to fetch.
     */
    where?: MovieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MovieGenres.
     */
    cursor?: MovieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MovieGenres.
     */
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * MovieGenre findMany
   */
  export type MovieGenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter, which MovieGenres to fetch.
     */
    where?: MovieGenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MovieGenres to fetch.
     */
    orderBy?: MovieGenreOrderByWithRelationInput | MovieGenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MovieGenres.
     */
    cursor?: MovieGenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MovieGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MovieGenres.
     */
    skip?: number
    distinct?: MovieGenreScalarFieldEnum | MovieGenreScalarFieldEnum[]
  }

  /**
   * MovieGenre create
   */
  export type MovieGenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * The data needed to create a MovieGenre.
     */
    data: XOR<MovieGenreCreateInput, MovieGenreUncheckedCreateInput>
  }

  /**
   * MovieGenre createMany
   */
  export type MovieGenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MovieGenres.
     */
    data: MovieGenreCreateManyInput | MovieGenreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MovieGenre update
   */
  export type MovieGenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * The data needed to update a MovieGenre.
     */
    data: XOR<MovieGenreUpdateInput, MovieGenreUncheckedUpdateInput>
    /**
     * Choose, which MovieGenre to update.
     */
    where: MovieGenreWhereUniqueInput
  }

  /**
   * MovieGenre updateMany
   */
  export type MovieGenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MovieGenres.
     */
    data: XOR<MovieGenreUpdateManyMutationInput, MovieGenreUncheckedUpdateManyInput>
    /**
     * Filter which MovieGenres to update
     */
    where?: MovieGenreWhereInput
  }

  /**
   * MovieGenre upsert
   */
  export type MovieGenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * The filter to search for the MovieGenre to update in case it exists.
     */
    where: MovieGenreWhereUniqueInput
    /**
     * In case the MovieGenre found by the `where` argument doesn't exist, create a new MovieGenre with this data.
     */
    create: XOR<MovieGenreCreateInput, MovieGenreUncheckedCreateInput>
    /**
     * In case the MovieGenre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovieGenreUpdateInput, MovieGenreUncheckedUpdateInput>
  }

  /**
   * MovieGenre delete
   */
  export type MovieGenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
    /**
     * Filter which MovieGenre to delete.
     */
    where: MovieGenreWhereUniqueInput
  }

  /**
   * MovieGenre deleteMany
   */
  export type MovieGenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MovieGenres to delete
     */
    where?: MovieGenreWhereInput
  }

  /**
   * MovieGenre without action
   */
  export type MovieGenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MovieGenre
     */
    select?: MovieGenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovieGenreInclude<ExtArgs> | null
  }


  /**
   * Model LikeMovies
   */

  export type AggregateLikeMovies = {
    _count: LikeMoviesCountAggregateOutputType | null
    _avg: LikeMoviesAvgAggregateOutputType | null
    _sum: LikeMoviesSumAggregateOutputType | null
    _min: LikeMoviesMinAggregateOutputType | null
    _max: LikeMoviesMaxAggregateOutputType | null
  }

  export type LikeMoviesAvgAggregateOutputType = {
    id: number | null
    userId: number | null
    moviesId: number | null
  }

  export type LikeMoviesSumAggregateOutputType = {
    id: number | null
    userId: number | null
    moviesId: number | null
  }

  export type LikeMoviesMinAggregateOutputType = {
    id: number | null
    userId: number | null
    moviesId: number | null
  }

  export type LikeMoviesMaxAggregateOutputType = {
    id: number | null
    userId: number | null
    moviesId: number | null
  }

  export type LikeMoviesCountAggregateOutputType = {
    id: number
    userId: number
    moviesId: number
    _all: number
  }


  export type LikeMoviesAvgAggregateInputType = {
    id?: true
    userId?: true
    moviesId?: true
  }

  export type LikeMoviesSumAggregateInputType = {
    id?: true
    userId?: true
    moviesId?: true
  }

  export type LikeMoviesMinAggregateInputType = {
    id?: true
    userId?: true
    moviesId?: true
  }

  export type LikeMoviesMaxAggregateInputType = {
    id?: true
    userId?: true
    moviesId?: true
  }

  export type LikeMoviesCountAggregateInputType = {
    id?: true
    userId?: true
    moviesId?: true
    _all?: true
  }

  export type LikeMoviesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeMovies to aggregate.
     */
    where?: LikeMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeMovies to fetch.
     */
    orderBy?: LikeMoviesOrderByWithRelationInput | LikeMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LikeMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LikeMovies
    **/
    _count?: true | LikeMoviesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LikeMoviesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LikeMoviesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LikeMoviesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LikeMoviesMaxAggregateInputType
  }

  export type GetLikeMoviesAggregateType<T extends LikeMoviesAggregateArgs> = {
        [P in keyof T & keyof AggregateLikeMovies]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLikeMovies[P]>
      : GetScalarType<T[P], AggregateLikeMovies[P]>
  }




  export type LikeMoviesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LikeMoviesWhereInput
    orderBy?: LikeMoviesOrderByWithAggregationInput | LikeMoviesOrderByWithAggregationInput[]
    by: LikeMoviesScalarFieldEnum[] | LikeMoviesScalarFieldEnum
    having?: LikeMoviesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LikeMoviesCountAggregateInputType | true
    _avg?: LikeMoviesAvgAggregateInputType
    _sum?: LikeMoviesSumAggregateInputType
    _min?: LikeMoviesMinAggregateInputType
    _max?: LikeMoviesMaxAggregateInputType
  }

  export type LikeMoviesGroupByOutputType = {
    id: number
    userId: number
    moviesId: number | null
    _count: LikeMoviesCountAggregateOutputType | null
    _avg: LikeMoviesAvgAggregateOutputType | null
    _sum: LikeMoviesSumAggregateOutputType | null
    _min: LikeMoviesMinAggregateOutputType | null
    _max: LikeMoviesMaxAggregateOutputType | null
  }

  type GetLikeMoviesGroupByPayload<T extends LikeMoviesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LikeMoviesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LikeMoviesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LikeMoviesGroupByOutputType[P]>
            : GetScalarType<T[P], LikeMoviesGroupByOutputType[P]>
        }
      >
    >


  export type LikeMoviesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    moviesId?: boolean
    user?: boolean | LikeMovies$userArgs<ExtArgs>
    movie?: boolean | LikeMovies$movieArgs<ExtArgs>
  }, ExtArgs["result"]["likeMovies"]>

  export type LikeMoviesSelectScalar = {
    id?: boolean
    userId?: boolean
    moviesId?: boolean
  }


  export type LikeMoviesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | LikeMovies$userArgs<ExtArgs>
    movie?: boolean | LikeMovies$movieArgs<ExtArgs>
  }


  export type $LikeMoviesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LikeMovies"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      movie: Prisma.$MoviesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: number
      moviesId: number | null
    }, ExtArgs["result"]["likeMovies"]>
    composites: {}
  }


  type LikeMoviesGetPayload<S extends boolean | null | undefined | LikeMoviesDefaultArgs> = $Result.GetResult<Prisma.$LikeMoviesPayload, S>

  type LikeMoviesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<LikeMoviesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: LikeMoviesCountAggregateInputType | true
    }

  export interface LikeMoviesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LikeMovies'], meta: { name: 'LikeMovies' } }
    /**
     * Find zero or one LikeMovies that matches the filter.
     * @param {LikeMoviesFindUniqueArgs} args - Arguments to find a LikeMovies
     * @example
     * // Get one LikeMovies
     * const likeMovies = await prisma.likeMovies.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends LikeMoviesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, LikeMoviesFindUniqueArgs<ExtArgs>>
    ): Prisma__LikeMoviesClient<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one LikeMovies that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {LikeMoviesFindUniqueOrThrowArgs} args - Arguments to find a LikeMovies
     * @example
     * // Get one LikeMovies
     * const likeMovies = await prisma.likeMovies.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends LikeMoviesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeMoviesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__LikeMoviesClient<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first LikeMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeMoviesFindFirstArgs} args - Arguments to find a LikeMovies
     * @example
     * // Get one LikeMovies
     * const likeMovies = await prisma.likeMovies.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends LikeMoviesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeMoviesFindFirstArgs<ExtArgs>>
    ): Prisma__LikeMoviesClient<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first LikeMovies that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeMoviesFindFirstOrThrowArgs} args - Arguments to find a LikeMovies
     * @example
     * // Get one LikeMovies
     * const likeMovies = await prisma.likeMovies.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends LikeMoviesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeMoviesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__LikeMoviesClient<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more LikeMovies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeMoviesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LikeMovies
     * const likeMovies = await prisma.likeMovies.findMany()
     * 
     * // Get first 10 LikeMovies
     * const likeMovies = await prisma.likeMovies.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const likeMoviesWithIdOnly = await prisma.likeMovies.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends LikeMoviesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeMoviesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a LikeMovies.
     * @param {LikeMoviesCreateArgs} args - Arguments to create a LikeMovies.
     * @example
     * // Create one LikeMovies
     * const LikeMovies = await prisma.likeMovies.create({
     *   data: {
     *     // ... data to create a LikeMovies
     *   }
     * })
     * 
    **/
    create<T extends LikeMoviesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, LikeMoviesCreateArgs<ExtArgs>>
    ): Prisma__LikeMoviesClient<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many LikeMovies.
     *     @param {LikeMoviesCreateManyArgs} args - Arguments to create many LikeMovies.
     *     @example
     *     // Create many LikeMovies
     *     const likeMovies = await prisma.likeMovies.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends LikeMoviesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeMoviesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a LikeMovies.
     * @param {LikeMoviesDeleteArgs} args - Arguments to delete one LikeMovies.
     * @example
     * // Delete one LikeMovies
     * const LikeMovies = await prisma.likeMovies.delete({
     *   where: {
     *     // ... filter to delete one LikeMovies
     *   }
     * })
     * 
    **/
    delete<T extends LikeMoviesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, LikeMoviesDeleteArgs<ExtArgs>>
    ): Prisma__LikeMoviesClient<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one LikeMovies.
     * @param {LikeMoviesUpdateArgs} args - Arguments to update one LikeMovies.
     * @example
     * // Update one LikeMovies
     * const likeMovies = await prisma.likeMovies.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends LikeMoviesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, LikeMoviesUpdateArgs<ExtArgs>>
    ): Prisma__LikeMoviesClient<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more LikeMovies.
     * @param {LikeMoviesDeleteManyArgs} args - Arguments to filter LikeMovies to delete.
     * @example
     * // Delete a few LikeMovies
     * const { count } = await prisma.likeMovies.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends LikeMoviesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, LikeMoviesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LikeMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeMoviesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LikeMovies
     * const likeMovies = await prisma.likeMovies.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends LikeMoviesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, LikeMoviesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one LikeMovies.
     * @param {LikeMoviesUpsertArgs} args - Arguments to update or create a LikeMovies.
     * @example
     * // Update or create a LikeMovies
     * const likeMovies = await prisma.likeMovies.upsert({
     *   create: {
     *     // ... data to create a LikeMovies
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LikeMovies we want to update
     *   }
     * })
    **/
    upsert<T extends LikeMoviesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, LikeMoviesUpsertArgs<ExtArgs>>
    ): Prisma__LikeMoviesClient<$Result.GetResult<Prisma.$LikeMoviesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of LikeMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeMoviesCountArgs} args - Arguments to filter LikeMovies to count.
     * @example
     * // Count the number of LikeMovies
     * const count = await prisma.likeMovies.count({
     *   where: {
     *     // ... the filter for the LikeMovies we want to count
     *   }
     * })
    **/
    count<T extends LikeMoviesCountArgs>(
      args?: Subset<T, LikeMoviesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LikeMoviesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LikeMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeMoviesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LikeMoviesAggregateArgs>(args: Subset<T, LikeMoviesAggregateArgs>): Prisma.PrismaPromise<GetLikeMoviesAggregateType<T>>

    /**
     * Group by LikeMovies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LikeMoviesGroupByArgs} args - Group by arguments.
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
      T extends LikeMoviesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LikeMoviesGroupByArgs['orderBy'] }
        : { orderBy?: LikeMoviesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LikeMoviesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLikeMoviesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LikeMovies model
   */
  readonly fields: LikeMoviesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LikeMovies.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LikeMoviesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends LikeMovies$userArgs<ExtArgs> = {}>(args?: Subset<T, LikeMovies$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    movie<T extends LikeMovies$movieArgs<ExtArgs> = {}>(args?: Subset<T, LikeMovies$movieArgs<ExtArgs>>): Prisma__MoviesClient<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the LikeMovies model
   */ 
  interface LikeMoviesFieldRefs {
    readonly id: FieldRef<"LikeMovies", 'Int'>
    readonly userId: FieldRef<"LikeMovies", 'Int'>
    readonly moviesId: FieldRef<"LikeMovies", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * LikeMovies findUnique
   */
  export type LikeMoviesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * Filter, which LikeMovies to fetch.
     */
    where: LikeMoviesWhereUniqueInput
  }

  /**
   * LikeMovies findUniqueOrThrow
   */
  export type LikeMoviesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * Filter, which LikeMovies to fetch.
     */
    where: LikeMoviesWhereUniqueInput
  }

  /**
   * LikeMovies findFirst
   */
  export type LikeMoviesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * Filter, which LikeMovies to fetch.
     */
    where?: LikeMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeMovies to fetch.
     */
    orderBy?: LikeMoviesOrderByWithRelationInput | LikeMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeMovies.
     */
    cursor?: LikeMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeMovies.
     */
    distinct?: LikeMoviesScalarFieldEnum | LikeMoviesScalarFieldEnum[]
  }

  /**
   * LikeMovies findFirstOrThrow
   */
  export type LikeMoviesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * Filter, which LikeMovies to fetch.
     */
    where?: LikeMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeMovies to fetch.
     */
    orderBy?: LikeMoviesOrderByWithRelationInput | LikeMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LikeMovies.
     */
    cursor?: LikeMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeMovies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LikeMovies.
     */
    distinct?: LikeMoviesScalarFieldEnum | LikeMoviesScalarFieldEnum[]
  }

  /**
   * LikeMovies findMany
   */
  export type LikeMoviesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * Filter, which LikeMovies to fetch.
     */
    where?: LikeMoviesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LikeMovies to fetch.
     */
    orderBy?: LikeMoviesOrderByWithRelationInput | LikeMoviesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LikeMovies.
     */
    cursor?: LikeMoviesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LikeMovies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LikeMovies.
     */
    skip?: number
    distinct?: LikeMoviesScalarFieldEnum | LikeMoviesScalarFieldEnum[]
  }

  /**
   * LikeMovies create
   */
  export type LikeMoviesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * The data needed to create a LikeMovies.
     */
    data: XOR<LikeMoviesCreateInput, LikeMoviesUncheckedCreateInput>
  }

  /**
   * LikeMovies createMany
   */
  export type LikeMoviesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LikeMovies.
     */
    data: LikeMoviesCreateManyInput | LikeMoviesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LikeMovies update
   */
  export type LikeMoviesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * The data needed to update a LikeMovies.
     */
    data: XOR<LikeMoviesUpdateInput, LikeMoviesUncheckedUpdateInput>
    /**
     * Choose, which LikeMovies to update.
     */
    where: LikeMoviesWhereUniqueInput
  }

  /**
   * LikeMovies updateMany
   */
  export type LikeMoviesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LikeMovies.
     */
    data: XOR<LikeMoviesUpdateManyMutationInput, LikeMoviesUncheckedUpdateManyInput>
    /**
     * Filter which LikeMovies to update
     */
    where?: LikeMoviesWhereInput
  }

  /**
   * LikeMovies upsert
   */
  export type LikeMoviesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * The filter to search for the LikeMovies to update in case it exists.
     */
    where: LikeMoviesWhereUniqueInput
    /**
     * In case the LikeMovies found by the `where` argument doesn't exist, create a new LikeMovies with this data.
     */
    create: XOR<LikeMoviesCreateInput, LikeMoviesUncheckedCreateInput>
    /**
     * In case the LikeMovies was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LikeMoviesUpdateInput, LikeMoviesUncheckedUpdateInput>
  }

  /**
   * LikeMovies delete
   */
  export type LikeMoviesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
    /**
     * Filter which LikeMovies to delete.
     */
    where: LikeMoviesWhereUniqueInput
  }

  /**
   * LikeMovies deleteMany
   */
  export type LikeMoviesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LikeMovies to delete
     */
    where?: LikeMoviesWhereInput
  }

  /**
   * LikeMovies.user
   */
  export type LikeMovies$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LikeMovies.movie
   */
  export type LikeMovies$movieArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
  }

  /**
   * LikeMovies without action
   */
  export type LikeMoviesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LikeMovies
     */
    select?: LikeMoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LikeMoviesInclude<ExtArgs> | null
  }


  /**
   * Model Actors
   */

  export type AggregateActors = {
    _count: ActorsCountAggregateOutputType | null
    _avg: ActorsAvgAggregateOutputType | null
    _sum: ActorsSumAggregateOutputType | null
    _min: ActorsMinAggregateOutputType | null
    _max: ActorsMaxAggregateOutputType | null
  }

  export type ActorsAvgAggregateOutputType = {
    id: number | null
  }

  export type ActorsSumAggregateOutputType = {
    id: number | null
  }

  export type ActorsMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
  }

  export type ActorsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
  }

  export type ActorsCountAggregateOutputType = {
    id: number
    name: number
    image: number
    _all: number
  }


  export type ActorsAvgAggregateInputType = {
    id?: true
  }

  export type ActorsSumAggregateInputType = {
    id?: true
  }

  export type ActorsMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
  }

  export type ActorsMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
  }

  export type ActorsCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    _all?: true
  }

  export type ActorsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actors to aggregate.
     */
    where?: ActorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ActorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Actors
    **/
    _count?: true | ActorsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ActorsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ActorsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ActorsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ActorsMaxAggregateInputType
  }

  export type GetActorsAggregateType<T extends ActorsAggregateArgs> = {
        [P in keyof T & keyof AggregateActors]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateActors[P]>
      : GetScalarType<T[P], AggregateActors[P]>
  }




  export type ActorsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ActorsWhereInput
    orderBy?: ActorsOrderByWithAggregationInput | ActorsOrderByWithAggregationInput[]
    by: ActorsScalarFieldEnum[] | ActorsScalarFieldEnum
    having?: ActorsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ActorsCountAggregateInputType | true
    _avg?: ActorsAvgAggregateInputType
    _sum?: ActorsSumAggregateInputType
    _min?: ActorsMinAggregateInputType
    _max?: ActorsMaxAggregateInputType
  }

  export type ActorsGroupByOutputType = {
    id: number
    name: string
    image: string
    _count: ActorsCountAggregateOutputType | null
    _avg: ActorsAvgAggregateOutputType | null
    _sum: ActorsSumAggregateOutputType | null
    _min: ActorsMinAggregateOutputType | null
    _max: ActorsMaxAggregateOutputType | null
  }

  type GetActorsGroupByPayload<T extends ActorsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ActorsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ActorsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ActorsGroupByOutputType[P]>
            : GetScalarType<T[P], ActorsGroupByOutputType[P]>
        }
      >
    >


  export type ActorsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    movies?: boolean | Actors$moviesArgs<ExtArgs>
    _count?: boolean | ActorsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["actors"]>

  export type ActorsSelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
  }


  export type ActorsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movies?: boolean | Actors$moviesArgs<ExtArgs>
    _count?: boolean | ActorsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ActorsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Actors"
    objects: {
      movies: Prisma.$MoviesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
    }, ExtArgs["result"]["actors"]>
    composites: {}
  }


  type ActorsGetPayload<S extends boolean | null | undefined | ActorsDefaultArgs> = $Result.GetResult<Prisma.$ActorsPayload, S>

  type ActorsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ActorsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ActorsCountAggregateInputType | true
    }

  export interface ActorsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Actors'], meta: { name: 'Actors' } }
    /**
     * Find zero or one Actors that matches the filter.
     * @param {ActorsFindUniqueArgs} args - Arguments to find a Actors
     * @example
     * // Get one Actors
     * const actors = await prisma.actors.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ActorsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ActorsFindUniqueArgs<ExtArgs>>
    ): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Actors that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ActorsFindUniqueOrThrowArgs} args - Arguments to find a Actors
     * @example
     * // Get one Actors
     * const actors = await prisma.actors.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ActorsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActorsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsFindFirstArgs} args - Arguments to find a Actors
     * @example
     * // Get one Actors
     * const actors = await prisma.actors.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ActorsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ActorsFindFirstArgs<ExtArgs>>
    ): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Actors that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsFindFirstOrThrowArgs} args - Arguments to find a Actors
     * @example
     * // Get one Actors
     * const actors = await prisma.actors.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ActorsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ActorsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Actors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Actors
     * const actors = await prisma.actors.findMany()
     * 
     * // Get first 10 Actors
     * const actors = await prisma.actors.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const actorsWithIdOnly = await prisma.actors.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ActorsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActorsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Actors.
     * @param {ActorsCreateArgs} args - Arguments to create a Actors.
     * @example
     * // Create one Actors
     * const Actors = await prisma.actors.create({
     *   data: {
     *     // ... data to create a Actors
     *   }
     * })
     * 
    **/
    create<T extends ActorsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ActorsCreateArgs<ExtArgs>>
    ): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Actors.
     *     @param {ActorsCreateManyArgs} args - Arguments to create many Actors.
     *     @example
     *     // Create many Actors
     *     const actors = await prisma.actors.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ActorsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActorsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Actors.
     * @param {ActorsDeleteArgs} args - Arguments to delete one Actors.
     * @example
     * // Delete one Actors
     * const Actors = await prisma.actors.delete({
     *   where: {
     *     // ... filter to delete one Actors
     *   }
     * })
     * 
    **/
    delete<T extends ActorsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ActorsDeleteArgs<ExtArgs>>
    ): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Actors.
     * @param {ActorsUpdateArgs} args - Arguments to update one Actors.
     * @example
     * // Update one Actors
     * const actors = await prisma.actors.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ActorsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ActorsUpdateArgs<ExtArgs>>
    ): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Actors.
     * @param {ActorsDeleteManyArgs} args - Arguments to filter Actors to delete.
     * @example
     * // Delete a few Actors
     * const { count } = await prisma.actors.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ActorsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ActorsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Actors
     * const actors = await prisma.actors.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ActorsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ActorsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Actors.
     * @param {ActorsUpsertArgs} args - Arguments to update or create a Actors.
     * @example
     * // Update or create a Actors
     * const actors = await prisma.actors.upsert({
     *   create: {
     *     // ... data to create a Actors
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Actors we want to update
     *   }
     * })
    **/
    upsert<T extends ActorsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ActorsUpsertArgs<ExtArgs>>
    ): Prisma__ActorsClient<$Result.GetResult<Prisma.$ActorsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsCountArgs} args - Arguments to filter Actors to count.
     * @example
     * // Count the number of Actors
     * const count = await prisma.actors.count({
     *   where: {
     *     // ... the filter for the Actors we want to count
     *   }
     * })
    **/
    count<T extends ActorsCountArgs>(
      args?: Subset<T, ActorsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ActorsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ActorsAggregateArgs>(args: Subset<T, ActorsAggregateArgs>): Prisma.PrismaPromise<GetActorsAggregateType<T>>

    /**
     * Group by Actors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ActorsGroupByArgs} args - Group by arguments.
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
      T extends ActorsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ActorsGroupByArgs['orderBy'] }
        : { orderBy?: ActorsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ActorsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetActorsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Actors model
   */
  readonly fields: ActorsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Actors.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ActorsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    movies<T extends Actors$moviesArgs<ExtArgs> = {}>(args?: Subset<T, Actors$moviesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MoviesPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Actors model
   */ 
  interface ActorsFieldRefs {
    readonly id: FieldRef<"Actors", 'Int'>
    readonly name: FieldRef<"Actors", 'String'>
    readonly image: FieldRef<"Actors", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Actors findUnique
   */
  export type ActorsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where: ActorsWhereUniqueInput
  }

  /**
   * Actors findUniqueOrThrow
   */
  export type ActorsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where: ActorsWhereUniqueInput
  }

  /**
   * Actors findFirst
   */
  export type ActorsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorsScalarFieldEnum | ActorsScalarFieldEnum[]
  }

  /**
   * Actors findFirstOrThrow
   */
  export type ActorsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Actors.
     */
    cursor?: ActorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Actors.
     */
    distinct?: ActorsScalarFieldEnum | ActorsScalarFieldEnum[]
  }

  /**
   * Actors findMany
   */
  export type ActorsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter, which Actors to fetch.
     */
    where?: ActorsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Actors to fetch.
     */
    orderBy?: ActorsOrderByWithRelationInput | ActorsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Actors.
     */
    cursor?: ActorsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Actors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Actors.
     */
    skip?: number
    distinct?: ActorsScalarFieldEnum | ActorsScalarFieldEnum[]
  }

  /**
   * Actors create
   */
  export type ActorsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * The data needed to create a Actors.
     */
    data: XOR<ActorsCreateInput, ActorsUncheckedCreateInput>
  }

  /**
   * Actors createMany
   */
  export type ActorsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Actors.
     */
    data: ActorsCreateManyInput | ActorsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Actors update
   */
  export type ActorsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * The data needed to update a Actors.
     */
    data: XOR<ActorsUpdateInput, ActorsUncheckedUpdateInput>
    /**
     * Choose, which Actors to update.
     */
    where: ActorsWhereUniqueInput
  }

  /**
   * Actors updateMany
   */
  export type ActorsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Actors.
     */
    data: XOR<ActorsUpdateManyMutationInput, ActorsUncheckedUpdateManyInput>
    /**
     * Filter which Actors to update
     */
    where?: ActorsWhereInput
  }

  /**
   * Actors upsert
   */
  export type ActorsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * The filter to search for the Actors to update in case it exists.
     */
    where: ActorsWhereUniqueInput
    /**
     * In case the Actors found by the `where` argument doesn't exist, create a new Actors with this data.
     */
    create: XOR<ActorsCreateInput, ActorsUncheckedCreateInput>
    /**
     * In case the Actors was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ActorsUpdateInput, ActorsUncheckedUpdateInput>
  }

  /**
   * Actors delete
   */
  export type ActorsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
    /**
     * Filter which Actors to delete.
     */
    where: ActorsWhereUniqueInput
  }

  /**
   * Actors deleteMany
   */
  export type ActorsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Actors to delete
     */
    where?: ActorsWhereInput
  }

  /**
   * Actors.movies
   */
  export type Actors$moviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movies
     */
    select?: MoviesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MoviesInclude<ExtArgs> | null
    where?: MoviesWhereInput
    orderBy?: MoviesOrderByWithRelationInput | MoviesOrderByWithRelationInput[]
    cursor?: MoviesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MoviesScalarFieldEnum | MoviesScalarFieldEnum[]
  }

  /**
   * Actors without action
   */
  export type ActorsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Actors
     */
    select?: ActorsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ActorsInclude<ExtArgs> | null
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
    name: 'name',
    email: 'email',
    password: 'password',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MoviesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image',
    sinopsis: 'sinopsis',
    createAt: 'createAt',
    updateAt: 'updateAt',
    userId: 'userId'
  };

  export type MoviesScalarFieldEnum = (typeof MoviesScalarFieldEnum)[keyof typeof MoviesScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updateAt: 'updateAt'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const MovieGenreScalarFieldEnum: {
    movieId: 'movieId',
    genreId: 'genreId'
  };

  export type MovieGenreScalarFieldEnum = (typeof MovieGenreScalarFieldEnum)[keyof typeof MovieGenreScalarFieldEnum]


  export const LikeMoviesScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    moviesId: 'moviesId'
  };

  export type LikeMoviesScalarFieldEnum = (typeof LikeMoviesScalarFieldEnum)[keyof typeof LikeMoviesScalarFieldEnum]


  export const ActorsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image'
  };

  export type ActorsScalarFieldEnum = (typeof ActorsScalarFieldEnum)[keyof typeof ActorsScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    movies?: MoviesListRelationFilter
    likedBy?: LikeMoviesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    movies?: MoviesOrderByRelationAggregateInput
    likedBy?: LikeMoviesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createAt?: DateTimeFilter<"User"> | Date | string
    updateAt?: DateTimeFilter<"User"> | Date | string
    movies?: MoviesListRelationFilter
    likedBy?: LikeMoviesListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
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
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MoviesWhereInput = {
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    id?: IntFilter<"Movies"> | number
    name?: StringFilter<"Movies"> | string
    image?: StringFilter<"Movies"> | string
    sinopsis?: StringFilter<"Movies"> | string
    createAt?: DateTimeFilter<"Movies"> | Date | string
    updateAt?: DateTimeFilter<"Movies"> | Date | string
    userId?: IntFilter<"Movies"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    genres?: MovieGenreListRelationFilter
    actors?: ActorsListRelationFilter
    likedBy?: LikeMoviesListRelationFilter
  }

  export type MoviesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    sinopsis?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    genres?: MovieGenreOrderByRelationAggregateInput
    actors?: ActorsOrderByRelationAggregateInput
    likedBy?: LikeMoviesOrderByRelationAggregateInput
  }

  export type MoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MoviesWhereInput | MoviesWhereInput[]
    OR?: MoviesWhereInput[]
    NOT?: MoviesWhereInput | MoviesWhereInput[]
    name?: StringFilter<"Movies"> | string
    image?: StringFilter<"Movies"> | string
    sinopsis?: StringFilter<"Movies"> | string
    createAt?: DateTimeFilter<"Movies"> | Date | string
    updateAt?: DateTimeFilter<"Movies"> | Date | string
    userId?: IntFilter<"Movies"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    genres?: MovieGenreListRelationFilter
    actors?: ActorsListRelationFilter
    likedBy?: LikeMoviesListRelationFilter
  }, "id">

  export type MoviesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    sinopsis?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
    _count?: MoviesCountOrderByAggregateInput
    _avg?: MoviesAvgOrderByAggregateInput
    _max?: MoviesMaxOrderByAggregateInput
    _min?: MoviesMinOrderByAggregateInput
    _sum?: MoviesSumOrderByAggregateInput
  }

  export type MoviesScalarWhereWithAggregatesInput = {
    AND?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    OR?: MoviesScalarWhereWithAggregatesInput[]
    NOT?: MoviesScalarWhereWithAggregatesInput | MoviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movies"> | number
    name?: StringWithAggregatesFilter<"Movies"> | string
    image?: StringWithAggregatesFilter<"Movies"> | string
    sinopsis?: StringWithAggregatesFilter<"Movies"> | string
    createAt?: DateTimeWithAggregatesFilter<"Movies"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Movies"> | Date | string
    userId?: IntWithAggregatesFilter<"Movies"> | number
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: IntFilter<"Genre"> | number
    name?: StringFilter<"Genre"> | string
    createAt?: DateTimeFilter<"Genre"> | Date | string
    updateAt?: DateTimeFilter<"Genre"> | Date | string
    movies?: MovieGenreListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    movies?: MovieGenreOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    name?: StringFilter<"Genre"> | string
    createAt?: DateTimeFilter<"Genre"> | Date | string
    updateAt?: DateTimeFilter<"Genre"> | Date | string
    movies?: MovieGenreListRelationFilter
  }, "id">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _avg?: GenreAvgOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
    _sum?: GenreSumOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Genre"> | number
    name?: StringWithAggregatesFilter<"Genre"> | string
    createAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
    updateAt?: DateTimeWithAggregatesFilter<"Genre"> | Date | string
  }

  export type MovieGenreWhereInput = {
    AND?: MovieGenreWhereInput | MovieGenreWhereInput[]
    OR?: MovieGenreWhereInput[]
    NOT?: MovieGenreWhereInput | MovieGenreWhereInput[]
    movieId?: IntFilter<"MovieGenre"> | number
    genreId?: IntFilter<"MovieGenre"> | number
    movie?: XOR<MoviesRelationFilter, MoviesWhereInput>
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
  }

  export type MovieGenreOrderByWithRelationInput = {
    movieId?: SortOrder
    genreId?: SortOrder
    movie?: MoviesOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
  }

  export type MovieGenreWhereUniqueInput = Prisma.AtLeast<{
    movieId_genreId?: MovieGenreMovieIdGenreIdCompoundUniqueInput
    AND?: MovieGenreWhereInput | MovieGenreWhereInput[]
    OR?: MovieGenreWhereInput[]
    NOT?: MovieGenreWhereInput | MovieGenreWhereInput[]
    movieId?: IntFilter<"MovieGenre"> | number
    genreId?: IntFilter<"MovieGenre"> | number
    movie?: XOR<MoviesRelationFilter, MoviesWhereInput>
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
  }, "movieId_genreId">

  export type MovieGenreOrderByWithAggregationInput = {
    movieId?: SortOrder
    genreId?: SortOrder
    _count?: MovieGenreCountOrderByAggregateInput
    _avg?: MovieGenreAvgOrderByAggregateInput
    _max?: MovieGenreMaxOrderByAggregateInput
    _min?: MovieGenreMinOrderByAggregateInput
    _sum?: MovieGenreSumOrderByAggregateInput
  }

  export type MovieGenreScalarWhereWithAggregatesInput = {
    AND?: MovieGenreScalarWhereWithAggregatesInput | MovieGenreScalarWhereWithAggregatesInput[]
    OR?: MovieGenreScalarWhereWithAggregatesInput[]
    NOT?: MovieGenreScalarWhereWithAggregatesInput | MovieGenreScalarWhereWithAggregatesInput[]
    movieId?: IntWithAggregatesFilter<"MovieGenre"> | number
    genreId?: IntWithAggregatesFilter<"MovieGenre"> | number
  }

  export type LikeMoviesWhereInput = {
    AND?: LikeMoviesWhereInput | LikeMoviesWhereInput[]
    OR?: LikeMoviesWhereInput[]
    NOT?: LikeMoviesWhereInput | LikeMoviesWhereInput[]
    id?: IntFilter<"LikeMovies"> | number
    userId?: IntFilter<"LikeMovies"> | number
    moviesId?: IntNullableFilter<"LikeMovies"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    movie?: XOR<MoviesNullableRelationFilter, MoviesWhereInput> | null
  }

  export type LikeMoviesOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    moviesId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    movie?: MoviesOrderByWithRelationInput
  }

  export type LikeMoviesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: LikeMoviesWhereInput | LikeMoviesWhereInput[]
    OR?: LikeMoviesWhereInput[]
    NOT?: LikeMoviesWhereInput | LikeMoviesWhereInput[]
    userId?: IntFilter<"LikeMovies"> | number
    moviesId?: IntNullableFilter<"LikeMovies"> | number | null
    user?: XOR<UserNullableRelationFilter, UserWhereInput> | null
    movie?: XOR<MoviesNullableRelationFilter, MoviesWhereInput> | null
  }, "id">

  export type LikeMoviesOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    moviesId?: SortOrderInput | SortOrder
    _count?: LikeMoviesCountOrderByAggregateInput
    _avg?: LikeMoviesAvgOrderByAggregateInput
    _max?: LikeMoviesMaxOrderByAggregateInput
    _min?: LikeMoviesMinOrderByAggregateInput
    _sum?: LikeMoviesSumOrderByAggregateInput
  }

  export type LikeMoviesScalarWhereWithAggregatesInput = {
    AND?: LikeMoviesScalarWhereWithAggregatesInput | LikeMoviesScalarWhereWithAggregatesInput[]
    OR?: LikeMoviesScalarWhereWithAggregatesInput[]
    NOT?: LikeMoviesScalarWhereWithAggregatesInput | LikeMoviesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"LikeMovies"> | number
    userId?: IntWithAggregatesFilter<"LikeMovies"> | number
    moviesId?: IntNullableWithAggregatesFilter<"LikeMovies"> | number | null
  }

  export type ActorsWhereInput = {
    AND?: ActorsWhereInput | ActorsWhereInput[]
    OR?: ActorsWhereInput[]
    NOT?: ActorsWhereInput | ActorsWhereInput[]
    id?: IntFilter<"Actors"> | number
    name?: StringFilter<"Actors"> | string
    image?: StringFilter<"Actors"> | string
    movies?: MoviesListRelationFilter
  }

  export type ActorsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    movies?: MoviesOrderByRelationAggregateInput
  }

  export type ActorsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ActorsWhereInput | ActorsWhereInput[]
    OR?: ActorsWhereInput[]
    NOT?: ActorsWhereInput | ActorsWhereInput[]
    name?: StringFilter<"Actors"> | string
    image?: StringFilter<"Actors"> | string
    movies?: MoviesListRelationFilter
  }, "id">

  export type ActorsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    _count?: ActorsCountOrderByAggregateInput
    _avg?: ActorsAvgOrderByAggregateInput
    _max?: ActorsMaxOrderByAggregateInput
    _min?: ActorsMinOrderByAggregateInput
    _sum?: ActorsSumOrderByAggregateInput
  }

  export type ActorsScalarWhereWithAggregatesInput = {
    AND?: ActorsScalarWhereWithAggregatesInput | ActorsScalarWhereWithAggregatesInput[]
    OR?: ActorsScalarWhereWithAggregatesInput[]
    NOT?: ActorsScalarWhereWithAggregatesInput | ActorsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Actors"> | number
    name?: StringWithAggregatesFilter<"Actors"> | string
    image?: StringWithAggregatesFilter<"Actors"> | string
  }

  export type UserCreateInput = {
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    movies?: MoviesCreateNestedManyWithoutUserInput
    likedBy?: LikeMoviesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
    likedBy?: LikeMoviesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUpdateManyWithoutUserNestedInput
    likedBy?: LikeMoviesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
    likedBy?: LikeMoviesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviesCreateInput = {
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutMoviesInput
    genres?: MovieGenreCreateNestedManyWithoutMovieInput
    actors?: ActorsCreateNestedManyWithoutMoviesInput
    likedBy?: LikeMoviesCreateNestedManyWithoutMovieInput
  }

  export type MoviesUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
    genres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    actors?: ActorsUncheckedCreateNestedManyWithoutMoviesInput
    likedBy?: LikeMoviesUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MoviesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput
    genres?: MovieGenreUpdateManyWithoutMovieNestedInput
    actors?: ActorsUpdateManyWithoutMoviesNestedInput
    likedBy?: LikeMoviesUpdateManyWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    genres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    actors?: ActorsUncheckedUpdateManyWithoutMoviesNestedInput
    likedBy?: LikeMoviesUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MoviesCreateManyInput = {
    id?: number
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
  }

  export type MoviesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MoviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type GenreCreateInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    movies?: MovieGenreCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
    movies?: MovieGenreUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieGenreUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MovieGenreUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovieGenreCreateInput = {
    movie: MoviesCreateNestedOneWithoutGenresInput
    genre: GenreCreateNestedOneWithoutMoviesInput
  }

  export type MovieGenreUncheckedCreateInput = {
    movieId: number
    genreId: number
  }

  export type MovieGenreUpdateInput = {
    movie?: MoviesUpdateOneRequiredWithoutGenresNestedInput
    genre?: GenreUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieGenreUncheckedUpdateInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieGenreCreateManyInput = {
    movieId: number
    genreId: number
  }

  export type MovieGenreUpdateManyMutationInput = {

  }

  export type MovieGenreUncheckedUpdateManyInput = {
    movieId?: IntFieldUpdateOperationsInput | number
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeMoviesCreateInput = {
    user?: UserCreateNestedOneWithoutLikedByInput
    movie?: MoviesCreateNestedOneWithoutLikedByInput
  }

  export type LikeMoviesUncheckedCreateInput = {
    id?: number
    userId: number
    moviesId?: number | null
  }

  export type LikeMoviesUpdateInput = {
    user?: UserUpdateOneWithoutLikedByNestedInput
    movie?: MoviesUpdateOneWithoutLikedByNestedInput
  }

  export type LikeMoviesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    moviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikeMoviesCreateManyInput = {
    id?: number
    userId: number
    moviesId?: number | null
  }

  export type LikeMoviesUpdateManyMutationInput = {

  }

  export type LikeMoviesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
    moviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ActorsCreateInput = {
    name: string
    image: string
    movies?: MoviesCreateNestedManyWithoutActorsInput
  }

  export type ActorsUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    movies?: MoviesUncheckedCreateNestedManyWithoutActorsInput
  }

  export type ActorsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUpdateManyWithoutActorsNestedInput
  }

  export type ActorsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    movies?: MoviesUncheckedUpdateManyWithoutActorsNestedInput
  }

  export type ActorsCreateManyInput = {
    id?: number
    name: string
    image: string
  }

  export type ActorsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
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

  export type MoviesListRelationFilter = {
    every?: MoviesWhereInput
    some?: MoviesWhereInput
    none?: MoviesWhereInput
  }

  export type LikeMoviesListRelationFilter = {
    every?: LikeMoviesWhereInput
    some?: LikeMoviesWhereInput
    none?: LikeMoviesWhereInput
  }

  export type MoviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LikeMoviesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MovieGenreListRelationFilter = {
    every?: MovieGenreWhereInput
    some?: MovieGenreWhereInput
    none?: MovieGenreWhereInput
  }

  export type ActorsListRelationFilter = {
    every?: ActorsWhereInput
    some?: ActorsWhereInput
    none?: ActorsWhereInput
  }

  export type MovieGenreOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ActorsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MoviesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    sinopsis?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type MoviesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type MoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    sinopsis?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type MoviesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    sinopsis?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
    userId?: SortOrder
  }

  export type MoviesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type GenreAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updateAt?: SortOrder
  }

  export type GenreSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MoviesRelationFilter = {
    is?: MoviesWhereInput
    isNot?: MoviesWhereInput
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type MovieGenreMovieIdGenreIdCompoundUniqueInput = {
    movieId: number
    genreId: number
  }

  export type MovieGenreCountOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
  }

  export type MovieGenreAvgOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
  }

  export type MovieGenreMaxOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
  }

  export type MovieGenreMinOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
  }

  export type MovieGenreSumOrderByAggregateInput = {
    movieId?: SortOrder
    genreId?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserNullableRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type MoviesNullableRelationFilter = {
    is?: MoviesWhereInput | null
    isNot?: MoviesWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LikeMoviesCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moviesId?: SortOrder
  }

  export type LikeMoviesAvgOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moviesId?: SortOrder
  }

  export type LikeMoviesMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moviesId?: SortOrder
  }

  export type LikeMoviesMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moviesId?: SortOrder
  }

  export type LikeMoviesSumOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    moviesId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type ActorsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type ActorsAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ActorsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type ActorsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type ActorsSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type MoviesCreateNestedManyWithoutUserInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type LikeMoviesCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeMoviesCreateWithoutUserInput, LikeMoviesUncheckedCreateWithoutUserInput> | LikeMoviesCreateWithoutUserInput[] | LikeMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeMoviesCreateOrConnectWithoutUserInput | LikeMoviesCreateOrConnectWithoutUserInput[]
    createMany?: LikeMoviesCreateManyUserInputEnvelope
    connect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
  }

  export type MoviesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type LikeMoviesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LikeMoviesCreateWithoutUserInput, LikeMoviesUncheckedCreateWithoutUserInput> | LikeMoviesCreateWithoutUserInput[] | LikeMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeMoviesCreateOrConnectWithoutUserInput | LikeMoviesCreateOrConnectWithoutUserInput[]
    createMany?: LikeMoviesCreateManyUserInputEnvelope
    connect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type MoviesUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutUserInput | MoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutUserInput | MoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutUserInput | MoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type LikeMoviesUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeMoviesCreateWithoutUserInput, LikeMoviesUncheckedCreateWithoutUserInput> | LikeMoviesCreateWithoutUserInput[] | LikeMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeMoviesCreateOrConnectWithoutUserInput | LikeMoviesCreateOrConnectWithoutUserInput[]
    upsert?: LikeMoviesUpsertWithWhereUniqueWithoutUserInput | LikeMoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeMoviesCreateManyUserInputEnvelope
    set?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    disconnect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    delete?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    connect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    update?: LikeMoviesUpdateWithWhereUniqueWithoutUserInput | LikeMoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeMoviesUpdateManyWithWhereWithoutUserInput | LikeMoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeMoviesScalarWhereInput | LikeMoviesScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MoviesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput> | MoviesCreateWithoutUserInput[] | MoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutUserInput | MoviesCreateOrConnectWithoutUserInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutUserInput | MoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MoviesCreateManyUserInputEnvelope
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutUserInput | MoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutUserInput | MoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type LikeMoviesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LikeMoviesCreateWithoutUserInput, LikeMoviesUncheckedCreateWithoutUserInput> | LikeMoviesCreateWithoutUserInput[] | LikeMoviesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LikeMoviesCreateOrConnectWithoutUserInput | LikeMoviesCreateOrConnectWithoutUserInput[]
    upsert?: LikeMoviesUpsertWithWhereUniqueWithoutUserInput | LikeMoviesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LikeMoviesCreateManyUserInputEnvelope
    set?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    disconnect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    delete?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    connect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    update?: LikeMoviesUpdateWithWhereUniqueWithoutUserInput | LikeMoviesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LikeMoviesUpdateManyWithWhereWithoutUserInput | LikeMoviesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LikeMoviesScalarWhereInput | LikeMoviesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutMoviesInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    connect?: UserWhereUniqueInput
  }

  export type MovieGenreCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput> | MovieGenreCreateWithoutMovieInput[] | MovieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutMovieInput | MovieGenreCreateOrConnectWithoutMovieInput[]
    createMany?: MovieGenreCreateManyMovieInputEnvelope
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
  }

  export type ActorsCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ActorsCreateWithoutMoviesInput, ActorsUncheckedCreateWithoutMoviesInput> | ActorsCreateWithoutMoviesInput[] | ActorsUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ActorsCreateOrConnectWithoutMoviesInput | ActorsCreateOrConnectWithoutMoviesInput[]
    connect?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
  }

  export type LikeMoviesCreateNestedManyWithoutMovieInput = {
    create?: XOR<LikeMoviesCreateWithoutMovieInput, LikeMoviesUncheckedCreateWithoutMovieInput> | LikeMoviesCreateWithoutMovieInput[] | LikeMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikeMoviesCreateOrConnectWithoutMovieInput | LikeMoviesCreateOrConnectWithoutMovieInput[]
    createMany?: LikeMoviesCreateManyMovieInputEnvelope
    connect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
  }

  export type MovieGenreUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput> | MovieGenreCreateWithoutMovieInput[] | MovieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutMovieInput | MovieGenreCreateOrConnectWithoutMovieInput[]
    createMany?: MovieGenreCreateManyMovieInputEnvelope
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
  }

  export type ActorsUncheckedCreateNestedManyWithoutMoviesInput = {
    create?: XOR<ActorsCreateWithoutMoviesInput, ActorsUncheckedCreateWithoutMoviesInput> | ActorsCreateWithoutMoviesInput[] | ActorsUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ActorsCreateOrConnectWithoutMoviesInput | ActorsCreateOrConnectWithoutMoviesInput[]
    connect?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
  }

  export type LikeMoviesUncheckedCreateNestedManyWithoutMovieInput = {
    create?: XOR<LikeMoviesCreateWithoutMovieInput, LikeMoviesUncheckedCreateWithoutMovieInput> | LikeMoviesCreateWithoutMovieInput[] | LikeMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikeMoviesCreateOrConnectWithoutMovieInput | LikeMoviesCreateOrConnectWithoutMovieInput[]
    createMany?: LikeMoviesCreateManyMovieInputEnvelope
    connect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMoviesInput
    upsert?: UserUpsertWithoutMoviesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMoviesInput, UserUpdateWithoutMoviesInput>, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type MovieGenreUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput> | MovieGenreCreateWithoutMovieInput[] | MovieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutMovieInput | MovieGenreCreateOrConnectWithoutMovieInput[]
    upsert?: MovieGenreUpsertWithWhereUniqueWithoutMovieInput | MovieGenreUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieGenreCreateManyMovieInputEnvelope
    set?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    disconnect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    delete?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    update?: MovieGenreUpdateWithWhereUniqueWithoutMovieInput | MovieGenreUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieGenreUpdateManyWithWhereWithoutMovieInput | MovieGenreUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
  }

  export type ActorsUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ActorsCreateWithoutMoviesInput, ActorsUncheckedCreateWithoutMoviesInput> | ActorsCreateWithoutMoviesInput[] | ActorsUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ActorsCreateOrConnectWithoutMoviesInput | ActorsCreateOrConnectWithoutMoviesInput[]
    upsert?: ActorsUpsertWithWhereUniqueWithoutMoviesInput | ActorsUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
    disconnect?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
    delete?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
    connect?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
    update?: ActorsUpdateWithWhereUniqueWithoutMoviesInput | ActorsUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ActorsUpdateManyWithWhereWithoutMoviesInput | ActorsUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ActorsScalarWhereInput | ActorsScalarWhereInput[]
  }

  export type LikeMoviesUpdateManyWithoutMovieNestedInput = {
    create?: XOR<LikeMoviesCreateWithoutMovieInput, LikeMoviesUncheckedCreateWithoutMovieInput> | LikeMoviesCreateWithoutMovieInput[] | LikeMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikeMoviesCreateOrConnectWithoutMovieInput | LikeMoviesCreateOrConnectWithoutMovieInput[]
    upsert?: LikeMoviesUpsertWithWhereUniqueWithoutMovieInput | LikeMoviesUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: LikeMoviesCreateManyMovieInputEnvelope
    set?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    disconnect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    delete?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    connect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    update?: LikeMoviesUpdateWithWhereUniqueWithoutMovieInput | LikeMoviesUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: LikeMoviesUpdateManyWithWhereWithoutMovieInput | LikeMoviesUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: LikeMoviesScalarWhereInput | LikeMoviesScalarWhereInput[]
  }

  export type MovieGenreUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput> | MovieGenreCreateWithoutMovieInput[] | MovieGenreUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutMovieInput | MovieGenreCreateOrConnectWithoutMovieInput[]
    upsert?: MovieGenreUpsertWithWhereUniqueWithoutMovieInput | MovieGenreUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: MovieGenreCreateManyMovieInputEnvelope
    set?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    disconnect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    delete?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    update?: MovieGenreUpdateWithWhereUniqueWithoutMovieInput | MovieGenreUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: MovieGenreUpdateManyWithWhereWithoutMovieInput | MovieGenreUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
  }

  export type ActorsUncheckedUpdateManyWithoutMoviesNestedInput = {
    create?: XOR<ActorsCreateWithoutMoviesInput, ActorsUncheckedCreateWithoutMoviesInput> | ActorsCreateWithoutMoviesInput[] | ActorsUncheckedCreateWithoutMoviesInput[]
    connectOrCreate?: ActorsCreateOrConnectWithoutMoviesInput | ActorsCreateOrConnectWithoutMoviesInput[]
    upsert?: ActorsUpsertWithWhereUniqueWithoutMoviesInput | ActorsUpsertWithWhereUniqueWithoutMoviesInput[]
    set?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
    disconnect?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
    delete?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
    connect?: ActorsWhereUniqueInput | ActorsWhereUniqueInput[]
    update?: ActorsUpdateWithWhereUniqueWithoutMoviesInput | ActorsUpdateWithWhereUniqueWithoutMoviesInput[]
    updateMany?: ActorsUpdateManyWithWhereWithoutMoviesInput | ActorsUpdateManyWithWhereWithoutMoviesInput[]
    deleteMany?: ActorsScalarWhereInput | ActorsScalarWhereInput[]
  }

  export type LikeMoviesUncheckedUpdateManyWithoutMovieNestedInput = {
    create?: XOR<LikeMoviesCreateWithoutMovieInput, LikeMoviesUncheckedCreateWithoutMovieInput> | LikeMoviesCreateWithoutMovieInput[] | LikeMoviesUncheckedCreateWithoutMovieInput[]
    connectOrCreate?: LikeMoviesCreateOrConnectWithoutMovieInput | LikeMoviesCreateOrConnectWithoutMovieInput[]
    upsert?: LikeMoviesUpsertWithWhereUniqueWithoutMovieInput | LikeMoviesUpsertWithWhereUniqueWithoutMovieInput[]
    createMany?: LikeMoviesCreateManyMovieInputEnvelope
    set?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    disconnect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    delete?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    connect?: LikeMoviesWhereUniqueInput | LikeMoviesWhereUniqueInput[]
    update?: LikeMoviesUpdateWithWhereUniqueWithoutMovieInput | LikeMoviesUpdateWithWhereUniqueWithoutMovieInput[]
    updateMany?: LikeMoviesUpdateManyWithWhereWithoutMovieInput | LikeMoviesUpdateManyWithWhereWithoutMovieInput[]
    deleteMany?: LikeMoviesScalarWhereInput | LikeMoviesScalarWhereInput[]
  }

  export type MovieGenreCreateNestedManyWithoutGenreInput = {
    create?: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput> | MovieGenreCreateWithoutGenreInput[] | MovieGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutGenreInput | MovieGenreCreateOrConnectWithoutGenreInput[]
    createMany?: MovieGenreCreateManyGenreInputEnvelope
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
  }

  export type MovieGenreUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput> | MovieGenreCreateWithoutGenreInput[] | MovieGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutGenreInput | MovieGenreCreateOrConnectWithoutGenreInput[]
    createMany?: MovieGenreCreateManyGenreInputEnvelope
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
  }

  export type MovieGenreUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput> | MovieGenreCreateWithoutGenreInput[] | MovieGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutGenreInput | MovieGenreCreateOrConnectWithoutGenreInput[]
    upsert?: MovieGenreUpsertWithWhereUniqueWithoutGenreInput | MovieGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: MovieGenreCreateManyGenreInputEnvelope
    set?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    disconnect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    delete?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    update?: MovieGenreUpdateWithWhereUniqueWithoutGenreInput | MovieGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MovieGenreUpdateManyWithWhereWithoutGenreInput | MovieGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
  }

  export type MovieGenreUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput> | MovieGenreCreateWithoutGenreInput[] | MovieGenreUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: MovieGenreCreateOrConnectWithoutGenreInput | MovieGenreCreateOrConnectWithoutGenreInput[]
    upsert?: MovieGenreUpsertWithWhereUniqueWithoutGenreInput | MovieGenreUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: MovieGenreCreateManyGenreInputEnvelope
    set?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    disconnect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    delete?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    connect?: MovieGenreWhereUniqueInput | MovieGenreWhereUniqueInput[]
    update?: MovieGenreUpdateWithWhereUniqueWithoutGenreInput | MovieGenreUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: MovieGenreUpdateManyWithWhereWithoutGenreInput | MovieGenreUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
  }

  export type MoviesCreateNestedOneWithoutGenresInput = {
    create?: XOR<MoviesCreateWithoutGenresInput, MoviesUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutGenresInput
    connect?: MoviesWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutMoviesInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput
    connect?: GenreWhereUniqueInput
  }

  export type MoviesUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<MoviesCreateWithoutGenresInput, MoviesUncheckedCreateWithoutGenresInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutGenresInput
    upsert?: MoviesUpsertWithoutGenresInput
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutGenresInput, MoviesUpdateWithoutGenresInput>, MoviesUncheckedUpdateWithoutGenresInput>
  }

  export type GenreUpdateOneRequiredWithoutMoviesNestedInput = {
    create?: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    connectOrCreate?: GenreCreateOrConnectWithoutMoviesInput
    upsert?: GenreUpsertWithoutMoviesInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutMoviesInput, GenreUpdateWithoutMoviesInput>, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type UserCreateNestedOneWithoutLikedByInput = {
    create?: XOR<UserCreateWithoutLikedByInput, UserUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedByInput
    connect?: UserWhereUniqueInput
  }

  export type MoviesCreateNestedOneWithoutLikedByInput = {
    create?: XOR<MoviesCreateWithoutLikedByInput, MoviesUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutLikedByInput
    connect?: MoviesWhereUniqueInput
  }

  export type UserUpdateOneWithoutLikedByNestedInput = {
    create?: XOR<UserCreateWithoutLikedByInput, UserUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedByInput
    upsert?: UserUpsertWithoutLikedByInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedByInput, UserUpdateWithoutLikedByInput>, UserUncheckedUpdateWithoutLikedByInput>
  }

  export type MoviesUpdateOneWithoutLikedByNestedInput = {
    create?: XOR<MoviesCreateWithoutLikedByInput, MoviesUncheckedCreateWithoutLikedByInput>
    connectOrCreate?: MoviesCreateOrConnectWithoutLikedByInput
    upsert?: MoviesUpsertWithoutLikedByInput
    disconnect?: MoviesWhereInput | boolean
    delete?: MoviesWhereInput | boolean
    connect?: MoviesWhereUniqueInput
    update?: XOR<XOR<MoviesUpdateToOneWithWhereWithoutLikedByInput, MoviesUpdateWithoutLikedByInput>, MoviesUncheckedUpdateWithoutLikedByInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MoviesCreateNestedManyWithoutActorsInput = {
    create?: XOR<MoviesCreateWithoutActorsInput, MoviesUncheckedCreateWithoutActorsInput> | MoviesCreateWithoutActorsInput[] | MoviesUncheckedCreateWithoutActorsInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutActorsInput | MoviesCreateOrConnectWithoutActorsInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type MoviesUncheckedCreateNestedManyWithoutActorsInput = {
    create?: XOR<MoviesCreateWithoutActorsInput, MoviesUncheckedCreateWithoutActorsInput> | MoviesCreateWithoutActorsInput[] | MoviesUncheckedCreateWithoutActorsInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutActorsInput | MoviesCreateOrConnectWithoutActorsInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
  }

  export type MoviesUpdateManyWithoutActorsNestedInput = {
    create?: XOR<MoviesCreateWithoutActorsInput, MoviesUncheckedCreateWithoutActorsInput> | MoviesCreateWithoutActorsInput[] | MoviesUncheckedCreateWithoutActorsInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutActorsInput | MoviesCreateOrConnectWithoutActorsInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutActorsInput | MoviesUpsertWithWhereUniqueWithoutActorsInput[]
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutActorsInput | MoviesUpdateWithWhereUniqueWithoutActorsInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutActorsInput | MoviesUpdateManyWithWhereWithoutActorsInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
  }

  export type MoviesUncheckedUpdateManyWithoutActorsNestedInput = {
    create?: XOR<MoviesCreateWithoutActorsInput, MoviesUncheckedCreateWithoutActorsInput> | MoviesCreateWithoutActorsInput[] | MoviesUncheckedCreateWithoutActorsInput[]
    connectOrCreate?: MoviesCreateOrConnectWithoutActorsInput | MoviesCreateOrConnectWithoutActorsInput[]
    upsert?: MoviesUpsertWithWhereUniqueWithoutActorsInput | MoviesUpsertWithWhereUniqueWithoutActorsInput[]
    set?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    disconnect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    delete?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    connect?: MoviesWhereUniqueInput | MoviesWhereUniqueInput[]
    update?: MoviesUpdateWithWhereUniqueWithoutActorsInput | MoviesUpdateWithWhereUniqueWithoutActorsInput[]
    updateMany?: MoviesUpdateManyWithWhereWithoutActorsInput | MoviesUpdateManyWithWhereWithoutActorsInput[]
    deleteMany?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
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

  export type MoviesCreateWithoutUserInput = {
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    genres?: MovieGenreCreateNestedManyWithoutMovieInput
    actors?: ActorsCreateNestedManyWithoutMoviesInput
    likedBy?: LikeMoviesCreateNestedManyWithoutMovieInput
  }

  export type MoviesUncheckedCreateWithoutUserInput = {
    id?: number
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    genres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    actors?: ActorsUncheckedCreateNestedManyWithoutMoviesInput
    likedBy?: LikeMoviesUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MoviesCreateOrConnectWithoutUserInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
  }

  export type MoviesCreateManyUserInputEnvelope = {
    data: MoviesCreateManyUserInput | MoviesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LikeMoviesCreateWithoutUserInput = {
    movie?: MoviesCreateNestedOneWithoutLikedByInput
  }

  export type LikeMoviesUncheckedCreateWithoutUserInput = {
    id?: number
    moviesId?: number | null
  }

  export type LikeMoviesCreateOrConnectWithoutUserInput = {
    where: LikeMoviesWhereUniqueInput
    create: XOR<LikeMoviesCreateWithoutUserInput, LikeMoviesUncheckedCreateWithoutUserInput>
  }

  export type LikeMoviesCreateManyUserInputEnvelope = {
    data: LikeMoviesCreateManyUserInput | LikeMoviesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MoviesUpsertWithWhereUniqueWithoutUserInput = {
    where: MoviesWhereUniqueInput
    update: XOR<MoviesUpdateWithoutUserInput, MoviesUncheckedUpdateWithoutUserInput>
    create: XOR<MoviesCreateWithoutUserInput, MoviesUncheckedCreateWithoutUserInput>
  }

  export type MoviesUpdateWithWhereUniqueWithoutUserInput = {
    where: MoviesWhereUniqueInput
    data: XOR<MoviesUpdateWithoutUserInput, MoviesUncheckedUpdateWithoutUserInput>
  }

  export type MoviesUpdateManyWithWhereWithoutUserInput = {
    where: MoviesScalarWhereInput
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyWithoutUserInput>
  }

  export type MoviesScalarWhereInput = {
    AND?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    OR?: MoviesScalarWhereInput[]
    NOT?: MoviesScalarWhereInput | MoviesScalarWhereInput[]
    id?: IntFilter<"Movies"> | number
    name?: StringFilter<"Movies"> | string
    image?: StringFilter<"Movies"> | string
    sinopsis?: StringFilter<"Movies"> | string
    createAt?: DateTimeFilter<"Movies"> | Date | string
    updateAt?: DateTimeFilter<"Movies"> | Date | string
    userId?: IntFilter<"Movies"> | number
  }

  export type LikeMoviesUpsertWithWhereUniqueWithoutUserInput = {
    where: LikeMoviesWhereUniqueInput
    update: XOR<LikeMoviesUpdateWithoutUserInput, LikeMoviesUncheckedUpdateWithoutUserInput>
    create: XOR<LikeMoviesCreateWithoutUserInput, LikeMoviesUncheckedCreateWithoutUserInput>
  }

  export type LikeMoviesUpdateWithWhereUniqueWithoutUserInput = {
    where: LikeMoviesWhereUniqueInput
    data: XOR<LikeMoviesUpdateWithoutUserInput, LikeMoviesUncheckedUpdateWithoutUserInput>
  }

  export type LikeMoviesUpdateManyWithWhereWithoutUserInput = {
    where: LikeMoviesScalarWhereInput
    data: XOR<LikeMoviesUpdateManyMutationInput, LikeMoviesUncheckedUpdateManyWithoutUserInput>
  }

  export type LikeMoviesScalarWhereInput = {
    AND?: LikeMoviesScalarWhereInput | LikeMoviesScalarWhereInput[]
    OR?: LikeMoviesScalarWhereInput[]
    NOT?: LikeMoviesScalarWhereInput | LikeMoviesScalarWhereInput[]
    id?: IntFilter<"LikeMovies"> | number
    userId?: IntFilter<"LikeMovies"> | number
    moviesId?: IntNullableFilter<"LikeMovies"> | number | null
  }

  export type UserCreateWithoutMoviesInput = {
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    likedBy?: LikeMoviesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    likedBy?: LikeMoviesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMoviesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
  }

  export type MovieGenreCreateWithoutMovieInput = {
    genre: GenreCreateNestedOneWithoutMoviesInput
  }

  export type MovieGenreUncheckedCreateWithoutMovieInput = {
    genreId: number
  }

  export type MovieGenreCreateOrConnectWithoutMovieInput = {
    where: MovieGenreWhereUniqueInput
    create: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput>
  }

  export type MovieGenreCreateManyMovieInputEnvelope = {
    data: MovieGenreCreateManyMovieInput | MovieGenreCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type ActorsCreateWithoutMoviesInput = {
    name: string
    image: string
  }

  export type ActorsUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
    image: string
  }

  export type ActorsCreateOrConnectWithoutMoviesInput = {
    where: ActorsWhereUniqueInput
    create: XOR<ActorsCreateWithoutMoviesInput, ActorsUncheckedCreateWithoutMoviesInput>
  }

  export type LikeMoviesCreateWithoutMovieInput = {
    user?: UserCreateNestedOneWithoutLikedByInput
  }

  export type LikeMoviesUncheckedCreateWithoutMovieInput = {
    id?: number
    userId: number
  }

  export type LikeMoviesCreateOrConnectWithoutMovieInput = {
    where: LikeMoviesWhereUniqueInput
    create: XOR<LikeMoviesCreateWithoutMovieInput, LikeMoviesUncheckedCreateWithoutMovieInput>
  }

  export type LikeMoviesCreateManyMovieInputEnvelope = {
    data: LikeMoviesCreateManyMovieInput | LikeMoviesCreateManyMovieInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutMoviesInput = {
    update: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
    create: XOR<UserCreateWithoutMoviesInput, UserUncheckedCreateWithoutMoviesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMoviesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMoviesInput, UserUncheckedUpdateWithoutMoviesInput>
  }

  export type UserUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikeMoviesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likedBy?: LikeMoviesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MovieGenreUpsertWithWhereUniqueWithoutMovieInput = {
    where: MovieGenreWhereUniqueInput
    update: XOR<MovieGenreUpdateWithoutMovieInput, MovieGenreUncheckedUpdateWithoutMovieInput>
    create: XOR<MovieGenreCreateWithoutMovieInput, MovieGenreUncheckedCreateWithoutMovieInput>
  }

  export type MovieGenreUpdateWithWhereUniqueWithoutMovieInput = {
    where: MovieGenreWhereUniqueInput
    data: XOR<MovieGenreUpdateWithoutMovieInput, MovieGenreUncheckedUpdateWithoutMovieInput>
  }

  export type MovieGenreUpdateManyWithWhereWithoutMovieInput = {
    where: MovieGenreScalarWhereInput
    data: XOR<MovieGenreUpdateManyMutationInput, MovieGenreUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieGenreScalarWhereInput = {
    AND?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
    OR?: MovieGenreScalarWhereInput[]
    NOT?: MovieGenreScalarWhereInput | MovieGenreScalarWhereInput[]
    movieId?: IntFilter<"MovieGenre"> | number
    genreId?: IntFilter<"MovieGenre"> | number
  }

  export type ActorsUpsertWithWhereUniqueWithoutMoviesInput = {
    where: ActorsWhereUniqueInput
    update: XOR<ActorsUpdateWithoutMoviesInput, ActorsUncheckedUpdateWithoutMoviesInput>
    create: XOR<ActorsCreateWithoutMoviesInput, ActorsUncheckedCreateWithoutMoviesInput>
  }

  export type ActorsUpdateWithWhereUniqueWithoutMoviesInput = {
    where: ActorsWhereUniqueInput
    data: XOR<ActorsUpdateWithoutMoviesInput, ActorsUncheckedUpdateWithoutMoviesInput>
  }

  export type ActorsUpdateManyWithWhereWithoutMoviesInput = {
    where: ActorsScalarWhereInput
    data: XOR<ActorsUpdateManyMutationInput, ActorsUncheckedUpdateManyWithoutMoviesInput>
  }

  export type ActorsScalarWhereInput = {
    AND?: ActorsScalarWhereInput | ActorsScalarWhereInput[]
    OR?: ActorsScalarWhereInput[]
    NOT?: ActorsScalarWhereInput | ActorsScalarWhereInput[]
    id?: IntFilter<"Actors"> | number
    name?: StringFilter<"Actors"> | string
    image?: StringFilter<"Actors"> | string
  }

  export type LikeMoviesUpsertWithWhereUniqueWithoutMovieInput = {
    where: LikeMoviesWhereUniqueInput
    update: XOR<LikeMoviesUpdateWithoutMovieInput, LikeMoviesUncheckedUpdateWithoutMovieInput>
    create: XOR<LikeMoviesCreateWithoutMovieInput, LikeMoviesUncheckedCreateWithoutMovieInput>
  }

  export type LikeMoviesUpdateWithWhereUniqueWithoutMovieInput = {
    where: LikeMoviesWhereUniqueInput
    data: XOR<LikeMoviesUpdateWithoutMovieInput, LikeMoviesUncheckedUpdateWithoutMovieInput>
  }

  export type LikeMoviesUpdateManyWithWhereWithoutMovieInput = {
    where: LikeMoviesScalarWhereInput
    data: XOR<LikeMoviesUpdateManyMutationInput, LikeMoviesUncheckedUpdateManyWithoutMovieInput>
  }

  export type MovieGenreCreateWithoutGenreInput = {
    movie: MoviesCreateNestedOneWithoutGenresInput
  }

  export type MovieGenreUncheckedCreateWithoutGenreInput = {
    movieId: number
  }

  export type MovieGenreCreateOrConnectWithoutGenreInput = {
    where: MovieGenreWhereUniqueInput
    create: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput>
  }

  export type MovieGenreCreateManyGenreInputEnvelope = {
    data: MovieGenreCreateManyGenreInput | MovieGenreCreateManyGenreInput[]
    skipDuplicates?: boolean
  }

  export type MovieGenreUpsertWithWhereUniqueWithoutGenreInput = {
    where: MovieGenreWhereUniqueInput
    update: XOR<MovieGenreUpdateWithoutGenreInput, MovieGenreUncheckedUpdateWithoutGenreInput>
    create: XOR<MovieGenreCreateWithoutGenreInput, MovieGenreUncheckedCreateWithoutGenreInput>
  }

  export type MovieGenreUpdateWithWhereUniqueWithoutGenreInput = {
    where: MovieGenreWhereUniqueInput
    data: XOR<MovieGenreUpdateWithoutGenreInput, MovieGenreUncheckedUpdateWithoutGenreInput>
  }

  export type MovieGenreUpdateManyWithWhereWithoutGenreInput = {
    where: MovieGenreScalarWhereInput
    data: XOR<MovieGenreUpdateManyMutationInput, MovieGenreUncheckedUpdateManyWithoutGenreInput>
  }

  export type MoviesCreateWithoutGenresInput = {
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutMoviesInput
    actors?: ActorsCreateNestedManyWithoutMoviesInput
    likedBy?: LikeMoviesCreateNestedManyWithoutMovieInput
  }

  export type MoviesUncheckedCreateWithoutGenresInput = {
    id?: number
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
    actors?: ActorsUncheckedCreateNestedManyWithoutMoviesInput
    likedBy?: LikeMoviesUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MoviesCreateOrConnectWithoutGenresInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutGenresInput, MoviesUncheckedCreateWithoutGenresInput>
  }

  export type GenreCreateWithoutMoviesInput = {
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type GenreUncheckedCreateWithoutMoviesInput = {
    id?: number
    name: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type GenreCreateOrConnectWithoutMoviesInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
  }

  export type MoviesUpsertWithoutGenresInput = {
    update: XOR<MoviesUpdateWithoutGenresInput, MoviesUncheckedUpdateWithoutGenresInput>
    create: XOR<MoviesCreateWithoutGenresInput, MoviesUncheckedCreateWithoutGenresInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutGenresInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutGenresInput, MoviesUncheckedUpdateWithoutGenresInput>
  }

  export type MoviesUpdateWithoutGenresInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput
    actors?: ActorsUpdateManyWithoutMoviesNestedInput
    likedBy?: LikeMoviesUpdateManyWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    actors?: ActorsUncheckedUpdateManyWithoutMoviesNestedInput
    likedBy?: LikeMoviesUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type GenreUpsertWithoutMoviesInput = {
    update: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
    create: XOR<GenreCreateWithoutMoviesInput, GenreUncheckedCreateWithoutMoviesInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutMoviesInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutMoviesInput, GenreUncheckedUpdateWithoutMoviesInput>
  }

  export type GenreUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GenreUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutLikedByInput = {
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    movies?: MoviesCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedByInput = {
    id?: number
    name: string
    email: string
    password: string
    createAt?: Date | string
    updateAt?: Date | string
    movies?: MoviesUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedByInput, UserUncheckedCreateWithoutLikedByInput>
  }

  export type MoviesCreateWithoutLikedByInput = {
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutMoviesInput
    genres?: MovieGenreCreateNestedManyWithoutMovieInput
    actors?: ActorsCreateNestedManyWithoutMoviesInput
  }

  export type MoviesUncheckedCreateWithoutLikedByInput = {
    id?: number
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
    genres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    actors?: ActorsUncheckedCreateNestedManyWithoutMoviesInput
  }

  export type MoviesCreateOrConnectWithoutLikedByInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutLikedByInput, MoviesUncheckedCreateWithoutLikedByInput>
  }

  export type UserUpsertWithoutLikedByInput = {
    update: XOR<UserUpdateWithoutLikedByInput, UserUncheckedUpdateWithoutLikedByInput>
    create: XOR<UserCreateWithoutLikedByInput, UserUncheckedCreateWithoutLikedByInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedByInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedByInput, UserUncheckedUpdateWithoutLikedByInput>
  }

  export type UserUpdateWithoutLikedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    movies?: MoviesUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MoviesUpsertWithoutLikedByInput = {
    update: XOR<MoviesUpdateWithoutLikedByInput, MoviesUncheckedUpdateWithoutLikedByInput>
    create: XOR<MoviesCreateWithoutLikedByInput, MoviesUncheckedCreateWithoutLikedByInput>
    where?: MoviesWhereInput
  }

  export type MoviesUpdateToOneWithWhereWithoutLikedByInput = {
    where?: MoviesWhereInput
    data: XOR<MoviesUpdateWithoutLikedByInput, MoviesUncheckedUpdateWithoutLikedByInput>
  }

  export type MoviesUpdateWithoutLikedByInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput
    genres?: MovieGenreUpdateManyWithoutMovieNestedInput
    actors?: ActorsUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesUncheckedUpdateWithoutLikedByInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    genres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    actors?: ActorsUncheckedUpdateManyWithoutMoviesNestedInput
  }

  export type MoviesCreateWithoutActorsInput = {
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    user: UserCreateNestedOneWithoutMoviesInput
    genres?: MovieGenreCreateNestedManyWithoutMovieInput
    likedBy?: LikeMoviesCreateNestedManyWithoutMovieInput
  }

  export type MoviesUncheckedCreateWithoutActorsInput = {
    id?: number
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
    userId: number
    genres?: MovieGenreUncheckedCreateNestedManyWithoutMovieInput
    likedBy?: LikeMoviesUncheckedCreateNestedManyWithoutMovieInput
  }

  export type MoviesCreateOrConnectWithoutActorsInput = {
    where: MoviesWhereUniqueInput
    create: XOR<MoviesCreateWithoutActorsInput, MoviesUncheckedCreateWithoutActorsInput>
  }

  export type MoviesUpsertWithWhereUniqueWithoutActorsInput = {
    where: MoviesWhereUniqueInput
    update: XOR<MoviesUpdateWithoutActorsInput, MoviesUncheckedUpdateWithoutActorsInput>
    create: XOR<MoviesCreateWithoutActorsInput, MoviesUncheckedCreateWithoutActorsInput>
  }

  export type MoviesUpdateWithWhereUniqueWithoutActorsInput = {
    where: MoviesWhereUniqueInput
    data: XOR<MoviesUpdateWithoutActorsInput, MoviesUncheckedUpdateWithoutActorsInput>
  }

  export type MoviesUpdateManyWithWhereWithoutActorsInput = {
    where: MoviesScalarWhereInput
    data: XOR<MoviesUpdateManyMutationInput, MoviesUncheckedUpdateManyWithoutActorsInput>
  }

  export type MoviesCreateManyUserInput = {
    id?: number
    name: string
    image: string
    sinopsis: string
    createAt?: Date | string
    updateAt?: Date | string
  }

  export type LikeMoviesCreateManyUserInput = {
    id?: number
    moviesId?: number | null
  }

  export type MoviesUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: MovieGenreUpdateManyWithoutMovieNestedInput
    actors?: ActorsUpdateManyWithoutMoviesNestedInput
    likedBy?: LikeMoviesUpdateManyWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    genres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    actors?: ActorsUncheckedUpdateManyWithoutMoviesNestedInput
    likedBy?: LikeMoviesUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LikeMoviesUpdateWithoutUserInput = {
    movie?: MoviesUpdateOneWithoutLikedByNestedInput
  }

  export type LikeMoviesUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    moviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type LikeMoviesUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    moviesId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type MovieGenreCreateManyMovieInput = {
    genreId: number
  }

  export type LikeMoviesCreateManyMovieInput = {
    id?: number
    userId: number
  }

  export type MovieGenreUpdateWithoutMovieInput = {
    genre?: GenreUpdateOneRequiredWithoutMoviesNestedInput
  }

  export type MovieGenreUncheckedUpdateWithoutMovieInput = {
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieGenreUncheckedUpdateManyWithoutMovieInput = {
    genreId?: IntFieldUpdateOperationsInput | number
  }

  export type ActorsUpdateWithoutMoviesInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsUncheckedUpdateWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ActorsUncheckedUpdateManyWithoutMoviesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type LikeMoviesUpdateWithoutMovieInput = {
    user?: UserUpdateOneWithoutLikedByNestedInput
  }

  export type LikeMoviesUncheckedUpdateWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type LikeMoviesUncheckedUpdateManyWithoutMovieInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieGenreCreateManyGenreInput = {
    movieId: number
  }

  export type MovieGenreUpdateWithoutGenreInput = {
    movie?: MoviesUpdateOneRequiredWithoutGenresNestedInput
  }

  export type MovieGenreUncheckedUpdateWithoutGenreInput = {
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type MovieGenreUncheckedUpdateManyWithoutGenreInput = {
    movieId?: IntFieldUpdateOperationsInput | number
  }

  export type MoviesUpdateWithoutActorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutMoviesNestedInput
    genres?: MovieGenreUpdateManyWithoutMovieNestedInput
    likedBy?: LikeMoviesUpdateManyWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateWithoutActorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    genres?: MovieGenreUncheckedUpdateManyWithoutMovieNestedInput
    likedBy?: LikeMoviesUncheckedUpdateManyWithoutMovieNestedInput
  }

  export type MoviesUncheckedUpdateManyWithoutActorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    sinopsis?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updateAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MoviesCountOutputTypeDefaultArgs instead
     */
    export type MoviesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MoviesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreCountOutputTypeDefaultArgs instead
     */
    export type GenreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActorsCountOutputTypeDefaultArgs instead
     */
    export type ActorsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActorsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MoviesDefaultArgs instead
     */
    export type MoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MoviesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreDefaultArgs instead
     */
    export type GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovieGenreDefaultArgs instead
     */
    export type MovieGenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovieGenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use LikeMoviesDefaultArgs instead
     */
    export type LikeMoviesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = LikeMoviesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ActorsDefaultArgs instead
     */
    export type ActorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ActorsDefaultArgs<ExtArgs>

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