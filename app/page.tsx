const researchAreas = [
  {
    index: "01",
    title: "生成式 AI 与教育治理",
    description:
      "关注生成式 AI 如何进入高职院校真实工作流程，并推动教育治理从工具使用走向组织能力建设。",
    keywords: ["流程重构", "教育数字化", "风险治理"],
  },
  {
    index: "02",
    title: "学生发展支持",
    description:
      "从高校辅导员的一线实践出发，探索更及时、更有依据、也更尊重个体差异的学生支持机制。",
    keywords: ["高职教育", "学生工作", "发展性评价"],
  },
  {
    index: "03",
    title: "智能教育技术",
    description:
      "结合软件工程与现代教育技术背景，研究学习分析、机器学习和智能工具的教育应用。",
    keywords: ["学习分析", "机器学习", "教学设计"],
  },
];

const experiences = [
  {
    period: "2022 — 至今",
    role: "专职辅导员 · 讲师",
    place: "赣南卫生健康职业学院",
    detail:
      "负责学生发展与日常教育管理，持续探索人工智能在高校学生工作和组织流程中的实践价值。",
  },
  {
    period: "2020 — 2021",
    role: "少儿编程教研开发",
    place: "好未来教育科技有限公司",
    detail: "参与 Python 课程资源的开发、建设与维护。",
  },
  {
    period: "2020",
    role: "教育中台教研",
    place: "字节跳动",
    detail: "参与基于知识图谱的题目推荐逻辑验证及游戏化学习项目。",
  },
  {
    period: "2019",
    role: "题库教研",
    place: "小猿搜题",
    detail: "参与高中题库内容完善与质量审核。",
  },
];

const highlights = [
  {
    number: "18",
    unit: "项",
    label: "软件著作权",
    note: "均为第一作者",
  },
  {
    number: "7",
    unit: "个",
    label: "学生班级",
    note: "4 个毕业班均获优秀",
  },
  {
    number: "12",
    unit: "人",
    label: "专升本学生",
    note: "持续关注学生成长",
  },
];

const education = [
  {
    degree: "现代教育技术 · 硕士",
    school: "赣南师范大学",
    focus: "在线教育、教育技术与人工智能教育应用",
  },
  {
    degree: "软件工程（+交通运输）· 本科",
    school: "华东交通大学",
    focus: "软件工程、计算思维与跨学科实践",
  },
];

const publications = [
  {
    year: "2025",
    type: "EI 会议论文",
    title:
      "Construction of a University Student Management Agent Based on Large Language Models and Knowledge Graphs",
    venue: "ICAIE 2025",
    authorship: "第一作者 · EI 收录",
  },
  {
    year: "2021",
    type: "期刊论文",
    title: "基于 K-Means 的学生成绩聚类分析与教学方法改进",
    venue: "《教育信息技术》",
    authorship: "第一作者",
  },
  {
    year: "2020",
    type: "会议论文",
    title: "基于卷积神经网络的课堂声音识别方法研究",
    venue: "第十九届教育技术国际论坛",
    authorship: "第一作者",
  },
];

const softwareWorks = [
  "基于卷积神经网络的课堂声音识别方法软件",
  "基于个性化 K-Means 的学生成绩聚类方法软件",
];

const transcripts = [
  {
    index: "01",
    title: "本科成绩单",
    subtitle: "华东交通大学 · 软件工程（+交通运输）",
    note: "完整课程记录 · 平均学分绩 81.85",
    image: "undergraduate-transcript.webp",
  },
  {
    index: "02",
    title: "研究生成绩单",
    subtitle: "赣南师范大学 · 现代教育技术",
    note: "教育技术与研究方法课程记录",
    image: "graduate-transcript.webp",
  },
];

const certifications = [
  {
    index: "03",
    title: "高职讲师职称证明",
    subtitle: "思想政治教育 · 中级专业技术资格",
    note: "2024",
    image: "senior-vocational-lecturer-certificate.webp",
    orientation: "portrait",
    featured: true,
  },
  {
    index: "04",
    title: "软件设计师资格证书",
    subtitle: "计算机技术与软件专业技术资格（中级）",
    note: "2017",
    image: "software-designer-certificate.webp",
    orientation: "landscape",
  },
  {
    index: "05",
    title: "SYB 讲师证书",
    subtitle: "创业培训（SYB）课程师资培训",
    note: "2025",
    image: "syb-instructor-certificate.webp",
    orientation: "landscape",
  },
  {
    index: "06",
    title: "普通话水平测试等级证书",
    subtitle: "二级甲等 · 90.7 分",
    note: "国家语言文字工作委员会",
    image: "mandarin-certificate.webp",
    orientation: "landscape",
  },
  {
    index: "07",
    title: "大学英语六级成绩报告单",
    subtitle: "CET-6 · 454 分",
    note: "教育部考试中心",
    image: "cet6-score-report.webp",
    orientation: "portrait",
  },
];

export default function Home() {
  const assetBase =
    process.env.GITHUB_ACTIONS === "true" ? "/academic-homepage" : "";

  return (
    <main>
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="返回首页">
          Z<span>WJ</span>
        </a>
        <nav aria-label="主导航">
          <a href="#about">关于</a>
          <a href="#research">研究</a>
          <a href="#outputs">成果</a>
          <a href="#experience">经历</a>
          <a href="#credentials">资历</a>
          <a href="#contact">联系</a>
        </nav>
        <span className="edition">Academic profile · 2026</span>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker reveal">
          <span>教育技术研究者</span>
          <span>高校学生工作实践者</span>
          <span>AI 应用探索者</span>
        </div>

        <figure className="hero-portrait reveal delay-2">
          <img
            src={`${assetBase}/wenjing-portrait.jpg`}
            alt="钟文精个人肖像"
          />
          <figcaption>
            <span>WENJING ZHONG</span>
            <span>PORTRAIT · 01</span>
          </figcaption>
        </figure>

        <div className="hero-title reveal delay-1">
          <p className="eyebrow">WENJING ZHONG</p>
          <h1>
            钟文精
            <span className="title-mark" aria-hidden="true">
              ／
            </span>
          </h1>
          <p className="hero-statement">
            在教育现场理解技术，
            <br />
            在真实问题中研究
            <em>人工智能。</em>
          </p>
        </div>

        <div className="hero-footer reveal delay-2">
          <p className="hero-intro">
            现任赣南卫生健康职业学院讲师、专职辅导员。拥有软件工程与现代教育技术交叉背景，关注生成式
            AI 赋能高职院校学生工作、教育治理与学生发展支持。
          </p>
          <a className="text-link" href="#research">
            查看研究方向 <span aria-hidden="true">↘</span>
          </a>
        </div>

        <div className="orbit" aria-hidden="true">
          <span>EDTECH</span>
          <span>AI</span>
          <span>STUDENT DEVELOPMENT</span>
        </div>
      </section>

      <section className="manifesto section-pad" id="about">
        <div className="section-label">
          <span>01</span>
          <p>About / 关于</p>
        </div>
        <div className="manifesto-copy">
          <p className="lead">
            我的工作横跨<span>教育、技术与学生发展</span>。
          </p>
          <div className="copy-columns">
            <p>
              我从软件工程出发，在现代教育技术中建立研究视角，又在高校学生工作的一线实践中重新理解教育。技术只有进入具体的人、流程与组织，才能产生真正的价值。
            </p>
            <p>
              当前，我将研究与实践聚焦于“生成式 AI
              赋能高职院校学生工作流程重构与治理机制”，希望把零散的工具应用转化为可复用、可评估、负责任的教育创新。
            </p>
          </div>
        </div>
      </section>

      <section className="practice-visual" aria-label="教育实践现场">
        <figure>
          <img
            src={`${assetBase}/education-practice.jpg`}
            alt="钟文精与同伴在实践现场专注交流"
          />
          <div className="practice-copy">
            <p>PRACTICE / 现场</p>
            <h2>
              现场、协作与具体问题，
              <br />
              是我理解教育技术的起点。
            </h2>
          </div>
          <figcaption>
            <span>Education in practice</span>
            <span>02 / 02</span>
          </figcaption>
        </figure>
      </section>

      <section className="research section-pad" id="research">
        <div className="section-label light">
          <span>02</span>
          <p>Research / 研究方向</p>
        </div>
        <div className="section-heading light-heading">
          <p>RESEARCH INTERESTS</p>
          <h2>从现场出发，形成可以被验证的研究。</h2>
        </div>
        <div className="research-list">
          {researchAreas.map((item) => (
            <article className="research-item" key={item.index}>
              <span className="research-index">{item.index}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
              <ul aria-label={`${item.title}关键词`}>
                {item.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="selected-work section-pad">
        <div className="section-label">
          <span>03</span>
          <p>Selected work / 代表性实践</p>
        </div>
        <div className="work-grid">
          <article className="featured-work">
            <div className="work-meta">
              <span>主持项目</span>
              <span>教育技术 × 机器学习</span>
            </div>
            <h2>卷积神经网络在课堂声音识别中的应用研究</h2>
            <p>
              主持江西省研究生创新基金项目，尝试将深度学习方法应用于课堂声音识别，在真实教育情境中连接算法、数据与教学问题。
            </p>
          </article>
          <div className="metrics">
            {highlights.map((item) => (
              <article className="metric" key={item.label}>
                <p className="metric-number">
                  {item.number}
                  <sup>{item.unit}</sup>
                </p>
                <h3>{item.label}</h3>
                <p>{item.note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="outputs section-pad" id="outputs">
        <div className="section-label">
          <span>04</span>
          <p>Publications & software / 论文与软件成果</p>
        </div>
        <div className="outputs-layout">
          <div className="section-heading outputs-heading">
            <p>SELECTED OUTPUTS</p>
            <h2>把教育现场的问题，转化为可验证、可复用的成果。</h2>
          </div>
          <div>
            <div className="output-group-heading">
              <p>论文发表</p>
              <span>03 PUBLICATIONS</span>
            </div>
            <div className="publication-list">
              {publications.map((item, index) => (
                <article className="publication-item" key={item.title}>
                  <div className="publication-index">
                    <span>0{index + 1}</span>
                    <p>{item.year}</p>
                  </div>
                  <div className="publication-copy">
                    <div className="publication-meta">
                      <span>{item.type}</span>
                      <span>{item.authorship}</span>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.venue}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="output-group-heading software-heading">
              <p>代表性软件著作权</p>
              <span>02 SELECTED WORKS</span>
            </div>
            <div className="software-list">
              {softwareWorks.map((title, index) => (
                <article className="software-item" key={title}>
                  <span>SW · 0{index + 1}</span>
                  <h3>《{title}》</h3>
                  <p>软件著作权</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="experience section-pad" id="experience">
        <div className="section-label">
          <span>05</span>
          <p>Experience / 经历</p>
        </div>
        <div className="experience-layout">
          <div className="section-heading sticky-heading">
            <p>PROFESSIONAL PATH</p>
            <h2>从教育科技行业，到高校教育现场。</h2>
          </div>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={`${item.period}-${item.place}`}>
                <p className="period">{item.period}</p>
                <div>
                  <h3>{item.role}</h3>
                  <p className="place">{item.place}</p>
                  <p className="detail">{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="education section-pad">
        <div className="section-label light">
          <span>06</span>
          <p>Education / 教育背景</p>
        </div>
        <div className="education-grid">
          {education.map((item, index) => (
            <article key={item.degree}>
              <span>0{index + 1}</span>
              <p className="degree">{item.degree}</p>
              <h3>{item.school}</h3>
              <p className="focus">{item.focus}</p>
            </article>
          ))}
        </div>
        <div className="credentials">
          <span>CET-6</span>
          <span>软件设计师（中级）</span>
          <span>普通话二级甲等</span>
          <span>SYB 创业培训讲师</span>
          <span>研究生数学建模竞赛三等奖</span>
        </div>
      </section>

      <section className="credential-archive section-pad" id="credentials">
        <div className="section-label light">
          <span>07</span>
          <p>Credentials archive / 教育资历档案</p>
        </div>
        <div className="archive-intro">
          <div className="section-heading">
            <p>VERIFIED MATERIALS</p>
            <h2>教育背景、技术能力与教学表达的交叉证明。</h2>
          </div>
          <div className="archive-note">
            <p>
              这里呈现的不只是证书本身，也是一条从软件工程、教育技术到高校育人实践的能力路径。
            </p>
            <span>公开版本已隐藏个人编号及验证信息</span>
          </div>
        </div>

        <div className="transcript-gallery">
          {transcripts.map((item) => {
            const imageUrl = `${assetBase}/credentials/${item.image}`;
            return (
              <article className="transcript-card" key={item.title}>
                <a
                  className="document-visual transcript-visual"
                  href={imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`查看${item.title}大图`}
                >
                  <img src={imageUrl} alt={`${item.title}公开展示版`} loading="lazy" />
                  <span>VIEW DOCUMENT ↗</span>
                </a>
                <div className="document-caption">
                  <span>{item.index}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                  <p>{item.note}</p>
                </div>
              </article>
            );
          })}
        </div>

        <div className="certificate-heading">
          <p>PROFESSIONAL CERTIFICATIONS</p>
          <span>05 SELECTED CREDENTIALS</span>
        </div>
        <div className="certificate-gallery">
          {certifications.map((item) => {
            const imageUrl = `${assetBase}/credentials/${item.image}`;
            return (
              <article
                className={`certificate-card ${item.featured ? "featured-credential" : ""}`}
                key={item.title}
              >
                <a
                  className={`document-visual certificate-visual ${item.orientation}`}
                  href={imageUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`查看${item.title}大图`}
                >
                  <img src={imageUrl} alt={`${item.title}公开展示版`} loading="lazy" />
                  <span>{item.index} ↗</span>
                </a>
                <div className="certificate-caption">
                  <h3>{item.title}</h3>
                  <p>{item.subtitle}</p>
                  <span>{item.note}</span>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="contact section-pad" id="contact">
        <p className="contact-kicker">ACADEMIC EXCHANGE · COLLABORATION</p>
        <h2>
          期待与关心
          <br />
          <em>AI 与教育现场</em>
          的同行交流。
        </h2>
        <div className="contact-row">
          <p>
            中国 · 江西赣州
            <br />
            赣南卫生健康职业学院
          </p>
          <p className="privacy-note">
            为保护个人隐私，公开版暂不展示私人联系方式。
            <br />
            可通过所在单位公开渠道联系。
          </p>
        </div>
      </section>

      <footer>
        <p>© 2026 钟文精</p>
        <p>Education · Technology · Human Development</p>
        <a href="#top" aria-label="返回页面顶部">
          回到顶部 ↑
        </a>
      </footer>
    </main>
  );
}
