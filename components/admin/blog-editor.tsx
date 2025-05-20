"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  LinkIcon,
  ImageIcon,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react"

interface BlogEditorProps {
  value: string
  onChange: (value: string) => void
}

export function BlogEditor({ value, onChange }: BlogEditorProps) {
  const [showLinkInput, setShowLinkInput] = useState(false)
  const [linkText, setLinkText] = useState("")
  const [linkUrl, setLinkUrl] = useState("")

  const handleFormat = (format: string) => {
    let formattedText = value

    switch (format) {
      case "bold":
        formattedText += "<strong>Bold text</strong>"
        break
      case "italic":
        formattedText += "<em>Italic text</em>"
        break
      case "underline":
        formattedText += "<u>Underlined text</u>"
        break
      case "ul":
        formattedText += "\n<ul>\n  <li>List item 1</li>\n  <li>List item 2</li>\n</ul>\n"
        break
      case "ol":
        formattedText += "\n<ol>\n  <li>List item 1</li>\n  <li>List item 2</li>\n</ol>\n"
        break
      case "image":
        formattedText += '\n<img src="https://example.com/image.jpg" alt="Description" />\n'
        break
      case "align-left":
        formattedText += '<div style="text-align: left;">Left aligned text</div>'
        break
      case "align-center":
        formattedText += '<div style="text-align: center;">Center aligned text</div>'
        break
      case "align-right":
        formattedText += '<div style="text-align: right;">Right aligned text</div>'
        break
    }

    onChange(formattedText)
  }

  const handleAddLink = () => {
    if (linkText && linkUrl) {
      const linkHtml = `<a href="${linkUrl}" target="_blank">${linkText}</a>`
      onChange(value + linkHtml)
      setLinkText("")
      setLinkUrl("")
      setShowLinkInput(false)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2 p-2 border rounded-md bg-gray-50">
        <Button variant="ghost" size="icon" onClick={() => handleFormat("bold")} title="Bold">
          <Bold className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => handleFormat("italic")} title="Italic">
          <Italic className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => handleFormat("underline")} title="Underline">
          <Underline className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button variant="ghost" size="icon" onClick={() => handleFormat("ul")} title="Bullet List">
          <List className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => handleFormat("ol")} title="Numbered List">
          <ListOrdered className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button variant="ghost" size="icon" onClick={() => setShowLinkInput(!showLinkInput)} title="Add Link">
          <LinkIcon className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => handleFormat("image")} title="Add Image">
          <ImageIcon className="h-4 w-4" />
        </Button>
        <div className="w-px h-6 bg-gray-300 mx-1" />
        <Button variant="ghost" size="icon" onClick={() => handleFormat("align-left")} title="Align Left">
          <AlignLeft className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => handleFormat("align-center")} title="Align Center">
          <AlignCenter className="h-4 w-4" />
        </Button>
        <Button variant="ghost" size="icon" onClick={() => handleFormat("align-right")} title="Align Right">
          <AlignRight className="h-4 w-4" />
        </Button>
      </div>

      {showLinkInput && (
        <div className="flex gap-2 p-3 border rounded-md bg-gray-50">
          <input
            type="text"
            placeholder="Link text"
            className="flex-1 px-3 py-1 border rounded-md"
            value={linkText}
            onChange={(e) => setLinkText(e.target.value)}
          />
          <input
            type="text"
            placeholder="URL"
            className="flex-1 px-3 py-1 border rounded-md"
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
          />
          <Button size="sm" onClick={handleAddLink}>
            Add
          </Button>
          <Button size="sm" variant="outline" onClick={() => setShowLinkInput(false)}>
            Cancel
          </Button>
        </div>
      )}

      <Textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your blog content here..."
        className="min-h-[300px] font-mono"
      />

      <p className="text-xs text-muted-foreground">
        You can use HTML tags for formatting. The editor will render the HTML in the preview tab.
      </p>
    </div>
  )
}
