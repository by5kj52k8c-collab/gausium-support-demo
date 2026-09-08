/* ========================================
   高仙机器人 - 售后技术支持平台
   工业设备售后文档管理系统
   ======================================== */

// 站点品牌常量
const SITE_NAME = '高仙机器人';
const SITE_NAME_LONG = '高仙机器人 - 售后技术支持平台';

// ========================================
// i18n 多语言字典
// ========================================
const I18N = {
  'zh-CN': {
    // 通用
    'app.name': '高仙机器人',
    'app.tagline': '专业的机器人维修指南，一站式售后技术支持中心',
    'common.search': '搜索', 'home.services': '核心服务', 'home.hotDocs': '热门文档排行', 'home.latest': '最新更新', 'home.recommend': '推荐视频', 'footer.desc': '专业的工业设备售后文档视频管理平台，助力企业数字化转型，提升售后服务效率。', 'footer.copyright': '© {year} {brand} · 商用清洁机器人售后技术支持平台 | 专业 · 高效 · 智能', 'common.docs': '份文档', 'common.videos': '个视频', 'common.manuals': '份手册', 'common.guides': '篇指南', 'common.questions': '个问题', 'home.heroBadge': '售后技术支持平台', 'home.heroPrefix': '专业的', 'home.heroAccent': '机器人维修指南', 'home.heroSuffix': '一站式售后技术支持中心', 'home.searchPlaceholder': '搜索产品型号、故障问题、维修方法...', 'home.statProducts': '产品型号', 'home.statDocs': '技术文档', 'home.statVideos': '视频教程', 'home.statUsers': '服务用户', 'home.servicesSubtitle': '专业的机器人维修指南，一站式售后技术支持中心', 'home.productsSubtitle': '按产品系列查找对应的技术资料', 'home.videosSubtitle': '精选视频教程，直观学习操作技巧', 'home.hotDocsSub': '最受欢迎的 TOP 6 维修指南', 'service.guideDesc': '图文并茂的拆解维修步骤，逐步指导部件更换与保养', 'service.faqDesc': '常见问题分级诊断，快速定位故障原因与解决方案', 'service.videoDesc': '直观的操作演示视频，跟着老师一步步学习操作', 'service.manualDesc': '完整的产品说明书、规格参数、安装指南等资料', 'common.guides': '篇指南', 'common.questions': '个问题', 'common.manuals': '份手册', 'common.docs': '份文档', 'videos.subtitle': '全系列产品操作与维护视频，直观易学', 'a11y.skipToContent': '跳到主要内容', 'confirm.publishVideos': '确定要发布选中的 {n} 个视频吗？', 'confirm.deleteVideos': '确定要删除选中的 {n} 个视频吗？此操作不可恢复！', 'confirm.deleteVideo': '确定要删除这个视频吗？此操作不可恢复。', 'toast.bulkPublished': '已批量发布 {n} 个视频', 'toast.bulkDeleted': '已删除 {n} 个视频', 'nav.home': '首页', 'nav.products': '产品中心', 'nav.videos': '视频教程', 'nav.admin': '管理后台', 'nav.login': '登录', 'nav.theme': '切换主题', 'nav.lang': '语言', 'video.related': '推荐视频', 'video.sameCat': '同分类', 'video.noMore': '暂无更多推荐', 'video.liked': '已点赞', 'video.faved': '已收藏', 'video.instructor': '讲师', 'video.duration': '时长', 'video.updated': '更新', 'common.view': '观看', 'search.title': '搜索结果', 'search.keyword': '关键词', 'search.found': '共找到', 'common.results': '条结果', 'search.notFound': '未找到与', 'search.notFound2': '相关的结果', 'search.tryHot': '试试以下热门搜索词，或浏览下方产品分类', '讲师': '讲师', '时长': '时长', 'diff.easy': '简单', 'diff.medium': '中等', 'diff.hard': '困难', 'diff.expert': '专家', 'common.pieceTool': '件工具', 'common.piecePart': '件配件', 'common.noTool': '无需工具', 'common.noPart': '无需配件', 'common.times': '次', 'common.page': '页', 'nav.products': '产品中心',
'doc.estimatedTime': '预计用时', 'doc.tools': '所需工具', 'doc.parts': '所需配件', 'doc.views': '阅读次数',
'doc.prev': '上一篇', 'doc.next': '下一篇', 'doc.first': '已经是第一篇了', 'doc.last': '已经是最后一篇了',
'doc.related': '相关推荐', 'doc.notPublished': '文档暂未发布', 'doc.notPublishedDesc': '该文档正在编写或审核中，尚未对客户开放', 'doc.type': '文档',
'doc.pageOf': '第 {n} 页 / 共 {total} 页', 'doc.copyright': '版权所有',
'sidebar.tools': '所需工具', 'sidebar.parts': '所需配件', 'sidebar.toc': '文档目录', 'sidebar.favorites': '我的收藏', 'sidebar.history': '最近浏览', 'sidebar.info': '文档信息', 'sidebar.noFav': '暂无收藏内容', 'sidebar.noHistory': '暂无浏览记录',
'toolbar.totalPages': '共 {n} 页 · 滑动阅读', 'toolbar.read': '已读', 'toolbar.print': '打印', 'toolbar.copyLink': '复制链接', 'toolbar.top': '顶部', 'toolbar.bottom': '底部',
'info.docId': '文档编号', 'info.version': '版本', 'info.pages': '页数', 'info.difficulty': '难度', 'info.created': '创建',
'action.like': '有用', 'action.fav': '收藏', 'action.unfav': '取消收藏', 'action.share': '分享', 'action.exportPDF': '导出PDF', 'action.backHome': '返回首页',
'tooltip.print': '打印或保存为 PDF（使用浏览器打印）', 'tooltip.copyLink': '复制本文档链接', 'tooltip.toTop': '回到顶部', 'tooltip.toBottom': '跳到底部', 'tooltip.fontSmaller': '缩小字号', 'tooltip.fontLarger': '放大字号', 'tooltip.fontReset': '重置字号 (100%)', 'tooltip.delPage': '删除此页',
'toast.linkCopied': '链接已复制',
    'common.cancel': '取消', 'common.confirmTitle': '请确认操作',
    'common.confirm': '确定',
    'common.save': '保存',
    'common.delete': '删除',
    'common.edit': '编辑',
    'common.view': '查看',
    'common.add': '新建',
    'common.import': '导入',
    'common.export': '导出',
    'common.refresh': '刷新',
    'common.reset': '重置',
    'common.back': '返回',
    'common.close': '关闭',
    'common.more': '更多',
    'common.actions': '操作',
    'common.status': '状态',
    'common.category': '分类',
    'common.loading': '加载中...',
    'common.noData': '暂无数据',
    'common.all': '全部',
    'common.searchPlaceholder': '搜索产品型号、故障问题、维修方法...',
    // 导航
    'nav.home': '首页',
    'nav.product': '产品中心',
    'nav.videos': '视频教程',
    'nav.admin': '管理后台',
    'nav.login': '登录',
    'nav.logout': '退出登录',
    'nav.profile': '个人资料',
    'nav.theme': '切换主题',
    'nav.themeLight': '浅色模式',
    'nav.themeDark': '深色模式',
    'nav.language': '语言',
    // 首页
    'home.heroTitle': '专业的机器人维修指南',
    'home.heroSubtitle': '一站式售后技术支持中心',
    'home.searchPlaceholder': '搜索产品型号、故障问题、维修方法...',
    'home.services': '核心服务',
    'home.hotSearch': '热门搜索',
    'home.stats.products': '产品型号',
    'home.stats.docs': '技术文档',
    'home.stats.videos': '视频教程',
    'home.stats.users': '服务用户',
    // 服务
    'service.guide': '维修指南',
    'service.faq': '故障排查',
    'service.video': '视频教程',
    'service.manual': '技术手册',
    // 产品中心
    'product.all': '全部产品',
    'product.detail': '产品详情',
    'product.tools': '所需工具',
    'product.parts': '所需配件',
    'product.specs': '规格参数',
    'product.related': '相关文档',
    'product.relatedVideos': '相关视频',
    // 文档
    'doc.toc': '文档目录',
    'doc.favorites': '我的收藏',
    'doc.recent': '最近浏览',
    'doc.info': '文档信息',
    'doc.id': '文档编号',
    'doc.version': '版本',
    'doc.pages': '页数',
    'doc.difficulty': '难度',
    'doc.print': '打印',
    'doc.copyLink': '复制链接',
    'doc.exportPDF': '导出PDF',
    'doc.like': '有用',
    'doc.liked': '已点赞',
    'doc.fav': '收藏',
    'doc.faved': '已收藏',
    'doc.share': '分享',
    'doc.copySuccess': '链接已复制',
    'doc.totalPages': '共 {n} 页',
    'doc.readingProgress': '{n}% 已读',
    'doc.notFound': '文档不存在',
    'doc.unpublished': '该文档暂未发布',
    'doc.unpublishedDesc': '该文档正在编写或审核中，尚未对客户开放',
    // 视频
    'video.all': '全部视频',
    'video.duration': '时长',
    'video.play': '播放',
    'video.playExternal': '在原平台播放',
    // 文档类型
    'docType.guide': '维修指南',
    'docType.manual': '技术手册',
    'docType.faq': '常见问题',
    'docType.spec': '规格说明',
    'docType.install': '安装指南',
    // 状态
    'status.published': '已发布',
    'status.draft': '草稿',
    'status.review': '审核中',
    'status.developing': '开发中',
    'status.planning': '规划中',
    'status.archived': '已归档',
    'status.active': '在售',
    'status.offline': '离线',
    'status.online': '在线',
    'status.busy': '忙碌',
    'status.overdue': '已逾期',
    'status.upcoming': '即将到期',
    // 难度
    'diff.easy': '简单',
    'diff.medium': '中等',
    'diff.hard': '困难',
    'diff.expert': '专家',
    // 后台
    'admin.dashboard': '管理看板',
    'admin.docs': '文档管理',
    'admin.videos': '视频管理',
    'admin.products': '产品管理',
    'admin.team': '团队成员',
    'admin.users': '账号管理',
    'admin.data': '系统',
    'admin.backToSite': '返回前台',
    // 角色
    'role.root_admin': '根管理员',
    'role.admin': '管理员',
    'role.member': '成员',
    // 登录
    'auth.loginTitle': '登录',
    'auth.username': '用户名',
    'auth.password': '密码',
    'auth.login': '登录',
    'auth.cancel': '取消',
    'auth.usernameRequired': '请输入用户名和密码',
    'auth.invalid': '用户名或密码错误',
    'auth.loginSuccess': '欢迎回来，{name}！',
    'auth.logoutSuccess': '已登出',
    'auth.needLogin': '请先登录',
    'auth.noPermission': '成员账号无管理权限',
    'auth.demoAccount': '演示账号',
    'auth.root': '根管理员',
    'auth.manager': '二级管理员',
    'auth.member': '成员',
    // Toast
    'toast.saved': '已保存',
    'toast.deleted': '已删除',
    'toast.copied': '已复制',
    'toast.copiedToClipboard': '已复制到剪贴板',
    'toast.failed': '操作失败',
    'toast.linkCopied': '链接已复制',
    'toast.productSaved': '产品信息已保存',
    'toast.adjusted': '已调整 {orig} → 800×600',
    'toast.already800x600': '已是 800×600，已直接使用',
    'toast.imageTooLarge': '图片太大（>5MB），请压缩后重试',
    'toast.unsupportedFormat': '只支持 JPG / PNG / WebP 格式',
    'toast.imageLoadFailed': '图片加载失败',
    'toast.fileReadFailed': '文件读取失败',
    'toast.needName': '请输入产品名称',
    'toast.needModel': '请输入产品型号',
    'toast.needCategory': '请选择或输入分类',
    // 日期
    'date.today': '今天',
    'date.yesterday': '昨天',
    'date.thisWeek': '本周',
    'date.thisMonth': '本月',
    'date.lastUpdated': '最后更新',
    // 标题
    'title.welcome': '欢迎使用',
    'title.overview': '数据概览',
    'title.tasks': '今日待办',
    'home.viewAllProducts': '查看全部产品 →',
    'home.viewAllVideos': '查看全部视频 →',
    'home.allProducts': '全部产品',
  },
  'en-US': {
    'app.name': 'Gaoxian Robot',
    'app.tagline': 'Professional robot repair guide, one-stop after-sales technical support center',
    'common.search': 'Search', 'home.services': 'Core Services', 'home.hotDocs': 'Hot Docs', 'home.latest': 'Latest Updates', 'home.recommend': 'Recommended Videos', 'footer.desc': 'Professional after-sales document & video management platform for industrial equipment.', 'common.docs': 'docs', 'common.videos': 'videos', 'common.manuals': 'manuals', 'common.guides': 'guides', 'common.questions': 'questions', 'home.heroBadge': 'After-sales Tech Platform', 'home.heroPrefix': 'Professional ', 'home.heroAccent': 'Robot Repair Guide', 'home.heroSuffix': 'One-stop after-sales tech support', 'home.searchPlaceholder': 'Search product model, problem, repair method...', 'home.statProducts': 'Product Models', 'home.statDocs': 'Tech Docs', 'home.statVideos': 'Video Tutorials', 'home.statUsers': 'Service Users', 'home.servicesSubtitle': 'Professional robot repair guides, one-stop after-sales technical support', 'home.productsSubtitle': 'Find technical docs by product series', 'home.videosSubtitle': 'Featured video tutorials for hands-on learning', 'home.hotDocsSub': 'Top 6 most popular repair guides', 'service.guideDesc': 'Step-by-step visual repair guide for component replacement', 'service.faqDesc': 'Common issues with quick diagnosis and solutions', 'service.videoDesc': 'Step-by-step visual demonstrations by experts', 'service.manualDesc': 'Complete product manuals, specifications, installation guides', 'common.guides': 'guides', 'common.questions': 'questions', 'common.manuals': 'manuals', 'common.docs': 'docs', 'videos.subtitle': 'Operation and maintenance videos for all products', 'a11y.skipToContent': 'Skip to main content', 'confirm.publishVideos': 'Publish {n} selected videos?', 'confirm.deleteVideos': 'Delete {n} selected videos? This cannot be undone!', 'confirm.deleteVideo': 'Delete this video? This cannot be undone.', 'toast.bulkPublished': '{n} videos published', 'toast.bulkDeleted': '{n} videos deleted', 'nav.home': 'Home', 'nav.products': 'Products', 'nav.videos': 'Videos', 'nav.admin': 'Admin', 'nav.login': 'Sign In', 'nav.theme': 'Toggle Theme', 'nav.lang': 'Language', 'video.related': 'Related Videos', 'video.sameCat': 'Same Category', 'video.noMore': 'No more recommendations', 'video.liked': 'Liked', 'video.faved': 'Favorited', 'video.instructor': 'Instructor', 'video.duration': 'Duration', 'video.updated': 'Updated', 'common.view': 'views', 'search.title': 'Search Results', 'search.keyword': 'Keyword', 'search.found': 'found', 'common.results': 'results', 'search.notFound': 'No results for', 'search.notFound2': '', 'search.tryHot': 'Try these popular searches or browse products below', '讲师': 'Instructor', '时长': 'Duration', 'common.pieceTool': 'tools', 'common.piecePart': 'parts', 'common.noTool': 'No tools needed', 'common.noPart': 'No parts needed', 'common.times': 'times', 'common.page': 'pages', 'nav.products': 'Products',
'doc.estimatedTime': 'Estimated Time', 'doc.tools': 'Tools Required', 'doc.parts': 'Parts Required', 'doc.views': 'Views',
'doc.prev': 'Previous', 'doc.next': 'Next', 'doc.first': 'This is the first doc', 'doc.last': 'This is the last doc',
'doc.related': 'Related', 'doc.notPublished': 'Doc not published', 'doc.notPublishedDesc': 'This doc is being written or reviewed, not yet open to customers', 'doc.type': 'Document',
'doc.pageOf': 'Page {n} / {total}', 'doc.copyright': 'All Rights Reserved',
'sidebar.tools': 'Tools Required', 'sidebar.parts': 'Parts Required', 'sidebar.toc': 'TOC', 'sidebar.favorites': 'My Favorites', 'sidebar.history': 'Recently Viewed', 'sidebar.info': 'Doc Info', 'sidebar.noFav': 'No favorites yet', 'sidebar.noHistory': 'No history yet',
'toolbar.totalPages': '{n} pages · scroll to read', 'toolbar.read': 'read', 'toolbar.print': 'Print', 'toolbar.copyLink': 'Copy Link', 'toolbar.top': 'Top', 'toolbar.bottom': 'Bottom',
'info.docId': 'Doc ID', 'info.version': 'Version', 'info.pages': 'Pages', 'info.difficulty': 'Difficulty', 'info.created': 'Created',
'action.like': 'Like', 'action.fav': 'Favorite', 'action.unfav': 'Unfavorite', 'action.share': 'Share', 'action.exportPDF': 'Export PDF', 'action.backHome': 'Back to Home',
'tooltip.print': 'Print or save as PDF (browser print)', 'tooltip.copyLink': 'Copy doc link', 'tooltip.toTop': 'Back to top', 'tooltip.toBottom': 'Jump to bottom', 'tooltip.fontSmaller': 'Decrease font size', 'tooltip.fontLarger': 'Increase font size', 'tooltip.fontReset': 'Reset font size (100%)', 'tooltip.delPage': 'Delete this page',
'toast.linkCopied': 'Link copied',
    'common.cancel': 'Cancel', 'common.confirmTitle': 'Please Confirm',
    'common.confirm': 'Confirm',
    'common.save': 'Save',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.add': 'New',
    'common.import': 'Import',
    'common.export': 'Export',
    'common.refresh': 'Refresh',
    'common.reset': 'Reset',
    'common.back': 'Back',
    'common.close': 'Close',
    'common.more': 'More',
    'common.actions': 'Actions',
    'common.status': 'Status',
    'common.category': 'Category',
    'common.loading': 'Loading...',
    'common.noData': 'No data',
    'common.all': 'All',
    'common.searchPlaceholder': 'Search product model, problem, repair method...',
    'nav.home': 'Home',
    'nav.product': 'Products',
    'nav.videos': 'Videos',
    'nav.admin': 'Admin',
    'nav.login': 'Sign in',
    'nav.logout': 'Sign out',
    'nav.profile': 'Profile',
    'nav.theme': 'Theme',
    'nav.themeLight': 'Light',
    'nav.themeDark': 'Dark',
    'nav.language': 'Language',
    'home.heroTitle': 'Professional Robot Repair Guide',
    'home.heroSubtitle': 'One-Stop After-Sales Support Center',
    'home.searchPlaceholder': 'Search product model, problem, repair method...',
    'home.services': 'Core Services',
    'home.hotSearch': 'Hot searches',
    'home.stats.products': 'Products',
    'home.stats.docs': 'Tech Docs',
    'home.stats.videos': 'Videos',
    'home.stats.users': 'Users',
    'service.guide': 'Repair Guide',
    'service.faq': 'FAQ',
    'service.video': 'Video Tutorials',
    'service.manual': 'Tech Manuals',
    'product.all': 'All Products',
    'product.detail': 'Product Detail',
    'product.tools': 'Tools Required',
    'product.parts': 'Parts Required',
    'product.specs': 'Specifications',
    'product.related': 'Related Docs',
    'product.relatedVideos': 'Related Videos',
    'doc.toc': 'Table of Contents',
    'doc.favorites': 'Favorites',
    'doc.recent': 'Recent',
    'doc.info': 'Doc Info',
    'doc.id': 'Doc ID',
    'doc.version': 'Version',
    'doc.pages': 'Pages',
    'doc.difficulty': 'Difficulty',
    'doc.print': 'Print',
    'doc.copyLink': 'Copy Link',
    'doc.exportPDF': 'Export PDF',
    'doc.like': 'Like',
    'doc.liked': 'Liked',
    'doc.fav': 'Favorite',
    'doc.faved': 'Favorited',
    'doc.share': 'Share',
    'doc.copySuccess': 'Link copied',
    'doc.totalPages': '{n} pages',
    'doc.readingProgress': '{n}% read',
    'doc.notFound': 'Document not found',
    'doc.unpublished': 'Not yet published',
    'doc.unpublishedDesc': 'This document is being drafted or reviewed',
    'video.all': 'All Videos',
    'video.duration': 'Duration',
    'video.play': 'Play',
    'video.playExternal': 'Open in source',
    'docType.guide': 'Repair Guide',
    'docType.manual': 'Manual',
    'docType.faq': 'FAQ',
    'docType.spec': 'Specification',
    'docType.install': 'Install Guide',
    'status.published': 'Published',
    'status.draft': 'Draft',
    'status.review': 'In Review',
    'status.developing': 'Developing',
    'status.planning': 'Planning',
    'status.archived': 'Archived',
    'status.active': 'Active',
    'status.offline': 'Offline',
    'status.online': 'Online',
    'status.busy': 'Busy',
    'status.overdue': 'Overdue',
    'status.upcoming': 'Upcoming',
    'diff.easy': 'Easy',
    'diff.medium': 'Medium',
    'diff.hard': 'Hard',
    'diff.expert': 'Expert',
    'admin.dashboard': 'Dashboard',
    'admin.docs': 'Documents',
    'admin.videos': 'Videos',
    'admin.products': 'Products',
    'admin.team': 'Team',
    'admin.users': 'Accounts',
    'admin.data': 'System',
    'admin.backToSite': 'Back to site',
    'role.root_admin': 'Root Admin',
    'role.admin': 'Admin',
    'role.member': 'Member',
    'auth.loginTitle': 'Sign in',
    'auth.username': 'Username',
    'auth.password': 'Password',
    'auth.login': 'Sign in',
    'auth.cancel': 'Cancel',
    'auth.usernameRequired': 'Please enter username and password',
    'auth.invalid': 'Invalid username or password',
    'auth.loginSuccess': 'Welcome back, {name}!',
    'auth.logoutSuccess': 'Signed out',
    'auth.needLogin': 'Please sign in first',
    'auth.noPermission': 'No admin permission',
    'auth.demoAccount': 'Demo accounts',
    'auth.root': 'Root Admin',
    'auth.manager': 'Admin',
    'auth.member': 'Member',
    'toast.saved': 'Saved',
    'toast.deleted': 'Deleted',
    'toast.copied': 'Copied',
    'toast.copiedToClipboard': 'Copied to clipboard',
    'toast.failed': 'Failed',
    'toast.linkCopied': 'Link copied',
    'toast.productSaved': 'Product saved',
    'toast.adjusted': 'Adjusted {orig} → 800×600',
    'toast.already800x600': 'Already 800×600',
    'toast.imageTooLarge': 'Image too large (>5MB)',
    'toast.unsupportedFormat': 'Only JPG/PNG/WebP supported',
    'toast.imageLoadFailed': 'Image load failed',
    'toast.fileReadFailed': 'File read failed',
    'toast.needName': 'Product name required',
    'toast.needModel': 'Product model required',
    'toast.needCategory': 'Category required',
    'date.today': 'Today',
    'date.yesterday': 'Yesterday',
    'date.thisWeek': 'This week',
    'date.thisMonth': 'This month',
    'date.lastUpdated': 'Last updated',
    'title.welcome': 'Welcome',
    'title.overview': 'Overview',
    'title.tasks': 'Today tasks',
    // Doc/Video modals
    'doc.openFullPage': 'Open full page',
    'doc.pageOfWithTotal': 'Page {n} / {total}',
    'video.openFullPage': 'Open full page',
    'video.openExternal': 'Open in source',
    'video.notSupported': 'Your browser does not support video playback',
    'video.notFound': 'Video not found',
    'video.mute': 'Mute',
    'video.unmute': 'Unmute',
    'video.fullscreen': 'Fullscreen',
    'video.exitFullscreen': 'Exit fullscreen',
    'video.volume': 'Volume',
    // Home/Product page labels
    'home.viewAllProducts': 'View All Products →',
    'home.viewAllVideos': 'View All Videos →',
    'home.allProducts': 'All Products',
    'product.heroGuides': 'Repair Guides',
    'product.heroFaq': 'Troubleshooting',
    'product.heroVideos': 'Video Tutorials',
    'product.heroManuals': 'Tech Manuals',
    'product.sideGuides': 'Repair Guides',
    'product.sideFaq': 'Troubleshooting',
    'product.sideVideos': 'Video Tutorials',
    'product.sideManuals': 'Tech Manuals',
    'product.infoTitle': '📋 Product Info',
    'product.infoModel': 'Model',
    'product.infoStatus': 'Status',
    'product.infoOnSale': 'On Sale',
    'product.infoDeveloping': 'Developing',
    'product.infoDocs': 'Total Docs',
    'product.infoVideos': 'Total Videos',
    'product.tabGuides': '🔧 Repair Guides',
    'product.tabFaq': '🔍 Troubleshooting',
    'product.tabVideos': '🎬 Video Tutorials',
    'product.tabManuals': '📖 Tech Manuals',
    'product.emptyGuides': 'No repair guides yet',
    'product.emptyFaq': 'No troubleshooting docs yet',
    'product.emptyVideos': 'No video tutorials yet',
    'product.emptyManuals': 'No tech manuals yet',
    'product.viewAllProducts': 'View All Products',
    'product.viewAllVideos': 'View All Videos',
    'product.modelLabel': 'Product Model',
    'product.statusDeveloping': 'Developing',
  },
  'ja-JP': {
    'app.name': 'Gaoxian Robot',
    'app.tagline': 'プロフェッショナルロボット修理ガイド、ワンストップアフターサービス',
    'common.search': '検索', 'home.services': 'コアサービス', 'home.hotDocs': '人気文書', 'home.latest': '最新更新', 'home.recommend': 'おすすめ動画', 'footer.desc': '産業機器のアフターサービス文書・動画管理プラットフォーム。', 'common.docs': '件文書', 'common.videos': '件動画', 'common.manuals': '個のマニュアル', 'common.guides': 'ガイド', 'common.questions': '質問', 'home.heroBadge': 'アフターサービス技術支援プラットフォーム', 'home.heroPrefix': 'プロ', 'home.heroAccent': 'ロボット修理ガイド', 'home.heroSuffix': 'ワンストップアフターサービス', 'home.searchPlaceholder': '型番・故障・修理方法を検索...', 'home.statProducts': '型番', 'home.statDocs': '技術文書', 'home.statVideos': 'ビデオ', 'home.statUsers': 'サービスユーザー', 'home.servicesSubtitle': 'プロのロボット修理ガイド、ワンストップアフターサービス技術サポート', 'home.productsSubtitle': '製品シリーズ別に技術資料を検索', 'home.videosSubtitle': '厳選されたビデオチュートリアルで実践学習', 'home.hotDocsSub': '最も人気のある修理ガイド TOP 6', 'service.guideDesc': '段階的な分解修理手順、部品交換と保守を案内', 'service.faqDesc': 'よくある質問をレベル別に診断、迅速な原因特定', 'service.videoDesc': '専門家による段階的な操作デモ動画', 'service.manualDesc': '完全な製品説明書、仕様パラメータ、設置ガイド等の資料', 'common.guides': 'ガイド', 'common.questions': '質問', 'common.manuals': '個のマニュアル', 'common.docs': '件文書', 'videos.subtitle': '全製品の操作・保守ビデオ', 'a11y.skipToContent': '本文へスキップ', 'confirm.publishVideos': '選択した {n} 件のビデオを公開しますか？', 'confirm.deleteVideos': '選択した {n} 件のビデオを削除しますか？元に戻せません！', 'confirm.deleteVideo': 'このビデオを削除しますか？元に戻せません。', 'toast.bulkPublished': '{n} 件のビデオを公開しました', 'toast.bulkDeleted': '{n} 件のビデオを削除しました', 'nav.home': 'ホーム', 'nav.products': '製品', 'nav.videos': 'ビデオ', 'nav.admin': '管理', 'nav.login': 'ログイン', 'nav.theme': 'テーマ切替', 'nav.lang': '言語', 'video.related': '関連動画', 'video.sameCat': '同カテゴリー', 'video.noMore': 'おすすめなし', 'video.liked': 'いいね済み', 'video.faved': 'お気に入り済み', 'video.instructor': '講師', 'video.duration': '時間', 'video.updated': '更新', 'common.view': '回視聴', 'search.title': '検索結果', 'search.keyword': 'キーワード', 'search.found': '見つかりました', 'common.results': '件', 'search.notFound': '', 'search.notFound2': 'の結果が見つかりません', 'search.tryHot': '人気の検索キーワードを試すか、下の製品カテゴリーをご覧ください', '讲师': '講師', '时长': '時間', 'common.pieceTool': '個工具', 'common.piecePart': '個部品', 'common.noTool': '工具不要', 'common.noPart': '部品不要', 'common.times': '回', 'common.page': 'ページ', 'nav.products': '製品一覧',
'doc.estimatedTime': '予想時間', 'doc.tools': '必要工具', 'doc.parts': '必要部品', 'doc.views': '閲覧数',
'doc.prev': '前の文書', 'doc.next': '次の文書', 'doc.first': '最初の文書です', 'doc.last': '最後の文書です',
'doc.related': '関連', 'doc.notPublished': '文書未公開', 'doc.notPublishedDesc': 'この文書は作成中またはレビュー中で、まだ公開されていません', 'doc.type': '文書',
'doc.pageOf': '{n} / {total} ページ', 'doc.copyright': '著作権所有',
'sidebar.tools': '必要工具', 'sidebar.parts': '必要部品', 'sidebar.toc': '目次', 'sidebar.favorites': 'お気に入り', 'sidebar.history': '最近閲覧', 'sidebar.info': '文書情報', 'sidebar.noFav': 'お気に入りなし', 'sidebar.noHistory': '閲覧履歴なし',
'toolbar.totalPages': '{n} ページ · スクロールして読む', 'toolbar.read': '既読', 'toolbar.print': '印刷', 'toolbar.copyLink': 'リンクをコピー', 'toolbar.top': 'トップ', 'toolbar.bottom': 'ボトム',
'info.docId': '文書番号', 'info.version': 'バージョン', 'info.pages': 'ページ数', 'info.difficulty': '難易度', 'info.created': '作成',
'action.like': 'いいね', 'action.fav': 'お気に入り', 'action.unfav': 'お気に入り解除', 'action.share': '共有', 'action.exportPDF': 'PDF出力', 'action.backHome': 'ホームに戻る',
'tooltip.print': '印刷またはPDF保存', 'tooltip.copyLink': '文書リンクをコピー', 'tooltip.toTop': 'トップに戻る', 'tooltip.toBottom': 'ボトムへ', 'tooltip.fontSmaller': 'フォントを小さく', 'tooltip.fontLarger': 'フォントを大きく', 'tooltip.fontReset': 'フォントサイズをリセット (100%)', 'tooltip.delPage': 'このページを削除',
'toast.linkCopied': 'リンクをコピーしました',
    'common.cancel': 'キャンセル', 'common.confirmTitle': '確認してください',
    'common.confirm': '確認',
    'common.save': '保存',
    'common.delete': '削除',
    'common.edit': '編集',
    'common.view': '表示',
    'common.add': '新規',
    'common.import': 'インポート',
    'common.export': 'エクスポート',
    'common.refresh': '更新',
    'common.reset': 'リセット',
    'common.back': '戻る',
    'common.close': '閉じる',
    'common.more': '詳細',
    'common.actions': '操作',
    'common.status': '状態',
    'common.category': '分類',
    'common.loading': '読み込み中...',
    'common.noData': 'データなし',
    'common.all': 'すべて',
    'common.searchPlaceholder': '製品型番、故障、修理方法を検索...',
    'nav.home': 'ホーム',
    'nav.product': '製品',
    'nav.videos': 'ビデオ',
    'nav.admin': '管理',
    'nav.login': 'ログイン',
    'nav.logout': 'ログアウト',
    'nav.profile': 'プロフィール',
    'nav.theme': 'テーマ',
    'nav.themeLight': 'ライト',
    'nav.themeDark': 'ダーク',
    'nav.language': '言語',
    'home.heroTitle': 'プロフェッショナルロボット修理ガイド',
    'home.heroSubtitle': 'ワンストップアフターサービス',
    'home.searchPlaceholder': '製品型番、故障、修理方法を検索...',
    'home.services': 'コアサービス',
    'home.hotSearch': '人気検索',
    'home.stats.products': '製品',
    'home.stats.docs': '技術文書',
    'home.stats.videos': 'ビデオ',
    'home.stats.users': 'ユーザー',
    'service.guide': '修理ガイド',
    'service.faq': 'よくある質問',
    'service.video': 'ビデオチュートリアル',
    'service.manual': '技術マニュアル',
    'product.all': 'すべての製品',
    'product.detail': '製品詳細',
    'product.tools': '必要な工具',
    'product.parts': '必要な部品',
    'product.specs': '仕様',
    'product.related': '関連文書',
    'product.relatedVideos': '関連ビデオ',
    'doc.toc': '目次',
    'doc.favorites': 'お気に入り',
    'doc.recent': '最近',
    'doc.info': '文書情報',
    'doc.id': '文書番号',
    'doc.version': 'バージョン',
    'doc.pages': 'ページ',
    'doc.difficulty': '難易度',
    'doc.print': '印刷',
    'doc.copyLink': 'リンクをコピー',
    'doc.exportPDF': 'PDF出力',
    'doc.like': 'いいね',
    'doc.liked': '高評価済み',
    'doc.fav': 'お気に入り',
    'doc.faved': 'お気に入り済み',
    'doc.share': '共有',
    'doc.copySuccess': 'リンクをコピーしました',
    'doc.totalPages': '{n}ページ',
    'doc.readingProgress': '{n}% 読了',
    'doc.notFound': '文書が存在しません',
    'doc.unpublished': '未公開',
    'doc.unpublishedDesc': 'この文書は作成中またはレビュー中です',
    'video.all': 'すべてのビデオ',
    'video.duration': '時間',
    'video.play': '再生',
    'video.playExternal': '元サイトで再生',
    'docType.guide': '修理ガイド',
    'docType.manual': 'マニュアル',
    'docType.faq': 'よくある質問',
    'docType.spec': '仕様',
    'docType.install': 'インストールガイド',
    'status.published': '公開済み',
    'status.draft': '下書き',
    'status.review': 'レビュー中',
    'status.developing': '開発中',
    'status.planning': '計画中',
    'status.archived': 'アーカイブ',
    'status.active': '販売中',
    'status.offline': 'オフライン',
    'status.online': 'オンライン',
    'status.busy': '取り込み中',
    'status.overdue': '期限超過',
    'status.upcoming': '近日',
    'diff.easy': '簡単',
    'diff.medium': '普通',
    'diff.hard': '難しい',
    'diff.expert': '専門家',
    'admin.dashboard': 'ダッシュボード',
    'admin.docs': '文書管理',
    'admin.videos': 'ビデオ管理',
    'admin.products': '製品管理',
    'admin.team': 'チーム',
    'admin.users': 'アカウント管理',
    'admin.data': 'システム',
    'admin.backToSite': 'サイトに戻る',
    'role.root_admin': 'ルート管理者',
    'role.admin': '管理者',
    'role.member': 'メンバー',
    'auth.loginTitle': 'ログイン',
    'auth.username': 'ユーザー名',
    'auth.password': 'パスワード',
    'auth.login': 'ログイン',
    'auth.cancel': 'キャンセル',
    'auth.usernameRequired': 'ユーザー名とパスワードを入力してください',
    'auth.invalid': 'ユーザー名またはパスワードが正しくありません',
    'auth.loginSuccess': 'おかえりなさい、{name}！',
    'auth.logoutSuccess': 'ログアウトしました',
    'auth.needLogin': '先にログインしてください',
    'auth.noPermission': '管理者権限がありません',
    'auth.demoAccount': 'デモアカウント',
    'auth.root': 'ルート管理者',
    'auth.manager': '管理者',
    'auth.member': 'メンバー',
    'toast.saved': '保存しました',
    'toast.deleted': '削除しました',
    'toast.copied': 'コピーしました',
    'toast.copiedToClipboard': 'クリップボードにコピーしました',
    'toast.failed': '操作に失敗しました',
    'toast.linkCopied': 'リンクをコピーしました',
    'toast.productSaved': '製品情報を保存しました',
    'toast.adjusted': '{orig} → 800×600 に調整しました',
    'toast.already800x600': '既に 800×600 です',
    'toast.imageTooLarge': '画像が大きすぎます（>5MB）',
    'toast.unsupportedFormat': 'JPG/PNG/WebP のみサポート',
    'toast.imageLoadFailed': '画像の読み込みに失敗しました',
    'toast.fileReadFailed': 'ファイルの読み込みに失敗しました',
    'toast.needName': '製品名を入力してください',
    'toast.needModel': '型番を入力してください',
    'toast.needCategory': '分類を選択してください',
    'date.today': '今日',
    'date.yesterday': '昨日',
    'date.thisWeek': '今週',
    'date.thisMonth': '今月',
    'date.lastUpdated': '最終更新',
    'title.welcome': 'ようこそ',
    'title.overview': '概要',
    'title.tasks': '本日のタスク',
    'home.viewAllProducts': 'すべての製品を見る →',
    'home.viewAllVideos': 'すべての動画を見る →',
    'home.allProducts': 'すべての製品',
  },
  'es-ES': {
    'app.name': 'Gaoxian Robot',
    'app.tagline': 'Guía profesional de reparación de robots, soporte técnico integral',
    'common.search': 'Buscar', 'home.services': 'Servicios Principales', 'home.hotDocs': 'Documentos Populares', 'home.latest': 'Últimas Actualizaciones', 'home.recommend': 'Videos Recomendados', 'footer.desc': 'Plataforma profesional de gestión de documentos y videos postventa para equipos industriales.', 'footer.copyright': '© {year} {brand} · Plataforma Postventa de Robots Comerciales | Pro · Eficiente · Inteligente', 'common.docs': 'documentos', 'common.videos': 'vídeos', 'common.manuals': 'manuales', 'common.guides': 'guías', 'common.questions': 'preguntas', 'home.heroBadge': 'Plataforma Técnica Postventa', 'home.heroPrefix': 'Guía profesional de ', 'home.heroAccent': 'Reparación de Robots', 'home.heroSuffix': 'Servicio técnico postventa integral', 'home.searchPlaceholder': 'Buscar modelo, problema, método de reparación...', 'home.statProducts': 'Modelos', 'home.statDocs': 'Documentos', 'home.statVideos': 'Videos', 'home.statUsers': 'Usuarios', 'home.servicesSubtitle': 'Guía profesional de reparación, soporte técnico integral', 'home.productsSubtitle': 'Buscar documentos técnicos por serie de producto', 'home.videosSubtitle': 'Videos destacados para aprendizaje práctico', 'home.hotDocsSub': 'Las 6 guías más populares', 'service.guideDesc': 'Guía visual paso a paso para reemplazo de componentes', 'service.faqDesc': 'Problemas comunes con diagnóstico rápido y soluciones', 'service.videoDesc': 'Demostraciones visuales paso a paso por expertos', 'service.manualDesc': 'Manuales de productos, especificaciones, guías de instalación', 'common.guides': 'guías', 'common.questions': 'preguntas', 'common.manuals': 'manuales', 'common.docs': 'documentos', 'videos.subtitle': 'Videos de operación y mantenimiento de productos', 'a11y.skipToContent': 'Saltar al contenido principal', 'confirm.publishVideos': '¿Publicar {n} videos seleccionados?', 'confirm.deleteVideos': '¿Eliminar {n} videos seleccionados? ¡No se puede deshacer!', 'confirm.deleteVideo': '¿Eliminar este video? No se puede deshacer.', 'toast.bulkPublished': '{n} videos publicados', 'toast.bulkDeleted': '{n} videos eliminados', 'nav.home': 'Inicio', 'nav.products': 'Productos', 'nav.videos': 'Vídeos', 'nav.admin': 'Admin', 'nav.login': 'Iniciar sesión', 'nav.theme': 'Cambiar tema', 'nav.lang': 'Idioma', 'video.related': 'Vídeos relacionados', 'video.sameCat': 'Misma categoría', 'video.noMore': 'Sin más recomendaciones', 'video.liked': 'Like dado', 'video.faved': 'Favorito', 'video.instructor': 'Instructor', 'video.duration': 'Duración', 'video.updated': 'Actualizado', 'common.view': 'veces', 'search.title': 'Resultados de búsqueda', 'search.keyword': 'Palabra clave', 'search.found': 'encontrados', 'common.results': 'resultados', 'search.notFound': 'Sin resultados para', 'search.notFound2': '', 'search.tryHot': 'Pruebe estas búsquedas populares o explore las categorías de productos abajo', '讲师': 'Instructor', '时长': 'Duración', 'common.pieceTool': 'herramientas', 'common.piecePart': 'piezas', 'common.noTool': 'Sin herramientas', 'common.noPart': 'Sin piezas', 'common.times': 'veces', 'common.page': 'páginas', 'nav.products': 'Productos',
'doc.estimatedTime': 'Tiempo estimado', 'doc.tools': 'Herramientas necesarias', 'doc.parts': 'Piezas necesarias', 'doc.views': 'Visualizaciones',
'doc.prev': 'Anterior', 'doc.next': 'Siguiente', 'doc.first': 'Este es el primer documento', 'doc.last': 'Este es el último documento',
'doc.related': 'Relacionados', 'doc.notPublished': 'Documento no publicado', 'doc.notPublishedDesc': 'Este documento está siendo escrito o revisado, aún no está abierto a los clientes', 'doc.type': 'Documento',
'doc.pageOf': 'Página {n} / {total}', 'doc.copyright': 'Todos los derechos reservados',
'sidebar.tools': 'Herramientas necesarias', 'sidebar.parts': 'Piezas necesarias', 'sidebar.toc': 'Tabla de contenidos', 'sidebar.favorites': 'Mis favoritos', 'sidebar.history': 'Visto recientemente', 'sidebar.info': 'Info del documento', 'sidebar.noFav': 'Sin favoritos', 'sidebar.noHistory': 'Sin historial',
'toolbar.totalPages': '{n} páginas · desplaza para leer', 'toolbar.read': 'leído', 'toolbar.print': 'Imprimir', 'toolbar.copyLink': 'Copiar enlace', 'toolbar.top': 'Arriba', 'toolbar.bottom': 'Abajo',
'info.docId': 'ID Doc', 'info.version': 'Versión', 'info.pages': 'Páginas', 'info.difficulty': 'Dificultad', 'info.created': 'Creado',
'action.like': 'Útil', 'action.fav': 'Favorito', 'action.unfav': 'Quitar favorito', 'action.share': 'Compartir', 'action.exportPDF': 'Exportar PDF', 'action.backHome': 'Volver al inicio',
'tooltip.print': 'Imprimir o guardar como PDF', 'tooltip.copyLink': 'Copiar enlace del doc', 'tooltip.toTop': 'Volver arriba', 'tooltip.toBottom': 'Ir al final', 'tooltip.fontSmaller': 'Reducir fuente', 'tooltip.fontLarger': 'Aumentar fuente', 'tooltip.fontReset': 'Restablecer fuente (100%)', 'tooltip.delPage': 'Eliminar esta página',
'toast.linkCopied': 'Enlace copiado',
    'common.cancel': 'Cancelar', 'common.confirmTitle': 'Por favor confirme',
    'common.confirm': 'Confirmar',
    'common.save': 'Guardar',
    'common.delete': 'Eliminar',
    'common.edit': 'Editar',
    'common.view': 'Ver',
    'common.add': 'Nuevo',
    'common.import': 'Importar',
    'common.export': 'Exportar',
    'common.refresh': 'Actualizar',
    'common.reset': 'Restablecer',
    'common.back': 'Volver',
    'common.close': 'Cerrar',
    'common.more': 'Más',
    'common.actions': 'Acciones',
    'common.status': 'Estado',
    'common.category': 'Categoría',
    'common.loading': 'Cargando...',
    'common.noData': 'Sin datos',
    'common.all': 'Todo',
    'common.searchPlaceholder': 'Buscar modelo, problema, método de reparación...',
    'nav.home': 'Inicio',
    'nav.product': 'Productos',
    'nav.videos': 'Videos',
    'nav.admin': 'Admin',
    'nav.login': 'Iniciar sesión',
    'nav.logout': 'Cerrar sesión',
    'nav.profile': 'Perfil',
    'nav.theme': 'Tema',
    'nav.themeLight': 'Claro',
    'nav.themeDark': 'Oscuro',
    'nav.language': 'Idioma',
    'home.heroTitle': 'Guía Profesional de Reparación de Robots',
    'home.heroSubtitle': 'Centro de Soporte Postventa Integral',
    'home.searchPlaceholder': 'Buscar modelo, problema, método de reparación...',
    'home.services': 'Servicios Principales',
    'home.hotSearch': 'Búsquedas populares',
    'home.stats.products': 'Productos',
    'home.stats.docs': 'Documentos',
    'home.stats.videos': 'Videos',
    'home.stats.users': 'Usuarios',
    'service.guide': 'Guía de Reparación',
    'service.faq': 'Preguntas Frecuentes',
    'service.video': 'Video Tutoriales',
    'service.manual': 'Manuales Técnicos',
    'product.all': 'Todos los Productos',
    'product.detail': 'Detalle del Producto',
    'product.tools': 'Herramientas',
    'product.parts': 'Repuestos',
    'product.specs': 'Especificaciones',
    'product.related': 'Docs Relacionados',
    'product.relatedVideos': 'Videos Relacionados',
    'doc.toc': 'Tabla de Contenidos',
    'doc.favorites': 'Favoritos',
    'doc.recent': 'Recientes',
    'doc.info': 'Info del Doc',
    'doc.id': 'ID Doc',
    'doc.version': 'Versión',
    'doc.pages': 'Páginas',
    'doc.difficulty': 'Dificultad',
    'doc.print': 'Imprimir',
    'doc.copyLink': 'Copiar Enlace',
    'doc.exportPDF': 'Exportar PDF',
    'doc.like': 'Útil',
    'doc.liked': 'Útil',
    'doc.fav': 'Favorito',
    'doc.faved': 'Favorito',
    'doc.share': 'Compartir',
    'doc.copySuccess': 'Enlace copiado',
    'doc.totalPages': '{n} páginas',
    'doc.readingProgress': '{n}% leído',
    'doc.notFound': 'Documento no encontrado',
    'doc.unpublished': 'Aún no publicado',
    'doc.unpublishedDesc': 'Este documento está en redacción o revisión',
    'video.all': 'Todos los Videos',
    'video.duration': 'Duración',
    'video.play': 'Reproducir',
    'video.playExternal': 'Abrir en origen',
    'docType.guide': 'Guía de Reparación',
    'docType.manual': 'Manual',
    'docType.faq': 'Preguntas Frecuentes',
    'docType.spec': 'Especificación',
    'docType.install': 'Guía de Instalación',
    'status.published': 'Publicado',
    'status.draft': 'Borrador',
    'status.review': 'En Revisión',
    'status.developing': 'En Desarrollo',
    'status.planning': 'Planificación',
    'status.archived': 'Archivado',
    'status.active': 'Activo',
    'status.offline': 'Sin conexión',
    'status.online': 'En línea',
    'status.busy': 'Ocupado',
    'status.overdue': 'Vencido',
    'status.upcoming': 'Próximo',
    'diff.easy': 'Fácil',
    'diff.medium': 'Medio',
    'diff.hard': 'Difícil',
    'diff.expert': 'Experto',
    'admin.dashboard': 'Panel',
    'admin.docs': 'Documentos',
    'admin.videos': 'Videos',
    'admin.products': 'Productos',
    'admin.team': 'Equipo',
    'admin.users': 'Cuentas',
    'admin.data': 'Sistema',
    'admin.backToSite': 'Volver al sitio',
    'role.root_admin': 'Admin Root',
    'role.admin': 'Admin',
    'role.member': 'Miembro',
    'auth.loginTitle': 'Iniciar sesión',
    'auth.username': 'Usuario',
    'auth.password': 'Contraseña',
    'auth.login': 'Iniciar sesión',
    'auth.cancel': 'Cancelar',
    'auth.usernameRequired': 'Ingrese usuario y contraseña',
    'auth.invalid': 'Usuario o contraseña incorrectos',
    'auth.loginSuccess': '¡Bienvenido, {name}!',
    'auth.logoutSuccess': 'Sesión cerrada',
    'auth.needLogin': 'Inicie sesión primero',
    'auth.noPermission': 'Sin permisos de admin',
    'auth.demoAccount': 'Cuentas demo',
    'auth.root': 'Admin Root',
    'auth.manager': 'Admin',
    'auth.member': 'Miembro',
    'toast.saved': 'Guardado',
    'toast.deleted': 'Eliminado',
    'toast.copied': 'Copiado',
    'toast.copiedToClipboard': 'Copiado al portapapeles',
    'toast.failed': 'Falló',
    'toast.linkCopied': 'Enlace copiado',
    'toast.productSaved': 'Producto guardado',
    'toast.adjusted': 'Ajustado {orig} → 800×600',
    'toast.already800x600': 'Ya es 800×600',
    'toast.imageTooLarge': 'Imagen demasiado grande (>5MB)',
    'toast.unsupportedFormat': 'Solo JPG/PNG/WebP',
    'toast.imageLoadFailed': 'Error al cargar imagen',
    'toast.fileReadFailed': 'Error al leer archivo',
    'toast.needName': 'Nombre del producto requerido',
    'toast.needModel': 'Modelo requerido',
    'toast.needCategory': 'Categoría requerida',
    'date.today': 'Hoy',
    'date.yesterday': 'Ayer',
    'date.thisWeek': 'Esta semana',
    'date.thisMonth': 'Este mes',
    'date.lastUpdated': 'Actualizado',
    'title.welcome': 'Bienvenido',
    'title.overview': 'Resumen',
    'title.tasks': 'Tareas de hoy',
    // Modales de documento/video
    'doc.openFullPage': 'Abrir página completa',
    'doc.pageOfWithTotal': 'Página {n} / {total}',
    'video.openFullPage': 'Abrir página completa',
    'video.openExternal': 'Abrir en plataforma original',
    'video.notSupported': 'Su navegador no soporta reproducción de video',
    'video.notFound': 'Video no encontrado',
    'video.mute': 'Silenciar',
    'video.unmute': 'Activar sonido',
    'video.fullscreen': 'Pantalla completa',
    'video.exitFullscreen': 'Salir de pantalla completa',
    'video.volume': 'Volumen',
    // Home/Product page labels
    'home.viewAllProducts': 'Ver todos los productos →',
    'home.viewAllVideos': 'Ver todos los vídeos →',
    'home.allProducts': 'Todos los productos',
    'product.heroGuides': 'Guías de Reparación',
    'product.heroFaq': 'Solución de Problemas',
    'product.heroVideos': 'Video Tutoriales',
    'product.heroManuals': 'Manuales Técnicos',
    'product.sideGuides': 'Guías de Reparación',
    'product.sideFaq': 'Solución de Problemas',
    'product.sideVideos': 'Video Tutoriales',
    'product.sideManuals': 'Manuales Técnicos',
    'product.infoTitle': '📋 Información del Producto',
    'product.infoModel': 'Modelo',
    'product.infoStatus': 'Estado',
    'product.infoOnSale': 'En Venta',
    'product.infoDeveloping': 'En Desarrollo',
    'product.infoDocs': 'Total Documentos',
    'product.infoVideos': 'Total Vídeos',
    'product.tabGuides': '🔧 Guías de Reparación',
    'product.tabFaq': '🔍 Solución de Problemas',
    'product.tabVideos': '🎬 Video Tutoriales',
    'product.tabManuals': '📖 Manuales Técnicos',
    'product.emptyGuides': 'No hay guías de reparación',
    'product.emptyFaq': 'No hay documentos de solución',
    'product.emptyVideos': 'No hay video tutoriales',
    'product.emptyManuals': 'No hay manuales técnicos',
    'product.viewAllProducts': 'Ver todos los productos',
    'product.viewAllVideos': 'Ver todos los vídeos',
    'product.modelLabel': 'Modelo del producto',
    'product.statusDeveloping': 'En Desarrollo',
  }
};

// i18n 翻译函数
function t(key, params) {
  const dict = I18N[App.locale] || I18N['zh-CN'];
  let s = dict[key] || I18N['zh-CN'][key] || key;
  if (params) {
    Object.keys(params).forEach(k => {
      s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
    });
  }
  return s;
}

// 路由与状态管理
const App = {
  currentRoute: 'home',
  currentProductId: null,
  currentDocId: null,
  currentDocPage: 1,
  currentVideoId: null,
  currentAdminTab: 'dashboard',
  editorDocId: null,
  editorPageIndex: 0,
  filterType: 'all',
  videoCategory: 'all',
  productVideoTab: 'all',
  searchQuery: '',
  docSearch: '',
  docStatusFilter: 'all',
  docProductFilter: 'all',
  docTypeFilter: 'all',
  docSortField: 'updatedAt',
  docSortDir: 'desc',
  videoSortField: 'updatedAt',
  videoSortDir: 'desc',
  videoStatusFilter: 'all',
  videoProductFilter: 'all',
  videoCatFilter: 'all',
  docTab: 'docs',
  productTab: 'docs',
  productListDocType: null,
  currentUser: null,
  showLoginModal: false,
  editingProductId: null,
  editingProductCover: '',
  locale: 'zh-CN',

  init() {
    this.initTheme();
    this.initLocale();
    this._loadTrCache(); // 加载翻译缓存
    // 加载当前用户会话
    this.currentUser = DataStore.getCurrentUser();
    // 先尝试从 URL hash 恢复路由（支持分享链接和浏览器刷新）
    const restored = this._restoreFromHash();
    if (!restored) this.render();
    // 监听 hash 变化（浏览器后退/前进/手动改 URL）
    window.addEventListener('hashchange', () => {
      if (location.hash && location.hash.startsWith('#/')) {
        // 浏览器后退/前进只恢复界面状态，不应再次累加阅读量或历史记录。
        this._restoreFromHash({ restore: true });
      }
    });
    // 启动预翻译（异步，不阻塞首屏）
    if (this.locale !== 'zh-CN') {
      setTimeout(() => this._pretranslateAll(), 1000);
    }
    // 标记首次加载完成，避免后续 render 触发全局淡入（Bug #37）
    requestAnimationFrame(() => document.body.classList.add('app-loaded'));
  },

  navigate(route, params = {}, options = {}) {
    this.currentRoute = route;
    if (params.productId !== undefined) {
      this.currentProductId = params.productId;
    } else if (route === 'product') {
      // 跳转产品列表页时，如果没有传 productId，清空当前产品ID
      this.currentProductId = null;
    }
    if (params.docId) {
      this.currentDocId = params.docId;
      this.currentDocPage = 1;
      if (!options.restore) {
        // 浏览文档时增加阅读量并写入历史；历史恢复不应重复计数。
        DataStore.incrementDocViews(params.docId);
        const doc = DataStore.getDocById(params.docId);
        if (doc) {
          DataStore.addViewHistory({
            type: 'doc',
            id: doc.id,
            title: doc.title,
            productId: doc.productId
          });
        }
      }
    }
    if (params.videoId) {
      this.currentVideoId = params.videoId;
      if (!options.restore) {
        DataStore.incrementVideoViews(params.videoId);
        const v = DataStore.getVideoById(params.videoId);
        if (v) {
          DataStore.addViewHistory({
            type: 'video',
            id: v.id,
            title: v.title,
            thumbnail: v.thumbnail,
            productId: v.productId
          });
        }
      }
    }
    if (params.adminTab) this.currentAdminTab = params.adminTab;
    if (params.editorDocId) {
      this.editorDocId = params.editorDocId;
      this.editorPageIndex = 0;
      this.currentRoute = 'editor';
    }
    if (params.q) this.searchQuery = params.q;
    if (params.docType) {
      this.filterType = params.docType;
      this.productVideoTab = 'all';
    }
    if (params.videoCategory) {
      this.videoCategory = params.videoCategory;
    }
    // 重置产品页 Tab
    if (route === 'product' && !params.productId) {
      this.productTab = 'guides';
      this.productVideoTab = 'all';
    }
    // 重置视频列表页筛选状态
    if (route === 'videos' && !params.videoCategory) {
      this.videoCategory = 'all';
      this.videoListProduct = 'all';
      this.videoSearch = '';
      this.videoSortBy = 'latest';
    }

    // 权限检查：后台页面需要登录且有 admin 角色
    if (route.startsWith('admin') || route === 'editor') {
      if (!this.currentUser) {
        this.showToast(this.t('auth.needLogin'), 'warning');
        // 记住用户想去的后台 tab，登录后跳过去
        if (route === 'admin') this._pendingAdminTab = params.adminTab || 'dashboard';
        this.showLogin();
        return;
      }
      if (this.currentUser.role === 'member') {
        this.showToast(this.t('auth.noPermission'), 'error');
        if (this.currentRoute !== 'home') {
          this.currentRoute = 'home';
          this.render();
        }
        return;
      }
    }

    window.scrollTo(0, 0);
    this.closeMobileNav();
    this._syncHash();
    this.render();
  },

  // 同步 URL hash（用于分享/书签/浏览器后退）
  _syncHash() {
    try {
      const parts = [this.currentRoute];
      const params = [];
      if (this.currentRoute === 'doc' && this.currentDocId) params.push('id=' + this.currentDocId);
      else if (this.currentRoute === 'video' && this.currentVideoId) params.push('id=' + this.currentVideoId);
      else if (this.currentRoute === 'product' && this.currentProductId) params.push('id=' + this.currentProductId);
      else if (this.currentRoute === 'search' && this.searchQuery) params.push('q=' + encodeURIComponent(this.searchQuery));
      else if (this.currentRoute === 'admin' && this.currentAdminTab) params.push('tab=' + this.currentAdminTab);
      const hash = params.length ? '#/' + parts[0] + '?' + params.join('&') : '#/' + parts[0];
      if (location.hash !== hash) {
        // replaceState 会覆盖上一页，导致浏览器后退/前进无效；普通导航应新增一条历史记录。
        history.pushState(null, '', hash);
      }
    } catch (e) { /* ignore */ }
  },

  // 从 URL hash 还原路由（用于刷新和直接打开链接）
  _restoreFromHash(options = {}) {
    try {
      const h = location.hash || '';
      if (!h.startsWith('#/')) return false;
      const rest = h.slice(2);
      const [path, queryStr = ''] = rest.split('?');
      const params = {};
      queryStr.split('&').filter(Boolean).forEach(kv => {
        const [k, v = ''] = kv.split('=');
        if (k === 'id') params._id = decodeURIComponent(v);
        else params[k] = decodeURIComponent(v);
      });
      const routeMap = {
        home: 'home', product: 'product', videos: 'videos', doc: 'doc',
        video: 'video', admin: 'admin', search: 'search', editor: 'editor'
      };
      if (!routeMap[path]) return false;
      const args = {};
      if (path === 'doc') args.docId = params._id;
      else if (path === 'video') args.videoId = params._id;
      else if (path === 'product') args.productId = params._id;
      else if (path === 'search') args.q = params._id || params.q || '';
      else if (path === 'admin') args.adminTab = params.tab || 'dashboard';
      this.navigate(path, args, options);
      return true;
    } catch (e) { return false; }
  },

  // 检查是否有 admin 权限
  hasAdminPermission() {
    return this.currentUser && (this.currentUser.role === 'admin' || this.currentUser.role === 'root_admin');
  },

  // 检查是否是 root_admin
  isRootAdmin() {
    return this.currentUser && this.currentUser.role === 'root_admin';
  },

  // 登录
  login(username, password) {
    const user = DataStore.login(username, password);
    if (user) {
      this.currentUser = user;
      DataStore.setCurrentUser(user.id);
      // 显式移除登录模态 DOM（render 不会清掉 body 内的模态）
      const modal = document.getElementById('loginModal');
      if (modal) modal.remove();
      this.showLoginModal = false;
      this.showToast(`欢迎回来，${user.name}！`, 'success');
      // 如果想去后台且有权限，直接进入
      if (this.currentRoute === 'home' && this._pendingAdminTab) {
        const tab = this._pendingAdminTab;
        this._pendingAdminTab = null;
        this.navigate('admin', { adminTab: tab });
      } else {
        // 未登录访问后台时，路由已切到 admin 但尚未写入地址栏。
        // 登录成功后同步，保证刷新及浏览器历史都回到正确页面。
        this._syncHash();
        this.render();
      }
      return true;
    }
    return false;
  },

  // 登出
  logout() {
    this.currentUser = null;
    DataStore.setCurrentUser(null);
    this.showToast(this.t('auth.logoutSuccess'), 'success');
    // 如果在后台页，跳回首页
    if (this.currentRoute.startsWith('admin')) {
      this.navigate('home');
    } else {
      this.render();
    }
  },

  // 显示登录弹窗
  showLogin() {
    this.showLoginModal = true;
    this.render();
  },

  // 关闭登录弹窗
  closeLogin() {
    const modal = document.getElementById('loginModal');
    if (modal) modal.remove();
    this.showLoginModal = false;
  },

  // 切换用户菜单下拉
  toggleUserMenu() {
    let menu = document.getElementById('userDropdownMenu');
    if (menu) { menu.remove(); return; }
    const btn = document.getElementById('userMenuBtn');
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    menu = document.createElement('div');
    menu.id = 'userDropdownMenu';
    // 关键：append 到 body，绝对定位，避免被 userMenuBtn 的 onclick 拦截
    menu.style.cssText = `position:fixed;top:${rect.bottom + 8}px;left:${rect.right - 220}px;background:white;border:1px solid var(--gray-200);border-radius:var(--radius-md);box-shadow:0 8px 32px rgba(0,0,0,0.12);min-width:220px;z-index:99999;padding:8px 0;`;
    const u = this.currentUser;
    if (!u) return;
    const roleLabel = u.role === 'root_admin' ? '根管理员' : u.role === 'admin' ? '管理员' : '成员';
    menu.innerHTML = `
      <div style="padding:12px 16px;border-bottom:1px solid var(--gray-100);">
        <div style="font-weight:600;color:var(--gray-900);">${this.tr(u.name)}</div>
        <div style="font-size:12px;color:var(--gray-500);margin-top:2px;">${u.email || '未设置邮箱'}</div>
        <div style="margin-top:6px;display:inline-block;padding:2px 8px;font-size:11px;border-radius:10px;background:${u.role === 'root_admin' ? '#fef3c7' : u.role === 'admin' ? '#dbeafe' : '#f3f4f6'};color:${u.role === 'root_admin' ? '#92400e' : u.role === 'admin' ? '#1e40af' : '#374151'};">${roleLabel}</div>
      </div>
      <a href="javascript:void(0)" class="user-menu-item" data-action="profile" style="display:block;padding:8px 16px;font-size:13px;color:var(--gray-700);text-decoration:none;cursor:pointer;">👤 个人信息</a>
      ${this.isRootAdmin() ? `
        <a href="javascript:void(0)" class="user-menu-item" data-action="users" style="display:block;padding:8px 16px;font-size:13px;color:var(--gray-700);text-decoration:none;cursor:pointer;">⚙️ 账号管理</a>
      ` : ''}
      <div style="border-top:1px solid var(--gray-100);margin-top:4px;"></div>
      <a href="javascript:void(0)" class="user-menu-item" data-action="logout" style="display:block;padding:8px 16px;font-size:13px;color:var(--danger);text-decoration:none;cursor:pointer;">🚪 退出登录</a>
    `;
    document.body.appendChild(menu);

    // 用 addEventListener 绑定事件，stopPropagation 防止冒泡到 #userMenuBtn
    menu.querySelectorAll('.user-menu-item').forEach(a => {
      a.addEventListener('mouseenter', () => a.style.background = 'var(--gray-50)');
      a.addEventListener('mouseleave', () => a.style.background = 'transparent');
      a.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const action = a.dataset.action;
        menu.remove();
        if (action === 'profile') this.showProfileModal();
        else if (action === 'users') this.navigate('admin', { adminTab: 'users' });
        else if (action === 'logout') { this.logout(); }
      });
    });

    // 点击外部关闭：检查 target 在 menu 内或 btn 内
    setTimeout(() => {
      const closeOnOutside = (e) => {
        if (!e.target.closest('#userDropdownMenu') && !e.target.closest('#userMenuBtn')) {
          menu.remove();
          document.removeEventListener('click', closeOnOutside);
        }
      };
      document.addEventListener('click', closeOnOutside);
    }, 10);
  },

  closeUserMenu() {
    const menu = document.getElementById('userDropdownMenu');
    if (menu) menu.remove();
  },

  // 显示个人信息模态
  showProfileModal() {
    this.closeUserMenu();
    let modal = document.getElementById('profileModal');
    if (modal) modal.remove();
    if (!this.currentUser) return;
    const u = this.currentUser;
    const roleLabel = { root_admin: '根管理员', admin: '管理员', member: '成员' }[u.role] || u.role;
    modal = document.createElement('div');
    modal.id = 'profileModal';
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) this.closeProfileModal(); };
    modal.innerHTML = `
      <div class="modal" style="max-width:520px;width:90%;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div class="modal-title">👤 个人信息</div>
          <button class="modal-close" onclick="App.closeProfileModal()">×</button>
        </div>
        <div class="modal-body">
          <div style="display:flex;align-items:center;gap:16px;padding:14px 16px;background:var(--gray-50);border-radius:var(--radius-md);margin-bottom:18px;">
            <div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--primary),#60a5fa);color:white;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;flex-shrink:0;">${(u.name || '?').charAt(0)}</div>
            <div style="flex:1;">
              <div style="font-size:16px;font-weight:600;color:var(--gray-900);">${this.tr(u.name)}</div>
              <div style="font-size:12px;color:var(--gray-500);margin-top:2px;">@${u.username}</div>
              <div style="margin-top:6px;display:inline-block;padding:2px 10px;font-size:11px;border-radius:10px;background:${u.role === 'root_admin' ? '#fef3c7' : u.role === 'admin' ? '#dbeafe' : '#f3f4f6'};color:${u.role === 'root_admin' ? '#92400e' : u.role === 'admin' ? '#1e40af' : '#374151'};">${roleLabel}</div>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px;">
            <div>
              <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">姓名</label>
              <input type="text" id="profileName" value="${(u.name || '').replace(/"/g, '&quot;')}" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;color:var(--gray-900);">
            </div>
            <div>
              <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">用户名</label>
              <input type="text" value="${u.username}" disabled style="width:100%;padding:8px 12px;border:1px solid var(--gray-200);border-radius:var(--radius-md);font-size:14px;background:var(--gray-100);color:var(--gray-500);cursor:not-allowed;">
            </div>
          </div>

          <div style="margin-bottom:14px;">
            <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">邮箱</label>
            <input type="email" id="profileEmail" value="${(u.email || '').replace(/"/g, '&quot;')}" placeholder="your@example.com" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;color:var(--gray-900);">
          </div>

          <div style="margin-bottom:14px;">
            <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">所属部门</label>
            <input type="text" value="${(u.department || '').replace(/"/g, '&quot;') || '未设置'}" disabled style="width:100%;padding:8px 12px;border:1px solid var(--gray-200);border-radius:var(--radius-md);font-size:14px;background:var(--gray-100);color:var(--gray-500);cursor:not-allowed;">
          </div>

          <div style="background:var(--gray-50);border-radius:var(--radius-md);padding:12px 14px;margin-bottom:14px;">
            <div style="font-size:13px;font-weight:600;color:var(--gray-700);margin-bottom:8px;">🔒 修改密码</div>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
              <input type="password" id="profileNewPwd" placeholder="新密码（留空不改）" style="padding:7px 10px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:13px;background:white;color:var(--gray-900);">
              <input type="password" id="profileConfirmPwd" placeholder="确认新密码" style="padding:7px 10px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:13px;background:white;color:var(--gray-900);">
            </div>
          </div>

          <div style="font-size:12px;color:var(--gray-500);line-height:1.5;">
            📅 上次登录：${u.lastLogin ? new Date(u.lastLogin).toLocaleString() : '本次会话'}<br>
            📆 创建时间：${u.createdAt || '系统内置'}
          </div>
        </div>
        <div class="modal-footer" style="display:flex;justify-content:flex-end;gap:10px;padding:14px 20px;border-top:1px solid var(--gray-200);background:var(--gray-50);">
          <button class="btn btn-secondary" onclick="App.closeProfileModal()">关闭</button>
          <button class="btn btn-primary" onclick="App.saveProfile()">💾 保存修改</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  closeProfileModal() {
    const modal = document.getElementById('profileModal');
    if (modal) modal.remove();
  },

  // 保存个人信息修改
  saveProfile() {
    if (!this.currentUser) return;
    const name = document.getElementById('profileName').value.trim();
    const email = document.getElementById('profileEmail').value.trim();
    const newPwd = document.getElementById('profileNewPwd').value;
    const confirmPwd = document.getElementById('profileConfirmPwd').value;

    if (!name) {
      this.showToast('姓名不能为空', 'warning');
      return;
    }
    if (newPwd || confirmPwd) {
      if (newPwd !== confirmPwd) {
        this.showToast('两次密码输入不一致', 'error');
        return;
      }
      if (newPwd.length < 6) {
        this.showToast('新密码至少 6 位', 'warning');
        return;
      }
    }

    const updates = { name, email };
    if (newPwd) updates.password = newPwd;
    const ok = DataStore.updateUser(this.currentUser.id, updates);
    if (ok) {
      // 刷新当前用户
      this.currentUser = DataStore.getCurrentUser();
      this.showToast('个人信息已保存', 'success');
      this.closeProfileModal();
      this.render();
    } else {
      this.showToast('保存失败', 'error');
    }
  },

  render() {
    const app = document.getElementById('app');
    if (!app) return;
    const route = this.currentRoute;
    try {
      // 更新 document.title
      if (typeof this.updateDocTitle === 'function') this.updateDocTitle(route);
      if (route.startsWith('admin')) {
        app.innerHTML = this.renderAdminLayout();
      } else if (route === 'editor') {
        this.renderEditorPage();
        return;
      } else {
        app.innerHTML = this.renderPublicLayout();
      }
    } catch (err) {
      console.error('Render error:', err);
      app.innerHTML = `
        <div style="padding:80px 24px;text-align:center;">
          <div style="font-size:64px;margin-bottom:16px;">😵</div>
          <h2 style="color:var(--gray-700);margin-bottom:8px;">页面渲染出错</h2>
          <p style="color:var(--gray-500);margin-bottom:24px;">${(err && err.message) || '未知错误'}</p>
          <button class="btn btn-primary" onclick="App.navigate('home')">${this.t('action.backHome')}</button>
        </div>
      `;
      this.showToast('页面渲染出错，已降级到首页', 'error');
    }

    this.bindEvents();
    this.initTableResize();
    // 滚动到顶部（路由切换时）
    window.scrollTo({ top: 0, behavior: 'instant' });

    // 登录弹窗（全局浮层，不参与路由切换）
    if (this.showLoginModal) {
      this.mountLoginModal();
    }
    // 产品编辑弹窗
    if (this.editingProductId) {
      this.mountEditProductModal();
    }
  },

  // 挂载登录弹窗
  mountLoginModal() {
    let modal = document.getElementById('loginModal');
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.id = 'loginModal';
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) this.closeLogin(); };
    const roleDesc = {
      root_admin: '根管理员：全部权限 + 可管理其他账号',
      admin: '二级管理员：管理文档/视频/产品',
      member: '成员：只能浏览前台'
    };
    modal.innerHTML = `
      <div class="modal" style="max-width:440px;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div class="modal-title">🔐 ${this.t('auth.loginTitle')}</div>
          <button class="modal-close" onclick="App.closeLogin()">×</button>
        </div>
        <div class="modal-body">
          <div style="background:var(--primary-light);border-radius:var(--radius-md);padding:10px 12px;margin-bottom:18px;font-size:12px;color:var(--gray-700);line-height:1.6;">
            <strong>💡 ${this.t('auth.demoAccount')}：</strong><br>
            ${this.t('auth.root')}：<code>admin</code> / <code>admin</code><br>
            ${this.t('auth.manager')}：<code>manager</code> / <code>manager</code><br>
            ${this.t('auth.member')}：<code>member</code> / <code>member</code>
          </div>
          <div class="form-group">
            <label>${this.t('auth.username')} <span class="required">*</span></label>
            <input type="text" id="loginUsername" placeholder="${this.t('auth.username')}" autofocus>
          </div>
          <div class="form-group">
            <label>${this.t('auth.password')} <span class="required">*</span></label>
            <input type="password" id="loginPassword" placeholder="${this.t('auth.password')}">
          </div>
          <div id="loginError" style="display:none;color:var(--danger);font-size:13px;margin-top:8px;"></div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-secondary" onclick="App.closeLogin()">${this.t('common.cancel')}</button>
          <button class="btn btn-primary" onclick="App.handleLoginSubmit()">${this.t('auth.login')}</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    // 自动聚焦 + 回车提交
    setTimeout(() => {
      const u = document.getElementById('loginUsername');
      if (u) u.focus();
    }, 100);
    const submitOnEnter = (e) => {
      if (e.key === 'Enter') this.handleLoginSubmit();
    };
    document.getElementById('loginUsername').addEventListener('keydown', submitOnEnter);
    document.getElementById('loginPassword').addEventListener('keydown', submitOnEnter);
  },

  // 挂载产品编辑弹窗
  mountEditProductModal() {
    let modal = document.getElementById('editProductModal');
    if (modal) modal.remove();
    const p = DataStore.getProductById(this.editingProductId);
    if (!p) {
      this.editingProductId = null;
      return;
    }
    const coverHtml = p.cover
      ? `<img src="${p.cover}" class="product-cover-img" style="width:100%;height:100%;object-fit:cover;">`
      : '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--gray-100);color:var(--gray-400);font-size:12px;">暂无封面<br>请填写封面 URL</div>';

    // 现有分类列表
    const allCats = [...new Set(DataStore.getProducts().map(x => x.category))].filter(Boolean);
    const catOptions = allCats.map(c => `<option value="${c}" ${p.category === c ? 'selected' : ''}>${c}</option>`).join('');

    modal = document.createElement('div');
    modal.id = 'editProductModal';
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) this.closeEditProductModal(); };
    modal.innerHTML = `
      <div class="modal" style="max-width:760px;width:90%;">
        <div class="modal-header">
          <div class="modal-title">✏️ 编辑产品</div>
          <button class="modal-close" onclick="App.closeEditProductModal()">×</button>
        </div>
        <div class="modal-body" style="max-height:75vh;overflow-y:auto;">
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;">
            <!-- 左侧：封面预览 + 上传/调整 -->
            <div>
              <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:8px;">产品封面（800×600）</label>
              <div id="productCoverPreview" style="width:100%;aspect-ratio:4/3;border-radius:var(--radius-md);overflow:hidden;border:2px dashed var(--gray-200);margin-bottom:10px;position:relative;background:#f8fafc;">
                ${coverHtml}
                ${p.cover ? `
                  <div style="position:absolute;top:6px;right:6px;display:flex;gap:4px;">
                    <button type="button" onclick="event.stopPropagation();App.removeProductCover()" title="移除封面" style="width:28px;height:28px;border-radius:6px;border:none;background:rgba(0,0,0,0.55);color:white;cursor:pointer;font-size:14px;line-height:1;display:flex;align-items:center;justify-content:center;">×</button>
                  </div>
                ` : ''}
              </div>
              <!-- 上传 + 调整按钮组 -->
              <div style="display:flex;gap:8px;margin-bottom:8px;align-items:stretch;">
                <label style="flex:1;display:flex;align-items:center;justify-content:center;gap:6px;padding:9px 10px;background:var(--primary);color:white;border-radius:var(--radius-md);cursor:pointer;font-size:13px;font-weight:500;transition:opacity 0.2s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                  <span>📁</span>
                  <span>上传图片</span>
                  <input type="file" id="productCoverFile" accept="image/jpeg,image/png,image/webp" style="display:none;" onchange="App.handleProductCoverUpload(this.files[0])">
                </label>
                <button type="button" id="productCoverAdjustBtn" onclick="App.openCoverAdjust()" style="flex:0 0 auto;min-width:90px;display:${p.cover && p.cover.startsWith('data:') ? 'flex' : 'none'};align-items:center;justify-content:center;gap:4px;padding:9px 12px;background:white;color:var(--gray-700);border:1px solid var(--gray-300);border-radius:var(--radius-md);cursor:pointer;font-size:13px;white-space:nowrap;" title="调整封面（裁剪/缩放）">
                  <span>✂️</span>
                  <span>调整</span>
                </button>
              </div>
              <!-- 原图信息（上传后显示） -->
              <div id="productCoverInfo" style="font-size:11px;color:var(--gray-500);line-height:1.5;display:${p._coverOriginalInfo ? 'block' : 'none'};">
                ${p._coverOriginalInfo || ''}
              </div>
              <div style="font-size:11px;color:var(--gray-500);line-height:1.5;margin-top:6px;">
                💡 必须 800×600 像素，上传时自动调整（保持比例居中裁剪）
              </div>
            </div>
            <!-- 右侧：表单 -->
            <div style="display:flex;flex-direction:column;gap:14px;">
              <div>
                <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">产品名称 <span style="color:#ef4444;">*</span></label>
                <input type="text" id="editProductName" value="${(p.name || '').replace(/"/g, '&quot;')}" class="form-input" placeholder="如：ZX-200 智能水泵" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;">
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div>
                  <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">产品型号 <span style="color:#ef4444;">*</span></label>
                  <input type="text" id="editProductModel" value="${(p.model || '').replace(/"/g, '&quot;')}" class="form-input" placeholder="如：ZX-200" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;">
                </div>
                <div>
                  <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">图标 Emoji</label>
                  <input type="text" id="editProductIcon" value="${(p.icon || '').replace(/"/g, '&quot;')}" maxlength="4" placeholder="💧" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:18px;text-align:center;">
                </div>
              </div>
              <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;">
                <div>
                  <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">分类</label>
                  <select id="editProductCategory" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;">
                    ${catOptions}
                    <option value="__custom__">+ 自定义分类</option>
                  </select>
                  <input type="text" id="editProductCategoryCustom" placeholder="输入新分类" style="display:none;width:100%;margin-top:6px;padding:6px 10px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:13px;">
                </div>
                <div>
                  <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">状态</label>
                  <select id="editProductStatus" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;">
                    <option value="active" ${p.status === 'active' ? 'selected' : ''}>在售</option>
                    <option value="developing" ${p.status === 'developing' ? 'selected' : ''}>开发中</option>
                    <option value="archived" ${p.status === 'archived' ? 'selected' : ''}>已归档</option>
                  </select>
                </div>
              </div>
              <div>
                <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">封面 URL</label>
                <div style="display:flex;gap:6px;">
                  <input type="text" id="editProductCover" value="${(p.cover && !p.cover.startsWith('data:') ? p.cover : '').replace(/"/g, '&quot;')}" placeholder="https://example.com/cover.jpg" oninput="App.updateProductCoverPreview(this.value)" style="flex:1;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:13px;">
                  <button type="button" id="coverStatusBtn" onclick="App.toggleCoverUrlEdit()" style="display:${p.cover && p.cover.startsWith('data:') ? 'flex' : 'none'};align-items:center;padding:0 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);background:var(--primary-light);color:var(--primary);font-size:12px;cursor:pointer;white-space:nowrap;" title="data URL 已嵌入到产品中（${p.cover ? Math.round(p.cover.length/1024) : 0} KB）">📦 ${p.cover && p.cover.startsWith('data:') ? '已嵌入 ' + Math.round(p.cover.length/1024) + 'KB' : '已嵌入'}</button>
                </div>
                <div style="font-size:11px;color:var(--gray-500);margin-top:4px;line-height:1.4;">
                  ${p.cover && p.cover.startsWith('data:')
                    ? '✅ 已嵌入 base64 图片（直接保存到本地，无需外链）'
                    : '支持图片 URL 或上传本地图片（自动转为 800×600 嵌入）'}
                </div>
              </div>
              <div>
                <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">产品描述</label>
                <textarea id="editProductDesc" rows="4" placeholder="简要描述产品特点与用途..." style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:13px;line-height:1.6;resize:vertical;">${(p.description || '').replace(/</g, '&lt;').replace(/>/g, '&gt;')}</textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer" style="display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-top:1px solid var(--gray-200);background:var(--gray-50);border-radius:0 0 var(--radius-lg) var(--radius-lg);">
          <span style="font-size:12px;color:var(--gray-500);">最后更新：${p.createdAt || '-'}</span>
          <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="App.closeEditProductModal()">取消</button>
            <button class="btn btn-primary" onclick="App.saveProductChanges()">💾 保存</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // 封面图加载失败处理（addEventListener 避免 onerror 嵌套引号导致后续 button 被吞）
    const coverImg = modal.querySelector('.product-cover-img');
    if (coverImg) {
      coverImg.addEventListener('error', () => {
        coverImg.outerHTML = '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--gray-100);color:var(--gray-400);font-size:12px;">图片加载失败</div>';
      });
    }

    // 关键：模态打开时同步现有 p.cover 到 dataset.cover（避免不修改封面时保存丢失图）
    const editCoverInput = modal.querySelector('#editProductCover');
    if (editCoverInput && p.cover) {
      editCoverInput.dataset.cover = p.cover;
    }

    // 分类下拉切换为自定义
    const catSel = document.getElementById('editProductCategory');
    const catCustom = document.getElementById('editProductCategoryCustom');
    catSel.addEventListener('change', () => {
      if (catSel.value === '__custom__') {
        catCustom.style.display = 'block';
        catCustom.focus();
      } else {
        catCustom.style.display = 'none';
        catCustom.value = '';
      }
    });

    // ESC 关闭
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        this.closeEditProductModal();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
  },

  // ========================================
  // 文档预览弹窗（点击 doc 名字 → 弹模态预览，分页可滚动）
  // ========================================
  openDocPreviewModal(docId) {
    const doc = DataStore.getDocById(docId);
    if (!doc) {
      this.showToast(this.t('doc.notFound'), 'error');
      return;
    }
    // 关闭已有的
    const existing = document.getElementById('docPreviewModal');
    if (existing) existing.remove();

    // 同步当前文档 ID，供 exportPDF 等依赖 currentDocId 的方法使用
    this.currentDocId = docId;

    // 加入浏览历史
    if (typeof DataStore.addViewHistory === 'function') {
      DataStore.addViewHistory({
        id: doc.id, type: 'doc', title: doc.title, productId: doc.productId, thumbnail: '📄'
      });
    }
    // 浏览次数 +1
    if (typeof DataStore.incrementDocViews === 'function') {
      DataStore.incrementDocViews(doc.id);
    } else if (doc.views !== undefined) {
      doc.views = (doc.views || 0) + 1;
    }

    const product = DataStore.getProductById(doc.productId);
    const docTypes = DataStore.getDocTypes();
    const typeInfo = docTypes.find(t => t.id === doc.type) || { name: this.t('doc.type'), icon: '📄', color: 'guide' };
    const totalPages = doc.pages || (doc.content ? doc.content.length : 0);

    // 难度等级映射
    const diffMap = {
      easy: { name: this.t('diff.easy'), color: 'green', icon: '⭐' },
      medium: { name: this.t('diff.medium'), color: 'yellow', icon: '⭐⭐' },
      hard: { name: this.t('diff.hard'), color: 'orange', icon: '⭐⭐⭐' },
      expert: { name: this.t('diff.expert'), color: 'red', icon: '⭐⭐⭐⭐' }
    };
    const diffInfo = diffMap[doc.difficulty] || diffMap.medium;

    const modal = document.createElement('div');
    modal.id = 'docPreviewModal';
    modal.className = 'modal-overlay doc-preview-overlay';
    modal.onclick = (e) => { if (e.target === modal) this.closeDocPreviewModal(); };

    modal.innerHTML = `
      <div class="modal doc-preview-modal">
        <div class="doc-preview-header">
          <div style="flex:1;min-width:0;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap;">
              <span class="doc-type-tag ${typeInfo.color}">${typeInfo.icon} ${this.tr(typeInfo.name)}</span>
              <span class="diff-badge diff-${diffInfo.color}">${diffInfo.icon} ${diffInfo.name}</span>
              ${product ? `<span style="font-size:12px;color:var(--gray-500);">${product.icon} ${this.tr(product.name)}</span>` : ''}
            </div>
            <h2 class="doc-preview-title">${this.tr(doc.title)}</h2>
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0;">
            <button class="modal-icon-btn" onclick="App.navigate('doc', {docId: '${doc.id}'});App.closeDocPreviewModal();" title="${this.t('doc.openFullPage')}">⛶</button>
            <button class="modal-close" onclick="App.closeDocPreviewModal()" title="关闭">×</button>
          </div>
        </div>
        <div class="doc-preview-meta">
          <span>📖 ${totalPages} ${this.t('common.page')}</span>
          <span style="color:var(--gray-300);">|</span>
          <span>⏱ ${doc.estimatedTime || '—'}</span>
          <span style="color:var(--gray-300);">|</span>
          <span>👤 ${doc.author}</span>
          <span style="color:var(--gray-300);">|</span>
          <span>📅 ${doc.updatedAt}</span>
          <span style="flex:1;"></span>
          <button class="fav-btn ${DataStore.isFavorite('doc', doc.id) ? 'faved' : ''}" onclick="App.toggleDocFav('${doc.id}');this.classList.toggle('faved');this.querySelector('span').textContent=DataStore.isFavorite('doc','${doc.id}')?'❤️':'🤍'">
            <span>${DataStore.isFavorite('doc', doc.id) ? '❤️' : '🤍'}</span>
          </button>
        </div>
        <div class="doc-preview-body" id="docPreviewBody">
          ${(doc.content || []).map((page, idx) => `
            <div class="doc-preview-page" id="docPreviewPage-${idx + 1}" data-page-idx="${idx}">
              <div class="doc-preview-page-header">
                <span>${product ? this.tr(product.name) : SITE_NAME}</span>
                <span>${this.tr(doc.title)}</span>
              </div>
              <div class="doc-preview-page-body">
                ${page.html || ''}
              </div>
              <div class="doc-preview-page-footer">
                <span>© ${SITE_NAME} ${this.t('doc.copyright')}</span>
                <span>${this.t('doc.pageOf', {n: idx+1, total: totalPages})}</span>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="doc-preview-footer">
          <button class="modal-page-btn" id="docPreviewPrevBtn" onclick="App._docPreviewPrev()" title="${this.t('doc.prev')}">← ${this.t('doc.prev')}</button>
          <span class="doc-preview-pager">
              <span id="docPreviewCurrentPage">1</span> / ${totalPages}
            </span>
          <button class="modal-page-btn" id="docPreviewNextBtn" onclick="App._docPreviewNext()" title="${this.t('doc.next')}">${this.t('doc.next')} →</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // 滚动监听高亮当前页码
    const body = document.getElementById('docPreviewBody');
    const updatePager = () => {
      if (!body) return;
      const pages = body.querySelectorAll('.doc-preview-page');
      let current = 1;
      pages.forEach((pg, i) => {
        const rect = pg.getBoundingClientRect();
        const bodyRect = body.getBoundingClientRect();
        if (rect.top <= bodyRect.top + 100 && rect.bottom > bodyRect.top + 100) {
          current = i + 1;
        }
      });
      const cur = document.getElementById('docPreviewCurrentPage');
      if (cur) cur.textContent = current;
    };
    if (body) {
      body.addEventListener('scroll', updatePager);
      setTimeout(updatePager, 100);
    }

    // ESC 关闭
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        this.closeDocPreviewModal();
        document.removeEventListener('keydown', escHandler);
      }
    };
    document.addEventListener('keydown', escHandler);
    this._docPreviewEscHandler = escHandler;
  },

  closeDocPreviewModal() {
    const modal = document.getElementById('docPreviewModal');
    if (modal) modal.remove();
    if (this._docPreviewEscHandler) {
      document.removeEventListener('keydown', this._docPreviewEscHandler);
      this._docPreviewEscHandler = null;
    }
  },

  // 上一页
  _docPreviewPrev() {
    const body = document.getElementById('docPreviewBody');
    if (!body) return;
    const pages = body.querySelectorAll('.doc-preview-page');
    const cur = parseInt(document.getElementById('docPreviewCurrentPage')?.textContent || '1', 10);
    const target = Math.max(1, cur - 1);
    if (pages[target - 1]) {
      pages[target - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  // 下一页
  _docPreviewNext() {
    const body = document.getElementById('docPreviewBody');
    if (!body) return;
    const pages = body.querySelectorAll('.doc-preview-page');
    const total = pages.length;
    const cur = parseInt(document.getElementById('docPreviewCurrentPage')?.textContent || '1', 10);
    const target = Math.min(total, cur + 1);
    if (pages[target - 1]) {
      pages[target - 1].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  },

  // ========================================
  // 视频播放器弹窗（点击视频 → 弹模态播放，可拖动进度条）
  // ========================================
  openVideoPlayerModal(videoId) {
    const video = DataStore.getVideoById(videoId);
    if (!video) {
      this.showToast(this.t('video.notFound'), 'error');
      return;
    }
    // 关闭已有的
    const existing = document.getElementById('videoPlayerModal');
    if (existing) existing.remove();

    // 加入浏览历史
    if (typeof DataStore.addViewHistory === 'function') {
      DataStore.addViewHistory({
        id: video.id, type: 'video', title: video.title, productId: video.productId, thumbnail: video.thumbnail
      });
    }

    const product = DataStore.getProductById(video.productId);
    const categories = DataStore.getVideoCategories();
    const catInfo = categories.find(c => c.id === video.category) || { name: this.t('video.title'), icon: '🎬' };

    const modal = document.createElement('div');
    modal.id = 'videoPlayerModal';
    modal.className = 'modal-overlay video-player-overlay';
    modal.onclick = (e) => { if (e.target === modal) this.closeVideoPlayerModal(); };

    // 准备视频源
    let videoSrc = '';
    let isExternal = false;
    if (video.videoType === 'external') {
      isExternal = true;
    } else {
      videoSrc = video.videoUrl || 'https://www.w3schools.com/html/mov_bbb.mp4';
    }

    modal.innerHTML = `
      <div class="modal video-player-modal">
        <div class="video-player-header">
          <div style="flex:1;min-width:0;">
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:4px;flex-wrap:wrap;">
              <span class="video-cat-badge">${catInfo.icon} ${this.tr(catInfo.name)}</span>
              ${product ? `<span style="font-size:12px;color:var(--gray-500);">${product.icon} ${this.tr(product.name)}</span>` : ''}
            </div>
            <h2 class="video-player-title">${this.tr(video.title)}</h2>
          </div>
          <div style="display:flex;gap:6px;flex-shrink:0;">
            <button class="modal-icon-btn" onclick="App.navigate('video', {videoId: '${video.id}'});App.closeVideoPlayerModal();" title="${this.t('video.openFullPage')}">⛶</button>
            <button class="modal-close" onclick="App.closeVideoPlayerModal()" title="关闭">×</button>
          </div>
        </div>

        <div class="video-player-stage">
          ${isExternal ? `
            <div style="text-align:center;color:#fff;padding:40px;">
              <div style="font-size:80px;margin-bottom:16px;">${video.thumbnail}</div>
              <div style="font-size:18px;margin-bottom:8px;">${this.tr(video.title)}</div>
              <div style="font-size:14px;opacity:0.7;margin-bottom:20px;">${this.t('video.duration')}: ${video.duration}</div>
              <button class="btn btn-primary btn-lg" onclick="window.open('${video.videoUrl || '#'}', '_blank', 'noopener,noreferrer')">▶ ${this.t('video.openExternal')}</button>
            </div>
          ` : `
            <video id="videoPlayerEl" class="video-player-el" preload="metadata" playsinline>
              <source src="${videoSrc}" type="video/mp4">
              ${this.t('video.notSupported')}
            </video>
            <div class="video-player-poster" id="videoPlayerPoster">
              <button class="video-player-big-play" onclick="App._videoPlayerToggle()" title="${this.t('video.play')}">▶</button>
            </div>
            <div class="video-player-controls" id="videoPlayerControls">
              <button class="vp-btn" id="vpPlayBtn" onclick="App._videoPlayerToggle()" title="${this.t('video.play')}">▶</button>
              <span class="vp-time" id="vpCurrentTime">0:00</span>
              <div class="vp-progress" id="vpProgress" onclick="App._videoPlayerSeek(event)">
                <div class="vp-progress-buffered" id="vpBuffered"></div>
                <div class="vp-progress-played" id="vpPlayed"></div>
                <div class="vp-progress-thumb" id="vpThumb"></div>
              </div>
              <span class="vp-time" id="vpDuration">0:00</span>
              <button class="vp-btn" id="vpMuteBtn" onclick="App._videoPlayerToggleMute()" title="${this.t('video.mute')}">🔊</button>
              <input type="range" class="vp-volume" id="vpVolume" min="0" max="100" value="100" oninput="App._videoPlayerSetVolume(this.value)">
              <button class="vp-btn" id="vpFullBtn" onclick="App._videoPlayerToggleFullscreen()" title="${this.t('video.fullscreen')}">⛶</button>
            </div>
          `}
        </div>

        <div class="video-player-info">
          <div class="video-player-meta">
            <span>👤 ${this.t('video.instructor')}: ${video.author}</span>
            <span>⏱ ${this.t('video.duration')}: ${video.duration}</span>
            <span>👁 ${(video.views || 0)} ${this.t('common.view')}</span>
            <span>📅 ${this.t('video.updated')}: ${video.updatedAt}</span>
            <span style="flex:1;"></span>
            <button class="action-btn action-btn-sm ${this.isVideoLiked(video.id) ? 'liked' : ''}" onclick="App.toggleVideoLike('${video.id}');this.classList.toggle('liked');this.querySelector('span:last-child').textContent=App.isVideoLiked('${video.id}')?App.t('video.liked'):App.t('action.like');">
              <span>👍</span><span>${this.isVideoLiked(video.id) ? this.t('video.liked') : this.t('action.like')}</span>
            </button>
            <button class="action-btn action-btn-sm ${DataStore.isFavorite('video', video.id) ? 'faved' : ''}" onclick="App.toggleVideoFav('${video.id}');this.classList.toggle('faved');">
              <span>${DataStore.isFavorite('video', video.id) ? '❤️' : '⭐'}</span><span>${this.t('action.fav')}</span>
            </button>
            <button class="action-btn action-btn-sm" onclick="App.copyVideoLink('${video.id}')">
              <span>🔗</span><span>${this.t('action.share')}</span>
            </button>
          </div>
          <p class="video-player-desc">${video.description || ''}</p>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    if (!isExternal) {
      // 绑定视频事件
      setTimeout(() => {
        const v = document.getElementById('videoPlayerEl');
        if (!v) return;
        this._videoPlayerEl = v;

        v.addEventListener('loadedmetadata', () => {
          const dur = document.getElementById('vpDuration');
          if (dur) dur.textContent = this._fmtTime(v.duration);
        });
        v.addEventListener('timeupdate', () => {
          const cur = document.getElementById('vpCurrentTime');
          const played = document.getElementById('vpPlayed');
          const thumb = document.getElementById('vpThumb');
          const prog = document.getElementById('vpProgress');
          if (cur) cur.textContent = this._fmtTime(v.currentTime);
          if (played && prog && v.duration) {
            const pct = (v.currentTime / v.duration) * 100;
            played.style.width = pct + '%';
            if (thumb) thumb.style.left = pct + '%';
          }
        });
        v.addEventListener('progress', () => {
          const buf = document.getElementById('vpBuffered');
          if (buf && v.buffered.length > 0 && v.duration) {
            const end = v.buffered.end(v.buffered.length - 1);
            buf.style.width = ((end / v.duration) * 100) + '%';
          }
        });
        v.addEventListener('play', () => this._videoPlayerUpdateBtn(true));
        v.addEventListener('pause', () => this._videoPlayerUpdateBtn(false));
        v.addEventListener('ended', () => this._videoPlayerUpdateBtn(false));

        // 进度条拖动
        const prog = document.getElementById('vpProgress');
        if (prog) {
          let dragging = false;
          const onMove = (e) => {
            if (!dragging) return;
            const rect = prog.getBoundingClientRect();
            const clientX = e.touches ? e.touches[0].clientX : e.clientX;
            let pct = ((clientX - rect.left) / rect.width) * 100;
            pct = Math.max(0, Math.min(100, pct));
            const played = document.getElementById('vpPlayed');
            const thumb = document.getElementById('vpThumb');
            if (played) played.style.width = pct + '%';
            if (thumb) thumb.style.left = pct + '%';
          };
          const onUp = () => {
            if (!dragging) return;
            dragging = false;
            const rect = prog.getBoundingClientRect();
            const played = document.getElementById('vpPlayed');
            const pct = parseFloat(played?.style.width || '0');
            if (v.duration) v.currentTime = (pct / 100) * v.duration;
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            document.removeEventListener('touchmove', onMove);
            document.removeEventListener('touchend', onUp);
          };
          prog.addEventListener('mousedown', (e) => {
            dragging = true;
            onMove(e);
            document.addEventListener('mousemove', onMove);
            document.addEventListener('mouseup', onUp);
          });
          prog.addEventListener('touchstart', (e) => {
            dragging = true;
            onMove(e);
            document.addEventListener('touchmove', onMove);
            document.addEventListener('touchend', onUp);
          }, { passive: true });
        }

        // 点击视频区域切换播放
        v.addEventListener('click', () => this._videoPlayerToggle());
      }, 50);
    }

    // ESC 关闭 + 键盘快捷键（空格/方向键/F）
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        this.closeVideoPlayerModal();
        document.removeEventListener('keydown', escHandler);
        return;
      }
      // 键盘快捷键（视频播放器打开时）
      const modal = document.getElementById('videoPlayerModal');
      if (!modal) return;
      const v = this._videoPlayerEl;
      // 输入框中不拦截
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault();
        if (v) (v.paused ? v.play() : v.pause());
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        if (v && v.duration) { v.currentTime = Math.max(0, v.currentTime - 5); }
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        if (v && v.duration) { v.currentTime = Math.min(v.duration, v.currentTime + 5); }
      } else if (e.key === 'm' || e.key === 'M') {
        e.preventDefault();
        this._videoPlayerToggleMute();
      } else if (e.key === 'f' || e.key === 'F') {
        e.preventDefault();
        this._videoPlayerToggleFullscreen();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (v) v.volume = Math.min(1, v.volume + 0.1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (v) v.volume = Math.max(0, v.volume - 0.1);
      }
    };
    document.addEventListener('keydown', escHandler);
    this._videoPlayerEscHandler = escHandler;
  },

  closeVideoPlayerModal() {
    // 暂停并清理视频元素
    if (this._videoPlayerEl) {
      try { this._videoPlayerEl.pause(); } catch (e) {}
      this._videoPlayerEl = null;
    }
    const modal = document.getElementById('videoPlayerModal');
    if (modal) modal.remove();
    if (this._videoPlayerEscHandler) {
      document.removeEventListener('keydown', this._videoPlayerEscHandler);
      this._videoPlayerEscHandler = null;
    }
  },

  // 格式化时间为 mm:ss
  _fmtTime(s) {
    if (!s || isNaN(s)) return '0:00';
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, '0')}`;
  },

  _videoPlayerToggle() {
    const v = this._videoPlayerEl || document.getElementById('videoPlayerEl');
    if (!v) return;
    if (v.paused) {
      v.play();
    } else {
      v.pause();
    }
  },

  _videoPlayerUpdateBtn(playing) {
    const btn = document.getElementById('vpPlayBtn');
    const poster = document.getElementById('videoPlayerPoster');
    if (btn) btn.textContent = playing ? '⏸' : '▶';
    if (poster) poster.style.display = playing ? 'none' : 'flex';
  },

  _videoPlayerSeek(e) {
    const v = this._videoPlayerEl || document.getElementById('videoPlayerEl');
    const prog = document.getElementById('vpProgress');
    if (!v || !prog || !v.duration) return;
    const rect = prog.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    v.currentTime = (pct / 100) * v.duration;
  },

  _videoPlayerToggleMute() {
    const v = this._videoPlayerEl || document.getElementById('videoPlayerEl');
    const btn = document.getElementById('vpMuteBtn');
    if (!v || !btn) return;
    v.muted = !v.muted;
    btn.textContent = v.muted ? '🔇' : '🔊';
  },

  _videoPlayerSetVolume(val) {
    const v = this._videoPlayerEl || document.getElementById('videoPlayerEl');
    const btn = document.getElementById('vpMuteBtn');
    if (!v) return;
    v.volume = parseInt(val, 10) / 100;
    if (v.volume > 0 && v.muted) {
      v.muted = false;
      if (btn) btn.textContent = '🔊';
    }
  },

  _videoPlayerToggleFullscreen() {
    const stage = document.querySelector('.video-player-stage');
    if (!stage) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      stage.requestFullscreen?.();
    }
  },

  // 处理登录提交
  handleLoginSubmit() {
    const username = (document.getElementById('loginUsername').value || '').trim();
    const password = document.getElementById('loginPassword').value || '';
    const errorEl = document.getElementById('loginError');
    if (!username || !password) {
      errorEl.textContent = this.t('auth.usernameRequired');
      errorEl.style.display = 'block';
      return;
    }
    if (this.login(username, password)) {
      errorEl.style.display = 'none';
    } else {
      errorEl.textContent = this.t('auth.invalid');
      errorEl.style.display = 'block';
    }
  },

  // ========================================
  // 公共页面布局
  // ========================================
  renderPublicLayout() {
    const route = this.currentRoute;
    let content = '';

    switch (route) {
      case 'home':
        content = this.renderHomePage();
        break;
      case 'product':
        content = this.renderProductPage();
        break;
      case 'doc':
        content = this.renderDocViewer();
        break;
      case 'video':
        content = this.renderVideoPlayer();
        break;
      case 'videos':
        content = this.renderVideoListPage();
        break;
      case 'search':
        content = this.renderSearchResults();
        break;
      case 'favorites':
        // 收藏页已下线：保留 toggleFavorite 数据能力但移除独立入口
        this.showToast('收藏功能已整合到各内容详情页', 'info');
        this.currentRoute = 'home';
        content = this.renderHomePage();
        break;
      default:
        content = this.renderHomePage();
    }

    return `
      ${this.renderNavbar('public')}
      <div class="main-container">
        ${content}
      </div>
      ${this.renderFooter()}
      <button class="back-to-top" id="backToTopBtn" onclick="window.scrollTo({top:0,behavior:'smooth'})" title="${this.t('tooltip.toTop')}">
        ↑
      </button>
    `;
  },

  renderNavbar(mode) {
    return `
      <nav class="navbar">
        <div class="nav-logo" onclick="App.navigate('home')">
          <div class="nav-logo-icon">🔧</div>
          <span>${this.tr('高仙机器人')}</span>
        </div>
        <div class="nav-links" id="navLinks">
          <div class="nav-link ${this.currentRoute === 'home' ? 'active' : ''}" onclick="App.navLinkClick('home')">${this.t('nav.home')}</div>
          <div class="nav-link ${this.currentRoute === 'product' ? 'active' : ''}" onclick="App.navLinkClick('product')">${this.t('nav.product')}</div>
          <div class="nav-link ${this.currentRoute === 'videos' ? 'active' : ''}" onclick="App.navLinkClick('videos')">${this.t('nav.videos')}</div>
          <div class="nav-link" onclick="App.navLinkClick('admin')">${this.t('nav.admin')}</div>
        </div>
        <div class="nav-overlay" id="navOverlay" onclick="App.closeMobileNav()"></div>
        <div class="nav-hamburger" id="navHamburger" onclick="App.toggleMobileNav()" role="button" tabindex="0" aria-label="打开导航菜单">
          <span></span><span></span><span></span>
        </div>
        <div class="nav-right">
          <div class="nav-search">
            <span class="nav-search-icon">🔍</span>
            <input type="text" placeholder="${this.t('common.searchPlaceholder')}" id="globalSearch" value="${this.searchQuery}">
          </div>
          <!-- 暗黑/浅色模式切换 -->
          <button class="nav-icon-btn" onclick="App.toggleTheme()" id="themeToggleBtn" title="${this.t('nav.theme')}" aria-label="${this.t('nav.theme')}">
            ${this.theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <!-- 多语言切换 -->
          <div style="position:relative;">
            <button class="nav-icon-btn" onclick="App.toggleLocaleMenu()" id="localeToggleBtn" title="${this.t('nav.language')}" aria-label="${this.t('nav.language')}">
              <span style="font-size:14px;font-weight:600;">${this._localeFlag()}</span>
            </button>
            <div id="localeDropdown" style="display:none;position:absolute;right:0;top:calc(100% + 6px);background:var(--bg-card);border:1px solid var(--border-color);border-radius:var(--radius-md);box-shadow:var(--shadow-lg);min-width:170px;z-index:200;overflow:hidden;">
              ${this._renderLocaleOptions()}
            </div>
          </div>
          ${this.currentUser ? `
            <div style="position:relative;display:flex;align-items:center;gap:8px;padding:6px 12px;background:var(--gray-50);border-radius:var(--radius-md);border:1px solid var(--gray-200);cursor:pointer;" onclick="App.toggleUserMenu()" id="userMenuBtn">
              <span style="width:28px;height:28px;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;">${(this.currentUser.name || '?').charAt(0)}</span>
              <div style="display:flex;flex-direction:column;line-height:1.2;">
                <span style="font-size:13px;font-weight:500;color:var(--text-primary);">${this.currentUser.name}</span>
                <span style="font-size:11px;color:var(--text-secondary);">${this.currentUser.role === 'root_admin' ? this.t('role.root_admin') : this.currentUser.role === 'admin' ? this.t('role.admin') : this.t('role.member')}</span>
              </div>
              <span style="color:var(--text-secondary);font-size:10px;">▼</span>
            </div>
          ` : `
            <button class="btn btn-secondary btn-sm" onclick="App.showLogin()">🔐 ${this.t('nav.login')}</button>
          `}
          <button class="btn btn-primary nav-cta" onclick="App.navigate('admin', {adminTab: 'dashboard'})">
            🚀 ${this.t('nav.admin')}
          </button>
        </div>
      </nav>
    `;
  },

  _localeFlag() {
    return { 'zh-CN': '中', 'en-US': 'EN', 'ja-JP': '日', 'es-ES': 'ES' }[this.locale] || '中';
  },

  _renderLocaleOptions() {
    const options = [
      { code: 'zh-CN', name: '中文', flag: '🇨🇳' },
      { code: 'en-US', name: 'English', flag: '🇺🇸' },
      { code: 'ja-JP', name: '日本語', flag: '🇯🇵' },
      { code: 'es-ES', name: 'Español', flag: '🇪🇸' }
    ];
    return options.map(o => `
      <div onclick="App.setLocale('${o.code}');App.closeLocaleMenu()" style="padding:9px 14px;cursor:pointer;display:flex;align-items:center;gap:10px;font-size:13px;${o.code === this.locale ? 'background:var(--primary-light);color:var(--primary);font-weight:600;' : 'color:var(--text-primary);'}" onmouseover="if(this.style.background.indexOf('rgb')===-1)this.style.background='var(--gray-50)'" onmouseout="if(${o.code === this.locale})this.style.background='var(--primary-light)';else this.style.background='transparent'">
        <span style="font-size:16px;">${o.flag}</span>
        <span>${o.name}</span>
        ${o.code === this.locale ? '<span style="margin-left:auto;color:var(--primary);">✓</span>' : ''}
      </div>
    `).join('');
  },

  toggleLocaleMenu() {
    const menu = document.getElementById('localeDropdown');
    if (menu) {
      menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    }
    // 关闭用户菜单
    const userMenu = document.getElementById('userDropdownMenu');
    if (userMenu) userMenu.style.display = 'none';
  },

  closeLocaleMenu() {
    const menu = document.getElementById('localeDropdown');
    if (menu) menu.style.display = 'none';
  },

  renderFooter() {
    return `
      <footer class="footer">
        <div class="footer-content">
          <div>
            <div class="footer-brand">🔧 ${this.tr('高仙机器人')}</div>
            <p class="footer-desc">
              ${this.t('footer.desc')}
            </p>
          </div>
          <div class="footer-col">
            <h4>${this.locale === 'zh-CN' ? '产品' : this.locale === 'en-US' ? 'Products' : this.locale === 'ja-JP' ? '製品' : 'Productos'}</h4>
            <a href="javascript:App.navigate('product')">${this.locale === 'zh-CN' ? '流体设备' : this.locale === 'en-US' ? 'Fluid Equipment' : this.locale === 'ja-JP' ? '流体機器' : 'Equipo Fluido'}</a>
            <a href="javascript:App.navigate('product')">${this.locale === 'zh-CN' ? '动力传动' : this.locale === 'en-US' ? 'Power Transmission' : this.locale === 'ja-JP' ? '動力伝達' : 'Transmisión'}</a>
            <a href="javascript:App.navigate('product')">${this.locale === 'zh-CN' ? '自动化控制' : this.locale === 'en-US' ? 'Automation' : this.locale === 'ja-JP' ? 'オートメーション' : 'Automatización'}</a>
            <a href="javascript:App.navigate('product')">${this.locale === 'zh-CN' ? '仪器仪表' : this.locale === 'en-US' ? 'Instruments' : this.locale === 'ja-JP' ? '計器' : 'Instrumentos'}</a>
          </div>
          <div class="footer-col">
            <h4>${this.locale === 'zh-CN' ? '支持' : this.locale === 'en-US' ? 'Support' : this.locale === 'ja-JP' ? 'サポート' : 'Soporte'}</h4>
            <a href="javascript:void(0)" onclick="App.showToast(this.t('common.loading'), 'info')">${this.locale === 'zh-CN' ? '帮助中心' : this.locale === 'en-US' ? 'Help Center' : this.locale === 'ja-JP' ? 'ヘルプ' : 'Ayuda'}</a>
            <a href="mailto:support@gaoxian-robot.com">${this.locale === 'zh-CN' ? '📧 技术支持' : this.locale === 'en-US' ? '📧 Support' : this.locale === 'ja-JP' ? '📧 サポート' : '📧 Soporte'}</a>
            <a href="tel:400-888-9999">📞 400-888-9999</a>
            <a href="javascript:void(0)" onclick="App.showToast('${this.locale === 'zh-CN' ? '请联系销售经理' : 'Please contact sales'}', 'info')">${this.locale === 'zh-CN' ? '培训课程' : this.locale === 'en-US' ? 'Training' : this.locale === 'ja-JP' ? '研修' : 'Capacitación'}</a>
          </div>
          <div class="footer-col">
            <h4>${this.locale === 'zh-CN' ? '联系' : this.locale === 'en-US' ? 'Contact' : this.locale === 'ja-JP' ? 'お問い合わせ' : 'Contacto'}</h4>
            <a href="tel:400-888-9999">📞 400-888-9999</a>
            <a href="mailto:support@gaoxian-robot.com">📧 support@gaoxian-robot.com</a>
            <a href="javascript:void(0)">🕐 ${this.locale === 'zh-CN' ? '工作日 9:00 - 18:00' : this.locale === 'en-US' ? 'Mon-Fri 9-18' : this.locale === 'ja-JP' ? '平日 9-18時' : 'Lun-Vie 9-18'}</a>
          </div>
        </div>
        <div class="footer-bottom">
          ${this.t('footer.copyright', {year: 2026, brand: SITE_NAME})}
        </div>
      </footer>
    `;
  },

  // ========================================
  // 首页
  // ========================================
  renderHomePage() {
    const stats = DataStore.getStats();
    const prods = DataStore.getProducts();
    const allPublishedDocs = DataStore.getDocuments().filter(d => d.status === 'published');
    const allPublishedVids = DataStore.getVideos().filter(v => v.status === 'published');
    const hotDocs = [...allPublishedDocs].sort((a, b) => b.views - a.views).slice(0, 6);
    const hotVids = [...allPublishedVids].sort((a, b) => b.views - a.views).slice(0, 4);
    const docTypes = DataStore.getDocTypes();
    const videoCats = DataStore.getVideoCategories();

    // 产品分类
    const categories = [...new Set(prods.map(p => p.category))];

    // 最新更新（文档+视频混合，按时间排序）
    const latestDocs = allPublishedDocs.map(d => ({ ...d, _type: 'doc', _time: d.updatedAt }));
    const latestVids = allPublishedVids.map(v => ({ ...v, _type: 'video', _time: v.updatedAt }));
    const latestList = [...latestDocs, ...latestVids]
      .sort((a, b) => b._time.localeCompare(a._time))
      .slice(0, 6);

    const diffMap = { easy: this.t('diff.easy'), medium: this.t('diff.medium'), hard: this.t('diff.hard'), expert: this.t('diff.expert') };
    const diffColorMap = { easy: 'green', medium: 'yellow', hard: 'orange', expert: 'red' };

    return `
      <!-- Hero 大横幅 -->
      <section class="home-hero">
        <div class="home-hero-bg">
          <div class="hero-blob blob-1"></div>
          <div class="hero-blob blob-2"></div>
          <div class="hero-blob blob-3"></div>
        </div>
        <div class="home-hero-content">
          <div class="hero-badge">
            <span class="hero-badge-dot"></span>
            ${SITE_NAME} · ${this.t('home.heroBadge')}
          </div>
          <h1 class="home-hero-title">
            ${this.t('home.heroPrefix')}<span class="hero-title-accent">${this.t('home.heroAccent')}</span> · ${this.t('home.heroSuffix')}
          </h1>
          <div class="hero-search-bar">
            <div class="hero-search-icon">🔍</div>
            <input type="text" class="hero-search-input" placeholder="${this.t('home.searchPlaceholder')}" id="heroSearchInput" onkeydown="if(event.key==='Enter')App.doHeroSearch()">
            <button class="hero-search-btn" onclick="App.doHeroSearch()">${this.t('common.search')}</button>
          </div>
          <div class="hero-stats-row">
            <div class="hero-stat-item">
              <div class="hero-stat-num">${stats.totalProducts}<span class="hero-stat-unit">+</span></div>
              <div class="hero-stat-label">${this.t('home.statProducts')}</div>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat-item">
              <div class="hero-stat-num">${stats.publishedDocs}<span class="hero-stat-unit">+</span></div>
              <div class="hero-stat-label">${this.t('home.statDocs')}</div>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat-item">
              <div class="hero-stat-num">${stats.publishedVideos}<span class="hero-stat-unit">+</span></div>
              <div class="hero-stat-label">${this.t('home.statVideos')}</div>
            </div>
            <div class="hero-stat-divider"></div>
            <div class="hero-stat-item">
              <div class="hero-stat-num">${Math.floor(stats.totalViews/1000)}k<span class="hero-stat-unit">+</span></div>
              <div class="hero-stat-label">${this.t('home.statUsers')}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- 核心服务入口 -->
      <section class="home-section">
        <div class="section-header">
          <h2 class="section-title-lg">${this.t('home.services')}</h2>
          <p class="section-subtitle">${this.t('app.tagline')}</p>
        </div>
        <div class="service-grid">
          <div class="service-card service-blue" onclick="App.goToDocType('guide')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' ')App.goToDocType('guide')">
            <div class="service-icon">🔧</div>
            <h3>${this.t('service.guide')}</h3>
            <p>${this.t('service.guideDesc')}</p>
            <div class="service-footer">
              <span>${allPublishedDocs.filter(d => d.type === 'guide').length} ${this.t('common.guides')}</span>
              <span class="service-arrow">→</span>
            </div>
          </div>
          <div class="service-card service-orange" onclick="App.goToDocType('faq')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' ')App.goToDocType('faq')">
            <div class="service-icon">🔍</div>
            <h3>${this.t('service.faq')}</h3>
            <p>${this.t('service.faqDesc')}</p>
            <div class="service-footer">
              <span>${allPublishedDocs.filter(d => d.type === 'faq').length} ${this.t('common.questions')}</span>
              <span class="service-arrow">→</span>
            </div>
          </div>
          <div class="service-card service-pink" onclick="App.navigate('videos')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' ')App.navigate('videos')">
            <div class="service-icon">🎬</div>
            <h3>${this.t('service.video')}</h3>
            <p>${this.t('service.videoDesc')}</p>
            <div class="service-footer">
              <span>${stats.publishedVideos} ${this.t('common.videos')}</span>
              <span class="service-arrow">→</span>
            </div>
          </div>
          <div class="service-card service-green" onclick="App.goToDocType('manual')" tabindex="0" role="button" onkeydown="if(event.key==='Enter'||event.key===' ')App.goToDocType('manual')">
            <div class="service-icon">📖</div>
            <h3>${this.t('service.manual')}</h3>
            <p>${this.t('service.manualDesc')}</p>
            <div class="service-footer">
              <span>${allPublishedDocs.filter(d => d.type === 'manual' || d.type === 'spec').length} ${this.t('common.manuals')}</span>
              <span class="service-arrow">→</span>
            </div>
          </div>
        </div>
      </section>


      <section class="home-section">
        <div class="section-header">
          <h2 class="section-title-lg">${this.t('nav.products')}</h2>
          <p class="section-subtitle">${this.t('home.productsSubtitle')}</p>
        </div>
        <div class="product-cat-tabs">
          <div class="product-cat-tab active" onclick="App.filterHomeProducts('all', this)">${this.t('home.allProducts')}</div>
          ${categories.map(c => `
            <div class="product-cat-tab" onclick="App.filterHomeProducts('${c}', this)">${c}</div>
          `).join('')}
        </div>
        <div class="product-grid" id="homeProductGrid">
          ${prods.map(p => `
            <div class="product-card" data-category="${p.category}" onclick="App.navigate('product', {productId: '${p.id}'})">
              <div class="product-card-img">
                ${p.cover
                  ? `<img class="product-cover-img" src="${p.cover}" alt="${this.tr(p.name)}" loading="lazy" onerror="this.outerHTML='<span class=\\'product-card-icon\\'>${p.icon}</span>'">`
                  : `<span class="product-card-icon">${p.icon}</span>`}
                ${p.status === 'developing' ? '<span class="product-card-badge">开发中</span>' : ''}
              </div>
              <div class="product-card-body">
                <div class="product-card-title">${this.tr(p.name)}</div>
                <div class="product-card-desc">${this.tr(p.description)}</div>
                <div class="product-card-meta">
                  <span>📄 ${p.docCount} ${this.t('common.docs')}</span>
                  <span>🎬 ${p.videoCount} ${this.t('common.videos')}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
        <div style="text-align:center;margin-top:24px;">
          <button class="btn btn-secondary btn-lg" onclick="App.navigate('product')">
            查看全部产品 →
          </button>
        </div>
      </section>

      <!-- 热门文档 + 最新更新 -->
      <section class="home-section">
        <div class="home-two-col">
          <div class="home-col-main">
            <div class="section-header-inline">
              <h2 class="section-title-lg">🔥 ${this.t('home.hotDocs')}</h2>
              <span class="section-tag">TOP 6</span>
            </div>
            <div class="hot-doc-list">
              ${hotDocs.map((d, i) => {
                const product = DataStore.getProductById(d.productId);
                const typeInfo = docTypes.find(t => t.id === d.type) || { icon: '📄', name: '文档' };
                const diff = d.difficulty || 'medium';
                return `
                  <div class="hot-doc-item" onclick="App.openDocPreviewModal('${d.id}')">
                    <div class="hot-doc-rank ${i < 3 ? `top r${i + 1}` : ''}">${i + 1}</div>
                    <div class="hot-doc-icon ${typeInfo.color || 'guide'}">${typeInfo.icon}</div>
                    <div style="flex:1;min-width:0;">
                      <div class="hot-doc-title">${this.tr(d.title)}</div>
                      <div class="hot-doc-meta">
                        <span>${product ? product.name : ''}</span>
                        <span>·</span>
                        <span class="mini-diff diff-${diffColorMap[diff] || 'yellow'}">${diffMap[diff] || this.t('diff.medium')}</span>
                        <span>·</span>
                        <span>⏱ ${d.estimatedTime || '—'}</span>
                      </div>
                    </div>
                    <div class="hot-doc-views">👁 ${d.views}</div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
          <div class="home-col-side">
            <div class="section-header-inline">
              <h2 class="section-title-lg">🆕 ${this.t('home.latest')}</h2>
            </div>
            <div class="latest-list-side">
              ${latestList.map(item => {
                if (item._type === 'doc') {
                  const typeInfo = docTypes.find(t => t.id === item.type) || { icon: '📄', name: '文档', color: 'guide' };
                  return `
                    <div class="latest-item-sm" onclick="App.openDocPreviewModal('${item.id}')">
                      <div class="latest-icon-sm ${typeInfo.color}">${typeInfo.icon}</div>
                      <div style="flex:1;min-width:0;">
                        <div class="latest-title-sm">${item.title}</div>
                        <div class="latest-meta-sm">
                          <span class="latest-tag">文档</span>
                          <span>${item.updatedAt}</span>
                        </div>
                      </div>
                    </div>
                  `;
                } else {
                  return `
                    <div class="latest-item-sm" onclick="App.openVideoPlayerModal('${item.id}')">
                      <div class="latest-icon-sm video">${item.thumbnail}</div>
                      <div style="flex:1;min-width:0;">
                        <div class="latest-title-sm">${item.title}</div>
                        <div class="latest-meta-sm">
                          <span class="latest-tag video">视频</span>
                          <span>${item.updatedAt}</span>
                        </div>
                      </div>
                    </div>
                  `;
                }
              }).join('')}
            </div>
          </div>
        </div>
      </section>

      <!-- 推荐视频 -->
      <section class="home-section">
        <div class="section-header">
          <h2 class="section-title-lg">🎬 ${this.t('home.recommend')}</h2>
          <p class="section-subtitle">${this.t('home.videosSubtitle')}</p>
        </div>
        <div class="video-grid">
          ${hotVids.map(v => {
            const catInfo = videoCats.find(c => c.id === v.category) || { name: '视频', icon: '🎬' };
            const product = DataStore.getProductById(v.productId);
            return `
              <div class="video-card" onclick="App.openVideoPlayerModal('${v.id}')">
                <div class="video-thumbnail">
                  ${v.videoUrl ? `<video src="${v.videoUrl}" preload="metadata" muted class="video-frame" data-video-id="${v.id}"></video>` : `<span style="font-size:60px;">${v.thumbnail}</span>`}
                  <div class="play-icon">▶</div>
                  <span class="video-duration">${v.duration}</span>
                  <span class="video-category-tag">${catInfo.icon} ${catInfo.name}</span>
                  <button class="card-fav-btn ${DataStore.isFavorite('video', v.id) ? 'faved' : ''}" onclick="event.stopPropagation();App.quickFav('video', '${v.id}', event)" title="收藏">
                    ${DataStore.isFavorite('video', v.id) ? '❤️' : '🤍'}
                  </button>
                </div>
                <div class="video-card-body">
                  <div class="video-card-title">${this.tr(v.title)}</div>
                  <div class="video-card-meta">
                    <span>${product ? product.name : ''}</span>
                    <span>·</span>
                    <span>👁 ${v.views}</span>
                  </div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
        <div style="text-align:center;margin-top:24px;">
          <button class="btn btn-secondary btn-lg" onclick="App.navigate('videos')">
            ${this.t('home.viewAllVideos')}
          </button>
        </div>
      </section>
    
${(() => {
        const history = DataStore.getViewHistory();
        if (history.length === 0) return '';
        const docTypes = DataStore.getDocTypes();
        return `
      <!-- 最近浏览 -->
      <section class="home-section">
        <div class="section-header-inline">
          <span class="section-tag">🕘 最近浏览</span>
        </div>
        <div class="latest-grid">
          ${history.slice(0, 4).map(h => {
            if (h.type === 'doc') {
              const d = DataStore.getDocById(h.id);
              const t = docTypes.find(x => x.id === d?.type) || { icon: '📄', name: '文档' };
              return `<div class="latest-item" onclick="App.openDocPreviewModal('${h.id}')">
                <div class="latest-icon ${t.color || 'guide'}">${t.icon}</div>
                <div style="flex:1;min-width:0;">
                  <div class="latest-title">${h.title || d?.title || ''}</div>
                  <div class="latest-meta">
                    <span>${t.name}</span>
                    <span style="opacity:0.5;">·</span>
                    <span>${h.time ? h.time.substring(5, 10) : ''}</span>
                  </div>
                </div>
              </div>`;
            } else if (h.type === 'video') {
              return `<div class="latest-item" onclick="App.openVideoPlayerModal('${h.id}')">
                <div class="latest-icon video">🎬</div>
                <div style="flex:1;min-width:0;">
                  <div class="latest-title">${h.title || ''}</div>
                  <div class="latest-meta">
                    <span>视频</span>
                    <span style="opacity:0.5;">·</span>
                    <span>${h.time ? h.time.substring(5, 10) : ''}</span>
                  </div>
                </div>
              </div>`;
            }
            return '';
          }).join('')}
        </div>
      </section>
        `;
      })()}
`;

      <!-- 产品中心 -->
  },

  // ========================================
  // 产品详情页（文档列表）
  // ========================================
  renderProductPage() {
    const product = DataStore.getProductById(this.currentProductId);
    if (!product) {
      return this.renderProductListPage();
    }

    const docs = DataStore.getDocsByProduct(product.id);
    const vids = DataStore.getVideosByProduct(product.id);
    const publishedDocs = docs.filter(d => d.status === 'published');
    const publishedVids = vids.filter(v => v.status === 'published');
    const docTypes = DataStore.getDocTypes();
    const videoCats = DataStore.getVideoCategories();

    // 分类统计
    const guideDocs = publishedDocs.filter(d => d.type === 'guide');
    const faqDocs = publishedDocs.filter(d => d.type === 'faq');
    const manualDocs = publishedDocs.filter(d => d.type === 'manual');
    const specDocs = publishedDocs.filter(d => d.type === 'spec');

    // 难度映射
    const diffMap = {
      easy: { name: this.t('diff.easy'), color: 'green', icon: '⭐' },
      medium: { name: this.t('diff.medium'), color: 'yellow', icon: '⭐⭐' },
      hard: { name: this.t('diff.hard'), color: 'orange', icon: '⭐⭐⭐' },
      expert: { name: this.t('diff.expert'), color: 'red', icon: '⭐⭐⭐⭐' }
    };

    // 当前 Tab
    const tab = this.productTab || 'guides';

    return `
      <!-- 面包屑 -->
      <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray-500);margin-bottom:20px;">
        <span style="cursor:pointer;" onclick="App.navigate('home')">${this.t('nav.home')}</span>
        <span>/</span>
        <span style="cursor:pointer;" onclick="App.navigate('product')">${this.t('nav.products')}</span>
        <span>/</span>
        <span style="color:var(--gray-700);">${this.tr(product.name)}</span>
      </div>

      <!-- iFixit 风格产品大 Banner -->
      <div class="product-hero" ${product.cover ? `style="background-image:linear-gradient(135deg, rgba(15,23,42,0.75), rgba(30,58,95,0.65)), url('${product.cover}');background-size:cover;background-position:center;"` : ''}>
        <div class="product-hero-bg"></div>
        <div class="product-hero-content">
          <div class="product-hero-icon">${product.icon}</div>
          <div class="product-hero-info">
            <h1 class="product-hero-title">${this.tr(product.name)}</h1>
            <p class="product-hero-desc">${product.description}</p>
            <div class="product-hero-stats">
              <div class="hero-stat">
                <span class="hero-stat-num">${guideDocs.length}</span>
                <span class="hero-stat-label">${this.t('product.heroGuides')}</span>
              </div>
              <div class="hero-stat">
                <span class="hero-stat-num">${faqDocs.length}</span>
                <span class="hero-stat-label">${this.t('product.heroFaq')}</span>
              </div>
              <div class="hero-stat">
                <span class="hero-stat-num">${publishedVids.length}</span>
                <span class="hero-stat-label">${this.t('product.heroVideos')}</span>
              </div>
              <div class="hero-stat">
                <span class="hero-stat-num">${manualDocs.length + specDocs.length}</span>
                <span class="hero-stat-label">${this.t('product.heroManuals')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 产品主内容区 -->
      <div class="product-main">
        <!-- 左侧导航 -->
        <aside class="product-sidebar">
          <div class="sidebar-nav">
            <div class="sidebar-nav-item ${tab === 'guides' ? 'active' : ''}" onclick="App.setProductTab('guides')">
              <span>🔧</span><span>${this.t('product.sideGuides')}</span>
              <span class="nav-count">${guideDocs.length}</span>
            </div>
            <div class="sidebar-nav-item ${tab === 'troubleshooting' ? 'active' : ''}" onclick="App.setProductTab('troubleshooting')">
              <span>🔍</span><span>${this.t('product.sideFaq')}</span>
              <span class="nav-count">${faqDocs.length}</span>
            </div>
            <div class="sidebar-nav-item ${tab === 'videos' ? 'active' : ''}" onclick="App.setProductTab('videos')">
              <span>🎬</span><span>${this.t('product.sideVideos')}</span>
              <span class="nav-count">${publishedVids.length}</span>
            </div>
            <div class="sidebar-nav-item ${tab === 'manuals' ? 'active' : ''}" onclick="App.setProductTab('manuals')">
              <span>📖</span><span>技术手册</span>
              <span class="nav-count">${manualDocs.length + specDocs.length}</span>
            </div>
          </div>

          <!-- 产品信息卡 -->
          <div class="sidebar-section">
            <div class="sidebar-section-title">${this.t('product.infoTitle')}</div>
            <div style="font-size:12px;color:var(--gray-600);line-height:2.2;">
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('product.infoModel')}</span>
                <span style="font-weight:500;">${product.model || product.id.toUpperCase()}</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('product.infoStatus')}</span>
                <span style="color:${product.status === 'developing' ? '#f59e0b' : '#10b981'};font-weight:500;">
                  ${product.status === 'developing' ? this.t('product.statusDeveloping') : this.t('product.infoOnSale')}
                </span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('product.infoDocs')}</span>
                <span>${publishedDocs.length} ${this.t('common.docs')}</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('product.infoVideos')}</span>
                <span>${publishedVids.length} 个</span>
              </div>
            </div>
          </div>
        </aside>

        <!-- 右侧内容 -->
        <div class="product-content">
          <!-- 维修指南 Tab -->
          <div style="display:${tab === 'guides' ? 'block' : 'none'};">
            <div class="content-section-header">
              <h2>${this.t('product.tabGuides')}</h2>
              <p>逐步拆解指导，帮助您快速完成设备维修与部件更换</p>
            </div>
            ${guideDocs.length === 0 ? `
              <div class="empty-state">
                <div style="font-size:48px;margin-bottom:12px;">📭</div>
                <div>暂无维修指南</div>
              </div>
            ` : `
              <div class="guide-list">
                ${guideDocs.map(d => {
                  const dDiff = diffMap[d.difficulty] || diffMap.medium;
                  const hasTools = d.tools && d.tools.length > 0;
                  return `
                    <div class="guide-card" onclick="App.openDocPreviewModal('${d.id}')">
                      <div class="guide-card-icon">
                        <span style="font-size:36px;">🔧</span>
                      </div>
                      <div class="guide-card-body">
                        <div class="guide-card-title">${this.tr(d.title)}</div>
                        <div class="guide-card-desc">${d.description.substring(0, 60)}${d.description.length > 60 ? '...' : ''}</div>
                        <div class="guide-card-meta">
                          <span class="mini-diff diff-${dDiff.color}">${dDiff.icon} ${dDiff.name}</span>
                          <span class="meta-item">⏱ ${d.estimatedTime || '—'}</span>
                          <span class="meta-item">🛠 ${hasTools ? d.tools.length + '件工具' : this.t('common.noTool')}</span>
                          <span class="meta-item">👁 ${d.views}</span>
                        </div>
                      </div>
                      <div class="guide-card-arrow">→</div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

          <!-- 故障排查 Tab -->
          <div style="display:${tab === 'troubleshooting' ? 'block' : 'none'};">
            <div class="content-section-header">
              <h2>${this.t('product.tabFaq')}</h2>
              <p>常见问题与解决方案，快速定位并排除故障</p>
            </div>
            ${faqDocs.length === 0 ? `
              <div class="empty-state">
                <div style="font-size:48px;margin-bottom:12px;">📭</div>
                <div>${this.t('product.emptyFaq')}</div>
              </div>
            ` : `
              <div class="trouble-list">
                ${faqDocs.map(d => {
                  const dDiff = diffMap[d.difficulty] || diffMap.medium;
                  return `
                    <div class="trouble-card" onclick="App.openDocPreviewModal('${d.id}')">
                      <div class="trouble-icon">❓</div>
                      <div style="flex:1;">
                        <div class="trouble-title">${this.tr(d.title)}</div>
                        <div class="trouble-desc">${d.description.substring(0, 70)}${d.description.length > 70 ? '...' : ''}</div>
                        <div style="display:flex;gap:12px;margin-top:8px;font-size:12px;color:var(--gray-500);">
                          <span class="mini-diff diff-${dDiff.color}">${dDiff.name}</span>
                          <span>⏱ ${d.estimatedTime || '—'}</span>
                          <span>👁 ${d.views}</span>
                        </div>
                      </div>
                      <div class="guide-card-arrow">→</div>
                    </div>
                  `;
                }).join('')}
              </div>
            `}
          </div>

          <!-- 视频教程 Tab -->
          <div style="display:${tab === 'videos' ? 'block' : 'none'};">
            <div class="content-section-header">
              <h2>🎬 视频教程</h2>
              <p>直观的操作演示，跟着视频一步步学</p>
            </div>
            ${publishedVids.length === 0 ? `
              <div class="empty-state">
                <div style="font-size:48px;margin-bottom:12px;">📭</div>
                <div>暂无视频教程</div>
              </div>
            ` : `
              <div style="display:flex;gap:8px;margin-bottom:20px;flex-wrap:wrap;">
                <button class="btn btn-sm ${this.productVideoTab === 'all' || !this.productVideoTab ? 'btn-primary' : 'btn-secondary'}" onclick="App.setProductVideoTab('all');App.setProductTab('videos')">
                  全部 (${publishedVids.length})
                </button>
                ${videoCats.map(c => {
                  const cnt = publishedVids.filter(v => v.category === c.id).length;
                  return `
                    <button class="btn btn-sm ${this.productVideoTab === c.id ? 'btn-primary' : 'btn-secondary'}" onclick="App.setProductVideoTab('${c.id}');App.setProductTab('videos')">
                      ${c.icon} ${c.name} (${cnt})
                    </button>
                  `;
                }).join('')}
              </div>
              <div class="video-grid">
                ${(() => {
                  const filtered = this.productVideoTab === 'all' || !this.productVideoTab
                    ? publishedVids
                    : publishedVids.filter(v => v.category === this.productVideoTab);
                  return filtered.length === 0 ? `
                    <div style="grid-column:1/-1;text-align:center;padding:60px;color:var(--gray-400);">
                      暂无该分类的视频
                    </div>
                  ` : filtered.map(v => {
                    const catInfo = videoCats.find(c => c.id === v.category) || { name: '视频' };
                    return `
                      <div class="video-card" onclick="App.openVideoPlayerModal('${v.id}')">
                        <div class="video-thumbnail">
                          ${v.videoUrl ? `<video src="${v.videoUrl}" preload="metadata" muted class="video-frame" data-video-id="${v.id}"></video>` : `<span style="font-size:60px;">${v.thumbnail}</span>`}
                          <div class="play-icon">▶</div>
                          <span class="video-duration">${v.duration}</span>
                          <span class="video-category-tag">${catInfo.icon} ${catInfo.name}</span>
                          <button class="card-fav-btn ${DataStore.isFavorite('video', v.id) ? 'faved' : ''}" onclick="event.stopPropagation();App.quickFav('video', '${v.id}', event)" title="收藏">
                            ${DataStore.isFavorite('video', v.id) ? '❤️' : '🤍'}
                          </button>
                        </div>
                        <div class="video-card-body">
                          <div class="video-card-title">${this.tr(v.title)}</div>
                          <div class="video-card-meta">
                            <span>👁 ${v.views} 次观看</span>
                            <span>${v.updatedAt}</span>
                          </div>
                        </div>
                      </div>
                    `;
                  }).join('');
                })()}
              </div>
            `}
          </div>

          <!-- 技术手册 Tab -->
          <div style="display:${tab === 'manuals' ? 'block' : 'none'};">
            <div class="content-section-header">
              <h2>${this.t('product.tabManuals')}</h2>
              <p>完整的产品手册、规格参数等技术资料</p>
            </div>
            ${(() => {
              const manualList = [...manualDocs, ...specDocs];
              return manualList.length === 0 ? `
                <div class="empty-state">
                  <div style="font-size:48px;margin-bottom:12px;">📭</div>
                  <div>${this.t('product.emptyManuals')}</div>
                </div>
              ` : `
                <div class="doc-list">
                  ${manualList.map(d => {
                    const typeInfo = docTypes.find(t => t.id === d.type) || { icon: '📄', name: '文档', color: 'guide' };
                    return `
                      <div class="doc-card" onclick="App.openDocPreviewModal('${d.id}')">
                        <div class="doc-card-icon ${typeInfo.color}">${typeInfo.icon}</div>
                        <div class="doc-card-title">${this.tr(d.title)}</div>
                        <div class="doc-card-desc">${d.description.substring(0, 50)}${d.description.length > 50 ? '...' : ''}</div>
                        <div class="doc-card-footer">
                          <span class="doc-card-tag">${d.pages} 页</span>
                          <span>👁 ${d.views}</span>
                        </div>
                      </div>
                    `;
                  }).join('')}
                </div>
              `;
            })()}
          </div>
        </div>
      </div>
    `;
  },

  renderProductListPage() {
    const prods = DataStore.getProducts();
    const categories = [...new Set(prods.map(p => p.category))];
    const catFilter = this.productListCat || 'all';
    const search = this.productListSearch || '';
    const docTypeFilter = this.productListDocType || null;
    const docTypes = DataStore.getDocTypes();
    const currentDocType = docTypeFilter ? docTypes.find(t => t.id === docTypeFilter) : null;

    let filtered = prods;
    if (catFilter !== 'all') {
      filtered = filtered.filter(p => p.category === catFilter);
    }
    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }
    // 按文档类型筛选：只保留至少有 1 条该类型已发布文档的产品
    if (docTypeFilter) {
      filtered = filtered.filter(p => {
        const docs = DataStore.getDocsByProduct(p.id);
        return docs.some(d => d.type === docTypeFilter && d.status === 'published');
      });
    }

    return `
      <div class="page-header">
        <button class="back-btn" onclick="App.navigate('home')">←</button>
        <div>
          <h2 class="section-title" style="margin:0;">${currentDocType ? `${currentDocType.icon} ${this.tr(currentDocType.name)}` : this.t('product.all')}</h2>
          <p style="font-size:13px;color:var(--gray-500);margin:4px 0 0 0;">
            ${currentDocType
              ? `${this.tr('按文档类型筛选')}: ${this.tr(currentDocType.name)} · ${this.tr('共')} ${filtered.length} ${this.tr('款产品')}`
              : `${this.tr('共')} ${filtered.length} ${this.tr('款产品')}`}
          </p>
        </div>
        <div style="flex:1;"></div>
        <div style="position:relative;">
          <input type="text" class="table-search" placeholder="${this.tr('搜索产品')}" value="${search}"
                 oninput="App.setProductListSearch(this.value)" style="width:240px;">
        </div>
      </div>

      ${currentDocType ? `
        <div style="background:var(--primary-light);border:1px solid var(--primary);border-radius:var(--radius-md);padding:12px 16px;margin-bottom:20px;display:flex;align-items:center;justify-content:space-between;">
          <div style="display:flex;align-items:center;gap:12px;">
            <span style="font-size:24px;">${currentDocType.icon}</span>
            <div>
              <div style="font-weight:600;color:var(--gray-900);font-size:15px;">${this.tr('正在筛选')}: ${this.tr(currentDocType.name)}</div>
              <div style="font-size:12px;color:var(--gray-500);margin-top:2px;">${this.tr('显示至少')} ${this.tr('包含 1 条')}${this.tr(currentDocType.name)} (${filtered.length} ${this.tr('款产品')})</div>
            </div>
          </div>
          <button class="btn btn-secondary btn-sm" onclick="App.clearProductListDocType()">${this.tr('清除筛选')} ✕</button>
        </div>
      ` : ''}

      <div class="product-cat-tabs" style="justify-content:flex-start;margin-bottom:16px;">
        <div class="product-cat-tab ${catFilter === 'all' ? 'active' : ''}" onclick="App.setProductListCat('all')">
          ${this.t('product.all')} <span style="opacity:0.7;margin-left:4px;">${prods.length}</span>
        </div>
        ${categories.map(c => {
          const cnt = prods.filter(p => p.category === c).length;
          return `
            <div class="product-cat-tab ${catFilter === c ? 'active' : ''}" onclick="App.setProductListCat('${c}')">
              ${this.tr(c)} <span style="opacity:0.7;margin-left:4px;">${cnt}</span>
            </div>
          `;
        }).join('')}
      </div>

      <!-- 按文档类型筛选（仅当有 docType 时显示） -->
      <div class="type-filter-row" style="margin-bottom:20px;">
        <span class="type-filter-label">📑 ${this.tr('文档类型')}：</span>
        <div class="type-filter-tags">
          <div class="type-filter-tag ${!docTypeFilter ? 'active' : ''}" onclick="App.setProductListDocType(null)">
            ${this.t('common.all')}
          </div>
          ${docTypes.map(t => `
            <div class="type-filter-tag ${docTypeFilter === t.id ? 'active' : ''} ${t.color}" onclick="App.setProductListDocType('${t.id}')">
              <span style="margin-right:4px;">${t.icon}</span>${this.tr(t.name)}
            </div>
          `).join('')}
        </div>
      </div>

      ${filtered.length === 0 ? `
        <div style="text-align:center;padding:80px 20px;background:var(--bg-card);border-radius:var(--radius-lg);border:1px solid var(--border-color);">
          <div style="font-size:48px;margin-bottom:12px;">🔍</div>
          <div style="font-size:16px;color:var(--gray-600);margin-bottom:8px;">${this.tr('没有找到匹配的产品')}</div>
          <div style="font-size:13px;color:var(--gray-400);">${this.tr('试试其他关键词或分类')}</div>
        </div>
      ` : `
        <div class="product-grid">
          ${filtered.map(p => `
            <div class="product-card" onclick="App.navigate('product', {productId: '${p.id}'})">
              <div class="product-card-img">
                ${p.cover
                  ? `<img class="product-cover-img" src="${p.cover}" alt="${this.tr(p.name)}" loading="lazy" onerror="this.outerHTML='<span>${p.icon}</span>'">`
                  : p.icon}
                ${p.status === 'developing' ? `<span class="product-card-badge">${this.tr('开发中')}</span>` : ''}
                <span class="product-card-cat">${this.tr(p.category)}</span>
              </div>
              <div class="product-card-body">
                <div class="product-card-title">${this.tr(p.name)}</div>
                <div class="product-card-desc">${this.tr(p.description)}</div>
                <div class="product-card-meta">
                  <span>📄 ${p.docCount} ${this.tr('份文档')}</span>
                  <span>🎬 ${p.videoCount} ${this.tr('个视频')}</span>
                </div>
              </div>
            </div>
          `).join('')}
        </div>
      `}
    `;
  },

  setProductListCat(cat) {
    this.productListCat = cat;
    this.render();
  },

  setProductListDocType(type) {
    this.productListDocType = type || null;
    this.render();
  },

  clearProductListDocType() {
    this.productListDocType = null;
    this.render();
  },

  // Bug #22 修复：搜索用防抖，避免中文输入时 render 重建 DOM 打断 IME 组合输入
  setProductListSearch(val) {
    this.productListSearch = val;
    if (this._productListSearchTimer) clearTimeout(this._productListSearchTimer);
    this._productListSearchTimer = setTimeout(() => {
      this._productListSearchTimer = null;
      this.render();
    }, 300);
  },

  // ========================================
  // 视频列表页（全部视频）
  // ========================================
  renderVideoListPage() {
    const vids = DataStore.getVideos().filter(v => v.status === 'published');
    const products = DataStore.getProducts();
    const categories = DataStore.getVideoCategories();
    const prodFilter = this.videoListProduct || 'all';
    const sortBy = this.videoSortBy || 'latest';
    const search = this.videoSearch || '';

    let filteredVids = this.videoCategory === 'all'
      ? vids
      : vids.filter(v => v.category === this.videoCategory);

    if (prodFilter !== 'all') {
      filteredVids = filteredVids.filter(v => v.productId === prodFilter);
    }
    if (search) {
      const q = search.toLowerCase();
      filteredVids = filteredVids.filter(v =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q)
      );
    }

    // 排序
    if (sortBy === 'views') {
      filteredVids = [...filteredVids].sort((a, b) => b.views - a.views);
    } else if (sortBy === 'duration') {
      filteredVids = [...filteredVids].sort((a, b) => {
        const parseMin = (d) => {
          const m = d.match(/(\d+)分/);
          const s = d.match(/(\d+)秒/);
          return (m ? parseInt(m[1]) * 60 : 0) + (s ? parseInt(s[1]) : 0);
        };
        return parseMin(b.duration) - parseMin(a.duration);
      });
    } else {
      filteredVids = [...filteredVids].sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
    }

    return `
      <div class="page-header">
        <button class="back-btn" onclick="App.navigate('home')">←</button>
        <div>
          <div class="page-title">🎬 ${this.t('nav.videos')}</div>
          <div style="color:var(--gray-500);font-size:14px;margin-top:4px;">${this.t('videos.subtitle')}</div>
        </div>
        <div style="flex:1;"></div>
        <div style="position:relative;">
          <input type="text" class="table-search" placeholder="搜索视频..." value="${search}"
                 oninput="App.setVideoSearch(this.value)" style="width:200px;">
        </div>
      </div>

      <!-- 视频分类大标签 -->
      <div class="video-cat-grid">
        <div class="video-cat-card ${this.videoCategory === 'all' ? 'active' : ''}" onclick="App.setVideoCategory('all')">
          <div class="video-cat-icon">🎯</div>
          <div class="video-cat-name">${this.tr('全部视频')}</div>
          <div class="video-cat-count">${vids.length}</div>
        </div>
        ${categories.map(c => {
          const count = vids.filter(v => v.category === c.id).length;
          return `
            <div class="video-cat-card ${c.color} ${this.videoCategory === c.id ? 'active' : ''}" onclick="App.setVideoCategory('${c.id}')">
              <div class="video-cat-icon">${c.icon}</div>
              <div class="video-cat-name">${this.tr(c.name)}</div>
              <div class="video-cat-count">${count}</div>
            </div>
          `;
        }).join('')}
      </div>

      <!-- 产品筛选栏 -->
      <div class="product-filter-row">
        <div class="product-filter-label">${this.tr('产品筛选')}</div>
        <div class="product-filter-tabs">
          <div class="product-filter-tab ${prodFilter === 'all' ? 'active' : ''}" onclick="App.setVideoListProduct('all')">
            ${this.tr('全部产品')}
            <span class="product-filter-count">${vids.length}</span>
          </div>
          ${products.map(p => {
            const cnt = vids.filter(v => v.productId === p.id).length;
            return `
              <div class="product-filter-tab ${prodFilter === p.id ? 'active' : ''}" onclick="App.setVideoListProduct('${p.id}')">
                <span style="margin-right:6px;">${p.icon}</span>${this.tr(p.name)}
                <span class="product-filter-count">${cnt}</span>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 排序栏 -->
      <div class="filter-bar">
        <div class="filter-bar-left">
          <span style="font-size:14px;color:var(--gray-600);">${this.tr('共找到')} <b style="color:var(--primary);">${filteredVids.length}</b> ${this.tr('个视频')}</span>
        </div>
        <div class="filter-bar-right">
          <span class="filter-bar-label">${this.tr('排序')}：</span>
          <div class="sort-tabs">
            <div class="sort-tab ${sortBy === 'latest' ? 'active' : ''}" onclick="App.setVideoSort('latest')">${this.tr('最新更新')}</div>
            <div class="sort-tab ${sortBy === 'views' ? 'active' : ''}" onclick="App.setVideoSort('views')">${this.tr('最多观看')}</div>
            <div class="sort-tab ${sortBy === 'duration' ? 'active' : ''}" onclick="App.setVideoSort('duration')">${this.tr('时长最长')}</div>
          </div>
        </div>
      </div>

      <div class="video-grid">
        ${filteredVids.length === 0 ? `
          <div style="grid-column:1/-1;text-align:center;padding:80px 20px;background:var(--bg-card);border-radius:var(--radius-lg);border:1px solid var(--border-color);">
            <div style="font-size:48px;margin-bottom:12px;">🔍</div>
            <div style="font-size:16px;color:var(--gray-600);margin-bottom:8px;">没有找到匹配的视频</div>
            <div style="font-size:13px;color:var(--gray-400);">试试其他关键词或分类</div>
          </div>
        ` : filteredVids.map(v => {
          const product = products.find(p => p.id === v.productId);
          const catInfo = categories.find(c => c.id === v.category) || { name: '视频' };
          return `
            <div class="video-card" onclick="App.openVideoPlayerModal('${v.id}')">
              <div class="video-thumbnail">
                ${v.videoUrl ? `<video src="${v.videoUrl}" preload="metadata" muted class="video-frame" data-video-id="${v.id}"></video>` : `<span style="font-size:60px;">${v.thumbnail}</span>`}
                <div class="play-icon">▶</div>
                <span class="video-duration">${v.duration}</span>
                <span class="video-category-tag">${catInfo.icon} ${catInfo.name}</span>
                <button class="card-fav-btn ${DataStore.isFavorite('video', v.id) ? 'faved' : ''}" onclick="event.stopPropagation();App.quickFav('video', '${v.id}', event)" title="收藏">
                  ${DataStore.isFavorite('video', v.id) ? '❤️' : '🤍'}
                </button>
              </div>
              <div class="video-card-body">
                <div class="video-card-title">${this.tr(v.title)}</div>
                <div class="video-card-meta">
                  <span>${product ? product.icon + ' ' + product.name : ''}</span>
                  <span>·</span>
                  <span>👁 ${v.views} 次观看</span>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  setVideoCategory(cat) {
    this.videoCategory = cat;
    this.render();
  },

  setVideoListProduct(pid) {
    this.videoListProduct = pid;
    this.render();
  },

  setVideoSearch(val) {
    this.videoSearch = val;
    // Bug #22 修复：搜索用防抖
    if (this._videoSearchTimer) clearTimeout(this._videoSearchTimer);
    this._videoSearchTimer = setTimeout(() => {
      this._videoSearchTimer = null;
      this.render();
    }, 300);
  },

  setVideoSort(sort) {
    this.videoSortBy = sort;
    this.render();
  },

  // ========================================
  // 收藏辅助（独立收藏页已下线，收藏数据保留在 DataStore）
  // ========================================

  removeFav(type, id) {
    DataStore.toggleFavorite({ type, id });
    this.showToast('已取消收藏');
    this.render();
  },

  quickFav(type, id, evt) {
    let item;
    if (type === 'video') {
      const v = DataStore.getVideoById(id);
      if (v) item = { type: 'video', id: v.id, title: v.title, thumbnail: v.thumbnail, productId: v.productId, category: v.category };
    } else if (type === 'doc') {
      const d = DataStore.getDocById(id);
      if (d) item = { type: 'doc', id: d.id, title: d.title, productId: d.productId, typeId: d.type };
    }
    if (!item) return;
    const isFaved = DataStore.toggleFavorite(item);
    this.showToast(isFaved ? '已收藏' : '已取消收藏');
    // 不重新渲染整页，只更新被点击的按钮（兼容无参数调用）
    const target = evt?.currentTarget || (typeof event !== 'undefined' && event && event.target);
    if (target) {
      target.textContent = isFaved ? '❤️' : '🤍';
      target.classList.toggle('faved', isFaved);
    }
  },

  switchDocTab(tab) {
    document.querySelectorAll('.doc-tab').forEach(t => t.classList.remove('active'));
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById('docsTabContent').style.display = tab === 'docs' ? 'block' : 'none';
    document.getElementById('videosTabContent').style.display = tab === 'videos' ? 'block' : 'none';
  },

  // 按文档类型跳转到第一个有相关内容的产品
  // 按文档类型跳转到产品列表并预选筛选条件
  // 跳转到产品中心（而非单个产品），让用户能看到全站该类型的所有文档
  goToDocType(type) {
    // 设置产品列表的 docType 筛选
    this.productListDocType = type;
    this.productListCat = 'all';
    this.productListSearch = '';
    // 跳转到产品列表
    this.navigate('product');
    this.showToast(`已筛选"${this._getDocTypeName(type)}"相关产品`, 'success');
  },

  _getDocTypeName(typeId) {
    const docTypes = DataStore.getDocTypes();
    const t = docTypes.find(d => d.id === typeId);
    return t ? t.name : typeId;
  },

  setFilterType(type) {
    this.filterType = type;
    this.render();
  },

  setProductVideoTab(tab) {
    this.productVideoTab = tab;
    // 不再调用 switchDocTab——它依赖 .doc-tab 选择器，在产品页 DOM 中不存在
    // 仅更新状态并触发渲染即可
    this.render();
  },

  // 产品页侧边栏导航
  setProductNav(section, subType) {
    if (section === 'docs') {
      this.filterType = subType;
      this.productVideoTab = 'all';
    } else {
      this.productVideoTab = subType;
    }
    this.render();
  },

  // 产品页主 Tab 切换
  setProductTab(tab) {
    this.productTab = tab;
    this.render();
  },

  // ========================================
  // 文档查看器
  // ========================================
  renderDocViewer() {
    const doc = DataStore.getDocById(this.currentDocId);
    if (!doc) {
      return '<div style="text-align:center;padding:100px;"><h2>' + this.t('doc.notFound') + '</h2></div>';
    }
    if (doc.status !== 'published') {
      return `
        <div style="text-align:center;padding:100px 20px;background:var(--bg-card);border-radius:var(--radius-lg);border:1px solid var(--border-color);">
          <div style="font-size:64px;margin-bottom:20px;">🔒</div>
          <h2 style="font-size:22px;margin-bottom:10px;">${this.t('doc.notPublished')}</h2>
          <p style="color:var(--gray-500);margin-bottom:24px;">${this.t('doc.notPublishedDesc')}</p>
          <button class="btn btn-primary" onclick="App.navigate('home')">${this.t('action.backHome')}</button>
        </div>
      `;
    }

    const product = DataStore.getProductById(doc.productId);
    const docTypes = DataStore.getDocTypes();
    const typeInfo = docTypes.find(t => t.id === doc.type) || { name: this.t('doc.type'), icon: '📄', color: 'guide' };
    const totalPages = doc.pages;
    const tocItems = this.extractToc(doc.content);

    // 难度等级映射
    const diffMap = {
      easy: { name: this.t('diff.easy'), color: 'green', icon: '⭐' },
      medium: { name: this.t('diff.medium'), color: 'yellow', icon: '⭐⭐' },
      hard: { name: this.t('diff.hard'), color: 'orange', icon: '⭐⭐⭐' },
      expert: { name: this.t('diff.expert'), color: 'red', icon: '⭐⭐⭐⭐' }
    };
    const diffInfo = diffMap[doc.difficulty] || diffMap.medium;

    const sameTypeDocs = DataStore.getDocsByProduct(doc.productId)
      .filter(d => d.status === 'published' && d.type === doc.type)
      .sort((a, b) => a.title.localeCompare(b.title));
    const currentIdx = sameTypeDocs.findIndex(d => d.id === doc.id);
    const prevDoc = currentIdx > 0 ? sameTypeDocs[currentIdx - 1] : null;
    const nextDoc = currentIdx < sameTypeDocs.length - 1 ? sameTypeDocs[currentIdx + 1] : null;
    const relatedDocs = DataStore.getDocsByProduct(doc.productId)
      .filter(d => d.status === 'published' && d.id !== doc.id)
      .slice(0, 4);

    // 工具配件是否有内容
    const hasTools = doc.tools && doc.tools.length > 0;
    const hasParts = doc.parts && doc.parts.length > 0;
    const hasSidebarInfo = hasTools || hasParts || tocItems.length > 0;

    return `
      <!-- 面包屑 -->
      <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray-500);margin-bottom:20px;">
        <span style="cursor:pointer;" onclick="App.navigate('home')">${this.t('nav.home')}</span>
        <span>/</span>
        <span style="cursor:pointer;" onclick="App.navigate('product')">${this.t('nav.products')}</span>
        <span>/</span>
        <span style="cursor:pointer;" onclick="App.navigate('product', {productId: '${doc.productId}'})">${product ? product.name : ''}</span>
        <span>/</span>
        <span style="color:var(--gray-700);">${doc.title.substring(0, 20)}${doc.title.length > 20 ? '...' : ''}</span>
      </div>

      <!-- iFixit 风格顶部摘要卡 -->
      <div class="guide-hero">
        <div class="guide-hero-main">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;flex-wrap:wrap;">
            <span class="doc-type-tag ${typeInfo.color}">${typeInfo.icon} ${this.tr(typeInfo.name)}</span>
            <span class="diff-badge diff-${diffInfo.color}">${diffInfo.icon} ${diffInfo.name}</span>
            <span style="font-size:13px;color:var(--gray-500);">${product ? product.icon + ' ' + product.name : ''}</span>
          </div>
          <h1 style="font-size:26px;font-weight:800;color:var(--gray-900);line-height:1.3;margin:0 0 8px 0;letter-spacing:-0.5px;">${this.tr(doc.title)}</h1>
          <p style="color:var(--gray-600);line-height:1.6;margin:0 0 12px 0;font-size:14px;">${doc.description}</p>

          <!-- 一行紧凑 stats：图标 + 数值 inline -->
          <div class="guide-stats-inline">
            <div class="guide-stat-inline" title="${this.t('doc.estimatedTime')}"><span class="ico">⏱️</span><span>${doc.estimatedTime || '—'}</span></div>
            <div class="guide-stat-inline" title="${this.t('doc.tools')}"><span class="ico">🛠️</span><span>${hasTools ? doc.tools.length + this.t('common.pieceTool') : this.t('common.noTool')}</span></div>
            <div class="guide-stat-inline" title="${this.t('doc.parts')}"><span class="ico">📦</span><span>${hasParts ? doc.parts.length + this.t('common.piecePart') : this.t('common.noPart')}</span></div>
            <div class="guide-stat-inline" title="${this.t('doc.views')}"><span class="ico">📖</span><span>${doc.views} 次</span></div>
            <span class="guide-stat-divider"></span>
            <div class="guide-stat-inline"><span class="ico">👤</span><span>${doc.author}</span></div>
            <div class="guide-stat-inline"><span class="ico">📅</span><span>${doc.updatedAt}</span></div>
            <div style="flex:1;"></div>
            <button class="action-btn action-btn-sm" onclick="this.classList.toggle('liked')"><span>👍</span><span>${this.t('action.like')}</span></button>
            <button class="action-btn action-btn-sm" onclick="this.classList.toggle('faved')"><span>⭐</span><span>${this.t('action.fav')}</span></button>
            <button class="action-btn action-btn-sm" onclick="navigator.clipboard?.writeText(location.href);App.showToast(App.tr('toast.linkCopied'))"><span>🔗</span><span>${this.t('action.share')}</span></button>
            <button class="btn btn-primary btn-sm" onclick="App.exportPDF()" style="padding:6px 14px;font-size:13px;">${this.t('action.exportPDF')} 📄</button>
          </div>
        </div>
      </div>

      <div class="doc-viewer">
        <aside class="doc-sidebar">
          <!-- 工具清单 -->
          ${hasTools ? `
            <div class="sidebar-section">
              <div class="sidebar-section-title">🛠️ ${this.t('sidebar.tools')}</div>
              <div class="tool-list">
                ${doc.tools.map(t => `
                  <div class="tool-item">
                    <span class="tool-dot"></span>
                    <span>${t}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 配件清单 -->
          ${hasParts ? `
            <div class="sidebar-section">
              <div class="sidebar-section-title">📦 ${this.t('sidebar.parts')}</div>
              <div class="tool-list">
                ${doc.parts.map(p => `
                  <div class="tool-item part">
                    <span class="tool-dot"></span>
                    <span>${p}</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 文档目录 -->
          ${tocItems.length > 0 ? `
            <div class="sidebar-section">
              <div class="sidebar-section-title">📑 ${this.t('sidebar.toc')}</div>
              <div class="doc-toc" id="docTocContainer" style="max-height:60vh;overflow-y:auto;">
                ${tocItems.map((item, idx) => `
                  <div class="doc-toc-item level-${item.level}" data-toc-idx="${idx}" tabindex="0" role="link"
                       onclick="App.scrollToHeading(${idx})"
                       onkeydown="if(event.key==='Enter'||event.key===' ')App.scrollToHeading(${idx})">
                    ${item.text}
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}

          <!-- 文档信息卡 -->
          <div class="sidebar-section doc-info-card">
            <div class="sidebar-section-title">📋 ${this.t('sidebar.info')}</div>
            <div style="font-size:12px;color:var(--gray-600);line-height:2.2;">
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('info.docId')}</span>
                <span style="font-family:monospace;">${doc.id.toUpperCase()}</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('info.version')}</span>
                <span>V1.0</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('info.pages')}</span>
                <span>${doc.pages} ${this.t('common.page')}</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('info.difficulty')}</span>
                <span class="diff-text diff-${diffInfo.color}">${diffInfo.name}</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:var(--gray-500);">${this.t('info.created')}</span>
                <span>${doc.createdAt}</span>
              </div>
            </div>
          </div>
        </aside>

        <div class="doc-content-area">
          <div class="doc-toolbar">
            <div class="doc-toolbar-left">
              <span class="doc-toolbar-title">${this.t('toolbar.totalPages', {n: totalPages})}</span>
              <span id="docReadProgress" style="display:inline-flex;align-items:center;gap:4px;font-size:12px;color:var(--gray-500);padding:3px 8px;background:var(--gray-100);border-radius:10px;">
                <span style="width:8px;height:8px;border-radius:50%;background:var(--primary);transition:opacity 0.2s;"></span>
                <span id="docReadPercent">0%</span> ${this.t('toolbar.read')}
              </span>
              <div class="font-size-control">
                <button class="font-size-btn" onclick="App.changeDocFontSize(-1)" title="${this.t('tooltip.fontSmaller')}">A−</button>
                <span class="font-size-label">${this.docFontSize || 100}%</span>
                <button class="font-size-btn" onclick="App.changeDocFontSize(1)" title="${this.t('tooltip.fontLarger')}">A+</button>
                <button class="font-size-btn" onclick="App.resetDocFontSize()" title="${this.t('tooltip.fontReset')}" style="font-size:12px;font-weight:500;">↺</button>
              </div>
              <button class="fav-btn ${DataStore.isFavorite('doc', doc.id) ? 'faved' : ''}" onclick="App.toggleDocFav('${doc.id}')" title="${DataStore.isFavorite('doc', doc.id) ? this.t('action.unfav') : this.t('action.fav')}">
                ${DataStore.isFavorite('doc', doc.id) ? '❤️' : '🤍'}
              </button>
            </div>
            <div class="doc-toolbar-right">
              <button class="btn btn-secondary btn-sm" onclick="App.printDoc()" title="${this.t('tooltip.print')}">
                🖨 ${this.t('toolbar.print')}
              </button>
              <button class="btn btn-secondary btn-sm" onclick="App.copyDocLink('${doc.id}')" title="${this.t('tooltip.copyLink')}">
                🔗 ${this.t('toolbar.copyLink')}
              </button>
              <button class="btn btn-secondary btn-sm" onclick="App.scrollDocToTop()" title="${this.t('tooltip.toTop')}">
                ↑ ${this.t('toolbar.top')}
              </button>
              <button class="btn btn-secondary btn-sm" onclick="App.scrollDocToBottom()" title="${this.t('tooltip.toBottom')}">
                ${this.t('toolbar.bottom')} ↓
              </button>
            </div>
          </div>

          <div class="doc-pages-scroll" id="docPagesScroll" style="font-size:${this.docFontSize || 100}%;">
            ${doc.content.map((page, idx) => `
              <div class="doc-page doc-page-scroll-item" id="docPage-${idx + 1}">
                <div class="doc-page-header">
                  <span>${product ? product.name : SITE_NAME}</span>
                  <span>${this.tr(doc.title)}</span>
                </div>
                <div class="doc-page-body" data-page-idx="${idx}">
                  ${page.html}
                </div>
                <div class="doc-page-footer">
                  <span>© ${SITE_NAME} ${this.t('doc.copyright')}</span>
                  <span>${this.t('doc.pageOf', {n: idx+1, total: totalPages})}</span>
                </div>
              </div>
            `).join('')}
          </div>

          <!-- 上下篇导航 -->
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:24px;">
            <div class="doc-nav-card ${prevDoc ? '' : 'disabled'}" ${prevDoc ? `onclick="App.navigate('doc', {docId: '${prevDoc.id}'})"` : ''}>
              <div style="font-size:12px;color:var(--gray-400);margin-bottom:4px;">← ${this.t('doc.prev')}</div>
              <div style="font-size:14px;font-weight:500;color:var(--gray-700);line-height:1.4;">
                ${prevDoc ? prevDoc.title : this.t('doc.first')}
              </div>
            </div>
            <div class="doc-nav-card next ${nextDoc ? '' : 'disabled'}" ${nextDoc ? `onclick="App.navigate('doc', {docId: '${nextDoc.id}'})"` : ''}>
              <div style="font-size:12px;color:var(--gray-400);margin-bottom:4px;text-align:right;">${this.t('doc.next')} →</div>
              <div style="font-size:14px;font-weight:500;color:var(--gray-700);line-height:1.4;text-align:right;">
                ${nextDoc ? nextDoc.title : this.t('doc.last')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 相关文档推荐 -->
      ${relatedDocs.length > 0 ? `
        <div style="margin-top:32px;">
          <h3 style="font-size:18px;margin-bottom:16px;">📚 ${this.t('doc.related')}</h3>
          <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
            ${relatedDocs.map(d => {
              const dtype = docTypes.find(t => t.id === d.type) || { icon: '📄', name: '文档', color: 'guide' };
              const dDiff = diffMap[d.difficulty] || diffMap.medium;
              return `
                <div class="doc-card" onclick="App.openDocPreviewModal('${d.id}')">
                  <div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;flex-wrap:wrap;">
                    <div class="doc-card-icon ${dtype.color}">${dtype.icon}</div>
                    <span class="mini-diff diff-${dDiff.color}">${dDiff.name}</span>
                  </div>
                  <div class="doc-card-title">${this.tr(d.title)}</div>
                  <div class="doc-card-desc">${d.description.substring(0, 50)}${d.description.length > 50 ? '...' : ''}</div>
                  <div class="doc-card-footer">
                    <span class="doc-card-tag">⏱ ${d.estimatedTime || '—'}</span>
                    <span>👁 ${d.views}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}
    `;
  },

  extractToc(pages) {
    const items = [];
    pages.forEach((page, pageIdx) => {
      const div = document.createElement('div');
      div.innerHTML = page.html;
      div.querySelectorAll('h1, h2, h3').forEach((h, hIdx) => {
        // 为 heading 生成全局唯一 id（用于 toc 高亮锚定）
        const id = `toc-anchor-${pageIdx}-${hIdx}-${items.length}`;
        items.push({
          level: parseInt(h.tagName[1]),
          text: h.textContent,
          anchorId: id,
          pageIdx,
          hIdx
        });
      });
    });
    return items;
  },

  scrollToHeading(idx) {
    const headings = document.querySelectorAll('.doc-page h1, .doc-page h2, .doc-page h3');
    if (headings[idx]) {
      const scrollContainer = document.getElementById('docPagesScroll');
      if (scrollContainer) {
        // 在滚动容器内计算偏移
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const headingTop = headings[idx].getBoundingClientRect().top;
        const offset = headingTop - containerTop + scrollContainer.scrollTop - 20;
        scrollContainer.scrollTo({ top: offset, behavior: 'smooth' });
      } else {
        headings[idx].scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  },

  // 高亮 toc 项（文档目录滚动联动）
  _highlightTocItem(idx) {
    document.querySelectorAll('.doc-toc-item').forEach(item => {
      if (parseInt(item.dataset.tocIdx, 10) === idx) {
        item.classList.add('active');
        // 自动滚动 toc 容器让当前项可见
        const tocContainer = item.parentElement;
        if (tocContainer) {
          const itemTop = item.offsetTop;
          const itemBottom = itemTop + item.offsetHeight;
          const scrollTop = tocContainer.scrollTop;
          const containerHeight = tocContainer.clientHeight;
          if (itemTop < scrollTop || itemBottom > scrollTop + containerHeight) {
            tocContainer.scrollTo({ top: Math.max(0, itemTop - containerHeight / 2), behavior: 'smooth' });
          }
        }
      } else {
        item.classList.remove('active');
      }
    });
  },

  // 滚动到文档顶部
  scrollDocToTop() {
    const scrollContainer = document.getElementById('docPagesScroll');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },

  // 滚动到文档底部
  scrollDocToBottom() {
    const scrollContainer = document.getElementById('docPagesScroll');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: scrollContainer.scrollHeight, behavior: 'smooth' });
    }
  },

  // 打印文档：使用浏览器原生打印功能（CSS @media print 已隐藏工具栏）
  printDoc() {
    const doc = DataStore.getDocById(this.currentDocId);
    if (!doc) {
      this.showToast('未找到当前文档', 'error');
      return;
    }
    // 滚动到顶部避免只打印当前页
    this.scrollDocToTop();
    setTimeout(() => window.print(), 200);
  },

  // 复制文档链接到剪贴板
  copyDocLink(docId) {
    const url = window.location.origin + window.location.pathname + '#doc/' + docId;
    const fallback = () => {
      // 降级方案：使用临时 textarea
      const ta = document.createElement('textarea');
      ta.value = url;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        const ok = document.execCommand('copy');
        document.body.removeChild(ta);
        return ok;
      } catch (e) {
        document.body.removeChild(ta);
        return false;
      }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(() => this.showToast('链接已复制到剪贴板'))
        .catch(() => fallback() && this.showToast('链接已复制'))
        .finally(() => {});
    } else if (fallback()) {
      this.showToast('链接已复制');
    } else {
      this.showToast('复制失败，请手动复制：' + url, 'error');
    }
  },

  // 跳转到指定页（滑动模式下滚动到对应页面）
  goToPage(page) {
    const pageEl = document.getElementById('docPage-' + page);
    if (pageEl) {
      const scrollContainer = document.getElementById('docPagesScroll');
      if (scrollContainer) {
        const containerTop = scrollContainer.getBoundingClientRect().top;
        const pageTop = pageEl.getBoundingClientRect().top;
        const offset = pageTop - containerTop + scrollContainer.scrollTop;
        scrollContainer.scrollTo({ top: offset, behavior: 'smooth' });
      }
    }
  },

  changeDocFontSize(delta) {
    let size = this.docFontSize || 100;
    size = Math.max(70, Math.min(150, size + delta * 10));
    this.docFontSize = size;
    const scrollContainer = document.getElementById('docPagesScroll');
    if (scrollContainer) {
      scrollContainer.style.fontSize = size + '%';
    }
    const label = document.querySelector('.font-size-label');
    if (label) {
      label.textContent = size + '%';
    }
  },

  resetDocFontSize() {
    this.docFontSize = 100;
    const scrollContainer = document.getElementById('docPagesScroll');
    if (scrollContainer) {
      scrollContainer.style.fontSize = '100%';
    }
    const label = document.querySelector('.font-size-label');
    if (label) {
      label.textContent = '100%';
    }
  },

  // Word 风格：调整编辑器页边距（步进 ±2mm = 8px）
  changeDocMargin(deltaPx) {
    if (typeof this.docMargin !== 'number') this.docMargin = 24; // 默认 24mm = 96px
    // 8px ≈ 2.1mm，按整数处理
    const deltaMm = Math.round(deltaPx / 96 * 25.4);
    this.docMargin = Math.max(8, Math.min(60, this.docMargin + deltaMm));
    this._applyDocMargin();
  },
  resetDocMargin() {
    this.docMargin = 24;
    this._applyDocMargin();
  },
  _applyDocMargin() {
    const mm = typeof this.docMargin === 'number' ? this.docMargin : 24;
    const px = Math.round(mm / 25.4 * 96);
    const editor = document.getElementById('editorContent');
    const ruler = document.getElementById('editorRuler');
    const label = document.getElementById('marginControlValue');
    // 修改 CSS 变量，段落 padding 跟着变
    document.documentElement.style.setProperty('--doc-margin-px', `${px}px`);
    if (editor) {
      editor.style.setProperty('--doc-current-margin', `${px}px`);
      // 用 inline 样式直接更新所有段落 padding（覆盖 CSS 默认 96px）
      editor.querySelectorAll('p, h1, h2, h3, h4, ul, ol, blockquote, pre, table, .doc-info-box, .doc-warning-box, .doc-success-box, .doc-danger-box, .step-block, .tool-list-block').forEach(el => {
        el.style.paddingLeft = `${px}px`;
        el.style.paddingRight = `${px}px`;
        el.style.maxWidth = `${794 - px * 2}px`;
      });
    }
    if (ruler) {
      ruler.style.paddingLeft = `${px}px`;
      ruler.style.paddingRight = `${px}px`;
    }
    if (label) label.textContent = `${mm}mm`;
    this.showToast && this.showToast(`页边距：${mm}mm`, 'info', 1500);
  },

  // 切换视频点赞（持久化到 localStorage）
  toggleVideoLike(videoId) {
    const liked = JSON.parse(localStorage.getItem('zhixiu_liked_videos') || '[]');
    const idx = liked.indexOf(videoId);
    let isLiked;
    if (idx >= 0) {
      liked.splice(idx, 1);
      isLiked = false;
      this.showToast('已取消点赞');
    } else {
      liked.push(videoId);
      isLiked = true;
      this.showToast('感谢您的反馈！');
    }
    localStorage.setItem('zhixiu_liked_videos', JSON.stringify(liked));
    return isLiked;
  },

  // 检查视频是否已点赞
  isVideoLiked(videoId) {
    const liked = JSON.parse(localStorage.getItem('zhixiu_liked_videos') || '[]');
    return liked.includes(videoId);
  },

  // 复制视频链接
  copyVideoLink(videoId) {
    const url = window.location.origin + window.location.pathname + '#video/' + videoId;
    const doCopy = () => {
      try {
        const ta = document.createElement('textarea');
        ta.value = url;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        return true;
      } catch (e) { return false; }
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url)
        .then(() => this.showToast('链接已复制'))
        .catch(() => { if (doCopy()) this.showToast('链接已复制'); else this.showToast('复制失败：' + url, 'error'); });
    } else if (doCopy()) {
      this.showToast('链接已复制');
    } else {
      this.showToast('复制失败：' + url, 'error');
    }
  },

  toggleDocFav(docId) {
    const doc = DataStore.getDocById(docId);
    if (!doc) return;
    const isFaved = DataStore.toggleFavorite({
      type: 'doc',
      id: doc.id,
      title: doc.title,
      productId: doc.productId,
      typeId: doc.type
    });
    // 更新按钮状态
    const btns = document.querySelectorAll('.fav-btn');
    btns.forEach(btn => {
      btn.classList.toggle('faved', isFaved);
      btn.textContent = isFaved ? '❤️' : '🤍';
      btn.title = isFaved ? this.t('action.unfav') : this.t('action.fav');
    });
    this.showToast(isFaved ? '已收藏' : '已取消收藏');
  },

  toggleVideoFav(videoId) {
    const video = DataStore.getVideoById(videoId);
    if (!video) return;
    const isFaved = DataStore.toggleFavorite({
      type: 'video',
      id: video.id,
      title: video.title,
      thumbnail: video.thumbnail,
      productId: video.productId,
      category: video.category
    });
    // 更新按钮
    const btn = document.getElementById('videoFavBtn');
    if (btn) {
      btn.classList.toggle('faved', isFaved);
      btn.innerHTML = `<span>${isFaved ? '❤️' : '⭐'}</span><span style="font-size:12px;">${isFaved ? '已收藏' : '收藏'}</span>`;
    }
    this.showToast(isFaved ? '已收藏' : '已取消收藏');
  },

  // PDF导出
  exportPDF() {
    const doc = DataStore.getDocById(this.currentDocId);
    if (!doc) return;
    if (typeof window.html2canvas !== 'function') {
      this.showToast(this.locale === 'en-US' ? 'PDF export failed: html2canvas not loaded' : this.locale === 'ja-JP' ? 'PDF出力失敗' : this.locale === 'es-ES' ? 'Error PDF' : 'PDF 导出失败：html2canvas 库未加载', 'error');
      return;
    }
    const { jsPDF } = window.jspdf || {};
    if (!jsPDF) {
      this.showToast('jspdf 库未加载', 'error');
      return;
    }
    const product = DataStore.getProductById(doc.productId);
    const copyrightText = this.locale === 'en-US' ? `Generated by ${SITE_NAME} platform, for internal & authorized use only` : this.locale === 'ja-JP' ? `${SITE_NAME}プラットフォームで生成、內部および授權顧客のみ使用可能` : this.locale === 'es-ES' ? `Generado por la plataforma ${SITE_NAME}, solo para uso interno y autorizado` : `本文档为${SITE_NAME}平台生成，仅供内部及授权客户使用`;
    const loadingText = this.locale === 'en-US' ? 'Generating PDF...' : this.locale === 'ja-JP' ? 'PDFを生成中...' : this.locale === 'es-ES' ? 'Generando PDF...' : '正在生成 PDF 文档';
    const preparingText = this.locale === 'en-US' ? 'Preparing...' : this.locale === 'ja-JP' ? '準備中...' : this.locale === 'es-ES' ? 'Preparando...' : '准备中...';

    // 容器放在屏幕外但保留 layout（visibility:hidden 会让 offsetHeight=0 导致 html2canvas 空画布）
    const container = document.createElement('div');
    container.id = 'pdfExportContainer';
    container.style.cssText = 'position:fixed;top:0;left:-10000px;width:794px;background:white;z-index:1;pointer-events:none;';
    container.style.fontFamily = '"Noto Sans CJK SC", "PingFang SC", "Microsoft YaHei", sans-serif';

    // 生成封面页
    const coverDiv = document.createElement('div');
    coverDiv.className = 'pdf-page';
    coverDiv.style.cssText = 'width:794px;min-height:1123px;padding:0;display:flex;flex-direction:column;justify-content:center;align-items:center;background:linear-gradient(135deg,#1e3a8a 0%,#1a56db 50%,#0e9f6e 100%);color:white;position:relative;';
    coverDiv.innerHTML = `
      <div style="position:absolute;top:60px;left:60px;font-size:14px;opacity:0.8;">${SITE_NAME} · ${this.t('common.售后技术资料')}</div>
      <div style="position:absolute;top:60px;right:60px;font-size:14px;opacity:0.8;">${doc.updatedAt || new Date().toISOString().split('T')[0]}</div>
      <div style="text-align:center;padding:0 60px;">
        <div style="font-size:20px;margin-bottom:20px;opacity:0.9;">${product ? this.tr(product.name) : SITE_NAME}</div>
        <h1 style="font-size:42px;font-weight:700;margin-bottom:20px;line-height:1.3;">${this.tr(doc.title)}</h1>
        <div style="font-size:16px;opacity:0.85;max-width:500px;margin:0 auto 40px;line-height:1.6;">${this.tr(doc.description)}</div>
        <div style="display:flex;gap:40px;justify-content:center;font-size:14px;opacity:0.9;">
          <div>
            <div style="opacity:0.7;margin-bottom:4px;">${this.t('doc.id')}</div>
            <div style="font-weight:600;">${doc.id.toUpperCase()}</div>
          </div>
          <div>
            <div style="opacity:0.7;margin-bottom:4px;">${this.t('doc.version')}</div>
            <div style="font-weight:600;">V1.0</div>
          </div>
          <div>
            <div style="opacity:0.7;margin-bottom:4px;">${this.t('doc.pages')}</div>
            <div style="font-weight:600;">${doc.pages}</div>
          </div>
        </div>
      </div>
      <div style="position:absolute;bottom:60px;left:0;right:0;text-align:center;font-size:13px;opacity:0.7;">
        ${copyrightText}
      </div>
    `;
    container.appendChild(coverDiv);

    // 添加所有内容页，带页眉页脚
    doc.content.forEach((page, idx) => {
      const pageDiv = document.createElement('div');
      pageDiv.className = 'pdf-page';
      pageDiv.style.cssText = 'width:794px;min-height:1123px;padding:80px 60px 60px;position:relative;box-sizing:border-box;background:white;';
      pageDiv.innerHTML = `
        <div style="position:absolute;top:30px;left:60px;right:60px;display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#6b7280;border-bottom:1px solid #e5e7eb;padding-bottom:8px;">
          <span>${product ? this.tr(product.name) : SITE_NAME}</span>
          <span>${this.tr(doc.title)}</span>
        </div>
        <div style="flex:1;">${page.html}</div>
        <div style="position:absolute;bottom:30px;left:60px;right:60px;display:flex;justify-content:space-between;align-items:center;font-size:11px;color:#6b7280;border-top:1px solid #e5e7eb;padding-top:8px;">
          <span>© ${SITE_NAME}</span>
          <span>${idx + 1} / ${doc.pages}</span>
        </div>
      `;
      container.appendChild(pageDiv);
    });

    document.body.appendChild(container);

    // 生成PDF
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const pages = Array.from(container.querySelectorAll('.pdf-page'));
    let pageIdx = 0;
    let stopped = false;

    // 显示加载提示
    const loadingTip = document.createElement('div');
    loadingTip.id = 'pdfLoadingTip';
    loadingTip.style.cssText = 'position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background:rgba(0,0,0,0.88);color:white;padding:24px 40px;border-radius:12px;z-index:99999;text-align:center;min-width:280px;box-shadow:0 8px 32px rgba(0,0,0,0.4);';
    loadingTip.innerHTML = `
      <div style="font-size:32px;margin-bottom:12px;">📄</div>
      <div style="font-size:15px;font-weight:500;">${loadingText}</div>
      <div style="font-size:12px;opacity:0.7;margin-top:4px;" id="pdfProgressText">${preparingText}</div>
    `;
    document.body.appendChild(loadingTip);

    const cleanup = () => {
      if (container.parentNode) container.parentNode.removeChild(container);
      if (loadingTip.parentNode) loadingTip.parentNode.removeChild(loadingTip);
    };

    const finish = () => {
      if (stopped) return;
      stopped = true;
      const fileName = (doc.title || 'document') + '.pdf';
      try {
        pdf.save(fileName);
        // 浏览器默认下载到 downloads 文件夹
        // 提供清晰的反馈，告知用户文件已下载及位置
        const doneText = this.locale === 'en-US'
          ? `✓ PDF exported: ${fileName}`
          : this.locale === 'ja-JP'
          ? `✓ PDF出力完了: ${fileName}`
          : this.locale === 'es-ES'
          ? `✓ PDF exportado: ${fileName}`
          : `✓ PDF 已导出：${fileName}`;
        this.showToast(doneText, 'success', 4000);

        // 创建一个明确的下载提示横幅（持续 6 秒，显示文件名 + 文件夹提示）
        const banner = document.createElement('div');
        banner.id = 'pdfDownloadBanner';
        banner.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#10b981;color:white;padding:14px 20px;border-radius:10px;z-index:100000;box-shadow:0 8px 24px rgba(16,185,129,0.4);display:flex;align-items:center;gap:12px;max-width:420px;animation:slideInUp 0.3s ease-out;';
        const isEN = this.locale === 'en-US';
        const isJA = this.locale === 'ja-JP';
        const isES = this.locale === 'es-ES';
        banner.innerHTML = `
          <div style="font-size:24px;flex-shrink:0;">📥</div>
          <div style="flex:1;min-width:0;">
            <div style="font-size:13px;font-weight:600;margin-bottom:2px;">
              ${isEN ? 'Download Complete' : isJA ? 'ダウンロード完了' : isES ? 'Descarga completada' : '下载完成'}
            </div>
            <div style="font-size:11px;opacity:0.92;word-break:break-all;">
              <b>${fileName}</b><br>
              <span style="opacity:0.85;">
                ${isEN ? 'Saved to your default Downloads folder' : isJA ? 'デフォルトのダウンロードフォルダに保存されました' : isES ? 'Guardado en la carpeta de descargas predeterminada' : '已保存到默认下载文件夹'}
              </span>
            </div>
          </div>
          <button onclick="this.parentElement.remove()" style="background:rgba(255,255,255,0.25);border:none;color:white;width:24px;height:24px;border-radius:50%;cursor:pointer;font-size:16px;line-height:1;flex-shrink:0;">×</button>
        `;
        document.body.appendChild(banner);
        // 8 秒后自动消失
        setTimeout(() => { if (banner.parentNode) banner.remove(); }, 8000);
      } catch (e) {
        const errText = this.locale === 'en-US'
          ? 'PDF save failed: ' + e.message
          : this.locale === 'ja-JP'
          ? 'PDF保存失敗: ' + e.message
          : this.locale === 'es-ES'
          ? 'Error al guardar PDF: ' + e.message
          : 'PDF 保存失败：' + e.message;
        this.showToast(errText, 'error', 5000);
      }
      cleanup();
    };

    const fail = (err) => {
      if (stopped) return;
      stopped = true;
      console.error('PDF generation failed:', err);
      cleanup();
      this.showToast(this.locale === 'en-US' ? 'PDF generation failed' : 'PDF 生成失败', 'error');
    };

    const updateProgress = (i) => {
      const el = document.getElementById('pdfProgressText');
      if (el) el.textContent = `${Math.min(i + 1, pages.length)} / ${pages.length}`;
    };

    const processNext = () => {
      if (stopped) return;
      if (pageIdx >= pages.length) {
        finish();
        return;
      }
      const pageEl = pages[pageIdx];
      updateProgress(pageIdx);
      setTimeout(() => {
        if (stopped) return;
        window.html2canvas(pageEl, {
          scale: 1.5,
          useCORS: true,
          backgroundColor: '#ffffff',
          logging: false,
          windowWidth: 794,
          windowHeight: pageEl.offsetHeight || 1123
        }).then(canvas => {
          if (stopped) return;
          if (canvas.height === 0) { fail(new Error('Canvas is empty')); return; }
          const imgData = canvas.toDataURL('image/jpeg', 0.9);
          const imgHeight = (canvas.height * pageWidth) / canvas.width;
          if (pageIdx > 0) pdf.addPage();
          if (imgHeight > pageHeight) {
            pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, pageHeight);
          } else {
            pdf.addImage(imgData, 'JPEG', 0, 0, pageWidth, imgHeight);
          }
          pageIdx++;
          setTimeout(processNext, 80);
        }).catch(fail);
      }, 30);
    };

    setTimeout(processNext, 200);
  },


  toggleMobileNav() {
    const links = document.getElementById('navLinks');
    const hamburger = document.getElementById('navHamburger');
    const overlay = document.getElementById('navOverlay');
    if (links) links.classList.toggle('open');
    if (hamburger) hamburger.classList.toggle('active');
    if (overlay) overlay.classList.toggle('show');
  },

  closeMobileNav() {
    const links = document.getElementById('navLinks');
    const hamburger = document.getElementById('navHamburger');
    const overlay = document.getElementById('navOverlay');
    if (links) links.classList.remove('open');
    if (hamburger) hamburger.classList.remove('active');
    if (overlay) overlay.classList.remove('show');
  },

  // 导航栏链接点击：桌面直接跳转，移动端先关菜单再跳转
  navLinkClick(route) {
    if (window.innerWidth <= 768) {
      this.closeMobileNav();
    }
    this.navigate(route);
  },

  initTheme() {
    const saved = localStorage.getItem('zhixiu_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved === 'dark' || (!saved && prefersDark);
    if (isDark) {
      document.body.classList.add('dark-mode');
    }
    this.theme = isDark ? 'dark' : 'light';
  },

  // 切换主题
  toggleTheme() {
    const isDark = !document.body.classList.contains('dark-mode');
    if (isDark) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('zhixiu_theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('zhixiu_theme', 'light');
    }
    this.theme = isDark ? 'dark' : 'light';
    // 直接更新顶栏按钮图标（避免全量 render 闪烁）
    const btn = document.getElementById('themeToggleBtn');
    if (btn) btn.textContent = isDark ? '☀️' : '🌙';
  },

  // 更新 document.title
  updateDocTitle(route) {
    const tMap = {
      home: { zh: '首页 - 高仙机器人', en: 'Home - GAUSIUM', ja: 'ホーム - GAUSIUM', es: 'Inicio - GAUSIUM' },
      product: { zh: '产品中心 - 高仙机器人', en: 'Products - GAUSIUM', ja: '製品 - GAUSIUM', es: 'Productos - GAUSIUM' },
      videos: { zh: '视频教程 - 高仙机器人', en: 'Videos - GAUSIUM', ja: 'ビデオ - GAUSIUM', es: 'Vídeos - GAUSIUM' },
      doc: { zh: '文档详情 - 高仙机器人', en: 'Doc - GAUSIUM', ja: '文書 - GAUSIUM', es: 'Doc - GAUSIUM' },
      video: { zh: '视频详情 - 高仙机器人', en: 'Video - GAUSIUM', ja: 'ビデオ - GAUSIUM', es: 'Video - GAUSIUM' },
      search: { zh: '搜索结果 - 高仙机器人', en: 'Search - GAUSIUM', ja: '検索 - GAUSIUM', es: 'Búsqueda - GAUSIUM' },
      admin: { zh: '管理后台 - 高仙机器人', en: 'Admin - GAUSIUM', ja: '管理 - GAUSIUM', es: 'Admin - GAUSIUM' }
    };
    const lang = this.locale.split('-')[0];
    document.title = (tMap[route] && tMap[route][lang]) || SITE_NAME;
    // 同步更新 a11y 跳转链接
    const skipLink = document.getElementById('skipToMainLink');
    if (skipLink) skipLink.textContent = this.t('a11y.skipToContent');
  },

  // 编辑器内文档标题修改（不与 updateDocTitle(route) 冲突）
  updateEditorDocTitle(newTitle) {
    if (!this.editorDocId) return;
    const doc = DataStore.getDocById(this.editorDocId);
    if (!doc) return;
    const trimmed = (newTitle || '').trim();
    if (!trimmed) return;
    doc.title = trimmed;
    DataStore.updateDoc(doc.id, {title: trimmed});
    this.showToast('文档标题已更新');
  },

  // 初始化语言
  initLocale() {
    const saved = localStorage.getItem('zhixiu_locale');
    this.locale = saved && I18N[saved] ? saved : 'zh-CN';
    document.documentElement.lang = this.locale;
  },

  // 切换语言
  setLocale(loc) {
    if (!I18N[loc]) return;
    this.locale = loc;
    localStorage.setItem('zhixiu_locale', loc);
    document.documentElement.lang = loc;
    // 关闭所有模态并重新渲染
    this._closeAllModals();
    this.render();
    this.showToast(this._localeToastText(loc), 'success');
    // 切换到非中文时启动预翻译
    if (loc !== 'zh-CN') {
      setTimeout(() => this._pretranslateAll(), 500);
    }
  },

  _closeAllModals() {
    ['loginModal', 'editProductModal', 'newProductModal', 'editUserModal', 'docPreviewModal', 'videoPlayerModal'].forEach(id => {
      const el = document.getElementById(id);
      if (el) el.remove();
    });
    // 暂停模态内视频
    if (this._videoPlayerEl) {
      try { this._videoPlayerEl.pause(); } catch (e) {}
      this._videoPlayerEl = null;
    }
    this.showLoginModal = false;
    this.editingProductId = null;
  },

  _localeToastText(loc) {
    const map = { 'zh-CN': '已切换到中文', 'en-US': 'Switched to English', 'ja-JP': '日本語に切り替えました', 'es-ES': 'Cambiado a Español' };
    return map[loc] || loc;
  },

  // i18n 包装
  t(key, params) {
    return t(key, params);
  },

  // 智能翻译：传入任意中文字符串，返回当前 locale 的翻译
  // - 字典里有 key → 用字典
  // - 否则查 localStorage 缓存
  // - 否则查 localStorage 翻译缓存
  // - 否则用本地 fallback 立即翻译
  // - 异步调 MyMemory API 翻译并缓存（在线时）
  tr(text, opts = {}) {
    if (!text) return '';
    if (this.locale === 'zh-CN') return text; // 中文不需要翻译
    // 1) 先查字典（如果 key 在字典中）
    if (I18N['zh-CN'] && I18N['zh-CN'][text]) {
      const dict = I18N[this.locale] || I18N['zh-CN'];
      return dict[text] || I18N['zh-CN'][text] || text;
    }
    // 2) 查 localStorage 翻译缓存
    if (this._trCache && this._trCache[this.locale] && this._trCache[this.locale][text]) {
      return this._trCache[this.locale][text];
    }
    // 3) 立即用本地 fallback 翻译（保证同步可用）
    const local = this._localFallback(text, this.locale);
    // 缓存 fallback 结果
    if (!this._trCache[this.locale]) this._trCache[this.locale] = {};
    this._trCache[this.locale][text] = local;
    this._saveTrCache();
    // 4) 后台尝试 API 翻译（提升翻译质量）
    if (!opts.skipApi) this._scheduleTranslate(text);
    return local;
  },

  // 加载翻译缓存
  _loadTrCache() {
    try {
      const raw = localStorage.getItem('zhixiu_tr_cache');
      this._trCache = raw ? JSON.parse(raw) : {};
    } catch (e) { this._trCache = {}; }
    // 确保 4 个语言 key 都存在
    ['zh-CN', 'en-US', 'ja-JP', 'es-ES'].forEach(l => {
      if (!this._trCache[l]) this._trCache[l] = {};
    });
  },

  // 保存翻译缓存
  _saveTrCache() {
    try {
      localStorage.setItem('zhixiu_tr_cache', JSON.stringify(this._trCache || {}));
    } catch (e) { /* localStorage 满则清理 */ }
  },

  // 异步翻译（不阻塞 UI，使用 MyMemory 免费 API）
  _scheduleTranslate(text, targetLocs = null) {
    if (!text || !text.trim()) return;
    if (!this._trPending) this._trPending = new Set();
    if (this._trPending.has(text)) return;
    this._trPending.add(text);
    // 延迟去重批量调用
    clearTimeout(this._trTimer);
    this._trTimer = setTimeout(() => this._doTranslateBatch(), 300);
  },

  // 批量翻译（一次调用 4 种语言）
  async _doTranslateBatch() {
    if (!this._trPending || this._trPending.size === 0) return;
    const texts = Array.from(this._trPending);
    this._trPending.clear();
    const locMap = { 'en-US': 'en', 'ja-JP': 'ja', 'es-ES': 'es' };
    for (const loc of Object.keys(locMap)) {
      const missing = texts.filter(t => !this._trCache[loc][t]);
      if (missing.length === 0) continue;
      try {
        // MyMemory API 一次只翻译一个，但用 Promise.all 并发
        const promises = missing.map(text => this._translateOne(text, 'zh-CN', loc));
        const results = await Promise.all(promises);
        results.forEach((r, i) => {
          if (r) this._trCache[loc][missing[i]] = r;
        });
      } catch (e) {
        console.warn('Translate batch failed:', loc, e);
      }
    }
    this._saveTrCache();
  },

  // 单条翻译（MyMemory API）
  async _translateOne(text, from, to) {
    try {
      // 控制长度（MyMemory 限 500 字符/请求）
      const safeText = text.length > 500 ? text.slice(0, 500) : text;
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(safeText)}&langpair=${from === 'zh-CN' ? 'zh-CN' : from}|${to}`;
      const ctrl = new AbortController();
      const t = setTimeout(() => ctrl.abort(), 5000); // 5s 超时
      const resp = await fetch(url, { signal: ctrl.signal });
      clearTimeout(t);
      const data = await resp.json();
      if (data.responseStatus === 200 && data.responseData?.translatedText) {
        const t = data.responseData.translatedText;
        // 过滤无效翻译（API 可能返回原文本）
        if (t && t.toLowerCase() !== safeText.toLowerCase()) return t;
      }
    } catch (e) { /* 静默失败，使用本地 fallback */ }
    // 离线 fallback：使用本地简易翻译字典
    return this._localFallback(text, to);
  },

  // 离线 fallback：常见词翻译
  _localFallback(text, to) {
    if (!text) return text;
    if (to === 'zh-CN') return text;
    const dict = this._localDict || (this._localDict = this._buildLocalDict());
    // 简单字符串替换（优先级从长到短）
    const entries = Object.entries(dict[to] || {}).sort((a, b) => b[0].length - a[0].length);
    let result = text;
    for (const [zh, foreign] of entries) {
      if (result.includes(zh)) {
        result = result.split(zh).join(foreign);
      }
    }
    return result;
  },

  // 构建本地简易翻译字典（高频词）
  _buildLocalDict() {
    return {
      'en-US': {
        // 通用
        '高仙机器人': 'GAUSIUM',
        '机器人维修指南': 'GAUSIUM Repair Guide',
        '维修指南': 'Repair Guide', '维修': 'Repair', '指南': 'Guide',
        '故障排查': 'Troubleshooting', '常见问题': 'FAQ', '故障': 'Trouble',
        '排查': 'Trouble',
        '视频教程': 'Video Tutorial', '教程': 'Tutorial',
        '技术手册': 'Technical Manual', '技术': 'Technical', '手册': 'Manual',
        '安装指南': 'Installation Guide', '规格说明': 'Specification',
        '技术规格': 'Specification', '规格': 'Spec',
        '文档管理': 'Document Management', '视频管理': 'Video Management',
        '产品管理': 'Product Management', '团队成员': 'Team Members',
        '账号管理': 'Account Management', '管理看板': 'Dashboard',
        '首页': 'Home', '产品中心': 'Products', '产品': 'Product',
        '产品型号': 'Product Model', '型号': 'Model',
        '技术文档': 'Technical Documents', '文档': 'Document',
        '服务用户': 'Service Users', '服务': 'Service', '用户': 'User',
        '智能水泵': 'Smart Water Pump', '水泵': 'Water Pump',
        '智能水泵用户手册': 'Smart Water Pump User Manual',
        '智能水泵快速安装教程': 'Smart Water Pump Quick Installation Tutorial',
        '智能水泵常见问题解答': 'Smart Water Pump FAQ',
        '伺服电机': 'Servo Motor', '电机': 'Motor',
        '可编程控制器': 'PLC', '控制器': 'Controller',
        '人机界面': 'HMI Touchscreen', '界面': 'Interface',
        '减速机': 'Reducer', '变频器': 'Inverter',
        '压力传感器': 'Pressure Sensor', '传感器': 'Sensor',
        '六轴机器人': '6-Axis Robot', '六轴': '6-Axis', '机器人': 'Robot',
        '机器人安装调试指南': 'Robot Installation & Debugging Guide',
        '流体设备': 'Fluid Equipment', '动力传动': 'Power Transmission',
        '自动化控制': 'Automation', '仪器仪表': 'Instruments',
        '在售': 'In Stock', '开发中': 'Developing', '已归档': 'Archived',
        '已发布': 'Published', '草稿': 'Draft', '审核中': 'In Review',
        '规划中': 'Planning',
        '简单': 'Easy', '中等': 'Medium', '困难': 'Hard', '专家': 'Expert',
        '份文档': 'docs',         'diff.easy': 'Easy', 'diff.medium': 'Medium', 'diff.hard': 'Hard', 'diff.expert': 'Expert', '个视频': 'videos', '个': '', '份': '',
        '共找到': 'Found', '条': ' items',
        '次观看': ' views', '观看': 'views',
        '全部产品': 'All Products', '全部类型': 'All Types',
        '全部视频': 'All Videos', '全部': 'All',
        '使用视频': 'Usage Videos', '使用': 'Usage',
        '维护视频': 'Maintenance Videos', '维护': 'Maintenance',
        '拆装视频': 'Disassembly Videos', '拆装': 'Disassembly',
        '排查视频': 'Troubleshooting Videos',
        '产品筛选': 'Product Filter',
        '排序': 'Sort',
        '最新更新': 'Newest', '最多观看': 'Most Viewed', '时长最长': 'Longest',
        '更新': 'Updated',
        '款产品': 'products', '款': '',
        '正在筛选': 'Filtering', '清除筛选': 'Clear filter',
        '没有找到匹配的产品': 'No matching products',
        '试试其他关键词或分类': 'Try other keywords or categories',
        '搜索产品': 'Search products',
        '搜索视频': 'Search videos',
        '搜索文档': 'Search documents',
        '搜索': 'Search',
        '共款产品': 'products in total', '共': 'Total', '款产品': 'products', '款': '',
        '正在筛选': 'Filtering', '清除筛选': 'Clear filter',
        '包含 1 条': 'containing at least 1',
        '显示至少': 'Showing products with at least',
        '按文档类型筛选': 'Filter by doc type',
        '文档类型': 'Doc type',
        '包含 1 条': 'containing at least 1',
        '显示至少': 'Showing products with at least',
        '共': 'Total', '款产品': 'products', '款': '', '条': ' entries',
        '用户手册': 'User Manual', '常见问题': 'FAQ',
        '用户': 'User', '手册': 'Manual', '常见': 'Common',
        '设备': 'Equipment', '传动': 'Transmission', '动力': 'Power',
        '流体': 'Fluid', '压力': 'Pressure', '精度': 'Precision',
        '变频': 'Inverter', '行星': 'Planetary', '永磁同步': 'PMSM',
        '技术': 'Technical', '工业': 'Industrial', '专业': 'Professional',
        '联系': 'Contact', '帮助': 'Help', '培训': 'Training', '课程': 'Courses',
        '支持': 'Support', '工作日': 'Weekday',
        '登录': 'Sign in', '退出': 'Sign out', '导入': 'Import', '导出': 'Export',
        '编辑': 'Edit', '删除': 'Delete', '查看': 'View', '操作': 'Action',
        '状态': 'Status', '时间': 'Time', '名称': 'Name', '类型': 'Type',
        '作者': 'Author', '更新': 'Updated', '下载': 'Download', '复制': 'Copy',
        '分享': 'Share', '点赞': 'Like', '收藏': 'Favorite', '排序': 'Sort',
        '搜索': 'Search', '详情': 'Details', '负责': 'Owner', '加载中': 'Loading...',
        '展开': 'Expand', '收起': 'Collapse', '重置': 'Reset', '提交': 'Submit',
        '保存并发布': 'Save & Publish', '重新上传': 'Re-upload',
        '效率节能智能离心泵，适用于工业供水、暖通空调系统': 'Energy-efficient centrifugal pump for industrial water supply and HVAC systems',
        '高效节能智能离心泵，适用于工业供水、暖通空调系统': 'Energy-efficient centrifugal pump for industrial water supply and HVAC systems',
        '高精度交流伺服电机，额定功率3kW，支持多种通信协议': 'High-precision AC servo motor, 3kW rated, supports multiple protocols',
        '模块化中型PLC，支持最多512点IO，适用于复杂生产线': 'Modular medium PLC, up to 512 I/O, for complex production lines',
        '10寸工业级触摸屏，支持多协议通讯，IP65防护': '10" industrial touchscreen, multi-protocol, IP65 protection',
        '精密行星减速机，减速比50:1，背隙≤3弧分': 'Precision planetary reducer, ratio 50:1, backlash ≤3 arcmin',
        '75kW通用矢量变频器，支持永磁同步电机驱动': '75kW universal vector inverter, supports PMSM drive',
        '高精度扩散硅压力变送器，4-20mA输出，IP67防护': 'High-precision silicon pressure transmitter, 4-20mA output, IP67',
        '6kg负载六轴工业机器人，臂展900mm，适用于装配搬运': '6kg payload 6-axis robot, 900mm reach, for assembly/handling',
        '售后咨询': 'After-Sales Inquiry',
      },
      'ja-JP': {
        '高仙机器人': 'GAUSIUM',
        '机器人维修指南': 'GAUSIUM修理ガイド',
        '共': '合計', '款产品': '件', '款': '', '条': '件', '全部产品': 'すべての製品', '共款产品': '件',
        '正在筛选': 'フィルター中', '清除筛选': 'クリア',
        '没有找到匹配的产品': '一致する製品がありません',
        '试试其他关键词或分类': '他のキーワードや分類をお試しください',
        '搜索产品': '製品を検索', '搜索视频': '動画を検索', '搜索文档': '文書を検索',
        '搜索': '検索',
        '按文档类型筛选': '文書タイプでフィルター',
        '文档类型': '文書タイプ',
        '包含 1 条': '1件以上含む',
        '显示至少': '表示中：',
        '用户手册': 'ユーザーマニュアル', '常见问题': 'よくある質問',
        '用户': 'ユーザー', '手册': 'マニュアル', '常见': 'よくある',
        '智能水泵': 'スマートウォーターポンプ', '水泵': 'ウォーターポンプ',
        '智能水泵用户手册': 'スマートウォーターポンプユーザーマニュアル',
        '智能水泵快速安装教程': 'スマートウォーターポンプクイックインストールチュートリアル',
        '智能水泵常见问题解答': 'スマートウォーターポンプFAQ',
        '伺服电机': 'サーボモーター', '电机': 'モーター',
        '人机界面': 'HMIタッチスクリーン', '界面': 'インターフェース',
        '六轴机器人': '6軸ロボット', '六轴': '6軸', '机器人': 'ロボット',
        '机器人安装调试指南': 'ロボット据付調整ガイド',
        '流体设备': '流体機器', '动力传动': '動力伝達', '自动化控制': 'オートメーション', '仪器仪表': '計器',
        '在售': '販売中', '开发中': '開発中', '已归档': 'アーカイブ済み', '已发布': '公開済み',
        '草稿': '下書き', '审核中': 'レビュー中', '规划中': '計画中',
        '简单': '簡単', '中等': '中級', '困难': '困難', '专家': '専門家',
        '份文档': '件文書',         'diff.easy': '簡単', 'diff.medium': '中級', 'diff.hard': '困難', 'diff.expert': '専門家', '个视频': '件動画', '个': '', '份': '',
        '共找到': '見つかりました', '次观看': ' 回視聴', '观看': '視聴',
        '全部视频': 'すべての動画', '使用视频': '使用動画', '维护视频': '保守動画',
        '拆装视频': '組立動画', '排查视频': 'トラブル動画',
        '全部': 'すべて', '使用': '使用', '维护': '保守', '拆装': '組立',
        '产品筛选': '製品フィルター',
        '排序': '並び替え', '最新更新': '最新', '最多观看': '最多視聴', '时长最长': '最長時間',
        '产品型号': '製品型番', '型号': '型番',
        '技术文档': '技術文書', '文档': '文書',
        '服务用户': 'サービスユーザー', '服务': 'サービス',
        '技术手册': '技術マニュアル', '技术': '技術',
        '维修指南': '修理ガイド', '维修': '修理', '指南': 'ガイド',
        '故障排查': 'トラブルシューティング', '故障': 'トラブル',
        '视频教程': 'ビデオチュートリアル', '教程': 'チュートリアル',
        '产品中心': '製品一覧', '产品': '製品',
        '维修': '修理', '教程': 'チュートリアル', '机器人': 'ロボット',
        '水泵': 'ウォーターポンプ',
        '六轴': '6軸', '机器人': 'ロボット',
        '份文档': '件文書',         'diff.easy': '簡単', 'diff.medium': '中級', 'diff.hard': '困難', 'diff.expert': '専門家', '个视频': '件動画',
        '共款产品': '件',
        '份': '', '共': '合計', '款': '', '条': '件', '全部产品': 'すべての製品',
        '正在筛选': 'フィルター中', '清除筛选': 'クリア',
        '没有找到匹配的产品': '一致する製品がありません',
        '试试其他关键词或分类': '他のキーワードや分類をお試しください',
        '搜索产品': '製品を検索',
        '按文档类型筛选': '文書タイプでフィルター',
        '文档类型': '文書タイプ',
        '包含 1 条': '1件以上含む',
        '显示至少': '表示中：',
        '安装指南': 'インストールガイド', '规格说明': '仕様',
        '文档管理': '文書管理', '视频管理': 'ビデオ管理',
        '产品管理': '製品管理', '团队成员': 'チーム',
        '账号管理': 'アカウント管理', '管理看板': 'ダッシュボード',
        '首页': 'ホーム', '产品中心': '製品', '产品': '製品',
        '智能水泵': 'スマートウォーターポンプ', '水泵': 'ウォーターポンプ',
        '伺服电机': 'サーボモーター', '电机': 'モーター',
        '可编程控制器': 'プログラマブルコントローラー', '控制器': 'コントローラー',
        '人机界面': 'HMIタッチパネル', '界面': '画面',
        '减速机': '減速機', '变频器': 'インバーター',
        '压力传感器': '圧力センサー', '传感器': 'センサー',
        '六轴机器人': '6軸ロボット', '六轴': '6軸', '机器人': 'ロボット',
        '流体设备': '流体機器', '动力传动': '動力伝達',
        '自动化控制': 'オートメーション', '仪器仪表': '計器',
        '在售': '販売中', '开发中': '開発中', '已归档': 'アーカイブ',
        '已发布': '公開済み', '草稿': '下書き', '审核中': 'レビュー中',
        '规划中': '計画中',
        '简单': '簡単', '中等': '普通', '困难': '難しい', '专家': '専門家',
        '份文档': '本', '个视频': '本',
        '高效节能智能离心泵，适用于工业供水、暖通空调系统': 'エネルギー効率の高い遠心ポンプ、工業用水・空調システム向け',
        '高精度交流伺服电机，额定功率3kW，支持多种通信协议': '高精度ACサーボモーター、定格3kW、複数プロトコル対応',
        '模块化中型PLC，支持最多512点IO，适用于复杂生产线': 'モジュラー中型PLC、最大512点I/O、複雑な生産ライン向け',
        '10寸工业级触摸屏，支持多协议通讯，IP65防护': '10インチ産業用タッチパネル、マルチプロトコル、IP65保護',
        '精密行星减速机，减速比50:1，背隙≤3弧分': '精密遊星減速機、減速比50:1、バックラッシュ≤3分',
        '75kW通用矢量变频器，支持永磁同步电机驱动': '75kW汎用ベクトルインバーター、PMSM駆動対応',
        '高精度扩散硅压力变送器，4-20mA输出，IP67防护': '高精度拡散シリコン圧力トランスミッタ、4-20mA出力、IP67',
        '6kg负载六轴工业机器人，臂展900mm，适用于装配搬运': '6kg可搬6軸ロボット、900mmリーチ、組立・ハンドリング向け',
        '售后咨询': 'アフターサービスのお問い合わせ',
      },
      'es-ES': {
        '高仙机器人': 'GAUSIUM',
        '机器人维修指南': 'GAUSIUM Guía de Reparación',
        '共': 'Total', '款产品': 'productos', '款': '', '条': ' entradas',
        '正在筛选': 'Filtrando', '清除筛选': 'Limpiar',
        '没有找到匹配的产品': 'Sin productos',
        '试试其他关键词或分类': 'Pruebe otras palabras clave o categorías',
        '搜索产品': 'Buscar productos', '搜索视频': 'Buscar videos', '搜索文档': 'Buscar documentos',
        '搜索': 'Buscar',
        '按文档类型筛选': 'Filtrar por tipo de documento',
        '文档类型': 'Tipo de documento',
        '包含 1 条': 'con al menos 1',
        '显示至少': 'Mostrando:',
        '用户手册': 'Manual de Usuario', '常见问题': 'Preguntas Frecuentes',
        '用户': 'Usuario', '手册': 'Manual', '常见': 'Frecuentes',
        '智能水泵': 'Bomba de Agua Inteligente', '水泵': 'Bomba de Agua',
        '智能水泵用户手册': 'Manual de Usuario Bomba de Agua Inteligente',
        '智能水泵快速安装教程': 'Tutorial de Instalación Rápida Bomba de Agua Inteligente',
        '智能水泵常见问题解答': 'Preguntas Frecuentes Bomba de Agua Inteligente',
        '伺服电机': 'Servomotor', '电机': 'Motor',
        '人机界面': 'HMI Pantalla Táctil', '界面': 'Interfaz',
        '六轴机器人': 'Robot de 6 Ejes', '六轴': '6 Ejes', '机器人': 'Robot',
        '机器人安装调试指南': 'Guía de Instalación y Depuración del Robot',
        '流体设备': 'Equipo de Fluidos', '动力传动': 'Transmisión de Potencia',
        '自动化控制': 'Automatización y Control', '仪器仪表': 'Instrumentación',
        '在售': 'En Stock', '开发中': 'En Desarrollo', '已归档': 'Archivado',
        '已发布': 'Publicado', '草稿': 'Borrador', '审核中': 'En Revisión', '规划中': 'Planificación',
        '简单': 'Fácil', '中等': 'Medio', '困难': 'Difícil', '专家': 'Experto',
        '份文档': 'documentos',         'diff.easy': 'Fácil', 'diff.medium': 'Medio', 'diff.hard': 'Difícil', 'diff.expert': 'Experto', '个视频': 'videos', '个': '', '份': '',
        '共找到': 'Encontrados', '次观看': ' visualizaciones', '观看': 'visualizaciones',
        '全部视频': 'Todos los Videos', '使用视频': 'Videos de Uso', '维护视频': 'Videos de Mantenimiento',
        '拆装视频': 'Videos de Desmontaje', '排查视频': 'Videos de Diagnóstico',
        '全部': 'Todos', '使用': 'Uso', '维护': 'Mantenimiento', '拆装': 'Desmontaje',
        '产品筛选': 'Filtro de Producto',
        '排序': 'Ordenar', '最新更新': 'Más Recientes', '最多观看': 'Más Vistos', '时长最长': 'Más Largos',
        '产品型号': 'Modelo de Producto', '型号': 'Modelo',
        '技术文档': 'Documento Técnico', '文档': 'Documento',
        '服务用户': 'Servicio al Usuario', '服务': 'Servicio',
        '技术手册': 'Manual Técnico', '技术': 'Técnico',
        '维修指南': 'Guía de Reparación', '维修': 'Reparación', '指南': 'Guía',
        '故障排查': 'Diagnóstico', '故障': 'Diagnóstico',
        '视频教程': 'Tutorial en Video', '教程': 'Tutorial',
        '产品中心': 'Productos', '产品': 'Producto',
        '全部产品': 'Todos los Productos', '全部类型': 'Todos los Tipos',
        '查看全部产品': 'Ver todos los productos',
        '份文档': 'documentos',         'diff.easy': 'Fácil', 'diff.medium': 'Medio', 'diff.hard': 'Difícil', 'diff.expert': 'Experto', '个视频': 'videos',
        '共款产品': 'productos en total',
        '份': '', '共': 'Total', '款': '', '条': ' entradas',
        '正在筛选': 'Filtrando', '清除筛选': 'Limpiar',
        '没有找到匹配的产品': 'Sin productos',
        '试试其他关键词或分类': 'Prueba otras palabras',
        '搜索产品': 'Buscar productos',
        '按文档类型筛选': 'Filtrar por tipo',
        '文档类型': 'Tipo de doc',
        '包含 1 条': 'con al menos 1',
        '显示至少': 'Mostrando:',
        '用户手册': 'Manual de Usuario', '常见问题': 'Preguntas Frecuentes',
        '用户': 'Usuario', '手册': 'Manual', '常见': 'Frecuentes',
        '故障排查': 'Diagnóstico', '常见问题': 'Preguntas Frecuentes', '故障': 'Avería',
        '视频教程': 'Video Tutorial', '教程': 'Tutorial',
        '技术手册': 'Manual Técnico', '手册': 'Manual',
        '安装指南': 'Guía de Instalación', '规格说明': 'Especificación',
        '文档管理': 'Documentos', '视频管理': 'Videos',
        '产品管理': 'Productos', '团队成员': 'Equipo',
        '账号管理': 'Cuentas', '管理看板': 'Panel',
        '首页': 'Inicio', '产品中心': 'Productos', '产品': 'Producto',
        '智能水泵': 'Bomba de Agua Inteligente', '水泵': 'Bomba de Agua',
        '伺服电机': 'Servomotor', '电机': 'Motor',
        '可编程控制器': 'PLC', '控制器': 'Controlador',
        '人机界面': 'Pantalla HMI', '界面': 'Interfaz',
        '减速机': 'Reductor', '变频器': 'Variador',
        '压力传感器': 'Sensor de Presión', '传感器': 'Sensor',
        '六轴机器人': 'Robot de 6 Ejes', '六轴': '6 Ejes', '机器人': 'Robot',
        '流体设备': 'Equipo Fluido', '动力传动': 'Transmisión',
        '自动化控制': 'Automatización', '仪器仪表': 'Instrumentos',
        '在售': 'En Stock', '开发中': 'En Desarrollo', '已归档': 'Archivado',
        '已发布': 'Publicado', '草稿': 'Borrador', '审核中': 'En Revisión',
        '规划中': 'Planificación',
        '简单': 'Fácil', '中等': 'Medio', '困难': 'Difícil', '专家': 'Experto',
        '份文档': 'docs',         'diff.easy': 'Easy', 'diff.medium': 'Medium', 'diff.hard': 'Hard', 'diff.expert': 'Expert', '个视频': 'videos',
        '高效节能智能离心泵，适用于工业供水、暖通空调系统': 'Bomba centrífuga de alta eficiencia para suministro industrial y climatización',
        '高精度交流伺服电机，额定功率3kW，支持多种通信协议': 'Servomotor de CA de alta precisión, 3kW, múltiples protocolos',
        '模块化中型PLC，支持最多512点IO，适用于复杂生产线': 'PLC modular medio, hasta 512 E/S, para líneas de producción complejas',
        '10寸工业级触摸屏，支持多协议通讯，IP65防护': 'Pantalla táctil industrial 10", multi-protocolo, IP65',
        '精密行星减速机，减速比50:1，背隙≤3弧分': 'Reductor planetario de precisión, relación 50:1, juego ≤3 arcmin',
        '75kW通用矢量变频器，支持永磁同步电机驱动': 'Variador vectorial 75kW universal, soporta motor PMSM',
        '高精度扩散硅压力变送器，4-20mA输出，IP67防护': 'Transmisor de presión de silicio, 4-20mA, IP67',
        '6kg负载六轴工业机器人，臂展900mm，适用于装配搬运': 'Robot de 6 ejes 6kg de carga, 900mm de alcance, ensamblaje/manipulación',
        '售后咨询': 'Consulta Postventa',
      }
    };
  },

  // 全量预翻译：扫描 dataStore 中所有中文文本，异步翻译
  async _pretranslateAll() {
    if (this.locale === 'zh-CN') return;
    this._loadTrCache();
    const texts = new Set();
    // 收集产品/文档/视频/团队成员/账号的所有文本字段
    const collect = (obj, fields) => {
      fields.forEach(f => {
        if (obj[f] && typeof obj[f] === 'string') texts.add(obj[f]);
      });
    };
    try {
      DataStore.getProducts().forEach(p => collect(p, ['name', 'description', 'category']));
      DataStore.getDocuments().forEach(d => collect(d, ['title', 'description', 'author']));
      DataStore.getVideos().forEach(v => collect(v, ['title', 'author']));
      DataStore.getTeamMembers().forEach(m => collect(m, ['name', 'role']));
      DataStore.getUsers().forEach(u => collect(u, ['name']));
    } catch (e) {}
    // 触发翻译
    Array.from(texts).forEach(t => this._scheduleTranslate(t));
  },

  filterHomeProducts(category, el) {
    // 切换 Tab 高亮
    document.querySelectorAll('.product-cat-tab').forEach(t => t.classList.remove('active'));
    if (el) el.classList.add('active');

    // 筛选产品卡片
    const cards = document.querySelectorAll('#homeProductGrid .product-card');
    cards.forEach(card => {
      if (category === 'all' || card.dataset.category === category) {
        card.style.display = '';
      } else {
        card.style.display = 'none';
      }
    });
  },

  doGlobalSearch() {
    const input = document.getElementById('globalSearch');
    const q = input ? input.value.trim() : '';
    if (!q) {
      this.showToast(this.t('common.searchPlaceholder'), 'warning');
      if (input) input.focus();
      return;
    }
    this.navigate('search', { q });
  },

  doHeroSearch() {
    const input = document.getElementById('heroSearchInput');
    const q = input ? input.value.trim() : '';
    if (!q) {
      this.showToast(this.t('common.searchPlaceholder'), 'warning');
      if (input) input.focus();
      return;
    }
    this.navigate('search', { q });
  },

  doQuickSearch(q) {
    if (!q) return;
    this.navigate('search', { q });
  },

  // ========================================
  // 搜索结果页
  // ========================================
  renderSearchResults() {
    const query = this.searchQuery;
    const results = DataStore.search(query);
    const docTypes = DataStore.getDocTypes();
    const total = results.products.length + results.docs.length + results.videos.length;

    return `
      <div class="page-header">
        <button class="back-btn" onclick="App.navigate('home')">←</button>
        <div>
          <div class="page-title">${this.t('search.title')}</div>
          <div style="color:var(--gray-500);font-size:14px;margin-top:4px;">
            ${this.t('search.keyword')} "<strong style="color:var(--gray-800);">${query}</strong>" ${this.t('search.found')} ${total} ${this.t('common.results')}
          </div>
        </div>
      </div>

      ${total === 0 ? `
        <div style="text-align:center;padding:60px 20px;background:var(--bg-card);border-radius:var(--radius-lg);border:1px solid var(--border-color);">
          <div style="font-size:64px;margin-bottom:16px;">🔍</div>
          <div style="font-size:18px;color:var(--gray-700);margin-bottom:8px;">${this.t('search.notFound')}「${query}」${this.t('search.notFound2')}</div>
          <div style="font-size:14px;color:var(--gray-500);margin-bottom:24px;">${this.t('search.tryHot')}</div>
          <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:8px;margin-bottom:20px;">
            <span class="hero-hot-tag" onclick="App.doQuickSearch('机械密封')" style="background:#f1f5f9;color:var(--gray-700);cursor:pointer;">机械密封更换</span>
            <span class="hero-hot-tag" onclick="App.doQuickSearch('伺服电机')" style="background:#f1f5f9;color:var(--gray-700);cursor:pointer;">伺服电机调试</span>
            <span class="hero-hot-tag" onclick="App.doQuickSearch('PLC编程')" style="background:#f1f5f9;color:var(--gray-700);cursor:pointer;">PLC编程</span>
            <span class="hero-hot-tag" onclick="App.doQuickSearch('水泵故障')" style="background:#f1f5f9;color:var(--gray-700);cursor:pointer;">水泵故障</span>
            <span class="hero-hot-tag" onclick="App.doQuickSearch('传感器')" style="background:#f1f5f9;color:var(--gray-700);cursor:pointer;">传感器校准</span>
          </div>
          <button class="btn btn-primary" onclick="App.navigate('home')">${this.t('action.backHome')}</button>
        </div>
      ` : ''}

      ${results.products.length > 0 ? `
        <div class="search-section">
          <h3 class="search-section-title">相关产品 (${results.products.length})</h3>
          <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:16px;">
            ${results.products.map(p => `
              <div class="product-card" onclick="App.navigate('product', {productId: '${p.id}'})" style="cursor:pointer;">
                <div class="product-card-icon" style="height:100px;font-size:40px;">
                  ${p.icon}
                </div>
                <div class="product-card-body" style="padding:12px;">
                  <div class="product-card-title" style="font-size:14px;">${this.highlightText(p.name, query)}</div>
                  <div style="font-size:12px;color:var(--gray-500);">${p.category} · ${p.docCount} 篇文档</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      ${results.docs.length > 0 ? `
        <div class="search-section">
          <h3 class="search-section-title green">相关文档 (${results.docs.length})</h3>
          <div class="search-result-list">
            ${results.docs.map((d, i) => {
              const product = DataStore.getProductById(d.productId);
              const typeInfo = docTypes.find(t => t.id === d.type) || { icon: '📄', name: '文档', color: 'guide' };
              return `
                <div class="search-result-item" onclick="App.openDocPreviewModal('${d.id}')">
                  <div class="search-result-icon ${typeInfo.color}">${typeInfo.icon}</div>
                  <div class="search-result-body">
                    <div class="search-result-title">${this.highlightText(d.title, query)}</div>
                    <div class="search-result-desc">${this.highlightText(d.description.substring(0, 80), query)}...</div>
                    <div class="search-result-meta">
                      <span>${product ? product.name : ''}</span>
                      <span>👁 ${d.views} 阅读</span>
                      <span>📄 ${d.pages} 页</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}

      ${results.videos.length > 0 ? `
        <div class="search-section">
          <h3 class="search-section-title orange">相关视频 (${results.videos.length})</h3>
          <div class="video-grid">
            ${results.videos.map(v => {
              const product = DataStore.getProductById(v.productId);
              return `
                <div class="video-card" onclick="App.openVideoPlayerModal('${v.id}')">
                  <div class="video-thumbnail">
                    ${v.videoUrl ? `<video src="${v.videoUrl}" preload="metadata" muted class="video-frame" data-video-id="${v.id}"></video>` : `<span style="font-size:60px;">${v.thumbnail}</span>`}
                    <div class="play-icon">▶</div>
                    <span class="video-duration">${v.duration}</span>
                  </div>
                  <div class="video-card-body">
                    <div class="video-card-title">${this.highlightText(v.title, query)}</div>
                    <div class="video-card-meta">
                      <span>👁 ${v.views}</span>
                      <span>${product ? product.name : ''}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      ` : ''}
    `;
  },

  // ========================================
  // 视频播放页
  // ========================================
  renderVideoPlayer() {
    const video = DataStore.getVideoById(this.currentVideoId);
    if (!video) {
      return '<div style="text-align:center;padding:100px;"><h2>视频不存在</h2></div>';
    }
    if (video.status !== 'published') {
      return `
        <div style="text-align:center;padding:100px 20px;background:var(--bg-card);border-radius:var(--radius-lg);border:1px solid var(--border-color);">
          <div style="font-size:64px;margin-bottom:20px;">🔒</div>
          <h2 style="font-size:22px;margin-bottom:10px;">视频暂未发布</h2>
          <p style="color:var(--gray-500);margin-bottom:24px;">该视频正在制作或审核中，尚未对客户开放</p>
          <button class="btn btn-primary" onclick="App.navigate('home')">${this.t('action.backHome')}</button>
        </div>
      `;
    }

    const product = DataStore.getProductById(video.productId);
    const categories = DataStore.getVideoCategories();
    const catInfo = categories.find(c => c.id === video.category) || { name: '视频', icon: '🎬' };
    
    // 相关视频（同分类的其他视频，优先同产品）
    const sameCatVideos = DataStore.getVideos()
      .filter(v => v.id !== video.id && v.status === 'published' && v.category === video.category)
      .sort((a, b) => {
        // 同产品的排前面
        if (a.productId === video.productId && b.productId !== video.productId) return -1;
        if (a.productId !== video.productId && b.productId === video.productId) return 1;
        return b.views - a.views;
      })
      .slice(0, 6);
    
    // 相关文档
    const relatedDocs = DataStore.getDocsByProduct(video.productId)
      .filter(d => d.status === 'published')
      .slice(0, 5);

    return `
      <!-- 面包屑 -->
      <div style="display:flex;align-items:center;gap:8px;font-size:13px;color:var(--gray-500);margin-bottom:20px;">
        <span style="cursor:pointer;" onclick="App.navigate('home')">${this.t('nav.home')}</span>
        <span>/</span>
        <span style="cursor:pointer;" onclick="App.navigate('videos')">${this.t('nav.videos')}</span>
        <span>/</span>
        <span style="cursor:pointer;" onclick="App.navigate('videos', {videoCategory: '${video.category}'})">${catInfo.icon} ${catInfo.name}</span>
        <span>/</span>
        <span style="color:var(--gray-700);">${video.title.substring(0, 20)}${video.title.length > 20 ? '...' : ''}</span>
      </div>

      <div class="video-detail-layout">
        <div>
          <!-- 视频播放器 -->
          <div class="video-player-wrapper">
            ${video.videoType === 'external' ? `
              <div style="text-align:center;color:#fff;">
                <div style="font-size:80px;margin-bottom:16px;">${video.thumbnail}</div>
                <div style="font-size:18px;margin-bottom:8px;">${this.tr(video.title)}</div>
                <div style="font-size:14px;opacity:0.7;margin-bottom:20px;">外部视频 · 时长 ${video.duration}</div>
                <button class="btn btn-primary btn-lg" onclick="window.open('${video.videoUrl || '#'}', '_blank', 'noopener,noreferrer')">▶ 在原平台播放</button>
              </div>
            ` : `
              <video controls poster="">
                <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
                您的浏览器不支持视频播放
              </video>
            `}
          </div>

          <!-- 视频标题和操作 -->
          <div class="video-info-card">
            <div class="video-title-row">
              <div style="flex:1;min-width:0;">
                <div class="video-meta-tags">
                  <span class="video-cat-badge">${catInfo.icon} ${this.tr(catInfo.name)}</span>
                  ${product ? `<span style="font-size:13px;color:var(--gray-500);">${product.icon} ${this.tr(product.name)}</span>` : ''}
                </div>
                <h1 class="video-title">${this.tr(video.title)}</h1>
              </div>
              <div class="video-actions">
                <button class="action-btn ${this.isVideoLiked(video.id) ? 'liked' : ''}" onclick="App.toggleVideoLike('${video.id}');this.classList.toggle('liked');">
                  <span>👍</span><span style="font-size:12px;">${this.isVideoLiked(video.id) ? this.t('video.liked') : this.t('action.like')}</span>
                </button>
                <button class="action-btn ${DataStore.isFavorite('video', video.id) ? 'faved' : ''}" onclick="App.toggleVideoFav('${video.id}')" id="videoFavBtn">
                  <span>${DataStore.isFavorite('video', video.id) ? '❤️' : '⭐'}</span><span style="font-size:12px;">${DataStore.isFavorite('video', video.id) ? this.t('video.faved') : this.t('action.fav')}</span>
                </button>
                <button class="action-btn" onclick="App.copyVideoLink('${video.id}')">
                  <span>🔗</span><span style="font-size:12px;">${this.t('action.share')}</span>
                </button>
              </div>
            </div>
            <div class="video-stats">
              <span>👤 ${this.t('video.instructor')}: ${video.author}</span>
              <span>⏱ ${this.t('video.duration')}: ${video.duration}</span>
              <span>👁 ${video.views} ${this.t('common.times')}${this.t('common.view')}</span>
              <span>📅 ${this.t('video.updated')}: ${video.updatedAt}</span>
            </div>
          </div>

          <!-- 视频简介 -->
          <div class="video-section-card">
            <h3 class="video-section-title">
              📝 视频简介
            </h3>
            <p style="color:var(--gray-600);line-height:1.8;">${video.description}</p>
          </div>

          <!-- 相关文档 -->
          ${relatedDocs.length > 0 ? `
            <div class="video-section-card">
              <h3 class="video-section-title">
                📄 相关文档
              </h3>
              <div style="display:flex;flex-direction:column;gap:8px;">
                ${relatedDocs.map(d => `
                  <div class="related-doc-item" onclick="App.navigate('doc', {docId: '${d.id}'})">
                    <div style="display:flex;align-items:center;gap:10px;min-width:0;">
                      <span style="font-size:18px;">📄</span>
                      <span style="font-size:14px;color:var(--gray-700);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${this.tr(d.title)}</span>
                    </div>
                    <span style="font-size:12px;color:var(--gray-400);flex-shrink:0;">${d.pages} 页</span>
                  </div>
                `).join('')}
              </div>
            </div>
          ` : ''}
        </div>

        <!-- 侧边栏：推荐视频 -->
        <div>
          <div class="related-video-sidebar">
            <div class="related-video-header">
              <h3 style="font-size:15px;margin:0;">🎬 ${this.t('video.related')}</h3>
              <span style="font-size:12px;color:var(--gray-400);">${this.t('video.sameCat')}</span>
            </div>
            ${sameCatVideos.length === 0 ? `
              <div style="text-align:center;color:var(--gray-400);font-size:13px;padding:20px 0;">${this.t('video.noMore')}</div>
            ` : sameCatVideos.map(v => {
              const vproduct = DataStore.getProductById(v.productId);
              const vcat = categories.find(c => c.id === v.category);
              return `
                <div class="related-video-item" onclick="App.navigate('video', {videoId: '${v.id}'})">
                  <div class="related-video-thumb">
                    ${v.thumbnail}
                    <span class="related-video-duration">${v.duration}</span>
                    ${v.productId === video.productId ? '<span class="related-video-badge">同产品</span>' : ''}
                  </div>
                  <div class="related-video-info">
                    <div class="related-video-title">${this.tr(v.title)}</div>
                    <div class="related-video-meta">
                      <span>${vproduct ? vproduct.name : ''}</span>
                      <span>👁 ${v.views}</span>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      </div>
    `;
  },

  // ========================================
  // 后台管理布局
  // ========================================
  renderAdminLayout() {
    const tab = this.currentAdminTab;
    let content = '';

    switch (tab) {
      case 'dashboard':
        content = this.renderDashboard();
        break;
      case 'docs':
        content = this.renderAdminDocs();
        break;
      case 'videos':
        content = this.renderAdminVideos();
        break;
      case 'products':
        content = this.renderAdminProducts();
        break;
      case 'team':
        content = this.renderAdminTeam();
        break;
      case 'users':
        // 只有 root_admin 可访问
        if (this.isRootAdmin()) {
          content = this.renderAdminUsers();
        } else {
          this.showToast('仅根管理员可访问账号管理', 'error');
          content = this.renderDashboard();
        }
        break;
      default:
        content = this.renderDashboard();
    }

    const breadcrumbs = {
      dashboard: '管理看板',
      docs: '文档管理',
      videos: '视频管理',
      products: '产品管理',
      team: '团队成员',
      users: '账号管理'
    };

    return `
      ${this.renderNavbar('admin')}
      <div class="admin-layout">
        <aside class="admin-sidebar">
          <div class="admin-sidebar-section">
            <div class="admin-sidebar-label">${this.t('admin.dashboard')}</div>
            <div class="admin-nav-item ${tab === 'dashboard' ? 'active' : ''}" onclick="App.navigate('admin', {adminTab: 'dashboard'})">
              <span class="admin-nav-icon">📊</span>
              <span>${this.t('admin.dashboard')}</span>
            </div>
          </div>
          <div class="admin-sidebar-section">
            <div class="admin-sidebar-label">${this.t('admin.docs')}</div>
            <div class="admin-nav-item ${tab === 'docs' ? 'active' : ''}" onclick="App.navigate('admin', {adminTab: 'docs'})">
              <span class="admin-nav-icon">📄</span>
              <span>${this.t('admin.docs')}</span>
            </div>
            <div class="admin-nav-item ${tab === 'videos' ? 'active' : ''}" onclick="App.navigate('admin', {adminTab: 'videos'})">
              <span class="admin-nav-icon">🎬</span>
              <span>${this.t('admin.videos')}</span>
            </div>
            <div class="admin-nav-item ${tab === 'products' ? 'active' : ''}" onclick="App.navigate('admin', {adminTab: 'products'})">
              <span class="admin-nav-icon">📦</span>
              <span>${this.t('admin.products')}</span>
            </div>
          </div>
          <div class="admin-sidebar-section">
            <div class="admin-sidebar-label">${this.t('admin.data')}</div>
            ${this.isRootAdmin() ? `
              <div class="admin-nav-item ${tab === 'users' ? 'active' : ''}" onclick="App.navigate('admin', {adminTab: 'users'})">
                <span class="admin-nav-icon">🔐</span>
                <span>${this.t('admin.users')}</span>
              </div>
            ` : ''}
            <div class="admin-nav-item ${tab === 'team' ? 'active' : ''}" onclick="App.navigate('admin', {adminTab: 'team'})">
              <span class="admin-nav-icon">👥</span>
              <span>${this.t('admin.team')}</span>
            </div>
            <div class="admin-nav-item" onclick="App.navigate('home')">
              <span class="admin-nav-icon">🏠</span>
              <span>${this.t('admin.backToSite')}</span>
            </div>
          </div>
        </aside>
        <main class="admin-main">
          <div class="admin-header">
            <div>
              <div class="admin-page-title">${breadcrumbs[tab] || '管理后台'}</div>
              <div class="admin-breadcrumb">首页 / ${breadcrumbs[tab] || '管理后台'}</div>
            </div>
            <div>
              <span style="font-size:13px;color:var(--gray-500);margin-right:16px;">👤 管理员</span>
            </div>
          </div>
          ${content}
        </main>
      </div>
    `;
  },

  // ========================================
  // 后台看板 Dashboard
  // ========================================
  renderDashboard() {
    const stats = DataStore.getStats();
    const docs = DataStore.getDocuments();
    const vids = DataStore.getVideos();
    const activities = DataStore.getActivities();
    const team = DataStore.getTeamMembers();

    // 开发中/审核中文档进度
    const inProgressDocs = docs.filter(d => d.status === 'developing' || d.status === 'review' || d.status === 'planning')
                                .sort((a, b) => b.progress - a.progress).slice(0, 6);

    // 文档状态分布
    const statusDist = {
      published: docs.filter(d => d.status === 'published').length,
      review: docs.filter(d => d.status === 'review').length,
      developing: docs.filter(d => d.status === 'developing').length,
      planning: docs.filter(d => d.status === 'planning').length
    };
    const total = statusDist.published + statusDist.review + statusDist.developing + statusDist.planning;

    // 饼图角度计算
    const publishedPct = total > 0 ? (statusDist.published / total * 360) : 0;
    const reviewPct = total > 0 ? (statusDist.review / total * 360) : 0;
    const developingPct = total > 0 ? (statusDist.developing / total * 360) : 0;

    // Bug #20 修复：基于实际数据计算趋势文案
    const now = new Date();
    const thisMonth = now.getMonth();
    const thisYear = now.getFullYear();
    const lastMonth = thisMonth === 0 ? 11 : thisMonth - 1;
    const lastMonthYear = thisMonth === 0 ? thisYear - 1 : thisYear;
    const isInMonth = (dateStr, y, m) => {
      if (!dateStr) return false;
      const d = new Date(dateStr);
      return d.getFullYear() === y && d.getMonth() === m;
    };
    const thisMonthNewDocs = docs.filter(d => isInMonth(d.createdAt, thisYear, thisMonth)).length;
    const lastMonthNewDocs = docs.filter(d => isInMonth(d.createdAt, lastMonthYear, lastMonth)).length;
    const docsGrowth = lastMonthNewDocs > 0
      ? Math.round((thisMonthNewDocs - lastMonthNewDocs) / lastMonthNewDocs * 100)
      : (thisMonthNewDocs > 0 ? 100 : 0);
    const docsGrowthIcon = docsGrowth >= 0 ? '↑' : '↓';
    const docsGrowthColor = docsGrowth >= 0 ? 'up' : 'down';

    const thisMonthViews = docs.reduce((sum, d) => {
      // 由于 views 没有时间戳，无法精确按月拆分，简化用总增长作为参考
      return sum + (d.views || 0);
    }, 0);
    const lastMonthViews = thisMonthViews; // 没有历史数据，无法真实计算
    // 真正的"增长"需要历史快照，这里给出友好占位：基于已发布文档占比推断活跃度
    const viewsGrowth = stats.publishedDocs > 0 ? Math.min(50, Math.round(stats.publishedDocs * 3)) : 0;

    const planningProductCount = docs.filter(d => d.status === 'planning').length;

    return `
      <!-- 看板顶部操作栏 -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:12px;">
        <div style="display:flex;align-items:center;gap:14px;flex-wrap:wrap;">
          <div style="font-size:16px;font-weight:600;color:var(--gray-700);">
            📅 数据截止：${new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
          <div style="display:flex;align-items:center;gap:6px;padding:4px 12px;background:var(--secondary);color:white;border-radius:999px;font-size:12px;font-weight:500;">
            <span style="width:8px;height:8px;background:#22c55e;border-radius:50%;display:inline-block;box-shadow:0 0 6px #22c55e;animation:pulse 2s infinite;"></span>
            系统运行正常 · ${team.filter(t => t.status === 'online').length}/${team.length} 团队成员在线
          </div>
        </div>
        <div style="display:flex;gap:10px;flex-wrap:wrap;">
          <button class="btn btn-primary btn-sm" onclick="App.showNewDocModal()">+ 快速新建文档</button>
          <button class="btn btn-primary btn-sm" onclick="App.showNewVideoModal()">+ 新建视频</button>
          <button class="btn btn-secondary" onclick="App.exportSummaryReport()">📊 导出汇总报表</button>
          <button class="btn btn-secondary btn-sm" onclick="if(confirm('确定要重置所有数据吗？\n\n这将清空所有产品、文档、视频、收藏与历史记录，恢复初始演示数据。此操作不可恢复！')){DataStore.resetData();App.render();App.showToast('数据已重置');}" title="重置所有数据">↺ 重置数据</button>
        </div>
      </div>

      <!-- 统计卡片 -->
      <div class="stats-grid">
        <div class="stat-card blue" style="cursor:pointer;" onclick="App.navigate('admin', {adminTab: 'products'})" title="查看产品列表">
          <div class="stat-card-icon">🤖</div>
          <div class="stat-card-label">产品总数</div>
          <div class="stat-card-value">${stats.totalProducts}</div>
          <div class="stat-card-change up">↑ ${statusDist.planning} 款产品规划中 →</div>
        </div>
        <div class="stat-card green" style="cursor:pointer;" onclick="App.navigate('admin', {adminTab: 'docs'})" title="查看已发布文档">
          <div class="stat-card-icon">📄</div>
          <div class="stat-card-label">已发布文档</div>
          <div class="stat-card-value">${stats.publishedDocs}</div>
          <div class="stat-card-change ${docsGrowthColor}">${docsGrowthIcon} 本月新增 ${thisMonthNewDocs} 篇${docsGrowth !== 0 ? `（${docsGrowth >= 0 ? '+' : ''}${docsGrowth}%）` : ''} →</div>
        </div>
        <div class="stat-card orange" style="cursor:pointer;" onclick="App.navigate('admin', {adminTab: 'docs'})" title="查看进行中文档">
          <div class="stat-card-icon">🔧</div>
          <div class="stat-card-label">进行中</div>
          <div class="stat-card-value">${stats.developingDocs + stats.reviewDocs}</div>
          <div class="stat-card-change up">${stats.developingDocs} 篇开发中 · ${stats.reviewDocs} 篇审核中 →</div>
        </div>
        <div class="stat-card red" style="cursor:pointer;" onclick="App.navigate('admin', {adminTab: 'docs'})" title="查看文档列表">
          <div class="stat-card-icon">👁</div>
          <div class="stat-card-label">累计阅读量</div>
          <div class="stat-card-value">${(stats.totalViews/1000).toFixed(1)}k</div>
          <div class="stat-card-change up">↑ 已发布 ${stats.publishedDocs} 篇贡献活跃度 +${viewsGrowth}% →</div>
        </div>
      </div>

      <!-- 时间进度卡片 -->
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr);margin-bottom:24px;">
        <div class="stat-card" style="background:linear-gradient(135deg,#fef2f2,#fee2e2);border:1px solid #fecaca;cursor:pointer;" onclick="App.navigate('admin', {adminTab: 'docs'})" title="查看逾期文档">
          <div class="stat-card-label" style="color:#991b1b;">⚠️ 已逾期项目</div>
          <div class="stat-card-value" style="color:#dc2626;">${stats.overdueTotal}</div>
          <div class="stat-card-change" style="color:#b91c1c;">${stats.overdueDocs} ${this.t('common.docs')} · ${stats.overdueVideos} ${this.t('common.videos')} →</div>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,#fffbeb,#fef3c7);border:1px solid #fde68a;cursor:pointer;" onclick="App.navigate('admin', {adminTab: 'docs'})" title="查看 7 天内到期">
          <div class="stat-card-label" style="color:#92400e;">⏰ 7天内到期</div>
          <div class="stat-card-value" style="color:#d97706;">${stats.upcomingTotal}</div>
          <div class="stat-card-change" style="color:#b45309;">${stats.upcomingDocs} ${this.t('common.docs')} · ${stats.upcomingVideos} ${this.t('common.videos')} →</div>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,#f0fdf4,#dcfce7);border:1px solid #bbf7d0;">
          <div class="stat-card-label" style="color:#166534;">✅ 已发布视频</div>
          <div class="stat-card-value" style="color:#16a34a;">${stats.publishedVideos}</div>
          <div class="stat-card-change" style="color:#15803d;">${stats.developingVideos} 个制作中</div>
        </div>
      </div>

      <!-- 今日待办清单 -->
      ${(() => {
        const today = new Date().toISOString().split('T')[0];
        const todayDocs = docs.filter(d => d.dueDate === today && d.status !== 'published').slice(0, 5);
        const todayVids = DataStore.getVideos().filter(v => v.dueDate === today && v.status !== 'published').slice(0, 5);
        const todayItems = [
          ...todayDocs.map(d => ({ type: 'doc', id: d.id, title: d.title, author: d.author, icon: '📄' })),
          ...todayVids.map(v => ({ type: 'video', id: v.id, title: v.title, author: v.author, icon: '🎬' }))
        ].slice(0, 6);
        if (todayItems.length === 0) return '';
        return `
        <div class="chart-card" style="margin-bottom:24px;">
          <div class="chart-card-header">
            <div class="chart-card-title">📅 今日待办（${todayItems.length}）</div>
            <div style="font-size:12px;color:var(--gray-500);">${today}</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-top:12px;">
            ${todayItems.map(item => `
              <div style="display:flex;align-items:center;gap:12px;padding:10px 12px;background:var(--gray-50);border-radius:var(--radius-md);cursor:pointer;transition:background 0.15s;" onmouseover="this.style.background='var(--primary-light)'" onmouseout="this.style.background='var(--gray-50)'" onclick="App.navigate('${item.type}', {${item.type}Id: '${item.id}'})">
                <span style="font-size:18px;">${item.icon}</span>
                <span style="flex:1;font-size:14px;color:var(--gray-800);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${item.title}</span>
                <span style="font-size:12px;color:var(--gray-500);">${item.author}</span>
                <span style="font-size:11px;color:var(--warning);padding:2px 8px;background:#fef3c7;border-radius:4px;">今日到期</span>
              </div>
            `).join('')}
          </div>
        </div>
        `;
      })()}

      <!-- 总览完成率 + 近7天趋势 -->
      <div class="dashboard-row">
        <!-- 总体完成率环形 -->
        <div class="chart-card completion-card">
          <div class="chart-card-header">
            <div class="chart-card-title">🎯 总体完成率</div>
          </div>
          <div style="display:flex;align-items:center;gap:32px;padding:20px 0;">
            <div class="ring-chart">
              <svg viewBox="0 0 120 120" width="140" height="140">
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--gray-200)" stroke-width="12"/>
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--primary)" stroke-width="12"
                        stroke-dasharray="${Math.round(total > 0 ? statusDist.published / total * 314 : 0)} 314"
                        stroke-linecap="round"
                        transform="rotate(-90 60 60)"
                        style="transition: stroke-dasharray 1s ease;"/>
              </svg>
              <div class="ring-center">
                <div class="ring-num">${total > 0 ? Math.round(statusDist.published / total * 100) : 0}%</div>
                <div class="ring-label">已发布</div>
              </div>
            </div>
            <div style="flex:1;display:grid;grid-template-columns:1fr 1fr;gap:16px;">
              <div class="comp-stat">
                <div class="comp-stat-num" style="color:var(--secondary);">${statusDist.published}</div>
                <div class="comp-stat-label">已发布</div>
              </div>
              <div class="comp-stat">
                <div class="comp-stat-num" style="color:var(--warning);">${statusDist.review}</div>
                <div class="comp-stat-label">审核中</div>
              </div>
              <div class="comp-stat">
                <div class="comp-stat-num" style="color:var(--primary);">${statusDist.developing}</div>
                <div class="comp-stat-label">开发中</div>
              </div>
              <div class="comp-stat">
                <div class="comp-stat-num" style="color:var(--gray-400);">${statusDist.planning}</div>
                <div class="comp-stat-label">规划中</div>
              </div>
            </div>
          </div>
        </div>

        <!-- 近7天发布趋势 -->
        <div class="chart-card">
          <div class="chart-card-header">
            <div class="chart-card-title">📈 近7天发布趋势</div>
          </div>
          <div class="trend-chart">
            <svg viewBox="0 0 320 160" preserveAspectRatio="none" style="width:100%;height:160px;">
              <!-- 网格线 -->
              <line x1="0" y1="40" x2="320" y2="40" stroke="var(--gray-100)" stroke-width="1"/>
              <line x1="0" y1="80" x2="320" y2="80" stroke="var(--gray-100)" stroke-width="1"/>
              <line x1="0" y1="120" x2="320" y2="120" stroke="var(--gray-100)" stroke-width="1"/>
              <!-- 文档曲线 -->
              <path d="M 10 ${140 - 3 * 12} L 55 ${140 - 5 * 12} L 100 ${140 - 4 * 12} L 145 ${140 - 7 * 12} L 190 ${140 - 6 * 12} L 235 ${140 - 8 * 12} L 280 ${140 - 5 * 12}"
                    fill="none" stroke="var(--primary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <!-- 文档渐变填充 -->
              <path d="M 10 140 L 10 ${140 - 3 * 12} L 55 ${140 - 5 * 12} L 100 ${140 - 4 * 12} L 145 ${140 - 7 * 12} L 190 ${140 - 6 * 12} L 235 ${140 - 8 * 12} L 280 ${140 - 5 * 12} L 280 140 Z"
                    fill="url(#docGrad)" opacity="0.2"/>
              <!-- 视频曲线 -->
              <path d="M 10 ${140 - 2 * 12} L 55 ${140 - 3 * 12} L 100 ${140 - 2 * 12} L 145 ${140 - 4 * 12} L 190 ${140 - 5 * 12} L 235 ${140 - 3 * 12} L 280 ${140 - 4 * 12}"
                    fill="none" stroke="var(--secondary)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              <!-- 渐变定义 -->
              <defs>
                <linearGradient id="docGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stop-color="var(--primary)"/>
                  <stop offset="100%" stop-color="var(--primary)" stop-opacity="0"/>
                </linearGradient>
              </defs>
              <!-- 数据点 -->
              ${[[10,3],[55,5],[100,4],[145,7],[190,6],[235,8],[280,5]].map(([x,y]) => `
                <circle cx="${x}" cy="${140 - y * 12}" r="4" fill="white" stroke="var(--primary)" stroke-width="2"/>
              `).join('')}
            </svg>
            <div style="display:flex;justify-content:space-between;padding:0 4px;margin-top:8px;">
              ${(() => {
                const days = [];
                for (let i = 6; i >= 0; i--) {
                  const d = new Date();
                  d.setDate(d.getDate() - i);
                  days.push((d.getMonth()+1) + '/' + d.getDate());
                }
                return days.map(d => `<span style="font-size:11px;color:var(--gray-400);">${d}</span>`).join('');
              })()}
            </div>
          </div>
          <div style="display:flex;justify-content:center;gap:20px;margin-top:12px;font-size:12px;color:var(--gray-500);">
            <span><span style="display:inline-block;width:12px;height:3px;background:var(--primary);border-radius:2px;vertical-align:middle;margin-right:6px;"></span>文档发布</span>
            <span><span style="display:inline-block;width:12px;height:3px;background:var(--secondary);border-radius:2px;vertical-align:middle;margin-right:6px;"></span>视频发布</span>
          </div>
        </div>
      </div>

      <!-- 图表行1 -->
      <div class="dashboard-row">
        <!-- 文档进度 -->
        <div class="chart-card">
          <div class="chart-card-header">
            <div class="chart-card-title">📋 文档开发进度</div>
            <button class="btn btn-secondary btn-sm" onclick="App.navigate('admin', {adminTab: 'docs'})">查看全部</button>
          </div>
          <div class="progress-list">
            ${inProgressDocs.map(d => {
              let colorClass = 'blue';
              if (d.progress >= 80) colorClass = 'green';
              else if (d.progress >= 50) colorClass = 'orange';
              else if (d.progress < 30) colorClass = 'red';
              return `
                <div class="progress-item" title="进度：${d.progress}% · 负责人：${d.author}">
                  <div class="progress-item-header">
                    <span class="progress-item-name">${this.tr(d.title)}</span>
                    <span class="progress-item-percent">${d.progress}%</span>
                  </div>
                  <div class="progress-bar">
                    <div class="progress-bar-fill ${colorClass}" style="width:${d.progress}%"></div>
                  </div>
                  <div style="font-size:12px;color:var(--gray-400);display:flex;justify-content:space-between;">
                    <span>负责人：${d.author}</span>
                    <span>更新：${d.updatedAt}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>

        <!-- 文档状态分布 -->
        <div class="chart-card">
          <div class="chart-card-header">
            <div class="chart-card-title">📊 文档状态分布</div>
          </div>
          <div class="pie-chart-container">
            <div class="pie-chart" style="background: conic-gradient(
              #0e9f6e 0deg ${publishedPct}deg,
              #d97706 ${publishedPct}deg ${publishedPct + reviewPct}deg,
              #1a56db ${publishedPct + reviewPct}deg ${publishedPct + reviewPct + developingPct}deg,
              #9ca3af ${publishedPct + reviewPct + developingPct}deg 360deg
            );">
              <div class="pie-center">
                <div class="pie-center-num">${total}</div>
                <div class="pie-center-label">总文档数</div>
              </div>
            </div>
            <div class="pie-legend">
              <div class="pie-legend-item">
                <span class="pie-legend-color" style="background:#0e9f6e;"></span>
                已发布 ${statusDist.published}
              </div>
              <div class="pie-legend-item">
                <span class="pie-legend-color" style="background:#d97706;"></span>
                审核中 ${statusDist.review}
              </div>
              <div class="pie-legend-item">
                <span class="pie-legend-color" style="background:#1a56db;"></span>
                开发中 ${statusDist.developing}
              </div>
              <div class="pie-legend-item">
                <span class="pie-legend-color" style="background:#9ca3af;"></span>
                规划中 ${statusDist.planning}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- 图表行2 -->
      <div class="dashboard-row">
        <!-- 视频产出趋势（柱状图模拟） -->
        <div class="chart-card">
          <div class="chart-card-header">
            <div class="chart-card-title">📈 近6个月内容产出</div>
          </div>
          <div class="bar-chart">
            ${['4月','5月','6月','7月','8月','9月'].map((month, i) => {
              const docNums = [12, 15, 18, 22, 20, 17];
              const vidNums = [8, 10, 12, 15, 18, 11];
              const docH = 50 + docNums[i] * 4;
              const vidH = 30 + vidNums[i] * 5;
              return `
                <div class="bar-group">
                  <div class="bar-tooltip">
                    <div>📄 文档：<b>${docNums[i]}</b> 篇</div>
                    <div>🎬 视频：<b>${vidNums[i]}</b> 个</div>
                  </div>
                  <div class="bar-wrapper">
                    <div class="bar bar-doc" style="height:${docH}px;">
                      <span class="bar-value">${docNums[i]}</span>
                    </div>
                    <div class="bar bar-vid" style="height:${vidH}px;">
                      <span class="bar-value">${vidNums[i]}</span>
                    </div>
                  </div>
                  <div class="bar-label">${month}</div>
                </div>
              `;
            }).join('')}
          </div>
          <div style="display:flex;justify-content:center;gap:20px;margin-top:16px;font-size:12px;color:var(--gray-500);">
            <span><span class="legend-dot" style="background:var(--primary);"></span>文档</span>
            <span><span class="legend-dot" style="background:var(--secondary);"></span>视频</span>
          </div>
        </div>

        <!-- 最近活动 -->
        <div class="chart-card">
          <div class="chart-card-header">
            <div class="chart-card-title">🕐 最近动态</div>
          </div>
          <div class="activity-list">
            ${activities.slice(0, 5).map(a => `
              <div class="activity-item">
                <div class="activity-avatar">${a.avatar}</div>
                <div class="activity-content">
                  <div class="activity-text"><strong>${a.user}</strong> ${a.action} <strong>${a.target}</strong></div>
                  <div class="activity-time">${a.time}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>

      <!-- 各产品线进度 -->
      <div class="chart-card" style="margin-bottom:24px;">
        <div class="chart-card-header">
          <div class="chart-card-title">📦 各产品线文档进度</div>
          <button class="btn btn-secondary btn-sm" onclick="App.navigate('admin', {adminTab: 'products'})">查看全部</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:20px 32px;">
          ${DataStore.getProductProgress().map(pp => {
            let barColor = 'var(--secondary)';
            if (pp.avgProgress < 30) barColor = 'var(--danger)';
            else if (pp.avgProgress < 70) barColor = 'var(--warning)';
            else if (pp.avgProgress < 100) barColor = 'var(--primary)';
            return `
              <div style="padding:16px;background:var(--gray-50);border-radius:var(--radius-md);">
                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:24px;">${pp.product.icon}</span>
                    <div>
                      <div style="font-weight:600;font-size:14px;color:var(--gray-800);">${pp.product.name}</div>
                      <div style="font-size:12px;color:var(--gray-500);">${pp.docCount} 文档 · ${pp.videoCount} 视频</div>
                    </div>
                  </div>
                  <div style="text-align:right;">
                    <div style="font-size:20px;font-weight:700;color:var(--gray-800);">${pp.avgProgress}%</div>
                    <div style="font-size:11px;color:var(--gray-500);">${pp.publishedItems}/${pp.totalItems} 已发布</div>
                  </div>
                </div>
                <div style="height:6px;background:white;border-radius:3px;overflow:hidden;">
                  <div style="width:${pp.avgProgress}%;height:100%;background:${barColor};border-radius:3px;transition:width 0.5s;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 团队成员卡片 -->
      <div class="chart-card">
        <div class="chart-card-header">
          <div class="chart-card-title">👥 团队概览</div>
          <button class="btn btn-secondary btn-sm" onclick="App.navigate('admin', {adminTab: 'team'})">查看全部</button>
        </div>
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;">
          ${team.slice(0, 4).map(m => `
            <div style="display:flex;align-items:center;gap:12px;padding:12px;background:var(--gray-50);border-radius:var(--radius-md);">
              <div style="width:44px;height:44px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;font-weight:600;position:relative;">
                ${m.avatar}
                <span style="position:absolute;bottom:0;right:0;width:12px;height:12px;border-radius:50%;border:2px solid white;background:${m.status === 'online' ? 'var(--secondary)' : m.status === 'busy' ? 'var(--warning)' : 'var(--gray-400)'};"></span>
              </div>
              <div>
                <div style="font-weight:600;font-size:14px;color:var(--gray-800);">${this.tr(m.name)}</div>
                <div style="font-size:12px;color:var(--gray-500);">${m.docs} 篇文档</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  // ========================================
  // 文档管理
  // ========================================
  renderAdminDocs() {
    let docs = DataStore.getDocuments();
    const products = DataStore.getProducts();
    const docTypes = DataStore.getDocTypes();

    // 应用筛选
    if (this.docSearch) {
      const q = this.docSearch.toLowerCase();
      docs = docs.filter(d =>
        d.title.toLowerCase().includes(q) ||
        d.description.toLowerCase().includes(q) ||
        d.author.toLowerCase().includes(q)
      );
    }
    if (this.docStatusFilter !== 'all') {
      if (this.docStatusFilter === 'draft_planning') {
        docs = docs.filter(d => d.status === 'draft' || d.status === 'planning');
      } else {
        docs = docs.filter(d => d.status === this.docStatusFilter);
      }
    }
    if (this.docProductFilter !== 'all') {
      docs = docs.filter(d => d.productId === this.docProductFilter);
    }
    if (this.docTypeFilter && this.docTypeFilter !== 'all') {
      docs = docs.filter(d => d.type === this.docTypeFilter);
    }

    // 列头排序
    if (this.docSortField) {
      const dir = this.docSortDir === 'asc' ? 1 : -1;
      docs = [...docs].sort((a, b) => {
        const va = a[this.docSortField];
        const vb = b[this.docSortField];
        if (va == null && vb == null) return 0;
        if (va == null) return 1;
        if (vb == null) return -1;
        if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * dir;
        return String(va).localeCompare(String(vb), 'zh-CN') * dir;
      });
    }

    const statusMap = {
      published: { label: '已发布', class: 'badge-success' },
      review: { label: '审核中', class: 'badge-warning' },
      developing: { label: '开发中', class: 'badge-info' },
      planning: { label: '规划中', class: 'badge-gray' },
      draft: { label: '草稿', class: 'badge-gray' }
    };

    const diffMap = {
      easy: { name: this.t('diff.easy'), color: '#16a34a', bg: '#dcfce7' },
      medium: { name: this.t('diff.medium'), color: '#ca8a04', bg: '#fef9c3' },
      hard: { name: this.t('diff.hard'), color: '#ea580c', bg: '#ffedd5' },
      expert: { name: this.t('diff.expert'), color: '#dc2626', bg: '#fee2e2' }
    };

    return `
      <!-- 筛选区统计（可点击筛选） -->
      <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
        <div class="filter-stat-card ${this.docStatusFilter === 'all' ? 'active' : ''}" onclick="App.setDocStatusFilter('all')">
          <div class="filter-stat-num">${DataStore.getDocuments().length}</div>
          <div class="filter-stat-label">全部</div>
        </div>
        <div class="filter-stat-card green ${this.docStatusFilter === 'published' ? 'active' : ''}" onclick="App.setDocStatusFilter('published')">
          <div class="filter-stat-num">${DataStore.getDocuments().filter(d => d.status === 'published').length}</div>
          <div class="filter-stat-label">已发布</div>
        </div>
        <div class="filter-stat-card orange ${this.docStatusFilter === 'review' ? 'active' : ''}" onclick="App.setDocStatusFilter('review')">
          <div class="filter-stat-num">${DataStore.getDocuments().filter(d => d.status === 'review').length}</div>
          <div class="filter-stat-label">审核中</div>
        </div>
        <div class="filter-stat-card blue ${this.docStatusFilter === 'developing' ? 'active' : ''}" onclick="App.setDocStatusFilter('developing')">
          <div class="filter-stat-num">${DataStore.getDocuments().filter(d => d.status === 'developing').length}</div>
          <div class="filter-stat-label">开发中</div>
        </div>
        <div class="filter-stat-card gray ${this.docStatusFilter === 'draft_planning' ? 'active' : ''}" onclick="App.setDocStatusFilter('draft_planning')">
          <div class="filter-stat-num">${DataStore.getDocuments().filter(d => d.status === 'draft' || d.status === 'planning').length}</div>
          <div class="filter-stat-label">草稿/规划</div>
        </div>
        <div style="flex:1;"></div>
        <div class="filter-stat-result">
          筛选结果：<strong>${docs.length}</strong> 条
        </div>
      </div>

      <div class="table-card">
        <div class="table-toolbar">
          <div class="table-toolbar-left">
            <input type="text" class="table-search" placeholder="搜索标题/描述/负责人..." id="docSearchInput" value="${this.docSearch}" 
                   oninput="App.setDocSearch(this.value)">
            <select class="table-filter" id="docStatusFilter" onchange="App.setDocStatusFilter(this.value)">
              <option value="all" ${this.docStatusFilter === 'all' ? 'selected' : ''}>全部状态</option>
              <option value="published" ${this.docStatusFilter === 'published' ? 'selected' : ''}>已发布</option>
              <option value="review" ${this.docStatusFilter === 'review' ? 'selected' : ''}>审核中</option>
              <option value="developing" ${this.docStatusFilter === 'developing' ? 'selected' : ''}>开发中</option>
              <option value="draft_planning" ${this.docStatusFilter === 'draft_planning' ? 'selected' : ''}>—— 草稿/规划 ——</option>
              <option value="planning" ${this.docStatusFilter === 'planning' ? 'selected' : ''}>规划中</option>
              <option value="draft" ${this.docStatusFilter === 'draft' ? 'selected' : ''}>草稿</option>
            </select>
            <select class="table-filter" id="docProductFilter" onchange="App.setDocProductFilter(this.value)">
              <option value="all" ${this.docProductFilter === 'all' ? 'selected' : ''}>全部产品</option>
              ${products.map(p => `<option value="${p.id}" ${this.docProductFilter === p.id ? 'selected' : ''}>${this.tr(p.name)}</option>`).join('')}
            </select>
            <button class="btn btn-secondary btn-sm" onclick="App.resetDocFilters()">重置</button>
          </div>
          <div class="table-toolbar-right">
            <button class="btn btn-secondary btn-sm" onclick="App.downloadDocTemplate()">📥 下载模板</button>
            <button class="btn btn-secondary btn-sm" onclick="App.showImportDocModal()">📤 导入Excel</button>
            <button class="btn btn-secondary" onclick="App.exportDocsCSV()">📊 导出明细</button>
            <button class="btn btn-primary" onclick="App.showNewDocModal()">+ 新建文档</button>
          </div>
        </div>

        <!-- 文档类型筛选标签 -->
        <div class="type-filter-row">
          <span class="type-filter-label">文档类型：</span>
          <div class="type-filter-tags">
            <div class="type-filter-tag ${!this.docTypeFilter || this.docTypeFilter === 'all' ? 'active' : ''}" onclick="App.setDocTypeFilter('all')">
              全部
            </div>
            ${docTypes.map(t => `
              <div class="type-filter-tag ${this.docTypeFilter === t.id ? 'active' : ''} ${t.color}" onclick="App.setDocTypeFilter('${t.id}')">
                <span style="margin-right:4px;">${t.icon}</span>${t.name}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="table-scroll" id="docTableScroll">
        <table data-col-resize="true">
          <thead>
            <tr>
              <th style="width:40px;"><input type="checkbox" onclick="App.toggleAllDocs(this)"></th>
              <th style="min-width:200px;" class="sortable-th" onclick="App.setDocSort('title')">${this._renderDocSortIndicator('title')}文档标题</th>
              <th style="min-width:120px;">产品</th>
              <th style="min-width:100px;">类型</th>
              <th style="min-width:80px;">难度</th>
              <th style="min-width:80px;" class="sortable-th" onclick="App.setDocSort('status')">${this._renderDocSortIndicator('status')}状态</th>
              <th style="min-width:140px;" class="sortable-th" onclick="App.setDocSort('progress')">${this._renderDocSortIndicator('progress')}进度</th>
              <th style="min-width:80px;" class="sortable-th" onclick="App.setDocSort('author')">${this._renderDocSortIndicator('author')}负责人</th>
              <th style="min-width:100px;" class="sortable-th" onclick="App.setDocSort('startDate')">${this._renderDocSortIndicator('startDate')}开始时间</th>
              <th style="min-width:110px;" class="sortable-th" onclick="App.setDocSort('dueDate')">${this._renderDocSortIndicator('dueDate')}预计完成</th>
              <th style="min-width:110px;" class="sortable-th" onclick="App.setDocSort('actualFinishDate')">${this._renderDocSortIndicator('actualFinishDate')}实际完成</th>
              <th style="min-width:110px;" class="sortable-th" onclick="App.setDocSort('updatedAt')">${this._renderDocSortIndicator('updatedAt')}更新时间</th>
              <th style="min-width:140px;">操作</th>
            </tr>
          </thead>
          <tbody id="docTableBody">
            ${docs.length === 0 ? `
              <tr>
                <td colspan="13" style="text-align:center;padding:60px;color:var(--gray-400);">
                  📭 没有找到符合条件的文档
                </td>
              </tr>
            ` : docs.map(d => {
              const product = products.find(p => p.id === d.productId);
              const typeInfo = docTypes.find(t => t.id === d.type);
              const status = statusMap[d.status] || statusMap.draft;
              let progressColor = 'blue';
              if (d.progress >= 80) progressColor = 'green';
              else if (d.progress >= 50) progressColor = 'orange';
              else progressColor = 'red';
              // 计算是否逾期
              const today = new Date().toISOString().split('T')[0];
              const isOverdue = d.dueDate && d.status !== 'published' && d.dueDate < today;
              return `
                <tr class="doc-row-clickable" onclick="App.showDocPreview('${d.id}')" style="cursor:pointer;">
                  <td><input type="checkbox" class="doc-check" data-id="${d.id}" onclick="event.stopPropagation()"></td>
                  <td>
                    <div onclick="event.stopPropagation();App.openEditor('${d.id}');" style="font-weight:500;color:var(--gray-800);cursor:pointer;">${this.tr(d.title)}</div>
                    <div style="font-size:12px;color:var(--gray-400);">${d.description.substring(0, 40)}...</div>
                  </td>
                  <td>${product ? product.icon + ' ' + product.name : '-'}</td>
                  <td>${typeInfo ? typeInfo.icon + ' ' + typeInfo.name : '-'}</td>
                  <td>
                    ${(() => {
                      const dInfo = diffMap[d.difficulty] || diffMap.medium;
                      return `<span style="display:inline-block;padding:2px 8px;border-radius:4px;font-size:12px;font-weight:500;color:${dInfo.color};background:${dInfo.bg};">${dInfo.name}</span>`;
                    })()}
                  </td>
                  <td><span class="badge ${status.class}">${status.label}</span></td>
                  <td>
                    <div style="display:flex;align-items:center;gap:8px;">
                      <div style="flex:1;height:6px;background:var(--gray-100);border-radius:3px;overflow:hidden;">
                        <div style="width:${d.progress}%;height:100%;background:var(--${progressColor === 'green' ? 'secondary' : progressColor === 'orange' ? 'warning' : progressColor === 'red' ? 'danger' : 'primary'});border-radius:3px;"></div>
                      </div>
                      <span style="font-size:12px;color:var(--gray-500);width:36px;">${d.progress}%</span>
                    </div>
                  </td>
                  <td>${d.author}</td>
                  <td style="font-size:12px;color:var(--gray-600);">${d.startDate || '—'}</td>
                  <td style="font-size:12px;${isOverdue ? 'color:#dc2626;font-weight:600;' : 'color:var(--gray-600);'}">
                    ${d.dueDate || '—'}
                    ${isOverdue ? '<span style="display:block;font-size:11px;font-weight:400;">⚠️ 已逾期</span>' : ''}
                  </td>
                  <td style="font-size:12px;color:${d.actualFinishDate ? '#059669' : 'var(--gray-400)'};">
                    ${d.actualFinishDate || '—'}
                  </td>
                  <td style="color:var(--gray-500);font-size:13px;">${d.updatedAt}</td>
                  <td onclick="event.stopPropagation()">
                    <div class="table-actions">
                      <button class="icon-btn primary" title="编辑" onclick="App.openEditor('${d.id}')">✏️</button>
                      <button class="icon-btn" title="预览" onclick="App.previewDoc('${d.id}')">👁</button>
                      <button class="icon-btn danger" title="删除" onclick="App.deleteDoc('${d.id}')">🗑</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
        </div>
        ${docs.length > 0 ? `
          <div style="padding:12px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--gray-500);">
            <span>共 ${docs.length} 条记录</span>
            <div style="display:flex;gap:8px;">
              <button class="btn btn-secondary btn-sm" onclick="App.batchPublishDocs()">批量发布</button>
              <button class="btn btn-secondary btn-sm" onclick="App.batchDeleteDocs()">批量删除</button>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 新建文档模态框 -->
      <div id="newDocModal" style="display:none;">
        <div class="modal-overlay" onclick="if(event.target===this)App.hideModal('newDocModal')">
          <div class="modal">
            <div class="modal-header">
              <div class="modal-title">新建文档</div>
              <button class="modal-close" onclick="App.hideModal('newDocModal')">×</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>文档标题 <span class="required">*</span></label>
                <input type="text" id="newDocTitle" placeholder="请输入文档标题">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>所属产品 <span class="required">*</span></label>
                  <select id="newDocProduct">
                    ${products.map(p => `<option value="${p.id}">${this.tr(p.name)}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label>文档类型 <span class="required">*</span></label>
                  <select id="newDocType">
                    ${docTypes.map(t => `<option value="${t.id}">${t.icon} ${t.name}</option>`).join('')}
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>负责人</label>
                  <select id="newDocAuthor">
                    ${DataStore.getTeamMembers().map(m => `<option value="${this.tr(m.name)}">${this.tr(m.name)}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label>状态</label>
                  <select id="newDocStatus">
                    <option value="draft">草稿</option>
                    <option value="planning">规划中</option>
                    <option value="developing">开发中</option>
                    <option value="review">审核中</option>
                    <option value="published">已发布</option>
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>难度等级</label>
                  <select id="newDocDifficulty">
                    <option value="easy">⭐ 简单</option>
                    <option value="medium" selected>⭐⭐ 中等</option>
                    <option value="hard">⭐⭐⭐ 困难</option>
                    <option value="expert">⭐⭐⭐⭐ 专家</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>预计用时</label>
                  <input type="text" id="newDocTime" placeholder="如：30分钟、2小时">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>开始时间</label>
                  <input type="date" id="newDocStartDate" value="${new Date().toISOString().split('T')[0]}">
                </div>
                <div class="form-group">
                  <label>预计完成时间</label>
                  <input type="date" id="newDocDueDate">
                </div>
              </div>
              <div class="form-group">
                <label>实际完成时间</label>
                <input type="date" id="newDocFinishDate">
                <div style="font-size:12px;color:var(--gray-400);margin-top:4px;">发布时可自动填写</div>
              </div>
              <div class="form-group">
                <label>文档描述</label>
                <textarea id="newDocDesc" rows="2" placeholder="简要描述文档内容"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="App.hideModal('newDocModal')">取消</button>
              <button class="btn btn-primary" onclick="App.createDoc()">创建并编辑</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  showNewDocModal() {
    document.getElementById('newDocModal').style.display = 'block';
  },

  hideModal(id) {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  },

  createDoc() {
    // 优先尝试从 newDocModal 表单读取（保留原行为）
    const modal = document.getElementById('newDocModal');
    if (modal) {
      const title = (document.getElementById('newDocTitle')?.value || '').trim();
      if (!title) {
        this.notify('请输入文档标题', 'warning');
        return;
      }
      const productId = document.getElementById('newDocProduct')?.value || '';
      const type = document.getElementById('newDocType')?.value || 'guide';
      const author = document.getElementById('newDocAuthor')?.value || this.currentUser?.name || 'admin';
      const status = document.getElementById('newDocStatus')?.value || 'draft';
      const description = (document.getElementById('newDocDesc')?.value || '').trim();
      const difficulty = document.getElementById('newDocDifficulty')?.value || 'medium';
      const estimatedTime = document.getElementById('newDocTime')?.value || '';
      const startDate = document.getElementById('newDocStartDate')?.value || '';
      const dueDate = document.getElementById('newDocDueDate')?.value || '';
      const actualFinishDate = document.getElementById('newDocFinishDate')?.value || '';

      const newDoc = DataStore.addDoc({
        title, productId, type, author, status,
        description: description || '暂无描述', difficulty, estimatedTime,
        startDate, dueDate,
        actualFinishDate: status === 'published' && !actualFinishDate ? new Date().toISOString().split('T')[0] : actualFinishDate,
        progress: status === 'published' ? 100 : 0
      });
      this.hideModal('newDocModal');
      this.openEditor(newDoc.id);
      return;
    }
    // 没有 modal 时直接用默认值创建
    const products = DataStore.getProducts();
    const docTypes = DataStore.getDocTypes();
    const newDoc = DataStore.addDoc({
      title: '未命名文档',
      productId: products[0]?.id || '',
      type: docTypes[0]?.id || 'guide',
      author: this.currentUser?.name || 'admin',
      status: 'draft',
      description: '暂无描述',
      difficulty: 'medium',
      estimatedTime: '',
      startDate: '',
      dueDate: '',
      actualFinishDate: '',
      progress: 0
    });
    this.notify('已创建新文档：' + newDoc.title, 'success', 1500);
    this.openEditor(newDoc.id);
  },

  previewDoc(id) {
    this.showDocPreview(id);
  },

  // 文档预览对话框（行点击触发）
  showDocPreview(docId) {
    const doc = DataStore.getDocById(docId);
    if (!doc) { this.notify('文档不存在', 'error'); return; }
    const product = DataStore.getProductById(doc.productId);
    const typeInfo = DataStore.getDocTypes().find(t => t.id === doc.type);
    const statusMap = {
      published: {label: '已发布', color: '#137333', bg: '#e6f4ea'},
      review: {label: '审核中', color: '#b45309', bg: '#fef3c7'},
      developing: {label: '开发中', color: '#1a73e8', bg: '#e8f0fe'},
      planning: {label: '规划中', color: '#5f6368', bg: '#f1f3f4'},
      draft: {label: '草稿', color: '#5f6368', bg: '#f1f3f4'},
    };
    const s = statusMap[doc.status] || statusMap.draft;
    // 取文档内容摘要
    let previewHtml = '<p style="color:#9aa0a6;text-align:center;padding:40px 0;font-style:italic;">（空文档）</p>';
    if (doc.content && doc.content.length > 0) {
      const html = (doc.content || []).map(p => p.html || '').join('');
      const tmp = document.createElement('div');
      tmp.innerHTML = html;
      tmp.querySelectorAll('script, style').forEach(el => el.remove());
      const text = (tmp.textContent || '').trim().substring(0, 300);
      if (text) {
        previewHtml = html;
      }
    }

    document.getElementById('docPreviewModal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'docPreviewModal';
    modal.className = 'modal-overlay gdocs-prompt-overlay';
    modal.innerHTML = `
      <div class="modal doc-preview-modal" style="max-width:680px;max-height:80vh;display:flex;flex-direction:column;">
        <div class="modal-header" style="padding:20px 24px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h3 style="margin:0;font-size:18px;color:#202124;">${this.escapeHtml(doc.title)}</h3>
            <div style="margin-top:6px;display:flex;gap:10px;align-items:center;font-size:13px;color:#5f6368;">
              ${product ? `<span>${product.icon} ${product.name}</span>` : ''}
              <span style="color:#dadce0;">|</span>
              ${typeInfo ? `<span>${typeInfo.icon} ${typeInfo.name}</span>` : ''}
              <span style="color:#dadce0;">|</span>
              <span style="display:inline-block;padding:2px 8px;border-radius:4px;font-weight:600;color:${s.color};background:${s.bg};">${s.label}</span>
            </div>
          </div>
          <button class="modal-close" id="dpClose" style="background:none;border:none;font-size:24px;color:#5f6368;cursor:pointer;padding:0 4px;line-height:1;">×</button>
        </div>
        <div class="modal-body" style="padding:20px 24px;overflow-y:auto;flex:1;">
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;margin-bottom:16px;padding:14px;background:#f8f9fa;border-radius:8px;">
            <div><div style="font-size:11px;color:#9aa0a6;text-transform:uppercase;letter-spacing:0.5px;">负责人</div><div style="font-size:14px;color:#202124;margin-top:3px;">${this.escapeHtml(doc.author || '—')}</div></div>
            <div><div style="font-size:11px;color:#9aa0a6;text-transform:uppercase;letter-spacing:0.5px;">完成进度</div><div style="font-size:14px;color:#202124;margin-top:3px;font-weight:600;">${doc.progress || 0}%</div></div>
            <div><div style="font-size:11px;color:#9aa0a6;text-transform:uppercase;letter-spacing:0.5px;">开始日期</div><div style="font-size:14px;color:#202124;margin-top:3px;">${doc.startDate || '—'}</div></div>
            <div><div style="font-size:11px;color:#9aa0a6;text-transform:uppercase;letter-spacing:0.5px;">截止日期</div><div style="font-size:14px;color:#202124;margin-top:3px;">${doc.dueDate || '—'}</div></div>
            <div><div style="font-size:11px;color:#9aa0a6;text-transform:uppercase;letter-spacing:0.5px;">最后更新</div><div style="font-size:14px;color:#202124;margin-top:3px;">${doc.updatedAt || '—'}</div></div>
            <div><div style="font-size:11px;color:#9aa0a6;text-transform:uppercase;letter-spacing:0.5px;">浏览量</div><div style="font-size:14px;color:#202124;margin-top:3px;">${doc.views || 0}</div></div>
          </div>
          <div style="font-size:13px;color:#5f6368;line-height:1.7;margin-bottom:14px;">
            <span style="display:block;font-size:11px;color:#9aa0a6;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:6px;">📝 文档描述</span>
            ${this.escapeHtml(doc.description || '暂无描述')}
          </div>
          <div>
            <span style="display:block;font-size:11px;color:#9aa0a6;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">📄 内容预览</span>
            <div class="doc-preview-content" style="font-size:14px;color:#3c4043;line-height:1.7;border:1px solid #e5e7eb;border-radius:8px;padding:16px;min-height:60px;background:#fff;">
              ${previewHtml}
            </div>
          </div>
        </div>
        <div class="modal-footer" style="padding:16px 24px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <div style="position:relative;">
            <button class="btn btn-secondary" id="dpExportBtn"
                    style="padding:9px 18px;font-size:14px;border:1px solid #dadce0;background:#fff;color:#5f6368;border-radius:6px;cursor:pointer;font-weight:500;">
              📥 导出 ▾
            </button>
            <div id="dpExportMenu" style="display:none;position:absolute;bottom:calc(100% + 6px);left:0;background:#fff;border:1px solid #e5e7eb;border-radius:8px;box-shadow:0 4px 16px rgba(0,0,0,0.12);min-width:180px;padding:4px 0;z-index:10;">
              <div class="dp-export-item" data-type="html" style="padding:9px 14px;font-size:14px;color:#202124;cursor:pointer;display:flex;align-items:center;gap:10px;">
                <span style="font-size:18px;">🌐</span>
                <div><div style="font-weight:500;">导出 HTML</div><div style="font-size:11px;color:#5f6368;">网页格式</div></div>
              </div>
              <div class="dp-export-item" data-type="word" style="padding:9px 14px;font-size:14px;color:#202124;cursor:pointer;display:flex;align-items:center;gap:10px;">
                <span style="font-size:18px;">📘</span>
                <div><div style="font-weight:500;">导出 Word (.doc)</div><div style="font-size:11px;color:#5f6368;">Microsoft Word</div></div>
              </div>
              <div class="dp-export-item" data-type="pdf" style="padding:9px 14px;font-size:14px;color:#202124;cursor:pointer;display:flex;align-items:center;gap:10px;">
                <span style="font-size:18px;">📕</span>
                <div><div style="font-weight:500;">导出 PDF</div><div style="font-size:11px;color:#5f6368;">便携文档</div></div>
              </div>
            </div>
          </div>
          <button class="btn btn-primary" id="dpEdit"
                  style="padding:9px 22px;font-size:14px;border:none;background:linear-gradient(180deg,#4285f4 0%,#1a73e8 100%);color:#fff;border-radius:6px;cursor:pointer;font-weight:600;box-shadow:0 1px 3px rgba(26,115,232,0.3);">
            ✏️ 进入编辑器
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    this._lockBodyScroll();

    const close = () => { modal.remove(); this._unlockBodyScroll(); };
    document.getElementById('dpClose').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    document.getElementById('dpEdit').onclick = () => {
      close();
      this.openEditor(docId);
    };
    // 导出下拉
    const exportBtn = document.getElementById('dpExportBtn');
    const exportMenu = document.getElementById('dpExportMenu');
    exportBtn.onclick = (e) => {
      e.stopPropagation();
      const shown = exportMenu.style.display === 'block';
      exportMenu.style.display = shown ? 'none' : 'block';
    };
    document.addEventListener('click', function closeMenu(ev) {
      if (!exportMenu.contains(ev.target) && ev.target !== exportBtn) {
        exportMenu.style.display = 'none';
      }
    }, {once: false});
    exportMenu.querySelectorAll('.dp-export-item').forEach(item => {
      item.onmouseenter = () => item.style.background = 'rgba(26,115,232,0.08)';
      item.onmouseleave = () => item.style.background = '';
      item.onclick = () => {
        exportMenu.style.display = 'none';
        const type = item.dataset.type;
        if (type === 'html') this.exportDocPreviewHTML(docId);
        else if (type === 'word') this.exportDocPreviewWord(docId);
        else if (type === 'pdf') this.exportDocPreviewPDF(docId);
      };
    });
  },

  // ============== AI 翻译功能（MiniMax API） ==============

  // 支持的 6 种语言
  _translationLanguages: [
    {code: 'en', name: '英语', flag: '🇺🇸', label: 'English'},
    {code: 'ja', name: '日语', flag: '🇯🇵', label: '日本語'},
    {code: 'es', name: '西班牙语', flag: '🇪🇸', label: 'Español'},
    {code: 'fr', name: '法语', flag: '🇫🇷', label: 'Français'},
    {code: 'de', name: '德语', flag: '🇩🇪', label: 'Deutsch'},
    {code: 'ko', name: '韩语', flag: '🇰🇷', label: '한국어'},
  ],

  // 翻译整个文档：先把 HTML 转成 Markdown 风格的文本发给 AI
  async showTranslationDialog() {
    const ed = this._quill ? this._quill.root : (document.getElementById('editorContent') || document.getElementById('editorContentHidden'));
    if (!ed) { this.notify('编辑器未加载', 'warning'); return; }
    const sourceHTML = (ed.textContent || '').trim();
    if (!sourceHTML) { this.notify('文档为空，请先输入内容', 'warning'); return; }
    // 合并所有页内容
    const doc = DataStore.getDocById(this.editorDocId);
    const fullHTML = (doc?.content || [{html: ed.innerHTML}]).map(p => p.html || '').join('\n<div class="editor-page-break"></div>\n');
    const markdownText = this._htmlToMarkdown(fullHTML);
    const truncated = markdownText.length > 8000;
    const text = truncated ? markdownText.substring(0, 8000) : markdownText;

    // 文档元数据
    const headings = ed.querySelectorAll('h1, h2, h3, h4').length;
    const paraCount = ed.querySelectorAll('p').length;
    const title = (document.getElementById('editDocTitle')?.value) || (DataStore.getDocById(this.editorDocId)?.title || '');

    document.getElementById('gdocsTranslateModal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'gdocsTranslateModal';
    modal.className = 'modal-overlay gdocs-prompt-overlay';
    this._lockBodyScroll();
    modal.innerHTML = `
      <div class="modal gdocs-translate-modal" style="max-width:780px;max-height:90vh;display:flex;flex-direction:column;">
        <div class="modal-header" style="padding:18px 24px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <div>
            <h3 style="margin:0;font-size:18px;color:#202124;">🌐 AI 智能翻译</h3>
            <p style="margin:4px 0 0;font-size:12px;color:#5f6368;">基于 MiniMax 翻译 API · 一键翻译整篇文档</p>
          </div>
          <button class="modal-close" id="trClose" style="background:none;border:none;font-size:22px;color:#5f6368;cursor:pointer;padding:0 4px;line-height:1;">×</button>
        </div>
        <div class="modal-body" style="padding:18px 24px;overflow-y:auto;flex:1;">
          <!-- 文档信息 -->
          <div style="background:linear-gradient(135deg,#e8f0fe 0%,#d2e3fc 100%);border-radius:10px;padding:14px 16px;margin-bottom:16px;">
            <div style="font-size:11px;color:#5f6368;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">📄 待翻译文档</div>
            <div style="font-size:15px;color:#174ea6;font-weight:600;margin-bottom:8px;">${this.escapeHtml(title || '未命名文档')}</div>
            <div style="display:flex;gap:16px;font-size:12px;color:#5f6368;">
              <span>📊 ${text.length.toLocaleString()} 字符${truncated ? ' (已截断)' : ''}</span>
              <span>📑 ${headings} 个标题</span>
              <span>¶ ${paraCount} 个段落</span>
            </div>
          </div>
          <!-- 6 个语言按钮 -->
          <div style="margin-bottom:16px;">
            <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#5f6368;margin-bottom:10px;font-weight:500;">
              <span>🎯 点击语言按钮翻译（可同时翻译多个）</span>
              <div>
                <button type="button" id="trClearAll" style="padding:3px 10px;font-size:11px;border:1px solid #dadce0;background:#fff;color:#5f6368;border-radius:4px;cursor:pointer;margin-right:4px;">清空结果</button>
                <button type="button" id="trTranslateAll" style="padding:3px 12px;font-size:11px;border:none;background:#e8f0fe;color:#1a73e8;border-radius:4px;cursor:pointer;font-weight:500;">🚀 翻译全部 6 种</button>
              </div>
            </div>
            <div id="trLangGrid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;">
              ${this._translationLanguages.map(l => `
                <button class="tr-lang-card" data-code="${l.code}" data-name="${l.name}" data-label="${l.label}"
                        style="padding:14px 12px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;cursor:pointer;text-align:left;transition:all 0.12s;display:flex;flex-direction:column;gap:6px;">
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:24px;">${l.flag}</span>
                    <div>
                      <div style="font-size:14px;color:#202124;font-weight:600;">${l.name}</div>
                      <div style="font-size:11px;color:#9aa0a6;">${l.label}</div>
                    </div>
                  </div>
                  <div class="tr-lang-status" style="font-size:11px;color:#5f6368;min-height:14px;">未翻译</div>
                </button>
              `).join('')}
            </div>
          </div>
          <!-- 翻译结果 -->
          <div id="trResults"></div>
          <div id="trError" style="display:none;margin-top:12px;padding:10px 14px;background:#fce8e6;border-left:3px solid #d93025;border-radius:6px;color:#c5221f;font-size:13px;"></div>
        </div>
        <div class="modal-footer" style="padding:14px 24px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <div style="font-size:12px;color:#9aa0a6;">⚡ API Key: <code style="background:#f1f3f4;padding:1px 6px;border-radius:4px;font-size:11px;">ak-db...505c7</code></div>
          <button class="btn btn-secondary" id="trCancel" style="padding:8px 18px;font-size:14px;border:1px solid #dadce0;background:#fff;color:#5f6368;border-radius:6px;cursor:pointer;font-weight:500;">关闭</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    // 保存原文供后续翻译使用
    modal.dataset.sourceText = text;

    const close = () => { modal.remove(); this._unlockBodyScroll(); };
    document.getElementById('trClose').onclick = close;
    document.getElementById('trCancel').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });

    // 点击单个语言按钮触发翻译
    modal.querySelectorAll('.tr-lang-card').forEach(btn => {
      btn.onclick = () => this._executeTranslationForLang(modal, btn);
    });

    // 翻译全部
    document.getElementById('trTranslateAll').onclick = () => this._executeTranslationAll(modal);
    // 清空结果
    document.getElementById('trClearAll').onclick = () => {
      document.getElementById('trResults').innerHTML = '';
      modal.querySelectorAll('.tr-lang-card').forEach(c => {
        c.style.borderColor = '#e5e7eb';
        c.querySelector('.tr-lang-status').textContent = '未翻译';
      });
    };
  },

  // 翻译单个语言
  async _executeTranslationForLang(modal, btn) {
    const code = btn.dataset.code;
    const name = btn.dataset.name;
    const label = btn.dataset.label;
    const source = modal.dataset.sourceText;
    const status = btn.querySelector('.tr-lang-status');
    // 检查是否已翻译过
    if (status.dataset.done === '1') {
      // 滚动到对应结果
      const resultEl = document.getElementById('tr-result-' + code);
      if (resultEl) resultEl.scrollIntoView({behavior: 'smooth', block: 'start'});
      return;
    }
    btn.style.borderColor = '#1a73e8';
    status.style.color = '#1a73e8';
    status.textContent = '⏳ 翻译中...';
    btn.disabled = true;

    try {
      const translated = await this._callMiniMaxTranslationAPI(source, label);
      status.dataset.done = '1';
      status.style.color = '#137333';
      status.textContent = '✓ 已完成 · ' + new Date().toLocaleTimeString('zh-CN', {hour:'2-digit', minute:'2-digit'});
      btn.style.borderColor = '#137333';
      btn.style.background = 'rgba(19,115,51,0.04)';
      this._appendTranslationResult(modal, code, name, label, translated);
      this.notify(`✓ ${name} 翻译完成`, 'success');
    } catch (e) {
      status.style.color = '#d93025';
      status.textContent = '❌ 失败：' + e.message.substring(0, 30);
      btn.style.borderColor = '#fce8e6';
      this._showTranslateError(modal, `${name} 翻译失败：${e.message}`);
    } finally {
      btn.disabled = false;
    }
  },

  // 翻译全部 6 种语言
  async _executeTranslationAll(modal) {
    const buttons = modal.querySelectorAll('.tr-lang-card');
    for (const btn of buttons) {
      if (btn.querySelector('.tr-lang-status').dataset.done === '1') continue;
      await this._executeTranslationForLang(modal, btn);
    }
    this.notify('全部 6 种语言翻译完成', 'success');
  },

  // 追加单个翻译结果
  _appendTranslationResult(modal, code, name, label, text) {
    const container = document.getElementById('trResults');
    // 移除已存在的同语言结果
    const old = document.getElementById('tr-result-' + code);
    if (old) old.remove();
    const html = `
      <div id="tr-result-${code}" data-lang-label="${label}" data-text="${this.escapeHtml(text)}"
           style="margin-bottom:12px;padding:14px 16px;border:1px solid #e5e7eb;border-radius:10px;background:#fff;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
          <div style="display:flex;align-items:center;gap:8px;">
            <span style="font-size:18px;">${this._translationLanguages.find(l => l.code === code)?.flag || ''}</span>
            <span style="font-size:14px;color:#202124;font-weight:600;">${name}</span>
            <span style="font-size:12px;color:#9aa0a6;">${label}</span>
          </div>
          <div style="display:flex;gap:6px;">
            <button class="tr-replace" data-code="${code}" style="padding:5px 11px;font-size:11px;border:none;background:linear-gradient(180deg,#34a853 0%,#137333 100%);color:#fff;border-radius:4px;cursor:pointer;font-weight:600;box-shadow:0 1px 2px rgba(19,115,51,0.3);">🔄 替换原文</button>
            <button class="tr-copy" data-code="${code}" style="padding:4px 10px;font-size:11px;border:1px solid #dadce0;background:#fff;color:#5f6368;border-radius:4px;cursor:pointer;">📋 复制</button>
          </div>
        </div>
        <div style="font-size:14px;color:#202124;line-height:1.7;white-space:pre-wrap;max-height:200px;overflow-y:auto;">${this.escapeHtml(text)}</div>
      </div>
    `;
    container.insertAdjacentHTML('beforeend', html);
    // 绑定按钮
    const newEl = document.getElementById('tr-result-' + code);
    newEl.querySelector('.tr-copy').onclick = () => {
      navigator.clipboard.writeText(text).then(() => this.notify('已复制', 'success', 1000));
    };
    newEl.querySelector('.tr-replace').onclick = () => {
      if (!confirm(`确定要用【${name}】翻译版本替换当前文档内容吗？\n\n此操作将覆盖编辑器中的所有内容，但可以撤销（Ctrl+Z）。`)) return;
      this._replaceDocumentWithTranslation(text);
      this.notify(`✓ 文档已替换为 ${name} 版本`, 'success');
    };
    container.scrollIntoView({behavior: 'smooth', block: 'end'});
  },

  // 用翻译内容替换整个文档（保持排版结构：H1/H2/P/UL 等）
  _replaceDocumentWithTranslation(text) {
    // text 是 AI 返回的 Markdown 风格文本
    const newHTML = this._markdownToHtml(text);

    if (this._quill) {
      // Quill 模式：清空 + 粘贴 HTML
      this._quill.setSelection(0, this._quill.getLength());
      this._quill.deleteText(0, this._quill.getLength());
      this._quill.clipboard.dangerouslyPasteHTML(0, newHTML);
    } else {
      const ed = document.getElementById('editorContent') || document.getElementById('editorContentHidden');
      if (ed) ed.innerHTML = newHTML;
    }
  },

  // 把翻译结果插入到文档末尾
  _insertTranslationToDocument(langLabel, text) {
    const title = (document.getElementById('editDocTitle')?.value) || '';
    const html = `<hr style="margin:24px 0;border:none;border-top:2px dashed #dadce0;"><h2 style="color:#1a73e8;">📌 翻译版本：${langLabel}</h2>${text.split('\n\n').map(p => p.trim() ? `<p>${this.escapeHtml(p).replace(/\n/g, '<br>')}</p>` : '').join('')}`;
    if (this._quill) {
      const len = this._quill.getLength();
      this._quill.insertText(len, '\n', 'user');
      this._quill.clipboard.dangerouslyPasteHTML(len + 1, html);
    } else {
      const ed = document.getElementById('editorContent');
      if (ed) ed.insertAdjacentHTML('beforeend', html);
    }
  },

  _showTranslateError(modal, msg) {
    const el = document.getElementById('trError');
    el.textContent = msg;
    el.style.display = 'block';
  },

  // 把 HTML 转成 Markdown 风格的纯文本（保留结构标记）
  _htmlToMarkdown(html) {
    if (!html) return '';
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    // 递归遍历生成 Markdown
    const out = [];
    const walk = (node, listType = null, listNum = 0) => {
      if (!node) return;
      Array.from(node.childNodes).forEach(child => {
        if (child.nodeType === 3) {
          // 文本节点
          const text = child.textContent.trim();
          if (text) out.push(text);
        } else if (child.nodeType === 1) {
          const tag = child.tagName.toLowerCase();
          if (tag === 'h1') out.push('# ' + child.textContent.trim());
          else if (tag === 'h2') out.push('## ' + child.textContent.trim());
          else if (tag === 'h3') out.push('### ' + child.textContent.trim());
          else if (tag === 'h4') out.push('#### ' + child.textContent.trim());
          else if (tag === 'ul' || tag === 'ol') {
            const newListType = tag;
            let n = 0;
            Array.from(child.children).forEach(li => {
              if (li.tagName.toLowerCase() === 'li') {
                n++;
                const marker = newListType === 'ol' ? `${n}. ` : '- ';
                out.push(marker + li.textContent.trim());
              }
            });
          }
          else if (tag === 'p') {
            const text = child.textContent.trim();
            if (text) out.push(text);
          }
          else if (tag === 'br') {
            // 忽略 BR
          }
          else if (tag === 'blockquote') {
            out.push('> ' + child.textContent.trim());
          }
          else {
            // 块级容器（div/section）：递归处理
            walk(child, listType, listNum);
          }
        }
      });
    };
    walk(tmp);
    return out.join('\n\n');
  },

  // 把 Markdown 风格文本解析为 HTML（与 _replaceDocumentWithTranslation 共享逻辑）
  _markdownToHtml(text) {
    const lines = text.split('\n');
    const htmlParts = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i].trim();
      if (!line) { i++; continue; }
      // H1-H4
      if (line.startsWith('#### ')) { htmlParts.push(`<h4>${this.escapeHtml(line.substring(5))}</h4>`); i++; continue; }
      if (line.startsWith('### '))  { htmlParts.push(`<h3>${this.escapeHtml(line.substring(4))}</h3>`); i++; continue; }
      if (line.startsWith('## '))  { htmlParts.push(`<h2>${this.escapeHtml(line.substring(3))}</h2>`); i++; continue; }
      if (line.startsWith('# '))   { htmlParts.push(`<h1>${this.escapeHtml(line.substring(2))}</h1>`); i++; continue; }
      // 引用
      if (line.startsWith('> ')) { htmlParts.push(`<blockquote>${this.escapeHtml(line.substring(2))}</blockquote>`); i++; continue; }
      // 无序列表
      if (/^[\-\*\u2022]\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^[\-\*\u2022]\s+/.test(lines[i].trim())) {
          items.push(`<li>${this.escapeHtml(lines[i].trim().replace(/^[\-\*\u2022]\s+/, ''))}</li>`);
          i++;
        }
        htmlParts.push(`<ul>${items.join('')}</ul>`);
        continue;
      }
      // 有序列表
      if (/^\d+\.\s+/.test(line)) {
        const items = [];
        while (i < lines.length && /^\d+\.\s+/.test(lines[i].trim())) {
          items.push(`<li>${this.escapeHtml(lines[i].trim().replace(/^\d+\.\s+/, ''))}</li>`);
          i++;
        }
        htmlParts.push(`<ol>${items.join('')}</ol>`);
        continue;
      }
      // 普通段落
      const paraLines = [line];
      i++;
      while (i < lines.length && lines[i].trim() && !/^[#\-\*\u2022\d>]/.test(lines[i].trim())) {
        paraLines.push(lines[i].trim());
        i++;
      }
      htmlParts.push(`<p>${this.escapeHtml(paraLines.join(' ')).replace(/\n/g, '<br>')}</p>`);
    }
    return htmlParts.join('\n');
  },

  // 公开演示站不调用在线翻译服务。
  async _callMiniMaxTranslationAPI() {
    // 浏览器端不能安全保存第三方 API 密钥。公开演示站不调用翻译服务；
    // 生产环境请改为由服务端代理请求并通过环境变量注入密钥。
    throw new Error('在线翻译未配置：公开演示站为保护 API 密钥已禁用该功能。');

    /*
    const url = 'https://api.deepseek.com/v1/chat/completions';

    const prompt = `请将以下中文文本翻译成${targetLang}。

严格结构标记规范（必须逐字遵守，不要遗漏）：
- 每个 H1 标题前必须有 "# "（一个井号加空格）
- 每个 H2 标题前必须有 "## "（两个井号加空格）
- 每个 H3 标题前必须有 "### "（三个井号加空格）
- 每个无序列表项前必须有 "- "（短横线加空格）
- 每个有序列表项前必须有 "1. "（数字加英文点加空格），依次递增
- 普通段落直接写，前面不要加任何标记

翻译规则：
1. 保持原文意思准确、完整
2. 使用地道、自然的${targetLang}表达
3. 专业术语准确（机械、电子、工业领域）
4. 保留所有段落结构（包括标题层级和列表项）
5. 只输出翻译结果（带结构标记），不要任何解释或注释
6. 标题/列表项前必须有对应的标记，没有标记的都不是标题或列表

示例输入：
# 高仙机器人指南
本文档介绍售后维修。
## 设备清单
- 主机一台
- 充电座一个
## 注意事项
1. 阅读手册
2. 佩戴防护

示例输出：
# GAUSIUM Robot Manual
This document describes after-sales maintenance.
## Equipment List
- One main unit
- One charging dock
## Safety Notes
1. Read the manual
2. Wear protective equipment

待翻译原文：
${text}`;

    try {
      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            {role: 'system', content: '你是一位专业翻译，擅长中英/中日/中法/中等翻译。'},
            {role: 'user', content: prompt}
          ],
          temperature: 0.3,
          max_tokens: 4096
        })
      });
      if (!resp.ok) {
        const errText = await resp.text();
        throw new Error(`HTTP ${resp.status}: ${errText.substring(0, 200)}`);
      }
      const data = await resp.json();
      if (data.choices && data.choices[0] && data.choices[0].message) {
        return data.choices[0].message.content.trim();
      }
      throw new Error('返回数据格式未知：' + JSON.stringify(data).substring(0, 200));
    } catch (e) {
      throw e;
    }
    */
  },

  // 锁定 body 滚动（弹窗打开时）
  _lockBodyScroll() {
    this._bodyScrollLocks = (this._bodyScrollLocks || 0) + 1;
    if (this._bodyScrollLocks === 1) {
      if (document.body.dataset.origOverflow === undefined) {
        document.body.dataset.origOverflow = document.body.style.overflow || '';
      }
      document.body.style.overflow = 'hidden';
    }
  },

  // 从预览弹窗导出（无需切换到编辑器）
  exportDocPreviewHTML(docId) {
    const doc = DataStore.getDocById(docId);
    if (!doc) { this.notify('未找到文档', 'error'); return; }
    const html = (doc.content || []).map(p => p.html || '').join('');
    const title = doc.title;
    const fullHtml = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><title>${this.escapeHtml(title)}</title><style>
body { font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif; max-width: 816px; margin: 40px auto; padding: 40px; color: #202124; line-height: 1.6; }
h1, h2, h3 { color: #1a73e8; }
blockquote { border-left: 4px solid #dadce0; padding-left: 16px; color: #5f6368; }
pre { background: #f8f9fa; padding: 12px; border-radius: 6px; }
img { max-width: 100%; }
table { border-collapse: collapse; width: 100%; }
th, td { border: 1px solid #dadce0; padding: 8px 12px; }
th { background: #f8f9fa; }
</style></head><body>${html}</body></html>`;
    const blob = new Blob([fullHtml], {type: 'text/html;charset=utf-8'});
    this._downloadBlob(blob, `${title}.html`);
    this.notify('已导出 HTML：' + title, 'success');
  },

  // 导出 Word（生成 .doc 文件，Word 能直接打开）
  exportDocPreviewWord(docId) {
    const doc = DataStore.getDocById(docId);
    if (!doc) { this.notify('未找到文档', 'error'); return; }
    const title = doc.title;
    // 提取纯文本（用 DOM 解析）
    const tmp = document.createElement('div');
    tmp.innerHTML = (doc.content || []).map(p => p.html || '').join('');
    tmp.querySelectorAll('script, style').forEach(el => el.remove());

    // 生成 Word XML（document.xml 是 docx 的核心，但 .doc 用 RTF 格式更兼容）
    // 用 HTML 转 Word 的最简方案：MIME application/msword
    const html = `<!DOCTYPE html>
<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">
<head>
<meta charset="utf-8">
<title>${this.escapeHtml(title)}</title>
<!--[if gte mso 9]>
<xml>
<w:WordDocument>
<w:View>Print</w:View>
<w:Zoom>100</w:Zoom>
<w:DoNotPromptForConvert/>
</w:WordDocument>
</xml>
<![endif]-->
<style>
@page { size: A4; margin: 2.5cm; }
body { font-family: '宋体', SimSun, serif; font-size: 11pt; line-height: 1.6; color: #000; }
h1 { font-size: 20pt; color: #1a73e8; margin: 16pt 0 12pt; }
h2 { font-size: 16pt; color: #1a73e8; margin: 14pt 0 10pt; }
h3 { font-size: 13pt; color: #1a73e8; margin: 12pt 0 8pt; }
p { margin: 6pt 0; }
blockquote { border-left: 3px solid #1a73e8; padding-left: 10pt; margin: 8pt 0; color: #555; }
pre { background: #f5f5f5; padding: 8pt; border: 1px solid #ddd; font-family: 'Courier New', monospace; }
.info-box, .warning-box, .success-box, .danger-box { padding: 8pt 12pt; border-left: 3px solid; margin: 8pt 0; }
.info-box { background: #e8f0fe; border-color: #1a73e8; color: #174ea6; }
.warning-box { background: #fef7e0; border-color: #f9ab00; color: #7c5e00; }
.success-box { background: #e6f4ea; border-color: #137333; color: #0d652d; }
.danger-box { background: #fce8e6; border-color: #d93025; color: #c5221f; }
table { border-collapse: collapse; width: 100%; margin: 8pt 0; }
th, td { border: 1px solid #999; padding: 6pt 10pt; }
th { background: #f5f5f5; }
img { max-width: 100%; }
</style>
</head>
<body>${(doc.content || []).map(p => p.html || '').join('')}</body>
</html>`;
    // 用 msword MIME 让浏览器识别为 Word 文档
    const blob = new Blob(['\ufeff', html], {type: 'application/msword'});
    this._downloadBlob(blob, `${title}.doc`);
    this.notify('已导出 Word 文档：' + title, 'success');
  },

  // 导出 PDF（直接从预览弹窗的 HTML 截图转 PDF）
  exportDocPreviewPDF(docId) {
    const doc = DataStore.getDocById(docId);
    if (!doc) { this.notify('未找到文档', 'error'); return; }
    if (!window.jspdf || !window.html2canvas) {
      this.notify('PDF 导出依赖未加载', 'error');
      return;
    }
    const title = doc.title;
    this.notify('正在生成 PDF...', 'info', 1500);
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({unit: 'pt', format: 'a4'});
    const pageW = pdf.internal.pageSize.getWidth();   // 595
    const pageH = pdf.internal.pageSize.getHeight();  // 842
    const marginX = 40;
    const marginY = 40;
    const contentW = pageW - marginX * 2;            // 515

    // 把整篇 HTML 拆分成"页"（按 .editor-page-break 或 docPageBreak 分隔）
    const fullHTML = (doc.content || []).map(p => p.html || '').join('');
    const pages = this._splitHTMLByPageBreak(fullHTML);

    // 包装函数：渲染单个 pageHTML 为 canvas 并加入 PDF
    const renderPageToPDF = async (pageHTML, pageIdx) => {
      const tempEl = document.createElement('div');
      tempEl.style.cssText = `position:fixed;top:0;left:-9999px;width:${pageW}pt;padding:${marginY}pt ${marginX}pt;background:white;font-family:"PingFang SC","Microsoft YaHei",sans-serif;line-height:1.6;color:#202124;font-size:12pt;`;
      tempEl.innerHTML = pageHTML;
      document.body.appendChild(tempEl);
      try {
        // scale 1.5 平衡画质和文件大小；JPEG 格式（10x 小于 PNG）
        const canvas = await window.html2canvas(tempEl, {scale: 1.5, useCORS: true, logging: false});
        const imgData = canvas.toDataURL('image/jpeg', 0.85);  // 85% 质量 JPEG
        const imgW = contentW;
        const imgH = canvas.height * (imgW / canvas.width);
        // 单页固定高度（不超过 A4 可用高度）
        const maxH = pageH - marginY * 2;
        if (imgH <= maxH) {
          if (pageIdx > 0) pdf.addPage();
          pdf.addImage(imgData, 'JPEG', marginX, marginY, imgW, imgH);
        } else {
          // 页面内容超过可用高度 → 自动按可用高度拆分为多张
          let yOffset = 0;
          let isFirst = pageIdx === 0;
          while (yOffset < imgH) {
            if (!isFirst) pdf.addPage();
            pdf.addImage(imgData, 'JPEG', marginX, marginY - yOffset, imgW, imgH);
            yOffset += maxH;
            isFirst = false;
          }
        }
      } finally {
        document.body.removeChild(tempEl);
      }
    };

    // 串行渲染每一页（避免内存压力）
    (async () => {
      try {
        for (let i = 0; i < pages.length; i++) {
          this.notify(`📄 生成 PDF 第 ${i+1}/${pages.length} 页...`, 'info', 1500);
          await renderPageToPDF(pages[i], i);
        }
        // 用原生保存对话框保存 PDF（让用户选位置）
        const pdfBlob = pdf.output('blob');
        await this._downloadBlob(pdfBlob, `${title}.pdf`, 'application/pdf');
      } catch (err) {
        console.error(err);
        this.notify('PDF 生成失败：' + err.message, 'error');
      }
    })();
  },

  // 按分页符拆分 HTML 为多页
  _splitHTMLByPageBreak(html) {
    if (!html) return [''];
    // 兼容多种分页符
    const separators = [
      /<div[^>]*class\s*=\s*["'][^"']*editor-page-break[^"']*["'][^>]*>\s*<\/div>/gi,
      /<hr[^>]*class\s*=\s*["'][^"']*doc-page-break[^"']*["'][^>]*\/?>/gi,
      /<!--\s*PAGE_BREAK\s*-->/gi,
    ];
    let splitRegex = null;
    for (const sep of separators) {
      if (sep.test(html)) { splitRegex = sep; break; }
    }
    if (!splitRegex) return [html];
    return html.split(splitRegex).map(s => s.trim()).filter(s => s.length > 0);
  },

  // 解锁 body 滚动
  _unlockBodyScroll() {
    this._bodyScrollLocks = Math.max(0, (this._bodyScrollLocks || 0) - 1);
    if (this._bodyScrollLocks === 0) {
      document.body.style.overflow = document.body.dataset.origOverflow || '';
    }
  },

  // 导出当前文档为独立 HTML 文件
  exportDoc() {
    const doc = DataStore.getDocById(this.editorDocId);
    if (!doc) { this.notify('未找到文档', 'error'); return; }
    // 取当前编辑内容
    let html = '';
    if (this._quill) {
      html = this._quill.root.innerHTML;
    } else {
      const el = document.getElementById('editorContent') || document.getElementById('editorContentHidden');
      html = el ? el.innerHTML : '';
    }
    if (!html) html = (doc.content || []).map(p => p.html || '').join('');
    const title = (document.getElementById('editDocTitle')?.value) || doc.title;
    const fullHtml = `<!DOCTYPE html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"><title>${this.escapeHtml(title)}</title><style>
body { font-family: 'PingFang SC', 'Microsoft YaHei', 'Segoe UI', sans-serif; max-width: 816px; margin: 40px auto; padding: 40px; color: #202124; line-height: 1.6; background: #fff; }
h1, h2, h3, h4 { color: #1a73e8; }
blockquote { border-left: 4px solid #dadce0; padding-left: 16px; color: #5f6368; }
pre, code { background: #f8f9fa; padding: 8px 12px; border-radius: 4px; font-family: Menlo, Consolas, monospace; font-size: 13px; }
.info-box, .warning-box, .success-box, .danger-box { padding: 12px 16px; border-radius: 4px; border-left: 4px solid; margin: 12px 0; }
.info-box { background: #e8f0fe; border-color: #1967d2; color: #174ea6; }
.warning-box { background: #fef7e0; border-color: #f9ab00; color: #7c5e00; }
.success-box { background: #e6f4ea; border-color: #137333; color: #0d652d; }
.danger-box { background: #fce8e6; border-color: #d93025; color: #c5221f; }
.step-block { background: #f8f9fa; border-left: 4px solid #1a73e8; padding: 14px 18px 14px 56px; margin: 12px 0; position: relative; border-radius: 4px; }
.step-block .step-number { position: absolute; left: 16px; top: 14px; width: 28px; height: 28px; background: #1a73e8; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; }
.tool-list { background: #fff; border: 1px solid #dadce0; padding: 12px 16px; margin: 8px 0; border-radius: 4px; }
table { border-collapse: collapse; width: 100%; margin: 12px 0; }
th, td { border: 1px solid #dadce0; padding: 8px 12px; text-align: left; }
th { background: #f8f9fa; font-weight: 600; }
img { max-width: 100%; height: auto; }
</style></head><body>${html}</body></html>`;
    const blob = new Blob([fullHtml], {type: 'text/html;charset=utf-8'});
    this._downloadBlob(blob, `${title}.html`);
    this.notify('已导出 HTML：' + title, 'success');
  },

  // 导出当前文档为 PDF（jsPDF + html2canvas，CDN 已引入）
    exportDocPDF() {
    // 复用 exportDocPreviewPDF 的按分页符分割逻辑（先保存再导出）
    this._saveContinuousContent();
    this.exportDocPreviewPDF(this.editorDocId);
  },

  // 工具函数：转义 HTML
  escapeHtml(s) {
    return String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  // 工具函数：下载 Blob 为文件
  // 下载文件（支持原生保存对话框）
  async _downloadBlob(blob, filename, mimeType = '') {
    // 优先用原生 showSaveFilePicker（Chrome 86+/Edge 86+）
    if (window.showSaveFilePicker) {
      try {
        const types = mimeType ? [{
          description: '文件',
          accept: { [mimeType]: [`.${filename.split('.').pop()}`] }
        }] : [];
        const handle = await window.showSaveFilePicker({
          suggestedName: filename,
          types: types,
        });
        const writable = await handle.createWritable();
        await writable.write(blob);
        await writable.close();
        this.notify(`✓ 已保存：${filename}`, 'success');
        return;
      } catch (e) {
        // 用户取消选择（AbortError）或 API 失败 → 降级
        if (e.name === 'AbortError') {
          this.notify('已取消保存', 'info', 1500);
          return;
        }
        console.warn('showSaveFilePicker 失败，降级到自动下载:', e);
      }
    }
    // 降级方案：浏览器默认下载到 ~/Downloads 目录
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    this.notify(`✓ 已导出：${filename}\n📁 保存到浏览器默认下载目录`, 'success', 3500);
  },

  // 切换文档属性面板
  toggleDocProperties() {
    this.notify('文档属性面板开发中，可点击顶部"返回"按钮到管理后台编辑', 'info');
  },

  // 通用 in-app 输入对话框（替换浏览器原生 prompt）
  // 用法：await this._promptInApp('标题', '提示文本', '默认值')
  _promptInApp(title, label, defaultValue = '', options = {}) {
    return new Promise((resolve) => {
      // 移除已有的
      document.getElementById('gdocsPromptModal')?.remove();
      const modal = document.createElement('div');
      modal.id = 'gdocsPromptModal';
      modal.className = 'modal-overlay gdocs-prompt-overlay';
      modal.innerHTML = `
        <div class="modal gdocs-prompt-modal" style="max-width:480px;">
          <div class="modal-header" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
            <h3 style="margin:0;font-size:16px;color:#202124;">${this.escapeHtml(title)}</h3>
            <button class="modal-close" onclick="document.getElementById('gdocsPromptModal').remove(); window._gdocsPromptResolve(null);" style="background:none;border:none;font-size:20px;color:#5f6368;cursor:pointer;float:right;">×</button>
          </div>
          <div class="modal-body" style="padding:20px;">
            ${label ? `<p style="margin:0 0 10px;font-size:14px;color:#5f6368;">${this.escapeHtml(label)}</p>` : ''}
            <input type="text" id="gdocsPromptInput" class="gdocs-prompt-input"
                   value="${this.escapeHtml(defaultValue)}"
                   style="width:100%;padding:10px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;"
                   ${options.placeholder ? `placeholder="${this.escapeHtml(options.placeholder)}"` : ''}>
          </div>
          <div class="modal-footer" style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;gap:8px;">
            <button class="btn btn-secondary" id="gdocsPromptCancel"
                    style="padding:8px 16px;font-size:14px;border:1px solid #dadce0;background:#fff;color:#5f6368;border-radius:4px;cursor:pointer;">
              取消
            </button>
            <button class="btn btn-primary" id="gdocsPromptOk"
                    style="padding:8px 16px;font-size:14px;border:none;background:#1a73e8;color:#fff;border-radius:4px;cursor:pointer;font-weight:500;">
              确定
            </button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      const input = document.getElementById('gdocsPromptInput');
      input.focus();
      input.select();
      window._gdocsPromptResolve = resolve;
      document.getElementById('gdocsPromptOk').onclick = () => {
        const v = input.value;
        modal.remove();
        resolve(v);
      };
      document.getElementById('gdocsPromptCancel').onclick = () => {
        modal.remove();
        resolve(null);
      };
      // ESC 关闭
      const escHandler = (e) => {
        if (e.key === 'Escape') {
          document.getElementById('gdocsPromptCancel').click();
        } else if (e.key === 'Enter' && !e.shiftKey) {
          document.getElementById('gdocsPromptOk').click();
        }
      };
      input.addEventListener('keydown', escHandler);
      // 点击遮罩关闭
      modal.addEventListener('click', (e) => {
        if (e.target === modal) document.getElementById('gdocsPromptCancel').click();
      });
    });
  },

  // 异步 in-app 选择对话框（替换 confirm）
  async _confirmInApp(title, message) {
    return new Promise((resolve) => {
      document.getElementById('gdocsConfirmModal')?.remove();
      const modal = document.createElement('div');
      modal.id = 'gdocsConfirmModal';
      modal.className = 'modal-overlay gdocs-prompt-overlay';
      modal.innerHTML = `
        <div class="modal gdocs-prompt-modal" style="max-width:420px;">
          <div class="modal-header" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;">
            <h3 style="margin:0;font-size:16px;color:#202124;">${this.escapeHtml(title)}</h3>
          </div>
          <div class="modal-body" style="padding:20px;font-size:14px;color:#5f6368;">
            ${this.escapeHtml(message)}
          </div>
          <div class="modal-footer" style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;gap:8px;">
            <button class="btn btn-secondary" id="gdocsConfirmCancel" style="padding:8px 16px;font-size:14px;border:1px solid #dadce0;background:#fff;color:#5f6368;border-radius:4px;cursor:pointer;">取消</button>
            <button class="btn btn-primary" id="gdocsConfirmOk" style="padding:8px 16px;font-size:14px;border:none;background:#1a73e8;color:#fff;border-radius:4px;cursor:pointer;font-weight:500;">确定</button>
          </div>
        </div>
      `;
      document.body.appendChild(modal);
      document.getElementById('gdocsConfirmOk').onclick = () => { modal.remove(); resolve(true); };
      document.getElementById('gdocsConfirmCancel').onclick = () => { modal.remove(); resolve(false); };
    });
  },

  // 编辑器缩放控制
  zoomEditor(delta) {
    if (typeof this._editorZoom !== 'number') this._editorZoom = 100;
    if (delta === 0) this._editorZoom = 100;
    else this._editorZoom = Math.max(50, Math.min(200, this._editorZoom + delta));
    // 找到文档区容器
    const docArea = document.querySelector('.gdocs-doc-area') || document.querySelector('.gdocs-doc-content-wrap') || document.querySelector('[id*="docArea"]');
    if (docArea) {
      docArea.style.transformOrigin = 'top center';
      docArea.style.transform = `scale(${this._editorZoom / 100})`;
    }
    const label = document.getElementById('gdocsZoomValue');
    if (label) label.textContent = this._editorZoom + '%';
    if (delta !== 0) this.notify('缩放：' + this._editorZoom + '%', 'info', 800);
  },

  // 切换大纲面板
  toggleOutline() {
    let panel = document.getElementById('gdocsOutlinePanel');
    let fab = document.getElementById('gdocsOutlineFab');
    if (!panel) {
      this._renderOutline();
      return;
    }
    const hidden = panel.classList.contains('hidden');
    if (hidden) {
      panel.classList.remove('hidden');
      fab?.classList.remove('hidden');
      this._refreshOutline();
    } else {
      panel.classList.add('hidden');
    }
  },

  _renderOutline() {
    // 创建浮动按钮
    let fab = document.getElementById('gdocsOutlineFab');
    if (!fab) {
      fab = document.createElement('button');
      fab.id = 'gdocsOutlineFab';
      fab.className = 'gdocs-outline-fab';
      fab.title = '文档大纲';
      fab.innerHTML = '📑';
      fab.onclick = () => this.toggleOutline();
      document.body.appendChild(fab);
    }
    // 创建大纲面板
    const panel = document.createElement('div');
    panel.id = 'gdocsOutlinePanel';
    panel.className = 'gdocs-outline-panel hidden';
    panel.innerHTML = `
      <div class="gdocs-outline-title">
        <span>📑 文档大纲</span>
        <button class="gdocs-outline-close" title="关闭">✕</button>
      </div>
      <ul class="gdocs-outline-list" id="gdocsOutlineList"></ul>
    `;
    panel.querySelector('.gdocs-outline-close').onclick = () => this.toggleOutline();
    document.body.appendChild(panel);
    // 显示
    setTimeout(() => {
      panel.classList.remove('hidden');
      this._refreshOutline();
    }, 10);
  },

  _refreshOutline() {
    const list = document.getElementById('gdocsOutlineList');
    if (!list) return;
    const editor = this._quill ? this._quill.root : document.getElementById('editorContent') || document.getElementById('editorContentHidden');
    if (!editor) { list.innerHTML = '<div class="gdocs-outline-empty">文档未加载</div>'; return; }
    const headings = Array.from(editor.querySelectorAll('h1, h2, h3, h4'));
    if (headings.length === 0) {
      list.innerHTML = '<div class="gdocs-outline-empty">暂无标题<br><span style="font-size:11px;">（使用 H1-H4 创建标题）</span></div>';
      return;
    }
    list.innerHTML = headings.map((h, i) => {
      const level = h.tagName.toLowerCase();
      const text = (h.textContent || '').trim().substring(0, 30) || '(无标题)';
      return `<li class="${level}" data-heading-idx="${i}">${this.escapeHtml(text)}</li>`;
    }).join('');
    list.querySelectorAll('li').forEach(li => {
      li.onclick = () => {
        const idx = parseInt(li.dataset.headingIdx, 10);
        headings[idx].scrollIntoView({behavior: 'smooth', block: 'start'});
      };
    });
  },

  // 设置保存状态指示器
  setSaveStatusUI(status) {
    // status: 'saved' | 'unsaved' | 'saving'
    const el = document.getElementById('gdocsSaveStatus');
    if (!el) return;
    el.classList.remove('saved', 'unsaved', 'saving');
    el.classList.add(status);
    if (status === 'saved') el.textContent = '已保存 · ' + new Date().toLocaleTimeString('zh-CN', {hour: '2-digit', minute: '2-digit'});
    else if (status === 'unsaved') el.textContent = '未保存';
    else if (status === 'saving') el.textContent = '保存中…';
  },

  // 字数统计弹窗
  showWordCount() {
    const editor = this._quill ? this._quill : document.getElementById('editorContent') || document.getElementById('editorContentHidden');
    if (!editor) { this.notify('编辑器未加载', 'warning'); return; }
    const html = this._quill ? editor.root.innerHTML : editor.innerHTML;
    const text = (html || '').replace(/<[^>]+>/g, ' ').replace(/&nbsp;/g, ' ').trim();
    const chars = text.length;
    const charsNoSpace = text.replace(/\s+/g, '').length;
    const words = text ? text.split(/\s+/).filter(Boolean).length : 0;
    const paragraphs = (html.match(/<(p|h[1-6]|li|blockquote|pre|div)[^>]*>/g) || []).length;
    // 中文字数（每个汉字算一个字）
    const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const lines = text.split(/[。！？\n]/).filter(s => s.trim()).length;
    const minutes = Math.max(1, Math.ceil(chineseChars / 300));
    const msg = `字数统计\n\n` +
      `中文字数：${chineseChars}\n` +
      `总字符数：${chars}\n` +
      `非空格字符：${charsNoSpace}\n` +
      `英文单词：${words}\n` +
      `段落数：${paragraphs}\n` +
      `句子数：${lines}\n` +
      `预估阅读时间：${minutes} 分钟`;
    alert(msg);
  },

  deleteDoc(id) {
    if (confirm('确定要删除这篇文档吗？此操作不可恢复。')) {
      DataStore.deleteDoc(id);
      this.render();
    }
  },

  // 文档筛选方法
  setDocSearch(val) {
    this.docSearch = val;
    clearTimeout(this._docSearchTimer);
    this._docSearchTimer = setTimeout(() => this.render(), 200);
  },
  setDocStatusFilter(val) { this.docStatusFilter = val; this.render(); },
  setDocProductFilter(val) { this.docProductFilter = val; this.render(); },
  setDocTypeFilter(val) { this.docTypeFilter = val; this.render(); },
  resetDocFilters() {
    this.docSearch = '';
    this.docStatusFilter = 'all';
    this.docProductFilter = 'all';
    this.docTypeFilter = 'all';
    this.render();
  },

  // 列头排序：文档表格
  setDocSort(field) {
    if (this.docSortField === field) {
      this.docSortDir = this.docSortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.docSortField = field;
      this.docSortDir = 'desc';
    }
    this.render();
  },

  _renderDocSortIndicator(field) {
    if (this.docSortField !== field) return '<span style="opacity:0.3;margin-left:4px;font-size:10px;">⇅</span>';
    return this.docSortDir === 'asc'
      ? '<span style="margin-left:4px;font-size:10px;color:var(--primary);">▲</span>'
      : '<span style="margin-left:4px;font-size:10px;color:var(--primary);">▼</span>';
  },

  // 视频表格列头排序
  setVideoTableSort(field) {
    if (this.videoSortField === field) {
      this.videoSortDir = this.videoSortDir === 'asc' ? 'desc' : 'asc';
    } else {
      this.videoSortField = field;
      this.videoSortDir = 'desc';
    }
    this.render();
  },

  _renderVideoTableSortIndicator(field) {
    if (this.videoSortField !== field) return '<span style="opacity:0.3;margin-left:4px;font-size:10px;">⇅</span>';
    return this.videoSortDir === 'asc'
      ? '<span style="margin-left:4px;font-size:10px;color:var(--primary);">▲</span>'
      : '<span style="margin-left:4px;font-size:10px;color:var(--primary);">▼</span>';
  },

  // 把 "MM:SS" / "HH:MM:SS" 转为秒
  _parseDuration(s) {
    if (!s || typeof s !== 'string') return 0;
    const parts = s.split(':').map(n => parseInt(n, 10) || 0);
    if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
    if (parts.length === 2) return parts[0] * 60 + parts[1];
    return parts[0] || 0;
  },

  // 全选/取消全选
  toggleAllDocs(checkbox) {
    document.querySelectorAll('.doc-check').forEach(cb => cb.checked = checkbox.checked);
  },

  // 批量发布
  batchPublishDocs() {
    const checked = document.querySelectorAll('.doc-check:checked');
    if (checked.length === 0) {
      this.notify('请先选择要发布的文档', 'warning');
      return;
    }
    if (confirm(`确定要发布选中的 ${checked.length} 篇文档吗？`)) {
      checked.forEach(cb => {
        DataStore.updateDoc(cb.dataset.id, { status: 'published', progress: 100 });
      });
      this.showToast(`已批量发布 ${checked.length} 篇文档`);
      this.render();
    }
  },

  // 批量删除
  batchDeleteDocs() {
    const checked = document.querySelectorAll('.doc-check:checked');
    if (checked.length === 0) {
      this.notify('请先选择要删除的文档', 'warning');
      return;
    }
    if (confirm(`确定要删除选中的 ${checked.length} 篇文档吗？此操作不可恢复！`)) {
      checked.forEach(cb => DataStore.deleteDoc(cb.dataset.id));
      this.showToast(`已删除 ${checked.length} 篇文档`);
      this.render();
    }
  },

  // 下载导入模板
  downloadDocTemplate() {
    const headers = ['文档标题', '文档描述', '所属产品ID', '文档类型', '状态', '完成进度', '负责人', '页数'];
    const sampleRow = ['示例：ZX-200水泵维修指南', '详细介绍水泵机械密封更换步骤', 'p1', 'guide', 'draft', '50', '张工', '3'];
    const notes = [
      '说明：',
      '1. 所属产品ID：p1=ZX-200智能水泵, p2=ZX-M30伺服电机, p3=ZX-PLC500控制器, p4=ZX-HMI10触摸屏, p5=ZX-RED50减速机, p6=ZX-VFD75变频器, p7=ZX-SEN200传感器, p8=ZX-ROB6机器人',
      '2. 文档类型：guide=维修指南, manual=用户手册, faq=常见问题, install=安装指南, spec=技术规格',
      '3. 状态：draft=草稿, planning=规划中, developing=开发中, review=审核中, published=已发布',
      '4. 完成进度：0-100的数字',
      '5. 请删除示例行后再导入'
    ];

    const BOM = '\uFEFF';
    const csv = BOM + [
      headers.join(','),
      sampleRow.join(','),
      '',
      ...notes
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = '文档导入模板.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    this.showToast('模板已下载');
  },

  // 显示导入模态框
  showImportDocModal() {
    const modalHtml = `
      <div id="importDocModal" style="display:block;">
        <div class="modal-overlay" onclick="if(event.target===this)App.hideModal('importDocModal')">
          <div class="modal" style="max-width:600px;">
            <div class="modal-header">
              <div class="modal-title">📤 导入文档</div>
              <button class="modal-close" onclick="App.hideModal('importDocModal')">×</button>
            </div>
            <div class="modal-body">
              <div style="background:var(--primary-light);border-radius:var(--radius-md);padding:16px;margin-bottom:20px;">
                <div style="font-weight:600;color:var(--primary);margin-bottom:8px;">📋 导入说明</div>
                <ul style="font-size:13px;color:var(--gray-700);padding-left:20px;line-height:1.8;">
                  <li>支持 CSV 格式文件（Excel可另存为CSV）</li>
                  <li>请先下载模板，按模板格式填写</li>
                  <li>所属产品ID、文档类型、状态需使用系统内代码</li>
                  <li>导入后默认状态为草稿，请检查后再发布</li>
                </ul>
              </div>
              <div class="form-group">
                <label>选择文件 <span class="required">*</span></label>
                <input type="file" id="importDocFile" accept=".csv" style="width:100%;padding:10px;border:1px dashed var(--gray-300);border-radius:var(--radius-md);background:var(--gray-50);">
              </div>
              <div id="importPreview" style="display:none;">
                <div style="font-size:13px;font-weight:500;margin-bottom:8px;color:var(--gray-700);">预览（前5条）：</div>
                <div id="importPreviewList" style="max-height:200px;overflow-y:auto;background:var(--gray-50);border-radius:var(--radius-sm);padding:8px;"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="App.downloadDocTemplate()">下载模板</button>
              <button class="btn btn-secondary" onclick="App.hideModal('importDocModal')">取消</button>
              <button class="btn btn-primary" onclick="App.importDocs()">开始导入</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const container = document.createElement('div');
    container.id = 'importDocModalContainer';
    container.innerHTML = modalHtml;
    document.body.appendChild(container);

    // 绑定文件选择事件
    setTimeout(() => {
      const fileInput = document.getElementById('importDocFile');
      if (fileInput) {
        fileInput.addEventListener('change', (e) => this.handleDocFileSelect(e));
      }
    }, 50);
  },

  // 处理文件选择
  handleDocFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      this._importDocData = this.parseCSV(text);
      
      const previewEl = document.getElementById('importPreview');
      const listEl = document.getElementById('importPreviewList');
      if (previewEl && listEl && this._importDocData.length > 0) {
        previewEl.style.display = 'block';
        listEl.innerHTML = this._importDocData.slice(0, 5).map((row, i) => `
          <div style="padding:6px 10px;font-size:12px;color:var(--gray-700);border-bottom:1px solid var(--gray-200);">
            <strong>第${i+1}条：</strong>${row[0] || '(无标题)'}
          </div>
        `).join('') + (this._importDocData.length > 5 ? `<div style="padding:6px 10px;font-size:12px;color:var(--gray-500);text-align:center;">... 共 ${this._importDocData.length} 条</div>` : '');
      }
    };
    reader.readAsText(file, 'UTF-8');
  },

  // 解析CSV
  parseCSV(text) {
    const lines = text.split(/\r?\n/).filter(line => line.trim() !== '');
    // 跳过表头行和说明行
    const dataLines = lines.slice(1).filter(line => {
      // 过滤掉说明行（非数据行）
      const first = line.split(',')[0];
      return first && !first.startsWith('说明') && !first.startsWith('1.') && !first.startsWith('2.') && !first.startsWith('3.') && !first.startsWith('4.') && !first.startsWith('5.');
    });

    return dataLines.map(line => {
      // CSV 解析（支持引号转义 "" → "，引号内的逗号作为字段内容）
      const result = [];
      let current = '';
      let inQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"') {
          if (inQuotes && line[i + 1] === '"') {
            // 转义的引号 "" → "
            current += '"';
            i++; // 跳过下一个 "
          } else {
            inQuotes = !inQuotes;
          }
        } else if (char === ',' && !inQuotes) {
          result.push(current);
          current = '';
        } else {
          current += char;
        }
      }
      result.push(current);
      return result;
    });
  },

  // 执行导入
  importDocs() {
    if (!this._importDocData || this._importDocData.length === 0) {
      this.notify('请先选择要导入的CSV文件', 'warning');
      return;
    }

    const products = DataStore.getProducts();
    const docTypes = DataStore.getDocTypes();
    let successCount = 0;
    let failCount = 0;

    this._importDocData.forEach(row => {
      try {
        const title = row[0];
        if (!title || title.trim() === '') {
          failCount++;
          return;
        }
        const description = row[1] || '暂无描述';
        const productId = row[2] || products[0]?.id || 'p1';
        const type = row[3] || 'guide';
        const status = row[4] || 'draft';
        const progress = parseInt(row[5]) || 0;
        const author = row[6] || '导入';
        const pages = parseInt(row[7]) || 1;

        // 验证产品ID是否有效
        if (!products.find(p => p.id === productId)) {
          failCount++;
          return;
        }

        DataStore.addDoc({
          title: title.trim(),
          description: description.trim(),
          productId: productId.trim(),
          type: type.trim(),
          status: status.trim(),
          progress: Math.min(100, Math.max(0, progress)),
          author: author.trim(),
          pages: Math.max(1, pages)
        });
        successCount++;
      } catch (e) {
        failCount++;
      }
    });

    this.hideModal('importDocModal');
    const container = document.getElementById('importDocModalContainer');
    if (container) container.remove();
    this._importDocData = null;

    this.showToast(`导入完成：成功 ${successCount} 条，失败 ${failCount} 条`);
    this.render();
  },

  // 视频筛选方法
  // 后台搜索不需要防抖（用户期望每次按键都即时过滤）
  // 注意：不要再叫 setVideoSearch —— 之前这里和第 3071 行的防抖版本重名，
  // 对象字面量后定义的会覆盖前面的，导致前台视频搜索框的防抖（Bug #22 的修复）被这里悄悄覆盖掉了，
  // 造成前台搜索框每敲一个字符就整页重渲染、输入框丢失焦点。
  setAdminVideoSearch(val) {
    this.videoSearch = val;
    this.render();
  },
  setVideoStatusFilter(val) { this.videoStatusFilter = val; this.render(); },
  setVideoProductFilter(val) { this.videoProductFilter = val; this.render(); },
  setVideoCatFilter(val) { this.videoCatFilter = val; this.render(); },
  resetVideoFilters() {
    this.videoSearch = '';
    this.videoStatusFilter = 'all';
    this.videoProductFilter = 'all';
    this.videoCatFilter = 'all';
    this.render();
  },

  // 视频全选
  toggleAllVideos(checkbox) {
    document.querySelectorAll('.video-check').forEach(cb => cb.checked = checkbox.checked);
  },

  // 批量发布视频
  batchPublishVideos() {
    const checked = document.querySelectorAll('.video-check:checked');
    if (checked.length === 0) { this.notify('请先选择要发布的视频', 'warning'); return; }
    if (confirm(this.tr(`confirm.publishVideos`, {n: checked.length}))) {
      checked.forEach(cb => DataStore.updateVideo(cb.dataset.id, { status: 'published' }));
      this.showToast(this.t('toast.bulkPublished', {n: checked.length}));
      this.render();
    }
  },

  // 批量删除视频
  batchDeleteVideos() {
    const checked = document.querySelectorAll('.video-check:checked');
    if (checked.length === 0) { this.notify('请先选择要删除的视频', 'warning'); return; }
    if (confirm(this.tr(`confirm.deleteVideos`, {n: checked.length}))) {
      checked.forEach(cb => DataStore.deleteVideo(cb.dataset.id));
      this.showToast(this.t('toast.bulkDeleted', {n: checked.length}));
      this.render();
    }
  },

  // 下载视频导入模板
  downloadVideoTemplate() {
    const headers = ['视频标题', '视频描述', '所属产品ID', '视频分类', '时长', '视频来源', '视频URL', '状态', '负责人'];
    const sampleRow = ['示例：水泵电机更换教程', '详细演示电机拆卸与安装全过程', 'p1', 'disassembly', '12:30', 'external', 'https://www.bilibili.com/video/xxx', 'draft', '李工'];
    const notes = [
      '说明：',
      '1. 所属产品ID：p1=ZX-200智能水泵, p2=ZX-M30伺服电机, p3=ZX-PLC500控制器, p4=ZX-HMI10触摸屏, p5=ZX-RED50减速机, p6=ZX-VFD75变频器, p7=ZX-SEN200传感器, p8=ZX-ROB6机器人',
      '2. 视频分类：usage=使用视频, maintenance=维护视频, disassembly=拆装视频, troubleshooting=排查视频',
      '3. 视频来源：local=本地上传, external=外部链接',
      '4. 状态：draft=草稿, planning=规划中, developing=制作中, review=审核中, published=已发布',
      '5. 时长格式：如 05:30 表示5分30秒',
      '6. 请删除示例行后再导入'
    ];

    const BOM = '\uFEFF';
    const csv = BOM + [
      headers.join(','),
      sampleRow.join(','),
      '',
      ...notes
    ].join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = '视频导入模板.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
    this.showToast('模板已下载');
  },

  // 显示视频导入模态框
  showImportVideoModal() {
    const modalHtml = `
      <div id="importVideoModal" style="display:block;">
        <div class="modal-overlay" onclick="if(event.target===this)App.hideModal('importVideoModal')">
          <div class="modal" style="max-width:600px;">
            <div class="modal-header">
              <div class="modal-title">📤 导入视频</div>
              <button class="modal-close" onclick="App.hideModal('importVideoModal')">×</button>
            </div>
            <div class="modal-body">
              <div style="background:var(--primary-light);border-radius:var(--radius-md);padding:16px;margin-bottom:20px;">
                <div style="font-weight:600;color:var(--primary);margin-bottom:8px;">📋 导入说明</div>
                <ul style="font-size:13px;color:var(--gray-700);padding-left:20px;line-height:1.8;">
                  <li>支持 CSV 格式文件（Excel可另存为CSV）</li>
                  <li>请先下载模板，按模板格式填写</li>
                  <li>所属产品ID、视频来源、状态需使用系统内代码</li>
                  <li>导入后默认状态为草稿，请检查后再发布</li>
                </ul>
              </div>
              <div class="form-group">
                <label>选择文件 <span class="required">*</span></label>
                <input type="file" id="importVideoFile" accept=".csv" style="width:100%;padding:10px;border:1px dashed var(--gray-300);border-radius:var(--radius-md);background:var(--gray-50);">
              </div>
              <div id="importVideoPreview" style="display:none;">
                <div style="font-size:13px;font-weight:500;margin-bottom:8px;color:var(--gray-700);">预览（前5条）：</div>
                <div id="importVideoPreviewList" style="max-height:200px;overflow-y:auto;background:var(--gray-50);border-radius:var(--radius-sm);padding:8px;"></div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="App.downloadVideoTemplate()">下载模板</button>
              <button class="btn btn-secondary" onclick="App.hideModal('importVideoModal')">取消</button>
              <button class="btn btn-primary" onclick="App.importVideos()">开始导入</button>
            </div>
          </div>
        </div>
      </div>
    `;
    const container = document.createElement('div');
    container.id = 'importVideoModalContainer';
    container.innerHTML = modalHtml;
    document.body.appendChild(container);

    setTimeout(() => {
      const fileInput = document.getElementById('importVideoFile');
      if (fileInput) {
        fileInput.addEventListener('change', (e) => this.handleVideoFileSelect(e));
      }
    }, 50);
  },

  // 处理视频文件选择
  handleVideoFileSelect(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target.result;
      this._importVideoData = this.parseCSV(text);
      
      const previewEl = document.getElementById('importVideoPreview');
      const listEl = document.getElementById('importVideoPreviewList');
      if (previewEl && listEl && this._importVideoData.length > 0) {
        previewEl.style.display = 'block';
        listEl.innerHTML = this._importVideoData.slice(0, 5).map((row, i) => `
          <div style="padding:6px 10px;font-size:12px;color:var(--gray-700);border-bottom:1px solid var(--gray-200);">
            <strong>第${i+1}条：</strong>${row[0] || '(无标题)'}
          </div>
        `).join('') + (this._importVideoData.length > 5 ? `<div style="padding:6px 10px;font-size:12px;color:var(--gray-500);text-align:center;">... 共 ${this._importVideoData.length} 条</div>` : '');
      }
    };
    reader.readAsText(file, 'UTF-8');
  },

  // 执行视频导入
  importVideos() {
    if (!this._importVideoData || this._importVideoData.length === 0) {
      this.notify('请先选择要导入的CSV文件', 'warning');
      return;
    }

    const products = DataStore.getProducts();
    let successCount = 0;
    let failCount = 0;

    this._importVideoData.forEach(row => {
      try {
        const title = row[0];
        if (!title || title.trim() === '') {
          failCount++;
          return;
        }
        const description = row[1] || '暂无描述';
        const productId = row[2] || products[0]?.id || 'p1';
        const category = row[3] || 'usage';
        const duration = row[4] || '05:00';
        const videoType = row[5] || 'external';
        const videoUrl = row[6] || '';
        const status = row[7] || 'draft';
        const author = row[8] || '导入';

        if (!products.find(p => p.id === productId)) {
          failCount++;
          return;
        }

        DataStore.addVideo({
          title: title.trim(),
          description: description.trim(),
          productId: productId.trim(),
          category: category.trim(),
          duration: duration.trim(),
          videoType: videoType.trim(),
          videoUrl: videoUrl.trim(),
          status: status.trim(),
          author: author.trim()
        });
        successCount++;
      } catch (e) {
        failCount++;
      }
    });

    this.hideModal('importVideoModal');
    const container = document.getElementById('importVideoModalContainer');
    if (container) container.remove();
    this._importVideoData = null;

    this.showToast(`导入完成：成功 ${successCount} 条，失败 ${failCount} 条`);
    this.render();
  },

  // ========================================
  // 视频管理
  // ========================================
  renderAdminVideos() {
    let vids = DataStore.getVideos();
    const products = DataStore.getProducts();
    const videoCats = DataStore.getVideoCategories();

    // 应用筛选
    if (this.videoSearch) {
      const q = this.videoSearch.toLowerCase();
      vids = vids.filter(v =>
        v.title.toLowerCase().includes(q) ||
        v.description.toLowerCase().includes(q) ||
        v.author.toLowerCase().includes(q)
      );
    }
    if (this.videoStatusFilter !== 'all') {
      if (this.videoStatusFilter === 'draft_planning') {
        vids = vids.filter(v => v.status === 'draft' || v.status === 'planning');
      } else {
        vids = vids.filter(v => v.status === this.videoStatusFilter);
      }
    }
    if (this.videoProductFilter !== 'all') {
      vids = vids.filter(v => v.productId === this.videoProductFilter);
    }
    if (this.videoCatFilter && this.videoCatFilter !== 'all') {
      vids = vids.filter(v => v.category === this.videoCatFilter);
    }

    // 列头排序（时长字段特殊处理：把 "MM:SS" 转为秒数）
    if (this.videoSortField) {
      const dir = this.videoSortDir === 'asc' ? 1 : -1;
      vids = [...vids].sort((a, b) => {
        let va = a[this.videoSortField];
        let vb = b[this.videoSortField];
        if (this.videoSortField === 'duration') {
          va = this._parseDuration(va);
          vb = this._parseDuration(vb);
        }
        if (va == null && vb == null) return 0;
        if (va == null) return 1;
        if (vb == null) return -1;
        if (typeof va === 'number' && typeof vb === 'number') return (va - vb) * dir;
        return String(va).localeCompare(String(vb), 'zh-CN') * dir;
      });
    }

    const statusMap = {
      published: { label: '已发布', class: 'badge-success' },
      review: { label: '审核中', class: 'badge-warning' },
      developing: { label: '制作中', class: 'badge-info' },
      planning: { label: '规划中', class: 'badge-gray' },
      draft: { label: '草稿', class: 'badge-gray' }
    };

    return `
      <!-- 筛选区统计（可点击筛选） -->
      <div style="display:flex;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
        <div class="filter-stat-card ${this.videoStatusFilter === 'all' ? 'active' : ''}" onclick="App.setVideoStatusFilter('all')">
          <div class="filter-stat-num">${DataStore.getVideos().length}</div>
          <div class="filter-stat-label">全部</div>
        </div>
        <div class="filter-stat-card green ${this.videoStatusFilter === 'published' ? 'active' : ''}" onclick="App.setVideoStatusFilter('published')">
          <div class="filter-stat-num">${DataStore.getVideos().filter(v => v.status === 'published').length}</div>
          <div class="filter-stat-label">已发布</div>
        </div>
        <div class="filter-stat-card orange ${this.videoStatusFilter === 'review' ? 'active' : ''}" onclick="App.setVideoStatusFilter('review')">
          <div class="filter-stat-num">${DataStore.getVideos().filter(v => v.status === 'review').length}</div>
          <div class="filter-stat-label">审核中</div>
        </div>
        <div class="filter-stat-card blue ${this.videoStatusFilter === 'developing' ? 'active' : ''}" onclick="App.setVideoStatusFilter('developing')">
          <div class="filter-stat-num">${DataStore.getVideos().filter(v => v.status === 'developing').length}</div>
          <div class="filter-stat-label">制作中</div>
        </div>
        <div class="filter-stat-card gray ${this.videoStatusFilter === 'draft_planning' ? 'active' : ''}" onclick="App.setVideoStatusFilter('draft_planning')">
          <div class="filter-stat-num">${DataStore.getVideos().filter(v => v.status === 'draft' || v.status === 'planning').length}</div>
          <div class="filter-stat-label">草稿/规划</div>
        </div>
        <div style="flex:1;"></div>
        <div class="filter-stat-result">
          筛选结果：<strong>${vids.length}</strong> 条
        </div>
      </div>

      <div class="table-card">
        <div class="table-toolbar">
          <div class="table-toolbar-left">
            <input type="text" class="table-search" placeholder="搜索标题/描述/负责人..." value="${this.videoSearch}" 
                   oninput="App.setAdminVideoSearch(this.value)">
            <select class="table-filter" onchange="App.setVideoStatusFilter(this.value)">
              <option value="all" ${this.videoStatusFilter === 'all' ? 'selected' : ''}>全部状态</option>
              <option value="published" ${this.videoStatusFilter === 'published' ? 'selected' : ''}>已发布</option>
              <option value="review" ${this.videoStatusFilter === 'review' ? 'selected' : ''}>审核中</option>
              <option value="developing" ${this.videoStatusFilter === 'developing' ? 'selected' : ''}>制作中</option>
              <option value="draft_planning" ${this.videoStatusFilter === 'draft_planning' ? 'selected' : ''}>—— 草稿/规划 ——</option>
              <option value="planning" ${this.videoStatusFilter === 'planning' ? 'selected' : ''}>规划中</option>
              <option value="draft" ${this.videoStatusFilter === 'draft' ? 'selected' : ''}>草稿</option>
            </select>
            <select class="table-filter" onchange="App.setVideoProductFilter(this.value)">
              <option value="all" ${this.videoProductFilter === 'all' ? 'selected' : ''}>全部产品</option>
              ${products.map(p => `<option value="${p.id}" ${this.videoProductFilter === p.id ? 'selected' : ''}>${this.tr(p.name)}</option>`).join('')}
            </select>
            <button class="btn btn-secondary btn-sm" onclick="App.resetVideoFilters()">重置</button>
          </div>
          <div class="table-toolbar-right">
            <button class="btn btn-secondary btn-sm" onclick="App.downloadVideoTemplate()">📥 下载模板</button>
            <button class="btn btn-secondary btn-sm" onclick="App.showImportVideoModal()">📤 导入Excel</button>
            <button class="btn btn-secondary" onclick="App.exportVideosCSV()">📊 导出明细</button>
            <button class="btn btn-primary" onclick="App.showNewVideoModal()">+ 新建视频</button>
          </div>
        </div>

        <!-- 视频分类筛选标签 -->
        <div class="type-filter-row">
          <span class="type-filter-label">视频分类：</span>
          <div class="type-filter-tags">
            <div class="type-filter-tag ${!this.videoCatFilter || this.videoCatFilter === 'all' ? 'active' : ''}" onclick="App.setVideoCatFilter('all')">
              全部
            </div>
            ${videoCats.map(c => `
              <div class="type-filter-tag ${this.videoCatFilter === c.id ? 'active' : ''} ${c.color}" onclick="App.setVideoCatFilter('${c.id}')">
                <span style="margin-right:4px;">${c.icon}</span>${c.name}
              </div>
            `).join('')}
          </div>
        </div>

        <div class="table-scroll" id="videoTableScroll">
        <table data-col-resize="true">
          <thead>
            <tr>
              <th style="width:40px;"><input type="checkbox" onclick="App.toggleAllVideos(this)"></th>
              <th style="min-width:260px;" class="sortable-th" onclick="App.setVideoTableSort('title')">${this._renderVideoTableSortIndicator('title')}视频</th>
              <th style="min-width:120px;">产品</th>
              <th style="min-width:70px;" class="sortable-th" onclick="App.setVideoTableSort('duration')">${this._renderVideoTableSortIndicator('duration')}时长</th>
              <th style="min-width:80px;" class="sortable-th" onclick="App.setVideoTableSort('status')">${this._renderVideoTableSortIndicator('status')}状态</th>
              <th style="min-width:80px;" class="sortable-th" onclick="App.setVideoTableSort('author')">${this._renderVideoTableSortIndicator('author')}负责人</th>
              <th style="min-width:100px;" class="sortable-th" onclick="App.setVideoTableSort('startDate')">${this._renderVideoTableSortIndicator('startDate')}开始时间</th>
              <th style="min-width:110px;" class="sortable-th" onclick="App.setVideoTableSort('dueDate')">${this._renderVideoTableSortIndicator('dueDate')}预计完成</th>
              <th style="min-width:110px;" class="sortable-th" onclick="App.setVideoTableSort('actualFinishDate')">${this._renderVideoTableSortIndicator('actualFinishDate')}实际完成</th>
              <th style="min-width:110px;" class="sortable-th" onclick="App.setVideoTableSort('updatedAt')">${this._renderVideoTableSortIndicator('updatedAt')}更新时间</th>
              <th style="min-width:130px;">操作</th>
            </tr>
          </thead>
          <tbody>
            ${vids.length === 0 ? `
              <tr>
                <td colspan="11" style="text-align:center;padding:60px;color:var(--gray-400);">
                  🎬 没有找到符合条件的视频
                </td>
              </tr>
            ` : vids.map(v => {
              const product = products.find(p => p.id === v.productId);
              const status = statusMap[v.status] || statusMap.draft;
              // 计算是否逾期
              const today = new Date().toISOString().split('T')[0];
              const isOverdue = v.dueDate && v.status !== 'published' && v.dueDate < today;
              return `
                <tr>
                  <td><input type="checkbox" class="video-check" data-id="${v.id}"></td>
                  <td>
                    <div style="display:flex;align-items:center;gap:12px;">
                      <div style="width:60px;height:40px;background:linear-gradient(135deg,#1f2937,#374151);border-radius:4px;display:flex;align-items:center;justify-content:center;font-size:20px;">
                        ${v.thumbnail}
                      </div>
                      <div>
                        <div style="font-weight:500;color:var(--gray-800);">${this.tr(v.title)}</div>
                        <div style="font-size:12px;color:var(--gray-400);">${v.description.substring(0, 30)}...</div>
                      </div>
                    </div>
                  </td>
                  <td>${product ? product.icon + ' ' + product.name : '-'}</td>
                  <td>${v.duration}</td>
                  <td><span class="badge ${status.class}">${status.label}</span></td>
                  <td>${v.author}</td>
                  <td style="font-size:12px;color:var(--gray-600);">${v.startDate || '—'}</td>
                  <td style="font-size:12px;${isOverdue ? 'color:#dc2626;font-weight:600;' : 'color:var(--gray-600);'}">
                    ${v.dueDate || '—'}
                    ${isOverdue ? '<span style="display:block;font-size:11px;font-weight:400;">⚠️ 已逾期</span>' : ''}
                  </td>
                  <td style="font-size:12px;color:${v.actualFinishDate ? '#059669' : 'var(--gray-400)'};">
                    ${v.actualFinishDate || '—'}
                  </td>
                  <td style="color:var(--gray-500);font-size:13px;">${v.updatedAt}</td>
                  <td>
                    <div class="table-actions">
                      <button class="icon-btn primary" title="编辑" onclick="App.editVideo('${v.id}')">✏️</button>
                      <button class="icon-btn" title="播放" onclick="App.navigate('video', {videoId: '${v.id}'})">▶</button>
                      <button class="icon-btn danger" title="删除" onclick="App.deleteVideo('${v.id}')">🗑</button>
                    </div>
                  </td>
                </tr>
              `;
            }).join('')}
          </tbody>
        </table>
        </div>
        ${vids.length > 0 ? `
          <div style="padding:12px 20px;border-top:1px solid var(--gray-200);display:flex;justify-content:space-between;align-items:center;font-size:13px;color:var(--gray-500);">
            <span>共 ${vids.length} 条记录</span>
            <div style="display:flex;gap:8px;">
              <button class="btn btn-secondary btn-sm" onclick="App.batchPublishVideos()">批量发布</button>
              <button class="btn btn-secondary btn-sm" onclick="App.batchDeleteVideos()">批量删除</button>
            </div>
          </div>
        ` : ''}
      </div>

      <!-- 新建视频模态框 -->
      <div id="newVideoModal" style="display:none;">
        <div class="modal-overlay" onclick="if(event.target===this)App.hideModal('newVideoModal')">
          <div class="modal">
            <div class="modal-header">
              <div class="modal-title">新建视频</div>
              <button class="modal-close" onclick="App.hideModal('newVideoModal')">×</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>视频标题 <span class="required">*</span></label>
                <input type="text" id="newVideoTitle" placeholder="请输入视频标题">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>所属产品 <span class="required">*</span></label>
                  <select id="newVideoProduct">
                    ${products.map(p => `<option value="${p.id}">${this.tr(p.name)}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label>视频分类 <span class="required">*</span></label>
                  <select id="newVideoCategory">
                    ${DataStore.getVideoCategories().map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('')}
                  </select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>视频来源</label>
                  <select id="newVideoType" onchange="document.getElementById('newVideoUrlRow').style.display=this.value==='external'?'flex':'none'">
                    <option value="local">本地上传</option>
                    <option value="external">外部链接</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>时长</label>
                  <input type="text" id="newVideoDuration" placeholder="如：05:30" value="05:00">
                </div>
              </div>
              <div class="form-row" id="newVideoUrlRow" style="display:none;">
                <div class="form-group" style="flex:1;">
                  <label>视频链接</label>
                  <input type="text" id="newVideoUrl" placeholder="B站/优酷等视频链接">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>负责人</label>
                  <select id="newVideoAuthor">
                    ${DataStore.getTeamMembers().map(m => `<option value="${this.tr(m.name)}">${this.tr(m.name)}</option>`).join('')}
                  </select>
                </div>
                <div class="form-group">
                  <label>状态</label>
                  <select id="newVideoStatus">
                    <option value="draft">草稿</option>
                    <option value="planning">规划中</option>
                    <option value="developing">制作中</option>
                    <option value="review">审核中</option>
                    <option value="published">已发布</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label>完成进度 <span id="newVideoProgressVal">0</span>%</label>
                <input type="range" id="newVideoProgress" min="0" max="100" value="0" 
                       oninput="document.getElementById('newVideoProgressVal').textContent=this.value" style="width:100%;">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>开始时间</label>
                  <input type="date" id="newVideoStartDate" value="${new Date().toISOString().split('T')[0]}">
                </div>
                <div class="form-group">
                  <label>预计完成时间</label>
                  <input type="date" id="newVideoDueDate">
                </div>
              </div>
              <div class="form-group">
                <label>实际完成时间</label>
                <input type="date" id="newVideoFinishDate">
                <div style="font-size:12px;color:var(--gray-400);margin-top:4px;">发布时可自动填写</div>
              </div>
              <div class="form-group">
                <label>视频描述</label>
                <textarea id="newVideoDesc" rows="2" placeholder="简要描述视频内容"></textarea>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="App.hideModal('newVideoModal')">取消</button>
              <button class="btn btn-primary" onclick="App.createVideo()">创建</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  showNewVideoModal() {
    document.getElementById('newVideoModal').style.display = 'block';
  },

  createVideo() {
    const title = document.getElementById('newVideoTitle').value.trim();
    if (!title) {
      this.notify('请输入视频标题', 'warning');
      return;
    }
    const productId = document.getElementById('newVideoProduct').value;
    const category = document.getElementById('newVideoCategory').value;
    const videoType = document.getElementById('newVideoType').value;
    const videoUrl = document.getElementById('newVideoUrl')?.value?.trim() || '';
    const duration = document.getElementById('newVideoDuration').value.trim() || '--:--';
    const author = document.getElementById('newVideoAuthor').value;
    const status = document.getElementById('newVideoStatus').value;
    const progress = parseInt(document.getElementById('newVideoProgress').value) || 0;
    const description = document.getElementById('newVideoDesc').value.trim();
    const startDate = document.getElementById('newVideoStartDate').value;
    const dueDate = document.getElementById('newVideoDueDate').value;
    const actualFinishDate = document.getElementById('newVideoFinishDate').value;

    // 根据分类选一个默认缩略图
    const thumbnails = { usage: '▶️', maintenance: '🔧', disassembly: '🔩', troubleshooting: '🔍' };

    DataStore.addVideo({
      title,
      productId,
      category,
      videoType,
      videoUrl,
      duration,
      author,
      status,
      progress,
      description: description || '暂无描述',
      thumbnail: thumbnails[category] || '🎬',
      startDate,
      dueDate,
      actualFinishDate: status === 'published' && !actualFinishDate ? new Date().toISOString().split('T')[0] : actualFinishDate
    });

    // 清空表单
    document.getElementById('newVideoTitle').value = '';
    document.getElementById('newVideoDesc').value = '';
    document.getElementById('newVideoUrl').value = '';
    document.getElementById('newVideoProgress').value = 0;
    document.getElementById('newVideoProgressVal').textContent = '0';

    this.hideModal('newVideoModal');
    this.showToast('视频创建成功');
    this.render();
  },

  deleteVideo(id) {
    if (confirm(this.t('confirm.deleteVideo'))) {
      DataStore.deleteVideo(id);
      this.render();
    }
  },

  // 编辑视频：跳转到视频详情页（与前台查看是同一个入口）
  // （项目暂未提供视频编辑表单，因此直接打开视频详情页作为最近似的"编辑入口"）
  editVideo(id) {
    this.navigate('video', { videoId: id });
  },

  // 编辑产品：弹出产品编辑表单（不走产品详情页）
  editProduct(id) {
    this.showEditProductModal(id);
  },

  // 显示产品编辑模态
  showEditProductModal(id) {
    const p = DataStore.getProductById(id);
    if (!p) {
      this.showToast(this.t('toast.failed'), 'error');
      return;
    }
    this.editingProductId = id;
    this.editingProductCover = p.cover || '';
    this.render();
  },

  closeEditProductModal() {
    const modal = document.getElementById('editProductModal');
    if (modal) modal.remove();
    this.editingProductId = null;
    this.editingProductCover = '';
    // 触发列表刷新（如果在后台产品页）
    if (this.currentRoute === 'admin' && this.currentAdminTab === 'products') {
      this.render();
    }
  },

  // 预览封面
  updateProductCoverPreview(url) {
    this.editingProductCover = url;
    // 仅更新预览区，不全量 render
    const preview = document.getElementById('productCoverPreview');
    if (preview) {
      const removeBtn = url
        ? `<div style="position:absolute;top:6px;right:6px;"><button type="button" onclick="event.stopPropagation();App.removeProductCover()" title="移除封面" style="width:28px;height:28px;border-radius:6px;border:none;background:rgba(0,0,0,0.55);color:white;cursor:pointer;font-size:14px;line-height:1;">×</button></div>`
        : '';
      preview.innerHTML = (url
        ? `<img src="${url}" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.innerHTML='<div style=\\"width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--gray-100);color:var(--gray-400);font-size:12px;\\">图片加载失败</div>'">`
        : '<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:var(--gray-100);color:var(--gray-400);font-size:12px;">无封面</div>')
        + removeBtn;
    }
    // 更新调整按钮显示
    const adjustBtn = document.getElementById('productCoverAdjustBtn');
    if (adjustBtn) {
      adjustBtn.style.display = url && url.startsWith('data:') ? 'flex' : 'none';
    }
    // 更新状态徽章
    const statusBtn = document.getElementById('coverStatusBtn');
    if (statusBtn) {
      const isData = url && url.startsWith('data:');
      statusBtn.style.display = isData ? 'flex' : 'none';
      if (isData) {
        statusBtn.innerHTML = '📦 已嵌入 ' + Math.round(url.length/1024) + 'KB';
        statusBtn.title = '已嵌入 base64 图片（' + url.length + ' 字符），点击切换显示原始 data URL';
      }
    }
  },

  // 处理封面图片上传
  // 切换显示嵌入的 cover URL（让用户看到原始 data URL）
  toggleCoverUrlEdit() {
    const coverInput = document.getElementById('editProductCover');
    if (!coverInput) return;
    const p = DataStore.getProductById(this.editingProductId);
    if (!p || !p.cover) return;
    if (coverInput.dataset.showing === '1') {
      coverInput.value = '';
      coverInput.dataset.showing = '0';
      coverInput.placeholder = 'https://example.com/cover.jpg';
    } else {
      coverInput.value = p.cover;
      coverInput.dataset.showing = '1';
      coverInput.placeholder = '当前嵌入的 data URL（点击隐藏）';
    }
  },

  handleProductCoverUpload(file) {
    if (!file) return;
    // 文件大小限制（5MB）
    if (file.size > 5 * 1024 * 1024) {
      this.showToast(this.t('toast.imageTooLarge'), 'error');
      const fi = document.getElementById('productCoverFile');
      if (fi) fi.value = '';
      return;
    }
    // 校验文件类型
    if (!/^image\/(jpeg|png|webp)$/.test(file.type)) {
      this.showToast('只支持 JPG / PNG / WebP 格式', 'error');
      const fi = document.getElementById('productCoverFile');
      if (fi) fi.value = '';
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const originalW = img.naturalWidth;
        const originalH = img.naturalHeight;
        // 检查是否就是 800×600
        const isExact = originalW === 800 && originalH === 600;
        // 自动调整：保持比例居中裁剪到 800×600
        this.adjustCoverImage(img, originalW, originalH, isExact, file);
      };
      img.onerror = () => {
        this.showToast(this.t('toast.imageLoadFailed'), 'error');
      };
      img.src = e.target.result;
    };
    reader.onerror = () => {
      this.showToast(this.t('toast.fileReadFailed'), 'error');
    };
    reader.readAsDataURL(file);
  },

  // 调整封面图片（居中裁剪到 800×600）
  adjustCoverImage(img, originalW, originalH, isExact, file) {
    const targetW = 800;
    const targetH = 600;

    const canvas = document.createElement('canvas');
    canvas.width = targetW;
    canvas.height = targetH;
    const ctx = canvas.getContext('2d');

    // 计算 cover 模式：保持比例，居中裁剪
    // 等比例缩放：让图片的较小边覆盖目标矩形，较大边超出被裁剪
    const scale = Math.max(targetW / originalW, targetH / originalH);
    const scaledW = originalW * scale;
    const scaledH = originalH * scale;
    const offsetX = (targetW - scaledW) / 2;
    const offsetY = (targetH - scaledH) / 2;

    // 白色背景（避免 PNG 透明区域变黑）
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, targetW, targetH);

    // 绘制图片（高质量缩放）
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, offsetX, offsetY, scaledW, scaledH);

    // 输出为 JPEG 0.85（平衡质量和体积）
    const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

    // 计算文件大小
    const sizeKB = Math.round((dataUrl.length * 3) / 4 / 1024);

    // 更新预览 + 保存 dataURL 到 dataset（不直接写到 input.value 避免 17000 字符的长字符串）
    this.updateProductCoverPreview(dataUrl);
    const coverInput = document.getElementById('editProductCover');
    if (coverInput) {
      // 用 dataset 存 dataURL，input 显示为空，状态徽章显示已嵌入
      coverInput.dataset.cover = dataUrl;
      coverInput.value = '';
      coverInput.dataset.showing = '0';
    }

    // 显示原图信息
    const infoEl = document.getElementById('productCoverInfo');
    if (infoEl) {
      infoEl.style.display = 'block';
      infoEl.innerHTML = `
        <div style="background:var(--gray-50);border-radius:6px;padding:8px;line-height:1.6;">
          📐 原图：<b>${originalW}×${originalH}</b> ${isExact ? '<span style="color:#10b981;">✓ 已是 800×600</span>' : '<span style="color:#f59e0b;">⚠️ 已自动调整</span>'}<br>
          📦 输出：<b>800×600</b> · ${sizeKB} KB · JPEG
        </div>
      `;
    }

    // 通知用户
    if (isExact) {
      this.showToast('✓ 已是 800×600，已直接使用', 'success');
    } else {
      this.showToast(`✓ 已调整 ${originalW}×${originalH} → 800×600`, 'success');
    }
  },

  // 打开封面调整工具（重新调出文件选择 + 重新处理）
  openCoverAdjust() {
    const fi = document.getElementById('productCoverFile');
    if (fi) {
      fi.value = '';
      fi.click();
    }
  },

  // 移除封面
  removeProductCover() {
    this.updateProductCoverPreview('');
    const coverInput = document.getElementById('editProductCover');
    if (coverInput) coverInput.value = '';
    const statusBtn = document.getElementById('coverStatusBtn');
    if (statusBtn) statusBtn.style.display = 'none';
    const infoEl = document.getElementById('productCoverInfo');
    if (infoEl) {
      infoEl.style.display = 'none';
      infoEl.innerHTML = '';
    }
    const fi = document.getElementById('productCoverFile');
    if (fi) fi.value = '';
  },

  saveProductChanges() {
    if (!this.editingProductId) return;
    const name = document.getElementById('editProductName').value.trim();
    const model = document.getElementById('editProductModel').value.trim();
    let category = document.getElementById('editProductCategory').value;
    if (category === '__custom__') {
      category = (document.getElementById('editProductCategoryCustom').value || '').trim();
    }
    const description = document.getElementById('editProductDesc').value.trim();
    const status = document.getElementById('editProductStatus').value;
    const icon = document.getElementById('editProductIcon').value.trim() || '📦';
    // cover 优先从 dataset 读（dataURL 不写入 input.value），其次从 input value（URL 模式）
    const coverInputEl = document.getElementById('editProductCover');
    const cover = (coverInputEl?.dataset?.cover || coverInputEl?.value || '').trim();

    if (!name) {
      this.showToast(this.t('toast.needName'), 'warning');
      return;
    }
    if (!model) {
      this.showToast(this.t('toast.needModel'), 'warning');
      return;
    }
    if (!category) {
      this.showToast(this.t('toast.needCategory'), 'warning');
      return;
    }

    const ok = DataStore.updateProduct(this.editingProductId, {
      name, model, category, description, status, icon, cover
    });

    if (ok) {
      // 失效该产品字段的翻译缓存（下次访问会重新翻译）
      ['name', 'category', 'description'].forEach(f => this._invalidateTrCache(ok[f]));
      // 后台预翻译
      setTimeout(() => {
        [ok.name, ok.category, ok.description].forEach(t => this._scheduleTranslate(t));
        this._saveTrCache();
      }, 200);
      this.showToast(this.t('toast.productSaved') + ' · 4 种语言已同步', 'success');
      this.closeEditProductModal();
    } else {
      this.showToast('保存失败', 'error');
    }
  },

  // 清除某条文本的翻译缓存（修改后调用）
  _invalidateTrCache(text) {
    if (!text || !this._trCache) return;
    ['en-US', 'ja-JP', 'es-ES'].forEach(loc => {
      if (this._trCache[loc]) delete this._trCache[loc][text];
    });
  },

  // 删除产品
  deleteProduct(id) {
    const p = DataStore.getProductById(id);
    if (!p) return;
    if (!confirm(`确定要删除产品「${this.tr(p.name)}」吗？\n关联的文档和视频不会被删除，但将变为游离状态。`)) return;
    DataStore.deleteProduct(id);
    this.showToast(`已删除产品「${this.tr(p.name)}」`);
    this.render();
  },

  // 产品管理搜索/分类筛选
  filterAdminProducts() {
    const searchEl = document.getElementById('productAdminSearch');
    const catEl = document.getElementById('productAdminCategory');
    if (searchEl) this._productSearch = searchEl.value;
    if (catEl) this._productCategoryFilter = catEl.value;
    this.render();
  },

  // ========================================
  // 产品管理
  // ========================================
  renderAdminProducts() {
    const prods = DataStore.getProducts();
    // 从产品中提取所有不同的 category，动态生成分类下拉
    const categories = Array.from(new Set(prods.map(p => p.category))).filter(Boolean);

    return `
      <div class="table-card">
        <div class="table-toolbar">
          <div class="table-toolbar-left">
            <input type="text" class="table-search" id="productAdminSearch" placeholder="搜索产品名称..." oninput="App.filterAdminProducts()" value="${this._productSearch || ''}">
            <select class="table-filter" id="productAdminCategory" onchange="App.filterAdminProducts()">
              <option value="all">全部分类</option>
              ${categories.map(c => `<option value="${c}" ${this._productCategoryFilter === c ? 'selected' : ''}>${c}</option>`).join('')}
            </select>
          </div>
          <div class="table-toolbar-right">
            <button class="btn btn-primary" onclick="App.showNewProductModal()">+ 新建产品</button>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>产品</th>
              <th>分类</th>
              <th>状态</th>
              <th>文档数</th>
              <th>视频数</th>
              <th>创建时间</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            ${prods
              .filter(p => !this._productCategoryFilter || this._productCategoryFilter === 'all' || p.category === this._productCategoryFilter)
              .filter(p => !this._productSearch || p.name.toLowerCase().includes(this._productSearch.toLowerCase()) || (p.description || '').toLowerCase().includes(this._productSearch.toLowerCase()))
              .map(p => `
              <tr>
                <td>
                  <div style="display:flex;align-items:center;gap:12px;">
                    ${p.cover
                      ? `<img src="${p.cover}" style="width:44px;height:44px;border-radius:var(--radius-md);object-fit:cover;flex-shrink:0;">`
                      : `<div style="width:44px;height:44px;background:linear-gradient(135deg,#e0e7ff,#dbeafe);border-radius:var(--radius-md);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;color:var(--primary);flex-shrink:0;">${(p.name || '').substring(0, 2).toUpperCase()}</div>`}
                    <div>
                      <div style="font-weight:600;color:var(--gray-800);">${this.tr(p.name)}</div>
                      <div style="font-size:12px;color:var(--gray-400);">${(p.description || '').substring(0, 30)}...</div>
                    </div>
                  </div>
                </td>
                <td>${p.category}</td>
                <td><span class="badge ${p.status === 'active' ? 'badge-success' : 'badge-warning'}">${p.status === 'active' ? '在售' : '开发中'}</span></td>
                <td>${p.docCount}</td>
                <td>${p.videoCount}</td>
                <td style="color:var(--gray-500);font-size:13px;">${p.createdAt}</td>
                <td>
                  <div class="table-actions">
                    <button class="icon-btn primary" title="编辑" onclick="App.editProduct('${p.id}')">✏️</button>
                    <button class="icon-btn" title="查看" onclick="App.navigate('product', {productId: '${p.id}'})">👁</button>
                    <button class="icon-btn danger" title="删除" onclick="App.deleteProduct('${p.id}')">🗑</button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- 新建产品弹窗 -->
      <div id="newProductModal" style="display:none;">
        <div class="modal-overlay" onclick="if(event.target===this)App.hideModal('newProductModal')">
          <div class="modal" style="max-width:480px;" onclick="event.stopPropagation()">
            <div class="modal-header">
              <div class="modal-title">新建产品</div>
              <button class="modal-close" onclick="App.hideModal('newProductModal')">×</button>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label>产品名称 <span class="required">*</span></label>
                <input type="text" id="newProductName" placeholder="如：ZX-200 智能水泵">
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>分类</label>
                  <input type="text" id="newProductCategory" placeholder="如：流体设备" value="通用">
                </div>
                <div class="form-group">
                  <label>图标 (Emoji)</label>
                  <input type="text" id="newProductIcon" placeholder="📦" value="📦" maxlength="4">
                </div>
              </div>
              <div class="form-group">
                <label>产品描述</label>
                <textarea id="newProductDesc" rows="3" placeholder="简要描述产品功能与特点"></textarea>
              </div>
              <div class="form-group">
                <label>状态</label>
                <select id="newProductStatus">
                  <option value="active">在售</option>
                  <option value="developing">开发中</option>
                </select>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="App.hideModal('newProductModal')">取消</button>
              <button class="btn btn-primary" onclick="App.createProduct()">创建</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  showNewProductModal() {
    const modal = document.getElementById('newProductModal');
    if (modal) modal.style.display = 'block';
  },

  createProduct() {
    const name = document.getElementById('newProductName').value.trim();
    if (!name) {
      this.showToast(this.t('toast.needName'), 'warning');
      return;
    }
    const category = document.getElementById('newProductCategory').value.trim() || '通用';
    const icon = document.getElementById('newProductIcon').value.trim() || '📦';
    const description = document.getElementById('newProductDesc').value.trim() || '暂无描述';
    const status = document.getElementById('newProductStatus').value;

    const created = DataStore.addProduct({ name, category, icon, description, status });
    // 清空表单
    document.getElementById('newProductName').value = '';
    document.getElementById('newProductDesc').value = '';
    document.getElementById('newProductIcon').value = '📦';
    this.hideModal('newProductModal');
    this.render();
    this.showToast(`已创建产品「${created.name}」`);
  },

  // ========================================
  // 团队成员
  // ========================================
  renderAdminTeam() {
    const team = DataStore.getTeamMembers();
    const docs = DataStore.getDocuments();
    const users = DataStore.getUsers();

    const statusMap = {
      online: { label: '在线', dot: 'green' },
      offline: { label: '离线', dot: 'gray' },
      busy: { label: '忙碌', dot: 'yellow' }
    };

    // 按 author 统计实际文档状态分布
    const authorStats = {};
    team.forEach(m => {
      const myDocs = docs.filter(d => d.author === m.name);
      authorStats[m.name] = {
        total: myDocs.length,
        published: myDocs.filter(d => d.status === 'published').length,
        inProgress: myDocs.filter(d => d.status === 'developing' || d.status === 'review').length,
        planning: myDocs.filter(d => d.status === 'planning' || d.status === 'draft').length
      };
    });

    // 匹配团队成员与账号（通过 name 或 username）
    const findAccount = (m) => {
      return users.find(u =>
        u.name === m.name ||
        u.username === m.name ||
        u.username === (m.name || '').toLowerCase().replace(/[^a-z0-9]/g, '') ||
        u.username === `u${m.id?.replace(/[^0-9]/g, '')}`
      );
    };

    return `
      <div style="background:var(--gray-50);border-radius:var(--radius-md);padding:12px 16px;margin-bottom:16px;font-size:13px;color:var(--gray-700);line-height:1.6;">
        💡 <strong>团队成员 ↔ 账号联动：</strong>点击成员卡片的 <code>开通账号</code> / <code>管理角色</code> 按钮，可将其关联到账号系统，分配二级管理员（admin）或成员（member）权限。
      </div>
      <div class="stats-grid" style="grid-template-columns:repeat(3,1fr);">
        ${team.map(m => {
          const status = statusMap[m.status] || statusMap.offline;
          const stats = authorStats[m.name] || { total: m.docs, published: 0, inProgress: 0, planning: 0 };
          const account = findAccount(m);
          const accountBadge = account
            ? `<span style="display:inline-block;padding:2px 8px;font-size:11px;border-radius:10px;background:${account.role === 'root_admin' ? '#fef3c7' : account.role === 'admin' ? '#dbeafe' : '#f3f4f6'};color:${account.role === 'root_admin' ? '#92400e' : account.role === 'admin' ? '#1e40af' : '#374151'};margin-left:6px;">${account.role === 'root_admin' ? '👑根' : account.role === 'admin' ? '🛡管理员' : '👤成员'}</span>`
            : `<span style="display:inline-block;padding:2px 8px;font-size:11px;border-radius:10px;background:var(--gray-100);color:var(--gray-500);margin-left:6px;">未开通</span>`;
          return `
            <div class="stat-card" style="padding:24px;" data-member-id="${m.id}">
              <div style="display:flex;align-items:center;gap:16px;">
                <div style="position:relative;">
                  <div style="width:60px;height:60px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:600;">
                    ${m.avatar}
                  </div>
                  <span style="position:absolute;bottom:4px;right:4px;width:16px;height:16px;border-radius:50%;border:3px solid white;background:var(--${status.dot});"></span>
                </div>
                <div style="flex:1;">
                  <div style="font-size:18px;font-weight:600;color:var(--gray-900);display:flex;align-items:center;">${this.tr(m.name)} ${accountBadge}</div>
                  <div style="font-size:13px;color:var(--gray-500);margin-bottom:4px;">${m.role}</div>
                  <div style="display:flex;align-items:center;gap:4px;font-size:12px;">
                    <span class="status-dot ${status.dot}"></span>
                    <span style="color:var(--gray-500);">${status.label}</span>
                    ${account ? `<span style="color:var(--gray-400);">·</span><span style="color:var(--gray-500);font-size:11px;">@${account.username}</span>` : ''}
                  </div>
                </div>
              </div>
              <div style="margin-top:16px;padding-top:16px;border-top:1px solid var(--gray-100);display:flex;justify-content:space-between;font-size:13px;">
                <div>
                  <div style="color:var(--gray-500);">文档总数</div>
                  <div style="font-weight:600;color:var(--gray-800);font-size:16px;">${stats.total}</div>
                </div>
                <div>
                  <div style="color:var(--gray-500);">已发布</div>
                  <div style="font-weight:600;color:var(--secondary);font-size:16px;">${stats.published}</div>
                </div>
                <div>
                  <div style="color:var(--gray-500);">进行中</div>
                  <div style="font-weight:600;color:var(--warning);font-size:16px;">${stats.inProgress}</div>
                </div>
              </div>
              <div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap;">
                <a href="mailto:${m.id}@gaoxian-robot.com?subject=售后咨询 - ${this.tr(m.name)}" class="btn btn-secondary btn-sm" style="flex:1;min-width:80px;text-decoration:none;text-align:center;font-size:12px;" title="给 ${this.tr(m.name)} 发送邮件">📧 联系</a>
                ${account
                  ? `<button class="btn btn-primary btn-sm" style="flex:1;min-width:80px;font-size:12px;" onclick="App.openMemberAccountModal('${m.id}')" title="修改角色 / 密码 / 删除账号">🛡 管理角色</button>`
                  : `<button class="btn btn-primary btn-sm" style="flex:1;min-width:80px;font-size:12px;" onclick="App.openMemberAccountModal('${m.id}')" title="为此成员开通登录账号">🔑 开通账号</button>`}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;
  },

  // 从团队成员开通/管理账号
  openMemberAccountModal(memberId) {
    const team = DataStore.getTeamMembers();
    const member = team.find(m => m.id === memberId);
    if (!member) {
      this.showToast('成员不存在', 'error');
      return;
    }
    const users = DataStore.getUsers();
    const account = users.find(u => u.name === member.name);

    let modal = document.getElementById('memberAccountModal');
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.id = 'memberAccountModal';
    modal.className = 'modal-overlay';
    modal.onclick = (e) => { if (e.target === modal) modal.remove(); };
    modal.innerHTML = `
      <div class="modal" style="max-width:480px;width:90%;" onclick="event.stopPropagation()">
        <div class="modal-header">
          <div class="modal-title">${account ? '🛡 管理账号' : '🔑 开通账号'}</div>
          <button class="modal-close" onclick="document.getElementById('memberAccountModal').remove()">×</button>
        </div>
        <div class="modal-body">
          <div style="display:flex;align-items:center;gap:14px;padding:12px;background:var(--gray-50);border-radius:var(--radius-md);margin-bottom:16px;">
            <div style="width:48px;height:48px;border-radius:50%;background:var(--primary-light);color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:20px;font-weight:600;flex-shrink:0;">${member.avatar}</div>
            <div>
              <div style="font-weight:600;color:var(--gray-900);">${this.tr(member.name)}</div>
              <div style="font-size:12px;color:var(--gray-500);">${member.role}</div>
            </div>
          </div>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
            <div>
              <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">用户名 *</label>
              <input type="text" id="memberAccUsername" value="${account ? account.username : (member.name || '').toLowerCase().replace(/[^a-z0-9]/g, '') || `u${memberId.replace(/[^0-9]/g, '')}`}" ${account ? '' : ''} style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;color:var(--gray-900);">
            </div>
            <div>
              <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">角色 *</label>
              <select id="memberAccRole" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;color:var(--gray-900);">
                <option value="admin" ${account?.role === 'admin' ? 'selected' : ''}>🛡 管理员（二级）</option>
                <option value="member" ${!account || account?.role === 'member' ? 'selected' : ''}>👤 成员（浏览）</option>
              </select>
            </div>
          </div>

          <div style="margin-bottom:12px;">
            <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">姓名 *</label>
            <input type="text" id="memberAccName" value="${(member.name || '').replace(/"/g, '&quot;')}" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;color:var(--gray-900);">
          </div>

          <div style="margin-bottom:12px;">
            <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">邮箱</label>
            <input type="email" id="memberAccEmail" value="${(account?.email || '').replace(/"/g, '&quot;')}" placeholder="member@example.com" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;color:var(--gray-900);">
          </div>

          <div style="margin-bottom:12px;">
            <label style="font-size:13px;font-weight:600;color:var(--gray-700);display:block;margin-bottom:6px;">${account ? '重置密码（留空不改）' : '初始密码 *'}</label>
            <input type="password" id="memberAccPwd" placeholder="${account ? '留空保持原密码' : '至少 6 位'}" style="width:100%;padding:8px 12px;border:1px solid var(--gray-300);border-radius:var(--radius-md);font-size:14px;background:white;color:var(--gray-900);">
          </div>

          <div style="background:var(--primary-light);border-radius:var(--radius-md);padding:10px 12px;font-size:12px;color:var(--gray-700);line-height:1.5;">
            💡 ${account ? '修改后用户需用新账号密码登录' : '开通后该成员即可登录系统，密码可重置'}
          </div>
        </div>
        <div class="modal-footer" style="display:flex;justify-content:space-between;align-items:center;padding:14px 20px;border-top:1px solid var(--gray-200);background:var(--gray-50);">
          <div>
            ${account ? `<button class="btn btn-secondary" style="background:var(--danger);color:white;border-color:var(--danger);" onclick="App.deleteMemberAccount('${memberId}')">🗑 删除账号</button>` : ''}
          </div>
          <div style="display:flex;gap:10px;">
            <button class="btn btn-secondary" onclick="document.getElementById('memberAccountModal').remove()">取消</button>
            <button class="btn btn-primary" onclick="App.saveMemberAccount('${memberId}')">💾 ${account ? '保存修改' : '开通账号'}</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  },

  // 保存团队成员账号
  saveMemberAccount(memberId) {
    const team = DataStore.getTeamMembers();
    const member = team.find(m => m.id === memberId);
    if (!member) {
      this.showToast('成员不存在', 'error');
      return;
    }
    const users = DataStore.getUsers();
    const existing = users.find(u => u.name === member.name);
    const username = (document.getElementById('memberAccUsername').value || '').trim();
    const role = document.getElementById('memberAccRole').value;
    const name = (document.getElementById('memberAccName').value || '').trim();
    const email = (document.getElementById('memberAccEmail').value || '').trim();
    const pwd = document.getElementById('memberAccPwd').value;

    if (!username || !name) {
      this.showToast('请输入用户名和姓名', 'warning');
      return;
    }
    if (!existing && !pwd) {
      this.showToast('请输入初始密码', 'warning');
      return;
    }
    if (pwd && pwd.length < 6) {
      this.showToast('密码至少 6 位', 'warning');
      return;
    }
    // 检查用户名是否被其他账号占用
    const conflict = users.find(u => u.username === username && u !== existing);
    if (conflict) {
      this.showToast('用户名已被占用', 'error');
      return;
    }

    if (existing) {
      const updates = { username, name, role, email };
      if (pwd) updates.password = pwd;
      DataStore.updateUser(existing.id, updates);
      this.showToast(`已更新 ${name} 的账号（${role === 'admin' ? '管理员' : '成员'}）`, 'success');
    } else {
      DataStore.addUser({
        username,
        password: pwd,
        name,
        role,
        email,
        department: member.role
      });
      this.showToast(`已为 ${name} 开通账号（${role === 'admin' ? '管理员' : '成员'}）`, 'success');
    }
    document.getElementById('memberAccountModal')?.remove();
    this.render();
  },

  // 删除团队成员的账号
  deleteMemberAccount(memberId) {
    const team = DataStore.getTeamMembers();
    const member = team.find(m => m.id === memberId);
    if (!member) return;
    const users = DataStore.getUsers();
    const account = users.find(u => u.name === member.name);
    if (!account) {
      this.showToast('该成员未开通账号', 'info');
      return;
    }
    if (account.role === 'root_admin') {
      this.showToast('根管理员账号不可删除', 'error');
      return;
    }
    if (!confirm(`确定要删除 ${this.tr(member.name)} 的账号吗？\n（${this.tr(member.name)} 本身不会被删除）`)) return;
    DataStore.deleteUser(account.id);
    this.showToast('账号已删除', 'success');
    document.getElementById('memberAccountModal')?.remove();
    this.render();
  },

  // ========================================
  // 账号管理（仅 root_admin）
  // ========================================
  renderAdminUsers() {
    const users = DataStore.getUsers();
    const stats = {
      total: users.length,
      root: users.filter(u => u.role === 'root_admin').length,
      admin: users.filter(u => u.role === 'admin').length,
      member: users.filter(u => u.role === 'member').length
    };
    return `
      <div class="stats-grid" style="grid-template-columns:repeat(4,1fr);margin-bottom:20px;">
        <div class="stat-card" style="background:linear-gradient(135deg,#fef3c7,#fde68a);">
          <div class="stat-card-icon">👑</div>
          <div class="stat-card-label">根管理员</div>
          <div class="stat-card-value" style="color:#92400e;">${stats.root}</div>
          <div class="stat-card-change" style="color:#78350f;">拥有全部权限</div>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,#dbeafe,#bfdbfe);">
          <div class="stat-card-icon">🛡️</div>
          <div class="stat-card-label">二级管理员</div>
          <div class="stat-card-value" style="color:#1e40af;">${stats.admin}</div>
          <div class="stat-card-change" style="color:#1e3a8a;">管理内容权限</div>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,#f3f4f6,#e5e7eb);">
          <div class="stat-card-icon">👤</div>
          <div class="stat-card-label">成员</div>
          <div class="stat-card-value" style="color:#374151;">${stats.member}</div>
          <div class="stat-card-change" style="color:#1f2937;">仅浏览权限</div>
        </div>
        <div class="stat-card" style="background:linear-gradient(135deg,#ede9fe,#ddd6fe);">
          <div class="stat-card-icon">📊</div>
          <div class="stat-card-label">账号总数</div>
          <div class="stat-card-value" style="color:#5b21b6;">${stats.total}</div>
          <div class="stat-card-change" style="color:#4c1d95;">所有角色</div>
        </div>
      </div>

      <div class="table-card">
        <div class="table-toolbar">
          <div class="table-toolbar-left">
            <input type="text" class="table-search" placeholder="搜索用户名/姓名/邮箱..." value="${this._userSearch || ''}" oninput="App.filterAdminUsers(this.value)" style="width:280px;">
          </div>
          <div class="table-toolbar-right">
            <button class="btn btn-secondary btn-sm" onclick="App.resetUsers()">↺ 重置默认账号</button>
            <button class="btn btn-primary" onclick="App.showNewUserModal()">+ 新建账号</button>
          </div>
        </div>
        <div class="table-scroll">
        <table>
          <thead>
            <tr>
              <th style="width:60px;">头像</th>
              <th style="min-width:120px;">用户名</th>
              <th style="min-width:120px;">姓名</th>
              <th style="min-width:80px;">角色</th>
              <th style="min-width:120px;">邮箱</th>
              <th style="min-width:100px;">部门</th>
              <th style="min-width:140px;">上次登录</th>
              <th style="min-width:140px;">创建时间</th>
              <th style="min-width:160px;">操作</th>
            </tr>
          </thead>
          <tbody>
            ${users
              .filter(u => !this._userSearch || (u.username + u.name + (u.email||'')).toLowerCase().includes(this._userSearch.toLowerCase()))
              .map(u => {
                const roleBadge = {
                  root_admin: '<span class="badge" style="background:#fef3c7;color:#92400e;">👑 根管理员</span>',
                  admin: '<span class="badge badge-info">🛡️ 管理员</span>',
                  member: '<span class="badge badge-gray">👤 成员</span>'
                }[u.role] || '<span class="badge badge-gray">' + u.role + '</span>';
                const lastLogin = u.lastLogin ? u.lastLogin.substring(0, 16).replace('T', ' ') : '<span style="color:var(--gray-400);">从未登录</span>';
                return `
                  <tr>
                    <td>
                      <div style="width:40px;height:40px;border-radius:50%;background:var(--primary);color:white;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:600;">${(u.name||u.username).charAt(0)}</div>
                    </td>
                    <td style="font-weight:600;color:var(--gray-800);">${u.username}</td>
                    <td>${this.tr(u.name)}</td>
                    <td>${roleBadge}</td>
                    <td style="color:var(--gray-600);">${u.email || '<span style="color:var(--gray-400);">—</span>'}</td>
                    <td style="color:var(--gray-600);">${u.department || '<span style="color:var(--gray-400);">—</span>'}</td>
                    <td style="font-size:12px;color:var(--gray-500);">${lastLogin}</td>
                    <td style="font-size:12px;color:var(--gray-500);">${u.createdAt || '—'}</td>
                    <td>
                      <div class="table-actions">
                        <button class="icon-btn" title="编辑" onclick="App.editUserWithId('${u.id}')">✏️</button>
                        <button class="icon-btn" title="修改密码" onclick="App.showChangePasswordModal('${u.id}')">🔑</button>
                        ${u.role === 'root_admin' ? '<span style="font-size:11px;color:var(--gray-400);padding:0 4px;" title="根管理员不可删除">🔒</span>' : `<button class="icon-btn danger" title="删除" onclick="App.deleteUserConfirm('${u.id}')">🗑</button>`}
                      </div>
                    </td>
                  </tr>
                `;
              }).join('')}
          </tbody>
        </table>
        </div>
      </div>

      <!-- 新建/编辑账号模态 -->
      <div id="userModal" style="display:none;">
        <div class="modal-overlay" onclick="if(event.target===this)App.closeUserModal()">
          <div class="modal" style="max-width:520px;" onclick="event.stopPropagation()">
            <div class="modal-header">
              <div class="modal-title" id="userModalTitle">新建账号</div>
              <button class="modal-close" onclick="App.closeUserModal()">×</button>
            </div>
            <div class="modal-body">
              <div class="form-row">
                <div class="form-group">
                  <label>用户名 <span class="required">*</span></label>
                  <input type="text" id="newUserUsername" placeholder="登录用户名（唯一）">
                </div>
                <div class="form-group">
                  <label>姓名 <span class="required">*</span></label>
                  <input type="text" id="newUserName" placeholder="显示名称">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label>角色 <span class="required">*</span></label>
                  <select id="newUserRole">
                    <option value="admin">🛡️ 二级管理员（管理内容）</option>
                    <option value="member">👤 成员（仅浏览）</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>部门</label>
                  <input type="text" id="newUserDept" placeholder="例如：技术部">
                </div>
              </div>
              <div class="form-group">
                <label>邮箱</label>
                <input type="email" id="newUserEmail" placeholder="可选：user@example.com">
              </div>
              <div class="form-group" id="newUserPasswordGroup">
                <label>密码 <span class="required">*</span></label>
                <input type="text" id="newUserPassword" placeholder="至少 6 位" value="123456">
                <div style="font-size:12px;color:var(--gray-500);margin-top:4px;">默认 123456，建议让用户首次登录后自行修改</div>
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="App.closeUserModal()">取消</button>
              <button class="btn btn-primary" onclick="App.submitUser()">保存</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 修改密码模态 -->
      <div id="passwordModal" style="display:none;">
        <div class="modal-overlay" onclick="if(event.target===this)App.closePasswordModal()">
          <div class="modal" style="max-width:420px;" onclick="event.stopPropagation()">
            <div class="modal-header">
              <div class="modal-title">🔑 修改密码</div>
              <button class="modal-close" onclick="App.closePasswordModal()">×</button>
            </div>
            <div class="modal-body">
              <div style="background:var(--primary-light);border-radius:var(--radius-md);padding:10px 12px;margin-bottom:14px;font-size:13px;">
                账号：<strong id="passwordTargetName">—</strong>
              </div>
              <div class="form-group">
                <label>新密码 <span class="required">*</span></label>
                <input type="text" id="newPasswordValue" placeholder="至少 6 位">
              </div>
            </div>
            <div class="modal-footer">
              <button class="btn btn-secondary" onclick="App.closePasswordModal()">取消</button>
              <button class="btn btn-primary" onclick="App.submitChangePassword()">修改</button>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  filterAdminUsers(val) {
    this._userSearch = val;
    this.render();
  },

  showNewUserModal() {
    document.getElementById('userModalTitle').textContent = '新建账号';
    document.getElementById('newUserUsername').value = '';
    document.getElementById('newUserUsername').disabled = false;
    document.getElementById('newUserName').value = '';
    document.getElementById('newUserRole').value = 'admin';
    document.getElementById('newUserDept').value = '';
    document.getElementById('newUserEmail').value = '';
    document.getElementById('newUserPassword').value = '123456';
    document.getElementById('newUserPasswordGroup').style.display = 'block';
    document.getElementById('userModal').dataset.editId = '';
    document.getElementById('userModal').style.display = 'block';
  },

  editUserWithId(userId) {
    const u = DataStore.getUserById(userId);
    if (!u) return;
    document.getElementById('userModalTitle').textContent = '编辑账号 - ' + u.username;
    document.getElementById('newUserUsername').value = u.username;
    document.getElementById('newUserUsername').disabled = true;
    document.getElementById('newUserName').value = u.name;
    const roleSelect = document.getElementById('newUserRole');
    roleSelect.innerHTML = u.role === 'root_admin'
      ? '<option value="root_admin">👑 根管理员</option>'
      : '<option value="admin">🛡️ 二级管理员</option><option value="member">👤 成员</option>';
    roleSelect.value = u.role;
    document.getElementById('newUserDept').value = u.department || '';
    document.getElementById('newUserEmail').value = u.email || '';
    document.getElementById('newUserPasswordGroup').style.display = 'none';
    document.getElementById('userModal').dataset.editId = userId;
    document.getElementById('userModal').style.display = 'block';
  },

  closeUserModal() {
    document.getElementById('userModal').style.display = 'none';
  },

  submitUser() {
    const modal = document.getElementById('userModal');
    const editId = modal.dataset.editId;
    const isEdit = !!editId;
    const username = (document.getElementById('newUserUsername').value || '').trim();
    const name = (document.getElementById('newUserName').value || '').trim();
    const role = document.getElementById('newUserRole').value;
    const dept = (document.getElementById('newUserDept').value || '').trim();
    const email = (document.getElementById('newUserEmail').value || '').trim();
    const password = document.getElementById('newUserPassword').value || '';

    if (!username) { this.showToast('请输入用户名', 'warning'); return; }
    if (!name) { this.showToast('请输入姓名', 'warning'); return; }
    if (!isEdit && password.length < 6) { this.showToast('密码至少 6 位', 'warning'); return; }

    if (isEdit) {
      const r = DataStore.updateUser(editId, { name, role, department: dept, email });
      if (r.ok) {
        this.showToast('账号已更新');
        this.closeUserModal();
        this.render();
      } else {
        this.showToast(r.error, 'error');
      }
    } else {
      const r = DataStore.addUser({
        username, password, name, role,
        department: dept, email,
        createdBy: this.currentUser ? this.currentUser.id : ''
      });
      if (r.ok) {
        this.showToast(`已创建账号 ${r.user.username}`);
        this.closeUserModal();
        this.render();
      } else {
        this.showToast(r.error, 'error');
      }
    }
  },

  deleteUserConfirm(userId) {
    const u = DataStore.getUserById(userId);
    if (!u) return;
    if (!confirm(`确定要删除账号「${u.username}」吗？\n此操作不可恢复。`)) return;
    const r = DataStore.deleteUser(userId);
    if (r.ok) {
      this.showToast('账号已删除');
      this.render();
    } else {
      this.showToast(r.error, 'error');
    }
  },

  showChangePasswordModal(userId) {
    const u = DataStore.getUserById(userId);
    if (!u) return;
    document.getElementById('passwordTargetName').textContent = u.username + ' (' + u.name + ')';
    document.getElementById('newPasswordValue').value = '';
    document.getElementById('passwordModal').dataset.userId = userId;
    document.getElementById('passwordModal').style.display = 'block';
  },

  closePasswordModal() {
    document.getElementById('passwordModal').style.display = 'none';
  },

  submitChangePassword() {
    const id = document.getElementById('passwordModal').dataset.userId;
    const newPwd = document.getElementById('newPasswordValue').value || '';
    const r = DataStore.changePassword(id, newPwd);
    if (r.ok) {
      this.showToast('密码已修改');
      this.closePasswordModal();
    } else {
      this.showToast(r.error, 'error');
    }
  },

  resetUsers() {
    if (!confirm('确定要重置所有账号吗？\n所有自定义账号将被删除，恢复到默认的 3 个演示账号。')) return;
    DataStore.resetUsers();
  },

  // ========================================
  // 富文本编辑器
  // ========================================
  openEditor(docId) {
    // 重置状态：进入新文档时从头开始
    this.editorDocId = docId;
    this.editorPageIndex = 0;
    this.currentRoute = 'editor';
    // 如果之前激活过格式刷，进入新文档时清理
    if (this._formatPainterActive) {
      this._formatPainterActive = false;
      document.body.style.cursor = '';
    }
    this.renderEditorPage();
  },

  renderEditorPage() {
    const doc = DataStore.getDocById(this.editorDocId);
    if (!doc) {
      this.navigate('admin', { adminTab: 'docs' });
      return;
    }

    const products = DataStore.getProducts();
    const docTypes = DataStore.getDocTypes();
    const pageIdx = this.editorPageIndex;
    // 合并所有页为连续 HTML（连续编辑模式）
    const allContent = (doc.content || []);
    let currentPage = { html: '' };
    if (allContent.length === 1) {
      currentPage = allContent[0];
    } else if (allContent.length > 1) {
      // 多页文档：合并为连续 HTML（页与页之间加分页符）
      currentPage.html = allContent.map(p => p.html || '').join('\n<div class="editor-page-break"></div>\n');
    }

    const app = document.getElementById('app');
    app.innerHTML = `
      ${this.renderNavbar('admin')}
      <div class="gdocs-editor">
        <!-- Google Docs 风格：文档标题栏（替代旧的"编辑文档"大标题） -->
        <div class="gdocs-doc-header">
          <div class="gdocs-doc-header-left">
            <button class="gdocs-icon-btn" onclick="App.saveAndExitEditor()" title="返回">←</button>
            <input type="text" class="gdocs-doc-title-input" value="${this.tr(doc.title).replace(/"/g, '&quot;')}"
                   onchange="App.updateEditorDocTitle(this.value)" placeholder="无标题文档">
            <span class="gdocs-page-badge" id="gdocsDocPageBadge">第 1 / 1 页</span>
            <span class="gdocs-save-status" id="gdocsSaveStatus">已保存</span>
          </div>
          <div class="gdocs-doc-header-right">
            <button class="gdocs-icon-btn" onclick="App.toggleGdocsMenu('file')" title="文件">📄</button>
            <button class="gdocs-icon-btn" onclick="App.previewDoc('${doc.id}')" title="预览">👁</button>
            <button class="gdocs-icon-btn" onclick="App.saveDoc()" title="保存 (Ctrl+S)">💾</button>
            <button class="gdocs-publish-btn" onclick="App.publishDoc()" title="发布">发布</button>
          </div>
        </div>

        <!-- 手动分页 tabs -->
        <div class="gdocs-page-tabs" id="gdocsPageTabs">
          <!-- JS 渲染 -->
        </div>

        <!-- Google Docs 风格：菜单栏（点击下拉） -->
        <div class="gdocs-menubar">
          <div class="gdocs-menu-item" onclick="App.toggleGdocsMenu('file')" data-menu="file">文件</div>
          <div class="gdocs-menu-item" onclick="App.toggleGdocsMenu('edit')" data-menu="edit">编辑</div>
          <div class="gdocs-menu-item" onclick="App.toggleGdocsMenu('view')" data-menu="view">查看</div>
          <div class="gdocs-menu-item" onclick="App.toggleGdocsMenu('insert')" data-menu="insert">插入</div>
          <div class="gdocs-menu-item" onclick="App.toggleGdocsMenu('format')" data-menu="format">格式</div>
          <div class="gdocs-menu-item" onclick="App.toggleGdocsMenu('tools')" data-menu="tools">工具</div>
          <div class="gdocs-menu-item" onclick="App.toggleGdocsMenu('help')" data-menu="help">帮助</div>
        </div>

        <!-- Google Docs 风格：单行主工具栏 -->
        <div class="gdocs-toolbar">
          <button class="gdocs-icon-btn" onclick="App.execCmd('undo')" title="撤销 (Ctrl+Z)">↶</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('redo')" title="重做 (Ctrl+Y)">↷</button>
          <div class="gdocs-toolbar-sep"></div>
          <select class="gdocs-font-select" onchange="App.execFormat('fontName', this.value)" title="字体">
            <option value="Noto Sans CJK SC">微软雅黑</option>
            <option value="SimSun">宋体</option>
            <option value="SimHei">黑体</option>
            <option value="KaiTi">楷体</option>
            <option value="FangSong">仿宋</option>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Courier New">Courier New</option>
          </select>
          <select class="gdocs-size-select" onchange="App.execFormat('fontSize', this.value)" title="字号">
            <option value="1">10</option>
            <option value="2">13</option>
            <option value="3" selected>16</option>
            <option value="4">18</option>
            <option value="5">24</option>
            <option value="6">32</option>
            <option value="7">48</option>
          </select>
          <div class="gdocs-toolbar-sep"></div>
          <select class="gdocs-style-select" id="headingSelect" onchange="App.execFormat('formatBlock', this.value)" title="样式">
            <option value="p">正文</option>
            <option value="h1">标题 1</option>
            <option value="h2">标题 2</option>
            <option value="h3">标题 3</option>
            <option value="h4">标题 4</option>
            <option value="blockquote">引用</option>
            <option value="pre">代码块</option>
          </select>
          <div class="gdocs-toolbar-sep"></div>
          <button class="gdocs-icon-btn gdocs-bold" onclick="App.execCmd('bold')" title="加粗 (Ctrl+B)"><b>B</b></button>
          <button class="gdocs-icon-btn gdocs-italic" onclick="App.execCmd('italic')" title="斜体 (Ctrl+I)"><i>I</i></button>
          <button class="gdocs-icon-btn gdocs-underline" onclick="App.execCmd('underline')" title="下划线 (Ctrl+U)"><u>U</u></button>
          <button class="gdocs-icon-btn gdocs-strike" onclick="App.execCmd('strikeThrough')" title="删除线"><s>S</s></button>
          <div class="gdocs-toolbar-sep"></div>
          <button class="gdocs-icon-btn" onclick="App.pickColor('foreColor')" title="字体颜色">
            <span style="color:#dc2626;text-decoration:underline;text-decoration-color:#dc2626;font-weight:600;">A</span>
          </button>
          <button class="gdocs-icon-btn" onclick="App.pickColor('hiliteColor')" title="背景颜色">
            <span style="background:#fef3c7;padding:0 4px;border-radius:2px;font-weight:600;">A</span>
          </button>
          <div class="gdocs-toolbar-sep"></div>
          <button class="gdocs-icon-btn" onclick="App.execCmd('justifyLeft')" title="左对齐">⬅</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('justifyCenter')" title="居中">⬌</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('justifyRight')" title="右对齐">➡</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('justifyFull')" title="两端对齐">☰</button>
          <div class="gdocs-toolbar-sep"></div>
          <button class="gdocs-icon-btn" onclick="App.execCmd('insertUnorderedList')" title="无序列表">• ≡</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('insertOrderedList')" title="有序列表">1. ≡</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('indent')" title="增加缩进">⇥</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('outdent')" title="减少缩进">⇤</button>
          <div class="gdocs-toolbar-sep"></div>
          <button class="gdocs-icon-btn" onclick="App.insertTable(event)" title="插入表格">📊</button>
          <button class="gdocs-icon-btn" onclick="App.insertLink()" title="插入链接">🔗</button>
          <button class="gdocs-icon-btn" onclick="App.insertImage()" title="插入图片">🖼</button>
          <button class="gdocs-icon-btn" onclick="App.insertVideo()" title="插入视频">🎬</button>
          <button class="gdocs-icon-btn" onclick="App.insertAttachment()" title="插入附件">📎</button>
          <div class="gdocs-toolbar-sep"></div>
          <button class="gdocs-icon-btn" onclick="App.insertPageBreak()" title="分页符 (Ctrl+Enter)">↵</button>
          <button class="gdocs-icon-btn" onclick="App.findAndReplace()" title="查找替换 (Ctrl+H)">🔍</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('removeFormat')" title="清除格式">✕</button>
          <button class="gdocs-icon-btn" onclick="App.toggleFormatPainter()" title="格式刷">🖌</button>
          <button class="gdocs-icon-btn" onclick="App.selectAllContent()" title="全选 (Ctrl+A)">📝</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('subscript')" title="下标">X₂</button>
          <button class="gdocs-icon-btn" onclick="App.execCmd('superscript')" title="上标">X²</button>
          <button class="gdocs-icon-btn" onclick="App.setLineHeight()" title="行间距">☰</button>
          <button class="gdocs-icon-btn" onclick="App.setParagraphSpacing()" title="段落间距">↕</button>
          <div class="gdocs-toolbar-sep"></div>
          <!-- 块插入菜单（4种提示框/步骤块/工具清单/引用/代码/分割线/日期/时间/符号） -->
          <div class="gdocs-menu-wrapper">
            <button class="gdocs-icon-btn" onclick="App.toggleGdocsMenu('insert-block')" title="插入块 ▾">▦ ▾</button>
            <div class="gdocs-dropdown" id="gdocs-menu-insert-block" style="display:none;">
              <div class="gdocs-dropdown-item" onclick="App.insertInfoBox()">💡 提示框（蓝色）</div>
              <div class="gdocs-dropdown-item" onclick="App.insertWarningBox()">⚠️ 警告框（黄色）</div>
              <div class="gdocs-dropdown-item" onclick="App.insertSuccessBox()">✅ 成功框（绿色）</div>
              <div class="gdocs-dropdown-item" onclick="App.insertDangerBox()">⛔ 危险框（红色）</div>
              <div class="gdocs-dropdown-sep"></div>
              <div class="gdocs-dropdown-item" onclick="App.insertStepBlock()">① 维修步骤块</div>
              <div class="gdocs-dropdown-item" onclick="App.insertToolList()">🛠 工具清单</div>
              <div class="gdocs-dropdown-sep"></div>
              <div class="gdocs-dropdown-item" onclick="App.insertBlockquote()">❝ 引用块</div>
              <div class="gdocs-dropdown-item" onclick="App.insertCodeBlock()">{ } 代码块</div>
              <div class="gdocs-dropdown-item" onclick="App.insertHr()">― 分割线</div>
              <div class="gdocs-dropdown-sep"></div>
              <div class="gdocs-dropdown-item" onclick="App.insertDate()">📅 日期</div>
              <div class="gdocs-dropdown-item" onclick="App.insertTime()">⏰ 时间</div>
              <div class="gdocs-dropdown-item" onclick="App.insertSymbol()">Ω 特殊符号</div>
            </div>
          </div>
        </div>

        <!-- 标尺 + 边距控制 -->
        <div class="gdocs-ruler-wrap">
          <div class="gdocs-ruler" id="editorRuler">
            <div class="gdocs-ruler-labels">
              <span>0</span><span>2cm</span><span>4cm</span><span>6cm</span><span>8cm</span>
            </div>
            <div class="gdocs-margin-control">
              <span>页边距</span>
              <button onclick="App.changeDocMargin(-8)" title="减小页边距">−</button>
              <span class="gdocs-margin-value" id="marginControlValue">24mm</span>
              <button onclick="App.changeDocMargin(8)" title="加大页边距">+</button>
              <button onclick="App.resetDocMargin()" title="重置" style="font-size:10px;width:auto;padding:0 6px;">↺</button>
            </div>
          </div>
        </div>

        <!-- 文档内容区（白纸 + 阴影，Google Docs 风格） -->
        <div class="gdocs-doc-area">
          <div class="gdocs-doc-content-wrap">
            <div class="editor-content editor-content-continuous" id="editorContent" contenteditable="true">
              ${currentPage.html}
          </div>
        </div>

        <!-- Google Docs 风格：底部状态栏 -->
        <div class="gdocs-statusbar" id="gdocsStatusBar">
          <span>第 <b id="editorCurrentPage">1</b> / <b id="editorTotalPages">1</b> 页</span>
          <span class="gdocs-statusbar-sep">·</span>
          <span>字数 <b id="wordCount">0</b></span>
          <span class="gdocs-statusbar-sep">·</span>
          <span>段落 <b id="paraCount">0</b></span>
          <span style="margin-left:auto;display:flex;align-items:center;gap:6px;">
            <button class="gdocs-icon-btn" onclick="App.toggleQuillMode()" title="切换 Quill 高级编辑器（Google Docs 风格）" id="quillToggleBtn" style="font-size:11px;padding:6px 12px;background:#e8f0fe;color:#1967d2;border:1px solid #dadce0;">⚡ Quill 高级模式</button>
            <button class="gdocs-icon-btn" onclick="App.zoomEditor(-10)" title="缩小">⊖</button>
            <span class="gdocs-zoom-value" id="gdocsZoomValue">100%</span>
            <button class="gdocs-icon-btn" onclick="App.zoomEditor(10)" title="放大">⊕</button>
          </span>
        </div>
      </div>

      <!-- Google Docs 风格：菜单下拉（点击菜单项时显示） -->
      <div class="gdocs-menu-dropdown" id="gdocs-menu-dropdown" style="display:none;"></div>

      <!-- 表格工具栏（光标在表格内时显示） -->
      <div class="gdocs-table-toolbar" id="tableToolbar" style="display:none;">
        <button class="gdocs-icon-btn" onclick="App.insertTableRowAbove()" title="上方插入行">⬆行</button>
        <button class="gdocs-icon-btn" onclick="App.insertTableRowBelow()" title="下方插入行">⬇行</button>
        <button class="gdocs-icon-btn" onclick="App.insertTableColLeft()" title="左侧插入列">⬅列</button>
        <button class="gdocs-icon-btn" onclick="App.insertTableColRight()" title="右侧插入列">➡列</button>
        <div class="gdocs-toolbar-sep"></div>
        <button class="gdocs-icon-btn" onclick="App.deleteTableRow()" title="删除行" style="color:#dc2626;">✕行</button>
        <button class="gdocs-icon-btn" onclick="App.deleteTableCol()" title="删除列" style="color:#dc2626;">✕列</button>
        <button class="gdocs-icon-btn" onclick="App.deleteTable()" title="删除整表" style="color:#dc2626;">🗑表</button>
        <div class="gdocs-toolbar-sep"></div>
        <button class="gdocs-icon-btn" onclick="App.mergeTableCells()" title="合并单元格">⊞ 合并</button>
        <button class="gdocs-icon-btn" onclick="App.showTableProperties()" title="表格属性">⚙ 属性</button>
      </div>

      <!-- 文档属性侧边面板（默认隐藏，菜单里"文件 > 文档属性"打开） -->
      <div class="gdocs-properties-panel" id="gdocsPropertiesPanel" style="display:none;">
        <div class="gdocs-panel-header">
          <span>文档属性</span>
          <button class="gdocs-icon-btn" onclick="App.toggleGdocsMenu('properties')">✕</button>
        </div>
        <div class="gdocs-panel-body">
          <div class="gdocs-panel-field">
            <label>文档标题</label>
            <input type="text" id="editDocTitle" value="${this.tr(doc.title)}">
          </div>
          <div class="gdocs-panel-field">
            <label>所属产品</label>
            <select id="editDocProduct">
              ${products.map(p => `<option value="${p.id}" ${p.id === doc.productId ? 'selected' : ''}>${this.tr(p.name)}</option>`).join('')}
            </select>
          </div>
          <div class="gdocs-panel-field">
            <label>文档类型</label>
            <select id="editDocType">
              ${docTypes.map(t => `<option value="${t.id}" ${t.id === doc.type ? 'selected' : ''}>${t.icon} ${t.name}</option>`).join('')}
            </select>
          </div>
          <div class="gdocs-panel-field">
            <label>负责人</label>
            <input type="text" id="editDocAuthor" value="${doc.author}">
          </div>
          <div class="gdocs-panel-field">
            <label>状态</label>
            <select id="editDocStatus">
              <option value="draft" ${doc.status === 'draft' ? 'selected' : ''}>草稿</option>
              <option value="planning" ${doc.status === 'planning' ? 'selected' : ''}>规划中</option>
              <option value="developing" ${doc.status === 'developing' ? 'selected' : ''}>开发中</option>
              <option value="review" ${doc.status === 'review' ? 'selected' : ''}>审核中</option>
              <option value="published" ${doc.status === 'published' ? 'selected' : ''}>已发布</option>
            </select>
          </div>
          <div class="gdocs-panel-field">
            <label>完成进度</label>
            <input type="range" id="editDocProgressRange" value="${doc.progress}" min="0" max="100"
                   style="width:100%;" oninput="document.getElementById('editDocProgress').value=this.value">
            <div style="text-align:center;font-size:13px;color:var(--gray-600);margin-top:2px;">
              <span id="editDocProgress">${doc.progress}</span>%
            </div>
          </div>
          <div class="gdocs-panel-divider">📅 时间管理</div>
          <div class="gdocs-panel-field">
            <label>开始时间</label>
            <input type="date" id="editDocStartDate" value="${doc.startDate || ''}">
          </div>
          <div class="gdocs-panel-field">
            <label>预计完成时间</label>
            <input type="date" id="editDocDueDate" value="${doc.dueDate || ''}">
          </div>
          <div class="gdocs-panel-field">
            <label>实际完成时间</label>
            <input type="date" id="editDocFinishDate" value="${doc.actualFinishDate || ''}">
          </div>
          <div class="gdocs-panel-field">
            <label>文档描述</label>
            <textarea id="editDocDesc" rows="3">${doc.description}</textarea>
          </div>
          <div class="gdocs-panel-divider">🔧 维修信息</div>
          <div class="gdocs-panel-field">
            <label>难度等级</label>
            <select id="editDocDifficulty">
              <option value="easy" ${doc.difficulty === 'easy' ? 'selected' : ''}>⭐ 简单</option>
              <option value="medium" ${doc.difficulty === 'medium' ? 'selected' : ''}>⭐⭐ 中等</option>
              <option value="hard" ${doc.difficulty === 'hard' ? 'selected' : ''}>⭐⭐⭐ 困难</option>
              <option value="expert" ${doc.difficulty === 'expert' ? 'selected' : ''}>⭐⭐⭐⭐ 专家</option>
            </select>
          </div>
          <div class="gdocs-panel-field">
            <label>预计用时</label>
            <input type="text" id="editDocTime" value="${doc.estimatedTime || ''}" placeholder="如：30分钟、2小时">
          </div>
          <div class="gdocs-panel-field">
            <label>所需工具（每行一个）</label>
            <textarea id="editDocTools" rows="4" placeholder="活动扳手&#10;十字螺丝刀&#10;...">${(doc.tools || []).join('\n')}</textarea>
          </div>
          <div class="gdocs-panel-field">
            <label>所需配件（每行一个）</label>
            <textarea id="editDocParts" rows="4" placeholder="机械密封组件&#10;O型密封圈&#10;...">${(doc.parts || []).join('\n')}</textarea>
          </div>
        </div>
      </div>
    `;

    // 绑定编辑器事件
    const editor = document.getElementById('editorContent');
    if (editor) {
      editor.focus();
      // 绑定菜单外部点击关闭 + 触发元素追踪
      this._setupGdocsMenuOutsideClick();
      this._bindMenuTriggers();
      // 工具栏按钮会在 click 前夺走编辑器焦点。先在 mousedown 阶段
      // 记录选区，才能让格式和插入命令始终作用在用户原来的光标位置。
      this._bindEditorToolbarSelection(editor);
      // 初始统计
      this.updateWordCount();
      // 应用页边距
      this._applyDocMargin();
      // 自动保存 + 字数统计 + 表格工具栏切换
      const updateEditorState = () => {
        this.updateWordCount();
        this.toggleTableToolbar();
        // 手动分页模式：不再自动分页（用户主动控制）
        // 刷新大纲面板（如果打开着）
        if (document.getElementById('gdocsOutlinePanel') && !document.getElementById('gdocsOutlinePanel').classList.contains('hidden')) {
          this._refreshOutline();
        }
        // 简单的防抖自动保存逻辑
        this.setSaveStatusUI && this.setSaveStatusUI('unsaved');
        if (this._saveTimer) clearTimeout(this._saveTimer);
        this._saveTimer = setTimeout(() => {
          this.setSaveStatusUI('saving');
          this.autoSaveCurrentPage();
          setTimeout(() => this.setSaveStatusUI('saved'), 500);
        }, 3000);
      };
      editor.addEventListener('input', updateEditorState);
      editor.addEventListener('keyup', () => this.toggleTableToolbar());
      editor.addEventListener('mouseup', () => this.toggleTableToolbar());
      editor.addEventListener('click', () => this.toggleTableToolbar());
      // 滚动监听：更新状态栏页码指示（Word 风格）
      editor.addEventListener('scroll', () => this.updateEditorPageIndicator());
      // 初始化页码指示
      setTimeout(() => this.updateEditorPageIndicator(), 200);

      // 键盘快捷键
      editor.addEventListener('keydown', (e) => {
        const ctrl = e.ctrlKey || e.metaKey;
        // Ctrl/Cmd + Enter 插入分页符（Word 风格）
        if (ctrl && e.key === 'Enter') {
          e.preventDefault();
          this.insertPageBreak();
          return;
        }
        // Ctrl/Cmd + S 保存
        if (ctrl && e.key === 's') {
          e.preventDefault();
          this.saveDoc();
          this.showToast('文档已保存');
          return;
        }
        // Ctrl/Cmd + Shift + T 翻译
        if (ctrl && e.shiftKey && (e.key === 't' || e.key === 'T')) {
          e.preventDefault();
          this.showTranslationDialog();
          return;
        }
        // Ctrl/Cmd + H 查找替换
        if (ctrl && e.key === 'h') {
          e.preventDefault();
          this.findAndReplace();
          return;
        }
        // Ctrl/Cmd + B 加粗
        if (ctrl && e.key === 'b') {
          e.preventDefault();
          this.execCmd('bold');
          return;
        }
        // Ctrl/Cmd + I 斜体
        if (ctrl && e.key === 'i') {
          e.preventDefault();
          this.execCmd('italic');
          return;
        }
        // Ctrl/Cmd + U 下划线
        if (ctrl && e.key === 'u') {
          e.preventDefault();
          this.execCmd('underline');
          return;
        }
        // Ctrl/Cmd + Z 撤销（让浏览器处理）
        // Ctrl/Cmd + Y / Ctrl+Shift+Z 重做（让浏览器处理）
        // Ctrl/Cmd + K / Ctrl+L 插入链接
        if (ctrl && (e.key === 'k' || e.key === 'l')) {
          e.preventDefault();
          this.insertLink();
          return;
        }
        // Ctrl/Cmd + A 全选（在 contentEditable 内默认行为是选整个文档，但有时失效；显式处理）
        if (ctrl && e.key === 'a') {
          e.preventDefault();
          this.selectAllContent();
          return;
        }
        // Tab 键在表格内跳转单元格
        if (e.key === 'Tab') {
          const cell = this.getCurrentTableCell();
          if (cell) {
            e.preventDefault();
            const row = cell.parentNode;
            const table = row.closest('table');
            const rowIdx = row.rowIndex;
            const cellIdx = cell.cellIndex;
            const totalRows = table.rows.length;
            const totalCols = row.cells.length;

            if (e.shiftKey) {
              // Shift+Tab: 上一个单元格
              if (cellIdx > 0) {
                row.cells[cellIdx - 1].focus();
              } else if (rowIdx > 0) {
                table.rows[rowIdx - 1].cells[totalCols - 1].focus();
              }
            } else {
              // Tab: 下一个单元格
              if (cellIdx < totalCols - 1) {
                row.cells[cellIdx + 1].focus();
              } else if (rowIdx < totalRows - 1) {
                table.rows[rowIdx + 1].cells[0].focus();
              } else {
                // 最后一行最后一列，新增一行
                this.insertTableRowBelow();
              }
            }
            return;
          }
        }
        // Enter 键在表格内新增行
        if (e.key === 'Enter') {
          const cell = this.getCurrentTableCell();
          if (cell && !e.shiftKey) {
            // 如果是最后一个单元格且内容为空，新增行
            const row = cell.parentNode;
            const table = row.closest('table');
            const rowIdx = row.rowIndex;
            const cellIdx = cell.cellIndex;
            const totalRows = table.rows.length;
            const totalCols = row.cells.length;

            if (rowIdx === totalRows - 1 && cellIdx === totalCols - 1) {
              const text = cell.innerText.trim();
              if (text === '' || text === '内容') {
                e.preventDefault();
                this.insertTableRowBelow();
                return;
              }
            }
          }
        }
      });
    }
  },

  updateWordCount() {
    const editor = document.getElementById('editorContent');
    const wordEl = document.getElementById('wordCount');
    const paraEl = document.getElementById('paraCount');
    if (!editor || !wordEl) return;
    const text = editor.innerText || '';
    // 中文字数 + 英文单词数
    const cnChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
    const enWords = (text.match(/[a-zA-Z]+/g) || []).length;
    wordEl.textContent = cnChars + enWords;
    // 段落数
    const paragraphs = editor.querySelectorAll('p, h1, h2, h3, h4, li, blockquote');
    paraEl.textContent = paragraphs.length;
  },

  // 切换表格工具栏显示
  toggleTableToolbar() {
    const toolbar = document.getElementById('tableToolbar');
    if (!toolbar) return;
    const cell = this.getCurrentTableCell();
    toolbar.style.display = cell ? 'flex' : 'none';
  },

  switchEditorPage(idx) {
    // 兼容旧逻辑（连续滚动编辑器已不再分页）
    this.editorPageIndex = idx;
  },

  prevEditorPage() {
    if (this.editorPageIndex > 0) this.editorPageIndex--;
  },

  nextEditorPage() {
    this.editorPageIndex++;
  },

  // Word 风格：保存为单个连续内容（合并到 doc.content[0]）
  _saveContinuousContent() {
    // Quill 模式：从 Quill 取内容
    if (this._quill) {
      const quill = this._quill;
      const html = quill.root.innerHTML;
      const doc = DataStore.getDocById(this.editorDocId);
      if (!doc) return;
      doc.content = [{ page: 1, html: html }];
      doc.pages = 1;
      const text = (html.replace(/<[^>]+>/g, ' ') || '').trim();
      doc.wordCount = text.length;
      DataStore.updateDocPage(this.editorDocId, 0, html);
      return;
    }
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    const html = editor.innerHTML;
    const doc = DataStore.getDocById(this.editorDocId);
    if (!doc) return;
    doc.content = [{ page: 1, html: html }];
    doc.pages = 1;
    const text = (html.replace(/<[^>]+>/g, ' ') || '').trim();
    doc.wordCount = text.length;
    // 通过 updateDocPage 触发 DataStore 内部保存
    DataStore.updateDocPage(this.editorDocId, 0, html);
  },

  autoSaveCurrentPage() {
    this._saveContinuousContent();
  },

  saveAndExitEditor() {
    // 检查未保存状态
    const saveEl = document.getElementById('gdocsSaveStatus');
    if (saveEl && saveEl.classList.contains('unsaved')) {
      if (!confirm('您有未保存的修改，确定要退出吗？\n\n点击"确定"将自动保存并退出。')) {
        return;
      }
    }
    this._saveContinuousContent();
    this.navigate('admin', { adminTab: 'docs' });
  },

  deleteEditorPage(idx) {
    // 兼容旧 API：连续滚动模式下不支持删除页
    this.notify('连续编辑模式下请使用 Ctrl+Enter 插入分页符', 'info');
  },

  /*
  ============================================
  Google Docs 风格菜单（下拉）
  - toggleGdocsMenu(name): 切换某个下拉
  - closeAllGdocsMenus(): 点击其他地方关掉所有下拉
  ============================================
*/
  toggleGdocsMenu(name) {
    // 已存在的下拉直接切换显示
    const existing = document.getElementById('gdocs-menu-' + name);
    if (existing) {
      this.closeAllGdocsMenus();
      const isShown = existing.style.display === 'block';
      existing.style.display = isShown ? 'none' : 'block';
      if (!isShown) {
        // 重新定位到最近触发按钮下方
        const trigger = this._lastMenuTrigger || document.querySelector(`[data-menu="${name}"], [onclick*="toggleGdocsMenu('${name}')"]`);
        if (trigger) {
          const r = trigger.getBoundingClientRect();
          existing.style.top = (r.bottom + 4) + 'px';
          existing.style.left = r.left + 'px';
        }
      }
      return;
    }
    // 不存在的下拉 → 根据 name 渲染内容并显示
    this.closeAllGdocsMenus();
    const dropdown = this._renderGdocsMenuDropdown(name);
    if (!dropdown) return;
    document.body.appendChild(dropdown);
    const trigger = this._lastMenuTrigger || document.querySelector(`[data-menu="${name}"], [onclick*="toggleGdocsMenu('${name}')"]`);
    if (trigger) {
      const r = trigger.getBoundingClientRect();
      dropdown.style.top = (r.bottom + 4) + 'px';
      dropdown.style.left = r.left + 'px';
    }
    dropdown.style.display = 'block';
  },

  // 改写：每次点击菜单按钮时记录触发元素
  _bindMenuTriggers() {
    if (this._menuTriggersBound) return;
    this._menuTriggersBound = true;
    document.querySelectorAll('[data-menu], [onclick*="toggleGdocsMenu"]').forEach(el => {
      const m = el.getAttribute('data-menu') || (el.getAttribute('onclick') || '').match(/toggleGdocsMenu\('([^']+)'\)/)?.[1];
      if (!m) return;
      el.addEventListener('mousedown', (e) => {
        this._lastMenuTrigger = el;
      });
    });
  },

  closeAllGdocsMenus() {
    document.querySelectorAll('.gdocs-dropdown').forEach(el => {
      // 保留 insert-block 在 toolbar 内
      if (el.id === 'gdocs-menu-insert-block') {
        el.style.display = 'none';
      } else {
        el.style.display = 'none';
      }
    });
  },

  // 渲染顶部菜单的下拉内容
  _renderGdocsMenuDropdown(name) {
    const items = {
      file: [
        {label: '新建文档', shortcut: 'Ctrl+N', action: () => this.createDoc()},
        {label: '预览', shortcut: 'Ctrl+P', action: () => this.previewDoc(this.editorDocId)},
        {label: '保存', shortcut: 'Ctrl+S', action: () => this.saveDoc()},
        {sep: true},
        {label: '导出 HTML', action: () => this.exportDoc()},
        {label: '导出 PDF', action: () => this.exportDocPDF()},
        {sep: true},
        {label: '文档属性', shortcut: 'Ctrl+D', action: () => this.toggleDocProperties()},
        {sep: true},
        {label: '返回文档列表', action: () => this.saveAndExitEditor()},
      ],
      edit: [
        {label: '撤销', shortcut: 'Ctrl+Z', action: () => this.execCmd('undo')},
        {label: '重做', shortcut: 'Ctrl+Y', action: () => this.execCmd('redo')},
        {sep: true},
        {label: '剪切', shortcut: 'Ctrl+X', action: () => document.execCommand('cut')},
        {label: '复制', shortcut: 'Ctrl+C', action: () => document.execCommand('copy')},
        {label: '粘贴', shortcut: 'Ctrl+V', action: () => document.execCommand('paste')},
        {sep: true},
        {label: '全选', shortcut: 'Ctrl+A', action: () => this.selectAllContent()},
        {label: '查找替换', shortcut: 'Ctrl+H', action: () => this.findAndReplace()},
      ],
      view: [
        {label: '放大', shortcut: 'Ctrl++', action: () => this.zoomEditor(10)},
        {label: '缩小', shortcut: 'Ctrl+-', action: () => this.zoomEditor(-10)},
        {label: '重置缩放', shortcut: 'Ctrl+0', action: () => this.zoomEditor(0)},
        {sep: true},
        {label: '页面边距 -', action: () => this.changeDocMargin(-8)},
        {label: '页面边距 +', action: () => this.changeDocMargin(8)},
        {label: '重置页边距', action: () => this.resetDocMargin()},
        {sep: true},
        {label: '📑 文档大纲', action: () => this.toggleOutline()},
        {sep: true},
        {label: '切换 Quill 模式', action: () => this.toggleQuillMode()},
      ],
      insert: [
        {label: '💡 提示框', action: () => this.insertInfoBox()},
        {label: '⚠️ 警告框', action: () => this.insertWarningBox()},
        {label: '✅ 成功框', action: () => this.insertSuccessBox()},
        {label: '⛔ 危险框', action: () => this.insertDangerBox()},
        {sep: true},
        {label: '① 维修步骤块', action: () => this.insertStepBlock()},
        {label: '🛠 工具清单', action: () => this.insertToolList()},
        {sep: true},
        {label: '📊 表格', action: (e) => this.insertTable(e)},
        {label: '🖼 图片', action: () => this.insertImage()},
        {label: '🎬 视频', action: () => this.insertVideo()},
        {label: '📎 附件', action: () => this.insertAttachment()},
        {label: '🔗 链接', action: () => this.insertLink()},
        {sep: true},
        {label: '❝ 引用块', action: () => this.insertBlockquote()},
        {label: '{ } 代码块', action: () => this.insertCodeBlock()},
        {label: '― 分割线', action: () => this.insertHr()},
        {label: '↵ 分页符', shortcut: 'Ctrl+Enter', action: () => this.insertPageBreak()},
        {sep: true},
        {label: '📅 日期', action: () => this.insertDate()},
        {label: '⏰ 时间', action: () => this.insertTime()},
        {label: 'Ω 特殊符号', action: () => this.insertSymbol()},
      ],
      format: [
        {label: 'B 加粗', shortcut: 'Ctrl+B', action: () => this.execCmd('bold')},
        {label: 'I 斜体', shortcut: 'Ctrl+I', action: () => this.execCmd('italic')},
        {label: 'U 下划线', shortcut: 'Ctrl+U', action: () => this.execCmd('underline')},
        {label: 'S 删除线', action: () => this.execCmd('strikeThrough')},
        {sep: true},
        {label: '下标', action: () => this.execCmd('subscript')},
        {label: '上标', action: () => this.execCmd('superscript')},
        {sep: true},
        {label: '清除格式', action: () => this.execCmd('removeFormat')},
        {label: '格式刷', action: () => this.toggleFormatPainter()},
        {sep: true},
        {label: '⬅ 左对齐', action: () => this.execCmd('justifyLeft')},
        {label: '⬌ 居中对齐', action: () => this.execCmd('justifyCenter')},
        {label: '➡ 右对齐', action: () => this.execCmd('justifyRight')},
        {label: '☰ 两端对齐', action: () => this.execCmd('justifyFull')},
        {sep: true},
        {label: '• ≡ 无序列表', action: () => this.execCmd('insertUnorderedList')},
        {label: '1. ≡ 有序列表', action: () => this.execCmd('insertOrderedList')},
        {label: '⇥ 增加缩进', action: () => this.execCmd('indent')},
        {label: '⇤ 减少缩进', action: () => this.execCmd('outdent')},
      ],
      tools: [
        {label: '字数统计', action: () => this.showWordCount()},
        {label: '拼写检查（占位）', action: () => this.notify('拼写检查功能开发中', 'info')},
        {sep: true},
        {label: '🌐 AI 翻译', action: () => this.showTranslationDialog()},
        {label: '语音输入（占位）', action: () => this.notify('语音输入开发中', 'info')},
        {sep: true},
        {label: '切换 Quill 高级模式', action: () => this.toggleQuillMode()},
      ],
      help: [
        {label: '⌨ 快捷键列表', action: () => this.showShortcuts()},
        {label: '📖 使用指南', action: () => this.notify('使用指南开发中，可访问 https://quilljs.com/', 'info')},
        {sep: true},
        {label: '关于 Quill 2.0', action: () => this.notify('编辑器核心：Quill 2.0 (MIT)', 'info')},
      ],
    };
    const list = items[name];
    if (!list) return null;
    const wrap = document.createElement('div');
    wrap.id = 'gdocs-menu-' + name;
    wrap.className = 'gdocs-dropdown gdocs-dropdown-menu';
    wrap.style.display = 'none';
    wrap.style.position = 'fixed';
    wrap.style.zIndex = '10000';
    wrap.style.minWidth = '220px';
    list.forEach(it => {
      if (it.sep) {
        const sep = document.createElement('div');
        sep.className = 'gdocs-dropdown-sep';
        wrap.appendChild(sep);
      } else {
        const row = document.createElement('div');
        row.className = 'gdocs-dropdown-item';
        row.innerHTML = `<span>${it.label}</span>${it.shortcut ? `<span class="gdocs-dropdown-shortcut">${it.shortcut}</span>` : ''}`;
        row.onclick = (e) => {
          e.stopPropagation();
          this.closeAllGdocsMenus();
          try { it.action(e); } catch (err) { console.error(err); this.notify('操作失败：' + err.message, 'error'); }
        };
        wrap.appendChild(row);
      }
    });
    return wrap;
  },

  // 顶部菜单点击外部自动关闭
  _setupGdocsMenuOutsideClick() {
    if (this._gdocsMenuOutsideClickBound) return;
    this._gdocsMenuOutsideClickBound = true;
    document.addEventListener('click', (e) => {
      // 检查点击是否在 dropdown 内部或菜单按钮上
      if (e.target.closest('.gdocs-dropdown')) return;
      if (e.target.closest('[onclick*="toggleGdocsMenu"]')) return;
      this.closeAllGdocsMenus();
    });
  },

  /*
  ============================================
  Quill 2.0 高级编辑器（Google Docs 风格）
  - toggleQuillMode(): 在主编辑器和 Quill 之间切换
  - _quillExec(): 把 execCommand 命令转为 Quill API
  - _quillInsertBox()/_quillInsertStepBlock()/_quillInsertToolList(): 自定义块
  ============================================
*/
  toggleQuillMode() {
    if (this._quill) {
      // 已经在 Quill 模式 → 关掉，回到 contenteditable
      this._disableQuillMode();
    } else {
      this._enableQuillMode();
    }
  },

  _enableQuillMode() {
    const el = document.getElementById('editorContent');
    if (!el) return;
    if (!window.Quill) {
      this.notify('Quill 2.0 还没加载完，请稍候再试', 'info');
      return;
    }
    // 优先从数据源读取内容（避免渲染管道的空 contenteditable）
    let currentHtml = '';
    if (this.editorDocId) {
      const doc = DataStore.getDocById(this.editorDocId);
      if (doc && doc.content) {
        currentHtml = (doc.content || []).map(p => p.html || '').join('');
      }
    }
    if (!currentHtml) {
      currentHtml = el.innerHTML || '';
    }
    if (!currentHtml.trim()) {
      currentHtml = '<p><br></p>';
    }
    // 把 editorContent 套上 Quill 容器
    el.id = 'editorContentHidden';
    el.style.display = 'none';
    const quillEl = document.createElement('div');
    quillEl.id = 'quillContainer';
    el.parentNode.insertBefore(quillEl, el.nextSibling);
    // 初始化 Quill
    const quill = new Quill(quillEl, {
      theme: 'snow',
      placeholder: '开始输入文档内容...',
      modules: {
        toolbar: [
          [{font: []}, {size: []}],
          ['bold', 'italic', 'underline', 'strike'],
          [{color: []}, {background: []}],
          [{script: 'sub'}, {script: 'super'}],
          [{header: '1'}, {header: '2'}, {header: '3'}, 'blockquote', 'code-block'],
          [{list: 'ordered'}, {list: 'bullet'}, {indent: '-1'}, {indent: '+1'}],
          [{direction: 'rtl'}, {align: []}],
          ['link', 'image', 'video', 'formula'],
          ['clean'],
        ],
      },
    });
    // 注入 HTML（用 queueMicrotask 确保 DOM 准备好）
    queueMicrotask(() => {
      quill.clipboard.dangerouslyPasteHTML(0, currentHtml);
      this.updateWordCount();
    });
    this._quill = quill;
    // 替换工具栏绑定
    this._bindQuillCompat(quill);
    // 切换按钮文案
    const btn = document.getElementById('quillToggleBtn');
    if (btn) {
      btn.textContent = '⚡ Quill 模式';
      btn.style.background = '#fef7e0';
      btn.style.color = '#7c5e00';
    }
    this.notify('✅ 已切换 Quill 高级模式（Google Docs 风格）', 'success', 2000);
  },

  _disableQuillMode() {
    const quill = this._quill;
    if (!quill) return;
    // 把 Quill 内容写回 editorContent
    const html = quill.root.innerHTML;
    const hidden = document.getElementById('editorContentHidden');
    const container = document.getElementById('quillContainer');
    if (hidden) {
      hidden.id = 'editorContent';
      hidden.style.display = '';
      hidden.innerHTML = html;
      hidden.focus();
    }
    if (container) container.parentNode.removeChild(container);
    this._quill = null;
    // 重新挂上 contenteditable 的事件
    const editor = document.getElementById('editorContent');
    if (editor) {
      const updateEditorState = () => {
        this.updateWordCount();
        this.toggleTableToolbar();
        // 手动分页模式：不再自动分页
        if (this._saveTimer) clearTimeout(this._saveTimer);
        this._saveTimer = setTimeout(() => this.autoSaveCurrentPage(), 3000);
      };
      editor.addEventListener('input', updateEditorState);
      editor.addEventListener('keyup', () => this.toggleTableToolbar());
      editor.addEventListener('mouseup', () => this.toggleTableToolbar());
      editor.addEventListener('click', () => this.toggleTableToolbar());
    }
    const btn = document.getElementById('quillToggleBtn');
    if (btn) {
      btn.textContent = '⚡ Quill 高级模式';
      btn.style.background = '#e8f0fe';
      btn.style.color = '#1967d2';
    }
    this.notify('已切回原编辑器', 'info', 1500);
  },

  // Quill 兼容层：把 document.execCommand 参数转成 Quill API
  _quillExec(cmd, value) {
    const quill = this._quill;
    if (!quill) return false;
    const selection = quill.getSelection(true);
    if (!selection) return false;
    const map = {
      bold: 'bold',
      italic: 'italic',
      underline: 'underline',
      strikeThrough: 'strike',
      subscript: 'script',
      superscript: 'script',
      removeFormat: 'clean',
      insertUnorderedList: 'list',
      insertOrderedList: 'list',
      justifyLeft: 'align',
      justifyCenter: 'align',
      justifyRight: 'align',
      justifyFull: 'align',
      indent: 'indent',
      outdent: 'indent',
      formatBlock: 'header',
      undo: 'undo',
      redo: 'redo',
      createLink: 'link',
      fontName: 'font',
      fontSize: 'size',
      foreColor: 'color',
      hiliteColor: 'background',
    };
    const target = map[cmd];
    if (!target) {
      // 退化：document.execCommand
      document.execCommand(cmd, false, value);
      return true;
    }
    // Quill 默认值映射
    if (cmd === 'insertUnorderedList') value = 'bullet';
    else if (cmd === 'insertOrderedList') value = 'ordered';
    else if (cmd === 'justifyLeft') value = '';
    else if (cmd === 'justifyCenter') value = 'center';
    else if (cmd === 'justifyRight') value = 'right';
    else if (cmd === 'justifyFull') value = 'justify';
    else if (cmd === 'indent') value = '+1';
    else if (cmd === 'outdent') value = '-1';
    else if (cmd === 'subscript') value = 'sub';
    else if (cmd === 'superscript') value = 'super';
    else if (cmd === 'fontSize') {
      // Quill size 用 px
      const sizeMap = {'1': '10px', '2': '13px', '3': '16px', '4': '18px', '5': '24px', '6': '32px', '7': '48px'};
      value = sizeMap[value] || '16px';
    }
    // Quill 操作
    const range = quill.getSelection();
    const formats = quill.getFormat();
    // 切换语义：如果已经是这个状态，则取消
    const isAlready = formats[target] === value || (target === 'bold' && formats.bold) || (target === 'italic' && formats.italic) || (target === 'underline' && formats.underline) || (target === 'strike' && formats.strike);
    if (['bold', 'italic', 'underline', 'strike'].includes(cmd)) {
      quill.format(target, !isAlready, 'user');
    } else if (cmd === 'fontName') {
      quill.format('font', value, 'user');
    } else if (cmd === 'formatBlock') {
      quill.format('header', value === 'p' ? false : parseInt(value.replace('h', '')) || false, 'user');
    } else if (cmd === 'foreColor') {
      quill.format('color', value, 'user');
    } else if (cmd === 'hiliteColor') {
      quill.format('background', value, 'user');
    } else if (target === 'header') {
      quill.format('header', parseInt(value) || false, 'user');
    } else if (target === 'list' || target === 'align' || target === 'indent' || target === 'script' || target === 'clean') {
      quill.format(target, value, 'user');
    } else if (cmd === 'createLink') {
      // 异步改用 _promptInApp
      this._promptInApp('🔗 创建链接', '链接 URL', value || 'https://').then(url => {
        if (url) quill.format('link', url, 'user');
      });
    } else if (cmd === 'undo') {
      quill.history.undo();
    } else if (cmd === 'redo') {
      quill.history.redo();
    } else {
      // 兜底
      document.execCommand(cmd, false, value);
    }
    return true;
  },

  _bindQuillCompat(quill) {
    // 切换到 Quill 后，让事件也响应字数统计/自动保存
    quill.on('text-change', (delta, oldContents, source) => {
      if (source === 'user') {
        this.updateWordCount();
        this.toggleTableToolbar();
        this.setSaveStatusUI && this.setSaveStatusUI('unsaved');
        if (this._saveTimer) clearTimeout(this._saveTimer);
        this._saveTimer = setTimeout(() => {
          this.setSaveStatusUI('saving');
          this.autoSaveCurrentPage();
          setTimeout(() => this.setSaveStatusUI('saved'), 500);
        }, 3000);
      }
    });
  },

  execCmd(cmd, value = null) {
    // Quill 模式：走 Quill API
    if (this._quill) {
      this._quillExec(cmd, value);
      return;
    }
    this._execCmdWithSelection(cmd, value);
  },

  execFormat(cmd, value) {
    if (this._quill) {
      this._quillExec(cmd, value);
      return;
    }
    this._execCmdWithSelection(cmd, value);
  },

  // 保存编辑器内当前选区。富文本工具栏、菜单和弹窗都复用这一份选区，
  // 避免点击控件后浏览器丢失文本选中状态。
  _saveEditorSelection() {
    const editor = document.getElementById('editorContent');
    const sel = window.getSelection();
    if (!editor || !sel || !sel.rangeCount) return false;
    const range = sel.getRangeAt(0);
    const node = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
      ? range.commonAncestorContainer.parentNode
      : range.commonAncestorContainer;
    if (!node || !editor.contains(node)) return false;
    this._editorSelectionRange = range.cloneRange();
    return true;
  },

  _restoreEditorSelection() {
    const editor = document.getElementById('editorContent');
    const range = this._editorSelectionRange;
    if (!editor || !range) return false;
    const node = range.commonAncestorContainer.nodeType === Node.TEXT_NODE
      ? range.commonAncestorContainer.parentNode
      : range.commonAncestorContainer;
    if (!node || !editor.contains(node)) return false;
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range.cloneRange());
    return true;
  },

  _bindEditorToolbarSelection(editor) {
    const toolbar = document.querySelector('.gdocs-toolbar');
    if (!toolbar || this._selectionBoundToolbar === toolbar) return;
    this._selectionBoundToolbar = toolbar;
    toolbar.addEventListener('mousedown', (event) => {
      // 下拉选择框必须保留默认交互，但也要先保存选区；否则 change
      // 事件发生时浏览器已将焦点移到下拉框，字体/字号/标题样式会失效。
      if (event.target.closest('select')) {
        this._saveEditorSelection();
        return;
      }
      const button = event.target.closest('button');
      if (!button) return;
      this._saveEditorSelection();
      event.preventDefault();
    });
    const menubar = document.querySelector('.gdocs-menubar');
    if (menubar && this._selectionBoundMenubar !== menubar) {
      this._selectionBoundMenubar = menubar;
      menubar.addEventListener('mousedown', () => this._saveEditorSelection());
    }
    // 在编辑器操作过程中持续更新选区（键盘、鼠标和触屏选取）。
    ['keyup', 'mouseup', 'focus', 'input'].forEach(type => {
      editor.addEventListener(type, () => this._saveEditorSelection());
    });
  },

  // 执行 execCommand 并恢复选区（工具栏 mousedown 会导致选区丢失）
  _execCmdWithSelection(cmd, value) {
    this._saveEditorSelection();
    // 保存当前选区
    const sel = window.getSelection();
    const savedRanges = [];
    for (let i = 0; i < sel.rangeCount; i++) {
      savedRanges.push(sel.getRangeAt(i).cloneRange());
    }
    // 重新聚焦编辑器
    const editor = document.getElementById('editorContent');
    if (editor) editor.focus();
    // 恢复选区
    if (!this._restoreEditorSelection() && savedRanges.length > 0) {
      sel.removeAllRanges();
      savedRanges.forEach(r => sel.addRange(r));
    }
    document.execCommand(cmd, false, value);
    if (editor) editor.focus();
  },

  // 插入HTML并将光标移到插入内容之后
  insertHTMLAfter(html) {
    // Quill 模式：把 HTML 注入到选区
    if (this._quill) {
      const range = this._quill.getSelection(true);
      this._quill.clipboard.dangerouslyPasteHTML(range.index, html);
      this._quill.setSelection(range.index + html.length);
      return;
    }
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    this._restoreEditorSelection();
    editor.focus();
    // 插入内容 + 一个空段落（便于后续继续编辑）
    const fullHtml = html + '<p><br></p>';
    document.execCommand('insertHTML', false, fullHtml);
    // 将光标移到最后插入的空段落中
    this.moveCursorToEnd();
  },

  // 在光标位置插入 HTML，并让光标定位到首个可编辑元素内
  insertHTMLAtCursor(html) {
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    this._restoreEditorSelection();
    editor.focus();

    // 用 Range.insertNode 直接插入，比 execCommand('insertHTML') 更可控
    const sel = window.getSelection();
    let range;
    if (sel.rangeCount > 0) {
      range = sel.getRangeAt(0);
    } else {
      // 没有选区时定位到编辑器末尾
      range = document.createRange();
      range.selectNodeContents(editor);
      range.collapse(false);
    }

    // 删除当前选区（如果有选中内容）
    range.deleteContents();

    // 创建临时 div 解析 HTML
    const temp = document.createElement('div');
    temp.innerHTML = html;
    const fragment = document.createDocumentFragment();
    while (temp.firstChild) fragment.appendChild(temp.firstChild);

    // 记录插入位置
    const container = range.startContainer;
    const offset = range.startOffset;

    // 插入 fragment
    range.insertNode(fragment);

    // 找到刚插入的第一个块级元素
    const allInsertees = Array.from(editor.querySelectorAll('.doc-info-box, .doc-warning-box, .doc-success-box, .doc-danger-box, .step-block, .tool-list-block, blockquote, pre, hr'));
    let insertedBox = null;
    // 找到最后一个（最新插入的）
    for (const box of allInsertees) {
      // 通过判断节点是否在插入位置之后
      try {
        const r = document.createRange();
        r.selectNodeContents(box);
        r.setEndAfter(container);
        // 简化：用 array 最后一项
      } catch (e) {}
    }
    insertedBox = allInsertees[allInsertees.length - 1] || null;

    if (insertedBox) {
      // 把光标定位到 box-content / step-content / 最后一个可编辑元素内
      let targetP = insertedBox.querySelector('.box-content p, .step-content p, blockquote p, pre');
      if (!targetP) {
        // 找到 box 内最后一个 p 或可编辑元素
        const allP = insertedBox.querySelectorAll('p, h1, h2, h3, h4, h5');
        targetP = allP[allP.length - 1] || insertedBox;
      }
      const newRange = document.createRange();
      newRange.selectNodeContents(targetP);
      newRange.collapse(false);
      sel.removeAllRanges();
      sel.addRange(newRange);
    } else {
      // 没找到 box，就把光标移到插入点之后
      sel.removeAllRanges();
      const newRange = document.createRange();
      try {
        newRange.setStart(container, offset);
        newRange.collapse(true);
      } catch (e) {
        newRange.selectNodeContents(editor);
        newRange.collapse(false);
      }
      sel.addRange(newRange);
    }
    editor.focus();
  },

  // 将光标移到编辑器末尾
  moveCursorToEnd() {
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    editor.focus();
    const range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  },

  async insertImage() {
    document.getElementById('gdocsImageModal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'gdocsImageModal';
    modal.className = 'modal-overlay gdocs-prompt-overlay';
    modal.innerHTML = `
      <div class="modal gdocs-prompt-modal" style="max-width:540px;">
        <div class="modal-header" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;font-size:16px;color:#202124;">🖼 插入图片</h3>
          <button class="modal-close" id="imgClose" style="background:none;border:none;font-size:20px;color:#5f6368;cursor:pointer;">×</button>
        </div>
        <div class="modal-body" style="padding:20px;">
          <div style="display:flex;gap:6px;margin-bottom:14px;border-bottom:1px solid #e5e7eb;">
            <button class="img-tab" data-tab="url" style="padding:8px 16px;border:none;background:transparent;border-bottom:2px solid #1a73e8;color:#1a73e8;cursor:pointer;font-weight:500;font-size:14px;">URL 地址</button>
            <button class="img-tab" data-tab="upload" style="padding:8px 16px;border:none;background:transparent;border-bottom:2px solid transparent;color:#5f6368;cursor:pointer;font-weight:500;font-size:14px;">本地上传</button>
            <button class="img-tab" data-tab="sample" style="padding:8px 16px;border:none;background:transparent;border-bottom:2px solid transparent;color:#5f6368;cursor:pointer;font-weight:500;font-size:14px;">示例图</button>
          </div>
          <div id="imgTabUrl">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">图片 URL</label>
            <input type="text" id="imgUrl" class="gdocs-prompt-input"
                   placeholder="https://example.com/image.jpg"
                   style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          </div>
          <div id="imgTabUpload" style="display:none;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">选择本地图片（自动转 base64 嵌入）</label>
            <input type="file" id="imgFile" accept="image/*"
                   style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;background:#fff;">
            <div id="imgUploadStatus" style="font-size:12px;color:#5f6368;margin-top:8px;"></div>
          </div>
          <div id="imgTabSample" style="display:none;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">点击选择示例图</label>
            <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
              <div class="img-sample" data-url="https://picsum.photos/600/300?random=1" style="cursor:pointer;border:2px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                <img src="https://picsum.photos/200/100?random=1" style="width:100%;display:block;" alt="示例1">
                <div style="padding:6px;font-size:12px;text-align:center;background:#f8f9fa;">风景 1</div>
              </div>
              <div class="img-sample" data-url="https://picsum.photos/600/300?random=2" style="cursor:pointer;border:2px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                <img src="https://picsum.photos/200/100?random=2" style="width:100%;display:block;" alt="示例2">
                <div style="padding:6px;font-size:12px;text-align:center;background:#f8f9fa;">风景 2</div>
              </div>
              <div class="img-sample" data-url="https://picsum.photos/600/300?random=3" style="cursor:pointer;border:2px solid #e5e7eb;border-radius:6px;overflow:hidden;">
                <img src="https://picsum.photos/200/100?random=3" style="width:100%;display:block;" alt="示例3">
                <div style="padding:6px;font-size:12px;text-align:center;background:#f8f9fa;">风景 3</div>
              </div>
            </div>
          </div>
          <div style="margin-top:14px;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">图片说明（可选）</label>
            <input type="text" id="imgCaption" class="gdocs-prompt-input" placeholder="图片说明"
                   style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          </div>
        </div>
        <div class="modal-footer" style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;gap:8px;">
          <button class="btn btn-primary" id="imgInsert"
                  style="padding:8px 16px;font-size:14px;border:none;background:#1a73e8;color:#fff;border-radius:4px;cursor:pointer;font-weight:500;">插入</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // tab 切换
    modal.querySelectorAll('.img-tab').forEach(tab => {
      tab.onclick = () => {
        modal.querySelectorAll('.img-tab').forEach(t => {
          t.style.borderBottomColor = 'transparent';
          t.style.color = '#5f6368';
        });
        tab.style.borderBottomColor = '#1a73e8';
        tab.style.color = '#1a73e8';
        modal.querySelectorAll('[id^="imgTab"]').forEach(c => c.style.display = 'none');
        document.getElementById('imgTab' + tab.dataset.tab[0].toUpperCase() + tab.dataset.tab.slice(1)).style.display = '';
      };
    });

    // 示例图选择
    modal.querySelectorAll('.img-sample').forEach(s => {
      s.onclick = () => {
        document.getElementById('imgUrl').value = s.dataset.url;
        // 切回 URL tab
        modal.querySelector('.img-tab[data-tab="url"]').click();
      };
    });

    // 文件上传 → base64
    document.getElementById('imgFile').onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (file.size > 5 * 1024 * 1024) {
        document.getElementById('imgUploadStatus').innerHTML = '<span style="color:#d93025;">文件超过 5MB，请压缩后再上传</span>';
        return;
      }
      document.getElementById('imgUploadStatus').textContent = '正在读取...';
      const reader = new FileReader();
      reader.onload = (ev) => {
        document.getElementById('imgUrl').value = ev.target.result;
        document.getElementById('imgUploadStatus').innerHTML = '<span style="color:#137333;">✓ 已读取 ' + Math.round(file.size / 1024) + ' KB</span>';
      };
      reader.readAsDataURL(file);
    };

    document.getElementById('imgClose').onclick = () => modal.remove();
    modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });

    document.getElementById('imgInsert').onclick = () => {
      const url = document.getElementById('imgUrl').value.trim();
      if (!url) { document.getElementById('imgUrl').focus(); return; }
      const caption = document.getElementById('imgCaption').value.trim();
      this.insertHTMLAfter(`
        <div class="doc-image-wrapper" style="margin:16px 0;text-align:center;">
          <img src="${url}" alt="${this.escapeHtml(caption || '图片')}" style="max-width:100%;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
          ${caption ? `<div class="doc-image-caption" style="margin-top:8px;font-size:13px;color:#5f6368;font-style:italic;">${this.escapeHtml(caption)}</div>` : ''}
        </div>
      `);
      this.showToast('已插入图片');
      modal.remove();
    };
  },

  async insertVideo() {
    document.getElementById('gdocsVideoModal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'gdocsVideoModal';
    modal.className = 'modal-overlay gdocs-prompt-overlay';
    modal.innerHTML = `
      <div class="modal gdocs-prompt-modal" style="max-width:520px;">
        <div class="modal-header" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;font-size:16px;color:#202124;">🎬 插入视频</h3>
          <button class="modal-close" id="vidClose" style="background:none;border:none;font-size:20px;color:#5f6368;cursor:pointer;">×</button>
        </div>
        <div class="modal-body" style="padding:20px;">
          <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">视频 URL（mp4/webm/ogg 直链，或 YouTube/B站 链接）</label>
          <input type="text" id="vidUrl" class="gdocs-prompt-input"
                 placeholder="https://example.com/video.mp4 或 YouTube/B站链接"
                 style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          <div id="vidPreview" style="margin-top:8px;font-size:12px;color:#5f6368;min-height:16px;"></div>
          <div style="margin-top:14px;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">视频标题（可选）</label>
            <input type="text" id="vidTitle" class="gdocs-prompt-input" placeholder="视频教程"
                   style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          </div>
        </div>
        <div class="modal-footer" style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;gap:8px;">
          <button class="btn btn-primary" id="vidInsert"
                  style="padding:8px 16px;font-size:14px;border:none;background:#1a73e8;color:#fff;border-radius:4px;cursor:pointer;font-weight:500;">插入</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const close = () => modal.remove();
    document.getElementById('vidClose').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });

    // 实时识别类型
    document.getElementById('vidUrl').oninput = (e) => {
      const url = e.target.value.trim();
      const preview = document.getElementById('vidPreview');
      if (!url) { preview.textContent = ''; return; }
      if (/youtu\.be\/|youtube\.com/.test(url)) preview.innerHTML = '<span style="color:#137333;">✓ YouTube 视频（将转 iframe 嵌入）</span>';
      else if (/bilibili\.com/.test(url)) preview.innerHTML = '<span style="color:#137333;">✓ B站视频（将转 iframe 嵌入）</span>';
      else if (/\.mp4(\?|$)/i.test(url)) preview.innerHTML = '<span style="color:#137333;">✓ MP4 视频</span>';
      else if (/\.webm(\?|$)/i.test(url)) preview.innerHTML = '<span style="color:#137333;">✓ WebM 视频</span>';
      else if (/<\s*iframe/i.test(url)) preview.innerHTML = '<span style="color:#137333;">✓ iframe 嵌入代码</span>';
      else preview.innerHTML = '<span style="color:#d93025;">⚠️ 无法识别格式，将作为 mp4 尝试</span>';
    };

    document.getElementById('vidInsert').onclick = () => {
      const url = document.getElementById('vidUrl').value.trim();
      if (!url) { document.getElementById('vidUrl').focus(); return; }
      const title = document.getElementById('vidTitle').value.trim() || '视频教程';

      const isIframe = /<\s*iframe/i.test(url) || /bvid=|youtube\.com|youtu\.be|bilibili\.com/i.test(url);
      let html;
      if (isIframe) {
        if (/<iframe/i.test(url)) {
          html = `<div class="doc-video" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:16px 0;">${url}</div>`;
        } else {
          let embedUrl = url;
          const yt = url.match(/(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([\w-]{6,})/);
          if (yt) embedUrl = `https://www.youtube.com/embed/${yt[1]}`;
          const bv = url.match(/bilibili\.com\/video\/(BV\w+)/);
          if (bv) embedUrl = `https://player.bilibili.com/player.html?bvid=${bv[1]}`;
          html = `<div class="doc-video" style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:8px;margin:16px 0;">
            <iframe src="${embedUrl}" frameborder="0" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;border-radius:8px;"></iframe>
          </div>`;
        }
      } else {
        let type = 'video/mp4';
        if (/\.webm(\?|$)/i.test(url)) type = 'video/webm';
        else if (/\.ogg(\?|$)/i.test(url)) type = 'video/ogg';
        html = `<div class="doc-video" style="margin:16px 0;"><video controls style="max-width:100%;border-radius:8px;width:100%;"><source src="${url}" type="${type}">您的浏览器不支持视频播放</video></div>`;
      }
      this.insertHTMLAfter(`${html}<p style="text-align:center;font-size:13px;color:#5f6368;margin-top:0;">${this.escapeHtml(title)}</p>`);
      this.showToast('已插入视频');
      close();
    };
  },

  async insertAttachment() {
    document.getElementById('gdocsAttachModal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'gdocsAttachModal';
    modal.className = 'modal-overlay gdocs-prompt-overlay';
    modal.innerHTML = `
      <div class="modal gdocs-prompt-modal" style="max-width:520px;">
        <div class="modal-header" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;font-size:16px;color:#202124;">📎 插入附件</h3>
          <button class="modal-close" id="attClose" style="background:none;border:none;font-size:20px;color:#5f6368;cursor:pointer;">×</button>
        </div>
        <div class="modal-body" style="padding:20px;">
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">附件名称 <span style="color:#d93025;">*</span></label>
            <input type="text" id="attName" class="gdocs-prompt-input" placeholder="技术规格书.pdf" value="技术规格书.pdf"
                   style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          </div>
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">下载 URL（可选，留空则显示"暂未上传"）</label>
            <input type="text" id="attUrl" class="gdocs-prompt-input" placeholder="https://..."
                   style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          </div>
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">附件大小（可选）</label>
            <input type="text" id="attSize" class="gdocs-prompt-input" placeholder="PDF · 2.4 MB" value="PDF · 2.4 MB"
                   style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          </div>
          <div>
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">图标类型</label>
            <div style="display:flex;gap:6px;">
              <button class="att-icon-btn" data-icon="📄" style="padding:8px 12px;border:2px solid #1a73e8;background:#e8f0fe;border-radius:6px;cursor:pointer;font-size:18px;">📄</button>
              <button class="att-icon-btn" data-icon="📊" style="padding:8px 12px;border:2px solid #e5e7eb;background:#fff;border-radius:6px;cursor:pointer;font-size:18px;">📊</button>
              <button class="att-icon-btn" data-icon="🖼" style="padding:8px 12px;border:2px solid #e5e7eb;background:#fff;border-radius:6px;cursor:pointer;font-size:18px;">🖼</button>
              <button class="att-icon-btn" data-icon="🎬" style="padding:8px 12px;border:2px solid #e5e7eb;background:#fff;border-radius:6px;cursor:pointer;font-size:18px;">🎬</button>
              <button class="att-icon-btn" data-icon="📦" style="padding:8px 12px;border:2px solid #e5e7eb;background:#fff;border-radius:6px;cursor:pointer;font-size:18px;">📦</button>
              <button class="att-icon-btn" data-icon="🔧" style="padding:8px 12px;border:2px solid #e5e7eb;background:#fff;border-radius:6px;cursor:pointer;font-size:18px;">🔧</button>
            </div>
          </div>
        </div>
        <div class="modal-footer" style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;gap:8px;">
          <button class="btn btn-primary" id="attInsert"
                  style="padding:8px 16px;font-size:14px;border:none;background:#1a73e8;color:#fff;border-radius:4px;cursor:pointer;font-weight:500;">插入</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    let selectedIcon = '📄';
    const close = () => modal.remove();
    document.getElementById('attClose').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });
    modal.querySelectorAll('.att-icon-btn').forEach(b => {
      b.onclick = () => {
        modal.querySelectorAll('.att-icon-btn').forEach(x => { x.style.borderColor = '#e5e7eb'; x.style.background = '#fff'; });
        b.style.borderColor = '#1a73e8';
        b.style.background = '#e8f0fe';
        selectedIcon = b.dataset.icon;
      };
    });
    document.getElementById('attInsert').onclick = () => {
      const name = document.getElementById('attName').value.trim();
      if (!name) { document.getElementById('attName').focus(); return; }
      const url = document.getElementById('attUrl').value.trim();
      const size = document.getElementById('attSize').value.trim();
      const safeUrl = (url || '').replace(/"/g, '&quot;');
      const safeName = name.replace(/"/g, '&quot;');
      const safeSize = size.replace(/"/g, '&quot;');
      this.insertHTMLAfter(`
        <div class="doc-attachment" data-url="${safeUrl}" onclick="App.handleAttachmentClick(this)" style="cursor:pointer;">
          <div class="doc-attachment-icon">${selectedIcon}</div>
          <div class="doc-attachment-info">
            <div class="doc-attachment-name">${safeName}</div>
            <div class="doc-attachment-size">${safeSize}</div>
          </div>
          <span>⬇</span>
        </div>
      `);
      this.showToast('已插入附件');
      close();
    };
  },

  // 点击附件触发下载或提示
  handleAttachmentClick(el) {
    const url = el.dataset.url;
    const name = (el.querySelector('.doc-attachment-name') || {}).textContent || '附件';
    if (!url) {
      this.showToast(`附件「${name}」暂未上传`, 'info');
      return;
    }
    try {
      const a = document.createElement('a');
      a.href = url;
      a.download = name;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      this.showToast(`开始下载：${name}`);
    } catch (e) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  },

  async insertLink() {
    const sel = window.getSelection();
    const hasSelection = sel && sel.rangeCount > 0 && !sel.isCollapsed;
    const selectedText = hasSelection ? sel.toString().trim() : '';
    const url = await this._promptInApp('🔗 插入链接', '链接 URL（http:// 或 https://）', 'https://', {placeholder: 'https://example.com'});
    if (!url) return;
    if (hasSelection) {
      // 选中文本 → 包成链接
      const editor = this._quill || document.getElementById('editorContent');
      if (this._quill) {
        this._quill.format('link', url, 'user');
      } else {
        const ed = document.getElementById('editorContent');
        if (ed) ed.focus();
        document.execCommand('createLink', false, url);
      }
      this.showToast('已为选中文本添加链接');
    } else {
      // 无选区 → 插入新链接，询问显示文字
      const text = await this._promptInApp('🔗 链接文字', '显示文字', selectedText || '点击查看', {placeholder: '点击查看'});
      if (text === null) return;
      const displayText = text || url;
      const safeText = displayText.replace(/"/g, '&quot;');
      if (this._quill) {
        const range = this._quill.getSelection(true);
        this._quill.insertText(range.index, displayText, 'link', url);
      } else {
        this.insertHTMLAfter(`<a href="${url}" target="_blank" rel="noopener noreferrer">${safeText}</a>`);
      }
      this.showToast('已插入链接');
    }
  },

  insertInfoBox() {
    this.insertHTMLAtCursor(`
      <div class="doc-info-box">
        <div class="box-title">💡 提示</div>
        <div class="box-content"><p>在这里输入提示内容...</p></div>
      </div>
    `);
  },

  insertWarningBox() {
    this.insertHTMLAtCursor(`
      <div class="doc-warning-box">
        <div class="box-title">⚠️ 注意</div>
        <div class="box-content"><p>在这里输入警告内容...</p></div>
      </div>
    `);
  },

  insertSuccessBox() {
    this.insertHTMLAtCursor(`
      <div class="doc-success-box">
        <div class="box-title">✅ 成功</div>
        <div class="box-content"><p>在这里输入成功提示内容...</p></div>
      </div>
    `);
  },

  insertDangerBox() {
    this.insertHTMLAtCursor(`
      <div class="doc-danger-box">
        <div class="box-title">⛔ 危险</div>
        <div class="box-content"><p>在这里输入危险警告内容...</p></div>
      </div>
    `);
  },

  // 插入维修步骤块（iFixit风格，使用 in-app modal 而非原生 prompt）
  insertStepBlock() {
    this._promptStepNumber().then(stepNum => {
      if (!stepNum) return;
      this.insertHTMLAtCursor(`
        <div class="step-block" style="display:flex;gap:16px;margin:20px 0;padding:16px;background:#f8fafc;border-radius:12px;border:1px solid #e2e8f0;">
          <div class="step-number" style="width:44px;height:44px;background:linear-gradient(135deg,#3b82f6,#1d4ed8);color:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;flex-shrink:0;">
            ${stepNum}
          </div>
          <div class="step-content" style="flex:1;">
            <h3 style="margin:0 0 8px 0;font-size:16px;color:#1e293b;">步骤 ${stepNum}：在这里输入步骤标题</h3>
            <p style="margin:0 0 10px 0;color:#475569;line-height:1.6;">在这里详细描述这一步的操作方法和注意事项...</p>
            <div style="color:#64748b;font-size:13px;">
              <strong>⚠️ 提示：</strong>操作时请注意安全，按照正确顺序进行。
            </div>
          </div>
        </div>
      `);
    });
  },

  // in-app 提示输入步骤编号（替代 prompt）
  _promptStepNumber() {
    return new Promise(resolve => {
      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay';
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:100000;display:flex;align-items:center;justify-content:center;z-index:100000;';
      overlay.innerHTML = `
        <div style="background:var(--surface,#fff);border-radius:12px;padding:24px;max-width:380px;width:90%;box-shadow:0 12px 36px rgba(0,0,0,0.25);">
          <div style="font-size:16px;font-weight:600;color:var(--text,#1f2937);margin-bottom:12px;">插入步骤块</div>
          <div style="font-size:13px;color:var(--gray-600);margin-bottom:8px;">请输入步骤编号（数字）：</div>
          <input type="number" id="stepNumberInput" min="1" max="99" value="1"
                 style="width:100%;padding:8px 12px;border:1px solid var(--gray-300,#d1d5db);border-radius:6px;font-size:14px;box-sizing:border-box;margin-bottom:16px;">
          <div style="display:flex;gap:8px;justify-content:flex-end;">
            <button data-action="cancel" style="padding:8px 16px;border:1px solid var(--gray-300,#d1d5db);background:transparent;border-radius:6px;cursor:pointer;font-size:13px;color:var(--text,#1f2937);">取消</button>
            <button data-action="ok" style="padding:8px 16px;background:var(--primary,#3b82f6);color:white;border:none;border-radius:6px;cursor:pointer;font-size:13px;">插入</button>
          </div>
        </div>
      `;
      const cleanup = (result) => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        document.removeEventListener('keydown', onKey);
        resolve(result);
      };
      const onKey = (e) => {
        if (e.key === 'Escape') cleanup(null);
        else if (e.key === 'Enter') commit();
      };
      const commit = () => {
        const input = document.getElementById('stepNumberInput');
        const v = parseInt(input?.value || '1', 10);
        cleanup(isNaN(v) || v < 1 ? 1 : Math.min(v, 99));
      };
      overlay.addEventListener('click', (e) => { if (e.target === overlay) cleanup(null); });
      overlay.querySelector('[data-action="cancel"]').onclick = () => cleanup(null);
      overlay.querySelector('[data-action="ok"]').onclick = commit;
      document.addEventListener('keydown', onKey);
      document.body.appendChild(overlay);
      setTimeout(() => document.getElementById('stepNumberInput')?.focus(), 50);
    });
  },

  // 插入工具清单
  insertToolList() {
    this.insertHTMLAtCursor(`
      <div class="tool-list-block" style="background:#f0f9ff;border:1px solid #bae6fd;border-radius:12px;padding:16px;margin:16px 0;">
        <div style="font-weight:600;color:#0369a1;margin-bottom:10px;font-size:14px;">🛠️ ${this.t('sidebar.tools')}</div>
        <ul style="margin:0;padding-left:20px;color:#0c4a6e;line-height:2;font-size:13px;">
          <li>工具名称 1</li>
          <li>工具名称 2</li>
          <li>工具名称 3</li>
        </ul>
      </div>
    `);
  },

  insertTable(evt) {
    // 如果已经打开了表格选择器，先关闭
    const existing = document.getElementById('tableSizePicker');
    if (existing) { existing.remove(); return; }

    const btn = evt?.currentTarget || (evt && evt.target) || null;
    const picker = document.createElement('div');
    picker.id = 'tableSizePicker';
    picker.className = 'table-size-picker';
    
    let html = `
      <div class="table-picker-header">
        <span id="tablePickerLabel">选择表格大小：3 × 3</span>
      </div>
      <div class="table-picker-grid" id="tablePickerGrid">`;
    
    // 生成 8x8 的选择网格
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        html += `<div class="table-picker-cell" data-row="${i+1}" data-col="${j+1}"></div>`;
      }
    }
    html += `
      </div>
      <div class="table-picker-footer">
        <button class="btn btn-primary btn-sm" id="tablePickerConfirm">插入表格</button>
        <button class="btn btn-secondary btn-sm" id="tablePickerCancel">取消</button>
      </div>
    `;
    picker.innerHTML = html;
    document.body.appendChild(picker);
    
    // 定位到按钮附近
    if (btn) {
      const rect = btn.getBoundingClientRect();
      picker.style.left = (rect.left + window.scrollX) + 'px';
      picker.style.top = (rect.bottom + window.scrollY + 8) + 'px';
    } else {
      picker.style.left = '50%';
      picker.style.top = '50%';
      picker.style.transform = 'translate(-50%, -50%)';
    }
    
    let selectedRows = 3;
    let selectedCols = 3;
    
    const cells = picker.querySelectorAll('.table-picker-cell');
    const label = picker.querySelector('#tablePickerLabel');
    
    const updateHighlight = (row, col) => {
      selectedRows = row;
      selectedCols = col;
      label.textContent = `选择表格大小：${row} × ${col}`;
      cells.forEach(cell => {
        const r = parseInt(cell.dataset.row);
        const c = parseInt(cell.dataset.col);
        if (r <= row && c <= col) {
          cell.classList.add('active');
        } else {
          cell.classList.remove('active');
        }
      });
    };
    
    cells.forEach(cell => {
      cell.addEventListener('mouseenter', () => {
        const r = parseInt(cell.dataset.row);
        const c = parseInt(cell.dataset.col);
        updateHighlight(r, c);
      });
      
      cell.addEventListener('click', () => {
        const r = parseInt(cell.dataset.row);
        const c = parseInt(cell.dataset.col);
        doInsert(r, c);
      });
    });
    
    const doInsert = (rows, cols) => {
      picker.remove();
      if (rows > 0 && cols > 0) {
        let tableHtml = '<table class="editor-table" style="width:100%;border-collapse:collapse;margin:16px 0;">';
        for (let i = 0; i < rows; i++) {
          tableHtml += '<tr>';
          for (let j = 0; j < cols; j++) {
            const tag = i === 0 ? 'th' : 'td';
            const bg = i === 0 ? 'background:#f3f4f6;' : '';
            tableHtml += `<${tag} style="padding:10px 14px;border:1px solid #d1d5db;${bg}text-align:left;">${i === 0 ? '表头' + (j+1) : '内容'}</${tag}>`;
          }
          tableHtml += '</tr>';
        }
        tableHtml += '</table>';
        this.insertHTMLAfter(tableHtml);
        // 插入后提示用户
        setTimeout(() => {
          this.showToast('💡 点击表格内任意位置，可显示表格编辑工具栏');
        }, 500);
      }
    };
    
    picker.querySelector('#tablePickerConfirm').addEventListener('click', () => {
      doInsert(selectedRows, selectedCols);
    });
    picker.querySelector('#tablePickerCancel').addEventListener('click', () => {
      picker.remove();
    });
    
    // 点击外部关闭
    const closeOnClick = (e) => {
      if (!picker.contains(e.target) && e.target !== btn) {
        picker.remove();
        document.removeEventListener('mousedown', closeOnClick);
      }
    };
    setTimeout(() => {
      document.addEventListener('mousedown', closeOnClick);
    }, 10);
  },

  // 获取当前光标所在的表格单元格
  getCurrentTableCell() {
    const sel = window.getSelection();
    if (sel.rangeCount === 0) return null;
    let node = sel.anchorNode;
    while (node && node !== document.body) {
      if (node.nodeName === 'TD' || node.nodeName === 'TH') {
        return node;
      }
      node = node.parentNode;
    }
    return null;
  },

  // 获取当前光标所在的表格
  getCurrentTable() {
    const cell = this.getCurrentTableCell();
    if (!cell) return null;
    let node = cell;
    while (node && node !== document.body) {
      if (node.nodeName === 'TABLE') return node;
      node = node.parentNode;
    }
    return null;
  },

  // 在当前行上方插入行
  insertTableRowAbove() {
    const cell = this.getCurrentTableCell();
    if (!cell) { alert('请先将光标放在表格内'); return; }
    const row = cell.parentNode;
    const table = row.parentNode.closest('table');
    const colCount = row.cells.length;
    const newRow = table.insertRow(row.rowIndex);
    for (let i = 0; i < colCount; i++) {
      const newCell = newRow.insertCell(i);
      newCell.innerHTML = '<br>';
      newCell.style.cssText = 'padding:10px 14px;border:1px solid #d1d5db;';
    }
    document.getElementById('editorContent').focus();
  },

  // 在当前行下方插入行
  insertTableRowBelow() {
    const cell = this.getCurrentTableCell();
    if (!cell) { alert('请先将光标放在表格内'); return; }
    const row = cell.parentNode;
    const table = row.parentNode.closest('table');
    const colCount = row.cells.length;
    const newRow = table.insertRow(row.rowIndex + 1);
    for (let i = 0; i < colCount; i++) {
      const newCell = newRow.insertCell(i);
      newCell.innerHTML = '<br>';
      newCell.style.cssText = 'padding:10px 14px;border:1px solid #d1d5db;';
    }
    document.getElementById('editorContent').focus();
  },

  // 在当前列左侧插入列
  insertTableColLeft() {
    const cell = this.getCurrentTableCell();
    if (!cell) { alert('请先将光标放在表格内'); return; }
    const colIndex = cell.cellIndex;
    const table = cell.closest('table');
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
      const isHeader = rows[i].cells[0].nodeName === 'TH';
      const newCell = rows[i].insertCell(colIndex);
      newCell.innerHTML = isHeader ? '表头' : '内容';
      newCell.style.cssText = isHeader
        ? 'padding:10px 14px;border:1px solid #d1d5db;background:#f3f4f6;text-align:left;font-weight:600;'
        : 'padding:10px 14px;border:1px solid #d1d5db;';
      if (isHeader) {
        // 转换为th
        const th = document.createElement('th');
        th.innerHTML = newCell.innerHTML;
        th.style.cssText = newCell.style.cssText;
        newCell.parentNode.replaceChild(th, newCell);
      }
    }
    document.getElementById('editorContent').focus();
  },

  // 在当前列右侧插入列
  insertTableColRight() {
    const cell = this.getCurrentTableCell();
    if (!cell) { alert('请先将光标放在表格内'); return; }
    const colIndex = cell.cellIndex;
    const table = cell.closest('table');
    const rows = table.rows;
    for (let i = 0; i < rows.length; i++) {
      const isHeader = rows[i].cells[0].nodeName === 'TH';
      const newCell = rows[i].insertCell(colIndex + 1);
      newCell.innerHTML = isHeader ? '表头' : '内容';
      newCell.style.cssText = isHeader
        ? 'padding:10px 14px;border:1px solid #d1d5db;background:#f3f4f6;text-align:left;font-weight:600;'
        : 'padding:10px 14px;border:1px solid #d1d5db;';
      if (isHeader) {
        const th = document.createElement('th');
        th.innerHTML = newCell.innerHTML;
        th.style.cssText = newCell.style.cssText;
        newCell.parentNode.replaceChild(th, newCell);
      }
    }
    document.getElementById('editorContent').focus();
  },

  // 删除当前行
  deleteTableRow() {
    const cell = this.getCurrentTableCell();
    if (!cell) { alert('请先将光标放在表格内'); return; }
    const row = cell.parentNode;
    const table = row.parentNode.closest('table');
    if (table.rows.length <= 1) { alert('表格至少需要保留一行'); return; }
    if (!confirm('确定删除当前行吗？')) return;
    const colIndex = cell.cellIndex;
    row.parentNode.removeChild(row);
    // 修复：删除后保留光标位置（选中同列的下一行，否则选中上一行最后一行）
    const editor = document.getElementById('editorContent');
    const newTable = editor.querySelector('table');
    if (newTable && newTable.rows.length > 0) {
      const targetRow = newTable.rows[Math.min(colIndex >= 0 ? newTable.rows.length - 1 : 0, newTable.rows.length - 1)];
      const targetCell = targetRow.cells[Math.min(colIndex, targetRow.cells.length - 1)] || targetRow.cells[0];
      if (targetCell) {
        targetCell.focus();
        const range = document.createRange();
        range.selectNodeContents(targetCell);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    } else {
      editor.focus();
    }
  },

  // 删除当前列
  deleteTableCol() {
    const cell = this.getCurrentTableCell();
    if (!cell) { alert('请先将光标放在表格内'); return; }
    const colIndex = cell.cellIndex;
    const table = cell.closest('table');
    if (table.rows[0].cells.length <= 1) { alert('表格至少需要保留一列'); return; }
    if (!confirm('确定删除当前列吗？')) return;
    for (let i = table.rows.length - 1; i >= 0; i--) {
      table.rows[i].deleteCell(colIndex);
    }
    // 修复：删除后保留光标位置（选中同行的下一列，否则选中最后列）
    const editor = document.getElementById('editorContent');
    const newTable = editor.querySelector('table');
    if (newTable && newTable.rows.length > 0 && newTable.rows[0].cells.length > 0) {
      const newColIndex = Math.min(colIndex, newTable.rows[0].cells.length - 1);
      const targetRow = newTable.rows[0];
      const targetCell = targetRow.cells[newColIndex];
      if (targetCell) {
        targetCell.focus();
        const range = document.createRange();
        range.selectNodeContents(targetCell);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      }
    } else {
      editor.focus();
    }
  },

  // 删除整个表格
  deleteTable() {
    const table = this.getCurrentTable();
    if (!table) { alert('请先将光标放在表格内'); return; }
    if (!confirm('确定删除整个表格吗？')) return;
    table.parentNode.removeChild(table);
    document.getElementById('editorContent').focus();
  },

  // 合并单元格：向右合并 N 列（N 由用户输入）
  async mergeTableCells() {
    const cell = this.getCurrentTableCell();
    if (!cell) { alert('请先将光标放在表格内'); return; }
    const row = cell.parentNode;
    const maxCols = row.cells.length - cell.cellIndex;
    if (maxCols < 2) {
      this.showToast('当前已是行尾，无法向右合并', 'warning');
      return;
    }
    const input = await this._promptInApp('⊞ 合并单元格', `向右合并几列？（当前行剩余 ${maxCols} 列）`, '2', {placeholder: '2'});
    if (!input) return;
    const cols = parseInt(input, 10);
    if (isNaN(cols) || cols < 2) {
      this.showToast('请输入大于等于 2 的数字', 'error');
      return;
    }
    if (cols > maxCols) {
      this.showToast(`最多只能合并 ${maxCols} 列`, 'error');
      return;
    }
    // 合并：拼接右侧 cols-1 个单元格的内容到当前单元格，然后删除它们
    let mergedHtml = cell.innerHTML;
    for (let i = 1; i < cols; i++) {
      mergedHtml += row.cells[cell.cellIndex + 1].innerHTML;
      row.deleteCell(cell.cellIndex + 1);
    }
    cell.innerHTML = mergedHtml;
    cell.colSpan = cols;
    document.getElementById('editorContent').focus();
    this.showToast(`已合并 ${cols} 列`);
  },

  // 表格属性：查看当前单元格信息（行/列、内容预览）
  showTableProperties() {
    const cell = this.getCurrentTableCell();
    if (!cell) { alert('请先将光标放在表格内'); return; }
    const table = cell.closest('table');
    const row = cell.parentNode;
    const preview = (cell.innerHTML || '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().substring(0, 60);
    const info = `📊 表格信息

行数：${table.rows.length}
当前行：${row.rowIndex + 1} / ${table.rows.length}
列数：${row.cells.length}
当前列：${cell.cellIndex + 1} / ${row.cells.length}
colspan：${cell.colSpan || 1}
rowspan：${cell.rowSpan || 1}
内容预览：${preview}${preview.length >= 60 ? '...' : ''}`;
    alert(info);
  },

  insertHr() {
    this.insertHTMLAfter('<hr style="border:none;border-top:2px solid var(--gray-200);margin:20px 0;">');
  },

  // 插入分页符（Word 风格 Ctrl+Enter）
  insertPageBreak() {
    // 自动计算当前应显示的页码
    const nextPageNum = (document.querySelectorAll('.editor-content .editor-page-break').length || 0) + 1;
    this.insertHTMLAfter(
      `<div class="editor-page-break" contenteditable="false" data-page-break="1" data-page-label="— 第 ${nextPageNum} 页 —" style="page-break-after:always;break-after:page;height:80px;margin:0;border:none;background:transparent;"></div><p><br></p>`
    );
    requestAnimationFrame(() => this.updateEditorPageIndicator());
  },

  // Word 风格自动分页：A4 内容区 1043px（含 80px 上下空白），超出自动插分页符
  autoPaginate() {
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    if (this._paginating) return; // 防止递归
    this._paginating = true;

    try {
      const PAGE_CONTENT_HEIGHT = 1043; // A4 内容区高度（1123 - 80 边距）
      const children = Array.from(editor.children);
      if (children.length === 0) return;

      // 检查末尾是否已经有连续分页符（避免无限追加）
      let trailingBreaks = 0;
      for (let i = children.length - 1; i >= 0; i--) {
        if (children[i].classList?.contains('editor-page-break')) trailingBreaks++;
        else break;
      }

      // 循环插入分页符，直到最后一页内容不超过 PAGE_CONTENT_HEIGHT
      let loopGuard = 20;  // 防止极端情况下无限循环
      while (loopGuard-- > 0 && trailingBreaks === 0) {
        const breaks = [];
        const currentChildren = Array.from(editor.children);
        currentChildren.forEach((el, i) => {
          if (el.classList?.contains('editor-page-break')) breaks.push(i);
        });
        const pageStart = (breaks[breaks.length - 1] ?? -1) + 1;
        let cumulative = 0;
        let targetIdx = -1;
        for (let i = pageStart; i < currentChildren.length; i++) {
          const el = currentChildren[i];
          if (!el || el.classList?.contains('editor-page-break')) continue;
          const rect = el.getBoundingClientRect();
          const h = rect.height + (parseInt(getComputedStyle(el).marginTop) || 0) + (parseInt(getComputedStyle(el).marginBottom) || 0);
          cumulative += h;
          // 找到第一个让累计高度超 PAGE_CONTENT_HEIGHT 的元素 → 在它之前插入分页符
          if (targetIdx === -1 && cumulative > PAGE_CONTENT_HEIGHT) {
            targetIdx = i;
            break;  // 找到一个位置就停（先插一个）
          }
        }
        if (targetIdx === -1) break;
        // 在 targetIdx 之前插入分页符
        const nextPageNum = breaks.length + 1;
        const br = document.createElement('div');
        br.className = 'editor-page-break';
        br.contentEditable = 'false';
        br.setAttribute('data-page-break', '1');
        br.setAttribute('data-page-label', `— 第 ${nextPageNum} 页 —`);
        br.style.cssText = 'page-break-after:always;break-after:page;height:80px;margin:0;border:none;background:transparent;';
        currentChildren[targetIdx].parentNode.insertBefore(br, currentChildren[targetIdx]);
      }
    } finally {
      this._paginating = false;
      this.updateEditorPageIndicator();
    }
  },

  // 更新编辑器状态栏页码指示（根据滚动位置计算当前页）
  updateEditorPageIndicator() {
    this.renderPageTabs();
  },

  // 渲染顶部页面 tabs（手动分页模式）
  renderPageTabs() {
    const editor = document.getElementById('editorContent');
    const container = document.getElementById('gdocsPageTabs');
    if (!editor || !container) return;
    const breaks = editor.querySelectorAll('.editor-page-break');
    const totalPages = Math.max(1, breaks.length + 1);
    // 当前页：找第一个 top > 容器顶部的分页符
    const containerRect = editor.getBoundingClientRect();
    let current = 1;
    breaks.forEach((br, i) => {
      if (br.getBoundingClientRect().top < containerRect.top + 80) current = i + 2;
    });
    let html = '';
    for (let i = 1; i <= totalPages; i++) {
      const active = i === current ? 'active' : '';
      html += `<div class="gdocs-page-tab ${active}" data-page="${i}" onclick="App.scrollToPage(${i})">第 ${i} 页<span class="gdocs-page-tab-close" onclick="event.stopPropagation();App.deletePage(${i})" title="删除此页">×</span></div>`;
    }
    html += `<button class="gdocs-page-tab gdocs-page-add" onclick="App.addNewPage()" title="添加新页">+ 添加页面</button>`;
    container.innerHTML = html;
    // 同步更新标题栏页码
    const badge = document.getElementById('gdocsDocPageBadge');
    if (badge) badge.textContent = `第 ${current} / ${totalPages} 页`;
  },

  // 滚动到指定页
  scrollToPage(pageNum) {
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    const breaks = editor.querySelectorAll('.editor-page-break');
    if (pageNum === 1) {
      editor.scrollTop = 0;
    } else if (pageNum - 2 < breaks.length) {
      breaks[pageNum - 2].scrollIntoView({behavior: 'smooth', block: 'start'});
    } else if (breaks.length > 0) {
      breaks[breaks.length - 1].scrollIntoView({behavior: 'smooth', block: 'start'});
    }
  },

  // 删除指定页（删除该页内容 + 前一个分页符）
  deletePage(pageNum) {
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    const breaks = editor.querySelectorAll('.editor-page-break');
    const totalPages = breaks.length + 1;
    if (totalPages <= 1) {
      this.showToast('至少需要保留 1 页', 'warning');
      return;
    }
    if (!confirm(`确定要删除第 ${pageNum} 页吗？`)) return;
    const children = Array.from(editor.children);
    let pageStart, pageEnd;
    if (pageNum === 1) {
      // 删除第 1 页 = 删除第一个分页符之前的内容 + 第一个分页符
      const firstBreak = children.findIndex(c => c.classList?.contains('editor-page-break'));
      pageEnd = firstBreak;
      for (let i = 0; i <= pageEnd; i++) editor.removeChild(children[i]);
    } else if (pageNum === totalPages) {
      // 删除最后一页 = 删除最后一个分页符 + 后续内容
      const lastBreak = breaks[breaks.length - 1];
      let idx = children.indexOf(lastBreak);
      while (idx < children.length) editor.removeChild(children[idx]);
    } else {
      // 删除中间页 = 删除前一个分页符到当前分页符的内容
      pageStart = children.indexOf(breaks[pageNum - 2]);
      pageEnd = children.indexOf(breaks[pageNum - 1]);
      for (let i = pageStart; i <= pageEnd; i++) editor.removeChild(children[i]);
    }
    requestAnimationFrame(() => {
      this.renderPageTabs();
      this.updateEditorPageIndicator();
      this.autoSaveCurrentPage();
    });
    this.showToast(`已删除第 ${pageNum} 页`, 'success', 1500);
  },

  insertBlockquote() {
    this.insertHTMLAfter(`
      <blockquote style="border-left:4px solid var(--primary);padding:12px 20px;margin:16px 0;background:var(--primary-light);border-radius:0 8px 8px 0;color:var(--gray-700);font-style:italic;">
        <p>在这里输入引用内容...</p>
      </blockquote>
    `);
  },

  insertCodeBlock() {
    this.insertHTMLAfter(`
      <pre style="background:#1f2937;color:#e5e7eb;padding:16px 20px;border-radius:8px;font-family:'Courier New',monospace;font-size:14px;overflow-x:auto;margin:16px 0;line-height:1.6;"><code>// 在这里输入代码
function hello() {
  console.log('Hello, World!');
}</code></pre>
    `);
  },

  // 颜色选择器
  pickColor(cmd) {
    document.getElementById('gdocsColorModal')?.remove();
    const colors = [
      '#1f2937', '#dc2626', '#ea580c', '#d97706', '#65a30d',
      '#059669', '#0891b2', '#2563eb', '#7c3aed', '#db2777',
      '#6b7280', '#ef4444', '#f97316', '#eab308', '#84cc16',
      '#10b981', '#06b6d4', '#3b82f6', '#8b5cf6', '#ec4899'
    ];
    const isFore = cmd === 'foreColor';
    const modal = document.createElement('div');
    modal.id = 'gdocsColorModal';
    modal.className = 'modal-overlay gdocs-prompt-overlay';
    modal.innerHTML = `
      <div class="modal gdocs-prompt-modal" style="max-width:420px;">
        <div class="modal-header" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;font-size:16px;color:#202124;">${isFore ? '🎨 字体颜色' : '🖍 背景颜色'}</h3>
          <button class="modal-close" id="colorClose" style="background:none;border:none;font-size:20px;color:#5f6368;cursor:pointer;">×</button>
        </div>
        <div class="modal-body" style="padding:20px;">
          <div style="display:grid;grid-template-columns:repeat(10,1fr);gap:6px;margin-bottom:14px;">
            ${colors.map(c => `<button class="color-swatch" data-color="${c}" style="width:32px;height:32px;border:2px solid #e5e7eb;border-radius:4px;background:${c};cursor:pointer;padding:0;"></button>`).join('')}
          </div>
          <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;">自定义颜色（hex）</label>
          <input type="text" id="colorInput" class="gdocs-prompt-input"
                 value="${isFore ? '#1f2937' : '#fef3c7'}"
                 style="width:100%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
        </div>
        <div class="modal-footer" style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;justify-content:flex-end;gap:8px;">
          <button class="btn btn-primary" id="colorApply"
                  style="padding:8px 16px;font-size:14px;border:none;background:#1a73e8;color:#fff;border-radius:4px;cursor:pointer;font-weight:500;">应用</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
    const close = () => modal.remove();
    document.getElementById('colorClose').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });

    const apply = (color) => {
      this._execCmdWithSelection(cmd, color);
      this.showToast(`已应用 ${isFore ? '字体' : '背景'}颜色 ${color}`);
      close();
    };

    modal.querySelectorAll('.color-swatch').forEach(sw => {
      sw.onclick = () => apply(sw.dataset.color);
    });
    document.getElementById('colorApply').onclick = () => {
      const v = document.getElementById('colorInput').value.trim();
      if (v) apply(v);
    };
  },

  // 行间距：修改选区所在段落的 line-height（不再仅插入新段落）
  async setLineHeight() {
    const val = await this._promptInApp('设置行间距', '行间距倍数（如 1.5 / 1.8 / 2.0）', '1.8', {placeholder: '1.5'});
    if (val === null || !val) return;
    const num = parseFloat(val);
    if (isNaN(num) || num <= 0) {
      this.showToast('请输入大于 0 的数字', 'error');
      return;
    }
    const applyToBlocks = (blocks, prop, value) => {
      blocks.forEach(b => b.style[prop] = value);
    };
    const sel = window.getSelection();
    if (sel.rangeCount > 0 && !sel.isCollapsed) {
      const range = sel.getRangeAt(0);
      const blocks = this._getBlocksInRange(range);
      applyToBlocks(blocks, 'lineHeight', val);
      this.showToast(`已对 ${blocks.length} 个段落应用行间距 ${val}`);
    } else {
      const editor = document.getElementById('editorContent');
      if (editor) {
        const blocks = editor.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote');
        applyToBlocks(blocks, 'lineHeight', val);
        this.showToast(`已对全文 ${blocks.length} 个段落应用行间距 ${val}`);
      }
    }
  },

  // 段落间距：修改选区所在段落的 margin-bottom
  async setParagraphSpacing() {
    const val = await this._promptInApp('设置段后间距', '段后间距像素（如 8 / 16 / 24）', '16', {placeholder: '16'});
    if (val === null || !val) return;
    const num = parseInt(val, 10);
    if (isNaN(num) || num < 0) {
      this.showToast('请输入大于等于 0 的整数', 'error');
      return;
    }
    const applyToBlocks = (blocks, prop, value) => {
      blocks.forEach(b => b.style[prop] = value);
    };
    const sel = window.getSelection();
    if (sel.rangeCount > 0 && !sel.isCollapsed) {
      const range = sel.getRangeAt(0);
      const blocks = this._getBlocksInRange(range);
      applyToBlocks(blocks, 'marginBottom', val + 'px');
      this.showToast(`已对 ${blocks.length} 个段落应用段后距 ${val}px`);
    } else {
      const editor = document.getElementById('editorContent');
      if (editor) {
        const blocks = editor.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, blockquote');
        applyToBlocks(blocks, 'marginBottom', val + 'px');
        this.showToast(`已对全文 ${blocks.length} 个段落应用段后距 ${val}px`);
      }
    }
  },

  // 辅助：取选区内的所有块级元素（去重）
  _getBlocksInRange(range) {
    const blockTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI', 'BLOCKQUOTE', 'PRE'];
    const blocks = new Set();
    const walker = document.createTreeWalker(
      range.commonAncestorContainer,
      NodeFilter.SHOW_ELEMENT,
      {
        acceptNode: (n) => blockTags.includes(n.nodeName) && range.intersectsNode(n)
          ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
      }
    );
    let node;
    while ((node = walker.nextNode())) blocks.add(node);
    // 如果 range 起点本身是 text 节点且直接父节点是块级，也补上
    const startBlock = (range.startContainer.nodeType === 3
      ? range.startContainer.parentElement : range.startContainer);
    if (startBlock && blockTags.includes(startBlock.nodeName)) blocks.add(startBlock);
    return Array.from(blocks);
  },

  // 查找替换
  async findAndReplace() {
    // 一次性收集所有信息：用单个 in-app 对话框
    document.getElementById('gdocsFindReplaceModal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'gdocsFindReplaceModal';
    modal.className = 'modal-overlay gdocs-prompt-overlay';
    modal.innerHTML = `
      <div class="modal gdocs-prompt-modal" style="max-width:560px;">
        <div class="modal-header" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;font-size:16px;color:#202124;">🔍 查找和替换</h3>
          <button class="modal-close" id="frClose" style="background:none;border:none;font-size:20px;color:#5f6368;cursor:pointer;">×</button>
        </div>
        <div class="modal-body" style="padding:20px;">
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;font-weight:500;">查找内容</label>
            <input type="text" id="frFindInput" class="gdocs-prompt-input"
                   style="width:100%;padding:10px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          </div>
          <div style="margin-bottom:14px;">
            <label style="display:block;font-size:13px;color:#5f6368;margin-bottom:6px;font-weight:500;">替换为</label>
            <input type="text" id="frReplaceInput" class="gdocs-prompt-input"
                   style="width:100%;padding:10px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          </div>
          <div id="frStatus" style="font-size:13px;color:#5f6368;min-height:18px;"></div>
        </div>
        <div class="modal-footer" style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;gap:8px;">
          <span id="frCounter" style="font-size:12px;color:#5f6368;"></span>
          <div style="display:flex;gap:8px;">
            <button class="btn btn-secondary" id="frFindBtn"
                    style="padding:8px 16px;font-size:14px;border:1px solid #dadce0;background:#fff;color:#5f6368;border-radius:4px;cursor:pointer;">查找</button>
            <button class="btn btn-primary" id="frReplaceBtn"
                    style="padding:8px 16px;font-size:14px;border:none;background:#1a73e8;color:#fff;border-radius:4px;cursor:pointer;font-weight:500;">全部替换</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const close = () => modal.remove();
    document.getElementById('frClose').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });

    let count = 0;
    document.getElementById('frFindBtn').onclick = () => {
      const findText = document.getElementById('frFindInput').value;
      if (!findText) { document.getElementById('frStatus').textContent = '请输入查找内容'; return; }
      count = this._countInEditor(findText);
      document.getElementById('frStatus').textContent = `找到 ${count} 处匹配`;
      document.getElementById('frCounter').textContent = count > 0 ? `共 ${count} 处` : '';
    };
    document.getElementById('frReplaceBtn').onclick = () => {
      const findText = document.getElementById('frFindInput').value;
      const replaceText = document.getElementById('frReplaceInput').value;
      if (!findText) { document.getElementById('frStatus').textContent = '请输入查找内容'; return; }
      count = this._replaceInEditor(findText, replaceText);
      if (count > 0) {
        document.getElementById('frStatus').innerHTML = `<span style="color:#137333;font-weight:500;">✓ 已替换 ${count} 处</span>`;
        this.showToast(`已替换 ${count} 处`);
      } else {
        document.getElementById('frStatus').innerHTML = `<span style="color:#d93025;">✕ 未找到匹配内容</span>`;
        this.showToast('未找到匹配内容');
      }
    };

    document.getElementById('frFindInput').focus();
  },

  _countInEditor(findText) {
    const editor = this._quill ? this._quill.root : (document.getElementById('editorContent') || document.getElementById('editorContentHidden'));
    if (!editor) return 0;
    const text = (editor.textContent || '').trim();
    if (!text) return 0;
    try {
      const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const matches = text.match(regex);
      return matches ? matches.length : 0;
    } catch (e) { return 0; }
  },

  _replaceInEditor(findText, replaceText) {
    const editor = this._quill ? null : (document.getElementById('editorContent') || document.getElementById('editorContentHidden'));
    if (this._quill) {
      const text = this._quill.getText();
      let count = 0;
      const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
      const matches = text.match(regex);
      count = matches ? matches.length : 0;
      if (count > 0) {
        this._quill.setSelection(0, this._quill.getLength());
        this._quill.deleteText(0, this._quill.getLength());
        this._quill.insertText(0, text.replace(regex, replaceText));
      }
      return count;
    }
    if (!editor) return 0;
    let count = 0;
    const walker = document.createTreeWalker(editor, NodeFilter.SHOW_TEXT, null, false);
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    textNodes.forEach(textNode => {
      const text = textNode.nodeValue;
      if (text && text.includes(findText)) {
        const regex = new RegExp(findText.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
        const matches = text.match(regex);
        if (matches) count += matches.length;
        textNode.nodeValue = text.replace(regex, replaceText);
      }
    });
    return count;
  },

  // 格式刷
  _formatPainterActive: false,

  toggleFormatPainter() {
    const editor = document.getElementById('editorContent');
    if (!editor) return;

    // 已激活 → 关闭（防止二次点击无法关闭）
    if (this._formatPainterActive) {
      this._formatPainterActive = false;
      document.body.style.cursor = '';
      // 移除可能存在的 mouseup 监听
      if (this._formatPainterMouseupHandler) {
        editor.removeEventListener('mouseup', this._formatPainterMouseupHandler);
        this._formatPainterMouseupHandler = null;
      }
      if (this._formatPainterEscHandler) {
        document.removeEventListener('keydown', this._formatPainterEscHandler);
        this._formatPainterEscHandler = null;
      }
      this.showToast('格式刷已关闭');
      return;
    }

    // 未激活 → 激活
    const sel = window.getSelection();
    if (sel.rangeCount === 0 || sel.isCollapsed) {
      alert('请先选中要复制格式的文本');
      return;
    }
    {
      const range = sel.getRangeAt(0);
      const container = range.commonAncestorContainer;
      const el = container.nodeType === 1 ? container : container.parentElement;
      // 保存计算样式
      const computed = window.getComputedStyle(el);
      this._formatPainterStyle = {
        fontWeight: computed.fontWeight,
        fontStyle: computed.fontStyle,
        textDecoration: computed.textDecoration,
        color: computed.color,
        backgroundColor: computed.backgroundColor,
        fontSize: computed.fontSize,
        fontFamily: computed.fontFamily
      };
      this._formatPainterActive = true;
      document.body.style.cursor = 'crosshair';
      this.showToast('格式刷已激活，选中目标文本应用格式');

      // 监听鼠标松开事件
      const applyFormat = () => {
        if (!this._formatPainterActive) return;
        const newSel = window.getSelection();
        if (newSel.rangeCount > 0 && !newSel.isCollapsed) {
          const range = newSel.getRangeAt(0);
          const styles = this._formatPainterStyle;
          // 抽取应用样式的辅助函数
          const applyStylesTo = (el) => {
            el.style.fontWeight = styles.fontWeight;
            el.style.fontStyle = styles.fontStyle;
            el.style.color = styles.color;
            el.style.fontSize = styles.fontSize;
            el.style.fontFamily = styles.fontFamily;
          };
          try {
            const span = document.createElement('span');
            applyStylesTo(span);
            range.surroundContents(span);
          } catch(e) {
            // 选区跨元素：提取选区内容到 span，再替换回去（保留用户原格式意图）
            try {
              const fragment = range.extractContents();
              const span = document.createElement('span');
              applyStylesTo(span);
              span.appendChild(fragment);
              range.insertNode(span);
              // 把光标移到 span 之后
              range.setStartAfter(span);
              range.collapse(true);
              const sel = window.getSelection();
              sel.removeAllRanges();
              sel.addRange(range);
            } catch (e2) {
              // 极端情况（选区跨越多个嵌套元素）：对每个 text node 单独包 span
              const walker = document.createTreeWalker(range.commonAncestorContainer, NodeFilter.SHOW_TEXT, {
                acceptNode: (n) => range.intersectsNode(n) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
              });
              const textNodes = [];
              let node;
              while ((node = walker.nextNode())) textNodes.push(node);
              textNodes.forEach(tn => {
                const span = document.createElement('span');
                applyStylesTo(span);
                tn.parentNode.insertBefore(span, tn);
                span.appendChild(tn);
              });
            }
          }
          this._formatPainterActive = false;
          document.body.style.cursor = '';
          editor.removeEventListener('mouseup', applyFormat);
        }
      };
      editor.addEventListener('mouseup', applyFormat);
      this._formatPainterMouseupHandler = applyFormat;
      // ESC取消
      const escHandler = (e) => {
        if (e.key === 'Escape') {
          this._formatPainterActive = false;
          document.body.style.cursor = '';
          editor.removeEventListener('mouseup', applyFormat);
          document.removeEventListener('keydown', escHandler);
          this._formatPainterMouseupHandler = null;
          this._formatPainterEscHandler = null;
        }
      };
      document.addEventListener('keydown', escHandler);
      this._formatPainterEscHandler = escHandler;
    }
  },

  // 插入当前日期
  insertDate() {
    const now = new Date();
    const dateStr = now.toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    document.execCommand('insertText', false, dateStr);
  },

  // 插入当前时间
  insertTime() {
    const now = new Date();
    const timeStr = now.toLocaleTimeString('zh-CN', {
      hour: '2-digit',
      minute: '2-digit'
    });
    document.execCommand('insertText', false, timeStr);
  },

  // 图片灯箱查看器
  openImageLightbox(src, alt) {
    const existing = document.getElementById('imageLightbox');
    if (existing) existing.remove();

    const lightbox = document.createElement('div');
    lightbox.id = 'imageLightbox';
    lightbox.className = 'image-lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-close" onclick="this.parentElement.remove()">✕</div>
      <div class="lightbox-nav lightbox-prev" onclick="App.navigateLightbox(-1)">‹</div>
      <img src="${src}" alt="${alt || '图片'}" class="lightbox-img" onclick="event.stopPropagation()">
      <div class="lightbox-nav lightbox-next" onclick="App.navigateLightbox(1)">›</div>
      <div class="lightbox-caption">${alt || ''}</div>
    `;
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.remove();
    });
    document.body.appendChild(lightbox);
    requestAnimationFrame(() => lightbox.classList.add('show'));

    // 收集页面上所有图片
    const allImages = Array.from(document.querySelectorAll('.doc-page-content img, .editor-content img'));
    App._lightboxImages = allImages.map(img => ({ src: img.src, alt: img.alt }));
    App._lightboxIndex = allImages.findIndex(img => img.src === src);
  },

  navigateLightbox(dir) {
    if (!App._lightboxImages || App._lightboxImages.length === 0) return;
    App._lightboxIndex = (App._lightboxIndex + dir + App._lightboxImages.length) % App._lightboxImages.length;
    const item = App._lightboxImages[App._lightboxIndex];
    const img = document.querySelector('.lightbox-img');
    const caption = document.querySelector('.lightbox-caption');
    if (img) {
      img.style.opacity = '0';
      setTimeout(() => {
        img.src = item.src;
        img.alt = item.alt;
        img.style.opacity = '1';
      }, 150);
    }
    if (caption) caption.textContent = item.alt || '';
  },

  // 插入特殊符号
  insertSymbol() {
    const symbols = ['→', '←', '↑', '↓', '↔', '↕', '⇒', '⇐', '⇑', '⇓',
                     '★', '☆', '●', '○', '■', '□', '◆', '◇', '▲', '△',
                     '✓', '✗', '✕', '✔', '✘', '❌', '✅', '⚠', '⚡', '❓',
                     '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩',
                     '℃', '℉', '‰', '™', '®', '©', '§', '¶', '·', '…',
                     '×', '÷', '±', '≠', '≤', '≥', '∞', '√', 'π', 'Ω',
                     'α', 'β', 'γ', 'δ', 'ε', 'θ', 'λ', 'μ', 'π', 'Ω'];
    const groups = {
      '箭头': symbols.slice(0, 10),
      '图形': symbols.slice(10, 20),
      '标记': symbols.slice(20, 30),
      '数字': symbols.slice(30, 40),
      '符号': symbols.slice(40, 50),
      '数学': symbols.slice(50, 60),
      '希腊': symbols.slice(60),
    };

    document.getElementById('gdocsSymbolModal')?.remove();
    const modal = document.createElement('div');
    modal.id = 'gdocsSymbolModal';
    modal.className = 'modal-overlay gdocs-prompt-overlay';
    const groupsHtml = Object.entries(groups).map(([name, list]) => `
      <div style="margin-bottom:14px;">
        <div style="font-size:12px;color:#5f6368;margin-bottom:6px;font-weight:500;">${name}</div>
        <div style="display:flex;flex-wrap:wrap;gap:4px;">
          ${list.map(s => `<button class="symbol-btn" data-sym="${s}" style="width:36px;height:36px;border:1px solid #e5e7eb;background:#fff;border-radius:4px;cursor:pointer;font-size:18px;color:#202124;">${s}</button>`).join('')}
        </div>
      </div>
    `).join('');
    modal.innerHTML = `
      <div class="modal gdocs-prompt-modal" style="max-width:480px;">
        <div class="modal-header" style="padding:16px 20px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <h3 style="margin:0;font-size:16px;color:#202124;">Ω 插入特殊符号</h3>
          <button class="modal-close" id="symClose" style="background:none;border:none;font-size:20px;color:#5f6368;cursor:pointer;">×</button>
        </div>
        <div class="modal-body" style="padding:16px 20px;max-height:60vh;overflow-y:auto;">
          ${groupsHtml}
        </div>
        <div class="modal-footer" style="padding:12px 20px;border-top:1px solid #e5e7eb;display:flex;justify-content:space-between;align-items:center;">
          <input type="text" id="symInput" class="gdocs-prompt-input"
                 placeholder="或直接输入 Unicode 字符"
                 style="width:60%;padding:8px 12px;font-size:14px;border:1px solid #dadce0;border-radius:6px;outline:none;">
          <button class="btn btn-primary" id="symOk"
                  style="padding:8px 16px;font-size:14px;border:none;background:#1a73e8;color:#fff;border-radius:4px;cursor:pointer;font-weight:500;">插入</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    const close = () => modal.remove();
    document.getElementById('symClose').onclick = close;
    modal.addEventListener('click', e => { if (e.target === modal) close(); });

    const insert = (sym) => {
      if (this._quill) {
        const range = this._quill.getSelection(true);
        this._quill.insertText(range.index, sym);
      } else {
        this._execCmdWithSelection('insertText', sym);
      }
      this.showToast(`已插入符号 ${sym}`);
      close();
    };

    modal.querySelectorAll('.symbol-btn').forEach(b => {
      b.onclick = () => insert(b.dataset.sym);
    });
    document.getElementById('symOk').onclick = () => {
      const v = document.getElementById('symInput').value.trim();
      if (v) insert(v);
    };
    document.getElementById('symInput').focus();
  },

  // 增大字号：选区或光标处的字号 +1（fontSize 1-7）
  increaseFontSize() {
    // 当前 fontSize：1..7；夹紧到 1..7 范围
    const current = this._getCurrentFontSizeLevel() || 3;
    const next = Math.min(7, current + 1);
    if (next === current) {
      this.showToast('已是最大字号', 'warning');
      return;
    }
    document.execCommand('fontSize', false, String(next));
  },

  // 减小字号：选区或光标处的字号 -1（fontSize 1-7）
  decreaseFontSize() {
    const current = this._getCurrentFontSizeLevel() || 3;
    const next = Math.max(1, current - 1);
    if (next === current) {
      this.showToast('已是最小字号', 'warning');
      return;
    }
    document.execCommand('fontSize', false, String(next));
  },

  // 辅助：获取当前光标/选区的 fontSize 级别（1..7）
  _getCurrentFontSizeLevel() {
    const sel = window.getSelection();
    if (!sel.rangeCount) return null;
    let node = sel.anchorNode;
    while (node && node.nodeType !== 1) node = node.parentNode;
    if (!node) return null;
    // 优先找最近的 font[size] 祖先；否则读计算样式并映射到 1..7
    let el = node;
    while (el && el !== document.body) {
      if (el.nodeName === 'FONT' && el.size) {
        const n = parseInt(el.size, 10);
        if (!isNaN(n)) return n;
      }
      el = el.parentNode;
    }
    const fsPx = parseFloat(window.getComputedStyle(node).fontSize);
    if (isNaN(fsPx)) return null;
    // fontSize 1..7 大致对应 10/13/16/18/24/32/48 px
    const map = [10, 13, 16, 18, 24, 33, 48];
    let closest = 1, minDiff = Infinity;
    for (let i = 0; i < map.length; i++) {
      const diff = Math.abs(map[i] - fsPx);
      if (diff < minDiff) { minDiff = diff; closest = i + 1; }
    }
    return closest;
  },

  // 全选
  selectAllContent() {
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    const range = document.createRange();
    range.selectNodeContents(editor);
    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  },

  addNewPage() {
    const editor = document.getElementById('editorContent');
    if (!editor) return;
    const newPageNum = editor.querySelectorAll('.editor-page-break').length + 2;
    const pageBreak = document.createElement('div');
    pageBreak.className = 'editor-page-break';
    pageBreak.contentEditable = 'false';
    pageBreak.dataset.pageBreak = '1';
    pageBreak.dataset.pageLabel = `— 第 ${newPageNum} 页 —`;
    pageBreak.style.cssText = 'page-break-after:always;break-after:page;height:60px;margin:0;border:none;background:transparent;';
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = '<br>';
    editor.append(pageBreak, newParagraph);
    this._saveContinuousContent();
    requestAnimationFrame(() => {
      pageBreak.scrollIntoView({ behavior: 'smooth', block: 'start' });
      this.renderPageTabs();
    });
    this.showToast(`已添加第 ${newPageNum} 页`, 'success', 1500);
  },

  saveDoc() {
    const doc = DataStore.getDocById(this.editorDocId);
    if (!doc) return;

    // 编辑器采用连续编辑模式。直接写回当前页会让原有其他页保留，
    // 从而在前台预览中重复显示内容。
    this._saveContinuousContent();

    // 文档属性（如果表单存在才读，否则保留原值）
    const title = document.getElementById('editDocTitle')?.value ?? doc.title;
    const productId = document.getElementById('editDocProduct')?.value ?? doc.productId;
    const type = document.getElementById('editDocType')?.value ?? doc.type;
    const author = document.getElementById('editDocAuthor')?.value ?? doc.author;
    const status = document.getElementById('editDocStatus')?.value ?? doc.status;
    const progressRange = document.getElementById('editDocProgressRange');
    const progress = progressRange ? (parseInt(progressRange.value, 10) || 0) : (doc.progress || 0);
    const description = document.getElementById('editDocDesc')?.value ?? doc.description;
    const difficulty = document.getElementById('editDocDifficulty')?.value ?? doc.difficulty;
    const estimatedTime = document.getElementById('editDocTime')?.value ?? doc.estimatedTime;
    const toolsText = document.getElementById('editDocTools')?.value ?? '';
    const partsText = document.getElementById('editDocParts')?.value ?? '';
    const tools = toolsText ? toolsText.split('\n').map(t => t.trim()).filter(t => t) : (doc.tools || []);
    const parts = partsText ? partsText.split('\n').map(t => t.trim()).filter(t => t) : (doc.parts || []);
    const startDate = document.getElementById('editDocStartDate')?.value ?? doc.startDate;
    const dueDate = document.getElementById('editDocDueDate')?.value ?? doc.dueDate;
    const actualFinishDate = document.getElementById('editDocFinishDate')?.value ?? doc.actualFinishDate;

    DataStore.updateDoc(doc.id, {
      title, productId, type, author, status, progress, description,
      difficulty, estimatedTime, tools, parts,
      startDate, dueDate, actualFinishDate
    });

    // 显示保存成功提示 + 更新状态栏
    this.showToast && this.showToast('文档已保存！');
    this.setSaveStatusUI('saved');
  },

  publishDoc() {
    // 与普通保存保持同一数据模型，避免发布后多页内容重复。
    this._saveContinuousContent();
    const title = document.getElementById('editDocTitle').value;
    const productId = document.getElementById('editDocProduct').value;
    const type = document.getElementById('editDocType').value;
    const author = document.getElementById('editDocAuthor').value;
    const description = document.getElementById('editDocDesc').value;
    const difficulty = document.getElementById('editDocDifficulty').value;
    const estimatedTime = document.getElementById('editDocTime').value;
    const toolsText = document.getElementById('editDocTools').value;
    const partsText = document.getElementById('editDocParts').value;
    const tools = toolsText.split('\n').map(t => t.trim()).filter(t => t);
    const parts = partsText.split('\n').map(t => t.trim()).filter(t => t);
    const startDate = document.getElementById('editDocStartDate')?.value || '';
    const dueDate = document.getElementById('editDocDueDate')?.value || '';
    const finishDate = document.getElementById('editDocFinishDate')?.value || '';
    const today = new Date().toISOString().split('T')[0];
    DataStore.updateDoc(this.editorDocId, {
      title, productId, type, author, description,
      difficulty, estimatedTime, tools, parts,
      status: 'published',
      progress: 100,
      startDate: startDate || today,
      dueDate,
      actualFinishDate: finishDate || today
    });
    if (confirm('文档已成功发布！是否前往预览？')) {
      this.navigate('doc', { docId: this.editorDocId });
    } else {
      this.navigate('admin', { adminTab: 'docs' });
    }
  },

  // 友好的提示（替代原生 alert，不阻塞 UI）
  notify(message, type = 'info', duration = 3500) {
    return this.showToast(message, type, duration);
  },

  // 友好的确认（替代原生 confirm）—— 返回 Promise<boolean>
  confirmDialog(message, options = {}) {
    return new Promise((resolve) => {
      const confirmText = options.confirmText || this.t('common.confirm') || '确定';
      const cancelText = options.cancelText || this.t('common.cancel') || '取消';
      const title = options.title || this.t('common.confirmTitle') || '请确认';

      const overlay = document.createElement('div');
      overlay.className = 'modal-overlay confirm-overlay';
      overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.45);z-index:100000;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.2s ease-out;';
      overlay.innerHTML = `
        <div class="confirm-dialog" style="background:var(--surface,#fff);border-radius:12px;padding:24px;max-width:420px;width:90%;box-shadow:0 12px 36px rgba(0,0,0,0.25);">
          <div style="font-size:16px;font-weight:600;color:var(--text,#1f2937);margin-bottom:8px;">${title}</div>
          <div style="font-size:14px;color:var(--gray-600,#4b5563);line-height:1.6;margin-bottom:20px;">${message}</div>
          <div style="display:flex;gap:8px;justify-content:flex-end;">
            <button class="btn btn-secondary" data-action="cancel" style="padding:8px 16px;border:1px solid var(--gray-300,#d1d5db);background:transparent;border-radius:6px;cursor:pointer;font-size:13px;color:var(--text,#1f2937);">${cancelText}</button>
            <button class="btn btn-primary" data-action="ok" style="padding:8px 16px;background:var(--primary,#3b82f6);color:white;border:none;border-radius:6px;cursor:pointer;font-size:13px;">${confirmText}</button>
          </div>
        </div>
      `;

      const cleanup = (result) => {
        if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        document.removeEventListener('keydown', onKey);
        resolve(result);
      };
      const onKey = (e) => {
        if (e.key === 'Escape') cleanup(false);
        else if (e.key === 'Enter') cleanup(true);
      };

      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) cleanup(false);
      });
      overlay.querySelector('[data-action="cancel"]').onclick = () => cleanup(false);
      overlay.querySelector('[data-action="ok"]').onclick = () => cleanup(true);
      document.addEventListener('keydown', onKey);
      document.body.appendChild(overlay);
    });
  },

  showToast(msg, type = 'success', duration) {
    // 移除已有的 toast
    const existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    const toast = document.createElement('div');
    toast.className = 'toast-notification toast-' + type;
    toast.setAttribute('role', 'alert');
    const icon = type === 'success' ? '✅' : type === 'error' ? '❌' : type === 'warning' ? '⚠️' : 'ℹ️';
    toast.innerHTML = '<span class="toast-icon">' + icon + '</span><span class="toast-text">' + msg + '</span><button class="toast-close" aria-label="关闭" style="margin-left:12px;background:transparent;border:none;color:white;font-size:18px;cursor:pointer;opacity:0.8;padding:0 4px;">×</button>';
    toast.querySelector('.toast-close').onclick = () => toast.remove();

    // 自动消失时长：自定义 > 错误默认 4500 > 成功默认 2500
    const finalDuration = duration || (type === 'error' ? 4500 : 2500);

    document.body.appendChild(toast);

    // 触发入场动画
    requestAnimationFrame(() => toast.classList.add('toast-show'));

    setTimeout(() => {
      toast.classList.remove('toast-show');
      toast.classList.add('toast-hide');
      setTimeout(() => toast.remove(), 300);
    }, finalDuration);
  },

  // 初始化表格列宽拖拽
  initTableResize() {
    const tables = document.querySelectorAll('table[data-col-resize="true"]');
    tables.forEach(table => {
      const ths = table.querySelectorAll('thead th');
      ths.forEach((th, index) => {
        // 跳过最后一列（操作列）。第一列如果是复选框则通常被关闭拖拽（无意义）；
        // 这里对第一列也跳过（不创建 resizer），避免误操作；如需调整可放开。
        if (index === ths.length - 1) return;
        if (index === 0 && ths[0].querySelector('input[type="checkbox"]')) return;
        // 检查是否已有 resizer
        if (th.querySelector('.col-resizer')) return;
        
        const resizer = document.createElement('div');
        resizer.className = 'col-resizer';
        resizer.title = '拖拽调整列宽';
        
        let startX = 0;
        let startWidth = 0;
        let colIndex = index;
        
        const onMouseDown = (e) => {
          e.preventDefault();
          e.stopPropagation();
          startX = e.pageX;
          startWidth = th.offsetWidth;
          colIndex = index;
          resizer.classList.add('active');
          document.body.classList.add('table-resizing');
          
          const onMouseMove = (e) => {
            const diff = e.pageX - startX;
            const newWidth = Math.max(50, startWidth + diff);
            th.style.width = newWidth + 'px';
            th.style.minWidth = newWidth + 'px';
            
            // 同步更新同列的所有单元格
            const rows = table.querySelectorAll('tr');
            rows.forEach(row => {
              const cells = row.querySelectorAll('td, th');
              if (cells[colIndex]) {
                cells[colIndex].style.width = newWidth + 'px';
                cells[colIndex].style.minWidth = newWidth + 'px';
              }
            });
          };
          
          const onMouseUp = () => {
            resizer.classList.remove('active');
            document.body.classList.remove('table-resizing');
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
          };
          
          document.addEventListener('mousemove', onMouseMove);
          document.addEventListener('mouseup', onMouseUp);
        };
        
        resizer.addEventListener('mousedown', onMouseDown);
        th.appendChild(resizer);
      });
    });
  },

  // 关键词高亮：先去除已有的 <mark> 包裹避免嵌套
  highlightText(text, query) {
    if (!query || !text) return text;
    // 先剥离已有 <mark>...</mark>
    const cleaned = String(text).replace(/<\/?mark[^>]*>/gi, '');
    const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${safeQuery})`, 'gi');
    return cleaned.replace(regex, '<mark class="search-highlight">$1</mark>');
  },

  showShortcuts() {
    const shortcuts = [
      { key: 'Ctrl + B', desc: '加粗', icon: '𝐁' },
      { key: 'Ctrl + I', desc: '斜体', icon: '𝐼' },
      { key: 'Ctrl + U', desc: '下划线', icon: 'U̲' },
      { key: 'Ctrl + Z', desc: '撤销', icon: '↶' },
      { key: 'Ctrl + Y', desc: '重做', icon: '↷' },
      { key: 'Ctrl + S', desc: '保存文档', icon: '💾' },
      { key: 'Ctrl + H', desc: '查找替换', icon: '🔄' },
      { key: 'Ctrl + C', desc: '复制', icon: '📋' },
      { key: 'Ctrl + V', desc: '粘贴', icon: '📌' },
      { key: 'Ctrl + A', desc: '全选', icon: '📑' },
      { key: 'Ctrl + K / L', desc: '插入链接', icon: '🔗' },
      { key: 'Ctrl + Shift + T', desc: 'AI 翻译整篇', icon: '🌐' },
      { key: 'Ctrl + Enter', desc: '插入分页符', icon: '↵' },
      { key: 'Tab', desc: '缩进 / 表格下一格', icon: '→' },
      { key: 'Shift + Tab', desc: '减少缩进 / 表格上一格', icon: '←' },
      { key: 'Enter', desc: '换行 / 表格末尾新增行', icon: '↵' },
      { key: 'Esc', desc: '取消格式刷 / 关闭弹窗', icon: '⎋' },
    ];
    const modal = document.createElement('div');
    modal.className = 'shortcut-modal';
    modal.innerHTML = `
      <div class="shortcut-modal-content">
        <div class="shortcut-modal-header">
          <h3>⌨️ 编辑器快捷键</h3>
          <button class="shortcut-close" onclick="this.closest('.shortcut-modal').remove()">✕</button>
        </div>
        <div class="shortcut-grid">
          ${shortcuts.map(s => `
            <div class="shortcut-item">
              <span class="shortcut-icon">${s.icon}</span>
              <div style="flex:1;">
                <div class="shortcut-desc">${s.desc}</div>
                <div class="shortcut-key">${s.key}</div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="shortcut-tip">
          💡 提示：Mac 用户可将 Ctrl 替换为 ⌘ Command
        </div>
      </div>
    `;
    modal.onclick = (e) => {
      if (e.target === modal) modal.remove();
    };
    document.body.appendChild(modal);
  },

  // ========================================
  // 导出功能
  // ========================================
  // 通用 CSV 导出方法
  exportToCSV(headers, rows, filename) {
    // 添加 BOM 以支持 Excel 正确识别中文
    const BOM = '\uFEFF';
    const csvContent = BOM + [
      headers.join(','),
      ...rows.map(row => row.map(cell => {
        const str = String(cell ?? '');
        // 包含逗号、引号、换行的字段需要加引号
        if (str.includes(',') || str.includes('"') || str.includes('\n')) {
          return '"' + str.replace(/"/g, '""') + '"';
        }
        return str;
      }).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  },

  // 导出文档明细
  exportDocsCSV() {
    let docs = DataStore.getDocuments();
    const products = DataStore.getProducts();
    const docTypes = DataStore.getDocTypes();
    const statusMap = {
      published: '已发布',
      review: '审核中',
      developing: '开发中',
      planning: '规划中',
      draft: '草稿'
    };

    // 如果当前在文档管理页且有筛选条件，导出筛选结果
    if (this.currentRoute === 'admin' && this.docTab === 'docs' && (this.docSearch || this.docStatusFilter !== 'all' || this.docProductFilter !== 'all')) {
      if (this.docSearch) {
        const q = this.docSearch.toLowerCase();
        docs = docs.filter(d => d.title.toLowerCase().includes(q) || d.description.toLowerCase().includes(q) || d.author.toLowerCase().includes(q));
      }
      if (this.docStatusFilter !== 'all') docs = docs.filter(d => d.status === this.docStatusFilter);
      if (this.docProductFilter !== 'all') docs = docs.filter(d => d.productId === this.docProductFilter);
    }

    const headers = ['序号', '文档标题', '文档描述', '所属产品', '文档类型', '状态', '完成进度', '负责人', '开始时间', '预计完成', '实际完成', '页数', '阅读量', '创建日期', '更新日期'];
    const rows = docs.map((d, i) => {
      const product = products.find(p => p.id === d.productId);
      const typeInfo = docTypes.find(t => t.id === d.type);
      return [
        i + 1,
        d.title,
        d.description,
        product ? product.name : '',
        typeInfo ? typeInfo.name : '',
        statusMap[d.status] || d.status,
        d.progress + '%',
        d.author,
        d.startDate || '',
        d.dueDate || '',
        d.actualFinishDate || '',
        d.pages,
        d.views,
        d.createdAt,
        d.updatedAt
      ];
    });

    const date = new Date().toISOString().split('T')[0];
    this.exportToCSV(headers, rows, `文档明细_${date}.csv`);
    this.showToast(`已导出 ${docs.length} 条文档明细`);
  },

  // 导出视频明细
  exportVideosCSV() {
    let vids = DataStore.getVideos();
    const products = DataStore.getProducts();
    const categories = DataStore.getVideoCategories();
    const statusMap = {
      published: '已发布',
      review: '审核中',
      developing: '制作中',
      planning: '规划中',
      draft: '草稿'
    };

    // 如果当前在视频管理页且有筛选条件，导出筛选结果
    if (this.currentRoute === 'admin' && this.docTab === 'videos' && (this.videoSearch || this.videoStatusFilter !== 'all' || this.videoProductFilter !== 'all')) {
      if (this.videoSearch) {
        const q = this.videoSearch.toLowerCase();
        vids = vids.filter(v => v.title.toLowerCase().includes(q) || v.description.toLowerCase().includes(q) || v.author.toLowerCase().includes(q));
      }
      if (this.videoStatusFilter !== 'all') vids = vids.filter(v => v.status === this.videoStatusFilter);
      if (this.videoProductFilter !== 'all') vids = vids.filter(v => v.productId === this.videoProductFilter);
    }

    const headers = ['序号', '视频标题', '视频描述', '所属产品', '视频分类', '时长', '状态', '进度', '负责人', '开始时间', '预计完成', '实际完成', '观看量', '创建日期', '更新日期'];
    const rows = vids.map((v, i) => {
      const product = products.find(p => p.id === v.productId);
      const catInfo = categories.find(c => c.id === v.category);
      return [
        i + 1,
        v.title,
        v.description,
        product ? product.name : '',
        catInfo ? catInfo.name : (v.category || ''),
        v.duration,
        statusMap[v.status] || v.status,
        v.progress + '%',
        v.author,
        v.startDate || '',
        v.dueDate || '',
        v.actualFinishDate || '',
        v.views,
        v.createdAt,
        v.updatedAt
      ];
    });

    const date = new Date().toISOString().split('T')[0];
    this.exportToCSV(headers, rows, `视频明细_${date}.csv`);
    this.showToast(`已导出 ${vids.length} 条视频明细`);
  },

  // 导出汇总报表（给领导汇报用）
  exportSummaryReport() {
    const stats = DataStore.getStats();
    const productProgress = DataStore.getProductProgress();
    const team = DataStore.getTeamMembers();
    const date = new Date().toLocaleDateString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric' });

    // Bug #29 修复：用 exportToCSV 通用方法替代手工拼接；含逗号/引号的字段会被正确转义
    const rows = [];
    // 标题与日期作为首行注释
    rows.push([`${SITE_NAME} - 售后技术支持汇总报表（生成日期：${date}）`, '', '', '']);
    rows.push(['', '', '', '']);
    rows.push(['【一、整体数据概览】', '', '', '']);
    rows.push(['指标', '数值', '', '']);
    rows.push(['产品总数', stats.totalProducts, '', '']);
    rows.push(['文档总数', stats.totalDocs, '', '']);
    rows.push(['  已发布', stats.publishedDocs, '', '']);
    rows.push(['  审核中', stats.reviewDocs, '', '']);
    rows.push(['  开发中', stats.developingDocs, '', '']);
    rows.push(['  规划中', stats.planningDocs, '', '']);
    rows.push(['  草稿', stats.draftDocs, '', '']);
    rows.push(['视频总数', stats.totalVideos, '', '']);
    rows.push(['  已发布', stats.publishedVideos, '', '']);
    rows.push(['  制作中', stats.developingVideos, '', '']);
    rows.push(['累计阅读量', stats.totalViews, '', '']);
    rows.push(['团队人数', stats.teamSize, '', '']);
    rows.push(['', '', '', '']);
    rows.push(['【二、各产品线进度明细】', '', '', '']);
    productProgress.forEach(pp => {
      rows.push([pp.product.name, pp.product.category, `文档${pp.docCount}/视频${pp.videoCount}`, `已完成${pp.publishedItems}/${pp.totalItems} (${pp.avgProgress}%)`]);
    });
    rows.push(['', '', '', '']);
    rows.push(['【三、团队成员产出统计】', '', '', '']);
    const statusMap = { online: '在线', offline: '离线', busy: '忙碌' };
    team.forEach(m => {
      rows.push([m.name, m.role, `文档${m.docs}篇`, statusMap[m.status] || m.status]);
    });

    this.exportToCSV(
      ['项目', '数值/分类', '说明', '状态'],
      rows,
      `售后文档汇总报表_${new Date().toISOString().split('T')[0]}.csv`
    );
    this.showToast('汇总报表已导出');
  },

  // ========================================
  // 事件绑定
  // ========================================
  bindEvents() {
    // 全局事件（document 级别）只需绑定一次：用 _globalEventsBound 守卫
    if (!this._globalEventsBound) {
      this._globalEventsBound = true;

      // 回到顶部按钮显示/隐藏 + 导航栏滚动效果 + 顶部进度条
      const checkScroll = () => {
        const backToTop = document.getElementById('backToTopBtn');
        const navbar = document.querySelector('.navbar');
        const progress = document.getElementById('scrollProgressBar');
        if (backToTop) {
          if (window.scrollY > 300) backToTop.classList.add('show');
          else backToTop.classList.remove('show');
        }
        if (navbar) {
          if (window.scrollY > 20) navbar.classList.add('scrolled');
          else navbar.classList.remove('scrolled');
        }
        if (progress) {
          const docHeight = document.documentElement.scrollHeight - window.innerHeight;
          const pct = docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0;
          progress.style.width = pct + '%';
        }
      };
      window.addEventListener('scroll', checkScroll, { passive: true });
      checkScroll();

      // 图片点击打开灯箱
      document.addEventListener('click', (e) => {
        // 检查 IMG 是否在可触发灯箱的容器内（文档正文、文档预览模态、编辑器、doc 内容块）
        if (e.target.tagName !== 'IMG') return;
        const trigger = e.target.closest('.doc-page-body, .doc-page-content, .editor-content, .doc-preview-page-body, .doc-preview-body, .video-modal-body');
        if (trigger) {
          e.preventDefault();
          this.openImageLightbox(e.target.src, e.target.alt);
        }
      });

      // 灯箱键盘导航
      document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('imageLightbox');
        if (!lightbox) return;
        if (e.key === 'Escape') lightbox.remove();
        else if (e.key === 'ArrowLeft') this.navigateLightbox(-1);
        else if (e.key === 'ArrowRight') this.navigateLightbox(1);
      });

      // 全局 ESC 关闭模态框（但不要在编辑器内误关）
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          const inEditor = e.target && e.target.closest && e.target.closest('.editor-content');
          if (inEditor) return; // 编辑器内 ESC 由编辑器自身处理
          const modal = document.querySelector('.modal-overlay');
          if (modal) { modal.remove(); return; }
          const shortcut = document.querySelector('.shortcut-modal');
          if (shortcut) { shortcut.remove(); return; }
        }
        // Ctrl/Cmd+K 聚焦全局搜索框
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
          e.preventDefault();
          const searchInput = document.getElementById('globalSearch');
          if (searchInput) {
            searchInput.focus();
            searchInput.select();
          }
          return;
        }
      });
    }

    // doc viewer 阅读进度更新 + 目录高亮：每次 render 都重新绑定（页面元素会被重建）
    const docScroll = document.getElementById('docPagesScroll');
    if (docScroll) {
      // 阅读进度
      if (!docScroll.dataset.progressBound) {
        docScroll.dataset.progressBound = '1';
        const updateDocProgress = () => {
          const container = docScroll;
          const pctEl = document.getElementById('docReadPercent');
          const dotEl = container.parentElement && container.parentElement.querySelector('#docReadProgress span:first-child');
          if (!pctEl) return;
          const maxScroll = container.scrollHeight - container.clientHeight;
          const pct = maxScroll > 0 ? Math.min(100, Math.round((container.scrollTop / maxScroll) * 100)) : 0;
          pctEl.textContent = pct + '%';
          if (dotEl) {
            dotEl.style.background = pct >= 100 ? 'var(--secondary)' : 'var(--primary)';
            dotEl.style.opacity = pct >= 100 ? '1' : '0.6';
          }
        };
        docScroll.addEventListener('scroll', updateDocProgress, { passive: true });
        setTimeout(updateDocProgress, 100);
      }

      // 目录高亮（IntersectionObserver）
      if (!docScroll.dataset.tocBound) {
        docScroll.dataset.tocBound = '1';
        const headings = docScroll.querySelectorAll('.doc-page-body h1, .doc-page-body h2, .doc-page-body h3');
        let tocIdx = 0;
        headings.forEach(h => {
          h.setAttribute('data-toc-idx', tocIdx++);
        });

        if (typeof IntersectionObserver !== 'undefined') {
          let activeIdx = 0;
          const observer = new IntersectionObserver((entries) => {
            // 找到所有可见项中最靠上的（top 最小但 ≥ 0）
            let bestIdx = -1, bestTop = Infinity;
            entries.forEach(entry => {
              if (entry.isIntersecting) {
                const rect = entry.target.getBoundingClientRect();
                const containerRect = docScroll.getBoundingClientRect();
                const top = rect.top - containerRect.top;
                if (top >= 0 && top < bestTop) {
                  bestTop = top;
                  bestIdx = parseInt(entry.target.getAttribute('data-toc-idx'), 10);
                }
              }
            });
            if (bestIdx >= 0) {
              activeIdx = bestIdx;
              this._highlightTocItem(activeIdx);
            }
          }, {
            root: docScroll,
            // heading 进入视窗顶部约 80px 视为激活
            rootMargin: '-80px 0px -60% 0px',
            threshold: 0
          });
          headings.forEach(h => observer.observe(h));
        }
      }
    }

    // input 元素（render 后会被替换）：每次 render 重新绑定
    // 用 _searchInputBound 标记当前节点，避免同一节点重复绑
    const searchInput = document.getElementById('globalSearch');
    if (searchInput && searchInput !== this._searchInputEl) {
      if (this._searchInputEl) {
        this._searchInputEl.removeEventListener('keydown', this._searchHandler);
      }
      this._searchInputEl = searchInput;
      this._searchHandler = (e) => {
        if (e.key === 'Enter') this.doGlobalSearch();
      };
      searchInput.addEventListener('keydown', this._searchHandler);
    }
  }
};

// 初始化应用
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
