const loaderStyles = {
  loader: {
    display: 'none',
    position: 'fixed',
    width: '100%',
    height: '100vh',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    '&.active': {
      display: 'flex',
    }
  },
  loader_logo: {
    height: '20vmin',
    pointerEvents: 'none',
  },
  '@media (prefers-reduced-motion: no-preference)': {
      '.Loader_logo': {
        animation: 'loader_logo_spin infinite 20s linear',
    }
  },
  '@keyframes loader_logo_spin': {
    from: {transform: 'rotate(0deg)'},
    to: {transform: 'rotate(360deg)'},
  },
};

export default loaderStyles;
