module.exports = {
  name: 'website-const',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/website/const',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
