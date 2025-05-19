interface ArticleProps {
  article: {
    id: number
    category: string
    tags: string
    title: string
    description: string
  }
}

export default function Article({ article }: ArticleProps) {
  return (
    <div className="text-center">
      <p className="text-xs text-gray-600 mb-1">{article.category}</p>
      <p className="text-xs text-gray-600 mb-2">{article.tags}</p>
      <h2 className="text-lg font-medium mb-2">{article.title}</h2>
      <p className="text-gray-600 text-xs mb-3">
        {article.description.split("—").map((part, index, array) =>
          index < array.length - 1 ? (
            <span key={index}>
              {part}
              <br />—{" "}
            </span>
          ) : (
            <span key={index}>{part}</span>
          ),
        )}
      </p>
      <button className="text-sm font-medium hover:underline transition-all">READ ARTICLE</button>
    </div>
  )
}
