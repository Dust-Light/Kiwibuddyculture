import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>新西兰文化指南</h1>
        <p>为中国留学生打造的新西兰文化适应指南</p>
      </header>

      <nav className="quick-nav">
        <Link href="/culture-comparison/" className="nav-card">
          <h2>文化对比</h2>
          <p>了解中国和新西兰的文化差异，帮助你更好地适应生活</p>
        </Link>
        <Link href="/daily-tips/" className="nav-card">
          <h2>生活贴士</h2>
          <p>日常生活中的实用建议和注意事项</p>
        </Link>
        <Link href="/maori-culture/" className="nav-card">
          <h2>毛利文化</h2>
          <p>探索新西兰独特的毛利文化传统和习俗</p>
        </Link>
      </nav>

      <section className="daily-tip">
        <h2>每日文化小贴士</h2>
        <div className="tip-card">
          <h3>新西兰打招呼方式</h3>
          <p>在新西兰，人们见面时常说"Kia ora"（你好）或"Hey"（嗨），比较随意友好。握手和拥抱都是可以接受的打招呼方式。</p>
        </div>
      </section>

      <section className="culture-preview">
        <h2>文化知识速览</h2>
        <div className="culture-card">
          <h3>准时的重要性</h3>
          <p>在新西兰，准时很重要。无论是上课、约会还是商务会议，最好提前5-10分钟到达。如果可能迟到，记得提前通知对方。</p>
        </div>
      </section>
    </div>
  )
} 