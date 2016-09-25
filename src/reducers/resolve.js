import path from 'path'

export default function resolve(state) {
  const { alias, modules } = state;

  const resolve = {};

  if (alias) {
    resolve.alias = alias;
  }

  if (modules) {
    resolve.modules = modules.map((folder) => {
      const { dir } = path.parse(folder);

      // e.g. "./lib" => `${context}/lib`
      if (dir) {
        return path.resolve(process.cwd(), folder);
      }

      // e.g. "node_modules"
      return folder;
    });
  }

  return resolve;
}
