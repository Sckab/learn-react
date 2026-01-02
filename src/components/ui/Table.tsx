export default function Table({
  children,
  tableHead,
}: Readonly<{
  children: React.ReactNode
  tableHead: string[]
}>) {
  return (
    <table className='w-full table-fixed border-collapse'>
      <thead className='border-b-2 text-powder-blue-300'>
        <tr>
          {tableHead.map((head) => (
            <th
              key={head}
              className='pb-1 text-xl'
            >
              {head}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  )
}
