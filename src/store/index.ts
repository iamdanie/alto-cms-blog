function getItem(key: string) {
  const item: string | null = localStorage.getItem(key)

  if (!item === null) {
    return item
  }

  return JSON.parse(item as string)
}

function setItem(key: string, value: any) {
  if (!key || !value) {
    return
  }

  try {
    localStorage.setItem(key, JSON.stringify(value))

    return value
  } catch (e: unknown) {
    return null
  }
}

export { getItem, setItem }
