type Props = {
  title: string
  excerpt: string
}

export default function PostCard({
  title,
  excerpt,
}: Props) {
  return (
    <article className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        {title}
      </h2>

      <p className="text-zinc-600 dark:text-zinc-400">
        {excerpt}
      </p>
    </article>
  )
}