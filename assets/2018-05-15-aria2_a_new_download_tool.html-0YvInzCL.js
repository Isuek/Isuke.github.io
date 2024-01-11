import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as s,c as l,a as e,b as o,d as n,e as r}from"./app-LdWiqa9H.js";const c={},d=r('<p>迅雷已经用了 10 年，一直将它视为最快也最方便的下载工具，也一直购买迅雷会员。</p><p>但是，<strong>迅雷已经堕落</strong>。</p><ul><li><code>thunder:\\\\</code> 迅雷专属链接越来越少，下载基本是磁力链接和 BT 种子；</li><li>迅雷会员加速不再有效，大量资源速度为 0（会员虽然还有一年多，但已经没用了）；</li><li>迅雷关闭旧版功能，迫使大家升级迅雷 U 享版，但升级后，发现新版迅雷会强制接收所有下载。 <blockquote><p>有些小文件，我只想用浏览器直接下载，而一些不想下载的链接，也会被迅雷非常敏感地感应到，强制下载，真的特别流氓。</p></blockquote></li></ul><h2 id="为什么选择-aria2" tabindex="-1"><a class="header-anchor" href="#为什么选择-aria2" aria-hidden="true">#</a> 为什么选择 Aria2？</h2><p>Aria2 下载功能比较全面，支持 BT 和磁力链接，性能也相当不错，<strong>速度不比迅雷慢</strong>。</p><p>虽然没有原生应用界面，配置也比较麻烦，但这些可以通过懒人包轻松解决。</p><h2 id="真·懒人包" tabindex="-1"><a class="header-anchor" href="#真·懒人包" aria-hidden="true">#</a> 真·懒人包</h2><p>Aria2 真·懒人包无需配置，下载即可使用，适合不想折腾的人。</p>',8),h={href:"https://www.seoipo.com/software/Aria2/",target:"_blank",rel:"noopener noreferrer"},u=e("p",null,[o("将懒人包解压到 "),e("code",null,"D:\\Aria2"),o("，点击 "),e("code",null,"AriaNg 启动器.exe"),o(" 即可开始下载。两个启动器任选其一，都集成了后端服务和前端 UI，无需启动其他程序。包内均为开源绿色软件，不涉及任何隐私和安装，AutoHotkey 插件容易被误报。")],-1),p=e("p",null,"2023.12.03 更新 Aria2 1.37.0，AriaNG 1.3.7，重构启动器，并增加 bt-tracker 至 108 个，以便 BT 和磁力链接提速。",-1),_=e("p",null,"新增功能：任务开始、完成和出错时，会推送系统通知，可在 aria2.conf 的特别功能区块中设置通知的开启与关闭，此功能由 @我真的爱发明 提出。",-1),f=e("hr",null,null,-1),g=e("p",null,"如果不想使用懒人包，想了解 Aria2 背后的设置，请往下看配置步骤。",-1),m=e("h2",{id:"aria2-设置",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aria2-设置","aria-hidden":"true"},"#"),o(" Aria2 设置")],-1),b={href:"https://aria2c.com/archiver/aria2.zip",target:"_blank",rel:"noopener noreferrer"},A={href:"https://wwz.lanzouf.com/iROZE0eai3xe",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"D:\\Aria2",-1),v={href:"https://github.com/aria2/aria2/releases",target:"_blank",rel:"noopener noreferrer"},w={href:"https://github.com/aria2/aria2/releases/download/release-1.37.0/aria2-1.37.0-win-64bit-build1.zip",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"aria2c.exe",-1),N=e("figure",null,[e("img",{src:"https://img.newzone.top/20191210232831.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"GitHub 官方仓库下载 Aria2")],-1),z=e("li",null,[e("p",null,[o("点击 "),e("code",null,"aria2.exe"),o(" 启动 aria2，系统托盘区会同步出现应用图标。")])],-1),T={href:"https://wwz.lanzouf.com/iwv6f0eadq9i",target:"_blank",rel:"noopener noreferrer"},B=e("code",null,"aria2.conf",-1),y={href:"https://aria2.github.io/manual/en/html/aria2c.html",target:"_blank",rel:"noopener noreferrer"},D=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),C=r(`<p>修改默认下载目录：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 文件的保存路径 (可使用绝对路径或相对路径), 默认：当前启动位置
# D:\\Download 是我的默认下载目录，可以改为你自己的下载路径
dir=D:\\Download
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改服务器默认连接数：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># 同一服务器连接数，添加时可指定，默认:1
max-connection-per-server=16
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改监听端口 6800：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># RPC 监听端口，端口被占用时可以修改，默认:6800
# 端口修改后，需要重新启动 aria2c.exe，并确保页面设置中的 RPC 地址已更改为新端口。
rpc-listen-port=6800
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>开启 BT 下列设置：</p><div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code>enable-dht=true
bt-enable-lpd=true
enable-peer-exchange=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),R={href:"https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt",target:"_blank",rel:"noopener noreferrer"},P=e("code",null,",",-1),j=r(`<div class="language-conf line-numbers-mode" data-ext="conf"><pre class="language-conf"><code># bt-tracker 更新，解决 Aria2 BT 下载速度慢没速度的问题
bt-tracker=udp://tracker.opentrackr.org:1337/announce,udp://9.rarbg.com:2810/announce,udp://opentracker.i2p.rocks:6969/announce,https://opentracker.i2p.rocks:443/announce,udp://tracker1.myporn.club:9337/announce,udp://tracker1.bt.moack.co.kr:80/announce,udp://tracker.torrent.eu.org:451/announce,udp://p4p.arenabg.com:1337/announce,udp://open.stealth.si:80/announce,udp://open.demonii.com:1337/announce,udp://ipv4.tracker.harry.lu:80/announce,udp://explodie.org:6969/announce,udp://exodus.desync.com:6969/announce,https://tracker.tamersunion.org:443/announce,https://tracker.nanoha.org:443/announce,https://tracker.lilithraws.org:443/announce,https://tr.burnabyhighstar.com:443/announce,https://1337.abcvg.info:443/announce,http://tracker.mywaifu.best:6969/announce,http://bt.okmp3.ru:2710/announce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>其他设置不常用，有时间的话，你可以慢慢调整。</p>`,2),H=e("li",null,[e("p",null,[o("Aira2 没有原生应用界面，可以输入网址 "),e("code",null,"http://aria2c.com"),o(" 使用第三方下载界面。该页面会自动与本地的 aira2c 程序关联，实现下载管理，建议把其收藏到书签，以便日后使用。"),e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote2"},"[2]"),e("a",{class:"footnote-anchor",id:"footnote-ref2"})])])],-1),q=e("code",null,"http://localhost:6800/jsonrpc",-1),I=e("strong",null,"链接须为 http 而非 https",-1),S={href:"https://www.seoipo.com/software/Aria2/",target:"_blank",rel:"noopener noreferrer"},U=e("h2",{id:"aria2-进阶",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#aria2-进阶","aria-hidden":"true"},"#"),o(" Aria2 进阶")],-1),E=e("h3",{id:"更换-aria2-界面",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#更换-aria2-界面","aria-hidden":"true"},"#"),o(" 更换 Aria2 界面")],-1),O={href:"https://github.com/mayswind/AriaNg",target:"_blank",rel:"noopener noreferrer"},V=e("figure",null,[e("img",{src:"https://img.newzone.top/20180516104758.png",alt:"",tabindex:"0",loading:"lazy"}),e("figcaption",null,"AriaNg 界面")],-1),J={href:"https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip",target:"_blank",rel:"noopener noreferrer"},M=r('<p>如果 AriaNg 页面出现报错，则从页面左侧选择「AriaNg 设置」&gt;「RPC」，检查 RPC 地址，默认地址为 <code>localhost:6800</code>。</p><h3 id="aira2-下载预热" tabindex="-1"><a class="header-anchor" href="#aira2-下载预热" aria-hidden="true">#</a> Aira2 下载预热</h3><p>Aira2 下载预热是 BT 下载前的必备步骤，否则速度容易很慢。</p><p>找一个热门影视的 BT 种子（注意是种子，不是磁力链接），然后下载并挂着做种。过几个小时后，退出 Aria2 或者等待 Aria2 会话自动保存，你会发现 dht.dat 从空文件变成有数据了，之后的 BT 下载速度就会快很多。</p><blockquote><p>很多 BT 客户端一样，Aria2 有个 dht.dat 文件 (开启 ipv6 还有个 dht6.dat)，这玩意用于存储一种叫做 DHT Routing Table 的东西，DHT 网络由无数节点组成，你接触到一个后能通过它接触到更多的节点，Aria2 我记得是有内置的节点，但是！如果你在 Aria2 第一次运行的时候直接下载磁力链接或者冷门种子，你很可能遇到连 MetaData 都无法获取的情况，这就是因为第一次只是初始化 dht.dat 文件，你本地不存在 DHT Routing Table 的缓存，所以你无法从 DHT 网络中获取足够的数据。<sup class="footnote-ref"><a href="#footnote3">[3]</a><a class="footnote-anchor" id="footnote-ref3"></a></sup></p></blockquote><h3 id="接管浏览器下载" tabindex="-1"><a class="header-anchor" href="#接管浏览器下载" aria-hidden="true">#</a> 接管浏览器下载</h3><p>如果想用 Aria2 接管浏览器的下载管理，需安装插件/扩展。</p>',7),W={href:"https://chrome.google.com/webstore/detail/nimeojfecmndgolmlmjghjmbpdkhhogl",target:"_blank",rel:"noopener noreferrer"},F={href:"https://wwi.lanzoui.com/i4Fmeetsdaj",target:"_blank",rel:"noopener noreferrer"},G=e("code",null,".crx",-1),L=e("code",null,"chrome://extensions/",-1),Z={href:"https://addons.mozilla.org/en-US/firefox/addon/aria2-integration/",target:"_blank",rel:"noopener noreferrer"},K=r('<p>安装完「添加到 aria2」扩展后，右键扩展图标，点击「选项」&gt;「设置」，设置如下：</p><ul><li>最小监视：<code>10</code> M，低于该容量将由浏览器下载。如果 Aria2 要接手所有下载，可以将最小监视设为 <code>0.001</code>。</li><li>JSON-RPC 链接：<code>http://localhost:6800/jsonrpc</code>。</li></ul><p>注意：「添加到 aria2」图标显示的 <code>en</code> 表示处于开启状态，<code>dis</code> 表示处于关闭状态，点击图标可以切换使用状态。</p><h2 id="aria2-启动器" tabindex="-1"><a class="header-anchor" href="#aria2-启动器" aria-hidden="true">#</a> Aria2 启动器</h2><p>每次启动 Aria2 下载时，都需要执行两个文件：打开 WebUI 链接和 aria2c，这有点麻烦。因此，我使用 AutoHotkey 做了一个启动器，它可以检测 aria2c 运行状态，并一键打开下载界面，以简化 Aria 的启动过程。</p>',5),Q={href:"https://wwz.lanzouf.com/iqud50ebl06d",target:"_blank",rel:"noopener noreferrer"},X=e("code",null,"D:\\Aria2",-1),Y=e("strong",null,"AriaNg 启动器",-1),$={href:"https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip",target:"_blank",rel:"noopener noreferrer"},ee=e("code",null,"Aria2\\AriaNg\\index.html",-1),oe=e("li",null,[e("strong",null,"Aria2c 启动器"),o("：将 "),e("code",null,"https://aria2c.com"),o(" 作为默认下载界面。该设置较旧，需确保 JSON-RPC Path 为 "),e("code",null,"http://localhost:6800/jsonrpc"),o("。")],-1),ae=e("hr",{class:"footnotes-sep"},null,-1),ne={class:"footnotes"},re={class:"footnotes-list"},te={id:"footnote1",class:"footnote-item"},ie={href:"https://zhuanlan.zhihu.com/p/30666881",target:"_blank",rel:"noopener noreferrer"},se=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),le={id:"footnote2",class:"footnote-item"},ce={href:"https://www.appinn.com/aria2-in-windows-setup/",target:"_blank",rel:"noopener noreferrer"},de=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1),he={id:"footnote3",class:"footnote-item"},ue={href:"http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/",target:"_blank",rel:"noopener noreferrer"},pe=e("a",{href:"#footnote-ref3",class:"footnote-backref"},"↩︎",-1);function _e(fe,ge){const a=i("ExternalLinkIcon");return s(),l("div",null,[d,e("p",null,[o("真·懒人包："),e("a",h,[o("https://www.seoipo.com/software/Aria2/"),n(a)])]),u,p,_,f,g,m,e("ol",null,[e("li",null,[e("p",null,[o("下载 "),e("a",b,[o("Aria2 快速设置包"),n(a)]),o("或"),e("a",A,[o("备用链接"),n(a)]),o("，将其解压到存放文件夹，例如 "),k,o("。")])]),e("li",null,[e("p",null,[o("官网下载 "),e("a",v,[o("Aria2 程序"),n(a)]),o("（Windows 选择 "),e("a",w,[o("aria2-1.37.0-win-64bit-build1.zip"),n(a)]),o("），然后解压到快速设置包的存放文件夹中，替代其中的 "),x,o(" 程序。")]),N]),z,e("li",null,[e("p",null,[o("参照"),e("a",T,[o("懒人包配置"),n(a)]),o("修改 "),B,o("，更多设置参考 "),e("a",y,[o("aria2c 官方文档"),n(a)]),o("。"),D]),C,e("p",null,[o("在文档最后一行添加 BT trackers，最新 trackers 列表从 "),e("a",R,[o("ngosang/trackerslist"),n(a)]),o(" 中获取，tracker 中用 "),P,o(" 隔开。")]),j]),H]),e("p",null,[o("如果出现「Aria2 RPC 服务器错误」，请检查 JSON-RPC Path 是否为 "),q,o("。注意，页面"),I,o("。如果依然报错，则说明 aria2.conf 配置有误，建议下载 "),e("a",S,[o("真·懒人包"),n(a)]),o("。")]),U,E,e("p",null,[e("a",O,[o("AriaNg"),n(a)]),o(" 的界面类似传统的下载软件，使用简单。")]),V,e("p",null,[o("使用方法：下载并解压 "),e("a",J,[o("AriaNg"),n(a)]),o("，运行目录下的 index.html，打开 Aria2 WebUI 界面，将页面链接收藏到书签以便后续使用 Aria2。")]),M,e("ul",null,[e("li",null,[o("Chrome：安装"),e("a",W,[o("添加到 aria2"),n(a)]),o(" 扩展。下载包可以用"),e("a",F,[o("国内搬运地址"),n(a)]),o("，或是懒人包内置文件。 如果浏览器无法直接安装 "),G,o(" 格式的扩展，可以将文件解压到新文件夹「xxx」，然后在浏览器的地址栏输入 "),L,o(" 开启开发者模式，点击加载已解压的扩展程序，选中刚才解压的文件夹「xxx」。")]),e("li",null,[o("Firefox：安装 "),e("a",Z,[o("Aria2 Download Manager Integration"),n(a)]),o(" 扩展，可参考下方的 Chrome 扩展设置进行配置。")])]),K,e("p",null,[o("下载 "),e("a",Q,[o("Aria2 启动器"),n(a)]),o("，然后将其解压到 Aria2 运行目录，例如 "),X,o("。Aria2 启动器提供了两种方式，只需选择其中一种即可。")]),e("ul",null,[e("li",null,[Y,o("（推荐）：使用 AriaNg 本地版作为下载管理界面。在使用该启动器前，需将 "),e("a",$,[o("AriaNg"),n(a)]),o(" 解压到 Aria2 目录下，并将文件夹名改为 AriaNg，然后打开文件 index.html，该文件位于 "),ee,o("。")]),oe]),ae,e("section",ne,[e("ol",re,[e("li",te,[e("p",null,[e("a",ie,[o("Aria2 基础上手指南"),n(a)]),o(),se])]),e("li",le,[e("p",null,[e("a",ce,[o("aria2 懒人安装教程"),n(a)]),o(),de])]),e("li",he,[e("p",null,[e("a",ue,[o("解决 Aria2 BT 下载速度慢没速度的问题"),n(a)]),o(),pe])])])])])}const Ae=t(c,[["render",_e],["__file","2018-05-15-aria2_a_new_download_tool.html.vue"]]);export{Ae as default};
