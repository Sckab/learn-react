type Props = {
  id: string
  label: string
  name: string
}

export default function Checkbox({ id, label, name }: Props) {
  return (
    <div className='flex items-center gap-2'>
      <input
        id={id}
        type='checkbox'
        name={name}
        defaultChecked={true}
        className='size-5 appearance-none rounded border-2 border-powder-blue-300 checked:border-powder-blue-300 checked:bg-powder-blue-300'
      />
      <label
        htmlFor={id}
        className='text-powder-blue-300'
      >
        {label}
      </label>
    </div>
  )
}
