
# Cat as a Service 🐈

This CLI application generates a friendly greeting messages by two cute cats!


## Usage

```bash
  node ./dist/index.js <parameters>
```

Use the following parameters to generate your cute cat greeting

| Parameter | Type     | Description                | Default         |       
| :-------- | :------- | :------------------------- | :------------------------- |
| `--height` | `number` | **Optional**. Height of the image | 500 |
| `--width` | `number` | **Optional**. Width of the image | 400 |
| `--color` | `string` | **Optional**. color of the text | Pink |
| `--size` | `number` | **Optional**. Font size of the text | 100 |
| `--greeting` | `string` | **Optional**. Greeting text | Hello |
| `--who` | `string` | **Optional**. Whom text | You |

### Example

```bash
  node ./dist/index.js --greeting Hey --who Gapstars 
```

![Sample Output](https://res.cloudinary.com/dufl0llvg/image/upload/v1663483445/cat.png)


## Tech Stack

**Server:** Node

**Libraries:** 

axios - Promise based HTTP client for the browser and node.js

minimist - Parse argument options

sharp - High performance Node.js image processing


### Selection of Packages

* axios was selected instead of request as the package is no longer maintained by the Author. Last release was in 2019. [Message by Author](https://github.com/request/request/issues/3142)
* sharp was used instead of @mapbox/blend since the author have dropped support for Windows binaries. [Message by Author](https://github.com/mapnik/node-mapnik/issues/848)


## Improvements

* Using TypeScript for type safety while development
* Cleaner code
* Remove unncessary packages
* Usage of better package alternatives
* Secure


### Secure

There are no known vulnerabilities found in the packages used

![NPM Audit](https://res.cloudinary.com/dufl0llvg/image/upload/v1663485887/vulnerabilities.png)

Minimist version used is >1.2.6 to mitigate known vulnerabilty 

[![Minimist Vulnerabilty](https://security.snyk.io/_nuxt/img/header-logo.aded646.svg)](https://security.snyk.io/vuln/SNYK-JS-MINIMIST-2429795)


## Run Locally

Clone the project

```bash
  git clone https://github.com/miluckshan-j/gapstars-assessment
```

Go to the project directory

```bash
  cd gapstars-assessment
```

Install dependencies

```bash
  npm install
```

Build Library

```bash
  npm run build
```

Test Library

```bash
  npm run test
```

## Authors

- [@Miluckshan J](https://github.com/miluckshan-j)

