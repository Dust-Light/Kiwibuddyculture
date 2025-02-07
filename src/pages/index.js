import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>新西兰文化指南</h1>
        <p>了解文化差异，轻松适应留学生活</p>
      </header>

      <nav className="quick-nav">
        <Link href="/culture-comparison" className="nav-card">
          <h2>文化对比</h2>
          <p>了解中国与新西兰的文化差异</p>
        </Link>
        <Link href="/daily-tips" className="nav-card">
          <h2>生活贴士</h2>
          <p>实用的新西兰生活建议</p>
        </Link>
        <Link href="/maori-culture" className="nav-card">
          <h2>毛利文化</h2>
          <p>了解新西兰原住民文化</p>
        </Link>
      </nav>

      <section className="daily-tip">
        <h2>每日文化小贴士</h2>
        <div className="tip-card">
          <h3>打招呼方式</h3>
          <p>在新西兰，人们见面时常说"Kia ora"（毛利语：你好）或简单地说"Hi"、"Hello"。与中国的点头示意不同，这里更倾向于轻松的口头问候。</p>
        </div>
      </section>

      <section className="culture-preview">
        <h2>文化小知识</h2>
        <div className="culture-card">
          <h3>准时观念</h3>
          <p>在新西兰，准时非常重要。无论是赴约还是上课，最好提前5-10分钟到达。如果可能迟到，应提前通知对方。</p>
        </div>
      </section>
    </div>
  );
} 