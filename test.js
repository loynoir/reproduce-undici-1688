it('fetch test: cgi with-content-length', async () => {
  const TEST_URL = 'http://127.0.0.1:8000/cgi-bin/reproduce-1688-with-content-length'
  
  const fetch2 = typeof process === 'undefined' ? fetch : (await import('undici')).fetch

  const r = await fetch2(TEST_URL);
  const rd = r.body.getReader();

  const c0 = await rd.read();
  const c1 = await rd.read();

  void c0
  void c1
});

it('fetch test: cgi without-content-length', async () => {
  const TEST_URL = 'http://127.0.0.1:8000/cgi-bin/reproduce-1688-without-content-length'
  
  const fetch2 = typeof process === 'undefined' ? fetch : (await import('undici')).fetch

  const r = await fetch2(TEST_URL);
  const rd = r.body.getReader();

  const c0 = await rd.read();
  const c1 = await rd.read();

  void c0
  void c1
});
