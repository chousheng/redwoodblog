# README

A blog app using [RedwoodJS](https://redwoodjs.com) framework (React, GraphQL, Prisma, Storybook, JavaScript, and Jest).


## Prerequisites

- Node.js 18

## Development setup and running

### 1. Install NPM packages:

```
yarn
```

### 2. Initialize database

Implicitly using `migrate dev`:

```
yarn rw prisma migrate dev
```

Implicitly using `migrate reset`:

```
yarn rw prisma migrate reset
```

Explicitly using `db seed`:

```
yarn rw prisma db seed
```

### 3. Initialize session secret for authentication (using Redwood built-in dbAuth)

```
yarn rw g secret --raw > .env
```

### 4. Run development servers

```
yarn rw dev
```

## Testing

```
yarn rw test
```

## Storybook

```
yarn rw storybook
```

## Prisma Studio

```
yarn rw prisma studio
```

## Redwood console

```
yarn rw console
```

## Set up deployment

```
yarn rw setup deploy --help
```
