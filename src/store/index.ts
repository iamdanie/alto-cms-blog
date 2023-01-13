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

  localStorage.setItem(key, value?.toString())
}

export { getItem, setItem }
