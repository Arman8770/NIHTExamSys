
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Batch
 * 
 */
export type Batch = $Result.DefaultSelection<Prisma.$BatchPayload>
/**
 * Model BatchAssignment
 * 
 */
export type BatchAssignment = $Result.DefaultSelection<Prisma.$BatchAssignmentPayload>
/**
 * Model ExamAssignment
 * 
 */
export type ExamAssignment = $Result.DefaultSelection<Prisma.$ExamAssignmentPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Result
 * 
 */
export type Result = $Result.DefaultSelection<Prisma.$ResultPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  TEACHER: 'TEACHER',
  STUDENT: 'STUDENT',
  NONE: 'NONE'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

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
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batch`: Exposes CRUD operations for the **Batch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Batches
    * const batches = await prisma.batch.findMany()
    * ```
    */
  get batch(): Prisma.BatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.batchAssignment`: Exposes CRUD operations for the **BatchAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more BatchAssignments
    * const batchAssignments = await prisma.batchAssignment.findMany()
    * ```
    */
  get batchAssignment(): Prisma.BatchAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.examAssignment`: Exposes CRUD operations for the **ExamAssignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExamAssignments
    * const examAssignments = await prisma.examAssignment.findMany()
    * ```
    */
  get examAssignment(): Prisma.ExamAssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.result`: Exposes CRUD operations for the **Result** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Results
    * const results = await prisma.result.findMany()
    * ```
    */
  get result(): Prisma.ResultDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.2.0
   * Query Engine version: 0c8ef2ce45c83248ab3df073180d5eda9e8be7a3
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
    User: 'User',
    Exam: 'Exam',
    Batch: 'Batch',
    BatchAssignment: 'BatchAssignment',
    ExamAssignment: 'ExamAssignment',
    Question: 'Question',
    Result: 'Result',
    Otp: 'Otp'
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
      modelProps: "user" | "exam" | "batch" | "batchAssignment" | "examAssignment" | "question" | "result" | "otp"
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
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Batch: {
        payload: Prisma.$BatchPayload<ExtArgs>
        fields: Prisma.BatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findFirst: {
            args: Prisma.BatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          findMany: {
            args: Prisma.BatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>[]
          }
          create: {
            args: Prisma.BatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          createMany: {
            args: Prisma.BatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          update: {
            args: Prisma.BatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          deleteMany: {
            args: Prisma.BatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchPayload>
          }
          aggregate: {
            args: Prisma.BatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatch>
          }
          groupBy: {
            args: Prisma.BatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchCountArgs<ExtArgs>
            result: $Utils.Optional<BatchCountAggregateOutputType> | number
          }
        }
      }
      BatchAssignment: {
        payload: Prisma.$BatchAssignmentPayload<ExtArgs>
        fields: Prisma.BatchAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BatchAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BatchAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload>
          }
          findFirst: {
            args: Prisma.BatchAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BatchAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload>
          }
          findMany: {
            args: Prisma.BatchAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload>[]
          }
          create: {
            args: Prisma.BatchAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload>
          }
          createMany: {
            args: Prisma.BatchAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BatchAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload>
          }
          update: {
            args: Prisma.BatchAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.BatchAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BatchAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BatchAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BatchAssignmentPayload>
          }
          aggregate: {
            args: Prisma.BatchAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBatchAssignment>
          }
          groupBy: {
            args: Prisma.BatchAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<BatchAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.BatchAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<BatchAssignmentCountAggregateOutputType> | number
          }
        }
      }
      ExamAssignment: {
        payload: Prisma.$ExamAssignmentPayload<ExtArgs>
        fields: Prisma.ExamAssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamAssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamAssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          findFirst: {
            args: Prisma.ExamAssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamAssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          findMany: {
            args: Prisma.ExamAssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>[]
          }
          create: {
            args: Prisma.ExamAssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          createMany: {
            args: Prisma.ExamAssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ExamAssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          update: {
            args: Prisma.ExamAssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          deleteMany: {
            args: Prisma.ExamAssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamAssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamAssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamAssignmentPayload>
          }
          aggregate: {
            args: Prisma.ExamAssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExamAssignment>
          }
          groupBy: {
            args: Prisma.ExamAssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamAssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamAssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<ExamAssignmentCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Result: {
        payload: Prisma.$ResultPayload<ExtArgs>
        fields: Prisma.ResultFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ResultFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ResultFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findFirst: {
            args: Prisma.ResultFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ResultFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          findMany: {
            args: Prisma.ResultFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>[]
          }
          create: {
            args: Prisma.ResultCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          createMany: {
            args: Prisma.ResultCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ResultDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          update: {
            args: Prisma.ResultUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          deleteMany: {
            args: Prisma.ResultDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ResultUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ResultUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ResultPayload>
          }
          aggregate: {
            args: Prisma.ResultAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateResult>
          }
          groupBy: {
            args: Prisma.ResultGroupByArgs<ExtArgs>
            result: $Utils.Optional<ResultGroupByOutputType>[]
          }
          count: {
            args: Prisma.ResultCountArgs<ExtArgs>
            result: $Utils.Optional<ResultCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
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
    user?: UserOmit
    exam?: ExamOmit
    batch?: BatchOmit
    batchAssignment?: BatchAssignmentOmit
    examAssignment?: ExamAssignmentOmit
    question?: QuestionOmit
    result?: ResultOmit
    otp?: OtpOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    examsCreated: number
    assignedExams: number
    results: number
    batchesCreated: number
    assignedBatches: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examsCreated?: boolean | UserCountOutputTypeCountExamsCreatedArgs
    assignedExams?: boolean | UserCountOutputTypeCountAssignedExamsArgs
    results?: boolean | UserCountOutputTypeCountResultsArgs
    batchesCreated?: boolean | UserCountOutputTypeCountBatchesCreatedArgs
    assignedBatches?: boolean | UserCountOutputTypeCountAssignedBatchesArgs
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
  export type UserCountOutputTypeCountExamsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBatchesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignedBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchAssignmentWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    assignments: number
    questions: number
    results: number
    batches: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignments?: boolean | ExamCountOutputTypeCountAssignmentsArgs
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
    results?: boolean | ExamCountOutputTypeCountResultsArgs
    batches?: boolean | ExamCountOutputTypeCountBatchesArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAssignmentWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountResultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
  }


  /**
   * Count Type BatchCountOutputType
   */

  export type BatchCountOutputType = {
    students: number
    exams: number
    assignments: number
  }

  export type BatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    students?: boolean | BatchCountOutputTypeCountStudentsArgs
    exams?: boolean | BatchCountOutputTypeCountExamsArgs
    assignments?: boolean | BatchCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchCountOutputType
     */
    select?: BatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountStudentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
  }

  /**
   * BatchCountOutputType without action
   */
  export type BatchCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchAssignmentWhereInput
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
    phoneNumber: number | null
    profileUpdateCount: number | null
  }

  export type UserSumAggregateOutputType = {
    phoneNumber: bigint | null
    profileUpdateCount: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    city: string | null
    phoneNumber: bigint | null
    requestedRole: string | null
    profileUpdateCount: number | null
    batchId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    city: string | null
    phoneNumber: bigint | null
    requestedRole: string | null
    profileUpdateCount: number | null
    batchId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    city: number
    phoneNumber: number
    requestedRole: number
    profileUpdateCount: number
    batchId: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    phoneNumber?: true
    profileUpdateCount?: true
  }

  export type UserSumAggregateInputType = {
    phoneNumber?: true
    profileUpdateCount?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    city?: true
    phoneNumber?: true
    requestedRole?: true
    profileUpdateCount?: true
    batchId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    city?: true
    phoneNumber?: true
    requestedRole?: true
    profileUpdateCount?: true
    batchId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    city?: true
    phoneNumber?: true
    requestedRole?: true
    profileUpdateCount?: true
    batchId?: true
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
    name: string
    email: string
    password: string
    role: $Enums.Role
    city: string | null
    phoneNumber: bigint | null
    requestedRole: string | null
    profileUpdateCount: number
    batchId: string | null
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
    role?: boolean
    city?: boolean
    phoneNumber?: boolean
    requestedRole?: boolean
    profileUpdateCount?: boolean
    batchId?: boolean
    examsCreated?: boolean | User$examsCreatedArgs<ExtArgs>
    assignedExams?: boolean | User$assignedExamsArgs<ExtArgs>
    results?: boolean | User$resultsArgs<ExtArgs>
    batchesCreated?: boolean | User$batchesCreatedArgs<ExtArgs>
    assignedBatches?: boolean | User$assignedBatchesArgs<ExtArgs>
    batch?: boolean | User$batchArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    city?: boolean
    phoneNumber?: boolean
    requestedRole?: boolean
    profileUpdateCount?: boolean
    batchId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "city" | "phoneNumber" | "requestedRole" | "profileUpdateCount" | "batchId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    examsCreated?: boolean | User$examsCreatedArgs<ExtArgs>
    assignedExams?: boolean | User$assignedExamsArgs<ExtArgs>
    results?: boolean | User$resultsArgs<ExtArgs>
    batchesCreated?: boolean | User$batchesCreatedArgs<ExtArgs>
    assignedBatches?: boolean | User$assignedBatchesArgs<ExtArgs>
    batch?: boolean | User$batchArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      examsCreated: Prisma.$ExamPayload<ExtArgs>[]
      assignedExams: Prisma.$ExamAssignmentPayload<ExtArgs>[]
      results: Prisma.$ResultPayload<ExtArgs>[]
      batchesCreated: Prisma.$BatchPayload<ExtArgs>[]
      assignedBatches: Prisma.$BatchAssignmentPayload<ExtArgs>[]
      batch: Prisma.$BatchPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      city: string | null
      phoneNumber: bigint | null
      requestedRole: string | null
      profileUpdateCount: number
      batchId: string | null
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
    examsCreated<T extends User$examsCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$examsCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedExams<T extends User$assignedExamsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedExamsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends User$resultsArgs<ExtArgs> = {}>(args?: Subset<T, User$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batchesCreated<T extends User$batchesCreatedArgs<ExtArgs> = {}>(args?: Subset<T, User$batchesCreatedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignedBatches<T extends User$assignedBatchesArgs<ExtArgs> = {}>(args?: Subset<T, User$assignedBatchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batch<T extends User$batchArgs<ExtArgs> = {}>(args?: Subset<T, User$batchArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly city: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'BigInt'>
    readonly requestedRole: FieldRef<"User", 'String'>
    readonly profileUpdateCount: FieldRef<"User", 'Int'>
    readonly batchId: FieldRef<"User", 'String'>
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
   * User.examsCreated
   */
  export type User$examsCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * User.assignedExams
   */
  export type User$assignedExamsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    where?: ExamAssignmentWhereInput
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    cursor?: ExamAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * User.results
   */
  export type User$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * User.batchesCreated
   */
  export type User$batchesCreatedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * User.assignedBatches
   */
  export type User$assignedBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    where?: BatchAssignmentWhereInput
    orderBy?: BatchAssignmentOrderByWithRelationInput | BatchAssignmentOrderByWithRelationInput[]
    cursor?: BatchAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchAssignmentScalarFieldEnum | BatchAssignmentScalarFieldEnum[]
  }

  /**
   * User.batch
   */
  export type User$batchArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
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
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    timeLimit: number | null
  }

  export type ExamSumAggregateOutputType = {
    timeLimit: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    timeLimit: number | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    title: string | null
    description: string | null
    timeLimit: number | null
    teacherId: string | null
    createdAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    title: number
    description: number
    timeLimit: number
    teacherId: number
    createdAt: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    timeLimit?: true
  }

  export type ExamSumAggregateInputType = {
    timeLimit?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timeLimit?: true
    teacherId?: true
    createdAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timeLimit?: true
    teacherId?: true
    createdAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    title?: true
    description?: true
    timeLimit?: true
    teacherId?: true
    createdAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    title: string
    description: string
    timeLimit: number
    teacherId: string
    createdAt: Date
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    description?: boolean
    timeLimit?: boolean
    teacherId?: boolean
    createdAt?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Exam$assignmentsArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    results?: boolean | Exam$resultsArgs<ExtArgs>
    batches?: boolean | Exam$batchesArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>



  export type ExamSelectScalar = {
    id?: boolean
    title?: boolean
    description?: boolean
    timeLimit?: boolean
    teacherId?: boolean
    createdAt?: boolean
  }

  export type ExamOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "description" | "timeLimit" | "teacherId" | "createdAt", ExtArgs["result"]["exam"]>
  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    assignments?: boolean | Exam$assignmentsArgs<ExtArgs>
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    results?: boolean | Exam$resultsArgs<ExtArgs>
    batches?: boolean | Exam$batchesArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      assignments: Prisma.$ExamAssignmentPayload<ExtArgs>[]
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      results: Prisma.$ResultPayload<ExtArgs>[]
      batches: Prisma.$BatchPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      description: string
      timeLimit: number
      teacherId: string
      createdAt: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
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
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignments<T extends Exam$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    results<T extends Exam$resultsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$resultsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    batches<T extends Exam$batchesArgs<ExtArgs> = {}>(args?: Subset<T, Exam$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Exam model
   */
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly description: FieldRef<"Exam", 'String'>
    readonly timeLimit: FieldRef<"Exam", 'Int'>
    readonly teacherId: FieldRef<"Exam", 'String'>
    readonly createdAt: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to update.
     */
    limit?: number
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
    /**
     * Limit how many Exams to delete.
     */
    limit?: number
  }

  /**
   * Exam.assignments
   */
  export type Exam$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    where?: ExamAssignmentWhereInput
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    cursor?: ExamAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Exam.results
   */
  export type Exam$resultsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    cursor?: ResultWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Exam.batches
   */
  export type Exam$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    cursor?: BatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Batch
   */

  export type AggregateBatch = {
    _count: BatchCountAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  export type BatchMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    creatorId: string | null
    createdAt: Date | null
  }

  export type BatchMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    creatorId: string | null
    createdAt: Date | null
  }

  export type BatchCountAggregateOutputType = {
    id: number
    name: number
    description: number
    creatorId: number
    createdAt: number
    _all: number
  }


  export type BatchMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
  }

  export type BatchMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
  }

  export type BatchCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    creatorId?: true
    createdAt?: true
    _all?: true
  }

  export type BatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batch to aggregate.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Batches
    **/
    _count?: true | BatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchMaxAggregateInputType
  }

  export type GetBatchAggregateType<T extends BatchAggregateArgs> = {
        [P in keyof T & keyof AggregateBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatch[P]>
      : GetScalarType<T[P], AggregateBatch[P]>
  }




  export type BatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchWhereInput
    orderBy?: BatchOrderByWithAggregationInput | BatchOrderByWithAggregationInput[]
    by: BatchScalarFieldEnum[] | BatchScalarFieldEnum
    having?: BatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchCountAggregateInputType | true
    _min?: BatchMinAggregateInputType
    _max?: BatchMaxAggregateInputType
  }

  export type BatchGroupByOutputType = {
    id: string
    name: string
    description: string | null
    creatorId: string | null
    createdAt: Date
    _count: BatchCountAggregateOutputType | null
    _min: BatchMinAggregateOutputType | null
    _max: BatchMaxAggregateOutputType | null
  }

  type GetBatchGroupByPayload<T extends BatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchGroupByOutputType[P]>
            : GetScalarType<T[P], BatchGroupByOutputType[P]>
        }
      >
    >


  export type BatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    createdAt?: boolean
    creator?: boolean | Batch$creatorArgs<ExtArgs>
    students?: boolean | Batch$studentsArgs<ExtArgs>
    exams?: boolean | Batch$examsArgs<ExtArgs>
    assignments?: boolean | Batch$assignmentsArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batch"]>



  export type BatchSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    creatorId?: boolean
    createdAt?: boolean
  }

  export type BatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "creatorId" | "createdAt", ExtArgs["result"]["batch"]>
  export type BatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | Batch$creatorArgs<ExtArgs>
    students?: boolean | Batch$studentsArgs<ExtArgs>
    exams?: boolean | Batch$examsArgs<ExtArgs>
    assignments?: boolean | Batch$assignmentsArgs<ExtArgs>
    _count?: boolean | BatchCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $BatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Batch"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs> | null
      students: Prisma.$UserPayload<ExtArgs>[]
      exams: Prisma.$ExamPayload<ExtArgs>[]
      assignments: Prisma.$BatchAssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      creatorId: string | null
      createdAt: Date
    }, ExtArgs["result"]["batch"]>
    composites: {}
  }

  type BatchGetPayload<S extends boolean | null | undefined | BatchDefaultArgs> = $Result.GetResult<Prisma.$BatchPayload, S>

  type BatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchCountAggregateInputType | true
    }

  export interface BatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Batch'], meta: { name: 'Batch' } }
    /**
     * Find zero or one Batch that matches the filter.
     * @param {BatchFindUniqueArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchFindUniqueArgs>(args: SelectSubset<T, BatchFindUniqueArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Batch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchFindUniqueOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchFindFirstArgs>(args?: SelectSubset<T, BatchFindFirstArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Batch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindFirstOrThrowArgs} args - Arguments to find a Batch
     * @example
     * // Get one Batch
     * const batch = await prisma.batch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Batches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Batches
     * const batches = await prisma.batch.findMany()
     * 
     * // Get first 10 Batches
     * const batches = await prisma.batch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchWithIdOnly = await prisma.batch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchFindManyArgs>(args?: SelectSubset<T, BatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Batch.
     * @param {BatchCreateArgs} args - Arguments to create a Batch.
     * @example
     * // Create one Batch
     * const Batch = await prisma.batch.create({
     *   data: {
     *     // ... data to create a Batch
     *   }
     * })
     * 
     */
    create<T extends BatchCreateArgs>(args: SelectSubset<T, BatchCreateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Batches.
     * @param {BatchCreateManyArgs} args - Arguments to create many Batches.
     * @example
     * // Create many Batches
     * const batch = await prisma.batch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchCreateManyArgs>(args?: SelectSubset<T, BatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Batch.
     * @param {BatchDeleteArgs} args - Arguments to delete one Batch.
     * @example
     * // Delete one Batch
     * const Batch = await prisma.batch.delete({
     *   where: {
     *     // ... filter to delete one Batch
     *   }
     * })
     * 
     */
    delete<T extends BatchDeleteArgs>(args: SelectSubset<T, BatchDeleteArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Batch.
     * @param {BatchUpdateArgs} args - Arguments to update one Batch.
     * @example
     * // Update one Batch
     * const batch = await prisma.batch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchUpdateArgs>(args: SelectSubset<T, BatchUpdateArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Batches.
     * @param {BatchDeleteManyArgs} args - Arguments to filter Batches to delete.
     * @example
     * // Delete a few Batches
     * const { count } = await prisma.batch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchDeleteManyArgs>(args?: SelectSubset<T, BatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Batches
     * const batch = await prisma.batch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchUpdateManyArgs>(args: SelectSubset<T, BatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Batch.
     * @param {BatchUpsertArgs} args - Arguments to update or create a Batch.
     * @example
     * // Update or create a Batch
     * const batch = await prisma.batch.upsert({
     *   create: {
     *     // ... data to create a Batch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Batch we want to update
     *   }
     * })
     */
    upsert<T extends BatchUpsertArgs>(args: SelectSubset<T, BatchUpsertArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Batches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchCountArgs} args - Arguments to filter Batches to count.
     * @example
     * // Count the number of Batches
     * const count = await prisma.batch.count({
     *   where: {
     *     // ... the filter for the Batches we want to count
     *   }
     * })
    **/
    count<T extends BatchCountArgs>(
      args?: Subset<T, BatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchAggregateArgs>(args: Subset<T, BatchAggregateArgs>): Prisma.PrismaPromise<GetBatchAggregateType<T>>

    /**
     * Group by Batch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchGroupByArgs} args - Group by arguments.
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
      T extends BatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchGroupByArgs['orderBy'] }
        : { orderBy?: BatchGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Batch model
   */
  readonly fields: BatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Batch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends Batch$creatorArgs<ExtArgs> = {}>(args?: Subset<T, Batch$creatorArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    students<T extends Batch$studentsArgs<ExtArgs> = {}>(args?: Subset<T, Batch$studentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    exams<T extends Batch$examsArgs<ExtArgs> = {}>(args?: Subset<T, Batch$examsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Batch$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Batch$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Batch model
   */
  interface BatchFieldRefs {
    readonly id: FieldRef<"Batch", 'String'>
    readonly name: FieldRef<"Batch", 'String'>
    readonly description: FieldRef<"Batch", 'String'>
    readonly creatorId: FieldRef<"Batch", 'String'>
    readonly createdAt: FieldRef<"Batch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Batch findUnique
   */
  export type BatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findUniqueOrThrow
   */
  export type BatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch findFirst
   */
  export type BatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findFirstOrThrow
   */
  export type BatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batch to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Batches.
     */
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch findMany
   */
  export type BatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter, which Batches to fetch.
     */
    where?: BatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Batches to fetch.
     */
    orderBy?: BatchOrderByWithRelationInput | BatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Batches.
     */
    cursor?: BatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Batches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Batches.
     */
    skip?: number
    distinct?: BatchScalarFieldEnum | BatchScalarFieldEnum[]
  }

  /**
   * Batch create
   */
  export type BatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to create a Batch.
     */
    data: XOR<BatchCreateInput, BatchUncheckedCreateInput>
  }

  /**
   * Batch createMany
   */
  export type BatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Batches.
     */
    data: BatchCreateManyInput | BatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Batch update
   */
  export type BatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The data needed to update a Batch.
     */
    data: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
    /**
     * Choose, which Batch to update.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch updateMany
   */
  export type BatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Batches.
     */
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyInput>
    /**
     * Filter which Batches to update
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to update.
     */
    limit?: number
  }

  /**
   * Batch upsert
   */
  export type BatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * The filter to search for the Batch to update in case it exists.
     */
    where: BatchWhereUniqueInput
    /**
     * In case the Batch found by the `where` argument doesn't exist, create a new Batch with this data.
     */
    create: XOR<BatchCreateInput, BatchUncheckedCreateInput>
    /**
     * In case the Batch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchUpdateInput, BatchUncheckedUpdateInput>
  }

  /**
   * Batch delete
   */
  export type BatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
    /**
     * Filter which Batch to delete.
     */
    where: BatchWhereUniqueInput
  }

  /**
   * Batch deleteMany
   */
  export type BatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Batches to delete
     */
    where?: BatchWhereInput
    /**
     * Limit how many Batches to delete.
     */
    limit?: number
  }

  /**
   * Batch.creator
   */
  export type Batch$creatorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Batch.students
   */
  export type Batch$studentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Batch.exams
   */
  export type Batch$examsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Exam
     */
    omit?: ExamOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    cursor?: ExamWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Batch.assignments
   */
  export type Batch$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    where?: BatchAssignmentWhereInput
    orderBy?: BatchAssignmentOrderByWithRelationInput | BatchAssignmentOrderByWithRelationInput[]
    cursor?: BatchAssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BatchAssignmentScalarFieldEnum | BatchAssignmentScalarFieldEnum[]
  }

  /**
   * Batch without action
   */
  export type BatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Batch
     */
    select?: BatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Batch
     */
    omit?: BatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchInclude<ExtArgs> | null
  }


  /**
   * Model BatchAssignment
   */

  export type AggregateBatchAssignment = {
    _count: BatchAssignmentCountAggregateOutputType | null
    _min: BatchAssignmentMinAggregateOutputType | null
    _max: BatchAssignmentMaxAggregateOutputType | null
  }

  export type BatchAssignmentMinAggregateOutputType = {
    id: string | null
    batchId: string | null
    teacherId: string | null
    assignedAt: Date | null
  }

  export type BatchAssignmentMaxAggregateOutputType = {
    id: string | null
    batchId: string | null
    teacherId: string | null
    assignedAt: Date | null
  }

  export type BatchAssignmentCountAggregateOutputType = {
    id: number
    batchId: number
    teacherId: number
    assignedAt: number
    _all: number
  }


  export type BatchAssignmentMinAggregateInputType = {
    id?: true
    batchId?: true
    teacherId?: true
    assignedAt?: true
  }

  export type BatchAssignmentMaxAggregateInputType = {
    id?: true
    batchId?: true
    teacherId?: true
    assignedAt?: true
  }

  export type BatchAssignmentCountAggregateInputType = {
    id?: true
    batchId?: true
    teacherId?: true
    assignedAt?: true
    _all?: true
  }

  export type BatchAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchAssignment to aggregate.
     */
    where?: BatchAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchAssignments to fetch.
     */
    orderBy?: BatchAssignmentOrderByWithRelationInput | BatchAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BatchAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned BatchAssignments
    **/
    _count?: true | BatchAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BatchAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BatchAssignmentMaxAggregateInputType
  }

  export type GetBatchAssignmentAggregateType<T extends BatchAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateBatchAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBatchAssignment[P]>
      : GetScalarType<T[P], AggregateBatchAssignment[P]>
  }




  export type BatchAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BatchAssignmentWhereInput
    orderBy?: BatchAssignmentOrderByWithAggregationInput | BatchAssignmentOrderByWithAggregationInput[]
    by: BatchAssignmentScalarFieldEnum[] | BatchAssignmentScalarFieldEnum
    having?: BatchAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BatchAssignmentCountAggregateInputType | true
    _min?: BatchAssignmentMinAggregateInputType
    _max?: BatchAssignmentMaxAggregateInputType
  }

  export type BatchAssignmentGroupByOutputType = {
    id: string
    batchId: string
    teacherId: string
    assignedAt: Date
    _count: BatchAssignmentCountAggregateOutputType | null
    _min: BatchAssignmentMinAggregateOutputType | null
    _max: BatchAssignmentMaxAggregateOutputType | null
  }

  type GetBatchAssignmentGroupByPayload<T extends BatchAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BatchAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BatchAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BatchAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], BatchAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type BatchAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    batchId?: boolean
    teacherId?: boolean
    assignedAt?: boolean
    batch?: boolean | BatchDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["batchAssignment"]>



  export type BatchAssignmentSelectScalar = {
    id?: boolean
    batchId?: boolean
    teacherId?: boolean
    assignedAt?: boolean
  }

  export type BatchAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "batchId" | "teacherId" | "assignedAt", ExtArgs["result"]["batchAssignment"]>
  export type BatchAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | BatchDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $BatchAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "BatchAssignment"
    objects: {
      batch: Prisma.$BatchPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      batchId: string
      teacherId: string
      assignedAt: Date
    }, ExtArgs["result"]["batchAssignment"]>
    composites: {}
  }

  type BatchAssignmentGetPayload<S extends boolean | null | undefined | BatchAssignmentDefaultArgs> = $Result.GetResult<Prisma.$BatchAssignmentPayload, S>

  type BatchAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BatchAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BatchAssignmentCountAggregateInputType | true
    }

  export interface BatchAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['BatchAssignment'], meta: { name: 'BatchAssignment' } }
    /**
     * Find zero or one BatchAssignment that matches the filter.
     * @param {BatchAssignmentFindUniqueArgs} args - Arguments to find a BatchAssignment
     * @example
     * // Get one BatchAssignment
     * const batchAssignment = await prisma.batchAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BatchAssignmentFindUniqueArgs>(args: SelectSubset<T, BatchAssignmentFindUniqueArgs<ExtArgs>>): Prisma__BatchAssignmentClient<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one BatchAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BatchAssignmentFindUniqueOrThrowArgs} args - Arguments to find a BatchAssignment
     * @example
     * // Get one BatchAssignment
     * const batchAssignment = await prisma.batchAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BatchAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, BatchAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BatchAssignmentClient<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BatchAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAssignmentFindFirstArgs} args - Arguments to find a BatchAssignment
     * @example
     * // Get one BatchAssignment
     * const batchAssignment = await prisma.batchAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BatchAssignmentFindFirstArgs>(args?: SelectSubset<T, BatchAssignmentFindFirstArgs<ExtArgs>>): Prisma__BatchAssignmentClient<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first BatchAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAssignmentFindFirstOrThrowArgs} args - Arguments to find a BatchAssignment
     * @example
     * // Get one BatchAssignment
     * const batchAssignment = await prisma.batchAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BatchAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, BatchAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__BatchAssignmentClient<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more BatchAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all BatchAssignments
     * const batchAssignments = await prisma.batchAssignment.findMany()
     * 
     * // Get first 10 BatchAssignments
     * const batchAssignments = await prisma.batchAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const batchAssignmentWithIdOnly = await prisma.batchAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BatchAssignmentFindManyArgs>(args?: SelectSubset<T, BatchAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a BatchAssignment.
     * @param {BatchAssignmentCreateArgs} args - Arguments to create a BatchAssignment.
     * @example
     * // Create one BatchAssignment
     * const BatchAssignment = await prisma.batchAssignment.create({
     *   data: {
     *     // ... data to create a BatchAssignment
     *   }
     * })
     * 
     */
    create<T extends BatchAssignmentCreateArgs>(args: SelectSubset<T, BatchAssignmentCreateArgs<ExtArgs>>): Prisma__BatchAssignmentClient<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many BatchAssignments.
     * @param {BatchAssignmentCreateManyArgs} args - Arguments to create many BatchAssignments.
     * @example
     * // Create many BatchAssignments
     * const batchAssignment = await prisma.batchAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BatchAssignmentCreateManyArgs>(args?: SelectSubset<T, BatchAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a BatchAssignment.
     * @param {BatchAssignmentDeleteArgs} args - Arguments to delete one BatchAssignment.
     * @example
     * // Delete one BatchAssignment
     * const BatchAssignment = await prisma.batchAssignment.delete({
     *   where: {
     *     // ... filter to delete one BatchAssignment
     *   }
     * })
     * 
     */
    delete<T extends BatchAssignmentDeleteArgs>(args: SelectSubset<T, BatchAssignmentDeleteArgs<ExtArgs>>): Prisma__BatchAssignmentClient<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one BatchAssignment.
     * @param {BatchAssignmentUpdateArgs} args - Arguments to update one BatchAssignment.
     * @example
     * // Update one BatchAssignment
     * const batchAssignment = await prisma.batchAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BatchAssignmentUpdateArgs>(args: SelectSubset<T, BatchAssignmentUpdateArgs<ExtArgs>>): Prisma__BatchAssignmentClient<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more BatchAssignments.
     * @param {BatchAssignmentDeleteManyArgs} args - Arguments to filter BatchAssignments to delete.
     * @example
     * // Delete a few BatchAssignments
     * const { count } = await prisma.batchAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BatchAssignmentDeleteManyArgs>(args?: SelectSubset<T, BatchAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more BatchAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many BatchAssignments
     * const batchAssignment = await prisma.batchAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BatchAssignmentUpdateManyArgs>(args: SelectSubset<T, BatchAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one BatchAssignment.
     * @param {BatchAssignmentUpsertArgs} args - Arguments to update or create a BatchAssignment.
     * @example
     * // Update or create a BatchAssignment
     * const batchAssignment = await prisma.batchAssignment.upsert({
     *   create: {
     *     // ... data to create a BatchAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the BatchAssignment we want to update
     *   }
     * })
     */
    upsert<T extends BatchAssignmentUpsertArgs>(args: SelectSubset<T, BatchAssignmentUpsertArgs<ExtArgs>>): Prisma__BatchAssignmentClient<$Result.GetResult<Prisma.$BatchAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of BatchAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAssignmentCountArgs} args - Arguments to filter BatchAssignments to count.
     * @example
     * // Count the number of BatchAssignments
     * const count = await prisma.batchAssignment.count({
     *   where: {
     *     // ... the filter for the BatchAssignments we want to count
     *   }
     * })
    **/
    count<T extends BatchAssignmentCountArgs>(
      args?: Subset<T, BatchAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BatchAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a BatchAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BatchAssignmentAggregateArgs>(args: Subset<T, BatchAssignmentAggregateArgs>): Prisma.PrismaPromise<GetBatchAssignmentAggregateType<T>>

    /**
     * Group by BatchAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BatchAssignmentGroupByArgs} args - Group by arguments.
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
      T extends BatchAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BatchAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: BatchAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BatchAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBatchAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the BatchAssignment model
   */
  readonly fields: BatchAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for BatchAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BatchAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batch<T extends BatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BatchDefaultArgs<ExtArgs>>): Prisma__BatchClient<$Result.GetResult<Prisma.$BatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the BatchAssignment model
   */
  interface BatchAssignmentFieldRefs {
    readonly id: FieldRef<"BatchAssignment", 'String'>
    readonly batchId: FieldRef<"BatchAssignment", 'String'>
    readonly teacherId: FieldRef<"BatchAssignment", 'String'>
    readonly assignedAt: FieldRef<"BatchAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * BatchAssignment findUnique
   */
  export type BatchAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which BatchAssignment to fetch.
     */
    where: BatchAssignmentWhereUniqueInput
  }

  /**
   * BatchAssignment findUniqueOrThrow
   */
  export type BatchAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which BatchAssignment to fetch.
     */
    where: BatchAssignmentWhereUniqueInput
  }

  /**
   * BatchAssignment findFirst
   */
  export type BatchAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which BatchAssignment to fetch.
     */
    where?: BatchAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchAssignments to fetch.
     */
    orderBy?: BatchAssignmentOrderByWithRelationInput | BatchAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchAssignments.
     */
    cursor?: BatchAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchAssignments.
     */
    distinct?: BatchAssignmentScalarFieldEnum | BatchAssignmentScalarFieldEnum[]
  }

  /**
   * BatchAssignment findFirstOrThrow
   */
  export type BatchAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which BatchAssignment to fetch.
     */
    where?: BatchAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchAssignments to fetch.
     */
    orderBy?: BatchAssignmentOrderByWithRelationInput | BatchAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for BatchAssignments.
     */
    cursor?: BatchAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of BatchAssignments.
     */
    distinct?: BatchAssignmentScalarFieldEnum | BatchAssignmentScalarFieldEnum[]
  }

  /**
   * BatchAssignment findMany
   */
  export type BatchAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which BatchAssignments to fetch.
     */
    where?: BatchAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of BatchAssignments to fetch.
     */
    orderBy?: BatchAssignmentOrderByWithRelationInput | BatchAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing BatchAssignments.
     */
    cursor?: BatchAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` BatchAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` BatchAssignments.
     */
    skip?: number
    distinct?: BatchAssignmentScalarFieldEnum | BatchAssignmentScalarFieldEnum[]
  }

  /**
   * BatchAssignment create
   */
  export type BatchAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a BatchAssignment.
     */
    data: XOR<BatchAssignmentCreateInput, BatchAssignmentUncheckedCreateInput>
  }

  /**
   * BatchAssignment createMany
   */
  export type BatchAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many BatchAssignments.
     */
    data: BatchAssignmentCreateManyInput | BatchAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * BatchAssignment update
   */
  export type BatchAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a BatchAssignment.
     */
    data: XOR<BatchAssignmentUpdateInput, BatchAssignmentUncheckedUpdateInput>
    /**
     * Choose, which BatchAssignment to update.
     */
    where: BatchAssignmentWhereUniqueInput
  }

  /**
   * BatchAssignment updateMany
   */
  export type BatchAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update BatchAssignments.
     */
    data: XOR<BatchAssignmentUpdateManyMutationInput, BatchAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which BatchAssignments to update
     */
    where?: BatchAssignmentWhereInput
    /**
     * Limit how many BatchAssignments to update.
     */
    limit?: number
  }

  /**
   * BatchAssignment upsert
   */
  export type BatchAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the BatchAssignment to update in case it exists.
     */
    where: BatchAssignmentWhereUniqueInput
    /**
     * In case the BatchAssignment found by the `where` argument doesn't exist, create a new BatchAssignment with this data.
     */
    create: XOR<BatchAssignmentCreateInput, BatchAssignmentUncheckedCreateInput>
    /**
     * In case the BatchAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BatchAssignmentUpdateInput, BatchAssignmentUncheckedUpdateInput>
  }

  /**
   * BatchAssignment delete
   */
  export type BatchAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
    /**
     * Filter which BatchAssignment to delete.
     */
    where: BatchAssignmentWhereUniqueInput
  }

  /**
   * BatchAssignment deleteMany
   */
  export type BatchAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which BatchAssignments to delete
     */
    where?: BatchAssignmentWhereInput
    /**
     * Limit how many BatchAssignments to delete.
     */
    limit?: number
  }

  /**
   * BatchAssignment without action
   */
  export type BatchAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BatchAssignment
     */
    select?: BatchAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the BatchAssignment
     */
    omit?: BatchAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BatchAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model ExamAssignment
   */

  export type AggregateExamAssignment = {
    _count: ExamAssignmentCountAggregateOutputType | null
    _min: ExamAssignmentMinAggregateOutputType | null
    _max: ExamAssignmentMaxAggregateOutputType | null
  }

  export type ExamAssignmentMinAggregateOutputType = {
    id: string | null
    examId: string | null
    studentId: string | null
    assignedAt: Date | null
  }

  export type ExamAssignmentMaxAggregateOutputType = {
    id: string | null
    examId: string | null
    studentId: string | null
    assignedAt: Date | null
  }

  export type ExamAssignmentCountAggregateOutputType = {
    id: number
    examId: number
    studentId: number
    assignedAt: number
    _all: number
  }


  export type ExamAssignmentMinAggregateInputType = {
    id?: true
    examId?: true
    studentId?: true
    assignedAt?: true
  }

  export type ExamAssignmentMaxAggregateInputType = {
    id?: true
    examId?: true
    studentId?: true
    assignedAt?: true
  }

  export type ExamAssignmentCountAggregateInputType = {
    id?: true
    examId?: true
    studentId?: true
    assignedAt?: true
    _all?: true
  }

  export type ExamAssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAssignment to aggregate.
     */
    where?: ExamAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAssignments to fetch.
     */
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExamAssignments
    **/
    _count?: true | ExamAssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamAssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamAssignmentMaxAggregateInputType
  }

  export type GetExamAssignmentAggregateType<T extends ExamAssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateExamAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExamAssignment[P]>
      : GetScalarType<T[P], AggregateExamAssignment[P]>
  }




  export type ExamAssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamAssignmentWhereInput
    orderBy?: ExamAssignmentOrderByWithAggregationInput | ExamAssignmentOrderByWithAggregationInput[]
    by: ExamAssignmentScalarFieldEnum[] | ExamAssignmentScalarFieldEnum
    having?: ExamAssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamAssignmentCountAggregateInputType | true
    _min?: ExamAssignmentMinAggregateInputType
    _max?: ExamAssignmentMaxAggregateInputType
  }

  export type ExamAssignmentGroupByOutputType = {
    id: string
    examId: string
    studentId: string
    assignedAt: Date
    _count: ExamAssignmentCountAggregateOutputType | null
    _min: ExamAssignmentMinAggregateOutputType | null
    _max: ExamAssignmentMaxAggregateOutputType | null
  }

  type GetExamAssignmentGroupByPayload<T extends ExamAssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamAssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamAssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamAssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], ExamAssignmentGroupByOutputType[P]>
        }
      >
    >


  export type ExamAssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    studentId?: boolean
    assignedAt?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["examAssignment"]>



  export type ExamAssignmentSelectScalar = {
    id?: boolean
    examId?: boolean
    studentId?: boolean
    assignedAt?: boolean
  }

  export type ExamAssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examId" | "studentId" | "assignedAt", ExtArgs["result"]["examAssignment"]>
  export type ExamAssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExamAssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExamAssignment"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examId: string
      studentId: string
      assignedAt: Date
    }, ExtArgs["result"]["examAssignment"]>
    composites: {}
  }

  type ExamAssignmentGetPayload<S extends boolean | null | undefined | ExamAssignmentDefaultArgs> = $Result.GetResult<Prisma.$ExamAssignmentPayload, S>

  type ExamAssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExamAssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExamAssignmentCountAggregateInputType | true
    }

  export interface ExamAssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExamAssignment'], meta: { name: 'ExamAssignment' } }
    /**
     * Find zero or one ExamAssignment that matches the filter.
     * @param {ExamAssignmentFindUniqueArgs} args - Arguments to find a ExamAssignment
     * @example
     * // Get one ExamAssignment
     * const examAssignment = await prisma.examAssignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamAssignmentFindUniqueArgs>(args: SelectSubset<T, ExamAssignmentFindUniqueArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExamAssignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExamAssignmentFindUniqueOrThrowArgs} args - Arguments to find a ExamAssignment
     * @example
     * // Get one ExamAssignment
     * const examAssignment = await prisma.examAssignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamAssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamAssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAssignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentFindFirstArgs} args - Arguments to find a ExamAssignment
     * @example
     * // Get one ExamAssignment
     * const examAssignment = await prisma.examAssignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamAssignmentFindFirstArgs>(args?: SelectSubset<T, ExamAssignmentFindFirstArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExamAssignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentFindFirstOrThrowArgs} args - Arguments to find a ExamAssignment
     * @example
     * // Get one ExamAssignment
     * const examAssignment = await prisma.examAssignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamAssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamAssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExamAssignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExamAssignments
     * const examAssignments = await prisma.examAssignment.findMany()
     * 
     * // Get first 10 ExamAssignments
     * const examAssignments = await prisma.examAssignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examAssignmentWithIdOnly = await prisma.examAssignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamAssignmentFindManyArgs>(args?: SelectSubset<T, ExamAssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExamAssignment.
     * @param {ExamAssignmentCreateArgs} args - Arguments to create a ExamAssignment.
     * @example
     * // Create one ExamAssignment
     * const ExamAssignment = await prisma.examAssignment.create({
     *   data: {
     *     // ... data to create a ExamAssignment
     *   }
     * })
     * 
     */
    create<T extends ExamAssignmentCreateArgs>(args: SelectSubset<T, ExamAssignmentCreateArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExamAssignments.
     * @param {ExamAssignmentCreateManyArgs} args - Arguments to create many ExamAssignments.
     * @example
     * // Create many ExamAssignments
     * const examAssignment = await prisma.examAssignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamAssignmentCreateManyArgs>(args?: SelectSubset<T, ExamAssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ExamAssignment.
     * @param {ExamAssignmentDeleteArgs} args - Arguments to delete one ExamAssignment.
     * @example
     * // Delete one ExamAssignment
     * const ExamAssignment = await prisma.examAssignment.delete({
     *   where: {
     *     // ... filter to delete one ExamAssignment
     *   }
     * })
     * 
     */
    delete<T extends ExamAssignmentDeleteArgs>(args: SelectSubset<T, ExamAssignmentDeleteArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExamAssignment.
     * @param {ExamAssignmentUpdateArgs} args - Arguments to update one ExamAssignment.
     * @example
     * // Update one ExamAssignment
     * const examAssignment = await prisma.examAssignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamAssignmentUpdateArgs>(args: SelectSubset<T, ExamAssignmentUpdateArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExamAssignments.
     * @param {ExamAssignmentDeleteManyArgs} args - Arguments to filter ExamAssignments to delete.
     * @example
     * // Delete a few ExamAssignments
     * const { count } = await prisma.examAssignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamAssignmentDeleteManyArgs>(args?: SelectSubset<T, ExamAssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExamAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExamAssignments
     * const examAssignment = await prisma.examAssignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamAssignmentUpdateManyArgs>(args: SelectSubset<T, ExamAssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExamAssignment.
     * @param {ExamAssignmentUpsertArgs} args - Arguments to update or create a ExamAssignment.
     * @example
     * // Update or create a ExamAssignment
     * const examAssignment = await prisma.examAssignment.upsert({
     *   create: {
     *     // ... data to create a ExamAssignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExamAssignment we want to update
     *   }
     * })
     */
    upsert<T extends ExamAssignmentUpsertArgs>(args: SelectSubset<T, ExamAssignmentUpsertArgs<ExtArgs>>): Prisma__ExamAssignmentClient<$Result.GetResult<Prisma.$ExamAssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExamAssignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentCountArgs} args - Arguments to filter ExamAssignments to count.
     * @example
     * // Count the number of ExamAssignments
     * const count = await prisma.examAssignment.count({
     *   where: {
     *     // ... the filter for the ExamAssignments we want to count
     *   }
     * })
    **/
    count<T extends ExamAssignmentCountArgs>(
      args?: Subset<T, ExamAssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamAssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExamAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExamAssignmentAggregateArgs>(args: Subset<T, ExamAssignmentAggregateArgs>): Prisma.PrismaPromise<GetExamAssignmentAggregateType<T>>

    /**
     * Group by ExamAssignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAssignmentGroupByArgs} args - Group by arguments.
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
      T extends ExamAssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamAssignmentGroupByArgs['orderBy'] }
        : { orderBy?: ExamAssignmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExamAssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExamAssignment model
   */
  readonly fields: ExamAssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExamAssignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamAssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExamAssignment model
   */
  interface ExamAssignmentFieldRefs {
    readonly id: FieldRef<"ExamAssignment", 'String'>
    readonly examId: FieldRef<"ExamAssignment", 'String'>
    readonly studentId: FieldRef<"ExamAssignment", 'String'>
    readonly assignedAt: FieldRef<"ExamAssignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExamAssignment findUnique
   */
  export type ExamAssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignment to fetch.
     */
    where: ExamAssignmentWhereUniqueInput
  }

  /**
   * ExamAssignment findUniqueOrThrow
   */
  export type ExamAssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignment to fetch.
     */
    where: ExamAssignmentWhereUniqueInput
  }

  /**
   * ExamAssignment findFirst
   */
  export type ExamAssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignment to fetch.
     */
    where?: ExamAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAssignments to fetch.
     */
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAssignments.
     */
    cursor?: ExamAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAssignments.
     */
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * ExamAssignment findFirstOrThrow
   */
  export type ExamAssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignment to fetch.
     */
    where?: ExamAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAssignments to fetch.
     */
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExamAssignments.
     */
    cursor?: ExamAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAssignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExamAssignments.
     */
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * ExamAssignment findMany
   */
  export type ExamAssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter, which ExamAssignments to fetch.
     */
    where?: ExamAssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExamAssignments to fetch.
     */
    orderBy?: ExamAssignmentOrderByWithRelationInput | ExamAssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExamAssignments.
     */
    cursor?: ExamAssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExamAssignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExamAssignments.
     */
    skip?: number
    distinct?: ExamAssignmentScalarFieldEnum | ExamAssignmentScalarFieldEnum[]
  }

  /**
   * ExamAssignment create
   */
  export type ExamAssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a ExamAssignment.
     */
    data: XOR<ExamAssignmentCreateInput, ExamAssignmentUncheckedCreateInput>
  }

  /**
   * ExamAssignment createMany
   */
  export type ExamAssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExamAssignments.
     */
    data: ExamAssignmentCreateManyInput | ExamAssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExamAssignment update
   */
  export type ExamAssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a ExamAssignment.
     */
    data: XOR<ExamAssignmentUpdateInput, ExamAssignmentUncheckedUpdateInput>
    /**
     * Choose, which ExamAssignment to update.
     */
    where: ExamAssignmentWhereUniqueInput
  }

  /**
   * ExamAssignment updateMany
   */
  export type ExamAssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExamAssignments.
     */
    data: XOR<ExamAssignmentUpdateManyMutationInput, ExamAssignmentUncheckedUpdateManyInput>
    /**
     * Filter which ExamAssignments to update
     */
    where?: ExamAssignmentWhereInput
    /**
     * Limit how many ExamAssignments to update.
     */
    limit?: number
  }

  /**
   * ExamAssignment upsert
   */
  export type ExamAssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the ExamAssignment to update in case it exists.
     */
    where: ExamAssignmentWhereUniqueInput
    /**
     * In case the ExamAssignment found by the `where` argument doesn't exist, create a new ExamAssignment with this data.
     */
    create: XOR<ExamAssignmentCreateInput, ExamAssignmentUncheckedCreateInput>
    /**
     * In case the ExamAssignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamAssignmentUpdateInput, ExamAssignmentUncheckedUpdateInput>
  }

  /**
   * ExamAssignment delete
   */
  export type ExamAssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
    /**
     * Filter which ExamAssignment to delete.
     */
    where: ExamAssignmentWhereUniqueInput
  }

  /**
   * ExamAssignment deleteMany
   */
  export type ExamAssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExamAssignments to delete
     */
    where?: ExamAssignmentWhereInput
    /**
     * Limit how many ExamAssignments to delete.
     */
    limit?: number
  }

  /**
   * ExamAssignment without action
   */
  export type ExamAssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamAssignment
     */
    select?: ExamAssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExamAssignment
     */
    omit?: ExamAssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamAssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    correctAnswerIndex: number | null
  }

  export type QuestionSumAggregateOutputType = {
    correctAnswerIndex: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    examId: string | null
    text: string | null
    options: string | null
    correctAnswerIndex: number | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    examId: string | null
    text: string | null
    options: string | null
    correctAnswerIndex: number | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    examId: number
    text: number
    options: number
    correctAnswerIndex: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    correctAnswerIndex?: true
  }

  export type QuestionSumAggregateInputType = {
    correctAnswerIndex?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    options?: true
    correctAnswerIndex?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    options?: true
    correctAnswerIndex?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    options?: true
    correctAnswerIndex?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    examId: string
    text: string
    options: string
    correctAnswerIndex: number
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIndex?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>



  export type QuestionSelectScalar = {
    id?: boolean
    examId?: boolean
    text?: boolean
    options?: boolean
    correctAnswerIndex?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "examId" | "text" | "options" | "correctAnswerIndex", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examId: string
      text: string
      options: string
      correctAnswerIndex: number
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly examId: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly options: FieldRef<"Question", 'String'>
    readonly correctAnswerIndex: FieldRef<"Question", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Result
   */

  export type AggregateResult = {
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  export type ResultAvgAggregateOutputType = {
    score: number | null
    completionTime: number | null
  }

  export type ResultSumAggregateOutputType = {
    score: number | null
    completionTime: number | null
  }

  export type ResultMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    examId: string | null
    score: number | null
    completionTime: number | null
    teacherApproval: boolean | null
    adminApproval: boolean | null
    createdAt: Date | null
  }

  export type ResultMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    examId: string | null
    score: number | null
    completionTime: number | null
    teacherApproval: boolean | null
    adminApproval: boolean | null
    createdAt: Date | null
  }

  export type ResultCountAggregateOutputType = {
    id: number
    studentId: number
    examId: number
    score: number
    completionTime: number
    teacherApproval: number
    adminApproval: number
    createdAt: number
    responses: number
    _all: number
  }


  export type ResultAvgAggregateInputType = {
    score?: true
    completionTime?: true
  }

  export type ResultSumAggregateInputType = {
    score?: true
    completionTime?: true
  }

  export type ResultMinAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    score?: true
    completionTime?: true
    teacherApproval?: true
    adminApproval?: true
    createdAt?: true
  }

  export type ResultMaxAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    score?: true
    completionTime?: true
    teacherApproval?: true
    adminApproval?: true
    createdAt?: true
  }

  export type ResultCountAggregateInputType = {
    id?: true
    studentId?: true
    examId?: true
    score?: true
    completionTime?: true
    teacherApproval?: true
    adminApproval?: true
    createdAt?: true
    responses?: true
    _all?: true
  }

  export type ResultAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Result to aggregate.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Results
    **/
    _count?: true | ResultCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ResultAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ResultSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ResultMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ResultMaxAggregateInputType
  }

  export type GetResultAggregateType<T extends ResultAggregateArgs> = {
        [P in keyof T & keyof AggregateResult]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateResult[P]>
      : GetScalarType<T[P], AggregateResult[P]>
  }




  export type ResultGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ResultWhereInput
    orderBy?: ResultOrderByWithAggregationInput | ResultOrderByWithAggregationInput[]
    by: ResultScalarFieldEnum[] | ResultScalarFieldEnum
    having?: ResultScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ResultCountAggregateInputType | true
    _avg?: ResultAvgAggregateInputType
    _sum?: ResultSumAggregateInputType
    _min?: ResultMinAggregateInputType
    _max?: ResultMaxAggregateInputType
  }

  export type ResultGroupByOutputType = {
    id: string
    studentId: string
    examId: string
    score: number
    completionTime: number
    teacherApproval: boolean
    adminApproval: boolean
    createdAt: Date
    responses: JsonValue | null
    _count: ResultCountAggregateOutputType | null
    _avg: ResultAvgAggregateOutputType | null
    _sum: ResultSumAggregateOutputType | null
    _min: ResultMinAggregateOutputType | null
    _max: ResultMaxAggregateOutputType | null
  }

  type GetResultGroupByPayload<T extends ResultGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ResultGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ResultGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ResultGroupByOutputType[P]>
            : GetScalarType<T[P], ResultGroupByOutputType[P]>
        }
      >
    >


  export type ResultSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    examId?: boolean
    score?: boolean
    completionTime?: boolean
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: boolean
    responses?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["result"]>



  export type ResultSelectScalar = {
    id?: boolean
    studentId?: boolean
    examId?: boolean
    score?: boolean
    completionTime?: boolean
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: boolean
    responses?: boolean
  }

  export type ResultOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studentId" | "examId" | "score" | "completionTime" | "teacherApproval" | "adminApproval" | "createdAt" | "responses", ExtArgs["result"]["result"]>
  export type ResultInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ResultPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Result"
    objects: {
      exam: Prisma.$ExamPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      examId: string
      score: number
      completionTime: number
      teacherApproval: boolean
      adminApproval: boolean
      createdAt: Date
      responses: Prisma.JsonValue | null
    }, ExtArgs["result"]["result"]>
    composites: {}
  }

  type ResultGetPayload<S extends boolean | null | undefined | ResultDefaultArgs> = $Result.GetResult<Prisma.$ResultPayload, S>

  type ResultCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ResultFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ResultCountAggregateInputType | true
    }

  export interface ResultDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Result'], meta: { name: 'Result' } }
    /**
     * Find zero or one Result that matches the filter.
     * @param {ResultFindUniqueArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ResultFindUniqueArgs>(args: SelectSubset<T, ResultFindUniqueArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Result that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ResultFindUniqueOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ResultFindUniqueOrThrowArgs>(args: SelectSubset<T, ResultFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ResultFindFirstArgs>(args?: SelectSubset<T, ResultFindFirstArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Result that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindFirstOrThrowArgs} args - Arguments to find a Result
     * @example
     * // Get one Result
     * const result = await prisma.result.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ResultFindFirstOrThrowArgs>(args?: SelectSubset<T, ResultFindFirstOrThrowArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Results that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Results
     * const results = await prisma.result.findMany()
     * 
     * // Get first 10 Results
     * const results = await prisma.result.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const resultWithIdOnly = await prisma.result.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ResultFindManyArgs>(args?: SelectSubset<T, ResultFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Result.
     * @param {ResultCreateArgs} args - Arguments to create a Result.
     * @example
     * // Create one Result
     * const Result = await prisma.result.create({
     *   data: {
     *     // ... data to create a Result
     *   }
     * })
     * 
     */
    create<T extends ResultCreateArgs>(args: SelectSubset<T, ResultCreateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Results.
     * @param {ResultCreateManyArgs} args - Arguments to create many Results.
     * @example
     * // Create many Results
     * const result = await prisma.result.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ResultCreateManyArgs>(args?: SelectSubset<T, ResultCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Result.
     * @param {ResultDeleteArgs} args - Arguments to delete one Result.
     * @example
     * // Delete one Result
     * const Result = await prisma.result.delete({
     *   where: {
     *     // ... filter to delete one Result
     *   }
     * })
     * 
     */
    delete<T extends ResultDeleteArgs>(args: SelectSubset<T, ResultDeleteArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Result.
     * @param {ResultUpdateArgs} args - Arguments to update one Result.
     * @example
     * // Update one Result
     * const result = await prisma.result.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ResultUpdateArgs>(args: SelectSubset<T, ResultUpdateArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Results.
     * @param {ResultDeleteManyArgs} args - Arguments to filter Results to delete.
     * @example
     * // Delete a few Results
     * const { count } = await prisma.result.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ResultDeleteManyArgs>(args?: SelectSubset<T, ResultDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Results
     * const result = await prisma.result.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ResultUpdateManyArgs>(args: SelectSubset<T, ResultUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Result.
     * @param {ResultUpsertArgs} args - Arguments to update or create a Result.
     * @example
     * // Update or create a Result
     * const result = await prisma.result.upsert({
     *   create: {
     *     // ... data to create a Result
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Result we want to update
     *   }
     * })
     */
    upsert<T extends ResultUpsertArgs>(args: SelectSubset<T, ResultUpsertArgs<ExtArgs>>): Prisma__ResultClient<$Result.GetResult<Prisma.$ResultPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Results.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultCountArgs} args - Arguments to filter Results to count.
     * @example
     * // Count the number of Results
     * const count = await prisma.result.count({
     *   where: {
     *     // ... the filter for the Results we want to count
     *   }
     * })
    **/
    count<T extends ResultCountArgs>(
      args?: Subset<T, ResultCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ResultCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ResultAggregateArgs>(args: Subset<T, ResultAggregateArgs>): Prisma.PrismaPromise<GetResultAggregateType<T>>

    /**
     * Group by Result.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ResultGroupByArgs} args - Group by arguments.
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
      T extends ResultGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ResultGroupByArgs['orderBy'] }
        : { orderBy?: ResultGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ResultGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetResultGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Result model
   */
  readonly fields: ResultFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Result.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ResultClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Result model
   */
  interface ResultFieldRefs {
    readonly id: FieldRef<"Result", 'String'>
    readonly studentId: FieldRef<"Result", 'String'>
    readonly examId: FieldRef<"Result", 'String'>
    readonly score: FieldRef<"Result", 'Int'>
    readonly completionTime: FieldRef<"Result", 'Int'>
    readonly teacherApproval: FieldRef<"Result", 'Boolean'>
    readonly adminApproval: FieldRef<"Result", 'Boolean'>
    readonly createdAt: FieldRef<"Result", 'DateTime'>
    readonly responses: FieldRef<"Result", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Result findUnique
   */
  export type ResultFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findUniqueOrThrow
   */
  export type ResultFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result findFirst
   */
  export type ResultFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findFirstOrThrow
   */
  export type ResultFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Result to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Results.
     */
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result findMany
   */
  export type ResultFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter, which Results to fetch.
     */
    where?: ResultWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Results to fetch.
     */
    orderBy?: ResultOrderByWithRelationInput | ResultOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Results.
     */
    cursor?: ResultWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Results from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Results.
     */
    skip?: number
    distinct?: ResultScalarFieldEnum | ResultScalarFieldEnum[]
  }

  /**
   * Result create
   */
  export type ResultCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to create a Result.
     */
    data: XOR<ResultCreateInput, ResultUncheckedCreateInput>
  }

  /**
   * Result createMany
   */
  export type ResultCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Results.
     */
    data: ResultCreateManyInput | ResultCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Result update
   */
  export type ResultUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The data needed to update a Result.
     */
    data: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
    /**
     * Choose, which Result to update.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result updateMany
   */
  export type ResultUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Results.
     */
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyInput>
    /**
     * Filter which Results to update
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to update.
     */
    limit?: number
  }

  /**
   * Result upsert
   */
  export type ResultUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * The filter to search for the Result to update in case it exists.
     */
    where: ResultWhereUniqueInput
    /**
     * In case the Result found by the `where` argument doesn't exist, create a new Result with this data.
     */
    create: XOR<ResultCreateInput, ResultUncheckedCreateInput>
    /**
     * In case the Result was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ResultUpdateInput, ResultUncheckedUpdateInput>
  }

  /**
   * Result delete
   */
  export type ResultDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
    /**
     * Filter which Result to delete.
     */
    where: ResultWhereUniqueInput
  }

  /**
   * Result deleteMany
   */
  export type ResultDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Results to delete
     */
    where?: ResultWhereInput
    /**
     * Limit how many Results to delete.
     */
    limit?: number
  }

  /**
   * Result without action
   */
  export type ResultDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Result
     */
    select?: ResultSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Result
     */
    omit?: ResultOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ResultInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpMinAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expires: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: string | null
    email: string | null
    otp: string | null
    expires: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    email: number
    otp: number
    expires: number
    _all: number
  }


  export type OtpMinAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expires?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expires?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    email?: true
    otp?: true
    expires?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: string
    email: string
    otp: string
    expires: Date
    _count: OtpCountAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    otp?: boolean
    expires?: boolean
  }, ExtArgs["result"]["otp"]>



  export type OtpSelectScalar = {
    id?: boolean
    email?: boolean
    otp?: boolean
    expires?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "otp" | "expires", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      otp: string
      expires: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
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
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'String'>
    readonly email: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly expires: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
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
    role: 'role',
    city: 'city',
    phoneNumber: 'phoneNumber',
    requestedRole: 'requestedRole',
    profileUpdateCount: 'profileUpdateCount',
    batchId: 'batchId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    timeLimit: 'timeLimit',
    teacherId: 'teacherId',
    createdAt: 'createdAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const BatchScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    creatorId: 'creatorId',
    createdAt: 'createdAt'
  };

  export type BatchScalarFieldEnum = (typeof BatchScalarFieldEnum)[keyof typeof BatchScalarFieldEnum]


  export const BatchAssignmentScalarFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    teacherId: 'teacherId',
    assignedAt: 'assignedAt'
  };

  export type BatchAssignmentScalarFieldEnum = (typeof BatchAssignmentScalarFieldEnum)[keyof typeof BatchAssignmentScalarFieldEnum]


  export const ExamAssignmentScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    studentId: 'studentId',
    assignedAt: 'assignedAt'
  };

  export type ExamAssignmentScalarFieldEnum = (typeof ExamAssignmentScalarFieldEnum)[keyof typeof ExamAssignmentScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    text: 'text',
    options: 'options',
    correctAnswerIndex: 'correctAnswerIndex'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ResultScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    examId: 'examId',
    score: 'score',
    completionTime: 'completionTime',
    teacherApproval: 'teacherApproval',
    adminApproval: 'adminApproval',
    createdAt: 'createdAt',
    responses: 'responses'
  };

  export type ResultScalarFieldEnum = (typeof ResultScalarFieldEnum)[keyof typeof ResultScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp',
    expires: 'expires'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    city: 'city',
    requestedRole: 'requestedRole',
    batchId: 'batchId'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const ExamOrderByRelevanceFieldEnum: {
    id: 'id',
    title: 'title',
    description: 'description',
    teacherId: 'teacherId'
  };

  export type ExamOrderByRelevanceFieldEnum = (typeof ExamOrderByRelevanceFieldEnum)[keyof typeof ExamOrderByRelevanceFieldEnum]


  export const BatchOrderByRelevanceFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    creatorId: 'creatorId'
  };

  export type BatchOrderByRelevanceFieldEnum = (typeof BatchOrderByRelevanceFieldEnum)[keyof typeof BatchOrderByRelevanceFieldEnum]


  export const BatchAssignmentOrderByRelevanceFieldEnum: {
    id: 'id',
    batchId: 'batchId',
    teacherId: 'teacherId'
  };

  export type BatchAssignmentOrderByRelevanceFieldEnum = (typeof BatchAssignmentOrderByRelevanceFieldEnum)[keyof typeof BatchAssignmentOrderByRelevanceFieldEnum]


  export const ExamAssignmentOrderByRelevanceFieldEnum: {
    id: 'id',
    examId: 'examId',
    studentId: 'studentId'
  };

  export type ExamAssignmentOrderByRelevanceFieldEnum = (typeof ExamAssignmentOrderByRelevanceFieldEnum)[keyof typeof ExamAssignmentOrderByRelevanceFieldEnum]


  export const QuestionOrderByRelevanceFieldEnum: {
    id: 'id',
    examId: 'examId',
    text: 'text',
    options: 'options'
  };

  export type QuestionOrderByRelevanceFieldEnum = (typeof QuestionOrderByRelevanceFieldEnum)[keyof typeof QuestionOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const ResultOrderByRelevanceFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    examId: 'examId'
  };

  export type ResultOrderByRelevanceFieldEnum = (typeof ResultOrderByRelevanceFieldEnum)[keyof typeof ResultOrderByRelevanceFieldEnum]


  export const OtpOrderByRelevanceFieldEnum: {
    id: 'id',
    email: 'email',
    otp: 'otp'
  };

  export type OtpOrderByRelevanceFieldEnum = (typeof OtpOrderByRelevanceFieldEnum)[keyof typeof OtpOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    city?: StringNullableFilter<"User"> | string | null
    phoneNumber?: BigIntNullableFilter<"User"> | bigint | number | null
    requestedRole?: StringNullableFilter<"User"> | string | null
    profileUpdateCount?: IntFilter<"User"> | number
    batchId?: StringNullableFilter<"User"> | string | null
    examsCreated?: ExamListRelationFilter
    assignedExams?: ExamAssignmentListRelationFilter
    results?: ResultListRelationFilter
    batchesCreated?: BatchListRelationFilter
    assignedBatches?: BatchAssignmentListRelationFilter
    batch?: XOR<BatchNullableScalarRelationFilter, BatchWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    city?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    requestedRole?: SortOrderInput | SortOrder
    profileUpdateCount?: SortOrder
    batchId?: SortOrderInput | SortOrder
    examsCreated?: ExamOrderByRelationAggregateInput
    assignedExams?: ExamAssignmentOrderByRelationAggregateInput
    results?: ResultOrderByRelationAggregateInput
    batchesCreated?: BatchOrderByRelationAggregateInput
    assignedBatches?: BatchAssignmentOrderByRelationAggregateInput
    batch?: BatchOrderByWithRelationInput
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    city?: StringNullableFilter<"User"> | string | null
    phoneNumber?: BigIntNullableFilter<"User"> | bigint | number | null
    requestedRole?: StringNullableFilter<"User"> | string | null
    profileUpdateCount?: IntFilter<"User"> | number
    batchId?: StringNullableFilter<"User"> | string | null
    examsCreated?: ExamListRelationFilter
    assignedExams?: ExamAssignmentListRelationFilter
    results?: ResultListRelationFilter
    batchesCreated?: BatchListRelationFilter
    assignedBatches?: BatchAssignmentListRelationFilter
    batch?: XOR<BatchNullableScalarRelationFilter, BatchWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    city?: SortOrderInput | SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    requestedRole?: SortOrderInput | SortOrder
    profileUpdateCount?: SortOrder
    batchId?: SortOrderInput | SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    phoneNumber?: BigIntNullableWithAggregatesFilter<"User"> | bigint | number | null
    requestedRole?: StringNullableWithAggregatesFilter<"User"> | string | null
    profileUpdateCount?: IntWithAggregatesFilter<"User"> | number
    batchId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    timeLimit?: IntFilter<"Exam"> | number
    teacherId?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: ExamAssignmentListRelationFilter
    questions?: QuestionListRelationFilter
    results?: ResultListRelationFilter
    batches?: BatchListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timeLimit?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    teacher?: UserOrderByWithRelationInput
    assignments?: ExamAssignmentOrderByRelationAggregateInput
    questions?: QuestionOrderByRelationAggregateInput
    results?: ResultOrderByRelationAggregateInput
    batches?: BatchOrderByRelationAggregateInput
    _relevance?: ExamOrderByRelevanceInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    timeLimit?: IntFilter<"Exam"> | number
    teacherId?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
    assignments?: ExamAssignmentListRelationFilter
    questions?: QuestionListRelationFilter
    results?: ResultListRelationFilter
    batches?: BatchListRelationFilter
  }, "id">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timeLimit?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    description?: StringWithAggregatesFilter<"Exam"> | string
    timeLimit?: IntWithAggregatesFilter<"Exam"> | number
    teacherId?: StringWithAggregatesFilter<"Exam"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type BatchWhereInput = {
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    id?: StringFilter<"Batch"> | string
    name?: StringFilter<"Batch"> | string
    description?: StringNullableFilter<"Batch"> | string | null
    creatorId?: StringNullableFilter<"Batch"> | string | null
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    students?: UserListRelationFilter
    exams?: ExamListRelationFilter
    assignments?: BatchAssignmentListRelationFilter
  }

  export type BatchOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    students?: UserOrderByRelationAggregateInput
    exams?: ExamOrderByRelationAggregateInput
    assignments?: BatchAssignmentOrderByRelationAggregateInput
    _relevance?: BatchOrderByRelevanceInput
  }

  export type BatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: BatchWhereInput | BatchWhereInput[]
    OR?: BatchWhereInput[]
    NOT?: BatchWhereInput | BatchWhereInput[]
    description?: StringNullableFilter<"Batch"> | string | null
    creatorId?: StringNullableFilter<"Batch"> | string | null
    createdAt?: DateTimeFilter<"Batch"> | Date | string
    creator?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    students?: UserListRelationFilter
    exams?: ExamListRelationFilter
    assignments?: BatchAssignmentListRelationFilter
  }, "id" | "name">

  export type BatchOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    creatorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: BatchCountOrderByAggregateInput
    _max?: BatchMaxOrderByAggregateInput
    _min?: BatchMinOrderByAggregateInput
  }

  export type BatchScalarWhereWithAggregatesInput = {
    AND?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    OR?: BatchScalarWhereWithAggregatesInput[]
    NOT?: BatchScalarWhereWithAggregatesInput | BatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Batch"> | string
    name?: StringWithAggregatesFilter<"Batch"> | string
    description?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    creatorId?: StringNullableWithAggregatesFilter<"Batch"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Batch"> | Date | string
  }

  export type BatchAssignmentWhereInput = {
    AND?: BatchAssignmentWhereInput | BatchAssignmentWhereInput[]
    OR?: BatchAssignmentWhereInput[]
    NOT?: BatchAssignmentWhereInput | BatchAssignmentWhereInput[]
    id?: StringFilter<"BatchAssignment"> | string
    batchId?: StringFilter<"BatchAssignment"> | string
    teacherId?: StringFilter<"BatchAssignment"> | string
    assignedAt?: DateTimeFilter<"BatchAssignment"> | Date | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type BatchAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    batchId?: SortOrder
    teacherId?: SortOrder
    assignedAt?: SortOrder
    batch?: BatchOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
    _relevance?: BatchAssignmentOrderByRelevanceInput
  }

  export type BatchAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    batchId_teacherId?: BatchAssignmentBatchIdTeacherIdCompoundUniqueInput
    AND?: BatchAssignmentWhereInput | BatchAssignmentWhereInput[]
    OR?: BatchAssignmentWhereInput[]
    NOT?: BatchAssignmentWhereInput | BatchAssignmentWhereInput[]
    batchId?: StringFilter<"BatchAssignment"> | string
    teacherId?: StringFilter<"BatchAssignment"> | string
    assignedAt?: DateTimeFilter<"BatchAssignment"> | Date | string
    batch?: XOR<BatchScalarRelationFilter, BatchWhereInput>
    teacher?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "batchId_teacherId">

  export type BatchAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    batchId?: SortOrder
    teacherId?: SortOrder
    assignedAt?: SortOrder
    _count?: BatchAssignmentCountOrderByAggregateInput
    _max?: BatchAssignmentMaxOrderByAggregateInput
    _min?: BatchAssignmentMinOrderByAggregateInput
  }

  export type BatchAssignmentScalarWhereWithAggregatesInput = {
    AND?: BatchAssignmentScalarWhereWithAggregatesInput | BatchAssignmentScalarWhereWithAggregatesInput[]
    OR?: BatchAssignmentScalarWhereWithAggregatesInput[]
    NOT?: BatchAssignmentScalarWhereWithAggregatesInput | BatchAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"BatchAssignment"> | string
    batchId?: StringWithAggregatesFilter<"BatchAssignment"> | string
    teacherId?: StringWithAggregatesFilter<"BatchAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"BatchAssignment"> | Date | string
  }

  export type ExamAssignmentWhereInput = {
    AND?: ExamAssignmentWhereInput | ExamAssignmentWhereInput[]
    OR?: ExamAssignmentWhereInput[]
    NOT?: ExamAssignmentWhereInput | ExamAssignmentWhereInput[]
    id?: StringFilter<"ExamAssignment"> | string
    examId?: StringFilter<"ExamAssignment"> | string
    studentId?: StringFilter<"ExamAssignment"> | string
    assignedAt?: DateTimeFilter<"ExamAssignment"> | Date | string
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExamAssignmentOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    assignedAt?: SortOrder
    exam?: ExamOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    _relevance?: ExamAssignmentOrderByRelevanceInput
  }

  export type ExamAssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    examId_studentId?: ExamAssignmentExamIdStudentIdCompoundUniqueInput
    AND?: ExamAssignmentWhereInput | ExamAssignmentWhereInput[]
    OR?: ExamAssignmentWhereInput[]
    NOT?: ExamAssignmentWhereInput | ExamAssignmentWhereInput[]
    examId?: StringFilter<"ExamAssignment"> | string
    studentId?: StringFilter<"ExamAssignment"> | string
    assignedAt?: DateTimeFilter<"ExamAssignment"> | Date | string
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "examId_studentId">

  export type ExamAssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    assignedAt?: SortOrder
    _count?: ExamAssignmentCountOrderByAggregateInput
    _max?: ExamAssignmentMaxOrderByAggregateInput
    _min?: ExamAssignmentMinOrderByAggregateInput
  }

  export type ExamAssignmentScalarWhereWithAggregatesInput = {
    AND?: ExamAssignmentScalarWhereWithAggregatesInput | ExamAssignmentScalarWhereWithAggregatesInput[]
    OR?: ExamAssignmentScalarWhereWithAggregatesInput[]
    NOT?: ExamAssignmentScalarWhereWithAggregatesInput | ExamAssignmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExamAssignment"> | string
    examId?: StringWithAggregatesFilter<"ExamAssignment"> | string
    studentId?: StringWithAggregatesFilter<"ExamAssignment"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"ExamAssignment"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    examId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    options?: StringFilter<"Question"> | string
    correctAnswerIndex?: IntFilter<"Question"> | number
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
    exam?: ExamOrderByWithRelationInput
    _relevance?: QuestionOrderByRelevanceInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    examId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    options?: StringFilter<"Question"> | string
    correctAnswerIndex?: IntFilter<"Question"> | number
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    examId?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    options?: StringWithAggregatesFilter<"Question"> | string
    correctAnswerIndex?: IntWithAggregatesFilter<"Question"> | number
  }

  export type ResultWhereInput = {
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    id?: StringFilter<"Result"> | string
    studentId?: StringFilter<"Result"> | string
    examId?: StringFilter<"Result"> | string
    score?: IntFilter<"Result"> | number
    completionTime?: IntFilter<"Result"> | number
    teacherApproval?: BoolFilter<"Result"> | boolean
    adminApproval?: BoolFilter<"Result"> | boolean
    createdAt?: DateTimeFilter<"Result"> | Date | string
    responses?: JsonNullableFilter<"Result">
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ResultOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    score?: SortOrder
    completionTime?: SortOrder
    teacherApproval?: SortOrder
    adminApproval?: SortOrder
    createdAt?: SortOrder
    responses?: SortOrderInput | SortOrder
    exam?: ExamOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
    _relevance?: ResultOrderByRelevanceInput
  }

  export type ResultWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ResultWhereInput | ResultWhereInput[]
    OR?: ResultWhereInput[]
    NOT?: ResultWhereInput | ResultWhereInput[]
    studentId?: StringFilter<"Result"> | string
    examId?: StringFilter<"Result"> | string
    score?: IntFilter<"Result"> | number
    completionTime?: IntFilter<"Result"> | number
    teacherApproval?: BoolFilter<"Result"> | boolean
    adminApproval?: BoolFilter<"Result"> | boolean
    createdAt?: DateTimeFilter<"Result"> | Date | string
    responses?: JsonNullableFilter<"Result">
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    student?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ResultOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    score?: SortOrder
    completionTime?: SortOrder
    teacherApproval?: SortOrder
    adminApproval?: SortOrder
    createdAt?: SortOrder
    responses?: SortOrderInput | SortOrder
    _count?: ResultCountOrderByAggregateInput
    _avg?: ResultAvgOrderByAggregateInput
    _max?: ResultMaxOrderByAggregateInput
    _min?: ResultMinOrderByAggregateInput
    _sum?: ResultSumOrderByAggregateInput
  }

  export type ResultScalarWhereWithAggregatesInput = {
    AND?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    OR?: ResultScalarWhereWithAggregatesInput[]
    NOT?: ResultScalarWhereWithAggregatesInput | ResultScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Result"> | string
    studentId?: StringWithAggregatesFilter<"Result"> | string
    examId?: StringWithAggregatesFilter<"Result"> | string
    score?: IntWithAggregatesFilter<"Result"> | number
    completionTime?: IntWithAggregatesFilter<"Result"> | number
    teacherApproval?: BoolWithAggregatesFilter<"Result"> | boolean
    adminApproval?: BoolWithAggregatesFilter<"Result"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Result"> | Date | string
    responses?: JsonNullableWithAggregatesFilter<"Result">
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: StringFilter<"Otp"> | string
    email?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    expires?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires?: SortOrder
    _relevance?: OtpOrderByRelevanceInput
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    email?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    expires?: DateTimeFilter<"Otp"> | Date | string
  }, "id">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Otp"> | string
    email?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    expires?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    examsCreated?: ExamCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentCreateNestedManyWithoutStudentInput
    results?: ResultCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentCreateNestedManyWithoutTeacherInput
    batch?: BatchCreateNestedOneWithoutStudentsInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    batchId?: string | null
    examsCreated?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutStudentInput
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchUncheckedCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    examsCreated?: ExamUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUpdateManyWithoutStudentNestedInput
    results?: ResultUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUpdateManyWithoutTeacherNestedInput
    batch?: BatchUpdateOneWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    examsCreated?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUncheckedUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    batchId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExamCreateInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutExamsCreatedInput
    assignments?: ExamAssignmentCreateNestedManyWithoutExamInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    results?: ResultCreateNestedManyWithoutExamInput
    batches?: BatchCreateNestedManyWithoutExamsInput
  }

  export type ExamUncheckedCreateInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    teacherId: string
    createdAt?: Date | string
    assignments?: ExamAssignmentUncheckedCreateNestedManyWithoutExamInput
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    results?: ResultUncheckedCreateNestedManyWithoutExamInput
    batches?: BatchUncheckedCreateNestedManyWithoutExamsInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutExamsCreatedNestedInput
    assignments?: ExamAssignmentUpdateManyWithoutExamNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    results?: ResultUpdateManyWithoutExamNestedInput
    batches?: BatchUpdateManyWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    results?: ResultUncheckedUpdateManyWithoutExamNestedInput
    batches?: BatchUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type ExamCreateManyInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    teacherId: string
    createdAt?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchCreateInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    creator?: UserCreateNestedOneWithoutBatchesCreatedInput
    students?: UserCreateNestedManyWithoutBatchInput
    exams?: ExamCreateNestedManyWithoutBatchesInput
    assignments?: BatchAssignmentCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    creatorId?: string | null
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutBatchInput
    exams?: ExamUncheckedCreateNestedManyWithoutBatchesInput
    assignments?: BatchAssignmentUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneWithoutBatchesCreatedNestedInput
    students?: UserUpdateManyWithoutBatchNestedInput
    exams?: ExamUpdateManyWithoutBatchesNestedInput
    assignments?: BatchAssignmentUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutBatchNestedInput
    exams?: ExamUncheckedUpdateManyWithoutBatchesNestedInput
    assignments?: BatchAssignmentUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    creatorId?: string | null
    createdAt?: Date | string
  }

  export type BatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    batch: BatchCreateNestedOneWithoutAssignmentsInput
    teacher: UserCreateNestedOneWithoutAssignedBatchesInput
  }

  export type BatchAssignmentUncheckedCreateInput = {
    id?: string
    batchId: string
    teacherId: string
    assignedAt?: Date | string
  }

  export type BatchAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutAssignmentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignedBatchesNestedInput
  }

  export type BatchAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchAssignmentCreateManyInput = {
    id?: string
    batchId: string
    teacherId: string
    assignedAt?: Date | string
  }

  export type BatchAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAssignmentCreateInput = {
    id?: string
    assignedAt?: Date | string
    exam: ExamCreateNestedOneWithoutAssignmentsInput
    student: UserCreateNestedOneWithoutAssignedExamsInput
  }

  export type ExamAssignmentUncheckedCreateInput = {
    id?: string
    examId: string
    studentId: string
    assignedAt?: Date | string
  }

  export type ExamAssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutAssignmentsNestedInput
    student?: UserUpdateOneRequiredWithoutAssignedExamsNestedInput
  }

  export type ExamAssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAssignmentCreateManyInput = {
    id?: string
    examId: string
    studentId: string
    assignedAt?: Date | string
  }

  export type ExamAssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    text: string
    options: string
    correctAnswerIndex: number
    exam: ExamCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    examId: string
    text: string
    options: string
    correctAnswerIndex: number
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateManyInput = {
    id?: string
    examId: string
    text: string
    options: string
    correctAnswerIndex: number
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type ResultCreateInput = {
    id?: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
    exam: ExamCreateNestedOneWithoutResultsInput
    student: UserCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateInput = {
    id?: string
    studentId: string
    examId: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
    exam?: ExamUpdateOneRequiredWithoutResultsNestedInput
    student?: UserUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultCreateManyInput = {
    id?: string
    studentId: string
    examId: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type OtpCreateInput = {
    id?: string
    email: string
    otp: string
    expires: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: string
    email: string
    otp: string
    expires: Date | string
  }

  export type OtpUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: string
    email: string
    otp: string
    expires: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ExamListRelationFilter = {
    every?: ExamWhereInput
    some?: ExamWhereInput
    none?: ExamWhereInput
  }

  export type ExamAssignmentListRelationFilter = {
    every?: ExamAssignmentWhereInput
    some?: ExamAssignmentWhereInput
    none?: ExamAssignmentWhereInput
  }

  export type ResultListRelationFilter = {
    every?: ResultWhereInput
    some?: ResultWhereInput
    none?: ResultWhereInput
  }

  export type BatchListRelationFilter = {
    every?: BatchWhereInput
    some?: BatchWhereInput
    none?: BatchWhereInput
  }

  export type BatchAssignmentListRelationFilter = {
    every?: BatchAssignmentWhereInput
    some?: BatchAssignmentWhereInput
    none?: BatchAssignmentWhereInput
  }

  export type BatchNullableScalarRelationFilter = {
    is?: BatchWhereInput | null
    isNot?: BatchWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ExamOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ResultOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchAssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    city?: SortOrder
    phoneNumber?: SortOrder
    requestedRole?: SortOrder
    profileUpdateCount?: SortOrder
    batchId?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    phoneNumber?: SortOrder
    profileUpdateCount?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    city?: SortOrder
    phoneNumber?: SortOrder
    requestedRole?: SortOrder
    profileUpdateCount?: SortOrder
    batchId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    city?: SortOrder
    phoneNumber?: SortOrder
    requestedRole?: SortOrder
    profileUpdateCount?: SortOrder
    batchId?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    phoneNumber?: SortOrder
    profileUpdateCount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamOrderByRelevanceInput = {
    fields: ExamOrderByRelevanceFieldEnum | ExamOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timeLimit?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    timeLimit?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timeLimit?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    timeLimit?: SortOrder
    teacherId?: SortOrder
    createdAt?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    timeLimit?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BatchOrderByRelevanceInput = {
    fields: BatchOrderByRelevanceFieldEnum | BatchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BatchCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type BatchMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type BatchMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    creatorId?: SortOrder
    createdAt?: SortOrder
  }

  export type BatchScalarRelationFilter = {
    is?: BatchWhereInput
    isNot?: BatchWhereInput
  }

  export type BatchAssignmentOrderByRelevanceInput = {
    fields: BatchAssignmentOrderByRelevanceFieldEnum | BatchAssignmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BatchAssignmentBatchIdTeacherIdCompoundUniqueInput = {
    batchId: string
    teacherId: string
  }

  export type BatchAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    teacherId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BatchAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    teacherId?: SortOrder
    assignedAt?: SortOrder
  }

  export type BatchAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    batchId?: SortOrder
    teacherId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type ExamAssignmentOrderByRelevanceInput = {
    fields: ExamAssignmentOrderByRelevanceFieldEnum | ExamAssignmentOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ExamAssignmentExamIdStudentIdCompoundUniqueInput = {
    examId: string
    studentId: string
  }

  export type ExamAssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ExamAssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    assignedAt?: SortOrder
  }

  export type ExamAssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    studentId?: SortOrder
    assignedAt?: SortOrder
  }

  export type QuestionOrderByRelevanceInput = {
    fields: QuestionOrderByRelevanceFieldEnum | QuestionOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    correctAnswerIndex?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    options?: SortOrder
    correctAnswerIndex?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    correctAnswerIndex?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ResultOrderByRelevanceInput = {
    fields: ResultOrderByRelevanceFieldEnum | ResultOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type ResultCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    score?: SortOrder
    completionTime?: SortOrder
    teacherApproval?: SortOrder
    adminApproval?: SortOrder
    createdAt?: SortOrder
    responses?: SortOrder
  }

  export type ResultAvgOrderByAggregateInput = {
    score?: SortOrder
    completionTime?: SortOrder
  }

  export type ResultMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    score?: SortOrder
    completionTime?: SortOrder
    teacherApproval?: SortOrder
    adminApproval?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    examId?: SortOrder
    score?: SortOrder
    completionTime?: SortOrder
    teacherApproval?: SortOrder
    adminApproval?: SortOrder
    createdAt?: SortOrder
  }

  export type ResultSumOrderByAggregateInput = {
    score?: SortOrder
    completionTime?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type OtpOrderByRelevanceInput = {
    fields: OtpOrderByRelevanceFieldEnum | OtpOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    otp?: SortOrder
    expires?: SortOrder
  }

  export type ExamCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput> | ExamCreateWithoutTeacherInput[] | ExamUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutTeacherInput | ExamCreateOrConnectWithoutTeacherInput[]
    createMany?: ExamCreateManyTeacherInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type ExamAssignmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExamAssignmentCreateWithoutStudentInput, ExamAssignmentUncheckedCreateWithoutStudentInput> | ExamAssignmentCreateWithoutStudentInput[] | ExamAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutStudentInput | ExamAssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: ExamAssignmentCreateManyStudentInputEnvelope
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutStudentInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type BatchCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BatchCreateWithoutCreatorInput, BatchUncheckedCreateWithoutCreatorInput> | BatchCreateWithoutCreatorInput[] | BatchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutCreatorInput | BatchCreateOrConnectWithoutCreatorInput[]
    createMany?: BatchCreateManyCreatorInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type BatchAssignmentCreateNestedManyWithoutTeacherInput = {
    create?: XOR<BatchAssignmentCreateWithoutTeacherInput, BatchAssignmentUncheckedCreateWithoutTeacherInput> | BatchAssignmentCreateWithoutTeacherInput[] | BatchAssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: BatchAssignmentCreateOrConnectWithoutTeacherInput | BatchAssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: BatchAssignmentCreateManyTeacherInputEnvelope
    connect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
  }

  export type BatchCreateNestedOneWithoutStudentsInput = {
    create?: XOR<BatchCreateWithoutStudentsInput, BatchUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutStudentsInput
    connect?: BatchWhereUniqueInput
  }

  export type ExamUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput> | ExamCreateWithoutTeacherInput[] | ExamUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutTeacherInput | ExamCreateOrConnectWithoutTeacherInput[]
    createMany?: ExamCreateManyTeacherInputEnvelope
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type ExamAssignmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ExamAssignmentCreateWithoutStudentInput, ExamAssignmentUncheckedCreateWithoutStudentInput> | ExamAssignmentCreateWithoutStudentInput[] | ExamAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutStudentInput | ExamAssignmentCreateOrConnectWithoutStudentInput[]
    createMany?: ExamAssignmentCreateManyStudentInputEnvelope
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<BatchCreateWithoutCreatorInput, BatchUncheckedCreateWithoutCreatorInput> | BatchCreateWithoutCreatorInput[] | BatchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutCreatorInput | BatchCreateOrConnectWithoutCreatorInput[]
    createMany?: BatchCreateManyCreatorInputEnvelope
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type BatchAssignmentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<BatchAssignmentCreateWithoutTeacherInput, BatchAssignmentUncheckedCreateWithoutTeacherInput> | BatchAssignmentCreateWithoutTeacherInput[] | BatchAssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: BatchAssignmentCreateOrConnectWithoutTeacherInput | BatchAssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: BatchAssignmentCreateManyTeacherInputEnvelope
    connect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBigIntFieldUpdateOperationsInput = {
    set?: bigint | number | null
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ExamUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput> | ExamCreateWithoutTeacherInput[] | ExamUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutTeacherInput | ExamCreateOrConnectWithoutTeacherInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutTeacherInput | ExamUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ExamCreateManyTeacherInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutTeacherInput | ExamUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutTeacherInput | ExamUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type ExamAssignmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExamAssignmentCreateWithoutStudentInput, ExamAssignmentUncheckedCreateWithoutStudentInput> | ExamAssignmentCreateWithoutStudentInput[] | ExamAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutStudentInput | ExamAssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: ExamAssignmentUpsertWithWhereUniqueWithoutStudentInput | ExamAssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExamAssignmentCreateManyStudentInputEnvelope
    set?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    disconnect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    delete?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    update?: ExamAssignmentUpdateWithWhereUniqueWithoutStudentInput | ExamAssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExamAssignmentUpdateManyWithWhereWithoutStudentInput | ExamAssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutStudentInput | ResultUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutStudentInput | ResultUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutStudentInput | ResultUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type BatchUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BatchCreateWithoutCreatorInput, BatchUncheckedCreateWithoutCreatorInput> | BatchCreateWithoutCreatorInput[] | BatchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutCreatorInput | BatchCreateOrConnectWithoutCreatorInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutCreatorInput | BatchUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BatchCreateManyCreatorInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutCreatorInput | BatchUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutCreatorInput | BatchUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type BatchAssignmentUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<BatchAssignmentCreateWithoutTeacherInput, BatchAssignmentUncheckedCreateWithoutTeacherInput> | BatchAssignmentCreateWithoutTeacherInput[] | BatchAssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: BatchAssignmentCreateOrConnectWithoutTeacherInput | BatchAssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: BatchAssignmentUpsertWithWhereUniqueWithoutTeacherInput | BatchAssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: BatchAssignmentCreateManyTeacherInputEnvelope
    set?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    disconnect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    delete?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    connect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    update?: BatchAssignmentUpdateWithWhereUniqueWithoutTeacherInput | BatchAssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: BatchAssignmentUpdateManyWithWhereWithoutTeacherInput | BatchAssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: BatchAssignmentScalarWhereInput | BatchAssignmentScalarWhereInput[]
  }

  export type BatchUpdateOneWithoutStudentsNestedInput = {
    create?: XOR<BatchCreateWithoutStudentsInput, BatchUncheckedCreateWithoutStudentsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutStudentsInput
    upsert?: BatchUpsertWithoutStudentsInput
    disconnect?: BatchWhereInput | boolean
    delete?: BatchWhereInput | boolean
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutStudentsInput, BatchUpdateWithoutStudentsInput>, BatchUncheckedUpdateWithoutStudentsInput>
  }

  export type ExamUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput> | ExamCreateWithoutTeacherInput[] | ExamUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutTeacherInput | ExamCreateOrConnectWithoutTeacherInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutTeacherInput | ExamUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: ExamCreateManyTeacherInputEnvelope
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutTeacherInput | ExamUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutTeacherInput | ExamUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type ExamAssignmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ExamAssignmentCreateWithoutStudentInput, ExamAssignmentUncheckedCreateWithoutStudentInput> | ExamAssignmentCreateWithoutStudentInput[] | ExamAssignmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutStudentInput | ExamAssignmentCreateOrConnectWithoutStudentInput[]
    upsert?: ExamAssignmentUpsertWithWhereUniqueWithoutStudentInput | ExamAssignmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ExamAssignmentCreateManyStudentInputEnvelope
    set?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    disconnect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    delete?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    update?: ExamAssignmentUpdateWithWhereUniqueWithoutStudentInput | ExamAssignmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ExamAssignmentUpdateManyWithWhereWithoutStudentInput | ExamAssignmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput> | ResultCreateWithoutStudentInput[] | ResultUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutStudentInput | ResultCreateOrConnectWithoutStudentInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutStudentInput | ResultUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: ResultCreateManyStudentInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutStudentInput | ResultUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutStudentInput | ResultUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<BatchCreateWithoutCreatorInput, BatchUncheckedCreateWithoutCreatorInput> | BatchCreateWithoutCreatorInput[] | BatchUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutCreatorInput | BatchCreateOrConnectWithoutCreatorInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutCreatorInput | BatchUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: BatchCreateManyCreatorInputEnvelope
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutCreatorInput | BatchUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutCreatorInput | BatchUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type BatchAssignmentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<BatchAssignmentCreateWithoutTeacherInput, BatchAssignmentUncheckedCreateWithoutTeacherInput> | BatchAssignmentCreateWithoutTeacherInput[] | BatchAssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: BatchAssignmentCreateOrConnectWithoutTeacherInput | BatchAssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: BatchAssignmentUpsertWithWhereUniqueWithoutTeacherInput | BatchAssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: BatchAssignmentCreateManyTeacherInputEnvelope
    set?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    disconnect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    delete?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    connect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    update?: BatchAssignmentUpdateWithWhereUniqueWithoutTeacherInput | BatchAssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: BatchAssignmentUpdateManyWithWhereWithoutTeacherInput | BatchAssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: BatchAssignmentScalarWhereInput | BatchAssignmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutExamsCreatedInput = {
    create?: XOR<UserCreateWithoutExamsCreatedInput, UserUncheckedCreateWithoutExamsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamsCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type ExamAssignmentCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput> | ExamAssignmentCreateWithoutExamInput[] | ExamAssignmentUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutExamInput | ExamAssignmentCreateOrConnectWithoutExamInput[]
    createMany?: ExamAssignmentCreateManyExamInputEnvelope
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ResultCreateNestedManyWithoutExamInput = {
    create?: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput> | ResultCreateWithoutExamInput[] | ResultUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutExamInput | ResultCreateOrConnectWithoutExamInput[]
    createMany?: ResultCreateManyExamInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type BatchCreateNestedManyWithoutExamsInput = {
    create?: XOR<BatchCreateWithoutExamsInput, BatchUncheckedCreateWithoutExamsInput> | BatchCreateWithoutExamsInput[] | BatchUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutExamsInput | BatchCreateOrConnectWithoutExamsInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type ExamAssignmentUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput> | ExamAssignmentCreateWithoutExamInput[] | ExamAssignmentUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutExamInput | ExamAssignmentCreateOrConnectWithoutExamInput[]
    createMany?: ExamAssignmentCreateManyExamInputEnvelope
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type ResultUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput> | ResultCreateWithoutExamInput[] | ResultUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutExamInput | ResultCreateOrConnectWithoutExamInput[]
    createMany?: ResultCreateManyExamInputEnvelope
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
  }

  export type BatchUncheckedCreateNestedManyWithoutExamsInput = {
    create?: XOR<BatchCreateWithoutExamsInput, BatchUncheckedCreateWithoutExamsInput> | BatchCreateWithoutExamsInput[] | BatchUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutExamsInput | BatchCreateOrConnectWithoutExamsInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutExamsCreatedNestedInput = {
    create?: XOR<UserCreateWithoutExamsCreatedInput, UserUncheckedCreateWithoutExamsCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutExamsCreatedInput
    upsert?: UserUpsertWithoutExamsCreatedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutExamsCreatedInput, UserUpdateWithoutExamsCreatedInput>, UserUncheckedUpdateWithoutExamsCreatedInput>
  }

  export type ExamAssignmentUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput> | ExamAssignmentCreateWithoutExamInput[] | ExamAssignmentUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutExamInput | ExamAssignmentCreateOrConnectWithoutExamInput[]
    upsert?: ExamAssignmentUpsertWithWhereUniqueWithoutExamInput | ExamAssignmentUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamAssignmentCreateManyExamInputEnvelope
    set?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    disconnect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    delete?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    update?: ExamAssignmentUpdateWithWhereUniqueWithoutExamInput | ExamAssignmentUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamAssignmentUpdateManyWithWhereWithoutExamInput | ExamAssignmentUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ResultUpdateManyWithoutExamNestedInput = {
    create?: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput> | ResultCreateWithoutExamInput[] | ResultUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutExamInput | ResultCreateOrConnectWithoutExamInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutExamInput | ResultUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ResultCreateManyExamInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutExamInput | ResultUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutExamInput | ResultUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type BatchUpdateManyWithoutExamsNestedInput = {
    create?: XOR<BatchCreateWithoutExamsInput, BatchUncheckedCreateWithoutExamsInput> | BatchCreateWithoutExamsInput[] | BatchUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutExamsInput | BatchCreateOrConnectWithoutExamsInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutExamsInput | BatchUpsertWithWhereUniqueWithoutExamsInput[]
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutExamsInput | BatchUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutExamsInput | BatchUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput> | ExamAssignmentCreateWithoutExamInput[] | ExamAssignmentUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ExamAssignmentCreateOrConnectWithoutExamInput | ExamAssignmentCreateOrConnectWithoutExamInput[]
    upsert?: ExamAssignmentUpsertWithWhereUniqueWithoutExamInput | ExamAssignmentUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ExamAssignmentCreateManyExamInputEnvelope
    set?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    disconnect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    delete?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    connect?: ExamAssignmentWhereUniqueInput | ExamAssignmentWhereUniqueInput[]
    update?: ExamAssignmentUpdateWithWhereUniqueWithoutExamInput | ExamAssignmentUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ExamAssignmentUpdateManyWithWhereWithoutExamInput | ExamAssignmentUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type ResultUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput> | ResultCreateWithoutExamInput[] | ResultUncheckedCreateWithoutExamInput[]
    connectOrCreate?: ResultCreateOrConnectWithoutExamInput | ResultCreateOrConnectWithoutExamInput[]
    upsert?: ResultUpsertWithWhereUniqueWithoutExamInput | ResultUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: ResultCreateManyExamInputEnvelope
    set?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    disconnect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    delete?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    connect?: ResultWhereUniqueInput | ResultWhereUniqueInput[]
    update?: ResultUpdateWithWhereUniqueWithoutExamInput | ResultUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: ResultUpdateManyWithWhereWithoutExamInput | ResultUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: ResultScalarWhereInput | ResultScalarWhereInput[]
  }

  export type BatchUncheckedUpdateManyWithoutExamsNestedInput = {
    create?: XOR<BatchCreateWithoutExamsInput, BatchUncheckedCreateWithoutExamsInput> | BatchCreateWithoutExamsInput[] | BatchUncheckedCreateWithoutExamsInput[]
    connectOrCreate?: BatchCreateOrConnectWithoutExamsInput | BatchCreateOrConnectWithoutExamsInput[]
    upsert?: BatchUpsertWithWhereUniqueWithoutExamsInput | BatchUpsertWithWhereUniqueWithoutExamsInput[]
    set?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    disconnect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    delete?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    connect?: BatchWhereUniqueInput | BatchWhereUniqueInput[]
    update?: BatchUpdateWithWhereUniqueWithoutExamsInput | BatchUpdateWithWhereUniqueWithoutExamsInput[]
    updateMany?: BatchUpdateManyWithWhereWithoutExamsInput | BatchUpdateManyWithWhereWithoutExamsInput[]
    deleteMany?: BatchScalarWhereInput | BatchScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutBatchesCreatedInput = {
    create?: XOR<UserCreateWithoutBatchesCreatedInput, UserUncheckedCreateWithoutBatchesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBatchesCreatedInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutBatchInput = {
    create?: XOR<UserCreateWithoutBatchInput, UserUncheckedCreateWithoutBatchInput> | UserCreateWithoutBatchInput[] | UserUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBatchInput | UserCreateOrConnectWithoutBatchInput[]
    createMany?: UserCreateManyBatchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExamCreateNestedManyWithoutBatchesInput = {
    create?: XOR<ExamCreateWithoutBatchesInput, ExamUncheckedCreateWithoutBatchesInput> | ExamCreateWithoutBatchesInput[] | ExamUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutBatchesInput | ExamCreateOrConnectWithoutBatchesInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type BatchAssignmentCreateNestedManyWithoutBatchInput = {
    create?: XOR<BatchAssignmentCreateWithoutBatchInput, BatchAssignmentUncheckedCreateWithoutBatchInput> | BatchAssignmentCreateWithoutBatchInput[] | BatchAssignmentUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: BatchAssignmentCreateOrConnectWithoutBatchInput | BatchAssignmentCreateOrConnectWithoutBatchInput[]
    createMany?: BatchAssignmentCreateManyBatchInputEnvelope
    connect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<UserCreateWithoutBatchInput, UserUncheckedCreateWithoutBatchInput> | UserCreateWithoutBatchInput[] | UserUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBatchInput | UserCreateOrConnectWithoutBatchInput[]
    createMany?: UserCreateManyBatchInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ExamUncheckedCreateNestedManyWithoutBatchesInput = {
    create?: XOR<ExamCreateWithoutBatchesInput, ExamUncheckedCreateWithoutBatchesInput> | ExamCreateWithoutBatchesInput[] | ExamUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutBatchesInput | ExamCreateOrConnectWithoutBatchesInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
  }

  export type BatchAssignmentUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<BatchAssignmentCreateWithoutBatchInput, BatchAssignmentUncheckedCreateWithoutBatchInput> | BatchAssignmentCreateWithoutBatchInput[] | BatchAssignmentUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: BatchAssignmentCreateOrConnectWithoutBatchInput | BatchAssignmentCreateOrConnectWithoutBatchInput[]
    createMany?: BatchAssignmentCreateManyBatchInputEnvelope
    connect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutBatchesCreatedNestedInput = {
    create?: XOR<UserCreateWithoutBatchesCreatedInput, UserUncheckedCreateWithoutBatchesCreatedInput>
    connectOrCreate?: UserCreateOrConnectWithoutBatchesCreatedInput
    upsert?: UserUpsertWithoutBatchesCreatedInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutBatchesCreatedInput, UserUpdateWithoutBatchesCreatedInput>, UserUncheckedUpdateWithoutBatchesCreatedInput>
  }

  export type UserUpdateManyWithoutBatchNestedInput = {
    create?: XOR<UserCreateWithoutBatchInput, UserUncheckedCreateWithoutBatchInput> | UserCreateWithoutBatchInput[] | UserUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBatchInput | UserCreateOrConnectWithoutBatchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBatchInput | UserUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: UserCreateManyBatchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBatchInput | UserUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBatchInput | UserUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExamUpdateManyWithoutBatchesNestedInput = {
    create?: XOR<ExamCreateWithoutBatchesInput, ExamUncheckedCreateWithoutBatchesInput> | ExamCreateWithoutBatchesInput[] | ExamUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutBatchesInput | ExamCreateOrConnectWithoutBatchesInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutBatchesInput | ExamUpsertWithWhereUniqueWithoutBatchesInput[]
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutBatchesInput | ExamUpdateWithWhereUniqueWithoutBatchesInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutBatchesInput | ExamUpdateManyWithWhereWithoutBatchesInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type BatchAssignmentUpdateManyWithoutBatchNestedInput = {
    create?: XOR<BatchAssignmentCreateWithoutBatchInput, BatchAssignmentUncheckedCreateWithoutBatchInput> | BatchAssignmentCreateWithoutBatchInput[] | BatchAssignmentUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: BatchAssignmentCreateOrConnectWithoutBatchInput | BatchAssignmentCreateOrConnectWithoutBatchInput[]
    upsert?: BatchAssignmentUpsertWithWhereUniqueWithoutBatchInput | BatchAssignmentUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: BatchAssignmentCreateManyBatchInputEnvelope
    set?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    disconnect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    delete?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    connect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    update?: BatchAssignmentUpdateWithWhereUniqueWithoutBatchInput | BatchAssignmentUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: BatchAssignmentUpdateManyWithWhereWithoutBatchInput | BatchAssignmentUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: BatchAssignmentScalarWhereInput | BatchAssignmentScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<UserCreateWithoutBatchInput, UserUncheckedCreateWithoutBatchInput> | UserCreateWithoutBatchInput[] | UserUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: UserCreateOrConnectWithoutBatchInput | UserCreateOrConnectWithoutBatchInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutBatchInput | UserUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: UserCreateManyBatchInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutBatchInput | UserUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: UserUpdateManyWithWhereWithoutBatchInput | UserUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ExamUncheckedUpdateManyWithoutBatchesNestedInput = {
    create?: XOR<ExamCreateWithoutBatchesInput, ExamUncheckedCreateWithoutBatchesInput> | ExamCreateWithoutBatchesInput[] | ExamUncheckedCreateWithoutBatchesInput[]
    connectOrCreate?: ExamCreateOrConnectWithoutBatchesInput | ExamCreateOrConnectWithoutBatchesInput[]
    upsert?: ExamUpsertWithWhereUniqueWithoutBatchesInput | ExamUpsertWithWhereUniqueWithoutBatchesInput[]
    set?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    disconnect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    delete?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    connect?: ExamWhereUniqueInput | ExamWhereUniqueInput[]
    update?: ExamUpdateWithWhereUniqueWithoutBatchesInput | ExamUpdateWithWhereUniqueWithoutBatchesInput[]
    updateMany?: ExamUpdateManyWithWhereWithoutBatchesInput | ExamUpdateManyWithWhereWithoutBatchesInput[]
    deleteMany?: ExamScalarWhereInput | ExamScalarWhereInput[]
  }

  export type BatchAssignmentUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<BatchAssignmentCreateWithoutBatchInput, BatchAssignmentUncheckedCreateWithoutBatchInput> | BatchAssignmentCreateWithoutBatchInput[] | BatchAssignmentUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: BatchAssignmentCreateOrConnectWithoutBatchInput | BatchAssignmentCreateOrConnectWithoutBatchInput[]
    upsert?: BatchAssignmentUpsertWithWhereUniqueWithoutBatchInput | BatchAssignmentUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: BatchAssignmentCreateManyBatchInputEnvelope
    set?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    disconnect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    delete?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    connect?: BatchAssignmentWhereUniqueInput | BatchAssignmentWhereUniqueInput[]
    update?: BatchAssignmentUpdateWithWhereUniqueWithoutBatchInput | BatchAssignmentUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: BatchAssignmentUpdateManyWithWhereWithoutBatchInput | BatchAssignmentUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: BatchAssignmentScalarWhereInput | BatchAssignmentScalarWhereInput[]
  }

  export type BatchCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<BatchCreateWithoutAssignmentsInput, BatchUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutAssignmentsInput
    connect?: BatchWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedBatchesInput = {
    create?: XOR<UserCreateWithoutAssignedBatchesInput, UserUncheckedCreateWithoutAssignedBatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedBatchesInput
    connect?: UserWhereUniqueInput
  }

  export type BatchUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<BatchCreateWithoutAssignmentsInput, BatchUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: BatchCreateOrConnectWithoutAssignmentsInput
    upsert?: BatchUpsertWithoutAssignmentsInput
    connect?: BatchWhereUniqueInput
    update?: XOR<XOR<BatchUpdateToOneWithWhereWithoutAssignmentsInput, BatchUpdateWithoutAssignmentsInput>, BatchUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedBatchesNestedInput = {
    create?: XOR<UserCreateWithoutAssignedBatchesInput, UserUncheckedCreateWithoutAssignedBatchesInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedBatchesInput
    upsert?: UserUpsertWithoutAssignedBatchesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedBatchesInput, UserUpdateWithoutAssignedBatchesInput>, UserUncheckedUpdateWithoutAssignedBatchesInput>
  }

  export type ExamCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ExamCreateWithoutAssignmentsInput, ExamUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutAssignmentsInput
    connect?: ExamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignedExamsInput = {
    create?: XOR<UserCreateWithoutAssignedExamsInput, UserUncheckedCreateWithoutAssignedExamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedExamsInput
    connect?: UserWhereUniqueInput
  }

  export type ExamUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ExamCreateWithoutAssignmentsInput, ExamUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutAssignmentsInput
    upsert?: ExamUpsertWithoutAssignmentsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutAssignmentsInput, ExamUpdateWithoutAssignmentsInput>, ExamUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignedExamsNestedInput = {
    create?: XOR<UserCreateWithoutAssignedExamsInput, UserUncheckedCreateWithoutAssignedExamsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignedExamsInput
    upsert?: UserUpsertWithoutAssignedExamsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignedExamsInput, UserUpdateWithoutAssignedExamsInput>, UserUncheckedUpdateWithoutAssignedExamsInput>
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutQuestionsInput, ExamUpdateWithoutQuestionsInput>, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamCreateNestedOneWithoutResultsInput = {
    create?: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutResultsInput
    connect?: ExamWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutResultsInput = {
    create?: XOR<UserCreateWithoutResultsInput, UserUncheckedCreateWithoutResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResultsInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ExamUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutResultsInput
    upsert?: ExamUpsertWithoutResultsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutResultsInput, ExamUpdateWithoutResultsInput>, ExamUncheckedUpdateWithoutResultsInput>
  }

  export type UserUpdateOneRequiredWithoutResultsNestedInput = {
    create?: XOR<UserCreateWithoutResultsInput, UserUncheckedCreateWithoutResultsInput>
    connectOrCreate?: UserCreateOrConnectWithoutResultsInput
    upsert?: UserUpsertWithoutResultsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutResultsInput, UserUpdateWithoutResultsInput>, UserUncheckedUpdateWithoutResultsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBigIntNullableFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableFilter<$PrismaModel> | bigint | number | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBigIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel> | null
    in?: bigint[] | number[] | null
    notIn?: bigint[] | number[] | null
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntNullableWithAggregatesFilter<$PrismaModel> | bigint | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedBigIntNullableFilter<$PrismaModel>
    _min?: NestedBigIntNullableFilter<$PrismaModel>
    _max?: NestedBigIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ExamCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    createdAt?: Date | string
    assignments?: ExamAssignmentCreateNestedManyWithoutExamInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    results?: ResultCreateNestedManyWithoutExamInput
    batches?: BatchCreateNestedManyWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutTeacherInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    createdAt?: Date | string
    assignments?: ExamAssignmentUncheckedCreateNestedManyWithoutExamInput
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    results?: ResultUncheckedCreateNestedManyWithoutExamInput
    batches?: BatchUncheckedCreateNestedManyWithoutExamsInput
  }

  export type ExamCreateOrConnectWithoutTeacherInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput>
  }

  export type ExamCreateManyTeacherInputEnvelope = {
    data: ExamCreateManyTeacherInput | ExamCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type ExamAssignmentCreateWithoutStudentInput = {
    id?: string
    assignedAt?: Date | string
    exam: ExamCreateNestedOneWithoutAssignmentsInput
  }

  export type ExamAssignmentUncheckedCreateWithoutStudentInput = {
    id?: string
    examId: string
    assignedAt?: Date | string
  }

  export type ExamAssignmentCreateOrConnectWithoutStudentInput = {
    where: ExamAssignmentWhereUniqueInput
    create: XOR<ExamAssignmentCreateWithoutStudentInput, ExamAssignmentUncheckedCreateWithoutStudentInput>
  }

  export type ExamAssignmentCreateManyStudentInputEnvelope = {
    data: ExamAssignmentCreateManyStudentInput | ExamAssignmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutStudentInput = {
    id?: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
    exam: ExamCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutStudentInput = {
    id?: string
    examId: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultCreateOrConnectWithoutStudentInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput>
  }

  export type ResultCreateManyStudentInputEnvelope = {
    data: ResultCreateManyStudentInput | ResultCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type BatchCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    students?: UserCreateNestedManyWithoutBatchInput
    exams?: ExamCreateNestedManyWithoutBatchesInput
    assignments?: BatchAssignmentCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutBatchInput
    exams?: ExamUncheckedCreateNestedManyWithoutBatchesInput
    assignments?: BatchAssignmentUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutCreatorInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutCreatorInput, BatchUncheckedCreateWithoutCreatorInput>
  }

  export type BatchCreateManyCreatorInputEnvelope = {
    data: BatchCreateManyCreatorInput | BatchCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type BatchAssignmentCreateWithoutTeacherInput = {
    id?: string
    assignedAt?: Date | string
    batch: BatchCreateNestedOneWithoutAssignmentsInput
  }

  export type BatchAssignmentUncheckedCreateWithoutTeacherInput = {
    id?: string
    batchId: string
    assignedAt?: Date | string
  }

  export type BatchAssignmentCreateOrConnectWithoutTeacherInput = {
    where: BatchAssignmentWhereUniqueInput
    create: XOR<BatchAssignmentCreateWithoutTeacherInput, BatchAssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type BatchAssignmentCreateManyTeacherInputEnvelope = {
    data: BatchAssignmentCreateManyTeacherInput | BatchAssignmentCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type BatchCreateWithoutStudentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    creator?: UserCreateNestedOneWithoutBatchesCreatedInput
    exams?: ExamCreateNestedManyWithoutBatchesInput
    assignments?: BatchAssignmentCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutStudentsInput = {
    id?: string
    name: string
    description?: string | null
    creatorId?: string | null
    createdAt?: Date | string
    exams?: ExamUncheckedCreateNestedManyWithoutBatchesInput
    assignments?: BatchAssignmentUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutStudentsInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutStudentsInput, BatchUncheckedCreateWithoutStudentsInput>
  }

  export type ExamUpsertWithWhereUniqueWithoutTeacherInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutTeacherInput, ExamUncheckedUpdateWithoutTeacherInput>
    create: XOR<ExamCreateWithoutTeacherInput, ExamUncheckedCreateWithoutTeacherInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutTeacherInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutTeacherInput, ExamUncheckedUpdateWithoutTeacherInput>
  }

  export type ExamUpdateManyWithWhereWithoutTeacherInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutTeacherInput>
  }

  export type ExamScalarWhereInput = {
    AND?: ExamScalarWhereInput | ExamScalarWhereInput[]
    OR?: ExamScalarWhereInput[]
    NOT?: ExamScalarWhereInput | ExamScalarWhereInput[]
    id?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    description?: StringFilter<"Exam"> | string
    timeLimit?: IntFilter<"Exam"> | number
    teacherId?: StringFilter<"Exam"> | string
    createdAt?: DateTimeFilter<"Exam"> | Date | string
  }

  export type ExamAssignmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: ExamAssignmentWhereUniqueInput
    update: XOR<ExamAssignmentUpdateWithoutStudentInput, ExamAssignmentUncheckedUpdateWithoutStudentInput>
    create: XOR<ExamAssignmentCreateWithoutStudentInput, ExamAssignmentUncheckedCreateWithoutStudentInput>
  }

  export type ExamAssignmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: ExamAssignmentWhereUniqueInput
    data: XOR<ExamAssignmentUpdateWithoutStudentInput, ExamAssignmentUncheckedUpdateWithoutStudentInput>
  }

  export type ExamAssignmentUpdateManyWithWhereWithoutStudentInput = {
    where: ExamAssignmentScalarWhereInput
    data: XOR<ExamAssignmentUpdateManyMutationInput, ExamAssignmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type ExamAssignmentScalarWhereInput = {
    AND?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
    OR?: ExamAssignmentScalarWhereInput[]
    NOT?: ExamAssignmentScalarWhereInput | ExamAssignmentScalarWhereInput[]
    id?: StringFilter<"ExamAssignment"> | string
    examId?: StringFilter<"ExamAssignment"> | string
    studentId?: StringFilter<"ExamAssignment"> | string
    assignedAt?: DateTimeFilter<"ExamAssignment"> | Date | string
  }

  export type ResultUpsertWithWhereUniqueWithoutStudentInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutStudentInput, ResultUncheckedUpdateWithoutStudentInput>
    create: XOR<ResultCreateWithoutStudentInput, ResultUncheckedCreateWithoutStudentInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutStudentInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutStudentInput, ResultUncheckedUpdateWithoutStudentInput>
  }

  export type ResultUpdateManyWithWhereWithoutStudentInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutStudentInput>
  }

  export type ResultScalarWhereInput = {
    AND?: ResultScalarWhereInput | ResultScalarWhereInput[]
    OR?: ResultScalarWhereInput[]
    NOT?: ResultScalarWhereInput | ResultScalarWhereInput[]
    id?: StringFilter<"Result"> | string
    studentId?: StringFilter<"Result"> | string
    examId?: StringFilter<"Result"> | string
    score?: IntFilter<"Result"> | number
    completionTime?: IntFilter<"Result"> | number
    teacherApproval?: BoolFilter<"Result"> | boolean
    adminApproval?: BoolFilter<"Result"> | boolean
    createdAt?: DateTimeFilter<"Result"> | Date | string
    responses?: JsonNullableFilter<"Result">
  }

  export type BatchUpsertWithWhereUniqueWithoutCreatorInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutCreatorInput, BatchUncheckedUpdateWithoutCreatorInput>
    create: XOR<BatchCreateWithoutCreatorInput, BatchUncheckedCreateWithoutCreatorInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutCreatorInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutCreatorInput, BatchUncheckedUpdateWithoutCreatorInput>
  }

  export type BatchUpdateManyWithWhereWithoutCreatorInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutCreatorInput>
  }

  export type BatchScalarWhereInput = {
    AND?: BatchScalarWhereInput | BatchScalarWhereInput[]
    OR?: BatchScalarWhereInput[]
    NOT?: BatchScalarWhereInput | BatchScalarWhereInput[]
    id?: StringFilter<"Batch"> | string
    name?: StringFilter<"Batch"> | string
    description?: StringNullableFilter<"Batch"> | string | null
    creatorId?: StringNullableFilter<"Batch"> | string | null
    createdAt?: DateTimeFilter<"Batch"> | Date | string
  }

  export type BatchAssignmentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: BatchAssignmentWhereUniqueInput
    update: XOR<BatchAssignmentUpdateWithoutTeacherInput, BatchAssignmentUncheckedUpdateWithoutTeacherInput>
    create: XOR<BatchAssignmentCreateWithoutTeacherInput, BatchAssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type BatchAssignmentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: BatchAssignmentWhereUniqueInput
    data: XOR<BatchAssignmentUpdateWithoutTeacherInput, BatchAssignmentUncheckedUpdateWithoutTeacherInput>
  }

  export type BatchAssignmentUpdateManyWithWhereWithoutTeacherInput = {
    where: BatchAssignmentScalarWhereInput
    data: XOR<BatchAssignmentUpdateManyMutationInput, BatchAssignmentUncheckedUpdateManyWithoutTeacherInput>
  }

  export type BatchAssignmentScalarWhereInput = {
    AND?: BatchAssignmentScalarWhereInput | BatchAssignmentScalarWhereInput[]
    OR?: BatchAssignmentScalarWhereInput[]
    NOT?: BatchAssignmentScalarWhereInput | BatchAssignmentScalarWhereInput[]
    id?: StringFilter<"BatchAssignment"> | string
    batchId?: StringFilter<"BatchAssignment"> | string
    teacherId?: StringFilter<"BatchAssignment"> | string
    assignedAt?: DateTimeFilter<"BatchAssignment"> | Date | string
  }

  export type BatchUpsertWithoutStudentsInput = {
    update: XOR<BatchUpdateWithoutStudentsInput, BatchUncheckedUpdateWithoutStudentsInput>
    create: XOR<BatchCreateWithoutStudentsInput, BatchUncheckedCreateWithoutStudentsInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutStudentsInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutStudentsInput, BatchUncheckedUpdateWithoutStudentsInput>
  }

  export type BatchUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneWithoutBatchesCreatedNestedInput
    exams?: ExamUpdateManyWithoutBatchesNestedInput
    assignments?: BatchAssignmentUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutStudentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exams?: ExamUncheckedUpdateManyWithoutBatchesNestedInput
    assignments?: BatchAssignmentUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type UserCreateWithoutExamsCreatedInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    assignedExams?: ExamAssignmentCreateNestedManyWithoutStudentInput
    results?: ResultCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentCreateNestedManyWithoutTeacherInput
    batch?: BatchCreateNestedOneWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutExamsCreatedInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    batchId?: string | null
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutStudentInput
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchUncheckedCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutExamsCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutExamsCreatedInput, UserUncheckedCreateWithoutExamsCreatedInput>
  }

  export type ExamAssignmentCreateWithoutExamInput = {
    id?: string
    assignedAt?: Date | string
    student: UserCreateNestedOneWithoutAssignedExamsInput
  }

  export type ExamAssignmentUncheckedCreateWithoutExamInput = {
    id?: string
    studentId: string
    assignedAt?: Date | string
  }

  export type ExamAssignmentCreateOrConnectWithoutExamInput = {
    where: ExamAssignmentWhereUniqueInput
    create: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput>
  }

  export type ExamAssignmentCreateManyExamInputEnvelope = {
    data: ExamAssignmentCreateManyExamInput | ExamAssignmentCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutExamInput = {
    id?: string
    text: string
    options: string
    correctAnswerIndex: number
  }

  export type QuestionUncheckedCreateWithoutExamInput = {
    id?: string
    text: string
    options: string
    correctAnswerIndex: number
  }

  export type QuestionCreateOrConnectWithoutExamInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionCreateManyExamInputEnvelope = {
    data: QuestionCreateManyExamInput | QuestionCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type ResultCreateWithoutExamInput = {
    id?: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
    student: UserCreateNestedOneWithoutResultsInput
  }

  export type ResultUncheckedCreateWithoutExamInput = {
    id?: string
    studentId: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultCreateOrConnectWithoutExamInput = {
    where: ResultWhereUniqueInput
    create: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput>
  }

  export type ResultCreateManyExamInputEnvelope = {
    data: ResultCreateManyExamInput | ResultCreateManyExamInput[]
    skipDuplicates?: boolean
  }

  export type BatchCreateWithoutExamsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    creator?: UserCreateNestedOneWithoutBatchesCreatedInput
    students?: UserCreateNestedManyWithoutBatchInput
    assignments?: BatchAssignmentCreateNestedManyWithoutBatchInput
  }

  export type BatchUncheckedCreateWithoutExamsInput = {
    id?: string
    name: string
    description?: string | null
    creatorId?: string | null
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutBatchInput
    assignments?: BatchAssignmentUncheckedCreateNestedManyWithoutBatchInput
  }

  export type BatchCreateOrConnectWithoutExamsInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutExamsInput, BatchUncheckedCreateWithoutExamsInput>
  }

  export type UserUpsertWithoutExamsCreatedInput = {
    update: XOR<UserUpdateWithoutExamsCreatedInput, UserUncheckedUpdateWithoutExamsCreatedInput>
    create: XOR<UserCreateWithoutExamsCreatedInput, UserUncheckedCreateWithoutExamsCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutExamsCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutExamsCreatedInput, UserUncheckedUpdateWithoutExamsCreatedInput>
  }

  export type UserUpdateWithoutExamsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    assignedExams?: ExamAssignmentUpdateManyWithoutStudentNestedInput
    results?: ResultUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUpdateManyWithoutTeacherNestedInput
    batch?: BatchUpdateOneWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutExamsCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUncheckedUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ExamAssignmentUpsertWithWhereUniqueWithoutExamInput = {
    where: ExamAssignmentWhereUniqueInput
    update: XOR<ExamAssignmentUpdateWithoutExamInput, ExamAssignmentUncheckedUpdateWithoutExamInput>
    create: XOR<ExamAssignmentCreateWithoutExamInput, ExamAssignmentUncheckedCreateWithoutExamInput>
  }

  export type ExamAssignmentUpdateWithWhereUniqueWithoutExamInput = {
    where: ExamAssignmentWhereUniqueInput
    data: XOR<ExamAssignmentUpdateWithoutExamInput, ExamAssignmentUncheckedUpdateWithoutExamInput>
  }

  export type ExamAssignmentUpdateManyWithWhereWithoutExamInput = {
    where: ExamAssignmentScalarWhereInput
    data: XOR<ExamAssignmentUpdateManyMutationInput, ExamAssignmentUncheckedUpdateManyWithoutExamInput>
  }

  export type QuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
  }

  export type QuestionUpdateManyWithWhereWithoutExamInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    examId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    options?: StringFilter<"Question"> | string
    correctAnswerIndex?: IntFilter<"Question"> | number
  }

  export type ResultUpsertWithWhereUniqueWithoutExamInput = {
    where: ResultWhereUniqueInput
    update: XOR<ResultUpdateWithoutExamInput, ResultUncheckedUpdateWithoutExamInput>
    create: XOR<ResultCreateWithoutExamInput, ResultUncheckedCreateWithoutExamInput>
  }

  export type ResultUpdateWithWhereUniqueWithoutExamInput = {
    where: ResultWhereUniqueInput
    data: XOR<ResultUpdateWithoutExamInput, ResultUncheckedUpdateWithoutExamInput>
  }

  export type ResultUpdateManyWithWhereWithoutExamInput = {
    where: ResultScalarWhereInput
    data: XOR<ResultUpdateManyMutationInput, ResultUncheckedUpdateManyWithoutExamInput>
  }

  export type BatchUpsertWithWhereUniqueWithoutExamsInput = {
    where: BatchWhereUniqueInput
    update: XOR<BatchUpdateWithoutExamsInput, BatchUncheckedUpdateWithoutExamsInput>
    create: XOR<BatchCreateWithoutExamsInput, BatchUncheckedCreateWithoutExamsInput>
  }

  export type BatchUpdateWithWhereUniqueWithoutExamsInput = {
    where: BatchWhereUniqueInput
    data: XOR<BatchUpdateWithoutExamsInput, BatchUncheckedUpdateWithoutExamsInput>
  }

  export type BatchUpdateManyWithWhereWithoutExamsInput = {
    where: BatchScalarWhereInput
    data: XOR<BatchUpdateManyMutationInput, BatchUncheckedUpdateManyWithoutExamsInput>
  }

  export type UserCreateWithoutBatchesCreatedInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    examsCreated?: ExamCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentCreateNestedManyWithoutStudentInput
    results?: ResultCreateNestedManyWithoutStudentInput
    assignedBatches?: BatchAssignmentCreateNestedManyWithoutTeacherInput
    batch?: BatchCreateNestedOneWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutBatchesCreatedInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    batchId?: string | null
    examsCreated?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutStudentInput
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
    assignedBatches?: BatchAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutBatchesCreatedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBatchesCreatedInput, UserUncheckedCreateWithoutBatchesCreatedInput>
  }

  export type UserCreateWithoutBatchInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    examsCreated?: ExamCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentCreateNestedManyWithoutStudentInput
    results?: ResultCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutBatchInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    examsCreated?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutStudentInput
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchUncheckedCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutBatchInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutBatchInput, UserUncheckedCreateWithoutBatchInput>
  }

  export type UserCreateManyBatchInputEnvelope = {
    data: UserCreateManyBatchInput | UserCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type ExamCreateWithoutBatchesInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutExamsCreatedInput
    assignments?: ExamAssignmentCreateNestedManyWithoutExamInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    results?: ResultCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutBatchesInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    teacherId: string
    createdAt?: Date | string
    assignments?: ExamAssignmentUncheckedCreateNestedManyWithoutExamInput
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    results?: ResultUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutBatchesInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutBatchesInput, ExamUncheckedCreateWithoutBatchesInput>
  }

  export type BatchAssignmentCreateWithoutBatchInput = {
    id?: string
    assignedAt?: Date | string
    teacher: UserCreateNestedOneWithoutAssignedBatchesInput
  }

  export type BatchAssignmentUncheckedCreateWithoutBatchInput = {
    id?: string
    teacherId: string
    assignedAt?: Date | string
  }

  export type BatchAssignmentCreateOrConnectWithoutBatchInput = {
    where: BatchAssignmentWhereUniqueInput
    create: XOR<BatchAssignmentCreateWithoutBatchInput, BatchAssignmentUncheckedCreateWithoutBatchInput>
  }

  export type BatchAssignmentCreateManyBatchInputEnvelope = {
    data: BatchAssignmentCreateManyBatchInput | BatchAssignmentCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutBatchesCreatedInput = {
    update: XOR<UserUpdateWithoutBatchesCreatedInput, UserUncheckedUpdateWithoutBatchesCreatedInput>
    create: XOR<UserCreateWithoutBatchesCreatedInput, UserUncheckedCreateWithoutBatchesCreatedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutBatchesCreatedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutBatchesCreatedInput, UserUncheckedUpdateWithoutBatchesCreatedInput>
  }

  export type UserUpdateWithoutBatchesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    examsCreated?: ExamUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUpdateManyWithoutStudentNestedInput
    results?: ResultUpdateManyWithoutStudentNestedInput
    assignedBatches?: BatchAssignmentUpdateManyWithoutTeacherNestedInput
    batch?: BatchUpdateOneWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutBatchesCreatedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    examsCreated?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
    assignedBatches?: BatchAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutBatchInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutBatchInput, UserUncheckedUpdateWithoutBatchInput>
    create: XOR<UserCreateWithoutBatchInput, UserUncheckedCreateWithoutBatchInput>
  }

  export type UserUpdateWithWhereUniqueWithoutBatchInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutBatchInput, UserUncheckedUpdateWithoutBatchInput>
  }

  export type UserUpdateManyWithWhereWithoutBatchInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutBatchInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    city?: StringNullableFilter<"User"> | string | null
    phoneNumber?: BigIntNullableFilter<"User"> | bigint | number | null
    requestedRole?: StringNullableFilter<"User"> | string | null
    profileUpdateCount?: IntFilter<"User"> | number
    batchId?: StringNullableFilter<"User"> | string | null
  }

  export type ExamUpsertWithWhereUniqueWithoutBatchesInput = {
    where: ExamWhereUniqueInput
    update: XOR<ExamUpdateWithoutBatchesInput, ExamUncheckedUpdateWithoutBatchesInput>
    create: XOR<ExamCreateWithoutBatchesInput, ExamUncheckedCreateWithoutBatchesInput>
  }

  export type ExamUpdateWithWhereUniqueWithoutBatchesInput = {
    where: ExamWhereUniqueInput
    data: XOR<ExamUpdateWithoutBatchesInput, ExamUncheckedUpdateWithoutBatchesInput>
  }

  export type ExamUpdateManyWithWhereWithoutBatchesInput = {
    where: ExamScalarWhereInput
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyWithoutBatchesInput>
  }

  export type BatchAssignmentUpsertWithWhereUniqueWithoutBatchInput = {
    where: BatchAssignmentWhereUniqueInput
    update: XOR<BatchAssignmentUpdateWithoutBatchInput, BatchAssignmentUncheckedUpdateWithoutBatchInput>
    create: XOR<BatchAssignmentCreateWithoutBatchInput, BatchAssignmentUncheckedCreateWithoutBatchInput>
  }

  export type BatchAssignmentUpdateWithWhereUniqueWithoutBatchInput = {
    where: BatchAssignmentWhereUniqueInput
    data: XOR<BatchAssignmentUpdateWithoutBatchInput, BatchAssignmentUncheckedUpdateWithoutBatchInput>
  }

  export type BatchAssignmentUpdateManyWithWhereWithoutBatchInput = {
    where: BatchAssignmentScalarWhereInput
    data: XOR<BatchAssignmentUpdateManyMutationInput, BatchAssignmentUncheckedUpdateManyWithoutBatchInput>
  }

  export type BatchCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
    creator?: UserCreateNestedOneWithoutBatchesCreatedInput
    students?: UserCreateNestedManyWithoutBatchInput
    exams?: ExamCreateNestedManyWithoutBatchesInput
  }

  export type BatchUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    name: string
    description?: string | null
    creatorId?: string | null
    createdAt?: Date | string
    students?: UserUncheckedCreateNestedManyWithoutBatchInput
    exams?: ExamUncheckedCreateNestedManyWithoutBatchesInput
  }

  export type BatchCreateOrConnectWithoutAssignmentsInput = {
    where: BatchWhereUniqueInput
    create: XOR<BatchCreateWithoutAssignmentsInput, BatchUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignedBatchesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    examsCreated?: ExamCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentCreateNestedManyWithoutStudentInput
    results?: ResultCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchCreateNestedManyWithoutCreatorInput
    batch?: BatchCreateNestedOneWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutAssignedBatchesInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    batchId?: string | null
    examsCreated?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutStudentInput
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAssignedBatchesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedBatchesInput, UserUncheckedCreateWithoutAssignedBatchesInput>
  }

  export type BatchUpsertWithoutAssignmentsInput = {
    update: XOR<BatchUpdateWithoutAssignmentsInput, BatchUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<BatchCreateWithoutAssignmentsInput, BatchUncheckedCreateWithoutAssignmentsInput>
    where?: BatchWhereInput
  }

  export type BatchUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: BatchWhereInput
    data: XOR<BatchUpdateWithoutAssignmentsInput, BatchUncheckedUpdateWithoutAssignmentsInput>
  }

  export type BatchUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneWithoutBatchesCreatedNestedInput
    students?: UserUpdateManyWithoutBatchNestedInput
    exams?: ExamUpdateManyWithoutBatchesNestedInput
  }

  export type BatchUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutBatchNestedInput
    exams?: ExamUncheckedUpdateManyWithoutBatchesNestedInput
  }

  export type UserUpsertWithoutAssignedBatchesInput = {
    update: XOR<UserUpdateWithoutAssignedBatchesInput, UserUncheckedUpdateWithoutAssignedBatchesInput>
    create: XOR<UserCreateWithoutAssignedBatchesInput, UserUncheckedCreateWithoutAssignedBatchesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedBatchesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedBatchesInput, UserUncheckedUpdateWithoutAssignedBatchesInput>
  }

  export type UserUpdateWithoutAssignedBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    examsCreated?: ExamUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUpdateManyWithoutStudentNestedInput
    results?: ResultUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUpdateManyWithoutCreatorNestedInput
    batch?: BatchUpdateOneWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    examsCreated?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ExamCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutExamsCreatedInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    results?: ResultCreateNestedManyWithoutExamInput
    batches?: BatchCreateNestedManyWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    teacherId: string
    createdAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    results?: ResultUncheckedCreateNestedManyWithoutExamInput
    batches?: BatchUncheckedCreateNestedManyWithoutExamsInput
  }

  export type ExamCreateOrConnectWithoutAssignmentsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutAssignmentsInput, ExamUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignedExamsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    examsCreated?: ExamCreateNestedManyWithoutTeacherInput
    results?: ResultCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentCreateNestedManyWithoutTeacherInput
    batch?: BatchCreateNestedOneWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutAssignedExamsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    batchId?: string | null
    examsCreated?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    results?: ResultUncheckedCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchUncheckedCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutAssignedExamsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignedExamsInput, UserUncheckedCreateWithoutAssignedExamsInput>
  }

  export type ExamUpsertWithoutAssignmentsInput = {
    update: XOR<ExamUpdateWithoutAssignmentsInput, ExamUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ExamCreateWithoutAssignmentsInput, ExamUncheckedCreateWithoutAssignmentsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutAssignmentsInput, ExamUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ExamUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutExamsCreatedNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    results?: ResultUpdateManyWithoutExamNestedInput
    batches?: BatchUpdateManyWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    results?: ResultUncheckedUpdateManyWithoutExamNestedInput
    batches?: BatchUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type UserUpsertWithoutAssignedExamsInput = {
    update: XOR<UserUpdateWithoutAssignedExamsInput, UserUncheckedUpdateWithoutAssignedExamsInput>
    create: XOR<UserCreateWithoutAssignedExamsInput, UserUncheckedCreateWithoutAssignedExamsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignedExamsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignedExamsInput, UserUncheckedUpdateWithoutAssignedExamsInput>
  }

  export type UserUpdateWithoutAssignedExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    examsCreated?: ExamUpdateManyWithoutTeacherNestedInput
    results?: ResultUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUpdateManyWithoutTeacherNestedInput
    batch?: BatchUpdateOneWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignedExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    examsCreated?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUncheckedUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ExamCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutExamsCreatedInput
    assignments?: ExamAssignmentCreateNestedManyWithoutExamInput
    results?: ResultCreateNestedManyWithoutExamInput
    batches?: BatchCreateNestedManyWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    teacherId: string
    createdAt?: Date | string
    assignments?: ExamAssignmentUncheckedCreateNestedManyWithoutExamInput
    results?: ResultUncheckedCreateNestedManyWithoutExamInput
    batches?: BatchUncheckedCreateNestedManyWithoutExamsInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutExamsCreatedNestedInput
    assignments?: ExamAssignmentUpdateManyWithoutExamNestedInput
    results?: ResultUpdateManyWithoutExamNestedInput
    batches?: BatchUpdateManyWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput
    results?: ResultUncheckedUpdateManyWithoutExamNestedInput
    batches?: BatchUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type ExamCreateWithoutResultsInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    createdAt?: Date | string
    teacher: UserCreateNestedOneWithoutExamsCreatedInput
    assignments?: ExamAssignmentCreateNestedManyWithoutExamInput
    questions?: QuestionCreateNestedManyWithoutExamInput
    batches?: BatchCreateNestedManyWithoutExamsInput
  }

  export type ExamUncheckedCreateWithoutResultsInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    teacherId: string
    createdAt?: Date | string
    assignments?: ExamAssignmentUncheckedCreateNestedManyWithoutExamInput
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    batches?: BatchUncheckedCreateNestedManyWithoutExamsInput
  }

  export type ExamCreateOrConnectWithoutResultsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
  }

  export type UserCreateWithoutResultsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    examsCreated?: ExamCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentCreateNestedManyWithoutTeacherInput
    batch?: BatchCreateNestedOneWithoutStudentsInput
  }

  export type UserUncheckedCreateWithoutResultsInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
    batchId?: string | null
    examsCreated?: ExamUncheckedCreateNestedManyWithoutTeacherInput
    assignedExams?: ExamAssignmentUncheckedCreateNestedManyWithoutStudentInput
    batchesCreated?: BatchUncheckedCreateNestedManyWithoutCreatorInput
    assignedBatches?: BatchAssignmentUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutResultsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutResultsInput, UserUncheckedCreateWithoutResultsInput>
  }

  export type ExamUpsertWithoutResultsInput = {
    update: XOR<ExamUpdateWithoutResultsInput, ExamUncheckedUpdateWithoutResultsInput>
    create: XOR<ExamCreateWithoutResultsInput, ExamUncheckedCreateWithoutResultsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutResultsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutResultsInput, ExamUncheckedUpdateWithoutResultsInput>
  }

  export type ExamUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutExamsCreatedNestedInput
    assignments?: ExamAssignmentUpdateManyWithoutExamNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    batches?: BatchUpdateManyWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    batches?: BatchUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type UserUpsertWithoutResultsInput = {
    update: XOR<UserUpdateWithoutResultsInput, UserUncheckedUpdateWithoutResultsInput>
    create: XOR<UserCreateWithoutResultsInput, UserUncheckedCreateWithoutResultsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutResultsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutResultsInput, UserUncheckedUpdateWithoutResultsInput>
  }

  export type UserUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    examsCreated?: ExamUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUpdateManyWithoutTeacherNestedInput
    batch?: BatchUpdateOneWithoutStudentsNestedInput
  }

  export type UserUncheckedUpdateWithoutResultsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    examsCreated?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUncheckedUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ExamCreateManyTeacherInput = {
    id?: string
    title: string
    description: string
    timeLimit: number
    createdAt?: Date | string
  }

  export type ExamAssignmentCreateManyStudentInput = {
    id?: string
    examId: string
    assignedAt?: Date | string
  }

  export type ResultCreateManyStudentInput = {
    id?: string
    examId: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BatchCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    createdAt?: Date | string
  }

  export type BatchAssignmentCreateManyTeacherInput = {
    id?: string
    batchId: string
    assignedAt?: Date | string
  }

  export type ExamUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ExamAssignmentUpdateManyWithoutExamNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    results?: ResultUpdateManyWithoutExamNestedInput
    batches?: BatchUpdateManyWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    results?: ResultUncheckedUpdateManyWithoutExamNestedInput
    batches?: BatchUncheckedUpdateManyWithoutExamsNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAssignmentUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type ExamAssignmentUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAssignmentUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ResultUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
    exam?: ExamUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BatchUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUpdateManyWithoutBatchNestedInput
    exams?: ExamUpdateManyWithoutBatchesNestedInput
    assignments?: BatchAssignmentUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutBatchNestedInput
    exams?: ExamUncheckedUpdateManyWithoutBatchesNestedInput
    assignments?: BatchAssignmentUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchAssignmentUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: BatchUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type BatchAssignmentUncheckedUpdateWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchAssignmentUncheckedUpdateManyWithoutTeacherInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAssignmentCreateManyExamInput = {
    id?: string
    studentId: string
    assignedAt?: Date | string
  }

  export type QuestionCreateManyExamInput = {
    id?: string
    text: string
    options: string
    correctAnswerIndex: number
  }

  export type ResultCreateManyExamInput = {
    id?: string
    studentId: string
    score: number
    completionTime: number
    teacherApproval?: boolean
    adminApproval?: boolean
    createdAt?: Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ExamAssignmentUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: UserUpdateOneRequiredWithoutAssignedExamsNestedInput
  }

  export type ExamAssignmentUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamAssignmentUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    options?: StringFieldUpdateOperationsInput | string
    correctAnswerIndex?: IntFieldUpdateOperationsInput | number
  }

  export type ResultUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
    student?: UserUpdateOneRequiredWithoutResultsNestedInput
  }

  export type ResultUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ResultUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    completionTime?: IntFieldUpdateOperationsInput | number
    teacherApproval?: BoolFieldUpdateOperationsInput | boolean
    adminApproval?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    responses?: NullableJsonNullValueInput | InputJsonValue
  }

  export type BatchUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneWithoutBatchesCreatedNestedInput
    students?: UserUpdateManyWithoutBatchNestedInput
    assignments?: BatchAssignmentUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    students?: UserUncheckedUpdateManyWithoutBatchNestedInput
    assignments?: BatchAssignmentUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type BatchUncheckedUpdateManyWithoutExamsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    creatorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyBatchInput = {
    id?: string
    name: string
    email: string
    password: string
    role?: $Enums.Role
    city?: string | null
    phoneNumber?: bigint | number | null
    requestedRole?: string | null
    profileUpdateCount?: number
  }

  export type BatchAssignmentCreateManyBatchInput = {
    id?: string
    teacherId: string
    assignedAt?: Date | string
  }

  export type UserUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    examsCreated?: ExamUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUpdateManyWithoutStudentNestedInput
    results?: ResultUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
    examsCreated?: ExamUncheckedUpdateManyWithoutTeacherNestedInput
    assignedExams?: ExamAssignmentUncheckedUpdateManyWithoutStudentNestedInput
    results?: ResultUncheckedUpdateManyWithoutStudentNestedInput
    batchesCreated?: BatchUncheckedUpdateManyWithoutCreatorNestedInput
    assignedBatches?: BatchAssignmentUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    city?: NullableStringFieldUpdateOperationsInput | string | null
    phoneNumber?: NullableBigIntFieldUpdateOperationsInput | bigint | number | null
    requestedRole?: NullableStringFieldUpdateOperationsInput | string | null
    profileUpdateCount?: IntFieldUpdateOperationsInput | number
  }

  export type ExamUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutExamsCreatedNestedInput
    assignments?: ExamAssignmentUpdateManyWithoutExamNestedInput
    questions?: QuestionUpdateManyWithoutExamNestedInput
    results?: ResultUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: ExamAssignmentUncheckedUpdateManyWithoutExamNestedInput
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    results?: ResultUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateManyWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    timeLimit?: IntFieldUpdateOperationsInput | number
    teacherId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchAssignmentUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacher?: UserUpdateOneRequiredWithoutAssignedBatchesNestedInput
  }

  export type BatchAssignmentUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BatchAssignmentUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    teacherId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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