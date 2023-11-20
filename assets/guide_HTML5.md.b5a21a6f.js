import{_ as s,c as a,o as l,a as e}from"./app.756a2891.js";const y=JSON.parse('{"title":"HTML5","description":"","frontmatter":{},"headers":[{"level":2,"title":"新增内容","slug":"新增内容","link":"#新增内容","children":[]},{"level":2,"title":"语义化标签","slug":"语义化标签","link":"#语义化标签","children":[]},{"level":2,"title":"块元素 行内元素 行内块元素","slug":"块元素-行内元素-行内块元素","link":"#块元素-行内元素-行内块元素","children":[{"level":3,"title":"块元素","slug":"块元素","link":"#块元素","children":[]},{"level":3,"title":"行内元素","slug":"行内元素","link":"#行内元素","children":[]},{"level":3,"title":"行内块元素","slug":"行内块元素","link":"#行内块元素","children":[]}]},{"level":2,"title":"引入CSS方式","slug":"引入css方式","link":"#引入css方式","children":[{"level":3,"title":"行内样式","slug":"行内样式","link":"#行内样式","children":[]},{"level":3,"title":"内部样式","slug":"内部样式","link":"#内部样式","children":[]},{"level":3,"title":"外部样式（重要）","slug":"外部样式-重要","link":"#外部样式-重要","children":[]},{"level":3,"title":"导入方式","slug":"导入方式","link":"#导入方式","children":[]}]}],"relativePath":"guide/HTML5.md","lastUpdated":1673594167000}'),n={name:"guide/HTML5.md"},o=e(`<h1 id="html5" tabindex="-1">HTML5 <a class="header-anchor" href="#html5" aria-hidden="true">#</a></h1><h2 id="新增内容" tabindex="-1">新增内容 <a class="header-anchor" href="#新增内容" aria-hidden="true">#</a></h2><ul><li>语义化标签</li><li>视频和音频</li><li>Canvas绘图</li><li>Svg绘图</li><li>地理定位</li><li>推拽</li><li>webSocket</li><li>......</li></ul><h2 id="语义化标签" tabindex="-1">语义化标签 <a class="header-anchor" href="#语义化标签" aria-hidden="true">#</a></h2><p><img src="http://songnian.gitee.io/imgs/imgs/HTML5%E8%AF%AD%E4%B9%89%E5%8C%96%E6%A0%87%E7%AD%BE.png" alt=""></p><ul><li>优点是使得标签更有语义化，能更清楚地表达文档结构，提高代码的可读性</li><li>更易于SEO</li></ul><h2 id="块元素-行内元素-行内块元素" tabindex="-1">块元素 行内元素 行内块元素 <a class="header-anchor" href="#块元素-行内元素-行内块元素" aria-hidden="true">#</a></h2><h3 id="块元素" tabindex="-1">块元素 <a class="header-anchor" href="#块元素" aria-hidden="true">#</a></h3><p>每个块级元素通常都会独占一行或者是多行，可以设置宽高以及<code>margin</code>、<code>padding</code>等属性。常见的块级元素有<code>div</code>、<code>h1到h6</code> 、<code>p</code>、<code>ul ol li</code>等</p><h3 id="行内元素" tabindex="-1">行内元素 <a class="header-anchor" href="#行内元素" aria-hidden="true">#</a></h3><p>行内元素只会占据他的边框以内的空间，可以多个行内元素一起在一行，不可以设置宽高。常见的行内元素有：</p><p><code>i</code>、<code>span</code>、<code>a</code>、<code>strong</code>等</p><h3 id="行内块元素" tabindex="-1">行内块元素 <a class="header-anchor" href="#行内块元素" aria-hidden="true">#</a></h3><p>行内块元素既有块元素的特性，如可以设置宽高和<code>margin</code>、<code>padding</code>等属性；也有行内元素的特性，如可以多个行内块元素一起在一行。常见的有<code>img</code>、<code>input</code></p><h2 id="引入css方式" tabindex="-1">引入CSS方式 <a class="header-anchor" href="#引入css方式" aria-hidden="true">#</a></h2><h3 id="行内样式" tabindex="-1">行内样式 <a class="header-anchor" href="#行内样式" aria-hidden="true">#</a></h3><blockquote><p>所谓行内样式就是直接在标签中直接写样式</p></blockquote><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">style</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">background: red</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="内部样式" tabindex="-1">内部样式 <a class="header-anchor" href="#内部样式" aria-hidden="true">#</a></h3><blockquote><p>所谓内部样式就是在<code>&lt;head&gt;</code>标签中写一个<code>&lt;style&gt;</code>标签</p></blockquote><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">	</span><span style="color:#676E95;font-style:italic;">&lt;!-- 省略 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        &lt;!-- 样式 --</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    &lt;/</span><span style="color:#FFCB6B;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">&lt;/</span><span style="color:#FFCB6B;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="外部样式-重要" tabindex="-1">外部样式（重要） <a class="header-anchor" href="#外部样式-重要" aria-hidden="true">#</a></h3><blockquote><p>所谓外部样式就是一般在<code>&lt;head&gt;</code>中用<code>&lt;link&gt;</code>引入外部的<code>css</code>文件</p></blockquote><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">link</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rel</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">stylesheet</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">style.css</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">head</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="导入方式" tabindex="-1">导入方式 <a class="header-anchor" href="#导入方式" aria-hidden="true">#</a></h3><blockquote><p>所谓导入方式就是在一个<code>css</code>文件中用<code>@import</code>导入另外一个<code>css</code>文件</p></blockquote><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">@import</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">‘路径’</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div>`,27),t=[o];function c(p,i,r,d,h,F){return l(),a("div",null,t)}const u=s(n,[["render",c]]);export{y as __pageData,u as default};