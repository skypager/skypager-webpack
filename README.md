# Webpack Configuration API

This builds upon the original work of @ericclemmons (author of the great Javascript Fatigue article of 2015) and his excellent @terse/webpack library.  Credit where credit is due.  This library is intended to reflect a different set of opinions about webpack configuration but to build upon his great API and codebase.

## API

- `.api([customFeatures[, customReducers]])`

  > Begins fluent interface, optionally accepted an array of custom features
  > and custom reducers.

- `.alias(name[, pathOrName])`

  > Maps a package name (e.g. `react`) to another library
  > (e.g. `react-lite`) or to a path (e.g. `./node_modules/react`).

- `.context(path)`

  > Config files are relative to this folder. (Default: `process.cwd()`)

- `.env(environment)`

  > Overrides `NODE_ENV` (defaults to `development`) the build is for.

- `.externals(...[Function, RegExp, String])`

  > Prevents Webpack from bundling matching resources.

- `.loader(name[, extensions = ".js"[, options]])`

  > Add a loader for the given extension(s) with the given settings.

- `.modules(path)`

  > Lookup non-relative (e.g. `my-cool-lib`) modules in this folder
  > as well as `node_modules`.

- `.node(options)`

  > Override built-in Node constants & libs (e.g. `__dirname`, `__filename`)

- `.output(pathOrOptions)`

  > Set the output path, or specify the entire Webpack output configuration.

- `.plugin(name, ...args)`

  > Installed automatically with the given arguments.

- `.preLoader(name[, extensions = ".js"[, options]])`

  > Just like `.loader`, but is ran before all other loaders.

- `.sourcemap(type)`

  > Add a source map to the build.

- `.target(runtime)`

  > Either `node` or `web`.

- `.getConfig()`

  > Returns the Webpack configuration

  - `.toString()`

    > Returns the Webpack configuration as a string.

- `.getState()`

  > Returns the normalized configuration (prior to reducing).

  - `.toString()`

    > Returns a string of the normalized configuraiton.

### License

> MIT License 2016 © Eric Clemmons

[webpack]: https://webpack.github.io/
