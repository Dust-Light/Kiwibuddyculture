import React from 'react'
import './globals.css'

export const metadata = {
  title: '新西兰文化指南',
  description: '为中国留学生打造的新西兰文化适应指南',
}

export default function RootLayout({
  children,
}: {
  children: any
}) {
  return (
    <html lang="zh">
      <body>
        {children}
      </body>
    </html>
  )
} 