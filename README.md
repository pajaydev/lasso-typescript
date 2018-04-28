lasso-typescript
====================================

Plugin to use Typescript using Lasso js.

[![npm version](https://badge.fury.io/js/lasso-typescript.svg)](https://badge.fury.io/js/lasso-typescript)
[![Build Status](https://travis-ci.org/ajay2507/lasso-typescript.svg?branch=master)](https://travis-ci.org/ajay2507/lasso-typescript)

# Usage

```bash

npm install lasso-typescript

```

Register lasso-typescript as shown below:

```bash

require('lasso').configure({
    ...
    plugins: [
        'lasso-typescript',
        ...
    ]
});

```

Include the typescript file in browser.json as shown below:

```javascript
{
    "dependencies": [
        "./style.less",
        "./Greeter.ts",
        "require-run: ./main"
    ]
}
```

# Example

Fork and set up the project.

```bash
git clone git@github.com:ajay2507/lasso-typescript.git
cd example
npm install
```

Run the project.

```bash
npm run start
```

