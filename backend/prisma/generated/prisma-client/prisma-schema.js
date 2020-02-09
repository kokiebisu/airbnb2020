module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateStay {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar Long

type Mutation {
  createStay(data: StayCreateInput!): Stay!
  updateStay(data: StayUpdateInput!, where: StayWhereUniqueInput!): Stay
  updateManyStays(data: StayUpdateManyMutationInput!, where: StayWhereInput): BatchPayload!
  upsertStay(where: StayWhereUniqueInput!, create: StayCreateInput!, update: StayUpdateInput!): Stay!
  deleteStay(where: StayWhereUniqueInput!): Stay
  deleteManyStays(where: StayWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  stay(where: StayWhereUniqueInput!): Stay
  stays(where: StayWhereInput, orderBy: StayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Stay]!
  staysConnection(where: StayWhereInput, orderBy: StayOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): StayConnection!
  node(id: ID!): Node
}

type Stay {
  id: ID!
  title: String!
  cost: Int!
  hostType: String
  country: String
  location: String
  ratings: Float
}

type StayConnection {
  pageInfo: PageInfo!
  edges: [StayEdge]!
  aggregate: AggregateStay!
}

input StayCreateInput {
  id: ID
  title: String!
  cost: Int!
  hostType: String
  country: String
  location: String
  ratings: Float
}

type StayEdge {
  node: Stay!
  cursor: String!
}

enum StayOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  cost_ASC
  cost_DESC
  hostType_ASC
  hostType_DESC
  country_ASC
  country_DESC
  location_ASC
  location_DESC
  ratings_ASC
  ratings_DESC
}

type StayPreviousValues {
  id: ID!
  title: String!
  cost: Int!
  hostType: String
  country: String
  location: String
  ratings: Float
}

type StaySubscriptionPayload {
  mutation: MutationType!
  node: Stay
  updatedFields: [String!]
  previousValues: StayPreviousValues
}

input StaySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: StayWhereInput
  AND: [StaySubscriptionWhereInput!]
  OR: [StaySubscriptionWhereInput!]
  NOT: [StaySubscriptionWhereInput!]
}

input StayUpdateInput {
  title: String
  cost: Int
  hostType: String
  country: String
  location: String
  ratings: Float
}

input StayUpdateManyMutationInput {
  title: String
  cost: Int
  hostType: String
  country: String
  location: String
  ratings: Float
}

input StayWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  cost: Int
  cost_not: Int
  cost_in: [Int!]
  cost_not_in: [Int!]
  cost_lt: Int
  cost_lte: Int
  cost_gt: Int
  cost_gte: Int
  hostType: String
  hostType_not: String
  hostType_in: [String!]
  hostType_not_in: [String!]
  hostType_lt: String
  hostType_lte: String
  hostType_gt: String
  hostType_gte: String
  hostType_contains: String
  hostType_not_contains: String
  hostType_starts_with: String
  hostType_not_starts_with: String
  hostType_ends_with: String
  hostType_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  location: String
  location_not: String
  location_in: [String!]
  location_not_in: [String!]
  location_lt: String
  location_lte: String
  location_gt: String
  location_gte: String
  location_contains: String
  location_not_contains: String
  location_starts_with: String
  location_not_starts_with: String
  location_ends_with: String
  location_not_ends_with: String
  ratings: Float
  ratings_not: Float
  ratings_in: [Float!]
  ratings_not_in: [Float!]
  ratings_lt: Float
  ratings_lte: Float
  ratings_gt: Float
  ratings_gte: Float
  AND: [StayWhereInput!]
  OR: [StayWhereInput!]
  NOT: [StayWhereInput!]
}

input StayWhereUniqueInput {
  id: ID
  title: String
}

type Subscription {
  stay(where: StaySubscriptionWhereInput): StaySubscriptionPayload
}
`
      }
    