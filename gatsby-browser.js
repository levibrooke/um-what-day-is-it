if (process.env.NODE_ENV === 'development') {
  window.process = {
    env: {
        NODE_ENV: 'development'
    }
  }
}