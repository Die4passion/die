import{ad as r,H as c,I as d,F as e,U as n,O as s,af as a,ae as o,X as i}from"./framework-0d2eacdd.js";const u={},p=e("h2",{id:"静态托管",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#静态托管","aria-hidden":"true"},"#"),n(" 静态托管")],-1),h=e("p",null,[n("如果国内静态资源库没有你要的静态包，推荐用 "),e("code",null,"npm i"),n(" 命令将静态包下载到本地，并部署到阿里云/七牛云的国内服务器上，避免网页受 UNPKG 和 jsDelivr 屏蔽影响而出现偏差。")],-1),m=e("p",null,"静态资源库：",-1),_={href:"https://cdn.bytedance.com/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://www.staticfile.org/",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,"emoji 等可以使用静态资源库上的项目，比如 twemoji，上面有集成 png 图片。",-1),f=e("h3",{id:"npm-包",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#npm-包","aria-hidden":"true"},"#"),n(" NPM 包")],-1),k=e("strong",null,"有墙风险且不稳定",-1),g=e("code",null,"@latest",-1),S={href:"https://segmentfault.com/a/1190000023075167",target:"_blank",rel:"noopener noreferrer"},P={href:"https://www.npmjs.com/",target:"_blank",rel:"noopener noreferrer"},w=e("code",null,"https://unpkg.com/",-1),y={href:"https://npmmirror.com/",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"https://registry.npmmirror.com/项目名/版本号",-1),F=e("li",null,[n("UNPKG 镜像：有资源可以用服务器自建服务，反向代理 unpkg。 "),e("ul",null,[e("li",null,[e("s",null,[n("饿了么 CDN（已关）：国内唯一能用的 npm 镜像，2022.07.13 发现外部访问被拒绝。之前饿了么并没说支持对外，可能已经彻底取消了。使用饿了么 CDN 时，注意 "),e("code",null,"https://npm.elemecdn.com/react@latest/"),n(" 需要时间更新，具体频率未知，可固定大版本号来获取更新 "),e("code",null,"https://npm.elemecdn.com/react@^18/"),n("。")])])])],-1),D={href:"https://statically.io/",target:"_blank",rel:"noopener noreferrer"},N=e("li",null,[e("s",null,[n("jsDelivr（已墙）：速度最快，原本是最稳的，但域名暴雷后，经常断开，2022.06.01 彻底打不开。配合 Github action，更新后自动访问 jsdelivr CDN 缓存刷新链接，保持页面常新。刷新命令参考 "),e("code",null,"curl https://purge.jsdelivr.net/gh/username/project/file"),n("。")])],-1),G=e("p",null,"第三方托管过于不稳定，最终我转为自托管 oss.newzone.top。",-1),C=e("h3",{id:"部署平台",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署平台","aria-hidden":"true"},"#"),n(" 部署平台")],-1),T=e("li",null,"Pages：部署简单，外网速度很快，但国内速度不稳，而且 page.dev 域名有时会被墙，可购买便宜的临时域名（一年）来解决该问题。",-1),I=e("li",null,"Netlify：国内速度慢点，图片容易卡死，但还算稳定。",-1),E=e("li",null,"Vercel：推荐使用 GitHub 账户登录，有可能需要绑定国外手机号（不支持 Voice）。2022.08.26，「*.vercel.app」域名被 DNS 污染，需要绑定自定义域名。",-1),H=e("li",null,"AWS: 邮箱注册，不过需要信用卡认证。",-1),j=e("li",null,"国内平台：Gitee、WuliHub、CODING，都需要实名认证。",-1),A=e("h3",{id:"ipfs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ipfs","aria-hidden":"true"},"#"),n(" IPFS")],-1),K=e("p",null,[n("IPFS 无需服务器就可建立静态网站，号称永不失效，但"),e("strong",null,"国内稳定性成疑问，实用性一般"),n("。IPFS 托管在一个网关上，并不会自动复制到所有网关。")],-1),L={href:"https://pinata.cloud/",target:"_blank",rel:"noopener noreferrer"},R=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),V=e("p",null,"上传 ipfs 到 pinata 之后，cloudflare 等其他网关不一定会完全复制文件，php 无法抓取加载，所以不建议使用 cloudflare 网关。",-1),$=e("p",null,[n("cloudflare 接管 pinata 后，ipfs 域名需通过「pinata 托管」>「cloudflare DNS」>「cloudflare SSL」。如果中途将 DNS 指向 "),e("code",null,"http://gateway.pinata.cloud"),n(" 等非 cloudflare ipfs 网关域名，cloudflare SSL 证书将失效。即便把链接改为非加密的 http，pinata 依然会视之为无效链接而拒绝访问。")],-1),q={href:"https://www.cloudflare.com/zh-cn/distributed-web-gateway/",target:"_blank",rel:"noopener noreferrer"},B={href:"http://xxx.example.com",target:"_blank",rel:"noopener noreferrer"},M=e("code",null,"cloudflare-ipfs.com",-1),U=e("li",null,[e("code",null,"_dnslink.xxx.example.com"),n(" 设置为 "),e("code",null,"dnslink=/ipfs/<your_ipfs_hash_here>"),n("。")],-1),W=e("h2",{id:"github-同步到-vps",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#github-同步到-vps","aria-hidden":"true"},"#"),n(" GitHub 同步到 VPS")],-1),O=e("p",null,"代码、文章推送到 GitHub 后，会自动生成可访问的网页，但国内访问 GitHub Pages 的速度极不稳定，为了确保网站能被正常访问，必须增加国内的访问节点。",-1),z=e("p",null,"很多人选择 Gitee Pages 作为国内节点，GitHub Actions 将新文档同步到 Gitee，生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 的限制非常多，免费版无法自定义域名，必须实名验证，更别提近期的下架风波。因此，我没选 Gitee，而是把文档同步到国内服务器（域名需备案）。",-1),Y=e("p",null,"!> 注意：文件夹不要有大写字母，否则同步时容易出错。",-1),X=e("h3",{id:"同步到-ftp",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#同步到-ftp","aria-hidden":"true"},"#"),n(" 同步到 FTP")],-1),Z={href:"https://github.com/SamKirkland/FTP-Deploy-Action",target:"_blank",rel:"noopener noreferrer"},J=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>on: push
name: 🚀 Deploy website on push
jobs:
  web-deploy:
    name: 🎉 Deploy
    runs-on: ubuntu-latest
    steps:
    - name: 🚚 Get latest code
      uses: actions/checkout@v3

    - name: 📂 Sync files
      uses: SamKirkland/FTP-Deploy-Action@4.3.0
      with:
        server: <span class="token variable">\${{ secrets.ftp_host }</span><span class="token punctuation">}</span>
        username: <span class="token variable">\${{ secrets.ftp_username }</span><span class="token punctuation">}</span>
        password: <span class="token variable">\${{ secrets.ftp_password }</span><span class="token punctuation">}</span>
        port: <span class="token variable">\${{ secrets.ftp_port }</span><span class="token punctuation">}</span> <span class="token comment"># 建议更改默认的 21 端口</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>新建 FTP 时，需在云服务商的安全组和服务器上开放 FTP 端口，并临时暂停宝塔系统加固等安全插件（新建 FTP 容易与安全插件冲突）。</p><p>如果出现 <code>FTPError: 530 Login authentication failed</code>，则说明 FTP 密码错误或账号不存在，需用 FileZilla 测试 FTP 的有效性。确认 FTP 无效后，检查 FTP 密码是否填写正确，是否只有大小写字母和数字。如果密码错误，则在 github secrets 重新 update 密钥。如果密码正确，则进入 <code>/www/server/pure-ftpd/etc/pureftpd.passwd</code>，检查是否有该 FTP 账户。没有 FTP 账户的话，<strong>暂停宝塔系统加固</strong>等安全插件后，重新新建 FTP。</p><p>如果出现 <code>Error: Timeout (control socket)</code>，则说明同步服务器超时，可进入 Actions 页面点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭防火墙，测试是否 GitHub 服务器被拉黑了。</p><h3 id="ssh-同步" tabindex="-1"><a class="header-anchor" href="#ssh-同步" aria-hidden="true">#</a> SSH 同步</h3>`,5),Q={href:"https://github.com/SamKirkland/web-deploy",target:"_blank",rel:"noopener noreferrer"},ee=e("h3",{id:"同步到-oss",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#同步到-oss","aria-hidden":"true"},"#"),n(" 同步到 oss")],-1),ne={href:"https://github.com/marketplace/actions/aliyun-oss-website-action",target:"_blank",rel:"noopener noreferrer"},se=o(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>name: deploy md to oss
on:
  push:
    branches: <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>
  pull_request:
    branches: <span class="token punctuation">[</span> <span class="token string">&quot;main&quot;</span> <span class="token punctuation">]</span>
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    <span class="token comment"># load repo to /github/workspace</span>
    - uses: actions/checkout@v3
    - name: Use Node.js
      uses: actions/setup-node@v3
      with:
        node-version: <span class="token string">&#39;14.x&#39;</span>
    <span class="token comment"># 打包文档命令</span>
    <span class="token comment"># - run: npm install yarn@1.22.4 -g</span>
    <span class="token comment"># - run: yarn install</span>
    <span class="token comment"># - run: yarn docs:build #需要配合 yarn 的 package.json</span>
    - name: aliyun-oss-website-action
      uses: fangbinwei/aliyun-oss-website-action@v1.3.0
      with:
          accessKeyId: <span class="token variable">\${{ secrets.ACCESS_KEY_ID }</span><span class="token punctuation">}</span>
          accessKeySecret: <span class="token variable">\${{ secrets.ACCESS_KEY_SECRET }</span><span class="token punctuation">}</span>
          bucket: learndata-notes
          <span class="token comment"># use your own endpoint</span>
          endpoint: oss-cn-shanghai.aliyuncs.com
          <span class="token comment"># 全目录上传</span>
          folder: <span class="token builtin class-name">.</span>
          <span class="token comment"># 不上传的文件</span>
          exclude: <span class="token operator">|</span>
            .github/
            .gitattributes
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr class="footnotes-sep">`,2),te={class:"footnotes"},le={class:"footnotes-list"},ae={id:"footnote1",class:"footnote-item"},ie={href:"https://medium.com/pinata/how-to-easily-host-a-website-on-ipfs-9d842b5d6a01",target:"_blank",rel:"noopener noreferrer"},oe=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function re(ce,de){const t=i("ExternalLinkIcon"),l=i("RouterLink");return c(),d("div",null,[p,h,m,e("ul",null,[e("li",null,[e("a",_,[n("字节 CDN"),s(t)]),n("：国内测速表现最佳，缓存过期时间最长设置一年。")]),e("li",null,[e("a",b,[n("Staticfile CDN"),s(t)]),n("：CDN 加速由七牛云提供。")])]),v,f,e("ul",null,[e("li",null,[n("UNPKG："),k,n("，默认为最新版本，无需 "),g,n(" 标签。 "),e("ul",null,[e("li",null,[n("将静态文件发布为 npm 包，参考 "),e("a",S,[n("一分钟教你发布 npm 包"),s(t)]),n("。")]),e("li",null,[n("加速：在 "),e("a",P,[n("npm 官方源"),s(t)]),n(" 中搜索包位置，然后使用前缀 "),w,n("。")])])]),e("li",null,[e("a",y,[n("NPM MIRROR"),s(t)]),n("：NPM 项目的国内镜像镜像，不能做静态托管用途。"),x,n(" 可以看见项目的各种信息，但看不了里面的文件。")]),F,e("li",null,[n("GitHub：基于 GitHub 公共仓库的资源托管，资源不会失效，但有时需要根据 CDN 服务商而更换域名。 "),e("ul",null,[e("li",null,[e("s",null,[e("a",D,[n("Statically"),s(t)]),n("：jsDeliver 的替代品，在中国大陆所有地区连接异常。")])]),N])])]),G,C,e("ul",null,[e("li",null,[n("Cloudflare：Pages 和 Workers 两类部署方式。 "),e("ul",null,[e("li",null,[s(l,{to:"/deploy/Cloudflare.html#%E5%8F%8D%E5%90%91%E4%BB%A3%E7%90%86"},{default:a(()=>[n("Workers")]),_:1}),n("：复制镜像网站，可直接访问，但反向代理稳定性成疑。")]),T])]),I,E,H,j]),A,K,e("p",null,[e("a",L,[n("pinata"),s(t)]),n(" 上传网站构建的目录文件夹，上传后，即可通过 IPFS Hash 访问。网站目录中必须有 index.html，否则网页中将显示网站目录。即使有 index.html，其他人在拥有 CID 后，可以通过 IPFS Desktop 来获取网站的完整目录。为确保私密性，建议只上传单文件。使用单文件 CID 视为单一网站，不可调用原目录中的文件。"),R]),V,$,e("p",null,[n("对于文件较少且链接有效的域名，可按 "),e("a",q,[n("Cloudflare IPFS"),s(t)]),n(" 页面说明来设置 DNS，提交 IPFS 域名 30 分钟后，即可获取 SSL 证书。")]),e("ol",null,[e("li",null,[n("添加 CNAME 记录，将你的 IPFS 域名 ("),e("a",B,[n("xxx.example.com"),s(t)]),n(") 指向 "),M,n("。")]),U]),W,O,z,Y,X,e("p",null,[n("如果你有 FTP 服务器，可使用 "),e("a",Z,[n("FTP-Deploy-Action"),s(t)]),n(" 将 github 代码推送到服务器上。Actions 步骤参考 "),s(l,{to:"/deploy/GitHub.html"},{default:a(()=>[n("GitHub 说明")]),_:1}),n("。")]),J,e("p",null,[n("如果你拥有服务器所有权限，可以使用 "),e("a",Q,[n("web-deploy"),s(t)]),n(" 以 SSH 同步方式发布页面。但与 FTP 同步方式相比，是否安全性、速度、时间有区别，我还没测试过，仅做记录，")]),ee,e("p",null,[n("如果没有服务器，可以把文件部署在云运营商的云存储上。比如用 "),e("a",ne,[n("aliyun-oss-website-action"),s(t)]),n("，将 repo 文件 build 成网站文件，然后同步到阿里云 oss 并运行网站。")]),se,e("section",te,[e("ol",le,[e("li",ae,[e("p",null,[e("a",ie,[n("How to Easily Host a Website on IPFS"),s(t)]),n(),oe])])])])])}const pe=r(u,[["render",re],["__file","Static.html.vue"]]);export{pe as default};
