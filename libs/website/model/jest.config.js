module.exports = {
  name: 'website-model',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/website/model',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
