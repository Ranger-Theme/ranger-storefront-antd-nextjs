import { useMutation } from '@apollo/client'
import { Button, Form, Input, Spin } from 'antd'

import { POST_SUBSCRIBE_NEWSLETTER } from '@/graphql/mutations/subscribeNewsletter'

const Newsletter = () => {
  const [subscribeNewsletter, { loading }] = useMutation(POST_SUBSCRIBE_NEWSLETTER)

  const handleOnFinish = async (values: any) => {
    try {
      const { data } = await subscribeNewsletter({
        variables: {
          email: values.email
        }
      })
      console.info(data)
    } catch (error: any) {
      console.info(error?.message)
    }
  }

  return (
    <div>
      <Spin spinning={loading}>
        <Form layout="vertical" onFinish={handleOnFinish}>
          <Form.Item name="email" label="Newsletter" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            <span>Subscribe</span>
          </Button>
        </Form>
      </Spin>
    </div>
  )
}

export default Newsletter
