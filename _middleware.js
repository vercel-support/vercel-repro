//import { NextResponse } from 'next/server';
export default function middleware(req) {
 console.log(req)
 /*  const basicAuth = req.headers.get('authorization')

  if (basicAuth) {
    const auth = basicAuth.split(' ')[1]
    const [user, pwd] = Buffer.from(auth, 'base64').toString().split(':')

    if (user === '4dmin' && pwd === 'testpwd123') {
      //return NextResponse.next()
      return new Response('Auth required', {
        status: 200,
      })
    }
  } */

  return new Response('Hello, world!');
}
