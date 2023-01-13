import React from 'react'
import { useParams } from 'react-router-dom'

function Post(): React.ReactElement<{}> {
  const { id } = useParams()

  return <>{`Post: ${id as string}`}</>
}

export default Post
