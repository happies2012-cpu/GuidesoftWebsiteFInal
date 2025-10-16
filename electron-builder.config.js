/**
 * Electron Builder Configuration
 */
module.exports = {
  appId: 'com.guidesoft.app',
  productName: 'Guidesoft',
  directories: {
    output: 'dist-electron'
  },
  files: [
    'dist/**/*',
    'electron/**/*',
    'public/**/*',
    'package.json',
    '!node_modules/**/*',
    '!**/*.map'
  ],
  extraResources: [
    {
      from: 'public/',
      to: 'public/',
      filter: ['**/*']
    }
  ],
  mac: {
    category: 'public.app-category.business',
    icon: 'public/guidesoft-favicon.png',
    target: [
      'dmg',
      'zip'
    ]
  },
  win: {
    icon: 'public/guidesoft-favicon.png',
    target: [
      'nsis',
      'zip'
    ]
  },
  linux: {
    icon: 'public/guidesoft-favicon.png',
    target: [
      'AppImage',
      'deb',
      'rpm',
      'zip'
    ]
  },
  nsis: {
    oneClick: false,
    allowToChangeInstallationDirectory: true
  },
  publish: null
};