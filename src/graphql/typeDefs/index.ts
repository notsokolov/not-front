import { gql } from "apollo-server-micro";

export default gql`
  input FileInfoInput {
    name: String
    alternativeText: String
    caption: String
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

  input UsersPermissionsRegisterInput {
    username: String!
    email: String!
    password: String!
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

  type UserPermissionsPasswordPayload {
    ok: Boolean!
  }

  type About {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    content: String
    published_at: DateTime
  }

  input AboutInput {
    content: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editAboutInput {
    content: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input updateAboutInput {
    data: editAboutInput
  }

  type updateAboutPayload {
    about: About
  }

  type deleteAboutPayload {
    about: About
  }

  type Author {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    published_at: DateTime
  }

  type AuthorConnection {
    values: [Author]
    groupBy: AuthorGroupBy
    aggregate: AuthorAggregator
  }

  type AuthorAggregator {
    count: Int
    totalCount: Int
  }

  type AuthorGroupBy {
    id: [AuthorConnectionId]
    _id: [AuthorConnection_id]
    createdAt: [AuthorConnectionCreatedAt]
    updatedAt: [AuthorConnectionUpdatedAt]
    name: [AuthorConnectionName]
    published_at: [AuthorConnectionPublished_at]
  }

  type AuthorConnectionId {
    key: ID
    connection: AuthorConnection
  }

  type AuthorConnection_id {
    key: ID
    connection: AuthorConnection
  }

  type AuthorConnectionCreatedAt {
    key: DateTime
    connection: AuthorConnection
  }

  type AuthorConnectionUpdatedAt {
    key: DateTime
    connection: AuthorConnection
  }

  type AuthorConnectionName {
    key: String
    connection: AuthorConnection
  }

  type AuthorConnectionPublished_at {
    key: DateTime
    connection: AuthorConnection
  }

  input AuthorInput {
    name: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editAuthorInput {
    name: String
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

  input updateAuthorInput {
    where: InputID
    data: editAuthorInput
  }

  type updateAuthorPayload {
    author: Author
  }

  input deleteAuthorInput {
    where: InputID
  }

  type deleteAuthorPayload {
    author: Author
  }

  type Bookmark {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    date: Date
    content: String
    published_at: DateTime
  }

  type BookmarkConnection {
    values: [Bookmark]
    groupBy: BookmarkGroupBy
    aggregate: BookmarkAggregator
  }

  type BookmarkAggregator {
    count: Int
    totalCount: Int
  }

  type BookmarkGroupBy {
    id: [BookmarkConnectionId]
    _id: [BookmarkConnection_id]
    createdAt: [BookmarkConnectionCreatedAt]
    updatedAt: [BookmarkConnectionUpdatedAt]
    title: [BookmarkConnectionTitle]
    date: [BookmarkConnectionDate]
    content: [BookmarkConnectionContent]
    published_at: [BookmarkConnectionPublished_at]
  }

  type BookmarkConnectionId {
    key: ID
    connection: BookmarkConnection
  }

  type BookmarkConnection_id {
    key: ID
    connection: BookmarkConnection
  }

  type BookmarkConnectionCreatedAt {
    key: DateTime
    connection: BookmarkConnection
  }

  type BookmarkConnectionUpdatedAt {
    key: DateTime
    connection: BookmarkConnection
  }

  type BookmarkConnectionTitle {
    key: String
    connection: BookmarkConnection
  }

  type BookmarkConnectionDate {
    key: ID
    connection: BookmarkConnection
  }

  type BookmarkConnectionContent {
    key: String
    connection: BookmarkConnection
  }

  type BookmarkConnectionPublished_at {
    key: DateTime
    connection: BookmarkConnection
  }

  input BookmarkInput {
    title: String
    date: Date
    content: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editBookmarkInput {
    title: String
    date: Date
    content: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input createBookmarkInput {
    data: BookmarkInput
  }

  type createBookmarkPayload {
    bookmark: Bookmark
  }

  input updateBookmarkInput {
    where: InputID
    data: editBookmarkInput
  }

  type updateBookmarkPayload {
    bookmark: Bookmark
  }

  input deleteBookmarkInput {
    where: InputID
  }

  type deleteBookmarkPayload {
    bookmark: Bookmark
  }

  enum ENUM_POST_STATUS {
    published
    draft
  }

  type Post {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    title: String
    content: String
    excerpt: String
    date: Date
    slug: String
    status: ENUM_POST_STATUS
    author: Author
    pinned: Boolean
    published_at: DateTime
  }

  type PostConnection {
    values: [Post]
    groupBy: PostGroupBy
    aggregate: PostAggregator
  }

  type PostAggregator {
    count: Int
    totalCount: Int
  }

  type PostGroupBy {
    id: [PostConnectionId]
    _id: [PostConnection_id]
    createdAt: [PostConnectionCreatedAt]
    updatedAt: [PostConnectionUpdatedAt]
    title: [PostConnectionTitle]
    content: [PostConnectionContent]
    excerpt: [PostConnectionExcerpt]
    date: [PostConnectionDate]
    slug: [PostConnectionSlug]
    status: [PostConnectionStatus]
    author: [PostConnectionAuthor]
    pinned: [PostConnectionPinned]
    published_at: [PostConnectionPublished_at]
  }

  type PostConnectionId {
    key: ID
    connection: PostConnection
  }

  type PostConnection_id {
    key: ID
    connection: PostConnection
  }

  type PostConnectionCreatedAt {
    key: DateTime
    connection: PostConnection
  }

  type PostConnectionUpdatedAt {
    key: DateTime
    connection: PostConnection
  }

  type PostConnectionTitle {
    key: String
    connection: PostConnection
  }

  type PostConnectionContent {
    key: String
    connection: PostConnection
  }

  type PostConnectionExcerpt {
    key: String
    connection: PostConnection
  }

  type PostConnectionDate {
    key: ID
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

  type PostConnectionAuthor {
    key: ID
    connection: PostConnection
  }

  type PostConnectionPinned {
    key: Boolean
    connection: PostConnection
  }

  type PostConnectionPublished_at {
    key: DateTime
    connection: PostConnection
  }

  input PostInput {
    title: String
    content: String
    excerpt: String
    date: Date
    slug: String
    status: ENUM_POST_STATUS
    author: ID
    pinned: Boolean
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editPostInput {
    title: String
    content: String
    excerpt: String
    date: Date
    slug: String
    status: ENUM_POST_STATUS
    author: ID
    pinned: Boolean
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input createPostInput {
    data: PostInput
  }

  type createPostPayload {
    post: Post
  }

  input updatePostInput {
    where: InputID
    data: editPostInput
  }

  type updatePostPayload {
    post: Post
  }

  input deletePostInput {
    where: InputID
  }

  type deletePostPayload {
    post: Post
  }

  type Resume {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    content: String
    published_at: DateTime
  }

  input ResumeInput {
    content: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input editResumeInput {
    content: String
    published_at: DateTime
    created_by: ID
    updated_by: ID
  }

  input updateResumeInput {
    data: editResumeInput
  }

  type updateResumePayload {
    resume: Resume
  }

  type deleteResumePayload {
    resume: Resume
  }

  type I18NLocale {
    id: ID!
    _id: ID!
    createdAt: DateTime!
    updatedAt: DateTime!
    name: String
    code: String
  }

  input LocaleInput {
    name: String
    code: String
    created_by: ID
    updated_by: ID
  }

  input editLocaleInput {
    name: String
    code: String
    created_by: ID
    updated_by: ID
  }

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

  type UploadFileConnection {
    values: [UploadFile]
    groupBy: UploadFileGroupBy
    aggregate: UploadFileAggregator
  }

  type UploadFileAggregator {
    count: Int
    totalCount: Int
    sum: UploadFileAggregatorSum
    avg: UploadFileAggregatorAvg
    min: UploadFileAggregatorMin
    max: UploadFileAggregatorMax
  }

  type UploadFileAggregatorSum {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorAvg {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorMin {
    width: Float
    height: Float
    size: Float
  }

  type UploadFileAggregatorMax {
    width: Float
    height: Float
    size: Float
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

  type UploadFileConnectionId {
    key: ID
    connection: UploadFileConnection
  }

  type UploadFileConnection_id {
    key: ID
    connection: UploadFileConnection
  }

  type UploadFileConnectionCreatedAt {
    key: DateTime
    connection: UploadFileConnection
  }

  type UploadFileConnectionUpdatedAt {
    key: DateTime
    connection: UploadFileConnection
  }

  type UploadFileConnectionName {
    key: String
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

  type UploadFileConnectionWidth {
    key: Int
    connection: UploadFileConnection
  }

  type UploadFileConnectionHeight {
    key: Int
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

  type UploadFileConnectionExt {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionMime {
    key: String
    connection: UploadFileConnection
  }

  type UploadFileConnectionSize {
    key: Float
    connection: UploadFileConnection
  }

  type UploadFileConnectionUrl {
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

  input deleteFileInput {
    where: InputID
  }

  type deleteFilePayload {
    file: UploadFile
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

  type UsersPermissionsRoleConnection {
    values: [UsersPermissionsRole]
    groupBy: UsersPermissionsRoleGroupBy
    aggregate: UsersPermissionsRoleAggregator
  }

  type UsersPermissionsRoleAggregator {
    count: Int
    totalCount: Int
  }

  type UsersPermissionsRoleGroupBy {
    id: [UsersPermissionsRoleConnectionId]
    _id: [UsersPermissionsRoleConnection_id]
    name: [UsersPermissionsRoleConnectionName]
    description: [UsersPermissionsRoleConnectionDescription]
    type: [UsersPermissionsRoleConnectionType]
  }

  type UsersPermissionsRoleConnectionId {
    key: ID
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnection_id {
    key: ID
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionName {
    key: String
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionDescription {
    key: String
    connection: UsersPermissionsRoleConnection
  }

  type UsersPermissionsRoleConnectionType {
    key: String
    connection: UsersPermissionsRoleConnection
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

  input editRoleInput {
    name: String
    description: String
    type: String
    permissions: [ID]
    users: [ID]
    created_by: ID
    updated_by: ID
  }

  input createRoleInput {
    data: RoleInput
  }

  type createRolePayload {
    role: UsersPermissionsRole
  }

  input updateRoleInput {
    where: InputID
    data: editRoleInput
  }

  type updateRolePayload {
    role: UsersPermissionsRole
  }

  input deleteRoleInput {
    where: InputID
  }

  type deleteRolePayload {
    role: UsersPermissionsRole
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

  type UsersPermissionsUserConnection {
    values: [UsersPermissionsUser]
    groupBy: UsersPermissionsUserGroupBy
    aggregate: UsersPermissionsUserAggregator
  }

  type UsersPermissionsUserAggregator {
    count: Int
    totalCount: Int
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

  type UsersPermissionsUserConnectionId {
    key: ID
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnection_id {
    key: ID
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionCreatedAt {
    key: DateTime
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

  type UsersPermissionsUserConnectionEmail {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionProvider {
    key: String
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionConfirmed {
    key: Boolean
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionBlocked {
    key: Boolean
    connection: UsersPermissionsUserConnection
  }

  type UsersPermissionsUserConnectionRole {
    key: ID
    connection: UsersPermissionsUserConnection
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

  input createUserInput {
    data: UserInput
  }

  type createUserPayload {
    user: UsersPermissionsUser
  }

  input updateUserInput {
    where: InputID
    data: editUserInput
  }

  type updateUserPayload {
    user: UsersPermissionsUser
  }

  input deleteUserInput {
    where: InputID
  }

  type deleteUserPayload {
    user: UsersPermissionsUser
  }

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
    | AuthorConnectionPublished_at
    | createAuthorPayload
    | updateAuthorPayload
    | deleteAuthorPayload
    | Bookmark
    | BookmarkConnection
    | BookmarkAggregator
    | BookmarkGroupBy
    | BookmarkConnectionId
    | BookmarkConnection_id
    | BookmarkConnectionCreatedAt
    | BookmarkConnectionUpdatedAt
    | BookmarkConnectionTitle
    | BookmarkConnectionDate
    | BookmarkConnectionContent
    | BookmarkConnectionPublished_at
    | createBookmarkPayload
    | updateBookmarkPayload
    | deleteBookmarkPayload
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
    | PostConnectionDate
    | PostConnectionSlug
    | PostConnectionStatus
    | PostConnectionAuthor
    | PostConnectionPinned
    | PostConnectionPublished_at
    | createPostPayload
    | updatePostPayload
    | deletePostPayload
    | Resume
    | updateResumePayload
    | deleteResumePayload
    | I18NLocale
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

  input InputID {
    id: ID!
  }

  enum PublicationState {
    LIVE
    PREVIEW
  }

  type AdminUser {
    id: ID!
    username: String
    firstname: String!
    lastname: String!
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
    bookmark(id: ID!, publicationState: PublicationState): Bookmark
    bookmarks(
      sort: String
      limit: Int
      start: Int
      where: JSON
      publicationState: PublicationState
    ): [Bookmark]
    bookmarksConnection(
      sort: String
      limit: Int
      start: Int
      where: JSON
    ): BookmarkConnection
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
    resume(publicationState: PublicationState): Resume
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

    # Retrieve all the existing roles. You can't apply filters on this query.
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

  type Mutation {
    updateAbout(input: updateAboutInput): updateAboutPayload
    deleteAbout: deleteAboutPayload
    createAuthor(input: createAuthorInput): createAuthorPayload
    updateAuthor(input: updateAuthorInput): updateAuthorPayload
    deleteAuthor(input: deleteAuthorInput): deleteAuthorPayload
    createBookmark(input: createBookmarkInput): createBookmarkPayload
    updateBookmark(input: updateBookmarkInput): updateBookmarkPayload
    deleteBookmark(input: deleteBookmarkInput): deleteBookmarkPayload
    createPost(input: createPostInput): createPostPayload
    updatePost(input: updatePostInput): updatePostPayload
    deletePost(input: deletePostInput): deletePostPayload
    updateResume(input: updateResumeInput): updateResumePayload
    deleteResume: deleteResumePayload

    # Delete one file
    deleteFile(input: deleteFileInput): deleteFilePayload

    # Create a new role
    createRole(input: createRoleInput): createRolePayload

    # Update an existing role
    updateRole(input: updateRoleInput): updateRolePayload

    # Delete an existing role
    deleteRole(input: deleteRoleInput): deleteRolePayload

    # Create a new user
    createUser(input: createUserInput): createUserPayload

    # Update an existing user
    updateUser(input: updateUserInput): updateUserPayload

    # Delete an existing user
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

  scalar JSON

  scalar DateTime

  scalar Time

  scalar Date

  scalar Long

  scalar Upload
`;
