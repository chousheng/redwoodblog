import { Link, routes } from '@redwoodjs/router'

import CommentForm from 'src/components/CommentForm'
import CommentsCell from 'src/components/CommentsCell'

const truncate = (text, length) => {
  return text.substring(0, length) + '...'
}

const Article = ({ article, summary = false }) => {
  return (
    <article>
      <header>
        <h2 className="text-xl font-semibold text-blue-700">
          <Link to={routes.article({ id: article.id })}>{article.title}</Link>
        </h2>
      </header>
      <div className="mt-2 font-light text-gray-900">
        {summary ? truncate(article.body, 100) : article.body}
      </div>
      <div className="mt-12">
        {!summary && (
          <div className="mt-12">
            <CommentForm postId={article.id} />
            <div className="mt-12">
              <CommentsCell postId={article.id} />
            </div>
          </div>
        )}
      </div>
      {/* <div>Posted at: {article.createdAt}</div> */}
    </article>
  )
}

export default Article
