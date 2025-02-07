import React from 'react'
import Link from 'next/link'

export default function MaoriCulture() {
  const culturalAspects = [
    {
      title: '毛利语基础',
      content: [
        {
          phrase: 'Kia ora',
          meaning: '你好/谢谢',
          usage: '最常用的毛利语问候语，可以用作问候或表示感谢。'
        },
        {
          phrase: 'Haere mai',
          meaning: '欢迎',
          usage: '用于欢迎客人或表示欢迎加入。'
        }
      ]
    },
    {
      title: '重要文化概念',
      content: [
        {
          concept: 'Mana',
          explanation: '威望、权威和精神力量',
          details: '这是毛利文化中最重要的概念之一，代表一个人的威望、尊严和精神力量。'
        },
        {
          concept: 'Tapu',
          explanation: '神圣、禁忌',
          details: '表示某物或某地的神圣性，需要特别尊重和遵守相关禁忌。'
        }
      ]
    },
    {
      title: '传统习俗',
      content: [
        {
          custom: 'Hongi',
          explanation: '传统毛利人见面礼',
          details: '两人相见时额头和鼻子相触，象征着分享生命能量。'
        },
        {
          custom: 'Powhiri',
          explanation: '欢迎仪式',
          details: '正式的毛利传统欢迎仪式，包括唱歌、演讲和共享食物。'
        }
      ]
    }
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>毛利文化</h1>
        <p>了解新西兰原住民毛利人的文化传统</p>
        <Link href="/" className="back-link">
          返回首页
        </Link>
      </header>

      <div className="maori-content">
        {culturalAspects.map((aspect, index) => (
          <section key={index} className="maori-section">
            <h2>{aspect.title}</h2>
            <div className="maori-grid">
              {aspect.content.map((item, itemIndex) => (
                <div key={itemIndex} className="maori-card">
                  {'phrase' in item ? (
                    <>
                      <h3>{item.phrase}</h3>
                      <p className="meaning">{item.meaning}</p>
                      <p>{item.usage}</p>
                    </>
                  ) : 'concept' in item ? (
                    <>
                      <h3>{item.concept}</h3>
                      <p className="meaning">{item.explanation}</p>
                      <p>{item.details}</p>
                    </>
                  ) : (
                    <>
                      <h3>{item.custom}</h3>
                      <p className="meaning">{item.explanation}</p>
                      <p>{item.details}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
} 