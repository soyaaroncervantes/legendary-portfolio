module.exports = {
  name: 'website-interface',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/website/interface',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
