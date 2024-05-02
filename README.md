# spec-cluster

## Environment

This project uses the [Bun](https://bun.sh) runtime for JavaScript. If you do not already have Bun, you will need to [install](https://bun.sh/docs/installation) it:

```sh
curl -fsSL https://bun.sh/install | bash
```

## Example App

Download and install the project dependencies:

```sh
cd spec-cluster
bun install
```

Start the development example:

```sh
cd packages/example
bun start
```

The webserver will reply with the listening address and port:

```none
  VITE v5.2.11  ready in 263 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```

## Development

This project is using [@biomejs/biome](https://biomejs.dev) for linting, correctness, and automatic source code formatting and organization. 

Choosing to [integrate Biome in your editor](https://biomejs.dev/guides/integrate-in-editor/) will greatly improve your developer experience.

### Scripts

* `check` - performs automatic formatting and organization
* `lint` - perform ONLY lint check
* `format` - perform ONLY automatic formatting

Before committing code, run the `check` script:

```sh
bun check
```

```none
$ biome check --apply .
Checked 17 files in 14ms. No fixes needed.
```

### TypeScript

Before committing code, manually run the typescript compiler:

```sh
bun tsc
```

If everything is correct, there will be no errors:

```none
$ bun --filter '*' tsc
spec-cluster tsc $ tsc
└─ Done in 1.18 s
spec-cluster-example tsc $ tsc
└─ Done in 1.25 s
```
