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

  // [OPTIONAL] The footer component of your website. You can write HTML here, but you need to escape double
  // quotes - changing " to \". You can write anything here, and if you like badges, generate some with https://shields.io
  footer:
    'Powered by <a href="https://github.com/spencerwooo/onedrive-vercel-index" target="_blank" rel="noopener noreferrer">onedrive-vercel-index</a>. Made with ❤ by SpencerWoo.',

  // [OPTIONAL] This is where you specify the folders that are password protected. It is an array of paths pointing to all
  // the directories in which you have .password set. Check the documentation for details.
  protectedRoutes: ['/🌞 Private folder/u-need-a-password', '/🥟 Some test files/Protected route'],

  // [OPTIONAL] Use "" here if you want to remove this email address from the nav bar.
  email: 'mailto:spencer.wushangbo@gmail.com',

  // [OPTIONAL] This is an array of names and links for setting your social information and links.
  // In the latest update, all brand icons inside font awesome is supported and the icon to render is based on the name
  // you provide. See the documentation for details.
  links: [
    {
      name: 'GitHub',
      link: 'https://github.com/spencerwooo/onedrive-vercel-index',
    },
  ],

  // This is a day.js-style datetime format string to format datetimes in the app. Ref to
  // https://day.js.org/docs/en/display/format for detailed specification. The default value is ISO 8601 full datetime
  // without timezone and replacing T with space.
  datetimeFormat: 'YYYY-MM-DD HH:mm:ss',
}
