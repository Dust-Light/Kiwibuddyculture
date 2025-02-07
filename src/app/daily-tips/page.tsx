import React from 'react'
import Link from 'next/link'

export default function DailyTips() {
  const tips = [
    {
      category: '社交礼仪',
      items: [
        {
          title: '称呼方式',
          content: '在新西兰，人们倾向于直接用名字称呼，包括对老师和长辈。不过第一次见面时，最好先用Mr./Ms.加姓氏。'
        },
        {
          title: '个人空间',
          content: '新西兰人很重视个人空间，交谈时保持适当距离（约一臂长），不要过分触碰对方。'
        }
      ]
    },
    {
      category: '日常生活',
      items: [
        {
          title: '作息时间',
          content: '新西兰人普遍早睡早起，商店通常在17:00-18:00就关门，周末营业时间可能更短。'
        },
        {
          title: '饮食习惯',
          content: '午餐通常是简单的三明治或沙拉，晚餐才是一天中最重要的一餐。外出就餐时记得给小费（通常是账单的10%）。'
        }
      ]
    },
    {
      category: '交通出行',
      items: [
        {
          title: '公共交通',
          content: '乘坐公交车时需要提前向司机示意，下车时按铃通知司机。部分城市需要提前购买公交卡。'
        },
        {
          title: '步行礼仪',
          content: '在人行道上靠左行走，穿越马路时要使用斑马线，遵守交通信号灯。'
        }
      ]
    }
  ]

  return (
    <div className="container">
      <header className="header">
        <h1>生活贴士</h1>
        <p>帮助你更好地适应新西兰生活的实用建议</p>
        <Link href="/" className="back-link">
          返回首页
        </Link>
      </header>

      <div className="tips-container">
        {tips.map((section, index) => (
          <section key={index} className="tips-section">
            <h2>{section.category}</h2>
            <div className="tips-grid">
              {section.items.map((tip, tipIndex) => (
                <div key={tipIndex} className="tip-card">
                  <h3>{tip.title}</h3>
                  <p>{tip.content}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
} 