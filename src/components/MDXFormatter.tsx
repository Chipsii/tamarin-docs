import React from 'react'

export default function MDXFormatter({children}:any) {
    return (
        //ref: https://tailwindcss.com/docs/typography-plugin for styling
        <article className="prose prose-zinc prose-headings:text-white prose-p:text-gray-400 prose-p:text-lg prose-li:text-xl prose-li:text-cyan-400 prose-strong:text-xl prose-strong:text-violet-600 lg:prose-xl">
        {children}
      </article>
    )
}