/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as SettingsImport } from './routes/settings'
import { Route as SearchImport } from './routes/search'
import { Route as ProfileImport } from './routes/profile'
import { Route as FriendsImport } from './routes/friends'
import { Route as ExploreImport } from './routes/explore'
import { Route as ClaimedImport } from './routes/claimed'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const SettingsRoute = SettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => rootRoute,
} as any)

const SearchRoute = SearchImport.update({
  id: '/search',
  path: '/search',
  getParentRoute: () => rootRoute,
} as any)

const ProfileRoute = ProfileImport.update({
  id: '/profile',
  path: '/profile',
  getParentRoute: () => rootRoute,
} as any)

const FriendsRoute = FriendsImport.update({
  id: '/friends',
  path: '/friends',
  getParentRoute: () => rootRoute,
} as any)

const ExploreRoute = ExploreImport.update({
  id: '/explore',
  path: '/explore',
  getParentRoute: () => rootRoute,
} as any)

const ClaimedRoute = ClaimedImport.update({
  id: '/claimed',
  path: '/claimed',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/claimed': {
      id: '/claimed'
      path: '/claimed'
      fullPath: '/claimed'
      preLoaderRoute: typeof ClaimedImport
      parentRoute: typeof rootRoute
    }
    '/explore': {
      id: '/explore'
      path: '/explore'
      fullPath: '/explore'
      preLoaderRoute: typeof ExploreImport
      parentRoute: typeof rootRoute
    }
    '/friends': {
      id: '/friends'
      path: '/friends'
      fullPath: '/friends'
      preLoaderRoute: typeof FriendsImport
      parentRoute: typeof rootRoute
    }
    '/profile': {
      id: '/profile'
      path: '/profile'
      fullPath: '/profile'
      preLoaderRoute: typeof ProfileImport
      parentRoute: typeof rootRoute
    }
    '/search': {
      id: '/search'
      path: '/search'
      fullPath: '/search'
      preLoaderRoute: typeof SearchImport
      parentRoute: typeof rootRoute
    }
    '/settings': {
      id: '/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof SettingsImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/claimed': typeof ClaimedRoute
  '/explore': typeof ExploreRoute
  '/friends': typeof FriendsRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/claimed': typeof ClaimedRoute
  '/explore': typeof ExploreRoute
  '/friends': typeof FriendsRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/about': typeof AboutRoute
  '/claimed': typeof ClaimedRoute
  '/explore': typeof ExploreRoute
  '/friends': typeof FriendsRoute
  '/profile': typeof ProfileRoute
  '/search': typeof SearchRoute
  '/settings': typeof SettingsRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/'
    | '/about'
    | '/claimed'
    | '/explore'
    | '/friends'
    | '/profile'
    | '/search'
    | '/settings'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/'
    | '/about'
    | '/claimed'
    | '/explore'
    | '/friends'
    | '/profile'
    | '/search'
    | '/settings'
  id:
    | '__root__'
    | '/'
    | '/about'
    | '/claimed'
    | '/explore'
    | '/friends'
    | '/profile'
    | '/search'
    | '/settings'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  AboutRoute: typeof AboutRoute
  ClaimedRoute: typeof ClaimedRoute
  ExploreRoute: typeof ExploreRoute
  FriendsRoute: typeof FriendsRoute
  ProfileRoute: typeof ProfileRoute
  SearchRoute: typeof SearchRoute
  SettingsRoute: typeof SettingsRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  AboutRoute: AboutRoute,
  ClaimedRoute: ClaimedRoute,
  ExploreRoute: ExploreRoute,
  FriendsRoute: FriendsRoute,
  ProfileRoute: ProfileRoute,
  SearchRoute: SearchRoute,
  SettingsRoute: SettingsRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/claimed",
        "/explore",
        "/friends",
        "/profile",
        "/search",
        "/settings"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/claimed": {
      "filePath": "claimed.tsx"
    },
    "/explore": {
      "filePath": "explore.tsx"
    },
    "/friends": {
      "filePath": "friends.tsx"
    },
    "/profile": {
      "filePath": "profile.tsx"
    },
    "/search": {
      "filePath": "search.tsx"
    },
    "/settings": {
      "filePath": "settings.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
