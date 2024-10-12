import { createElement, HTMLAttributes } from "react"
import sanitizeHtml from 'sanitize-html';


type SanitizeHTMLProps = {
    children: string,
    tag: string
} & HTMLAttributes<HTMLElement>

export function SanitizeHtml({ tag, children, ...rest }: SanitizeHTMLProps) {

    const sanitizeHTML = sanitizeHtml(children, {
        allowedTags: ['b', 'i', 'em', 'strong']
    })

    return createElement(
        tag,
        { ...rest },
        sanitizeHTML,
    )
}