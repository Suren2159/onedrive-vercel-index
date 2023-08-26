/**
* 该文件包含我们使用的 API 端点和令牌的配置。
  *
  * - 如果您是 OneDrive International 用户，则无需在此处进行任何更改。
  * - 如果您不是 OneDrive for Business 帐户的管理员，您可能需要定义自己的 clientId/clientSecret，
  * 检查文档以获取更多详细信息。
  * - 如果您使用的是 E5 订阅 OneDrive for Business 帐户，则您的文件的直接链接与此处不同。
  * 在这种情况下，您需要更改 directLinkRegex。
 */
module.exports = {
   // clientId 和 clientSecret 用于使用 OAuth 通过 Microsoft Graph API 对用户进行身份验证。 你会
   // 如果您可以使用 OneDrive International 的个人 Microsoft 帐户进行身份验证，则无需在此处进行任何更改。
  clientId: 'd87bcc39-1750-4ca0-ad54-f8d0efbb2735',
  obfuscatedClientSecret: 'U2FsdGVkX1830zo3/pFDqaBCVBb37iLw3WnBDWGF9GIB2f4apzv0roemp8Y+iIxI3Ih5ecyukqELQEGzZlYiWg==',

   // redirectUri 是用户通过 Microsoft Graph API 进行身份验证后将被重定向到的 URL。
   // 同样，如果您使用 OneDrive International 的个人 Microsoft 帐户，则无需更改redirectUri。
  redirectUri: 'http://localhost',

   // 这些是 OneDrive API 端点的 URL。 如果您使用的是 OneDrive International，则无需在此处进行任何更改
   // 或 E5 订阅 OneDrive for Business。 如果您使用 OneDrive 世纪互联，您可能需要更改这些。
  authApi: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
  driveApi: 'https://graph.microsoft.com/v1.0/me/drive',

  // 此处列出了我们需要的范围，在大多数情况下您也不需要更改它。
  scope: 'user.read files.read.all offline_access',

  // Cache-Control 标头，请查看 Vercel 文档以了解更多详细信息。 默认设置意味着：
   // - max-age=0: 您的浏览器没有缓存
   // - s-maxage=0：缓存在边缘保持新鲜状态 60 秒，之后就会变得陈旧
   // - stale-while-revalidate：允许在边缘重新验证时提供陈旧内容
  // https://vercel.com/docs/concepts/edge-network/caching
  cacheControlHeader: 'max-age=0, s-maxage=60, stale-while-revalidate',
}
