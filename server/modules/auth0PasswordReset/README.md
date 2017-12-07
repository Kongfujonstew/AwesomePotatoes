# Auth0 Password Reset

Send emails with  Auth0 Password Reset in your Graphcool project 🎁

## Configuration

In your base project, you need to configure the following **environment variables**.

- `AUTH0_DOMAIN`: auth0 domain
- `AUTH0_CLIENT_ID`: auth0 client id

An easy way to setup environment variables is using [direnv](https://direnv.net/).
To use `direnv`, put the following into `.envrc` in you project root:

```sh
export AUTH0_DOMAIN=xxx
export AUTH0_CLIENT_ID=xxx
```

## Test the Code

Go to the Graphcool Playground:

```sh
graphcool playground
```

Hook into the function logs:

```sh
graphcool logs -f resetPassword --tail
```

Run this mutation to send a password change email:

```graphql
mutation {
  sendPasswordReset(email: "email@goes.here") {
    success  
  }
}```
