const globalStyles = (theme) => ({
  body: {
    margin: 0,
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.background.primary,
    fontSize: theme.typography.fontSize,
    lineHeight: 1.2,
    boxSizing: 'border-box',
  },
  a: {
    textDecoration: 'none',
    color: '#252525',
  },
  h3: {
    fontWeight: theme.typography.fontWeightRegular,
    margin: 0,
  },
  code: {
    fontFamily: "source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace",
  },
  container: {
    maxWidth: '900px',
    margin: '0 auto',
  }
});

export default globalStyles;
