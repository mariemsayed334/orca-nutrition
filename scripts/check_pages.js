(async () => {
  const urls = [
    'http://localhost:3000/products',
    'http://localhost:3000/products/orca-whey',
  ]

  for (const url of urls) {
    try {
      const res = await fetch(url)
      console.log(`${url} -> ${res.status}`)
    } catch (err) {
      console.error(`${url} -> ERROR: ${err.message}`)
    }
  }
})()
