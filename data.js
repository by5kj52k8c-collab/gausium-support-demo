/* ========================================
   智修文档 - 数据层
   工业设备售后文档管理系统示例数据
   ======================================== */

// 产品分类数据
const products = [
  {
    id: 'p1',
    name: 'ZX-200 智能水泵',
    model: 'ZX-200',
    category: '流体设备',
    description: '高效节能智能离心泵，适用于工业供水、暖通空调系统',
    icon: '💧',
    status: 'active',
    docCount: 8,
    videoCount: 5,
    createdAt: '2025-03-15'
  },
  {
    id: 'p2',
    name: 'ZX-M30 伺服电机',
    model: 'ZX-M30',
    category: '动力传动',
    description: '高精度交流伺服电机，额定功率3kW，支持多种通信协议',
    icon: '⚡',
    status: 'active',
    docCount: 12,
    videoCount: 8,
    createdAt: '2025-01-20'
  },
  {
    id: 'p3',
    name: 'ZX-PLC500 可编程控制器',
    model: 'ZX-PLC500',
    category: '自动化控制',
    description: '模块化中型PLC，支持最多512点IO，适用于复杂生产线',
    icon: '🔌',
    status: 'active',
    docCount: 15,
    videoCount: 10,
    createdAt: '2024-11-10'
  },
  {
    id: 'p4',
    name: 'ZX-HMI10 人机界面',
    model: 'ZX-HMI10',
    category: '自动化控制',
    description: '10寸工业级触摸屏，支持多协议通讯，IP65防护',
    icon: '📱',
    status: 'active',
    docCount: 6,
    videoCount: 4,
    createdAt: '2025-05-08'
  },
  {
    id: 'p5',
    name: 'ZX-RED50 减速机',
    model: 'ZX-RED50',
    category: '动力传动',
    description: '精密行星减速机，减速比50:1，背隙≤3弧分',
    icon: '⚙️',
    status: 'active',
    docCount: 5,
    videoCount: 3,
    createdAt: '2025-06-22'
  },
  {
    id: 'p6',
    name: 'ZX-VFD75 变频器',
    model: 'ZX-VFD75',
    category: '动力传动',
    description: '75kW通用矢量变频器，支持永磁同步电机驱动',
    icon: '🔋',
    status: 'developing',
    docCount: 3,
    videoCount: 1,
    createdAt: '2026-03-01'
  },
  {
    id: 'p7',
    name: 'ZX-SEN200 压力传感器',
    model: 'ZX-SEN200',
    category: '仪器仪表',
    description: '高精度扩散硅压力变送器，4-20mA输出，IP67防护',
    icon: '📊',
    status: 'active',
    docCount: 4,
    videoCount: 2,
    createdAt: '2025-08-14'
  },
  {
    id: 'p8',
    name: 'ZX-ROB6 六轴机器人',
    category: '机器人',
    description: '6kg负载六轴工业机器人，臂展900mm，适用于装配搬运',
    icon: '🤖',
    status: 'developing',
    docCount: 2,
    videoCount: 0,
    createdAt: '2026-05-10'
  }
];

// 文档类型
const docTypes = [
  { id: 'guide', name: '维修指南', icon: '🔧', color: 'guide' },
  { id: 'manual', name: '用户手册', icon: '📖', color: 'manual' },
  { id: 'faq', name: '常见问题', icon: '❓', color: 'faq' },
  { id: 'install', name: '安装指南', icon: '📦', color: 'guide' },
  { id: 'spec', name: '技术规格', icon: '📋', color: 'manual' }
];

// 视频分类
const videoCategories = [
  { id: 'usage', name: '使用视频', icon: '▶️', color: 'usage' },
  { id: 'maintenance', name: '维护视频', icon: '🔧', color: 'maintenance' },
  { id: 'disassembly', name: '拆装视频', icon: '🔩', color: 'disassembly' },
  { id: 'troubleshooting', name: '排查视频', icon: '🔍', color: 'troubleshooting' }
];

// 文档数据
const documents = [
  {
    id: 'd1',
    productId: 'p1',
    type: 'guide',
    title: 'ZX-200 水泵机械密封更换指南',
    description: '详细介绍ZX-200系列智能水泵机械密封的拆卸、检查与更换步骤',
    difficulty: 'medium',
    estimatedTime: '45分钟',
    tools: ['活动扳手', '十字螺丝刀', '内六角扳手套装', '橡胶锤', '塞尺', '千分表'],
    parts: ['机械密封组件（型号：MS-200）', 'O型密封圈', '润滑脂'],
    status: 'published',
    progress: 100,
    author: '张工',
    pages: 3,
    views: 1256,
    updatedAt: '2026-08-15',
    createdAt: '2025-04-20',
    content: [
      {
        page: 1,
        html: `<h1>ZX-200 水泵机械密封更换指南</h1>
<p>本文档详细介绍 ZX-200 系列智能水泵机械密封的更换流程。请在开始操作前仔细阅读安全注意事项。</p>

<div class="doc-warning-box">
  <div class="box-title">⚠️ 安全警告</div>
  <div class="box-content">
    <ul>
      <li>操作前必须切断电源并挂警示牌</li>
      <li>关闭进出口阀门，排空泵腔内液体</li>
      <li>佩戴防护手套和护目镜</li>
      <li>高温状态下禁止操作，需冷却至室温</li>
    </ul>
  </div>
</div>

<h2>1. 适用范围</h2>
<p>本指南适用于 ZX-200 系列所有型号智能离心泵的机械密封更换，包括：</p>
<ul>
  <li>ZX-200-50（5.5kW）</li>
  <li>ZX-200-80（7.5kW）</li>
  <li>ZX-200-100（11kW）</li>
  <li>ZX-200-150（15kW）</li>
</ul>

<h2>2. 所需工具</h2>
<div class="doc-info-box">
  <div class="box-title">🛠️ 工具清单</div>
  <div class="box-content">
    内六角扳手套装、活动扳手（12寸）、拉马器、橡胶锤、密封胶、无尘布、工业酒精
  </div>
</div>`
      },
      {
        page: 2,
        html: `<h1>拆卸步骤</h1>

<h2>3. 泵体拆卸</h2>

<h3>3.1 拆卸泵盖</h3>
<p>使用内六角扳手依次松开泵盖固定螺栓（共8颗M10螺栓），注意按照对角线顺序逐步松开，防止泵盖受力不均导致密封面损伤。</p>

<div class="doc-image-wrapper">
  <svg width="500" height="300" viewBox="0 0 500 300" xmlns="http://www.w3.org/2000/svg">
    <rect x="50" y="80" width="400" height="160" rx="10" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2"/>
    <circle cx="100" cy="120" r="8" fill="#4b5563"/>
    <circle cx="100" cy="200" r="8" fill="#4b5563"/>
    <circle cx="400" cy="120" r="8" fill="#4b5563"/>
    <circle cx="400" cy="200" r="8" fill="#4b5563"/>
    <circle cx="200" cy="100" r="8" fill="#4b5563"/>
    <circle cx="300" cy="100" r="8" fill="#4b5563"/>
    <circle cx="200" cy="220" r="8" fill="#4b5563"/>
    <circle cx="300" cy="220" r="8" fill="#4b5563"/>
    <ellipse cx="250" cy="160" rx="60" ry="50" fill="#1a56db" opacity="0.3"/>
    <text x="250" y="165" text-anchor="middle" fill="#1e40af" font-size="14" font-weight="bold">机械密封</text>
    <text x="250" y="60" text-anchor="middle" fill="#374151" font-size="14">泵盖螺栓位置示意图</text>
  </svg>
  <div class="doc-image-caption">图 3-1 泵盖螺栓位置（对角线拆卸顺序）</div>
</div>

<h3>3.2 取出叶轮</h3>
<p>拆下泵盖后，使用专用拉马器将叶轮从轴上拉出。注意保护叶轮密封面，避免磕碰。</p>

<div class="doc-info-box">
  <div class="box-title">💡 操作提示</div>
  <div class="box-content">
    如叶轮拆卸困难，可在轴与叶轮配合处滴入少量松动剂，静置15分钟后再尝试拆卸。
  </div>
</div>`
      },
      {
        page: 3,
        html: `<h1>安装与调试</h1>

<h2>4. 机械密封安装</h2>

<h3>4.1 静环安装</h3>
<p>将新的静环密封圈涂抹少量润滑脂，沿轴向推入密封腔，确保安装到位。静环密封面必须与轴线垂直。</p>

<h3>4.2 动环安装</h3>
<p>将动环组件套入轴上，使用专用工具将其推至规定位置。注意动环弹簧压缩量应控制在 4±0.5mm。</p>

<div class="doc-warning-box">
  <div class="box-title">⚠️ 注意事项</div>
  <div class="box-content">
    动环和静环的密封面为高精度研磨面，严禁用手直接触摸。安装前应用无尘布蘸酒精轻轻擦拭。
  </div>
</div>

<h2>5. 装配与调试</h2>
<ol>
  <li>按照拆卸相反顺序重新装配各部件</li>
  <li>泵盖螺栓按对角线顺序分3次均匀拧紧，最终扭矩为 35N·m</li>
  <li>手动盘车，检查转动是否灵活，无卡滞现象</li>
  <li>接通电源，点动试车，确认转向正确</li>
  <li>连续运行30分钟，检查密封处有无泄漏</li>
</ol>

<h2>6. 验收标准</h2>
<ul>
  <li>运行平稳，无异响</li>
  <li>机械密封泄漏量 ≤ 5滴/分钟（初始允许）</li>
  <li>连续运行2小时后泄漏应逐渐减少至无泄漏</li>
  <li>轴承温升 ≤ 40°C</li>
</ul>

<div class="doc-attachment" onclick="alert('下载附件：机械密封零件图.pdf')">
  <div class="doc-attachment-icon">📄</div>
  <div class="doc-attachment-info">
    <div class="doc-attachment-name">ZX-200机械密封零件图.pdf</div>
    <div class="doc-attachment-size">PDF · 2.4 MB</div>
  </div>
  <span>⬇</span>
</div>`
      }
    ]
  },
  {
    id: 'd2',
    productId: 'p1',
    type: 'manual',
    title: 'ZX-200 智能水泵用户手册',
    description: '完整的产品使用说明，包含安装、操作、维护等全流程指导',
    difficulty: 'easy',
    estimatedTime: '—',
    tools: [],
    parts: [],
    status: 'published',
    progress: 100,
    author: '李工',
    pages: 5,
    views: 3420,
    updatedAt: '2026-07-20',
    createdAt: '2025-03-20',
    content: [
      {
        page: 1,
        html: `<h1>ZX-200 智能水泵用户手册</h1>
<p><strong>版本：</strong>V3.2 &nbsp;&nbsp; <strong>发布日期：</strong>2026年7月20日</p>

<h2>目录</h2>
<ol>
  <li>产品概述</li>
  <li>技术参数</li>
  <li>安装说明</li>
  <li>操作指南</li>
  <li>维护保养</li>
  <li>故障排除</li>
</ol>

<h2>1. 产品概述</h2>
<p>ZX-200 系列智能水泵是我司自主研发的新一代高效节能离心泵，采用先进的水力模型设计和智能控制系统，广泛应用于：</p>
<ul>
  <li>工业供水与循环系统</li>
  <li>暖通空调（HVAC）系统</li>
  <li>建筑给排水</li>
  <li>水处理系统</li>
</ul>`
      },
      {
        page: 2,
        html: `<h1>技术参数</h1>

<h2>2. 技术参数</h2>

<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <tr style="background:#f3f4f6;">
    <th style="padding:10px;border:1px solid #d1d5db;text-align:left;">参数项目</th>
    <th style="padding:10px;border:1px solid #d1d5db;text-align:left;">ZX-200-50</th>
    <th style="padding:10px;border:1px solid #d1d5db;text-align:left;">ZX-200-80</th>
    <th style="padding:10px;border:1px solid #d1d5db;text-align:left;">ZX-200-100</th>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;">额定流量</td>
    <td style="padding:10px;border:1px solid #d1d5db;">50 m³/h</td>
    <td style="padding:10px;border:1px solid #d1d5db;">80 m³/h</td>
    <td style="padding:10px;border:1px solid #d1d5db;">100 m³/h</td>
  </tr>
  <tr style="background:#f9fafb;">
    <td style="padding:10px;border:1px solid #d1d5db;">额定扬程</td>
    <td style="padding:10px;border:1px solid #d1d5db;">32 m</td>
    <td style="padding:10px;border:1px solid #d1d5db;">40 m</td>
    <td style="padding:10px;border:1px solid #d1d5db;">50 m</td>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;">电机功率</td>
    <td style="padding:10px;border:1px solid #d1d5db;">5.5 kW</td>
    <td style="padding:10px;border:1px solid #d1d5db;">7.5 kW</td>
    <td style="padding:10px;border:1px solid #d1d5db;">11 kW</td>
  </tr>
  <tr style="background:#f9fafb;">
    <td style="padding:10px;border:1px solid #d1d5db;">额定转速</td>
    <td style="padding:10px;border:1px solid #d1d5db;">2900 rpm</td>
    <td style="padding:10px;border:1px solid #d1d5db;">2900 rpm</td>
    <td style="padding:10px;border:1px solid #d1d5db;">2900 rpm</td>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;">进出口径</td>
    <td style="padding:10px;border:1px solid #d1d5db;">DN65</td>
    <td style="padding:10px;border:1px solid #d1d5db;">DN80</td>
    <td style="padding:10px;border:1px solid #d1d5db;">DN100</td>
  </tr>
</table>`
      },
      {
        page: 3,
        html: `<h1>安装说明</h1>
<h2>3. 安装说明</h2>
<h3>3.1 安装环境要求</h3>
<ul>
  <li>环境温度：-10°C ~ +40°C</li>
  <li>相对湿度：≤ 95%（无凝露）</li>
  <li>海拔高度：≤ 1000m（超过需降额使用）</li>
  <li>安装位置：室内或有遮蔽的场所</li>
</ul>
<h3>3.2 基础安装</h3>
<p>水泵应安装在坚固的混凝土基础上，基础重量应不小于水泵重量的3倍。地脚螺栓预埋深度不小于300mm。</p>`
      },
      {
        page: 4,
        html: `<h1>操作指南</h1>
<h2>4. 操作指南</h2>
<h3>4.1 启动前检查</h3>
<ol>
  <li>检查电源电压是否正常</li>
  <li>检查泵腔是否已注满液体（严禁干转）</li>
  <li>手动盘车，确认转动灵活</li>
  <li>确认进出口阀门处于正确状态</li>
</ol>
<h3>4.2 智能控制面板</h3>
<p>ZX-200配备7寸彩色触摸屏控制器，支持以下功能：</p>
<ul>
  <li>实时压力/流量显示</li>
  <li>恒压供水模式</li>
  <li>定时启停控制</li>
  <li>故障报警与记录</li>
  <li>远程监控接口（RS485/MODBUS）</li>
</ul>`
      },
      {
        page: 5,
        html: `<h1>维护与故障排除</h1>
<h2>5. 维护保养</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <tr style="background:#f3f4f6;">
    <th style="padding:10px;border:1px solid #d1d5db;">维护项目</th>
    <th style="padding:10px;border:1px solid #d1d5db;">周期</th>
    <th style="padding:10px;border:1px solid #d1d5db;">说明</th>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;">外观检查</td>
    <td style="padding:10px;border:1px solid #d1d5db;">每月</td>
    <td style="padding:10px;border:1px solid #d1d5db;">检查有无泄漏、异响</td>
  </tr>
  <tr style="background:#f9fafb;">
    <td style="padding:10px;border:1px solid #d1d5db;">轴承润滑</td>
    <td style="padding:10px;border:1px solid #d1d5db;">每半年</td>
    <td style="padding:10px;border:1px solid #d1d5db;">更换锂基润滑脂</td>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;">机械密封检查</td>
    <td style="padding:10px;border:1px solid #d1d5db;">每年</td>
    <td style="padding:10px;border:1px solid #d1d5db;">检查磨损情况，必要时更换</td>
  </tr>
</table>
<h2>6. 故障排除</h2>
<p>如遇故障，请先查阅故障代码表，或联系我司24小时服务热线：400-888-9999</p>`
      }
    ]
  },
  {
    id: 'd3',
    productId: 'p1',
    type: 'faq',
    title: 'ZX-200 水泵常见问题解答',
    description: '收集客户最常遇到的问题及解决方案，快速排障指南',
    difficulty: 'easy',
    estimatedTime: '10-30分钟',
    tools: ['万用表'],
    parts: [],
    status: 'published',
    progress: 100,
    author: '王工',
    pages: 1,
    views: 2180,
    updatedAt: '2026-08-01',
    createdAt: '2025-06-10',
    content: [
      {
        page: 1,
        html: `<h1>ZX-200 水泵常见问题解答</h1>

<h2>Q1: 水泵启动后不出水怎么办？</h2>
<p><strong>可能原因及解决方法：</strong></p>
<ol>
  <li><strong>泵腔未注满水</strong> — 打开排气阀，向泵腔内注满引水</li>
  <li><strong>吸入管路漏气</strong> — 检查各法兰连接，更换密封垫</li>
  <li><strong>叶轮堵塞</strong> — 拆卸泵盖，清理叶轮内异物</li>
  <li><strong>转向错误</strong> — 调换三相电源任意两相</li>
</ol>

<h2>Q2: 运行中电流过高是什么原因？</h2>
<p><strong>可能原因及解决方法：</strong></p>
<ul>
  <li>流量过大（扬程偏低）— 适当关小出口阀门</li>
  <li>轴承损坏 — 检查轴承，必要时更换</li>
  <li>叶轮与泵壳摩擦 — 检查装配间隙</li>
  <li>电源电压偏低 — 检查供电系统</li>
</ul>

<h2>Q3: 水泵振动大、有异响</h2>
<p><strong>可能原因及解决方法：</strong></p>
<ul>
  <li>地脚螺栓松动 — 重新紧固</li>
  <li>叶轮不平衡 — 做动平衡校正</li>
  <li>轴承磨损 — 更换轴承</li>
  <li>联轴器不对中 — 重新找正</li>
</ul>

<h2>Q4: 智能控制面板显示E01故障代码</h2>
<p><strong>E01 = 过载保护</strong></p>
<p>处理方法：</p>
<ol>
  <li>检查是否机械卡滞</li>
  <li>确认电流设定值是否正确</li>
  <li>减少运行负载，关小出口阀门</li>
  <li>如频繁报警，请联系技术支持</li>
</ol>

<div class="doc-info-box">
  <div class="box-title">📞 技术支持</div>
  <div class="box-content">
    24小时服务热线：400-888-9999 &nbsp;|&nbsp; 邮箱：support@zhixiu.com
  </div>
</div>`
      }
    ]
  },
  {
    id: 'd4',
    productId: 'p2',
    type: 'guide',
    title: 'ZX-M30 伺服电机调试手册',
    description: '从接线到参数调试的完整指南，包含位置/速度/转矩三种控制模式',
    difficulty: 'hard',
    estimatedTime: '2小时',
    tools: ['示波器', '万用表', '螺丝刀套装', '调试电缆', '笔记本电脑'],
    parts: [],
    status: 'published',
    progress: 100,
    author: '陈工',
    pages: 4,
    views: 980,
    updatedAt: '2026-06-15',
    createdAt: '2025-02-10',
    content: [
      {
        page: 1,
        html: `<h1>ZX-M30 伺服电机调试手册</h1>
<p>本文档介绍 ZX-M30 系列交流伺服电机驱动器的调试方法，适用于 0.4kW ~ 3kW 全系列产品。</p>

<h2>1. 接线说明</h2>
<h3>1.1 主电路接线</h3>
<ul>
  <li>L1/L2/L3：三相AC220V电源输入</li>
  <li>U/V/W：伺服电机动力线输出</li>
  <li>PE：保护接地</li>
</ul>

<div class="doc-warning-box">
  <div class="box-title">⚠️ 安全警告</div>
  <div class="box-content">
    接线前请确保电源完全断开，并等待至少5分钟，待内部电容放电完毕后再操作。
  </div>
</div>`
      },
      {
        page: 2,
        html: `<h1>参数设置</h1>
<h2>2. 基本参数设置</h2>
<h3>2.1 控制模式选择</h3>
<p>通过参数 P0.00 设置控制模式：</p>
<ul>
  <li>0：位置控制模式</li>
  <li>1：速度控制模式</li>
  <li>2：转矩控制模式</li>
</ul>
<h3>2.2 电子齿轮比</h3>
<p>参数 P0.08（分子）和 P0.09（分母）设置电子齿轮比，计算公式：</p>
<p style="text-align:center;font-family:monospace;background:#f3f4f6;padding:10px;border-radius:4px;">
  脉冲当量 = 电机一转所需脉冲数 / (P0.08 / P0.09)
</p>`
      },
      {
        page: 3,
        html: `<h1>增益调整</h1>
<h2>3. 增益调整</h2>
<h3>3.1 自动增益调整</h3>
<p>驱动器支持自动增益调谐功能，操作步骤：</p>
<ol>
  <li>设置 P1.00 = 1（开启自动调谐）</li>
  <li>使能伺服，电机将自动执行加减速运动</li>
  <li>等待约30秒，自动计算最佳增益参数</li>
  <li>设置 P1.00 = 0，保存参数</li>
</ol>
<div class="doc-info-box">
  <div class="box-title">💡 提示</div>
  <div class="box-content">
    自动调谐时请确保负载已连接，且运动范围内无障碍物。
  </div>
</div>`
      },
      {
        page: 4,
        html: `<h1>故障诊断</h1>
<h2>4. 常见故障代码</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <tr style="background:#f3f4f6;">
    <th style="padding:10px;border:1px solid #d1d5db;">故障代码</th>
    <th style="padding:10px;border:1px solid #d1d5db;">故障名称</th>
    <th style="padding:10px;border:1px solid #d1d5db;">可能原因</th>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;">E.AL01</td>
    <td style="padding:10px;border:1px solid #d1d5db;">过流</td>
    <td style="padding:10px;border:1px solid #d1d5db;">U/V/W接线错误、负载过大</td>
  </tr>
  <tr style="background:#f9fafb;">
    <td style="padding:10px;border:1px solid #d1d5db;">E.AL03</td>
    <td style="padding:10px;border:1px solid #d1d5db;">过压</td>
    <td style="padding:10px;border:1px solid #d1d5db;">电源电压过高、减速过快</td>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;">E.AL10</td>
    <td style="padding:10px;border:1px solid #d1d5db;">编码器异常</td>
    <td style="padding:10px;border:1px solid #d1d5db;">编码器线接触不良、损坏</td>
  </tr>
</table>`
      }
    ]
  },
  {
    id: 'd5',
    productId: 'p3',
    type: 'manual',
    title: 'ZX-PLC500 编程手册',
    description: '完整的PLC编程指南，包含指令集、通信协议、示例程序',
    status: 'published',
    progress: 100,
    author: '赵工',
    pages: 6,
    views: 1560,
    difficulty: 'advanced',
    estimatedTime: 90,
    tools: ['编程电脑', 'ZX-Works V3.0 软件', 'USB 编程电缆'],
    parts: ['ZX-PLC500 主机'],
    startDate: '2024-12-01',
    dueDate: '2025-02-28',
    actualFinishDate: '2025-02-15',
    updatedAt: '2026-05-10',
    createdAt: '2024-12-01',
    content: [
      {
        page: 1,
        html: `<h1>ZX-PLC500 编程手册</h1>
<p>本手册详细介绍 ZX-PLC500 系列可编程控制器的编程方法和指令系统。</p>
<h2>1. 编程软件</h2>
<p>使用 ZX-Works V3.0 编程软件，支持以下编程语言：</p>
<ul>
  <li>梯形图（LD）</li>
  <li>指令表（IL）</li>
  <li>结构化文本（ST）</li>
  <li>功能块图（FBD）</li>
  <li>顺序功能图（SFC）</li>
</ul>`
      },
      {
        page: 2,
        html: `<h1>基本指令</h1>
<h2>2. 基本逻辑指令</h2>
<table style="width:100%;border-collapse:collapse;margin:16px 0;">
  <tr style="background:#f3f4f6;">
    <th style="padding:10px;border:1px solid #d1d5db;">指令</th>
    <th style="padding:10px;border:1px solid #d1d5db;">功能</th>
    <th style="padding:10px;border:1px solid #d1d5db;">操作数</th>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;font-family:monospace;">LD</td>
    <td style="padding:10px;border:1px solid #d1d5db;">取常开触点</td>
    <td style="padding:10px;border:1px solid #d1d5db;">X, Y, M, S, T, C</td>
  </tr>
  <tr style="background:#f9fafb;">
    <td style="padding:10px;border:1px solid #d1d5db;font-family:monospace;">LDI</td>
    <td style="padding:10px;border:1px solid #d1d5db;">取常闭触点</td>
    <td style="padding:10px;border:1px solid #d1d5db;">X, Y, M, S, T, C</td>
  </tr>
  <tr>
    <td style="padding:10px;border:1px solid #d1d5db;font-family:monospace;">OUT</td>
    <td style="padding:10px;border:1px solid #d1d5db;">线圈输出</td>
    <td style="padding:10px;border:1px solid #d1d5db;">Y, M, S, T, C</td>
  </tr>
</table>`
      },
      { page: 3, html: '<h1>功能指令</h1><h2>3. 应用指令</h2><p>包含数据传送、算术运算、比较、移位、程序控制等100多条应用指令...</p>' },
      { page: 4, html: '<h1>通信设置</h1><h2>4. 通信功能</h2><p>支持 MODBUS-RTU、PROFINET、EtherNet/IP 等多种通信协议...</p>' },
      { page: 5, html: '<h1>特殊功能模块</h1><h2>5. 模拟量模块</h2><p>ZX-PLC500支持多种特殊功能模块：模拟量输入/输出、高速计数、温度测量等...</p>' },
      { page: 6, html: '<h1>故障诊断与维护</h1><h2>6. 故障代码</h2><p>详细的故障代码表和排除方法...</p>' }
    ]
  },
  {
    id: 'd6',
    productId: 'p6',
    type: 'manual',
    title: 'ZX-VFD75 变频器用户手册',
    description: '75kW矢量变频器使用说明，开发中，预计9月底发布',
    status: 'developing',
    progress: 45,
    author: '刘工',
    pages: 2,
    views: 0,
    updatedAt: '2026-08-28',
    createdAt: '2026-04-01',
    content: [
      { page: 1, html: '<h1>ZX-VFD75 变频器用户手册</h1><p>本文档正在编写中...</p><h2>1. 产品概述</h2><p>ZX-VFD75是新一代高性能矢量变频器...</p>' },
      { page: 2, html: '<h1>参数表</h1><p>参数表待完善...</p>' }
    ]
  },
  {
    id: 'd7',
    productId: 'p8',
    type: 'guide',
    title: 'ZX-ROB6 机器人安装调试指南',
    description: '六轴工业机器人安装调试全流程，规划中',
    status: 'planning',
    progress: 15,
    author: '周工',
    pages: 1,
    views: 0,
    updatedAt: '2026-08-20',
    createdAt: '2026-06-15',
    content: [
      { page: 1, html: '<h1>ZX-ROB6 机器人安装调试指南</h1><p>文档规划中，预计2026年10月完成...</p>' }
    ]
  },
  {
    id: 'd8',
    productId: 'p4',
    type: 'install',
    title: 'ZX-HMI10 触摸屏安装指南',
    description: '工业触摸屏的安装、接线与首次配置',
    status: 'published',
    progress: 100,
    author: '吴工',
    pages: 2,
    views: 680,
    updatedAt: '2026-07-05',
    createdAt: '2025-06-01',
    content: [
      { page: 1, html: '<h1>ZX-HMI10 安装指南</h1><h2>1. 面板安装</h2><p>在控制柜面板上开孔：260mm × 202mm...</p>' },
      { page: 2, html: '<h1>接线与配置</h1><h2>2. 接线说明</h2><p>电源：DC24V，通信：RS485 / Ethernet...</p>' }
    ]
  },
  {
    id: 'd9',
    productId: 'p2',
    type: 'install',
    title: 'ZX-M30 伺服电机安装指南',
    description: '伺服电机的机械安装与电气接线规范',
    status: 'published',
    progress: 100,
    author: '陈工',
    pages: 2,
    views: 1120,
    difficulty: 'medium',
    estimatedTime: 60,
    tools: ['内六角扳手', '扭矩扳手', '万用表'],
    parts: ['伺服电机', '联轴器', '安装法兰'],
    startDate: '2025-02-15',
    dueDate: '2025-03-20',
    actualFinishDate: '2025-03-10',
    updatedAt: '2026-04-20',
    createdAt: '2025-02-15',
    content: [
      { page: 1, html: '<h1>ZX-M30 伺服电机安装指南</h1><h2>1. 机械安装</h2><p>安装方式：法兰安装 / 脚座安装...</p>' },
      { page: 2, html: '<h1>电气接线</h1><h2>2. 动力线接线</h2><p>U/V/W对应连接，PE接地...</p>' }
    ]
  },
  {
    id: 'd10',
    productId: 'p7',
    type: 'spec',
    title: 'ZX-SEN200 压力传感器技术规格书',
    description: '详细的技术参数、电气特性、机械尺寸等规格说明',
    status: 'published',
    progress: 100,
    author: '孙工',
    pages: 2,
    views: 450,
    updatedAt: '2026-03-10',
    createdAt: '2025-09-01',
    content: [
      { page: 1, html: '<h1>ZX-SEN200 技术规格书</h1><h2>1. 技术参数</h2><p>测量范围：0~10MPa / 0~25MPa / 0~60MPa...</p>' },
      { page: 2, html: '<h1>机械尺寸</h1><p>接口：M20×1.5 外螺纹，防护等级：IP67...</p>' }
    ]
  },
  {
    id: 'd11',
    productId: 'p5',
    type: 'guide',
    title: 'ZX-RED50 减速机润滑维护指南',
    description: '减速机润滑油更换周期、操作步骤及注意事项',
    status: 'review',
    progress: 85,
    author: '钱工',
    pages: 2,
    views: 0,
    updatedAt: '2026-09-02',
    createdAt: '2026-01-20',
    content: [
      { page: 1, html: '<h1>ZX-RED50 减速机润滑维护指南</h1><p>文档待审核...</p><h2>1. 润滑脂型号</h2><p>推荐使用 Mobil SHC 630 合成齿轮油...</p>' },
      { page: 2, html: '<h1>换油步骤</h1><h2>2. 换油操作</h2><p>1. 停机冷却至室温... 2. 打开排油孔...（待审核）</p>' }
    ]
  },
  {
    id: 'd12',
    productId: 'p3',
    type: 'faq',
    title: 'ZX-PLC500 常见问题解答',
    description: 'PLC常见通信问题、编程问题及解决方案',
    status: 'published',
    progress: 100,
    author: '赵工',
    pages: 2,
    views: 890,
    updatedAt: '2026-06-30',
    createdAt: '2025-03-15',
    content: [
      { page: 1, html: '<h1>ZX-PLC500 常见问题解答</h1><h2>Q1: 无法连接PLC怎么办？</h2><p>检查通信线、IP地址、串口参数...</p>' },
      { page: 2, html: '<h1>更多常见问题</h1><h2>Q5: PLC如何恢复出厂设置？</h2><p>按住复位键上电，保持10秒...</p>' }
    ]
  }
];

// 视频数据
const videos = [
  {
    id: 'v1',
    productId: 'p1',
    title: 'ZX-200水泵机械密封更换实操视频',
    description: '完整演示机械密封从拆卸到安装的全过程',
    category: 'disassembly',
    duration: '12:35',
    thumbnail: '💧',
    videoType: 'local',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    views: 856,
    status: 'published',
    progress: 100,
    author: '张工',
    updatedAt: '2026-08-10',
    createdAt: '2025-05-20'
  },
  {
    id: 'v2',
    productId: 'p1',
    title: 'ZX-200智能水泵快速安装教程',
    description: '零基础快速上手水泵安装与首次启动',
    category: 'usage',
    duration: '08:20',
    thumbnail: '🔧',
    videoType: 'external',
    videoUrl: 'https://www.bilibili.com/',
    views: 1230,
    status: 'published',
    progress: 100,
    author: '李工',
    updatedAt: '2026-07-15',
    createdAt: '2025-04-10'
  },
  {
    id: 'v3',
    productId: 'p2',
    title: 'ZX-M30伺服电机位置模式调试',
    description: '详细讲解位置控制模式的参数设置与调试',
    category: 'usage',
    duration: '15:48',
    thumbnail: '⚡',
    videoType: 'local',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    views: 620,
    status: 'published',
    progress: 100,
    author: '陈工',
    updatedAt: '2026-06-20',
    createdAt: '2025-03-25'
  },
  {
    id: 'v4',
    productId: 'p2',
    title: '伺服电机增益调整实战',
    description: '手把手教你调整伺服增益参数，解决振动问题',
    category: 'troubleshooting',
    duration: '18:12',
    thumbnail: '📈',
    videoType: 'external',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    views: 780,
    status: 'published',
    progress: 100,
    author: '陈工',
    updatedAt: '2026-05-25',
    createdAt: '2025-08-10'
  },
  {
    id: 'v5',
    productId: 'p3',
    title: 'ZX-PLC500入门到精通',
    description: 'PLC编程入门系列教程第一讲',
    category: 'usage',
    duration: '25:30',
    thumbnail: '🔌',
    videoType: 'local',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    views: 1580,
    status: 'published',
    progress: 100,
    author: '赵工',
    updatedAt: '2026-04-10',
    createdAt: '2025-02-01'
  },
  {
    id: 'v6',
    productId: 'p3',
    title: 'MODBUS通信配置实战',
    description: 'PLC与触摸屏MODBUS-RTU通信配置',
    category: 'maintenance',
    duration: '14:55',
    thumbnail: '📡',
    videoType: 'external',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    views: 940,
    status: 'published',
    progress: 100,
    author: '赵工',
    updatedAt: '2026-03-20',
    createdAt: '2025-07-15'
  },
  {
    id: 'v7',
    productId: 'p6',
    title: 'ZX-VFD75变频器功能介绍',
    description: '新功能抢先看，开发中',
    category: 'usage',
    duration: '待录制',
    thumbnail: '🔋',
    videoType: 'local',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    views: 0,
    status: 'developing',
    progress: 30,
    author: '刘工',
    updatedAt: '2026-08-25',
    createdAt: '2026-05-10'
  },
  {
    id: 'v8',
    productId: 'p4',
    title: 'ZX-HMI10画面组态教程',
    description: '触摸屏画面设计与组态软件使用',
    category: 'usage',
    duration: '22:10',
    thumbnail: '📱',
    videoType: 'local',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
    views: 560,
    status: 'published',
    progress: 100,
    author: '吴工',
    updatedAt: '2026-07-28',
    createdAt: '2025-09-01'
  },
  {
    id: 'v9',
    productId: 'p8',
    title: 'ZX-ROB6机器人开箱视频',
    description: '六轴机器人开箱与外观介绍，规划中',
    category: 'usage',
    duration: '规划中',
    thumbnail: '🤖',
    videoType: 'local',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
    views: 0,
    status: 'planning',
    progress: 10,
    author: '周工',
    updatedAt: '2026-08-15',
    createdAt: '2026-07-01'
  },
  {
    id: 'v10',
    productId: 'p5',
    title: '减速机安装对中教程',
    description: '精密减速机安装找正方法',
    category: 'disassembly',
    duration: '10:45',
    thumbnail: '⚙️',
    videoType: 'local',
    videoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
    views: 320,
    status: 'review',
    progress: 90,
    author: '钱工',
    updatedAt: '2026-09-01',
    createdAt: '2026-02-20'
  }
];

// 活动日志
const activities = [
  { id: 'a1', user: '张工', action: '发布了文档', target: 'ZX-200 水泵机械密封更换指南', time: '2小时前', avatar: '张' },
  { id: 'a2', user: '陈工', action: '更新了视频', target: '伺服电机增益调整实战', time: '4小时前', avatar: '陈' },
  { id: 'a3', user: '刘工', action: '创建了文档', target: 'ZX-VFD75 变频器参数手册', time: '昨天 16:30', avatar: '刘' },
  { id: 'a4', user: '赵工', action: '提交了审核', target: 'ZX-PLC500 MODBUS通信指南', time: '昨天 14:20', avatar: '赵' },
  { id: 'a5', user: '周工', action: '评论了文档', target: 'ZX-ROB6 机器人安全规范', time: '2天前', avatar: '周' },
  { id: 'a6', user: '钱工', action: '上传了视频', target: '减速机安装对中教程', time: '3天前', avatar: '钱' }
];

// 团队成员
const teamMembers = [
  { id: 'u1', name: '张工', role: '技术文档工程师', avatar: '张', docs: 8, status: 'online' },
  { id: 'u2', name: '李工', role: '技术文档工程师', avatar: '李', docs: 6, status: 'online' },
  { id: 'u3', name: '王工', role: '售后技术支持', avatar: '王', docs: 4, status: 'offline' },
  { id: 'u4', name: '陈工', role: '伺服系统工程师', avatar: '陈', docs: 7, status: 'online' },
  { id: 'u5', name: '赵工', role: 'PLC工程师', avatar: '赵', docs: 10, status: 'online' },
  { id: 'u6', name: '刘工', role: '变频器工程师', avatar: '刘', docs: 3, status: 'busy' },
  { id: 'u7', name: '周工', role: '机器人工程师', avatar: '周', docs: 2, status: 'online' },
  { id: 'u8', name: '钱工', role: '机械工程师', avatar: '钱', docs: 5, status: 'offline' }
];

// ========================================
// 用户账号系统（root_admin / admin / member）
// ========================================
const DEFAULT_USERS = [
  {
    id: 'u_root',
    username: 'admin',
    // 公开演示账号不保存固定密码；密码与用户名相同，仅用于体验流程。
    isDemo: true,
    role: 'root_admin',
    name: '系统管理员',
    email: 'admin@gaoxian-robot.com',
    department: '管理部',
    createdAt: '2026-01-01',
    lastLogin: null
  },
  {
    id: 'u_admin1',
    username: 'manager',
    isDemo: true,
    role: 'admin',
    name: '张工',
    email: 'zhang@gaoxian-robot.com',
    department: '技术部',
    createdAt: '2026-02-15',
    createdBy: 'u_root',
    lastLogin: null
  },
  {
    id: 'u_member1',
    username: 'member',
    isDemo: true,
    role: 'member',
    name: '访客',
    email: 'guest@gaoxian-robot.com',
    department: '客户',
    createdAt: '2026-03-10',
    createdBy: 'u_root',
    lastLogin: null
  }
];

const USERS_STORAGE_KEY = 'zhixiu_users_v1';

function loadUsers() {
  try {
    const saved = localStorage.getItem(USERS_STORAGE_KEY);
    if (saved) {
      const users = JSON.parse(saved);
      // 确保根管理员始终存在
      if (!users.find(u => u.role === 'root_admin')) {
        users.unshift(DEFAULT_USERS[0]);
      }
      // 兼容老数据：如果没有默认管理员账号，添加演示账号
      DEFAULT_USERS.forEach(defaultU => {
        if (!users.find(u => u.username === defaultU.username)) {
          users.push(defaultU);
        }
      });
      return users;
    }
  } catch (e) { /* ignore */ }
  return [...DEFAULT_USERS];
}

function saveUsers() {
  try {
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  } catch (e) { /* ignore */ }
}

const users = loadUsers();

// ========================================
// localStorage 持久化存储
// ========================================
const STORAGE_KEY = 'zhixiu_doc_data_v1';

function loadFromStorage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const data = JSON.parse(saved);
      if (data.documents && data.documents.length > 0) {
        // 用存储的数据覆盖默认数据
        for (let i = 0; i < data.documents.length; i++) {
          const existingIdx = documents.findIndex(d => d.id === data.documents[i].id);
          // 兼容旧数据：补齐新字段默认值
          if (!data.documents[i].difficulty) data.documents[i].difficulty = 'medium';
          if (!data.documents[i].estimatedTime) data.documents[i].estimatedTime = '30分钟';
          if (!data.documents[i].tools) data.documents[i].tools = [];
          if (!data.documents[i].parts) data.documents[i].parts = [];
          if (!data.documents[i].startDate) data.documents[i].startDate = data.documents[i].createdAt || '';
          if (!data.documents[i].dueDate) data.documents[i].dueDate = '';
          if (!data.documents[i].actualFinishDate) data.documents[i].actualFinishDate = data.documents[i].status === 'published' ? (data.documents[i].updatedAt || '') : '';
          if (existingIdx !== -1) {
            documents[existingIdx] = data.documents[i];
          } else {
            documents.push(data.documents[i]);
          }
        }
      }
      if (data.videos && data.videos.length > 0) {
        for (let i = 0; i < data.videos.length; i++) {
          const existingIdx = videos.findIndex(v => v.id === data.videos[i].id);
          // 兼容旧数据：没有category字段时默认设为usage
          if (!data.videos[i].category) {
            data.videos[i].category = 'usage';
          }
          if (!data.videos[i].startDate) data.videos[i].startDate = data.videos[i].createdAt || '';
          if (!data.videos[i].dueDate) data.videos[i].dueDate = '';
          if (!data.videos[i].actualFinishDate) data.videos[i].actualFinishDate = data.videos[i].status === 'published' ? (data.videos[i].updatedAt || '') : '';
          if (existingIdx !== -1) {
            videos[existingIdx] = data.videos[i];
          } else {
            videos.push(data.videos[i]);
          }
        }
      }
      if (data.activities && data.activities.length > 0) {
        activities.length = 0;
        activities.push(...data.activities);
      }
      return true;
    }
  } catch (e) {
    console.warn('从本地存储加载数据失败:', e);
  }
  return false;
}

function saveToStorage() {
  try {
    const data = {
      documents: documents,
      videos: videos,
      activities: activities,
      savedAt: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (e) {
    console.warn('保存到本地存储失败:', e);
  }
}

// 页面加载时尝试恢复数据
loadFromStorage();

// 确保所有文档/视频都有时间字段（兼容默认数据）
(function ensureDateFields() {
  documents.forEach(d => {
    if (!d.startDate) d.startDate = d.createdAt || '';
    if (!d.dueDate) d.dueDate = '';
    if (!d.actualFinishDate) d.actualFinishDate = d.status === 'published' ? (d.updatedAt || '') : '';
  });
  videos.forEach(v => {
    if (!v.startDate) v.startDate = v.createdAt || '';
    if (!v.dueDate) v.dueDate = '';
    if (!v.actualFinishDate) v.actualFinishDate = v.status === 'published' ? (v.updatedAt || '') : '';
  });
})();

// ========================================
// 数据存储管理
// ========================================
const DataStore = {
  // 产品上的数量字段是历史展示数据，不能作为事实来源。文档/视频被增删或
  // 移动到其他产品后，统一在读取时按实际关联数据计算，避免列表和详情不一致。
  getProducts: () => products.map(p => ({
    ...p,
    docCount: documents.filter(d => d.productId === p.id).length,
    videoCount: videos.filter(v => v.productId === p.id).length
  })),
  getDocuments: () => [...documents],
  getVideos: () => [...videos],
  getDocTypes: () => [...docTypes],
  getVideoCategories: () => [...videoCategories],
  getActivities: () => [...activities],
  getTeamMembers: () => [...teamMembers],

  getProductById: (id) => {
    const product = products.find(p => p.id === id);
    if (!product) return undefined;
    return {
      ...product,
      docCount: documents.filter(d => d.productId === product.id).length,
      videoCount: videos.filter(v => v.productId === product.id).length
    };
  },
  getDocById: (id) => documents.find(d => d.id === id),
  getVideoById: (id) => videos.find(v => v.id === id),

  getDocsByProduct: (productId) => documents.filter(d => d.productId === productId),
  getVideosByProduct: (productId) => videos.filter(v => v.productId === productId),

  // 全局搜索
  search: (query) => {
    if (!query || query.trim() === '') return { products: [], docs: [], videos: [] };
    const q = query.toLowerCase().trim();
    return {
      // 与产品列表保持一致，数量字段由实际关联的内容实时计算。
      products: DataStore.getProducts().filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      ),
      docs: documents.filter(d =>
        d.status === 'published' && (
          d.title.toLowerCase().includes(q) ||
          d.description.toLowerCase().includes(q)
        )
      ),
      videos: videos.filter(v =>
        v.status === 'published' && (
          v.title.toLowerCase().includes(q) ||
          v.description.toLowerCase().includes(q)
        )
      )
    };
  },

  getStats: () => {
    const publishedDocs = documents.filter(d => d.status === 'published').length;
    const developingDocs = documents.filter(d => d.status === 'developing').length;
    const reviewDocs = documents.filter(d => d.status === 'review').length;
    const totalVideos = videos.length;
    const publishedVideos = videos.filter(v => v.status === 'published').length;
    const developingVideos = videos.filter(v => v.status === 'developing').length;

    const today = new Date().toISOString().split('T')[0];
    // 计算7天后的日期
    const nextWeek = new Date();
    nextWeek.setDate(nextWeek.getDate() + 7);
    const nextWeekStr = nextWeek.toISOString().split('T')[0];

    // 未完成且已逾期
    const isUnfinished = (item) => item.status !== 'published';
    const isOverdue = (item) => item.dueDate && isUnfinished(item) && item.dueDate < today;
    const isUpcoming = (item) => item.dueDate && isUnfinished(item) && item.dueDate >= today && item.dueDate <= nextWeekStr;

    const overdueDocs = documents.filter(isOverdue).length;
    const overdueVideos = videos.filter(isOverdue).length;
    const upcomingDocs = documents.filter(isUpcoming).length;
    const upcomingVideos = videos.filter(isUpcoming).length;

    return {
      totalProducts: products.length,
      totalDocs: documents.length,
      publishedDocs,
      developingDocs,
      reviewDocs,
      planningDocs: documents.filter(d => d.status === 'planning').length,
      draftDocs: documents.filter(d => d.status === 'draft').length,
      totalVideos,
      publishedVideos,
      developingVideos,
      totalViews: documents.reduce((sum, d) => sum + d.views, 0) + videos.reduce((sum, v) => sum + v.views, 0),
      teamSize: teamMembers.length,
      overdueDocs,
      overdueVideos,
      overdueTotal: overdueDocs + overdueVideos,
      upcomingDocs,
      upcomingVideos,
      upcomingTotal: upcomingDocs + upcomingVideos
    };
  },

  // 按产品获取进度统计
  getProductProgress: () => {
    return products.map(p => {
      const pDocs = documents.filter(d => d.productId === p.id);
      const pVideos = videos.filter(v => v.productId === p.id);
      const totalItems = pDocs.length + pVideos.length;
      const publishedItems = pDocs.filter(d => d.status === 'published').length +
                            pVideos.filter(v => v.status === 'published').length;
      const avgProgress = totalItems > 0
        ? Math.round([...pDocs, ...pVideos].reduce((sum, item) => sum + item.progress, 0) / totalItems)
        : 0;
      return {
        product: p,
        docCount: pDocs.length,
        videoCount: pVideos.length,
        totalItems,
        publishedItems,
        avgProgress
      };
    }).sort((a, b) => b.totalItems - a.totalItems);
  },

  addActivity: (activity) => {
    const newActivity = {
      id: 'a' + Date.now(),
      time: '刚刚',
      ...activity
    };
    activities.unshift(newActivity);
    if (activities.length > 50) activities.pop();
    saveToStorage();
  },

  updateDoc: (id, updates) => {
    const idx = documents.findIndex(d => d.id === id);
    if (idx !== -1) {
      documents[idx] = { ...documents[idx], ...updates, updatedAt: new Date().toISOString().split('T')[0] };
      saveToStorage();
      return documents[idx];
    }
    return null;
  },

  // 更新文档指定页内容
  updateDocPage: (docId, pageIndex, html) => {
    const doc = documents.find(d => d.id === docId);
    if (doc && doc.content[pageIndex]) {
      doc.content[pageIndex].html = html;
      doc.updatedAt = new Date().toISOString().split('T')[0];
      saveToStorage();
      return true;
    }
    return false;
  },

  // 新增页面
  addDocPage: (docId) => {
    const doc = documents.find(d => d.id === docId);
    if (doc) {
      doc.pages++;
      doc.content.push({ page: doc.pages, html: '<p>新页面内容，请在此编辑...</p>' });
      doc.updatedAt = new Date().toISOString().split('T')[0];
      saveToStorage();
      return doc.pages;
    }
    return null;
  },

  // 删除页面
  deleteDocPage: (docId, pageIndex) => {
    const doc = documents.find(d => d.id === docId);
    if (doc && doc.pages > 1 && doc.content[pageIndex]) {
      doc.content.splice(pageIndex, 1);
      doc.pages--;
      // 重新编号
      doc.content.forEach((c, i) => c.page = i + 1);
      doc.updatedAt = new Date().toISOString().split('T')[0];
      saveToStorage();
      return true;
    }
    return false;
  },

  addDoc: (doc) => {
    const today = new Date().toISOString().split('T')[0];
    const newDoc = {
      id: 'd' + (documents.length + 1) + '_' + Date.now(),
      status: 'draft',
      progress: 0,
      pages: 1,
      views: 0,
      difficulty: 'medium',
      estimatedTime: '30分钟',
      tools: [],
      parts: [],
      startDate: today,
      dueDate: '',
      actualFinishDate: '',
      createdAt: today,
      updatedAt: today,
      content: [{ page: 1, html: '<h1>新文档标题</h1><p>在这里开始编写内容...</p>' }],
      ...doc
    };
    documents.push(newDoc);
    saveToStorage();
    return newDoc;
  },

  deleteDoc: (id) => {
    const idx = documents.findIndex(d => d.id === id);
    if (idx !== -1) {
      documents.splice(idx, 1);
      saveToStorage();
      return true;
    }
    return false;
  },

  updateProduct: (id, fields) => {
    const p = products.find(x => x.id === id);
    if (!p) return false;
    Object.assign(p, fields);
    saveToStorage();
    return true;
  },

  deleteProduct: (id) => {
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) {
      products.splice(idx, 1);
      saveToStorage();
      return true;
    }
    return false;
  },

  addProduct: (product) => {
    const today = new Date().toISOString().split('T')[0];
    const maxNum = products.reduce((max, p) => {
      const m = (p.id || '').match(/^p(\d+)/);
      return m ? Math.max(max, parseInt(m[1], 10)) : max;
    }, 0);
    const newProduct = {
      id: 'p' + (maxNum + 1) + '_' + Date.now(),
      icon: '📦',
      category: '通用',
      description: '新产品描述',
      status: 'developing',
      docCount: 0,
      videoCount: 0,
      createdAt: today,
      ...product
    };
    products.push(newProduct);
    saveToStorage();
    return newProduct;
  },

  incrementDocViews: (id) => {
    const doc = documents.find(d => d.id === id);
    if (doc) {
      doc.views++;
      saveToStorage();
    }
  },

  incrementVideoViews: (id) => {
    const v = videos.find(v => v.id === id);
    if (v) {
      v.views++;
      saveToStorage();
    }
  },

  // 浏览历史
  getViewHistory: () => {
    try {
      const saved = localStorage.getItem('zhixiu_history');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  },

  addViewHistory: (item) => {
    const history = DataStore.getViewHistory();
    // 去重：如果已存在则移除旧的
    const filtered = history.filter(h => h.id !== item.id || h.type !== item.type);
    filtered.unshift({ ...item, time: new Date().toISOString() });
    // 最多保留 20 条
    const result = filtered.slice(0, 20);
    localStorage.setItem('zhixiu_history', JSON.stringify(result));
  },

  // 收藏功能
  getFavorites: () => {
    try {
      const saved = localStorage.getItem('zhixiu_favorites');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  },

  isFavorite: (type, id) => {
    const favs = DataStore.getFavorites();
    return favs.some(f => f.type === type && f.id === id);
  },

  toggleFavorite: (item) => {
    const favs = DataStore.getFavorites();
    const idx = favs.findIndex(f => f.type === item.type && f.id === item.id);
    if (idx !== -1) {
      favs.splice(idx, 1);
      localStorage.setItem('zhixiu_favorites', JSON.stringify(favs));
      return false;
    } else {
      favs.unshift({ ...item, time: new Date().toISOString() });
      localStorage.setItem('zhixiu_favorites', JSON.stringify(favs));
      return true;
    }
  },

  updateVideo: (id, updates) => {
    const idx = videos.findIndex(v => v.id === id);
    if (idx !== -1) {
      videos[idx] = { ...videos[idx], ...updates, updatedAt: new Date().toISOString().split('T')[0] };
      saveToStorage();
      return videos[idx];
    }
    return null;
  },

  addVideo: (video) => {
    const today = new Date().toISOString().split('T')[0];
    const newVideo = {
      id: 'v' + (videos.length + 1) + '_' + Date.now(),
      status: 'draft',
      progress: 0,
      views: 0,
      startDate: today,
      dueDate: '',
      actualFinishDate: '',
      createdAt: today,
      updatedAt: today,
      ...video
    };
    videos.push(newVideo);
    saveToStorage();
    return newVideo;
  },

  deleteVideo: (id) => {
    const idx = videos.findIndex(v => v.id === id);
    if (idx !== -1) {
      videos.splice(idx, 1);
      saveToStorage();
      return true;
    }
    return false;
  },

  // 重置数据（恢复默认）
  resetData: () => {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  },

  // ========================================
  // 用户账号 CRUD
  // ========================================
  getUsers: () => [...users],
  getUserById: (id) => users.find(u => u.id === id),
  getUserByUsername: (username) => users.find(u => u.username === username),
  // 校验登录
  login: (username, password) => {
    const u = users.find(x => x.username === username && (
      (x.isDemo && password === username) || (!x.isDemo && x.password === password)
    ));
    if (u) {
      u.lastLogin = new Date().toISOString();
      saveUsers();
      // 不返回密码
      const safe = { ...u };
      delete safe.password;
      return safe;
    }
    return null;
  },
  // 创建用户
  addUser: (data) => {
    // 用户名唯一性
    if (users.find(u => u.username === data.username)) {
      return { ok: false, error: '用户名已存在' };
    }
    const today = new Date().toISOString().split('T')[0];
    const newUser = {
      id: 'u_' + Date.now(),
      username: data.username,
      password: data.password || '123456',
      role: data.role || 'member',
      name: data.name || data.username,
      email: data.email || '',
      department: data.department || '',
      createdAt: today,
      createdBy: data.createdBy || '',
      lastLogin: null
    };
    users.push(newUser);
    saveUsers();
    return { ok: true, user: newUser };
  },
  // 更新用户
  updateUser: (id, updates) => {
    const u = users.find(x => x.id === id);
    if (!u) return { ok: false, error: '用户不存在' };
    // 不允许通过此方法改密码（用 changePassword）
    if ('password' in updates) delete updates.password;
    Object.assign(u, updates);
    saveUsers();
    return { ok: true, user: u };
  },
  // 修改密码
  changePassword: (id, newPassword) => {
    const u = users.find(x => x.id === id);
    if (!u) return { ok: false, error: '用户不存在' };
    if (!newPassword || newPassword.length < 6) return { ok: false, error: '密码至少 6 位' };
    u.password = newPassword;
    saveUsers();
    return { ok: true };
  },
  // 删除用户
  deleteUser: (id) => {
    const idx = users.findIndex(x => x.id === id);
    if (idx === -1) return { ok: false, error: '用户不存在' };
    const u = users[idx];
    if (u.role === 'root_admin') return { ok: false, error: '不能删除根管理员' };
    users.splice(idx, 1);
    saveUsers();
    return { ok: true };
  },
  // 当前登录会话
  getCurrentUser: () => {
    try {
      const id = localStorage.getItem('zhixiu_current_user');
      if (!id) return null;
      const u = users.find(x => x.id === id);
      if (!u) return null;
      const safe = { ...u };
      delete safe.password;
      return safe;
    } catch (e) { return null; }
  },
  setCurrentUser: (id) => {
    if (id) localStorage.setItem('zhixiu_current_user', id);
    else localStorage.removeItem('zhixiu_current_user');
  },
  // 重置所有账号（恢复到默认演示账号）
  resetUsers: () => {
    localStorage.removeItem(USERS_STORAGE_KEY);
    location.reload();
  }
};
