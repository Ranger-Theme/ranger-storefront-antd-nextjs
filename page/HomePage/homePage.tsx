'use client'
import { useLazyQuery } from '@apollo/client'
import { Button, Form, Input, Spin } from 'antd'

import { GET_GUEST_EMAIL } from '@/graphql/queries/getGuestEmail'

const HomePage = () => {
  const [fetchEmail, { loading }] = useLazyQuery(GET_GUEST_EMAIL)

  const handleOnFinish = async (values: any) => {
    const { data } = await fetchEmail({
      variables: {
        email: values.email
      },
      fetchPolicy: 'no-cache'
    })
  }

  return (
    <Spin spinning={loading}>
      <Form onFinish={handleOnFinish}>
        <Form.Item name="email" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          <span>Validate Email</span>
        </Button>
      </Form>
    </Spin>
  )
}

export default HomePage
