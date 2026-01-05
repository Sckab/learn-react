export function converter(binNumber: number): string {
  const isValid = () => binNumber.toString().match(/(0|1)*/)
  const numberLenght = binNumber.toString().length
  let output: number = 0

  if (!isValid) {
    return "The number isn't valid, it must contain only 1s and 0s"
  }

  for (let i = 0; i < numberLenght; i++) {
    if (binNumber.toString()[i] === '0') {
      continue
    }

    output = output + 2 ** (numberLenght - 1 - i)
  }

  return output.toString()
}
