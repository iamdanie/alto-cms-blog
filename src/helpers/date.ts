const formatDate = (date: string) => {
  const postDate = new Date(date)
  const formatted = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full'
  }).format(postDate)

  return formatted
}

export { formatDate }
