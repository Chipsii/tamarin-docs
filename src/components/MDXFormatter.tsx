import React from 'react'

export default function MDXFormatter({children}:any) {
    return (
        <article className="prose prose-zinc prose-headings:text-white lg:prose-xl">
        {children}
      </article>
    )
}