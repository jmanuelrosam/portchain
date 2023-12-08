# Portchain

Portchain

## Env variables

Create the env file needed o run the project. You can run this command:
```
> cp .env.sample .env
```

## Run the project

* Install all the dependencies using yarn (preferyble) or npm

```
> yarn install
```

* Run yarn in dev mode or in preview mode.
** If you want to run the dev mode, you need to use this command:
```
> yarn run dev
```
** To run the preview mode, follow this steps:

```
> yarn run build
> yarn run preview
```

## Test
The test runner is base in the new `node:test`. You can run all test with
```
> yarn run test:unit
```
