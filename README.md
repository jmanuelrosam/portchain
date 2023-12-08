# Portchain

Portchain

## Env variables

Create the env file needed to run the project. You can run this command:
```
> cp .env.sample .env
```

## Run the project

* Install all the dependencies using yarn (preferable) or npm

```
> yarn install
```

* Run yarn in dev mode or preview mode.
** If you want to run the dev mode, you need to use this command:
```
> yarn run dev
```
** To run the preview mode, follow these steps:

```
> yarn run build
> yarn run preview
```

## Test
The test runner is based on the new `node:test`. You can run all tests with
```
> yarn run test:unit
```
