import Link from './InternalLink'
import TableData from './TableData'

export default function TableRow({
  projectName,
  difficulty,
  link,
}: Readonly<{
  projectName: string
  difficulty: string
  link: string
}>) {
  return (
    <tr>
      <TableData>{projectName}</TableData>
      <TableData>{difficulty}</TableData>
      <TableData>
        <Link link={link}>link</Link>
      </TableData>
    </tr>
  )
}
