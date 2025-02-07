import React from 'react'
import Link from 'next/link'

export default function CultureComparison() {
  const comparisons = [
    {
      aspect: '社交礼仪',
      chinese: '见面时常鞠躬或点头，较为正式',
      kiwi: '喜欢随意打招呼，拥抱和亲脸颊都很常见',
    },
    {
      aspect: '饮食文化',
      chinese: '共享菜品，使用公筷，重视热食',
      kiwi: '个人分餐制，冷食也很普遍',
    },
    {
      aspect: '时间观念',
      chinese: '提前15-30分钟到达被视为准时',
      kiwi: '准时到达或提前5分钟即可',
    },
    {
      aspect: '送礼文化',
      chinese: '送礼是建立关系的重要方式，可能多次推辞',
      kiwi: '送礼较为直接，收到礼物会立即打开表示感谢',
    }
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>文化对比</h1>
        <p>了解中国与新西兰的文化差异</p>
        <Link href="/" className="back-link">
          返回首页
        </Link>
      </header>

      <div className="comparison-grid">
        {comparisons.map((item, index) => (
          <div key={index} className="comparison-card">
            <h2>{item.aspect}</h2>
            <div className="comparison-content">
              <div className="culture-side">
                <h3>🇨🇳 中国文化</h3>
                <p>{item.chinese}</p>
              </div>
              <div className="culture-side">
                <h3>🇳🇿 新西兰文化</h3>
                <p>{item.kiwi}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 