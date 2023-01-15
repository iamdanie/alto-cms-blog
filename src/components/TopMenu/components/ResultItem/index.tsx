import React from 'react'
import type { Post } from '../../../../types/Post'
import { formatDate } from '../../../../helpers/date'
import './index.css'
import { RiArrowRightSLine } from 'react-icons/ri'

type ResultItemProps = {
  post: Post
  onClick: () => void
}

const ResultItem: React.FC<ResultItemProps> = ({ post, onClick }) => (
  <div key={post.id} className="result-item" onClick={onClick}>
    <div className="result-item-container">
      <h2 className="result-item-title">{post.title}</h2>
      <h3 className="result-item-author">{`By ${post.author} on ${formatDate(
        post.createdAt
      )}`}</h3>
    </div>
    <div className="navigate-btn">
      <RiArrowRightSLine />
    </div>
  </div>
)

export default ResultItem
