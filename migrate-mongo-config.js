const config = {
  mongodb: {
    url: process.env.MONGODB_CONNECTION_STRING,
    databaseName: "hamburgueria",

    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  },
 
  migrationsDir: "src/migrations",
  changelogCollectionName: "changelog",
  migrationFileExtension: ".js",
  useFileHash: false,
  moduleSystem: 'esm',
};

export default config