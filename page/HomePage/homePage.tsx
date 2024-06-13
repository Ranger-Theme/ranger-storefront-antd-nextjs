'use client'
import { useLazyQuery } from '@apollo/client'
import { Button, Form, Input } from 'antd'

import { GET_GUEST_EMAIL } from '@/graphql/queries/getGuestEmail'

const HomePage = () => {
  const [fetchEmail] = useLazyQuery(GET_GUEST_EMAIL)

  const handleOnFinish = async (values: any) => {
    const { data } = await fetchEmail({
      variables: {
        email: values.email
      },
      fetchPolicy: 'no-cache'
    })
    console.info(data)
  }

  return (
    <div>
      <Form onFinish={handleOnFinish}>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <span>Add To Cart</span>
        </Button>
      </Form>
    </div>
  )
}

export default HomePage
