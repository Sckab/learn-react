export default function TableData({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <td className='border-b border-powder-blue-300 py-1.5 text-center text-powder-blue-100'>
      {children}
    </td>
  )
}
