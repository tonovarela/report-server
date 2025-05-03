
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
 * Model employees
 * 
 */
export type employees = $Result.DefaultSelection<Prisma.$employeesPayload>
/**
 * Model countries
 * 
 */
export type countries = $Result.DefaultSelection<Prisma.$countriesPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model customers
 * 
 */
export type customers = $Result.DefaultSelection<Prisma.$customersPayload>
/**
 * Model order_details
 * 
 */
export type order_details = $Result.DefaultSelection<Prisma.$order_detailsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const continents: {
  Africa: 'Africa',
  Antarctica: 'Antarctica',
  Asia: 'Asia',
  Europe: 'Europe',
  Oceania: 'Oceania',
  North_America: 'North_America',
  South_America: 'South_America'
};

export type continents = (typeof continents)[keyof typeof continents]

}

export type continents = $Enums.continents

export const continents: typeof $Enums.continents

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Employees
 * const employees = await prisma.employees.findMany()
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
   * // Fetch zero or more Employees
   * const employees = await prisma.employees.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.employees`: Exposes CRUD operations for the **employees** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employees.findMany()
    * ```
    */
  get employees(): Prisma.employeesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.countries`: Exposes CRUD operations for the **countries** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.countries.findMany()
    * ```
    */
  get countries(): Prisma.countriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customers`: Exposes CRUD operations for the **customers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customers.findMany()
    * ```
    */
  get customers(): Prisma.customersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_details`: Exposes CRUD operations for the **order_details** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_details
    * const order_details = await prisma.order_details.findMany()
    * ```
    */
  get order_details(): Prisma.order_detailsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
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
    employees: 'employees',
    countries: 'countries',
    categories: 'categories',
    customers: 'customers',
    order_details: 'order_details',
    orders: 'orders',
    products: 'products'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "employees" | "countries" | "categories" | "customers" | "order_details" | "orders" | "products"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      employees: {
        payload: Prisma.$employeesPayload<ExtArgs>
        fields: Prisma.employeesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.employeesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.employeesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findFirst: {
            args: Prisma.employeesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.employeesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          findMany: {
            args: Prisma.employeesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          create: {
            args: Prisma.employeesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          createMany: {
            args: Prisma.employeesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.employeesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          delete: {
            args: Prisma.employeesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          update: {
            args: Prisma.employeesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          deleteMany: {
            args: Prisma.employeesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.employeesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.employeesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>[]
          }
          upsert: {
            args: Prisma.employeesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$employeesPayload>
          }
          aggregate: {
            args: Prisma.EmployeesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployees>
          }
          groupBy: {
            args: Prisma.employeesGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeesGroupByOutputType>[]
          }
          count: {
            args: Prisma.employeesCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeesCountAggregateOutputType> | number
          }
        }
      }
      countries: {
        payload: Prisma.$countriesPayload<ExtArgs>
        fields: Prisma.countriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.countriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.countriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findFirst: {
            args: Prisma.countriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.countriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          findMany: {
            args: Prisma.countriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          create: {
            args: Prisma.countriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          createMany: {
            args: Prisma.countriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.countriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          delete: {
            args: Prisma.countriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          update: {
            args: Prisma.countriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          deleteMany: {
            args: Prisma.countriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.countriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.countriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>[]
          }
          upsert: {
            args: Prisma.countriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$countriesPayload>
          }
          aggregate: {
            args: Prisma.CountriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountries>
          }
          groupBy: {
            args: Prisma.countriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.countriesCountArgs<ExtArgs>
            result: $Utils.Optional<CountriesCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      customers: {
        payload: Prisma.$customersPayload<ExtArgs>
        fields: Prisma.customersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.customersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.customersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findFirst: {
            args: Prisma.customersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.customersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          findMany: {
            args: Prisma.customersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          create: {
            args: Prisma.customersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          createMany: {
            args: Prisma.customersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.customersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          delete: {
            args: Prisma.customersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          update: {
            args: Prisma.customersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          deleteMany: {
            args: Prisma.customersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.customersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.customersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>[]
          }
          upsert: {
            args: Prisma.customersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$customersPayload>
          }
          aggregate: {
            args: Prisma.CustomersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomers>
          }
          groupBy: {
            args: Prisma.customersGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomersGroupByOutputType>[]
          }
          count: {
            args: Prisma.customersCountArgs<ExtArgs>
            result: $Utils.Optional<CustomersCountAggregateOutputType> | number
          }
        }
      }
      order_details: {
        payload: Prisma.$order_detailsPayload<ExtArgs>
        fields: Prisma.order_detailsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_detailsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_detailsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          findFirst: {
            args: Prisma.order_detailsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_detailsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          findMany: {
            args: Prisma.order_detailsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[]
          }
          create: {
            args: Prisma.order_detailsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          createMany: {
            args: Prisma.order_detailsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_detailsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[]
          }
          delete: {
            args: Prisma.order_detailsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          update: {
            args: Prisma.order_detailsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          deleteMany: {
            args: Prisma.order_detailsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_detailsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_detailsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>[]
          }
          upsert: {
            args: Prisma.order_detailsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_detailsPayload>
          }
          aggregate: {
            args: Prisma.Order_detailsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_details>
          }
          groupBy: {
            args: Prisma.order_detailsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_detailsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_detailsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_detailsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
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
  }
  export type GlobalOmitConfig = {
    employees?: employeesOmit
    countries?: countriesOmit
    categories?: categoriesOmit
    customers?: customersOmit
    order_details?: order_detailsOmit
    orders?: ordersOmit
    products?: productsOmit
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
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type CustomersCountOutputType
   */

  export type CustomersCountOutputType = {
    orders: number
  }

  export type CustomersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | CustomersCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomersCountOutputType
     */
    select?: CustomersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomersCountOutputType without action
   */
  export type CustomersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_details: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | OrdersCountOutputTypeCountOrder_detailsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    order_details: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | ProductsCountOutputTypeCountOrder_detailsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model employees
   */

  export type AggregateEmployees = {
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  export type EmployeesAvgAggregateOutputType = {
    id: number | null
    hours_per_day: number | null
  }

  export type EmployeesSumAggregateOutputType = {
    id: number | null
    hours_per_day: number | null
  }

  export type EmployeesMinAggregateOutputType = {
    id: number | null
    name: string | null
    position: string | null
    start_date: Date | null
    work_time: Date | null
    hours_per_day: number | null
    work_schedule: string | null
  }

  export type EmployeesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    position: string | null
    start_date: Date | null
    work_time: Date | null
    hours_per_day: number | null
    work_schedule: string | null
  }

  export type EmployeesCountAggregateOutputType = {
    id: number
    name: number
    position: number
    start_date: number
    work_time: number
    hours_per_day: number
    work_schedule: number
    _all: number
  }


  export type EmployeesAvgAggregateInputType = {
    id?: true
    hours_per_day?: true
  }

  export type EmployeesSumAggregateInputType = {
    id?: true
    hours_per_day?: true
  }

  export type EmployeesMinAggregateInputType = {
    id?: true
    name?: true
    position?: true
    start_date?: true
    work_time?: true
    hours_per_day?: true
    work_schedule?: true
  }

  export type EmployeesMaxAggregateInputType = {
    id?: true
    name?: true
    position?: true
    start_date?: true
    work_time?: true
    hours_per_day?: true
    work_schedule?: true
  }

  export type EmployeesCountAggregateInputType = {
    id?: true
    name?: true
    position?: true
    start_date?: true
    work_time?: true
    hours_per_day?: true
    work_schedule?: true
    _all?: true
  }

  export type EmployeesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to aggregate.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned employees
    **/
    _count?: true | EmployeesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeesMaxAggregateInputType
  }

  export type GetEmployeesAggregateType<T extends EmployeesAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployees]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployees[P]>
      : GetScalarType<T[P], AggregateEmployees[P]>
  }




  export type employeesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: employeesWhereInput
    orderBy?: employeesOrderByWithAggregationInput | employeesOrderByWithAggregationInput[]
    by: EmployeesScalarFieldEnum[] | EmployeesScalarFieldEnum
    having?: employeesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeesCountAggregateInputType | true
    _avg?: EmployeesAvgAggregateInputType
    _sum?: EmployeesSumAggregateInputType
    _min?: EmployeesMinAggregateInputType
    _max?: EmployeesMaxAggregateInputType
  }

  export type EmployeesGroupByOutputType = {
    id: number
    name: string
    position: string
    start_date: Date
    work_time: Date
    hours_per_day: number
    work_schedule: string
    _count: EmployeesCountAggregateOutputType | null
    _avg: EmployeesAvgAggregateOutputType | null
    _sum: EmployeesSumAggregateOutputType | null
    _min: EmployeesMinAggregateOutputType | null
    _max: EmployeesMaxAggregateOutputType | null
  }

  type GetEmployeesGroupByPayload<T extends employeesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeesGroupByOutputType[P]>
        }
      >
    >


  export type employeesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    start_date?: boolean
    work_time?: boolean
    hours_per_day?: boolean
    work_schedule?: boolean
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    start_date?: boolean
    work_time?: boolean
    hours_per_day?: boolean
    work_schedule?: boolean
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    position?: boolean
    start_date?: boolean
    work_time?: boolean
    hours_per_day?: boolean
    work_schedule?: boolean
  }, ExtArgs["result"]["employees"]>

  export type employeesSelectScalar = {
    id?: boolean
    name?: boolean
    position?: boolean
    start_date?: boolean
    work_time?: boolean
    hours_per_day?: boolean
    work_schedule?: boolean
  }

  export type employeesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "position" | "start_date" | "work_time" | "hours_per_day" | "work_schedule", ExtArgs["result"]["employees"]>

  export type $employeesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "employees"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      position: string
      start_date: Date
      work_time: Date
      hours_per_day: number
      work_schedule: string
    }, ExtArgs["result"]["employees"]>
    composites: {}
  }

  type employeesGetPayload<S extends boolean | null | undefined | employeesDefaultArgs> = $Result.GetResult<Prisma.$employeesPayload, S>

  type employeesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<employeesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeesCountAggregateInputType | true
    }

  export interface employeesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['employees'], meta: { name: 'employees' } }
    /**
     * Find zero or one Employees that matches the filter.
     * @param {employeesFindUniqueArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends employeesFindUniqueArgs>(args: SelectSubset<T, employeesFindUniqueArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employees that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {employeesFindUniqueOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends employeesFindUniqueOrThrowArgs>(args: SelectSubset<T, employeesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends employeesFindFirstArgs>(args?: SelectSubset<T, employeesFindFirstArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employees that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindFirstOrThrowArgs} args - Arguments to find a Employees
     * @example
     * // Get one Employees
     * const employees = await prisma.employees.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends employeesFindFirstOrThrowArgs>(args?: SelectSubset<T, employeesFindFirstOrThrowArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employees.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employees.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeesWithIdOnly = await prisma.employees.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends employeesFindManyArgs>(args?: SelectSubset<T, employeesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employees.
     * @param {employeesCreateArgs} args - Arguments to create a Employees.
     * @example
     * // Create one Employees
     * const Employees = await prisma.employees.create({
     *   data: {
     *     // ... data to create a Employees
     *   }
     * })
     * 
     */
    create<T extends employeesCreateArgs>(args: SelectSubset<T, employeesCreateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {employeesCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends employeesCreateManyArgs>(args?: SelectSubset<T, employeesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {employeesCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employees = await prisma.employees.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeesWithIdOnly = await prisma.employees.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends employeesCreateManyAndReturnArgs>(args?: SelectSubset<T, employeesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employees.
     * @param {employeesDeleteArgs} args - Arguments to delete one Employees.
     * @example
     * // Delete one Employees
     * const Employees = await prisma.employees.delete({
     *   where: {
     *     // ... filter to delete one Employees
     *   }
     * })
     * 
     */
    delete<T extends employeesDeleteArgs>(args: SelectSubset<T, employeesDeleteArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employees.
     * @param {employeesUpdateArgs} args - Arguments to update one Employees.
     * @example
     * // Update one Employees
     * const employees = await prisma.employees.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends employeesUpdateArgs>(args: SelectSubset<T, employeesUpdateArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {employeesDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employees.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends employeesDeleteManyArgs>(args?: SelectSubset<T, employeesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends employeesUpdateManyArgs>(args: SelectSubset<T, employeesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {employeesUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employees = await prisma.employees.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeesWithIdOnly = await prisma.employees.updateManyAndReturn({
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
    updateManyAndReturn<T extends employeesUpdateManyAndReturnArgs>(args: SelectSubset<T, employeesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employees.
     * @param {employeesUpsertArgs} args - Arguments to update or create a Employees.
     * @example
     * // Update or create a Employees
     * const employees = await prisma.employees.upsert({
     *   create: {
     *     // ... data to create a Employees
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employees we want to update
     *   }
     * })
     */
    upsert<T extends employeesUpsertArgs>(args: SelectSubset<T, employeesUpsertArgs<ExtArgs>>): Prisma__employeesClient<$Result.GetResult<Prisma.$employeesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employees.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends employeesCountArgs>(
      args?: Subset<T, employeesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeesAggregateArgs>(args: Subset<T, EmployeesAggregateArgs>): Prisma.PrismaPromise<GetEmployeesAggregateType<T>>

    /**
     * Group by Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {employeesGroupByArgs} args - Group by arguments.
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
      T extends employeesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: employeesGroupByArgs['orderBy'] }
        : { orderBy?: employeesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, employeesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the employees model
   */
  readonly fields: employeesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for employees.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__employeesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the employees model
   */
  interface employeesFieldRefs {
    readonly id: FieldRef<"employees", 'Int'>
    readonly name: FieldRef<"employees", 'String'>
    readonly position: FieldRef<"employees", 'String'>
    readonly start_date: FieldRef<"employees", 'DateTime'>
    readonly work_time: FieldRef<"employees", 'DateTime'>
    readonly hours_per_day: FieldRef<"employees", 'Int'>
    readonly work_schedule: FieldRef<"employees", 'String'>
  }
    

  // Custom InputTypes
  /**
   * employees findUnique
   */
  export type employeesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findUniqueOrThrow
   */
  export type employeesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees findFirst
   */
  export type employeesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findFirstOrThrow
   */
  export type employeesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of employees.
     */
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees findMany
   */
  export type employeesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter, which employees to fetch.
     */
    where?: employeesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of employees to fetch.
     */
    orderBy?: employeesOrderByWithRelationInput | employeesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing employees.
     */
    cursor?: employeesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` employees.
     */
    skip?: number
    distinct?: EmployeesScalarFieldEnum | EmployeesScalarFieldEnum[]
  }

  /**
   * employees create
   */
  export type employeesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data needed to create a employees.
     */
    data: XOR<employeesCreateInput, employeesUncheckedCreateInput>
  }

  /**
   * employees createMany
   */
  export type employeesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees createManyAndReturn
   */
  export type employeesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data used to create many employees.
     */
    data: employeesCreateManyInput | employeesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * employees update
   */
  export type employeesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data needed to update a employees.
     */
    data: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
    /**
     * Choose, which employees to update.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees updateMany
   */
  export type employeesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employees updateManyAndReturn
   */
  export type employeesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The data used to update employees.
     */
    data: XOR<employeesUpdateManyMutationInput, employeesUncheckedUpdateManyInput>
    /**
     * Filter which employees to update
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to update.
     */
    limit?: number
  }

  /**
   * employees upsert
   */
  export type employeesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * The filter to search for the employees to update in case it exists.
     */
    where: employeesWhereUniqueInput
    /**
     * In case the employees found by the `where` argument doesn't exist, create a new employees with this data.
     */
    create: XOR<employeesCreateInput, employeesUncheckedCreateInput>
    /**
     * In case the employees was found with the provided `where` argument, update it with this data.
     */
    update: XOR<employeesUpdateInput, employeesUncheckedUpdateInput>
  }

  /**
   * employees delete
   */
  export type employeesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
    /**
     * Filter which employees to delete.
     */
    where: employeesWhereUniqueInput
  }

  /**
   * employees deleteMany
   */
  export type employeesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which employees to delete
     */
    where?: employeesWhereInput
    /**
     * Limit how many employees to delete.
     */
    limit?: number
  }

  /**
   * employees without action
   */
  export type employeesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the employees
     */
    select?: employeesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the employees
     */
    omit?: employeesOmit<ExtArgs> | null
  }


  /**
   * Model countries
   */

  export type AggregateCountries = {
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  export type CountriesAvgAggregateOutputType = {
    id: number | null
  }

  export type CountriesSumAggregateOutputType = {
    id: bigint | null
  }

  export type CountriesMinAggregateOutputType = {
    id: bigint | null
    name: string | null
    iso2: string | null
    iso3: string | null
    local_name: string | null
    continent: $Enums.continents | null
  }

  export type CountriesMaxAggregateOutputType = {
    id: bigint | null
    name: string | null
    iso2: string | null
    iso3: string | null
    local_name: string | null
    continent: $Enums.continents | null
  }

  export type CountriesCountAggregateOutputType = {
    id: number
    name: number
    iso2: number
    iso3: number
    local_name: number
    continent: number
    _all: number
  }


  export type CountriesAvgAggregateInputType = {
    id?: true
  }

  export type CountriesSumAggregateInputType = {
    id?: true
  }

  export type CountriesMinAggregateInputType = {
    id?: true
    name?: true
    iso2?: true
    iso3?: true
    local_name?: true
    continent?: true
  }

  export type CountriesMaxAggregateInputType = {
    id?: true
    name?: true
    iso2?: true
    iso3?: true
    local_name?: true
    continent?: true
  }

  export type CountriesCountAggregateInputType = {
    id?: true
    name?: true
    iso2?: true
    iso3?: true
    local_name?: true
    continent?: true
    _all?: true
  }

  export type CountriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to aggregate.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned countries
    **/
    _count?: true | CountriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountriesMaxAggregateInputType
  }

  export type GetCountriesAggregateType<T extends CountriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCountries]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountries[P]>
      : GetScalarType<T[P], AggregateCountries[P]>
  }




  export type countriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: countriesWhereInput
    orderBy?: countriesOrderByWithAggregationInput | countriesOrderByWithAggregationInput[]
    by: CountriesScalarFieldEnum[] | CountriesScalarFieldEnum
    having?: countriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountriesCountAggregateInputType | true
    _avg?: CountriesAvgAggregateInputType
    _sum?: CountriesSumAggregateInputType
    _min?: CountriesMinAggregateInputType
    _max?: CountriesMaxAggregateInputType
  }

  export type CountriesGroupByOutputType = {
    id: bigint
    name: string | null
    iso2: string
    iso3: string | null
    local_name: string | null
    continent: $Enums.continents | null
    _count: CountriesCountAggregateOutputType | null
    _avg: CountriesAvgAggregateOutputType | null
    _sum: CountriesSumAggregateOutputType | null
    _min: CountriesMinAggregateOutputType | null
    _max: CountriesMaxAggregateOutputType | null
  }

  type GetCountriesGroupByPayload<T extends countriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountriesGroupByOutputType[P]>
            : GetScalarType<T[P], CountriesGroupByOutputType[P]>
        }
      >
    >


  export type countriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iso2?: boolean
    iso3?: boolean
    local_name?: boolean
    continent?: boolean
  }, ExtArgs["result"]["countries"]>

  export type countriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iso2?: boolean
    iso3?: boolean
    local_name?: boolean
    continent?: boolean
  }, ExtArgs["result"]["countries"]>

  export type countriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    iso2?: boolean
    iso3?: boolean
    local_name?: boolean
    continent?: boolean
  }, ExtArgs["result"]["countries"]>

  export type countriesSelectScalar = {
    id?: boolean
    name?: boolean
    iso2?: boolean
    iso3?: boolean
    local_name?: boolean
    continent?: boolean
  }

  export type countriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "iso2" | "iso3" | "local_name" | "continent", ExtArgs["result"]["countries"]>

  export type $countriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "countries"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      name: string | null
      iso2: string
      iso3: string | null
      local_name: string | null
      continent: $Enums.continents | null
    }, ExtArgs["result"]["countries"]>
    composites: {}
  }

  type countriesGetPayload<S extends boolean | null | undefined | countriesDefaultArgs> = $Result.GetResult<Prisma.$countriesPayload, S>

  type countriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<countriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountriesCountAggregateInputType | true
    }

  export interface countriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['countries'], meta: { name: 'countries' } }
    /**
     * Find zero or one Countries that matches the filter.
     * @param {countriesFindUniqueArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends countriesFindUniqueArgs>(args: SelectSubset<T, countriesFindUniqueArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Countries that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {countriesFindUniqueOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends countriesFindUniqueOrThrowArgs>(args: SelectSubset<T, countriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends countriesFindFirstArgs>(args?: SelectSubset<T, countriesFindFirstArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Countries that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindFirstOrThrowArgs} args - Arguments to find a Countries
     * @example
     * // Get one Countries
     * const countries = await prisma.countries.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends countriesFindFirstOrThrowArgs>(args?: SelectSubset<T, countriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.countries.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.countries.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countriesWithIdOnly = await prisma.countries.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends countriesFindManyArgs>(args?: SelectSubset<T, countriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Countries.
     * @param {countriesCreateArgs} args - Arguments to create a Countries.
     * @example
     * // Create one Countries
     * const Countries = await prisma.countries.create({
     *   data: {
     *     // ... data to create a Countries
     *   }
     * })
     * 
     */
    create<T extends countriesCreateArgs>(args: SelectSubset<T, countriesCreateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {countriesCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends countriesCreateManyArgs>(args?: SelectSubset<T, countriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {countriesCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const countries = await prisma.countries.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countriesWithIdOnly = await prisma.countries.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends countriesCreateManyAndReturnArgs>(args?: SelectSubset<T, countriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Countries.
     * @param {countriesDeleteArgs} args - Arguments to delete one Countries.
     * @example
     * // Delete one Countries
     * const Countries = await prisma.countries.delete({
     *   where: {
     *     // ... filter to delete one Countries
     *   }
     * })
     * 
     */
    delete<T extends countriesDeleteArgs>(args: SelectSubset<T, countriesDeleteArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Countries.
     * @param {countriesUpdateArgs} args - Arguments to update one Countries.
     * @example
     * // Update one Countries
     * const countries = await prisma.countries.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends countriesUpdateArgs>(args: SelectSubset<T, countriesUpdateArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {countriesDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.countries.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends countriesDeleteManyArgs>(args?: SelectSubset<T, countriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends countriesUpdateManyArgs>(args: SelectSubset<T, countriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {countriesUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const countries = await prisma.countries.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countriesWithIdOnly = await prisma.countries.updateManyAndReturn({
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
    updateManyAndReturn<T extends countriesUpdateManyAndReturnArgs>(args: SelectSubset<T, countriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Countries.
     * @param {countriesUpsertArgs} args - Arguments to update or create a Countries.
     * @example
     * // Update or create a Countries
     * const countries = await prisma.countries.upsert({
     *   create: {
     *     // ... data to create a Countries
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Countries we want to update
     *   }
     * })
     */
    upsert<T extends countriesUpsertArgs>(args: SelectSubset<T, countriesUpsertArgs<ExtArgs>>): Prisma__countriesClient<$Result.GetResult<Prisma.$countriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.countries.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends countriesCountArgs>(
      args?: Subset<T, countriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CountriesAggregateArgs>(args: Subset<T, CountriesAggregateArgs>): Prisma.PrismaPromise<GetCountriesAggregateType<T>>

    /**
     * Group by Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {countriesGroupByArgs} args - Group by arguments.
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
      T extends countriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: countriesGroupByArgs['orderBy'] }
        : { orderBy?: countriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, countriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the countries model
   */
  readonly fields: countriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for countries.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__countriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the countries model
   */
  interface countriesFieldRefs {
    readonly id: FieldRef<"countries", 'BigInt'>
    readonly name: FieldRef<"countries", 'String'>
    readonly iso2: FieldRef<"countries", 'String'>
    readonly iso3: FieldRef<"countries", 'String'>
    readonly local_name: FieldRef<"countries", 'String'>
    readonly continent: FieldRef<"countries", 'continents'>
  }
    

  // Custom InputTypes
  /**
   * countries findUnique
   */
  export type countriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findUniqueOrThrow
   */
  export type countriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries findFirst
   */
  export type countriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findFirstOrThrow
   */
  export type countriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of countries.
     */
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries findMany
   */
  export type countriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter, which countries to fetch.
     */
    where?: countriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of countries to fetch.
     */
    orderBy?: countriesOrderByWithRelationInput | countriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing countries.
     */
    cursor?: countriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` countries.
     */
    skip?: number
    distinct?: CountriesScalarFieldEnum | CountriesScalarFieldEnum[]
  }

  /**
   * countries create
   */
  export type countriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data needed to create a countries.
     */
    data: XOR<countriesCreateInput, countriesUncheckedCreateInput>
  }

  /**
   * countries createMany
   */
  export type countriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many countries.
     */
    data: countriesCreateManyInput | countriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * countries createManyAndReturn
   */
  export type countriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data used to create many countries.
     */
    data: countriesCreateManyInput | countriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * countries update
   */
  export type countriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data needed to update a countries.
     */
    data: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
    /**
     * Choose, which countries to update.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries updateMany
   */
  export type countriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update countries.
     */
    data: XOR<countriesUpdateManyMutationInput, countriesUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * countries updateManyAndReturn
   */
  export type countriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The data used to update countries.
     */
    data: XOR<countriesUpdateManyMutationInput, countriesUncheckedUpdateManyInput>
    /**
     * Filter which countries to update
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to update.
     */
    limit?: number
  }

  /**
   * countries upsert
   */
  export type countriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * The filter to search for the countries to update in case it exists.
     */
    where: countriesWhereUniqueInput
    /**
     * In case the countries found by the `where` argument doesn't exist, create a new countries with this data.
     */
    create: XOR<countriesCreateInput, countriesUncheckedCreateInput>
    /**
     * In case the countries was found with the provided `where` argument, update it with this data.
     */
    update: XOR<countriesUpdateInput, countriesUncheckedUpdateInput>
  }

  /**
   * countries delete
   */
  export type countriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
    /**
     * Filter which countries to delete.
     */
    where: countriesWhereUniqueInput
  }

  /**
   * countries deleteMany
   */
  export type countriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which countries to delete
     */
    where?: countriesWhereInput
    /**
     * Limit how many countries to delete.
     */
    limit?: number
  }

  /**
   * countries without action
   */
  export type countriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the countries
     */
    select?: countriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the countries
     */
    omit?: countriesOmit<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    category_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    description: string | null
  }

  export type CategoriesMaxAggregateOutputType = {
    category_id: number | null
    category_name: string | null
    description: string | null
  }

  export type CategoriesCountAggregateOutputType = {
    category_id: number
    category_name: number
    description: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    category_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    category_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    category_id?: true
    category_name?: true
    description?: true
  }

  export type CategoriesMaxAggregateInputType = {
    category_id?: true
    category_name?: true
    description?: true
  }

  export type CategoriesCountAggregateInputType = {
    category_id?: true
    category_name?: true
    description?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    category_id: number
    category_name: string | null
    description: string | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    description?: boolean
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    description?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    category_id?: boolean
    category_name?: boolean
    description?: boolean
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    category_id?: boolean
    category_name?: boolean
    description?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"category_id" | "category_name" | "description", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      category_id: number
      category_name: string | null
      description: string | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.findMany({ select: { category_id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.createManyAndReturn({
     *   select: { category_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `category_id`
     * const categoriesWithCategory_idOnly = await prisma.categories.updateManyAndReturn({
     *   select: { category_id: true },
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
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
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
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly category_id: FieldRef<"categories", 'Int'>
    readonly category_name: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data?: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model customers
   */

  export type AggregateCustomers = {
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  export type CustomersAvgAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomersSumAggregateOutputType = {
    customer_id: number | null
  }

  export type CustomersMinAggregateOutputType = {
    customer_id: number | null
    customer_name: string | null
    contact_name: string | null
    address: string | null
    city: string | null
    postal_code: string | null
    country: string | null
  }

  export type CustomersMaxAggregateOutputType = {
    customer_id: number | null
    customer_name: string | null
    contact_name: string | null
    address: string | null
    city: string | null
    postal_code: string | null
    country: string | null
  }

  export type CustomersCountAggregateOutputType = {
    customer_id: number
    customer_name: number
    contact_name: number
    address: number
    city: number
    postal_code: number
    country: number
    _all: number
  }


  export type CustomersAvgAggregateInputType = {
    customer_id?: true
  }

  export type CustomersSumAggregateInputType = {
    customer_id?: true
  }

  export type CustomersMinAggregateInputType = {
    customer_id?: true
    customer_name?: true
    contact_name?: true
    address?: true
    city?: true
    postal_code?: true
    country?: true
  }

  export type CustomersMaxAggregateInputType = {
    customer_id?: true
    customer_name?: true
    contact_name?: true
    address?: true
    city?: true
    postal_code?: true
    country?: true
  }

  export type CustomersCountAggregateInputType = {
    customer_id?: true
    customer_name?: true
    contact_name?: true
    address?: true
    city?: true
    postal_code?: true
    country?: true
    _all?: true
  }

  export type CustomersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to aggregate.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned customers
    **/
    _count?: true | CustomersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomersMaxAggregateInputType
  }

  export type GetCustomersAggregateType<T extends CustomersAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomers[P]>
      : GetScalarType<T[P], AggregateCustomers[P]>
  }




  export type customersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: customersWhereInput
    orderBy?: customersOrderByWithAggregationInput | customersOrderByWithAggregationInput[]
    by: CustomersScalarFieldEnum[] | CustomersScalarFieldEnum
    having?: customersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomersCountAggregateInputType | true
    _avg?: CustomersAvgAggregateInputType
    _sum?: CustomersSumAggregateInputType
    _min?: CustomersMinAggregateInputType
    _max?: CustomersMaxAggregateInputType
  }

  export type CustomersGroupByOutputType = {
    customer_id: number
    customer_name: string | null
    contact_name: string | null
    address: string | null
    city: string | null
    postal_code: string | null
    country: string | null
    _count: CustomersCountAggregateOutputType | null
    _avg: CustomersAvgAggregateOutputType | null
    _sum: CustomersSumAggregateOutputType | null
    _min: CustomersMinAggregateOutputType | null
    _max: CustomersMaxAggregateOutputType | null
  }

  type GetCustomersGroupByPayload<T extends customersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomersGroupByOutputType[P]>
            : GetScalarType<T[P], CustomersGroupByOutputType[P]>
        }
      >
    >


  export type customersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    customer_name?: boolean
    contact_name?: boolean
    address?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
    orders?: boolean | customers$ordersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customers"]>

  export type customersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    customer_name?: boolean
    contact_name?: boolean
    address?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    customer_id?: boolean
    customer_name?: boolean
    contact_name?: boolean
    address?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
  }, ExtArgs["result"]["customers"]>

  export type customersSelectScalar = {
    customer_id?: boolean
    customer_name?: boolean
    contact_name?: boolean
    address?: boolean
    city?: boolean
    postal_code?: boolean
    country?: boolean
  }

  export type customersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"customer_id" | "customer_name" | "contact_name" | "address" | "city" | "postal_code" | "country", ExtArgs["result"]["customers"]>
  export type customersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | customers$ordersArgs<ExtArgs>
    _count?: boolean | CustomersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type customersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type customersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $customersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "customers"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      customer_id: number
      customer_name: string | null
      contact_name: string | null
      address: string | null
      city: string | null
      postal_code: string | null
      country: string | null
    }, ExtArgs["result"]["customers"]>
    composites: {}
  }

  type customersGetPayload<S extends boolean | null | undefined | customersDefaultArgs> = $Result.GetResult<Prisma.$customersPayload, S>

  type customersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<customersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomersCountAggregateInputType | true
    }

  export interface customersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['customers'], meta: { name: 'customers' } }
    /**
     * Find zero or one Customers that matches the filter.
     * @param {customersFindUniqueArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends customersFindUniqueArgs>(args: SelectSubset<T, customersFindUniqueArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {customersFindUniqueOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends customersFindUniqueOrThrowArgs>(args: SelectSubset<T, customersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends customersFindFirstArgs>(args?: SelectSubset<T, customersFindFirstArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindFirstOrThrowArgs} args - Arguments to find a Customers
     * @example
     * // Get one Customers
     * const customers = await prisma.customers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends customersFindFirstOrThrowArgs>(args?: SelectSubset<T, customersFindFirstOrThrowArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customers.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customers.findMany({ take: 10 })
     * 
     * // Only select the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.findMany({ select: { customer_id: true } })
     * 
     */
    findMany<T extends customersFindManyArgs>(args?: SelectSubset<T, customersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customers.
     * @param {customersCreateArgs} args - Arguments to create a Customers.
     * @example
     * // Create one Customers
     * const Customers = await prisma.customers.create({
     *   data: {
     *     // ... data to create a Customers
     *   }
     * })
     * 
     */
    create<T extends customersCreateArgs>(args: SelectSubset<T, customersCreateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {customersCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends customersCreateManyArgs>(args?: SelectSubset<T, customersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {customersCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customers = await prisma.customers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.createManyAndReturn({
     *   select: { customer_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends customersCreateManyAndReturnArgs>(args?: SelectSubset<T, customersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customers.
     * @param {customersDeleteArgs} args - Arguments to delete one Customers.
     * @example
     * // Delete one Customers
     * const Customers = await prisma.customers.delete({
     *   where: {
     *     // ... filter to delete one Customers
     *   }
     * })
     * 
     */
    delete<T extends customersDeleteArgs>(args: SelectSubset<T, customersDeleteArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customers.
     * @param {customersUpdateArgs} args - Arguments to update one Customers.
     * @example
     * // Update one Customers
     * const customers = await prisma.customers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends customersUpdateArgs>(args: SelectSubset<T, customersUpdateArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {customersDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends customersDeleteManyArgs>(args?: SelectSubset<T, customersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends customersUpdateManyArgs>(args: SelectSubset<T, customersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {customersUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customers = await prisma.customers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `customer_id`
     * const customersWithCustomer_idOnly = await prisma.customers.updateManyAndReturn({
     *   select: { customer_id: true },
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
    updateManyAndReturn<T extends customersUpdateManyAndReturnArgs>(args: SelectSubset<T, customersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customers.
     * @param {customersUpsertArgs} args - Arguments to update or create a Customers.
     * @example
     * // Update or create a Customers
     * const customers = await prisma.customers.upsert({
     *   create: {
     *     // ... data to create a Customers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customers we want to update
     *   }
     * })
     */
    upsert<T extends customersUpsertArgs>(args: SelectSubset<T, customersUpsertArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customers.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends customersCountArgs>(
      args?: Subset<T, customersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomersAggregateArgs>(args: Subset<T, CustomersAggregateArgs>): Prisma.PrismaPromise<GetCustomersAggregateType<T>>

    /**
     * Group by Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {customersGroupByArgs} args - Group by arguments.
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
      T extends customersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: customersGroupByArgs['orderBy'] }
        : { orderBy?: customersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, customersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the customers model
   */
  readonly fields: customersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for customers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__customersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends customers$ordersArgs<ExtArgs> = {}>(args?: Subset<T, customers$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the customers model
   */
  interface customersFieldRefs {
    readonly customer_id: FieldRef<"customers", 'Int'>
    readonly customer_name: FieldRef<"customers", 'String'>
    readonly contact_name: FieldRef<"customers", 'String'>
    readonly address: FieldRef<"customers", 'String'>
    readonly city: FieldRef<"customers", 'String'>
    readonly postal_code: FieldRef<"customers", 'String'>
    readonly country: FieldRef<"customers", 'String'>
  }
    

  // Custom InputTypes
  /**
   * customers findUnique
   */
  export type customersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findUniqueOrThrow
   */
  export type customersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers findFirst
   */
  export type customersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findFirstOrThrow
   */
  export type customersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of customers.
     */
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers findMany
   */
  export type customersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter, which customers to fetch.
     */
    where?: customersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of customers to fetch.
     */
    orderBy?: customersOrderByWithRelationInput | customersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing customers.
     */
    cursor?: customersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` customers.
     */
    skip?: number
    distinct?: CustomersScalarFieldEnum | CustomersScalarFieldEnum[]
  }

  /**
   * customers create
   */
  export type customersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to create a customers.
     */
    data?: XOR<customersCreateInput, customersUncheckedCreateInput>
  }

  /**
   * customers createMany
   */
  export type customersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers createManyAndReturn
   */
  export type customersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to create many customers.
     */
    data: customersCreateManyInput | customersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * customers update
   */
  export type customersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The data needed to update a customers.
     */
    data: XOR<customersUpdateInput, customersUncheckedUpdateInput>
    /**
     * Choose, which customers to update.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers updateMany
   */
  export type customersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers updateManyAndReturn
   */
  export type customersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * The data used to update customers.
     */
    data: XOR<customersUpdateManyMutationInput, customersUncheckedUpdateManyInput>
    /**
     * Filter which customers to update
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to update.
     */
    limit?: number
  }

  /**
   * customers upsert
   */
  export type customersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * The filter to search for the customers to update in case it exists.
     */
    where: customersWhereUniqueInput
    /**
     * In case the customers found by the `where` argument doesn't exist, create a new customers with this data.
     */
    create: XOR<customersCreateInput, customersUncheckedCreateInput>
    /**
     * In case the customers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<customersUpdateInput, customersUncheckedUpdateInput>
  }

  /**
   * customers delete
   */
  export type customersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    /**
     * Filter which customers to delete.
     */
    where: customersWhereUniqueInput
  }

  /**
   * customers deleteMany
   */
  export type customersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which customers to delete
     */
    where?: customersWhereInput
    /**
     * Limit how many customers to delete.
     */
    limit?: number
  }

  /**
   * customers.orders
   */
  export type customers$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * customers without action
   */
  export type customersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
  }


  /**
   * Model order_details
   */

  export type AggregateOrder_details = {
    _count: Order_detailsCountAggregateOutputType | null
    _avg: Order_detailsAvgAggregateOutputType | null
    _sum: Order_detailsSumAggregateOutputType | null
    _min: Order_detailsMinAggregateOutputType | null
    _max: Order_detailsMaxAggregateOutputType | null
  }

  export type Order_detailsAvgAggregateOutputType = {
    order_detail_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Order_detailsSumAggregateOutputType = {
    order_detail_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Order_detailsMinAggregateOutputType = {
    order_detail_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Order_detailsMaxAggregateOutputType = {
    order_detail_id: number | null
    order_id: number | null
    product_id: number | null
    quantity: number | null
  }

  export type Order_detailsCountAggregateOutputType = {
    order_detail_id: number
    order_id: number
    product_id: number
    quantity: number
    _all: number
  }


  export type Order_detailsAvgAggregateInputType = {
    order_detail_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type Order_detailsSumAggregateInputType = {
    order_detail_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type Order_detailsMinAggregateInputType = {
    order_detail_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type Order_detailsMaxAggregateInputType = {
    order_detail_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
  }

  export type Order_detailsCountAggregateInputType = {
    order_detail_id?: true
    order_id?: true
    product_id?: true
    quantity?: true
    _all?: true
  }

  export type Order_detailsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to aggregate.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_details
    **/
    _count?: true | Order_detailsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_detailsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_detailsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_detailsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_detailsMaxAggregateInputType
  }

  export type GetOrder_detailsAggregateType<T extends Order_detailsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_details]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_details[P]>
      : GetScalarType<T[P], AggregateOrder_details[P]>
  }




  export type order_detailsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_detailsWhereInput
    orderBy?: order_detailsOrderByWithAggregationInput | order_detailsOrderByWithAggregationInput[]
    by: Order_detailsScalarFieldEnum[] | Order_detailsScalarFieldEnum
    having?: order_detailsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_detailsCountAggregateInputType | true
    _avg?: Order_detailsAvgAggregateInputType
    _sum?: Order_detailsSumAggregateInputType
    _min?: Order_detailsMinAggregateInputType
    _max?: Order_detailsMaxAggregateInputType
  }

  export type Order_detailsGroupByOutputType = {
    order_detail_id: number
    order_id: number | null
    product_id: number | null
    quantity: number | null
    _count: Order_detailsCountAggregateOutputType | null
    _avg: Order_detailsAvgAggregateOutputType | null
    _sum: Order_detailsSumAggregateOutputType | null
    _min: Order_detailsMinAggregateOutputType | null
    _max: Order_detailsMaxAggregateOutputType | null
  }

  type GetOrder_detailsGroupByPayload<T extends order_detailsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_detailsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_detailsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_detailsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_detailsGroupByOutputType[P]>
        }
      >
    >


  export type order_detailsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_detail_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    orders?: boolean | order_details$ordersArgs<ExtArgs>
    products?: boolean | order_details$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_details"]>

  export type order_detailsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_detail_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    orders?: boolean | order_details$ordersArgs<ExtArgs>
    products?: boolean | order_details$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_details"]>

  export type order_detailsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_detail_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
    orders?: boolean | order_details$ordersArgs<ExtArgs>
    products?: boolean | order_details$productsArgs<ExtArgs>
  }, ExtArgs["result"]["order_details"]>

  export type order_detailsSelectScalar = {
    order_detail_id?: boolean
    order_id?: boolean
    product_id?: boolean
    quantity?: boolean
  }

  export type order_detailsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_detail_id" | "order_id" | "product_id" | "quantity", ExtArgs["result"]["order_details"]>
  export type order_detailsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_details$ordersArgs<ExtArgs>
    products?: boolean | order_details$productsArgs<ExtArgs>
  }
  export type order_detailsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_details$ordersArgs<ExtArgs>
    products?: boolean | order_details$productsArgs<ExtArgs>
  }
  export type order_detailsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_details$ordersArgs<ExtArgs>
    products?: boolean | order_details$productsArgs<ExtArgs>
  }

  export type $order_detailsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_details"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      order_detail_id: number
      order_id: number | null
      product_id: number | null
      quantity: number | null
    }, ExtArgs["result"]["order_details"]>
    composites: {}
  }

  type order_detailsGetPayload<S extends boolean | null | undefined | order_detailsDefaultArgs> = $Result.GetResult<Prisma.$order_detailsPayload, S>

  type order_detailsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_detailsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_detailsCountAggregateInputType | true
    }

  export interface order_detailsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_details'], meta: { name: 'order_details' } }
    /**
     * Find zero or one Order_details that matches the filter.
     * @param {order_detailsFindUniqueArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_detailsFindUniqueArgs>(args: SelectSubset<T, order_detailsFindUniqueArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_details that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_detailsFindUniqueOrThrowArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_detailsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_detailsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindFirstArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_detailsFindFirstArgs>(args?: SelectSubset<T, order_detailsFindFirstArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_details that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindFirstOrThrowArgs} args - Arguments to find a Order_details
     * @example
     * // Get one Order_details
     * const order_details = await prisma.order_details.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_detailsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_detailsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_details that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_details
     * const order_details = await prisma.order_details.findMany()
     * 
     * // Get first 10 Order_details
     * const order_details = await prisma.order_details.findMany({ take: 10 })
     * 
     * // Only select the `order_detail_id`
     * const order_detailsWithOrder_detail_idOnly = await prisma.order_details.findMany({ select: { order_detail_id: true } })
     * 
     */
    findMany<T extends order_detailsFindManyArgs>(args?: SelectSubset<T, order_detailsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_details.
     * @param {order_detailsCreateArgs} args - Arguments to create a Order_details.
     * @example
     * // Create one Order_details
     * const Order_details = await prisma.order_details.create({
     *   data: {
     *     // ... data to create a Order_details
     *   }
     * })
     * 
     */
    create<T extends order_detailsCreateArgs>(args: SelectSubset<T, order_detailsCreateArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_details.
     * @param {order_detailsCreateManyArgs} args - Arguments to create many Order_details.
     * @example
     * // Create many Order_details
     * const order_details = await prisma.order_details.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_detailsCreateManyArgs>(args?: SelectSubset<T, order_detailsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_details and returns the data saved in the database.
     * @param {order_detailsCreateManyAndReturnArgs} args - Arguments to create many Order_details.
     * @example
     * // Create many Order_details
     * const order_details = await prisma.order_details.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_details and only return the `order_detail_id`
     * const order_detailsWithOrder_detail_idOnly = await prisma.order_details.createManyAndReturn({
     *   select: { order_detail_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_detailsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_detailsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_details.
     * @param {order_detailsDeleteArgs} args - Arguments to delete one Order_details.
     * @example
     * // Delete one Order_details
     * const Order_details = await prisma.order_details.delete({
     *   where: {
     *     // ... filter to delete one Order_details
     *   }
     * })
     * 
     */
    delete<T extends order_detailsDeleteArgs>(args: SelectSubset<T, order_detailsDeleteArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_details.
     * @param {order_detailsUpdateArgs} args - Arguments to update one Order_details.
     * @example
     * // Update one Order_details
     * const order_details = await prisma.order_details.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_detailsUpdateArgs>(args: SelectSubset<T, order_detailsUpdateArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_details.
     * @param {order_detailsDeleteManyArgs} args - Arguments to filter Order_details to delete.
     * @example
     * // Delete a few Order_details
     * const { count } = await prisma.order_details.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_detailsDeleteManyArgs>(args?: SelectSubset<T, order_detailsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_details
     * const order_details = await prisma.order_details.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_detailsUpdateManyArgs>(args: SelectSubset<T, order_detailsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_details and returns the data updated in the database.
     * @param {order_detailsUpdateManyAndReturnArgs} args - Arguments to update many Order_details.
     * @example
     * // Update many Order_details
     * const order_details = await prisma.order_details.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_details and only return the `order_detail_id`
     * const order_detailsWithOrder_detail_idOnly = await prisma.order_details.updateManyAndReturn({
     *   select: { order_detail_id: true },
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
    updateManyAndReturn<T extends order_detailsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_detailsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_details.
     * @param {order_detailsUpsertArgs} args - Arguments to update or create a Order_details.
     * @example
     * // Update or create a Order_details
     * const order_details = await prisma.order_details.upsert({
     *   create: {
     *     // ... data to create a Order_details
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_details we want to update
     *   }
     * })
     */
    upsert<T extends order_detailsUpsertArgs>(args: SelectSubset<T, order_detailsUpsertArgs<ExtArgs>>): Prisma__order_detailsClient<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsCountArgs} args - Arguments to filter Order_details to count.
     * @example
     * // Count the number of Order_details
     * const count = await prisma.order_details.count({
     *   where: {
     *     // ... the filter for the Order_details we want to count
     *   }
     * })
    **/
    count<T extends order_detailsCountArgs>(
      args?: Subset<T, order_detailsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_detailsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_detailsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Order_detailsAggregateArgs>(args: Subset<T, Order_detailsAggregateArgs>): Prisma.PrismaPromise<GetOrder_detailsAggregateType<T>>

    /**
     * Group by Order_details.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_detailsGroupByArgs} args - Group by arguments.
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
      T extends order_detailsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_detailsGroupByArgs['orderBy'] }
        : { orderBy?: order_detailsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, order_detailsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_detailsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_details model
   */
  readonly fields: order_detailsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_details.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_detailsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends order_details$ordersArgs<ExtArgs> = {}>(args?: Subset<T, order_details$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends order_details$productsArgs<ExtArgs> = {}>(args?: Subset<T, order_details$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the order_details model
   */
  interface order_detailsFieldRefs {
    readonly order_detail_id: FieldRef<"order_details", 'Int'>
    readonly order_id: FieldRef<"order_details", 'Int'>
    readonly product_id: FieldRef<"order_details", 'Int'>
    readonly quantity: FieldRef<"order_details", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * order_details findUnique
   */
  export type order_detailsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where: order_detailsWhereUniqueInput
  }

  /**
   * order_details findUniqueOrThrow
   */
  export type order_detailsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where: order_detailsWhereUniqueInput
  }

  /**
   * order_details findFirst
   */
  export type order_detailsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * order_details findFirstOrThrow
   */
  export type order_detailsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_details.
     */
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * order_details findMany
   */
  export type order_detailsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter, which order_details to fetch.
     */
    where?: order_detailsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_details to fetch.
     */
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_details.
     */
    cursor?: order_detailsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_details from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_details.
     */
    skip?: number
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * order_details create
   */
  export type order_detailsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_details.
     */
    data?: XOR<order_detailsCreateInput, order_detailsUncheckedCreateInput>
  }

  /**
   * order_details createMany
   */
  export type order_detailsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_details.
     */
    data: order_detailsCreateManyInput | order_detailsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_details createManyAndReturn
   */
  export type order_detailsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * The data used to create many order_details.
     */
    data: order_detailsCreateManyInput | order_detailsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_details update
   */
  export type order_detailsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_details.
     */
    data: XOR<order_detailsUpdateInput, order_detailsUncheckedUpdateInput>
    /**
     * Choose, which order_details to update.
     */
    where: order_detailsWhereUniqueInput
  }

  /**
   * order_details updateMany
   */
  export type order_detailsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_details.
     */
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyInput>
    /**
     * Filter which order_details to update
     */
    where?: order_detailsWhereInput
    /**
     * Limit how many order_details to update.
     */
    limit?: number
  }

  /**
   * order_details updateManyAndReturn
   */
  export type order_detailsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * The data used to update order_details.
     */
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyInput>
    /**
     * Filter which order_details to update
     */
    where?: order_detailsWhereInput
    /**
     * Limit how many order_details to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_details upsert
   */
  export type order_detailsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_details to update in case it exists.
     */
    where: order_detailsWhereUniqueInput
    /**
     * In case the order_details found by the `where` argument doesn't exist, create a new order_details with this data.
     */
    create: XOR<order_detailsCreateInput, order_detailsUncheckedCreateInput>
    /**
     * In case the order_details was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_detailsUpdateInput, order_detailsUncheckedUpdateInput>
  }

  /**
   * order_details delete
   */
  export type order_detailsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    /**
     * Filter which order_details to delete.
     */
    where: order_detailsWhereUniqueInput
  }

  /**
   * order_details deleteMany
   */
  export type order_detailsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_details to delete
     */
    where?: order_detailsWhereInput
    /**
     * Limit how many order_details to delete.
     */
    limit?: number
  }

  /**
   * order_details.orders
   */
  export type order_details$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * order_details.products
   */
  export type order_details$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * order_details without action
   */
  export type order_detailsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    order_date: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    order_id: number | null
    customer_id: number | null
    order_date: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    order_id: number
    customer_id: number
    order_date: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    order_id?: true
    customer_id?: true
  }

  export type OrdersSumAggregateInputType = {
    order_id?: true
    customer_id?: true
  }

  export type OrdersMinAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_date?: true
  }

  export type OrdersMaxAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_date?: true
  }

  export type OrdersCountAggregateInputType = {
    order_id?: true
    customer_id?: true
    order_date?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    order_id: number
    customer_id: number | null
    order_date: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_date?: boolean
    order_details?: boolean | orders$order_detailsArgs<ExtArgs>
    customers?: boolean | orders$customersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_date?: boolean
    customers?: boolean | orders$customersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    order_id?: boolean
    customer_id?: boolean
    order_date?: boolean
    customers?: boolean | orders$customersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    order_id?: boolean
    customer_id?: boolean
    order_date?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"order_id" | "customer_id" | "order_date", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | orders$order_detailsArgs<ExtArgs>
    customers?: boolean | orders$customersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | orders$customersArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customers?: boolean | orders$customersArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_details: Prisma.$order_detailsPayload<ExtArgs>[]
      customers: Prisma.$customersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      order_id: number
      customer_id: number | null
      order_date: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.findMany({ select: { order_id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.createManyAndReturn({
     *   select: { order_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `order_id`
     * const ordersWithOrder_idOnly = await prisma.orders.updateManyAndReturn({
     *   select: { order_id: true },
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
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
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
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_details<T extends orders$order_detailsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    customers<T extends orders$customersArgs<ExtArgs> = {}>(args?: Subset<T, orders$customersArgs<ExtArgs>>): Prisma__customersClient<$Result.GetResult<Prisma.$customersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly order_id: FieldRef<"orders", 'Int'>
    readonly customer_id: FieldRef<"orders", 'Int'>
    readonly order_date: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data?: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_details
   */
  export type orders$order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    where?: order_detailsWhereInput
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    cursor?: order_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * orders.customers
   */
  export type orders$customersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the customers
     */
    select?: customersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the customers
     */
    omit?: customersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: customersInclude<ExtArgs> | null
    where?: customersWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    product_id: number | null
    category_id: number | null
    price: Decimal | null
  }

  export type ProductsSumAggregateOutputType = {
    product_id: number | null
    category_id: number | null
    price: Decimal | null
  }

  export type ProductsMinAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    category_id: number | null
    unit: string | null
    price: Decimal | null
  }

  export type ProductsMaxAggregateOutputType = {
    product_id: number | null
    product_name: string | null
    category_id: number | null
    unit: string | null
    price: Decimal | null
  }

  export type ProductsCountAggregateOutputType = {
    product_id: number
    product_name: number
    category_id: number
    unit: number
    price: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    product_id?: true
    category_id?: true
    price?: true
  }

  export type ProductsSumAggregateInputType = {
    product_id?: true
    category_id?: true
    price?: true
  }

  export type ProductsMinAggregateInputType = {
    product_id?: true
    product_name?: true
    category_id?: true
    unit?: true
    price?: true
  }

  export type ProductsMaxAggregateInputType = {
    product_id?: true
    product_name?: true
    category_id?: true
    unit?: true
    price?: true
  }

  export type ProductsCountAggregateInputType = {
    product_id?: true
    product_name?: true
    category_id?: true
    unit?: true
    price?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    product_id: number
    product_name: string | null
    category_id: number | null
    unit: string | null
    price: Decimal | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    category_id?: boolean
    unit?: boolean
    price?: boolean
    order_details?: boolean | products$order_detailsArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    category_id?: boolean
    unit?: boolean
    price?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    product_id?: boolean
    product_name?: boolean
    category_id?: boolean
    unit?: boolean
    price?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    product_id?: boolean
    product_name?: boolean
    category_id?: boolean
    unit?: boolean
    price?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"product_id" | "product_name" | "category_id" | "unit" | "price", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_details?: boolean | products$order_detailsArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      order_details: Prisma.$order_detailsPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      product_id: number
      product_name: string | null
      category_id: number | null
      unit: string | null
      price: Prisma.Decimal | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.findMany({ select: { product_id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.createManyAndReturn({
     *   select: { product_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `product_id`
     * const productsWithProduct_idOnly = await prisma.products.updateManyAndReturn({
     *   select: { product_id: true },
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
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
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
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_details<T extends products$order_detailsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_detailsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends products$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly product_id: FieldRef<"products", 'Int'>
    readonly product_name: FieldRef<"products", 'String'>
    readonly category_id: FieldRef<"products", 'Int'>
    readonly unit: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data?: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.order_details
   */
  export type products$order_detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_details
     */
    select?: order_detailsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_details
     */
    omit?: order_detailsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_detailsInclude<ExtArgs> | null
    where?: order_detailsWhereInput
    orderBy?: order_detailsOrderByWithRelationInput | order_detailsOrderByWithRelationInput[]
    cursor?: order_detailsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_detailsScalarFieldEnum | Order_detailsScalarFieldEnum[]
  }

  /**
   * products.categories
   */
  export type products$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
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


  export const EmployeesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    position: 'position',
    start_date: 'start_date',
    work_time: 'work_time',
    hours_per_day: 'hours_per_day',
    work_schedule: 'work_schedule'
  };

  export type EmployeesScalarFieldEnum = (typeof EmployeesScalarFieldEnum)[keyof typeof EmployeesScalarFieldEnum]


  export const CountriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    iso2: 'iso2',
    iso3: 'iso3',
    local_name: 'local_name',
    continent: 'continent'
  };

  export type CountriesScalarFieldEnum = (typeof CountriesScalarFieldEnum)[keyof typeof CountriesScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    category_id: 'category_id',
    category_name: 'category_name',
    description: 'description'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const CustomersScalarFieldEnum: {
    customer_id: 'customer_id',
    customer_name: 'customer_name',
    contact_name: 'contact_name',
    address: 'address',
    city: 'city',
    postal_code: 'postal_code',
    country: 'country'
  };

  export type CustomersScalarFieldEnum = (typeof CustomersScalarFieldEnum)[keyof typeof CustomersScalarFieldEnum]


  export const Order_detailsScalarFieldEnum: {
    order_detail_id: 'order_detail_id',
    order_id: 'order_id',
    product_id: 'product_id',
    quantity: 'quantity'
  };

  export type Order_detailsScalarFieldEnum = (typeof Order_detailsScalarFieldEnum)[keyof typeof Order_detailsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    order_id: 'order_id',
    customer_id: 'customer_id',
    order_date: 'order_date'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    product_id: 'product_id',
    product_name: 'product_name',
    category_id: 'category_id',
    unit: 'unit',
    price: 'price'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


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
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'continents'
   */
  export type EnumcontinentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'continents'>
    


  /**
   * Reference to a field of type 'continents[]'
   */
  export type ListEnumcontinentsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'continents[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


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


  export type employeesWhereInput = {
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    id?: IntFilter<"employees"> | number
    name?: StringFilter<"employees"> | string
    position?: StringFilter<"employees"> | string
    start_date?: DateTimeFilter<"employees"> | Date | string
    work_time?: DateTimeFilter<"employees"> | Date | string
    hours_per_day?: IntFilter<"employees"> | number
    work_schedule?: StringFilter<"employees"> | string
  }

  export type employeesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    work_time?: SortOrder
    hours_per_day?: SortOrder
    work_schedule?: SortOrder
  }

  export type employeesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: employeesWhereInput | employeesWhereInput[]
    OR?: employeesWhereInput[]
    NOT?: employeesWhereInput | employeesWhereInput[]
    name?: StringFilter<"employees"> | string
    position?: StringFilter<"employees"> | string
    start_date?: DateTimeFilter<"employees"> | Date | string
    work_time?: DateTimeFilter<"employees"> | Date | string
    hours_per_day?: IntFilter<"employees"> | number
    work_schedule?: StringFilter<"employees"> | string
  }, "id">

  export type employeesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    work_time?: SortOrder
    hours_per_day?: SortOrder
    work_schedule?: SortOrder
    _count?: employeesCountOrderByAggregateInput
    _avg?: employeesAvgOrderByAggregateInput
    _max?: employeesMaxOrderByAggregateInput
    _min?: employeesMinOrderByAggregateInput
    _sum?: employeesSumOrderByAggregateInput
  }

  export type employeesScalarWhereWithAggregatesInput = {
    AND?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    OR?: employeesScalarWhereWithAggregatesInput[]
    NOT?: employeesScalarWhereWithAggregatesInput | employeesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"employees"> | number
    name?: StringWithAggregatesFilter<"employees"> | string
    position?: StringWithAggregatesFilter<"employees"> | string
    start_date?: DateTimeWithAggregatesFilter<"employees"> | Date | string
    work_time?: DateTimeWithAggregatesFilter<"employees"> | Date | string
    hours_per_day?: IntWithAggregatesFilter<"employees"> | number
    work_schedule?: StringWithAggregatesFilter<"employees"> | string
  }

  export type countriesWhereInput = {
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    id?: BigIntFilter<"countries"> | bigint | number
    name?: StringNullableFilter<"countries"> | string | null
    iso2?: StringFilter<"countries"> | string
    iso3?: StringNullableFilter<"countries"> | string | null
    local_name?: StringNullableFilter<"countries"> | string | null
    continent?: EnumcontinentsNullableFilter<"countries"> | $Enums.continents | null
  }

  export type countriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    iso2?: SortOrder
    iso3?: SortOrderInput | SortOrder
    local_name?: SortOrderInput | SortOrder
    continent?: SortOrderInput | SortOrder
  }

  export type countriesWhereUniqueInput = Prisma.AtLeast<{
    id?: bigint | number
    AND?: countriesWhereInput | countriesWhereInput[]
    OR?: countriesWhereInput[]
    NOT?: countriesWhereInput | countriesWhereInput[]
    name?: StringNullableFilter<"countries"> | string | null
    iso2?: StringFilter<"countries"> | string
    iso3?: StringNullableFilter<"countries"> | string | null
    local_name?: StringNullableFilter<"countries"> | string | null
    continent?: EnumcontinentsNullableFilter<"countries"> | $Enums.continents | null
  }, "id">

  export type countriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    iso2?: SortOrder
    iso3?: SortOrderInput | SortOrder
    local_name?: SortOrderInput | SortOrder
    continent?: SortOrderInput | SortOrder
    _count?: countriesCountOrderByAggregateInput
    _avg?: countriesAvgOrderByAggregateInput
    _max?: countriesMaxOrderByAggregateInput
    _min?: countriesMinOrderByAggregateInput
    _sum?: countriesSumOrderByAggregateInput
  }

  export type countriesScalarWhereWithAggregatesInput = {
    AND?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    OR?: countriesScalarWhereWithAggregatesInput[]
    NOT?: countriesScalarWhereWithAggregatesInput | countriesScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"countries"> | bigint | number
    name?: StringNullableWithAggregatesFilter<"countries"> | string | null
    iso2?: StringWithAggregatesFilter<"countries"> | string
    iso3?: StringNullableWithAggregatesFilter<"countries"> | string | null
    local_name?: StringNullableWithAggregatesFilter<"countries"> | string | null
    continent?: EnumcontinentsNullableWithAggregatesFilter<"countries"> | $Enums.continents | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_id?: IntFilter<"categories"> | number
    category_name?: StringNullableFilter<"categories"> | string | null
    description?: StringNullableFilter<"categories"> | string | null
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    category_id?: SortOrder
    category_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    category_id?: number
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    category_name?: StringNullableFilter<"categories"> | string | null
    description?: StringNullableFilter<"categories"> | string | null
    products?: ProductsListRelationFilter
  }, "category_id">

  export type categoriesOrderByWithAggregationInput = {
    category_id?: SortOrder
    category_name?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    category_id?: IntWithAggregatesFilter<"categories"> | number
    category_name?: StringNullableWithAggregatesFilter<"categories"> | string | null
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null
  }

  export type customersWhereInput = {
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    customer_id?: IntFilter<"customers"> | number
    customer_name?: StringNullableFilter<"customers"> | string | null
    contact_name?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    city?: StringNullableFilter<"customers"> | string | null
    postal_code?: StringNullableFilter<"customers"> | string | null
    country?: StringNullableFilter<"customers"> | string | null
    orders?: OrdersListRelationFilter
  }

  export type customersOrderByWithRelationInput = {
    customer_id?: SortOrder
    customer_name?: SortOrderInput | SortOrder
    contact_name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    orders?: ordersOrderByRelationAggregateInput
  }

  export type customersWhereUniqueInput = Prisma.AtLeast<{
    customer_id?: number
    AND?: customersWhereInput | customersWhereInput[]
    OR?: customersWhereInput[]
    NOT?: customersWhereInput | customersWhereInput[]
    customer_name?: StringNullableFilter<"customers"> | string | null
    contact_name?: StringNullableFilter<"customers"> | string | null
    address?: StringNullableFilter<"customers"> | string | null
    city?: StringNullableFilter<"customers"> | string | null
    postal_code?: StringNullableFilter<"customers"> | string | null
    country?: StringNullableFilter<"customers"> | string | null
    orders?: OrdersListRelationFilter
  }, "customer_id">

  export type customersOrderByWithAggregationInput = {
    customer_id?: SortOrder
    customer_name?: SortOrderInput | SortOrder
    contact_name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    postal_code?: SortOrderInput | SortOrder
    country?: SortOrderInput | SortOrder
    _count?: customersCountOrderByAggregateInput
    _avg?: customersAvgOrderByAggregateInput
    _max?: customersMaxOrderByAggregateInput
    _min?: customersMinOrderByAggregateInput
    _sum?: customersSumOrderByAggregateInput
  }

  export type customersScalarWhereWithAggregatesInput = {
    AND?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    OR?: customersScalarWhereWithAggregatesInput[]
    NOT?: customersScalarWhereWithAggregatesInput | customersScalarWhereWithAggregatesInput[]
    customer_id?: IntWithAggregatesFilter<"customers"> | number
    customer_name?: StringNullableWithAggregatesFilter<"customers"> | string | null
    contact_name?: StringNullableWithAggregatesFilter<"customers"> | string | null
    address?: StringNullableWithAggregatesFilter<"customers"> | string | null
    city?: StringNullableWithAggregatesFilter<"customers"> | string | null
    postal_code?: StringNullableWithAggregatesFilter<"customers"> | string | null
    country?: StringNullableWithAggregatesFilter<"customers"> | string | null
  }

  export type order_detailsWhereInput = {
    AND?: order_detailsWhereInput | order_detailsWhereInput[]
    OR?: order_detailsWhereInput[]
    NOT?: order_detailsWhereInput | order_detailsWhereInput[]
    order_detail_id?: IntFilter<"order_details"> | number
    order_id?: IntNullableFilter<"order_details"> | number | null
    product_id?: IntNullableFilter<"order_details"> | number | null
    quantity?: IntNullableFilter<"order_details"> | number | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type order_detailsOrderByWithRelationInput = {
    order_detail_id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
  }

  export type order_detailsWhereUniqueInput = Prisma.AtLeast<{
    order_detail_id?: number
    AND?: order_detailsWhereInput | order_detailsWhereInput[]
    OR?: order_detailsWhereInput[]
    NOT?: order_detailsWhereInput | order_detailsWhereInput[]
    order_id?: IntNullableFilter<"order_details"> | number | null
    product_id?: IntNullableFilter<"order_details"> | number | null
    quantity?: IntNullableFilter<"order_details"> | number | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "order_detail_id">

  export type order_detailsOrderByWithAggregationInput = {
    order_detail_id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    quantity?: SortOrderInput | SortOrder
    _count?: order_detailsCountOrderByAggregateInput
    _avg?: order_detailsAvgOrderByAggregateInput
    _max?: order_detailsMaxOrderByAggregateInput
    _min?: order_detailsMinOrderByAggregateInput
    _sum?: order_detailsSumOrderByAggregateInput
  }

  export type order_detailsScalarWhereWithAggregatesInput = {
    AND?: order_detailsScalarWhereWithAggregatesInput | order_detailsScalarWhereWithAggregatesInput[]
    OR?: order_detailsScalarWhereWithAggregatesInput[]
    NOT?: order_detailsScalarWhereWithAggregatesInput | order_detailsScalarWhereWithAggregatesInput[]
    order_detail_id?: IntWithAggregatesFilter<"order_details"> | number
    order_id?: IntNullableWithAggregatesFilter<"order_details"> | number | null
    product_id?: IntNullableWithAggregatesFilter<"order_details"> | number | null
    quantity?: IntNullableWithAggregatesFilter<"order_details"> | number | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    order_id?: IntFilter<"orders"> | number
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_date?: DateTimeNullableFilter<"orders"> | Date | string | null
    order_details?: Order_detailsListRelationFilter
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    order_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    order_date?: SortOrderInput | SortOrder
    order_details?: order_detailsOrderByRelationAggregateInput
    customers?: customersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    order_id?: number
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_date?: DateTimeNullableFilter<"orders"> | Date | string | null
    order_details?: Order_detailsListRelationFilter
    customers?: XOR<CustomersNullableScalarRelationFilter, customersWhereInput> | null
  }, "order_id">

  export type ordersOrderByWithAggregationInput = {
    order_id?: SortOrder
    customer_id?: SortOrderInput | SortOrder
    order_date?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    order_id?: IntWithAggregatesFilter<"orders"> | number
    customer_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    order_date?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_id?: IntFilter<"products"> | number
    product_name?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    unit?: StringNullableFilter<"products"> | string | null
    price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    order_details?: Order_detailsListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
  }

  export type productsOrderByWithRelationInput = {
    product_id?: SortOrder
    product_name?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    order_details?: order_detailsOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    product_id?: number
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    product_name?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    unit?: StringNullableFilter<"products"> | string | null
    price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    order_details?: Order_detailsListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
  }, "product_id">

  export type productsOrderByWithAggregationInput = {
    product_id?: SortOrder
    product_name?: SortOrderInput | SortOrder
    category_id?: SortOrderInput | SortOrder
    unit?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    product_id?: IntWithAggregatesFilter<"products"> | number
    product_name?: StringNullableWithAggregatesFilter<"products"> | string | null
    category_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    unit?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: DecimalNullableWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string | null
  }

  export type employeesCreateInput = {
    name: string
    position: string
    start_date: Date | string
    work_time: Date | string
    hours_per_day: number
    work_schedule: string
  }

  export type employeesUncheckedCreateInput = {
    id?: number
    name: string
    position: string
    start_date: Date | string
    work_time: Date | string
    hours_per_day: number
    work_schedule: string
  }

  export type employeesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_time?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_per_day?: IntFieldUpdateOperationsInput | number
    work_schedule?: StringFieldUpdateOperationsInput | string
  }

  export type employeesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_time?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_per_day?: IntFieldUpdateOperationsInput | number
    work_schedule?: StringFieldUpdateOperationsInput | string
  }

  export type employeesCreateManyInput = {
    id?: number
    name: string
    position: string
    start_date: Date | string
    work_time: Date | string
    hours_per_day: number
    work_schedule: string
  }

  export type employeesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_time?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_per_day?: IntFieldUpdateOperationsInput | number
    work_schedule?: StringFieldUpdateOperationsInput | string
  }

  export type employeesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    position?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    work_time?: DateTimeFieldUpdateOperationsInput | Date | string
    hours_per_day?: IntFieldUpdateOperationsInput | number
    work_schedule?: StringFieldUpdateOperationsInput | string
  }

  export type countriesCreateInput = {
    id?: bigint | number
    name?: string | null
    iso2: string
    iso3?: string | null
    local_name?: string | null
    continent?: $Enums.continents | null
  }

  export type countriesUncheckedCreateInput = {
    id?: bigint | number
    name?: string | null
    iso2: string
    iso3?: string | null
    local_name?: string | null
    continent?: $Enums.continents | null
  }

  export type countriesUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    iso2?: StringFieldUpdateOperationsInput | string
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    local_name?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableEnumcontinentsFieldUpdateOperationsInput | $Enums.continents | null
  }

  export type countriesUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    iso2?: StringFieldUpdateOperationsInput | string
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    local_name?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableEnumcontinentsFieldUpdateOperationsInput | $Enums.continents | null
  }

  export type countriesCreateManyInput = {
    id?: bigint | number
    name?: string | null
    iso2: string
    iso3?: string | null
    local_name?: string | null
    continent?: $Enums.continents | null
  }

  export type countriesUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    iso2?: StringFieldUpdateOperationsInput | string
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    local_name?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableEnumcontinentsFieldUpdateOperationsInput | $Enums.continents | null
  }

  export type countriesUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    iso2?: StringFieldUpdateOperationsInput | string
    iso3?: NullableStringFieldUpdateOperationsInput | string | null
    local_name?: NullableStringFieldUpdateOperationsInput | string | null
    continent?: NullableEnumcontinentsFieldUpdateOperationsInput | $Enums.continents | null
  }

  export type categoriesCreateInput = {
    category_name?: string | null
    description?: string | null
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    category_id?: number
    category_name?: string | null
    description?: string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    category_id?: number
    category_name?: string | null
    description?: string | null
  }

  export type categoriesUpdateManyMutationInput = {
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersCreateInput = {
    customer_name?: string | null
    contact_name?: string | null
    address?: string | null
    city?: string | null
    postal_code?: string | null
    country?: string | null
    orders?: ordersCreateNestedManyWithoutCustomersInput
  }

  export type customersUncheckedCreateInput = {
    customer_id?: number
    customer_name?: string | null
    contact_name?: string | null
    address?: string | null
    city?: string | null
    postal_code?: string | null
    country?: string | null
    orders?: ordersUncheckedCreateNestedManyWithoutCustomersInput
  }

  export type customersUpdateInput = {
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUpdateManyWithoutCustomersNestedInput
  }

  export type customersUncheckedUpdateInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    orders?: ordersUncheckedUpdateManyWithoutCustomersNestedInput
  }

  export type customersCreateManyInput = {
    customer_id?: number
    customer_name?: string | null
    contact_name?: string | null
    address?: string | null
    city?: string | null
    postal_code?: string | null
    country?: string | null
  }

  export type customersUpdateManyMutationInput = {
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateManyInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_detailsCreateInput = {
    quantity?: number | null
    orders?: ordersCreateNestedOneWithoutOrder_detailsInput
    products?: productsCreateNestedOneWithoutOrder_detailsInput
  }

  export type order_detailsUncheckedCreateInput = {
    order_detail_id?: number
    order_id?: number | null
    product_id?: number | null
    quantity?: number | null
  }

  export type order_detailsUpdateInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUpdateOneWithoutOrder_detailsNestedInput
    products?: productsUpdateOneWithoutOrder_detailsNestedInput
  }

  export type order_detailsUncheckedUpdateInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type order_detailsCreateManyInput = {
    order_detail_id?: number
    order_id?: number | null
    product_id?: number | null
    quantity?: number | null
  }

  export type order_detailsUpdateManyMutationInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type order_detailsUncheckedUpdateManyInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type ordersCreateInput = {
    order_date?: Date | string | null
    order_details?: order_detailsCreateNestedManyWithoutOrdersInput
    customers?: customersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    order_id?: number
    customer_id?: number | null
    order_date?: Date | string | null
    order_details?: order_detailsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_details?: order_detailsUpdateManyWithoutOrdersNestedInput
    customers?: customersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_details?: order_detailsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    order_id?: number
    customer_id?: number | null
    order_date?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    product_name?: string | null
    unit?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    order_details?: order_detailsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    product_id?: number
    product_name?: string | null
    category_id?: number | null
    unit?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    order_details?: order_detailsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    order_details?: order_detailsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    order_details?: order_detailsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    product_id?: number
    product_name?: string | null
    category_id?: number | null
    unit?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type productsUpdateManyMutationInput = {
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
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

  export type employeesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    work_time?: SortOrder
    hours_per_day?: SortOrder
    work_schedule?: SortOrder
  }

  export type employeesAvgOrderByAggregateInput = {
    id?: SortOrder
    hours_per_day?: SortOrder
  }

  export type employeesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    work_time?: SortOrder
    hours_per_day?: SortOrder
    work_schedule?: SortOrder
  }

  export type employeesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    position?: SortOrder
    start_date?: SortOrder
    work_time?: SortOrder
    hours_per_day?: SortOrder
    work_schedule?: SortOrder
  }

  export type employeesSumOrderByAggregateInput = {
    id?: SortOrder
    hours_per_day?: SortOrder
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

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type EnumcontinentsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.continents | EnumcontinentsFieldRefInput<$PrismaModel> | null
    in?: $Enums.continents[] | ListEnumcontinentsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.continents[] | ListEnumcontinentsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumcontinentsNullableFilter<$PrismaModel> | $Enums.continents | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type countriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso2?: SortOrder
    iso3?: SortOrder
    local_name?: SortOrder
    continent?: SortOrder
  }

  export type countriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type countriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso2?: SortOrder
    iso3?: SortOrder
    local_name?: SortOrder
    continent?: SortOrder
  }

  export type countriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    iso2?: SortOrder
    iso3?: SortOrder
    local_name?: SortOrder
    continent?: SortOrder
  }

  export type countriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type EnumcontinentsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.continents | EnumcontinentsFieldRefInput<$PrismaModel> | null
    in?: $Enums.continents[] | ListEnumcontinentsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.continents[] | ListEnumcontinentsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumcontinentsNullableWithAggregatesFilter<$PrismaModel> | $Enums.continents | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcontinentsNullableFilter<$PrismaModel>
    _max?: NestedEnumcontinentsNullableFilter<$PrismaModel>
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    description?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    description?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    category_id?: SortOrder
    category_name?: SortOrder
    description?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    category_id?: SortOrder
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type customersCountOrderByAggregateInput = {
    customer_id?: SortOrder
    customer_name?: SortOrder
    contact_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
  }

  export type customersAvgOrderByAggregateInput = {
    customer_id?: SortOrder
  }

  export type customersMaxOrderByAggregateInput = {
    customer_id?: SortOrder
    customer_name?: SortOrder
    contact_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
  }

  export type customersMinOrderByAggregateInput = {
    customer_id?: SortOrder
    customer_name?: SortOrder
    contact_name?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postal_code?: SortOrder
    country?: SortOrder
  }

  export type customersSumOrderByAggregateInput = {
    customer_id?: SortOrder
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

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null
    isNot?: productsWhereInput | null
  }

  export type order_detailsCountOrderByAggregateInput = {
    order_detail_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_detailsAvgOrderByAggregateInput = {
    order_detail_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_detailsMaxOrderByAggregateInput = {
    order_detail_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_detailsMinOrderByAggregateInput = {
    order_detail_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
  }

  export type order_detailsSumOrderByAggregateInput = {
    order_detail_id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    quantity?: SortOrder
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

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Order_detailsListRelationFilter = {
    every?: order_detailsWhereInput
    some?: order_detailsWhereInput
    none?: order_detailsWhereInput
  }

  export type CustomersNullableScalarRelationFilter = {
    is?: customersWhereInput | null
    isNot?: customersWhereInput | null
  }

  export type order_detailsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_date?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_date?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
    order_date?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    order_id?: SortOrder
    customer_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type productsCountOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    category_id?: SortOrder
    unit?: SortOrder
    price?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    category_id?: SortOrder
    unit?: SortOrder
    price?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    product_id?: SortOrder
    product_name?: SortOrder
    category_id?: SortOrder
    unit?: SortOrder
    price?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    product_id?: SortOrder
    category_id?: SortOrder
    price?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableEnumcontinentsFieldUpdateOperationsInput = {
    set?: $Enums.continents | null
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ordersCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutCustomersInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutCustomersNestedInput = {
    create?: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput> | ordersCreateWithoutCustomersInput[] | ordersUncheckedCreateWithoutCustomersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutCustomersInput | ordersCreateOrConnectWithoutCustomersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutCustomersInput | ordersUpsertWithWhereUniqueWithoutCustomersInput[]
    createMany?: ordersCreateManyCustomersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutCustomersInput | ordersUpdateWithWhereUniqueWithoutCustomersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutCustomersInput | ordersUpdateManyWithWhereWithoutCustomersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_detailsInput = {
    create?: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_detailsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_detailsInput = {
    create?: XOR<productsCreateWithoutOrder_detailsInput, productsUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_detailsInput
    connect?: productsWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUpdateOneWithoutOrder_detailsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_detailsInput
    upsert?: ordersUpsertWithoutOrder_detailsInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_detailsInput, ordersUpdateWithoutOrder_detailsInput>, ordersUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type productsUpdateOneWithoutOrder_detailsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_detailsInput, productsUncheckedCreateWithoutOrder_detailsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_detailsInput
    upsert?: productsUpsertWithoutOrder_detailsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_detailsInput, productsUpdateWithoutOrder_detailsInput>, productsUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type order_detailsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput> | order_detailsCreateWithoutOrdersInput[] | order_detailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_detailsCreateManyOrdersInputEnvelope
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
  }

  export type customersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    connect?: customersWhereUniqueInput
  }

  export type order_detailsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput> | order_detailsCreateWithoutOrdersInput[] | order_detailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_detailsCreateManyOrdersInputEnvelope
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type order_detailsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput> | order_detailsCreateWithoutOrdersInput[] | order_detailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_detailsUpsertWithWhereUniqueWithoutOrdersInput | order_detailsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_detailsCreateManyOrdersInputEnvelope
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    update?: order_detailsUpdateWithWhereUniqueWithoutOrdersInput | order_detailsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_detailsUpdateManyWithWhereWithoutOrdersInput | order_detailsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
  }

  export type customersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: customersCreateOrConnectWithoutOrdersInput
    upsert?: customersUpsertWithoutOrdersInput
    disconnect?: customersWhereInput | boolean
    delete?: customersWhereInput | boolean
    connect?: customersWhereUniqueInput
    update?: XOR<XOR<customersUpdateToOneWithWhereWithoutOrdersInput, customersUpdateWithoutOrdersInput>, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type order_detailsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput> | order_detailsCreateWithoutOrdersInput[] | order_detailsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutOrdersInput | order_detailsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_detailsUpsertWithWhereUniqueWithoutOrdersInput | order_detailsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_detailsCreateManyOrdersInputEnvelope
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    update?: order_detailsUpdateWithWhereUniqueWithoutOrdersInput | order_detailsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_detailsUpdateManyWithWhereWithoutOrdersInput | order_detailsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
  }

  export type order_detailsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput> | order_detailsCreateWithoutProductsInput[] | order_detailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutProductsInput | order_detailsCreateOrConnectWithoutProductsInput[]
    createMany?: order_detailsCreateManyProductsInputEnvelope
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type order_detailsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput> | order_detailsCreateWithoutProductsInput[] | order_detailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutProductsInput | order_detailsCreateOrConnectWithoutProductsInput[]
    createMany?: order_detailsCreateManyProductsInputEnvelope
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type order_detailsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput> | order_detailsCreateWithoutProductsInput[] | order_detailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutProductsInput | order_detailsCreateOrConnectWithoutProductsInput[]
    upsert?: order_detailsUpsertWithWhereUniqueWithoutProductsInput | order_detailsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_detailsCreateManyProductsInputEnvelope
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    update?: order_detailsUpdateWithWhereUniqueWithoutProductsInput | order_detailsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_detailsUpdateManyWithWhereWithoutProductsInput | order_detailsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
  }

  export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type order_detailsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput> | order_detailsCreateWithoutProductsInput[] | order_detailsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_detailsCreateOrConnectWithoutProductsInput | order_detailsCreateOrConnectWithoutProductsInput[]
    upsert?: order_detailsUpsertWithWhereUniqueWithoutProductsInput | order_detailsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_detailsCreateManyProductsInputEnvelope
    set?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    disconnect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    delete?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    connect?: order_detailsWhereUniqueInput | order_detailsWhereUniqueInput[]
    update?: order_detailsUpdateWithWhereUniqueWithoutProductsInput | order_detailsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_detailsUpdateManyWithWhereWithoutProductsInput | order_detailsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
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

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
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

  export type NestedEnumcontinentsNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.continents | EnumcontinentsFieldRefInput<$PrismaModel> | null
    in?: $Enums.continents[] | ListEnumcontinentsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.continents[] | ListEnumcontinentsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumcontinentsNullableFilter<$PrismaModel> | $Enums.continents | null
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
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

  export type NestedEnumcontinentsNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.continents | EnumcontinentsFieldRefInput<$PrismaModel> | null
    in?: $Enums.continents[] | ListEnumcontinentsFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.continents[] | ListEnumcontinentsFieldRefInput<$PrismaModel> | null
    not?: NestedEnumcontinentsNullableWithAggregatesFilter<$PrismaModel> | $Enums.continents | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumcontinentsNullableFilter<$PrismaModel>
    _max?: NestedEnumcontinentsNullableFilter<$PrismaModel>
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

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type productsCreateWithoutCategoriesInput = {
    product_name?: string | null
    unit?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    order_details?: order_detailsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    product_id?: number
    product_name?: string | null
    unit?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    order_details?: order_detailsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    product_id?: IntFilter<"products"> | number
    product_name?: StringNullableFilter<"products"> | string | null
    category_id?: IntNullableFilter<"products"> | number | null
    unit?: StringNullableFilter<"products"> | string | null
    price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
  }

  export type ordersCreateWithoutCustomersInput = {
    order_date?: Date | string | null
    order_details?: order_detailsCreateNestedManyWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutCustomersInput = {
    order_id?: number
    order_date?: Date | string | null
    order_details?: order_detailsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersCreateManyCustomersInputEnvelope = {
    data: ordersCreateManyCustomersInput | ordersCreateManyCustomersInput[]
    skipDuplicates?: boolean
  }

  export type ordersUpsertWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
    create: XOR<ordersCreateWithoutCustomersInput, ordersUncheckedCreateWithoutCustomersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutCustomersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutCustomersInput, ordersUncheckedUpdateWithoutCustomersInput>
  }

  export type ordersUpdateManyWithWhereWithoutCustomersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutCustomersInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    order_id?: IntFilter<"orders"> | number
    customer_id?: IntNullableFilter<"orders"> | number | null
    order_date?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type ordersCreateWithoutOrder_detailsInput = {
    order_date?: Date | string | null
    customers?: customersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_detailsInput = {
    order_id?: number
    customer_id?: number | null
    order_date?: Date | string | null
  }

  export type ordersCreateOrConnectWithoutOrder_detailsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>
  }

  export type productsCreateWithoutOrder_detailsInput = {
    product_name?: string | null
    unit?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_detailsInput = {
    product_id?: number
    product_name?: string | null
    category_id?: number | null
    unit?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type productsCreateOrConnectWithoutOrder_detailsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_detailsInput, productsUncheckedCreateWithoutOrder_detailsInput>
  }

  export type ordersUpsertWithoutOrder_detailsInput = {
    update: XOR<ordersUpdateWithoutOrder_detailsInput, ordersUncheckedUpdateWithoutOrder_detailsInput>
    create: XOR<ordersCreateWithoutOrder_detailsInput, ordersUncheckedCreateWithoutOrder_detailsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_detailsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_detailsInput, ordersUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type ordersUpdateWithoutOrder_detailsInput = {
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    customers?: customersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_detailsInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    customer_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpsertWithoutOrder_detailsInput = {
    update: XOR<productsUpdateWithoutOrder_detailsInput, productsUncheckedUpdateWithoutOrder_detailsInput>
    create: XOR<productsCreateWithoutOrder_detailsInput, productsUncheckedCreateWithoutOrder_detailsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_detailsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_detailsInput, productsUncheckedUpdateWithoutOrder_detailsInput>
  }

  export type productsUpdateWithoutOrder_detailsInput = {
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_detailsInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type order_detailsCreateWithoutOrdersInput = {
    quantity?: number | null
    products?: productsCreateNestedOneWithoutOrder_detailsInput
  }

  export type order_detailsUncheckedCreateWithoutOrdersInput = {
    order_detail_id?: number
    product_id?: number | null
    quantity?: number | null
  }

  export type order_detailsCreateOrConnectWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput
    create: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>
  }

  export type order_detailsCreateManyOrdersInputEnvelope = {
    data: order_detailsCreateManyOrdersInput | order_detailsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type customersCreateWithoutOrdersInput = {
    customer_name?: string | null
    contact_name?: string | null
    address?: string | null
    city?: string | null
    postal_code?: string | null
    country?: string | null
  }

  export type customersUncheckedCreateWithoutOrdersInput = {
    customer_id?: number
    customer_name?: string | null
    contact_name?: string | null
    address?: string | null
    city?: string | null
    postal_code?: string | null
    country?: string | null
  }

  export type customersCreateOrConnectWithoutOrdersInput = {
    where: customersWhereUniqueInput
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
  }

  export type order_detailsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput
    update: XOR<order_detailsUpdateWithoutOrdersInput, order_detailsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_detailsCreateWithoutOrdersInput, order_detailsUncheckedCreateWithoutOrdersInput>
  }

  export type order_detailsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_detailsWhereUniqueInput
    data: XOR<order_detailsUpdateWithoutOrdersInput, order_detailsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_detailsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_detailsScalarWhereInput
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_detailsScalarWhereInput = {
    AND?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
    OR?: order_detailsScalarWhereInput[]
    NOT?: order_detailsScalarWhereInput | order_detailsScalarWhereInput[]
    order_detail_id?: IntFilter<"order_details"> | number
    order_id?: IntNullableFilter<"order_details"> | number | null
    product_id?: IntNullableFilter<"order_details"> | number | null
    quantity?: IntNullableFilter<"order_details"> | number | null
  }

  export type customersUpsertWithoutOrdersInput = {
    update: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
    create: XOR<customersCreateWithoutOrdersInput, customersUncheckedCreateWithoutOrdersInput>
    where?: customersWhereInput
  }

  export type customersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: customersWhereInput
    data: XOR<customersUpdateWithoutOrdersInput, customersUncheckedUpdateWithoutOrdersInput>
  }

  export type customersUpdateWithoutOrdersInput = {
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type customersUncheckedUpdateWithoutOrdersInput = {
    customer_id?: IntFieldUpdateOperationsInput | number
    customer_name?: NullableStringFieldUpdateOperationsInput | string | null
    contact_name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    postal_code?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type order_detailsCreateWithoutProductsInput = {
    quantity?: number | null
    orders?: ordersCreateNestedOneWithoutOrder_detailsInput
  }

  export type order_detailsUncheckedCreateWithoutProductsInput = {
    order_detail_id?: number
    order_id?: number | null
    quantity?: number | null
  }

  export type order_detailsCreateOrConnectWithoutProductsInput = {
    where: order_detailsWhereUniqueInput
    create: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput>
  }

  export type order_detailsCreateManyProductsInputEnvelope = {
    data: order_detailsCreateManyProductsInput | order_detailsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutProductsInput = {
    category_name?: string | null
    description?: string | null
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    category_id?: number
    category_name?: string | null
    description?: string | null
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type order_detailsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_detailsWhereUniqueInput
    update: XOR<order_detailsUpdateWithoutProductsInput, order_detailsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_detailsCreateWithoutProductsInput, order_detailsUncheckedCreateWithoutProductsInput>
  }

  export type order_detailsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_detailsWhereUniqueInput
    data: XOR<order_detailsUpdateWithoutProductsInput, order_detailsUncheckedUpdateWithoutProductsInput>
  }

  export type order_detailsUpdateManyWithWhereWithoutProductsInput = {
    where: order_detailsScalarWhereInput
    data: XOR<order_detailsUpdateManyMutationInput, order_detailsUncheckedUpdateManyWithoutProductsInput>
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    category_id?: IntFieldUpdateOperationsInput | number
    category_name?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type productsCreateManyCategoriesInput = {
    product_id?: number
    product_name?: string | null
    unit?: string | null
    price?: Decimal | DecimalJsLike | number | string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    order_details?: order_detailsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    order_details?: order_detailsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    product_id?: IntFieldUpdateOperationsInput | number
    product_name?: NullableStringFieldUpdateOperationsInput | string | null
    unit?: NullableStringFieldUpdateOperationsInput | string | null
    price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
  }

  export type ordersCreateManyCustomersInput = {
    order_id?: number
    order_date?: Date | string | null
  }

  export type ordersUpdateWithoutCustomersInput = {
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_details?: order_detailsUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutCustomersInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_details?: order_detailsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutCustomersInput = {
    order_id?: IntFieldUpdateOperationsInput | number
    order_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_detailsCreateManyOrdersInput = {
    order_detail_id?: number
    product_id?: number | null
    quantity?: number | null
  }

  export type order_detailsUpdateWithoutOrdersInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    products?: productsUpdateOneWithoutOrder_detailsNestedInput
  }

  export type order_detailsUncheckedUpdateWithoutOrdersInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type order_detailsUncheckedUpdateManyWithoutOrdersInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type order_detailsCreateManyProductsInput = {
    order_detail_id?: number
    order_id?: number | null
    quantity?: number | null
  }

  export type order_detailsUpdateWithoutProductsInput = {
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
    orders?: ordersUpdateOneWithoutOrder_detailsNestedInput
  }

  export type order_detailsUncheckedUpdateWithoutProductsInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type order_detailsUncheckedUpdateManyWithoutProductsInput = {
    order_detail_id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: NullableIntFieldUpdateOperationsInput | number | null
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