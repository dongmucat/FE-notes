import{_ as e,c as a,o as s,a as o}from"./app.790ffd25.js";const u=JSON.parse('{"title":"React","description":"","frontmatter":{},"headers":[{"level":2,"title":"hooks问题","slug":"hooks问题","link":"#hooks问题","children":[{"level":3,"title":"hooks的优点和缺点","slug":"hooks的优点和缺点","link":"#hooks的优点和缺点","children":[]},{"level":3,"title":"useState是同步还是异步？","slug":"usestate是同步还是异步","link":"#usestate是同步还是异步","children":[]}]},{"level":2,"title":"JSX","slug":"jsx","link":"#jsx","children":[{"level":3,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":3,"title":"工作过程","slug":"工作过程","link":"#工作过程","children":[]}]}],"relativePath":"guide/React.md","lastUpdated":1673594167000}'),l={name:"guide/React.md"},t=o(`<h1 id="react" tabindex="-1">React <a class="header-anchor" href="#react" aria-hidden="true">#</a></h1><h2 id="hooks问题" tabindex="-1">hooks问题 <a class="header-anchor" href="#hooks问题" aria-hidden="true">#</a></h2><h3 id="hooks的优点和缺点" tabindex="-1">hooks的优点和缺点 <a class="header-anchor" href="#hooks的优点和缺点" aria-hidden="true">#</a></h3><h4 id="优点" tabindex="-1">优点 <a class="header-anchor" href="#优点" aria-hidden="true">#</a></h4><ul><li>可以让函数式组件拥有自己的状态和生命周期</li><li>代码量相对较小，方便简洁</li><li>不需要纠结<code>this</code>的指向问题</li><li>可以通过自定义<code>hooks</code>实现逻辑的复用</li></ul><h4 id="缺点" tabindex="-1">缺点 <a class="header-anchor" href="#缺点" aria-hidden="true">#</a></h4><ul><li><p><code>hooks</code>只能在顶层使用，不能在如循环或者条件判断的语句中使用</p></li><li><p><code>hooks</code>可能会出现闭包的问题或者状态非同步问题</p></li><li><p>有时候需要关注依赖项和调用顺序，如<code>useEffect</code>的第二个参数</p></li></ul><h3 id="usestate是同步还是异步" tabindex="-1">useState是同步还是异步？ <a class="header-anchor" href="#usestate是同步还是异步" aria-hidden="true">#</a></h3><p><code>useState</code>更新没有合并，是替换，<code>useState</code>执行最后一次更新操作，而更新是浅比较的，更新某个复杂类型数据时只要它的引用地址没变，那就不会重新渲染组件</p><p>同步和异步的问题还是得看<code>React</code>版本</p><ul><li>如果是<code>React18</code>那就是在所有地方的表现都是异步的</li><li>如果是<code>React18</code>之前的版本，在原生事件和<code>setTimeout</code>、<code>Promise.then</code>中都是同步的，多次调用<code>setState</code>会立即更新<code>state</code>结果也就会立即调用<code>render</code>；在<code>React</code>合成事件以及生命周期中是异步的，多次调用<code>setState</code>只会调用一次<code>render</code></li></ul><h2 id="jsx" tabindex="-1">JSX <a class="header-anchor" href="#jsx" aria-hidden="true">#</a></h2><h3 id="原理" tabindex="-1">原理 <a class="header-anchor" href="#原理" aria-hidden="true">#</a></h3><p>全称为<code>JavaScript XML</code>，本质上是<code>React.creatElement</code>的语法糖</p><h3 id="工作过程" tabindex="-1">工作过程 <a class="header-anchor" href="#工作过程" aria-hidden="true">#</a></h3><ol><li><code>JSX</code>代码</li><li><code>bable</code>进行编译成使用<code>React.createElement</code>方法</li><li>转化为虚拟<code>DOM</code>，也就是<code>JS对象</code></li><li>调用<code>ReactDOM.render()函数</code>进行渲染</li><li>转化为真实<code>DOM</code>元素最后插入页面</li></ol><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> React </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span><span style="color:#A6ACCD;">   </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 下面的代码没有用到React对象，也要将其import进来</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 因为使用了JSX隐式调用了\`React.createElement\`方法</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> ReactDOM </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">react-dom</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">ReactDOM</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">render</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">App</span><span style="color:#89DDFF;"> /&gt;,</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">getElementById</span><span style="color:#A6ACCD;">( </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">root</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> ) )</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,17),c=[t];function n(d,r,i,p,h,D){return s(),a("div",null,c)}const F=e(l,[["render",n]]);export{u as __pageData,F as default};
