module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@controllers': './src/api/controllers',
          '@dto': './src/api/dto',
          '@repositories': './src/api/repositories',
          '@services': './src/api/services',
          '@entity': './src/api/entity',
          '@validations': './src/api/validations',
          '@middlewares': './src/api/middlewares',
          '@utils': './src/api/utils',
          '@modules': './src/api/modules'
        }
      }
    ]
  ],
  ignore: ['**/*.spec.ts']
}
