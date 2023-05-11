const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@app': path.resolve(__dirname, 'src/app/'),
      '@components': path.resolve(__dirname, 'src/presentation/components/'),
      '@containers': path.resolve(__dirname, 'src/presentation/containers/'),
      '@layouts': path.resolve(__dirname, 'src/presentation/layouts/'),
      '@views': path.resolve(__dirname, 'src/presentation/views/'),
      '@resources': path.resolve(__dirname, 'src/presentation/resources'),
    },
  },
};
