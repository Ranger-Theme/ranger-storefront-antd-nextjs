import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('query')
  const variables = request.nextUrl.searchParams.get('variables')
  const operationName = request.nextUrl.searchParams.get('operationName')

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
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
  const { query, variables, operationName } = await request.json()

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/graphql`, {
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
