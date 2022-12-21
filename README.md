
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

