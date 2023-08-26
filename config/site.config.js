  /**
  * 该文件包含用于自定义网站的配置，例如要共享的文件夹，
  * 标题、使用的 Google 字体、网站图标、联系信息等。
  */
module.exports = {
   // 当您第一次初始化网站时，我们用它来识别您的身份。
   // 确保这与您用于登录 Microsoft 帐户的电子邮件地址完全相同。
   // 如果您担心，也可以将其放入 Vercel 的环境变量“NEXT_PUBLIC_USER_PRINCIPLE_NAME”中
   // 你的电子邮件被公开暴露。
  userPrincipalName: process.env.NEXT_PUBLIC_USER_PRINCIPLE_NAME || 'spencer@spwoo.onmicrosoft.com',

   // [可选] 这是导航栏中标题左侧的网站图标。 它应该放在
   // GitHub 项目的 /public 目录（不是 OneDrive 文件夹！），并在此处通过其相对路径 /public 进行引用。
  icon: '/icons/128.png',

  // KV存储的前缀
  kvPrefix: process.env.KV_PREFIX || '',

  // 您网站的名称。 与您的图标一起展示。
  title: "Spencer's OneDrive",

  // 您要与 onedrive-vercel-index 公开共享的文件夹。 如果您想共享根文件夹，请使用“/”。
  baseDirectory: '/Public',

   // [可选] 这表示一个目录列出的最大项目数，支持分页。
   // 请注意，上游 OneDrive API 限制最多 200 个项目。
  maxItems: 100,

   // [可选] 我们本身使用 Google Fonts 进行字体定制。
   // 您可以在 https://fonts.google.com 检查并生成所需的链接和名称。
   // googleFontSans - onedrive-vercel-index 中使用的无衬线字体。
  googleFontSans: 'Inter',
  //googleFontMono - onedrive-vercel-index 中使用的等宽字体。
  googleFontMono: 'Fira Mono',
  //googleFontLinks - 用于引用 google 字体资源的链接数组。
  googleFontLinks: ['https://fonts.googleapis.com/css2?family=Fira+Mono&family=Inter:wght@400;500;700&display=swap'],

   // [可选] 您网站的页脚组件。 这里可以写HTML，但是需要转义double
   // 引号 - 将 " 更改为 \"。 您可以在这里编写任何内容，如果您喜欢徽章，请使用 https://shields.io 生成一些徽章
  footer:
    'Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>. Made with ❤ by SpencerWoo.',

   // [可选] 您可以在此处指定受密码保护的文件夹。 它是指向所有路径的数组
   // 设置了 .password 的目录。 查看文档了解详细信息。
  protectedRoutes: ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],

  // [可选] 如果您想从导航栏中删除此电子邮件地址，请在此处使用“”。
  email: 'mailto:spencer.wushangbo@gmail.com',

   // [可选] 这是一组名称和链接，用于设置您的社交信息和链接。
   // 在最新的更新中，支持 font Awesome 内的所有品牌图标，并且根据名称渲染图标
   // 你提供。 有关详细信息，请参阅文档。
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/spencerwooo/onedrive-vercel-index',
    },
  ],

  // 这是一个 day.js 风格的日期时间格式字符串，用于在应用程序中格式化日期时间。 参考
   // https://day.js.org/docs/en/display/format 了解详细规范。 默认值为 ISO 8601 完整日期时间
   // 没有时区并用空格替换 T。
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
