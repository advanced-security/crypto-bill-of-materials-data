# webhook-to-workflow

> A GitHub App built with [Probot](https://github.com/probot/probot) that A GitHub App that receives webhooks and runs workflows in response

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t webhook-to-workflow .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> webhook-to-workflow
```

## Contributing

If you have suggestions for how webhook-to-workflow could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Chris Campbell
