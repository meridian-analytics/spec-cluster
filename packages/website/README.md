# specCluster-website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```sh
$ bun install
```

This command installs the development dependencies.

### Local Development

```sh
$ bun run dev
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```sh
$ bun run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```sh
$ bun run deploy
```

This command is a convenient way to build the website and push to the `gh-pages` branch.

If you encounter authentication errors while running this command, it may be due to issues with your GitHub authentication. To resolve this, you can use SSH for authentication during deployment. Here’s how to proceed:

#### Using SSH for Deployment

1. **If you already have an SSH key set up for GitHub**:  
   Simply run the following command:  

   ```sh
   $  USE_SSH=true bun run deploy
   ```

   This instructs the deployment process to use SSH for authentication.

2. **If you don’t have an SSH key set up**:  
   You’ll need to create one and add it to your GitHub account. Follow these steps:

   - Generate a new SSH key by following [GitHub's SSH key setup guide](https://docs.github.com/en/authentication/connecting-to-github-with-ssh).  
   - Once the key is added to your GitHub account, you can run the command mentioned above:  

     ```sh
     $  USE_SSH=true bun run deploy
     ```

This setup ensures that your deployments proceed smoothly without authentication errors.