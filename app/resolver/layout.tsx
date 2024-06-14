const ResolverLayout = async ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => {
  return (
    <div className="resolver">
      <div>{children}</div>
    </div>
  )
}

export default ResolverLayout
