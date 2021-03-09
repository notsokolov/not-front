import { gql } from "apollo-server-micro";

export default gql`
  directive @specifiedBy(url: String!) on SCALAR
  type About {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    Content: String
    Picture: UploadFile
    published_at: DateTime
  }

  input AboutInput {
    Content: String
    Picture: ID
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  type AdminUser {
    id: ID!
    username: String
    firstname: String!
    lastname: String!
  }

  type Author {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    picture: UploadFile
    published_at: DateTime
  }

  type AuthorAggregator {
    count: Int
    totalCount: Int
  }

  type AuthorConnection {
    values: [Author]
    groupBy: AuthorGroupBy
    aggregate: AuthorAggregator
  }

  type AuthorConnection_id {
    key: ID
    connection: AuthorConnection
  }

  type AuthorConnectionCreatedAt {
    key: DateTime
    connection: AuthorConnection
  }

  type AuthorConnectionId {
    key: ID
    connection: AuthorConnection
  }

  type AuthorConnectionName {
    key: String
    connection: AuthorConnection
  }

  type AuthorConnectionPicture {
    key: ID
    connection: AuthorConnection
  }

  type AuthorConnectionPublished_at {
    key: DateTime
    connection: AuthorConnection
  }

  type AuthorConnectionUpdatedAt {
    key: DateTime
    connection: AuthorConnection
  }

  type AuthorGroupBy {
    id: [AuthorConnectionId]
    _id: [AuthorConnection_id]
    createdAt: [AuthorConnectionCreatedAt]
    updatedAt: [AuthorConnectionUpdatedAt]
    name: [AuthorConnectionName]
    picture: [AuthorConnectionPicture]
    published_at: [AuthorConnectionPublished_at]
  }

  input AuthorInput {
    name: String
    picture: ID
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input createAuthorInput {
    data: AuthorInput
  }

  type createAuthorPayload {
    author: Author
  }

  input createPostInput {
    data: PostInput
  }

  type createPostPayload {
    post: Post
  }

  input createRoleInput {
    data: RoleInput
  }

  type createRolePayload {
    role: UsersPermissionsRole
  }

  input createUserInput {
    data: UserInput
  }

  type createUserPayload {
    user: UsersPermissionsUser
  }

  scalar Date

  scalar DateTime

  type deleteAboutPayload {
    about: About
  }

  input deleteAuthorInput {
    where: InputID
  }

  type deleteAuthorPayload {
    author: Author
  }

  input deleteFileInput {
    where: InputID
  }

  type deleteFilePayload {
    file: UploadFile
  }

  type deleteHomePayload {
    home: Home
  }

  input deletePostInput {
    where: InputID
  }

  type deletePostPayload {
    post: Post
  }

  input deleteRoleInput {
    where: InputID
  }

  type deleteRolePayload {
    role: UsersPermissionsRole
  }

  input deleteUserInput {
    where: InputID
  }

  type deleteUserPayload {
    user: UsersPermissionsUser
  }

  input editAboutInput {
    Content: String
    Picture: ID
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editAuthorInput {
    name: String
    picture: ID
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editFileInput {
    name: String
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String
    ext: String
    mime: String
    size: Float
    url: String
    previewUrl: String
    provider: String
    provider_metadata: JSON
    related: [ID]
    created_by: ID
    updated_by: ID
  }

  input editHomeInput {
    Content: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editPostInput {
    title: String
    content: String
    excerpt: String
    coverImage: ID
    date: Date
    slug: String
    status: ENUM_POST_STATUS
    author: ID
    Dynamic: [PostDynamicDynamicZoneInput!]
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editRoleInput {
    name: String
    description: String
    type: String
    permissions: [ID]
    users: [ID]
    created_by: ID
    updated_by: ID
  }

  input editUserInput {
    username: String
    email: String
    provider: String
    password: String
    resetPasswordToken: String
    confirmationToken: String
    confirmed: Boolean
    blocked: Boolean
    role: ID
    created_by: ID
    updated_by: ID
  }

  scalar EmptyQuery

  enum ENUM_POST_STATUS {
    published
    draft
  }

  input FileInfoInput {
    name: String
    alternativeText: String
    caption: String
  }

  input FileInput {
    name: String!
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String!
    ext: String
    mime: String!
    size: Float!
    url: String!
    previewUrl: String
    provider: String!
    provider_metadata: JSON
    related: [ID]
    created_by: ID
    updated_by: ID
  }

  type Home {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    Content: String!
    published_at: DateTime
  }

  input HomeInput {
    Content: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input InputID {
    id: ID!
  }

  scalar JSON

  scalar Long

  union Morph =
      UsersPermissionsMe
    | UsersPermissionsMeRole
    | UsersPermissionsLoginPayload
    | UserPermissionsPasswordPayload
    | About
    | updateAboutPayload
    | deleteAboutPayload
    | Author
    | AuthorConnection
    | AuthorAggregator
    | AuthorGroupBy
    | AuthorConnectionId
    | AuthorConnection_id
    | AuthorConnectionCreatedAt
    | AuthorConnectionUpdatedAt
    | AuthorConnectionName
    | AuthorConnectionPicture
    | AuthorConnectionPublished_at
    | createAuthorPayload
    | updateAuthorPayload
    | deleteAuthorPayload
    | Home
    | updateHomePayload
    | deleteHomePayload
    | PostDynamicDynamicZone
    | Post
    | PostConnection
    | PostAggregator
    | PostGroupBy
    | PostConnectionId
    | PostConnection_id
    | PostConnectionCreatedAt
    | PostConnectionUpdatedAt
    | PostConnectionTitle
    | PostConnectionContent
    | PostConnectionExcerpt
    | PostConnectionCoverImage
    | PostConnectionDate
    | PostConnectionSlug
    | PostConnectionStatus
    | PostConnectionAuthor
    | PostConnectionPublished_at
    | createPostPayload
    | updatePostPayload
    | deletePostPayload
    | UploadFile
    | UploadFileConnection
    | UploadFileAggregator
    | UploadFileAggregatorSum
    | UploadFileAggregatorAvg
    | UploadFileAggregatorMin
    | UploadFileAggregatorMax
    | UploadFileGroupBy
    | UploadFileConnectionId
    | UploadFileConnection_id
    | UploadFileConnectionCreatedAt
    | UploadFileConnectionUpdatedAt
    | UploadFileConnectionName
    | UploadFileConnectionAlternativeText
    | UploadFileConnectionCaption
    | UploadFileConnectionWidth
    | UploadFileConnectionHeight
    | UploadFileConnectionFormats
    | UploadFileConnectionHash
    | UploadFileConnectionExt
    | UploadFileConnectionMime
    | UploadFileConnectionSize
    | UploadFileConnectionUrl
    | UploadFileConnectionPreviewUrl
    | UploadFileConnectionProvider
    | UploadFileConnectionProvider_metadata
    | deleteFilePayload
    | UsersPermissionsPermission
    | UsersPermissionsRole
    | UsersPermissionsRoleConnection
    | UsersPermissionsRoleAggregator
    | UsersPermissionsRoleGroupBy
    | UsersPermissionsRoleConnectionId
    | UsersPermissionsRoleConnection_id
    | UsersPermissionsRoleConnectionName
    | UsersPermissionsRoleConnectionDescription
    | UsersPermissionsRoleConnectionType
    | createRolePayload
    | updateRolePayload
    | deleteRolePayload
    | UsersPermissionsUser
    | UsersPermissionsUserConnection
    | UsersPermissionsUserAggregator
    | UsersPermissionsUserGroupBy
    | UsersPermissionsUserConnectionId
    | UsersPermissionsUserConnection_id
    | UsersPermissionsUserConnectionCreatedAt
    | UsersPermissionsUserConnectionUpdatedAt
    | UsersPermissionsUserConnectionUsername
    | UsersPermissionsUserConnectionEmail
    | UsersPermissionsUserConnectionProvider
    | UsersPermissionsUserConnectionConfirmed
    | UsersPermissionsUserConnectionBlocked
    | UsersPermissionsUserConnectionRole
    | createUserPayload
    | updateUserPayload
    | deleteUserPayload
  type Mutation {
    updateAbout(input: updateAboutInput): updateAboutPayload
    deleteAbout: deleteAboutPayload
    createAuthor(input: createAuthorInput): createAuthorPayload
    updateAuthor(input: updateAuthorInput): updateAuthorPayload
    deleteAuthor(input: deleteAuthorInput): deleteAuthorPayload
    updateHome(input: updateHomeInput): updateHomePayload
    deleteHome: deleteHomePayload
    createPost(input: createPostInput): createPostPayload
    updatePost(input: updatePostInput): updatePostPayload
    deletePost(input: deletePostInput): deletePostPayload
    deleteFile(input: deleteFileInput): deleteFilePayload
    createRole(input: createRoleInput): createRolePayload
    updateRole(input: updateRoleInput): updateRolePayload
    deleteRole(input: deleteRoleInput): deleteRolePayload
    createUser(input: createUserInput): createUserPayload
    updateUser(input: updateUserInput): updateUserPayload
    deleteUser(input: deleteUserInput): deleteUserPayload
    upload(
      refId: ID
      ref: String
      field: String
      source: String
      info: FileInfoInput
      file: Upload!
    ): UploadFile!
    multipleUpload(
      refId: ID
      ref: String
      field: String
      source: String
      files: [Upload]!
    ): [UploadFile]!
    updateFileInfo(id: ID!, info: FileInfoInput!): UploadFile!
    login(input: UsersPermissionsLoginInput!): UsersPermissionsLoginPayload!
    register(
      input: UsersPermissionsRegisterInput!
    ): UsersPermissionsLoginPayload!
    forgotPassword(email: String!): UserPermissionsPasswordPayload
    resetPassword(
      password: String!
      passwordConfirmation: String!
      code: String!
    ): UsersPermissionsLoginPayload
    emailConfirmation(confirmation: String!): UsersPermissionsLoginPayload
  }

  type Post {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    content: String
    excerpt: String
    coverImage: UploadFile
    date: Date
    slug: String
    status: ENUM_POST_STATUS
    author: Author
    Dynamic: [PostDynamicDynamicZone]
    published_at: DateTime
  }

  type PostAggregator {
    count: Int
    totalCount: Int
  }

  type PostConnection {
    values: [Post]
    groupBy: PostGroupBy
    aggregate: PostAggregator
  }

  type PostConnection_id {
    key: ID
    connection: PostConnection
  }

  type PostConnectionAuthor {
    key: ID
    connection: PostConnection
  }

  type PostConnectionContent {
    key: String
    connection: PostConnection
  }

  type PostConnectionCoverImage {
    key: ID
    connection: PostConnection
  }

  type PostConnectionCreatedAt {
    key: DateTime
    connection: PostConnection
  }

  type PostConnectionDate {
    key: ID
    connection: PostConnection
  }

  type PostConnectionExcerpt {
    key: String
    connection: PostConnection
  }

  type PostConnectionId {
    key: ID
    connection: PostConnection
  }

  type PostConnectionPublished_at {
    key: DateTime
    connection: PostConnection
  }

  type PostConnectionSlug {
    key: String
    connection: PostConnection
  }

  type PostConnectionStatus {
    key: String
    connection: PostConnection
  }

  type PostConnectionTitle {
    key: String
    connection: PostConnection
  }

  type PostConnectionUpdatedAt {
    key: DateTime
    connection: PostConnection
  }

  type PostDynamicDynamicZone {
    _: Boolean
  }

  scalar PostDynamicDynamicZoneInput

  type PostGroupBy {
    id: [PostConnectionId]
    _id: [PostConnection_id]
    createdAt: [PostConnectionCreatedAt]
    updatedAt: [PostConnectionUpdatedAt]
    title: [PostConnectionTitle]
    content: [PostConnectionContent]
    excerpt: [PostConnectionExcerpt]
    coverImage: [PostConnectionCoverImage]
    date: [PostConnectionDate]
    slug: [PostConnectionSlug]
    status: [PostConnectionStatus]
    author: [PostConnectionAuthor]
    published_at: [PostConnectionPublished_at]
  }

  input PostInput {
    title: String
    content: String
    excerpt: String
    coverImage: ID
    date: Date
    slug: String
    status: ENUM_POST_STATUS
    author: ID
    Dynamic: [PostDynamicDynamicZoneInput!]
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  enum PublicationState {
    LIVE
    PREVIEW
  }

  type Query {
    about(publicationState: PublicationState): About
    author(id: ID!, publicationState: PublicationState): Author
    authors(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [Author]
    authorsConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): AuthorConnection
    home(publicationState: PublicationState): Home
    post(id: ID!, publicationState: PublicationState): Post
    posts(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [Post]
    postsConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): PostConnection
    files(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [UploadFile]
    filesConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): UploadFileConnection
    role(id: ID!, publicationState: PublicationState): UsersPermissionsRole
    roles(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [UsersPermissionsRole]
    rolesConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): UsersPermissionsRoleConnection
    user(id: ID!, publicationState: PublicationState): UsersPermissionsUser
    users(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [UsersPermissionsUser]
    usersConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): UsersPermissionsUserConnection
    me: UsersPermissionsMe
  }

  input RoleInput {
    name: String!
    description: String
    type: String
    permissions: [ID]
    users: [ID]
    created_by: ID
    updated_by: ID
  }

  scalar Time

  input updateAboutInput {
    data: editAboutInput
  }

  type updateAboutPayload {
    about: About
  }

  input updateAuthorInput {
    where: InputID
    data: editAuthorInput
  }

  type updateAuthorPayload {
    author: Author
  }

  input updateHomeInput {
    data: editHomeInput
  }

  type updateHomePayload {
    home: Home
  }

  input updatePostInput {
    where: InputID
    data: editPostInput
  }

  type updatePostPayload {
    post: Post
  }

  input updateRoleInput {
    where: InputID
    data: editRoleInput
  }

  type updateRolePayload {
    role: UsersPermissionsRole
  }

  input updateUserInput {
    where: InputID
    data: editUserInput
  }

  type updateUserPayload {
    user: UsersPermissionsUser
  }

  scalar Upload

  type UploadFile {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String!
    alternativeText: String
    caption: String
    width: Int
    height: Int
    formats: JSON
    hash: String!
    ext: String
    mime: String!
    size: Float!
    url: String!
    previewUrl: String
    provider: String!
    provider_metadata: JSON
    related(sort: String, limit: Int, start: Int, where: JSON): [Morph]
  }

  type UploadFileAggregator {
    count: Int
    totalCount: Int
    sum: UploadFileAggregatorSum
    avg: UploadFileAggregatorAvg
    min: UploadFileAggregatorMin
    max: UploadFileAggregatorMax
  }

  type UploadFileAggregatorAvg {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorMax {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorMin {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorSum {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileConnection {
    values: [UploadFile]
    groupBy: UploadFileGroupBy
    aggregate: UploadFileAggregator
  }

  type UploadFileConnection_id {
    key: ID
    connection: UploadFileConnection
  }

  type UploadFileConnectionAlternativeText {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionCaption {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionCreatedAt {
    key: DateTime
    connection: UploadFileConnection
  }

  type UploadFileConnectionExt {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionFormats {
    key: JSON
    connection: UploadFileConnection
  }

  type UploadFileConnectionHash {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionHeight {
    key: Int
    connection: UploadFileConnection
  }

  type UploadFileConnectionId {
    key: ID
    connection: UploadFileConnection
  }

  type UploadFileConnectionMime {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionName {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionPreviewUrl {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionProvider {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionProvider_metadata {
    key: JSON
    connection: UploadFileConnection
  }

  type UploadFileConnectionSize {
    key: Float
    connection: UploadFileConnection
  }

  type UploadFileConnectionUpdatedAt {
    key: DateTime
    connection: UploadFileConnection
  }

  type UploadFileConnectionUrl {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionWidth {
    key: Int
    connection: UploadFileConnection
  }

  type UploadFileGroupBy {
    id: [UploadFileConnectionId]
    _id: [UploadFileConnection_id]
    createdAt: [UploadFileConnectionCreatedAt]
    updatedAt: [UploadFileConnectionUpdatedAt]
    name: [UploadFileConnectionName]
    alternativeText: [UploadFileConnectionAlternativeText]
    caption: [UploadFileConnectionCaption]
    width: [UploadFileConnectionWidth]
    height: [UploadFileConnectionHeight]
    formats: [UploadFileConnectionFormats]
    hash: [UploadFileConnectionHash]
    ext: [UploadFileConnectionExt]
    mime: [UploadFileConnectionMime]
    size: [UploadFileConnectionSize]
    url: [UploadFileConnectionUrl]
    previewUrl: [UploadFileConnectionPreviewUrl]
    provider: [UploadFileConnectionProvider]
    provider_metadata: [UploadFileConnectionProvider_metadata]
  }

  input UserInput {
    username: String!
    email: String!
    provider: String
    password: String
    resetPasswordToken: String
    confirmationToken: String
    confirmed: Boolean
    blocked: Boolean
    role: ID
    created_by: ID
    updated_by: ID
  }

  type UserPermissionsPasswordPayload {
    ok: Boolean!
  }

  input UsersPermissionsLoginInput {
    identifier: String!
    password: String!
    provider: String = "local"
  }

  type UsersPermissionsLoginPayload {
    jwt: String
    user: UsersPermissionsMe!
  }

  type UsersPermissionsMe {
    id: ID!
    username: String!
    email: String!
    confirmed: Boolean
    blocked: Boolean
    role: UsersPermissionsMeRole
  }

  type UsersPermissionsMeRole {
    id: ID!
    name: String!
    description: String
    type: String
  }

  type UsersPermissionsPermission {
    id: ID!
    _id: ID!
    type: String!
    controller: String!
    action: String!
    enabled: Boolean!
    policy: String
    role: UsersPermissionsRole
  }

  input UsersPermissionsRegisterInput {
    username: String!
    email: String!
    password: String!
  }

  type UsersPermissionsRole {
    id: ID!
    _id: ID!
    name: String!
    description: String
    type: String
    permissions(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): [UsersPermissionsPermission]
    users(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): [UsersPermissionsUser]
  }

  type UsersPermissionsRoleAggregator {
    count: Int
    totalCount: Int
  }

  type UsersPermissionsRoleConnection {
    values: [UsersPermissionsRole]
    groupBy: UsersPermissionsRoleGroupBy
    aggregate: UsersPermissionsRoleAggregator
  }

  type UsersPermissionsRoleConnection_id {
    key: ID
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionDescription {
    key: String
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionId {
    key: ID
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionName {
    key: String
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionType {
    key: String
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleGroupBy {
    id: [UsersPermissionsRoleConnectionId]
    _id: [UsersPermissionsRoleConnection_id]
    name: [UsersPermissionsRoleConnectionName]
    description: [UsersPermissionsRoleConnectionDescription]
    type: [UsersPermissionsRoleConnectionType]
  }

  type UsersPermissionsUser {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    username: String!
    email: String!
    provider: String
    confirmed: Boolean
    blocked: Boolean
    role: UsersPermissionsRole
  }

  type UsersPermissionsUserAggregator {
    count: Int
    totalCount: Int
  }

  type UsersPermissionsUserConnection {
    values: [UsersPermissionsUser]
    groupBy: UsersPermissionsUserGroupBy
    aggregate: UsersPermissionsUserAggregator
  }

  type UsersPermissionsUserConnection_id {
    key: ID
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionBlocked {
    key: Boolean
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionConfirmed {
    key: Boolean
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionCreatedAt {
    key: DateTime
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionEmail {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionId {
    key: ID
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionProvider {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionRole {
    key: ID
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionUpdatedAt {
    key: DateTime
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionUsername {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserGroupBy {
    id: [UsersPermissionsUserConnectionId]
    _id: [UsersPermissionsUserConnection_id]
    createdAt: [UsersPermissionsUserConnectionCreatedAt]
    updatedAt: [UsersPermissionsUserConnectionUpdatedAt]
    username: [UsersPermissionsUserConnectionUsername]
    email: [UsersPermissionsUserConnectionEmail]
    provider: [UsersPermissionsUserConnectionProvider]
    confirmed: [UsersPermissionsUserConnectionConfirmed]
    blocked: [UsersPermissionsUserConnectionBlocked]
    role: [UsersPermissionsUserConnectionRole]
  }
`;
