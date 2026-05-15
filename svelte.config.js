import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      precompress: false,
      strict: true
    }),

    // MUST match GitHub repo name exactly
    paths: {
      base: '/Portfolio'
    },
  }
};

export default config;
