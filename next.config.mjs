import withMarkdoc from '@markdoc/next.js';

export default withMarkdoc({
  compiler: {
    styledComponents: true
  }
})({
  pageExtensions: ['md', 'mdoc', 'js', 'jsx', 'ts', 'tsx']
});
