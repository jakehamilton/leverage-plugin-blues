# Blues

Data synchronization for Leverage

### Development

Install the project and dependencies:

```bash
git clone https://github.com/jakehamilton/leverage-plugin-blues.git leverage-plugin-blues

cd $_

npm install
```

Run the development example:

```bash
npm run dev

# Browse to localhost:3000
```

### File Structure

```
leverage-plugin-blues/
├── test/                (files to use for testing)
│   ├── public/          (static assets used by the server when developing)
│   ├── index.js         (entrypoint for test server)
├── client.js            (the client side library for Blues)
├── component.js         (the leverage component used by Blues)
├── index.js             (entrypoint)
├── package-lock.json    (npm package lockfile to hold dependency versions)
├── package.json         (npm package manifest)
├── README.md            (this file)
├── service.js           (the leverage service used by Blues)
```
