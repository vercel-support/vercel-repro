export default function middleware(req) {
  console.log(req)
  const basicAuth = req.headers['authorization']
  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = btoa(auth).split(':')

    if (user === '4dmin' && pwd === 'testpwd123') {
     console.log("pwd correct")
     return new Response()
    }
  }

  return new Response('Auth required', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  })
}
