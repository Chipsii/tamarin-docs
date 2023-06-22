import React from 'react'

export default function MDXFormatter({children}:any) {
    return (
        //ref: https://tailwindcss.com/docs/typography-plugin for styling
        <article className="prose prose-zinc prose-headings:text-white lg:prose-xl">
        {children}
      </article>
    )
}