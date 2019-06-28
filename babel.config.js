module.exports = {
  'presets': [
    ['@vue/app', {
      polyfills: [
        'es6.promise',
        'es6.symbol'
      ],
      useBuiltIns: 'entry'
    }]
  ],
  'plugins': [
    [
      'import',
      {
        'libraryName': 'ant-design-vue',
        'libraryDirectory': 'es',
        'style': true
      }
    ]
  ]
}
