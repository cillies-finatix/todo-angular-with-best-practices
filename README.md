# TodoAngularWithBestPractices

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

### Feature Module

```shell
export FEATURE=todo-list
npm run ng -- g m features/feature-${FEATURE}/${FEATURE}-container
npm run ng -- g c features/feature-${FEATURE}/${FEATURE}-container --export
npm run ng -- g s features/feature-${FEATURE}/services/${FEATURE}-facade
npm run ng -- g s features/feature-${FEATURE}/api/${FEATURE}-api
```

### Sub-Feature Module

```shell
export FEATURE=todo-list
export SUB_FEATURE=todo-list-item
npm run ng -- g m features/feature-${FEATURE}/${SUB_FEATURE}-container
npm run ng -- g c features/feature-${FEATURE}/${SUB_FEATURE}-container --export
npm run ng -- g s features/feature-${FEATURE}/services/${SUB_FEATURE}-facade
npm run ng -- g s features/feature-${FEATURE}/services/${SUB_FEATURE}-api
```

### Sub-Feature UI Component

```shell
export FEATURE=todo-list
export SUB_FEATURE=list-item
npm run ng -- g m features/feature-${FEATURE}/components/${SUB_FEATURE}
npm run ng -- g c features/feature-${FEATURE}/components/${SUB_FEATURE} --export
```

### Root Store Module

npm run ng -- g m root-store -m app

### Store Feature Module

```shell
export FEATURE=todo
export MODULE=root-store/store-${FEATURE}/${FEATURE}-store

npm run ng -- g m ${MODULE} -m root-store/root-store --flat
npm run ng -- g feature root-store/store-${FEATURE}/${FEATURE} -a -g -m ${MODULE} --prefix load
```

### Share Component Module

```shell
export FEATURE=list-item
npm run ng -- g m shared/modules/${FEATURE}
npm run ng -- g c shared/modules/${FEATURE} --export
```

### Page Module

```shell
export PAGE=todo-overview
npm run ng -- g m pages/${PAGE}-page --route ${PAGE} --routing -m app
```

### Domain Module

```shell
export DOMAIN=todos
npm run ng -- g m modules/${DOMAIN}
npm run ng -- g s modules/${DOMAIN}/api/${DOMAIN}-api
npm run ng -- g s modules/${DOMAIN}/application/${DOMAIN}-facade
npm run ng -- g class modules/${DOMAIN}/models/${DOMAIN}
npm run ng -- g interface modules/${DOMAIN}/models/${DOMAIN}-dto
npm run ng -- g s modules/${DOMAIN}/infra/${DOMAIN}-infra
```

### Domain Feature Module

```shell
export DOMAIN=todos
export FEATURE=todo-details
npm run ng -- g m modules/${DOMAIN}/features/${FEATURE}
npm run ng -- g c modules/${DOMAIN}/features/${FEATURE} --export
npm run ng -- g s modules/${DOMAIN}/application/${FEATURE}/${FEATURE}-facade
```

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
