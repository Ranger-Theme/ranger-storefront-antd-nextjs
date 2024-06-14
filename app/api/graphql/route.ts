import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const localhost = request.nextUrl.origin.replace('localhost', '127.0.0.1')
  const query = request.nextUrl.searchParams.get('query')
  const variables = request.nextUrl.searchParams.get('variables')
  const operationName = request.nextUrl.searchParams.get('operationName')
  const api = localhost.replace(process.env.NEXT_PUBLIC_HOST_URL, process.env.NEXT_PUBLIC_API_URL)

  const res = await fetch(`${api}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      ...(variables && { variables: JSON.parse(variables) }),
      operationName
    })
  })
  const result = await res.json()
  return NextResponse.json(result)
}

export async function POST(request: NextRequest) {
  const localhost = request.nextUrl.origin.replace('localhost', '127.0.0.1')
  const { query, variables, operationName } = await request.json()
  const api = localhost.replace(process.env.NEXT_PUBLIC_HOST_URL, process.env.NEXT_PUBLIC_API_URL)

  const res = await fetch(`${api}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables,
      operationName
    })
  })
  const result = await res.json()
  return NextResponse.json(result)
}
