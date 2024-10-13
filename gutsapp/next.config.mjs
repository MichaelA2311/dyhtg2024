// next.config.mjs
import transpileModules from 'next-transpile-modules';

const withTM = transpileModules(['@amcharts/amcharts5', '@amcharts/amcharts5-geodata']);

export default withTM({
  reactStrictMode: true, // Other Next.js settings you may have
});
