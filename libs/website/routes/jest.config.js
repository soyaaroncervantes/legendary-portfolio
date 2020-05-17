module.exports = {
  name: 'website-routes',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/website/routes',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
