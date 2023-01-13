import{_ as s,c as t,o as l,a}from"./app.790ffd25.js";const h=JSON.parse('{"title":"Git","description":"","frontmatter":{},"headers":[{"level":2,"title":"git commitlint","slug":"git-commitlint","link":"#git-commitlint","children":[]},{"level":2,"title":"git emoji","slug":"git-emoji","link":"#git-emoji","children":[]},{"level":2,"title":"git config","slug":"git-config","link":"#git-config","children":[]},{"level":2,"title":"git remote","slug":"git-remote","link":"#git-remote","children":[]},{"level":2,"title":"git checkout","slug":"git-checkout","link":"#git-checkout","children":[]},{"level":2,"title":"git fetch","slug":"git-fetch","link":"#git-fetch","children":[]},{"level":2,"title":"git merge","slug":"git-merge","link":"#git-merge","children":[]},{"level":2,"title":"git cherry-pick","slug":"git-cherry-pick","link":"#git-cherry-pick","children":[]},{"level":2,"title":"git pull","slug":"git-pull","link":"#git-pull","children":[]},{"level":2,"title":"git push","slug":"git-push","link":"#git-push","children":[]},{"level":2,"title":"git stash","slug":"git-stash","link":"#git-stash","children":[]},{"level":2,"title":"git reset","slug":"git-reset","link":"#git-reset","children":[]},{"level":2,"title":"git revert","slug":"git-revert","link":"#git-revert","children":[]},{"level":2,"title":"git merge 与 git rebase 的区别","slug":"git-merge-与-git-rebase-的区别","link":"#git-merge-与-git-rebase-的区别","children":[]},{"level":2,"title":"git fetch和git pull区别","slug":"git-fetch和git-pull区别","link":"#git-fetch和git-pull区别","children":[]},{"level":2,"title":"代码提交后发现是在错误的分支上怎么办？","slug":"代码提交后发现是在错误的分支上怎么办","link":"#代码提交后发现是在错误的分支上怎么办","children":[]},{"level":2,"title":"GitFlow","slug":"gitflow","link":"#gitflow","children":[]},{"level":2,"title":"删除远程仓库的某个文件","slug":"删除远程仓库的某个文件","link":"#删除远程仓库的某个文件","children":[]},{"level":2,"title":"git commit 错误的信息，怎么办？","slug":"git-commit-错误的信息-怎么办","link":"#git-commit-错误的信息-怎么办","children":[]}],"relativePath":"guide/Git.md","lastUpdated":1673594167000}'),e={name:"guide/Git.md"},n=a(`<h1 id="git" tabindex="-1">Git <a class="header-anchor" href="#git" aria-hidden="true">#</a></h1><h2 id="git-commitlint" tabindex="-1">git commitlint <a class="header-anchor" href="#git-commitlint" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 多行示例（第一个-m接的是title，后面的-m是具体内容）</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">chore(vue.config.js): :rocket: title_xxxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.xxx</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">2.xxxx</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><table><thead><tr><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>feat</td><td>添加新功能</td></tr><tr><td>fix</td><td>修复问题</td></tr><tr><td>chore</td><td>其他修改，日常修改，依赖更新/脚手架配置修改等，比如有改变构建流程、或者增加依赖库、工具之类的</td></tr><tr><td>style</td><td>不是css，是代码风格相关，且不影响运行结果</td></tr><tr><td>perf</td><td>优化相关的，比如功能优化、性能提升、提升体验等</td></tr><tr><td>docs</td><td>文档</td></tr><tr><td>refactor</td><td>代码重构</td></tr><tr><td>revert</td><td>撤销编辑，回滚</td></tr><tr><td>test</td><td>测试相关</td></tr><tr><td>ci</td><td>持续集成</td></tr><tr><td>workflow</td><td>工作流程改进</td></tr><tr><td>build</td><td>修改项目构建相关</td></tr></tbody></table><h2 id="git-emoji" tabindex="-1">git emoji <a class="header-anchor" href="#git-emoji" aria-hidden="true">#</a></h2><table><thead><tr><th style="text-align:left;">emoji</th><th style="text-align:left;">emoji 代码</th><th style="text-align:left;">commit 说明</th></tr></thead><tbody><tr><td style="text-align:left;">🎉 (庆祝)</td><td style="text-align:left;"><code>:tada:</code></td><td style="text-align:left;">初次提交</td></tr><tr><td style="text-align:left;">🆕 (全新)</td><td style="text-align:left;"><code>:new:</code></td><td style="text-align:left;">引入新功能</td></tr><tr><td style="text-align:left;">🔖 (书签)</td><td style="text-align:left;"><code>:bookmark:</code></td><td style="text-align:left;">发行/版本标签</td></tr><tr><td style="text-align:left;">🐛 (bug)</td><td style="text-align:left;"><code>:bug:</code></td><td style="text-align:left;">修复 bug</td></tr><tr><td style="text-align:left;">🚑 (急救车)</td><td style="text-align:left;"><code>:ambulance:</code></td><td style="text-align:left;">重要补丁</td></tr><tr><td style="text-align:left;">🌐 (地球)</td><td style="text-align:left;"><code>:globe_with_meridians:</code></td><td style="text-align:left;">国际化与本地化</td></tr><tr><td style="text-align:left;">💄 (口红)</td><td style="text-align:left;"><code>:lipstick:</code></td><td style="text-align:left;">更新 UI 和样式文件</td></tr><tr><td style="text-align:left;">🎬 (场记板)</td><td style="text-align:left;"><code>:clapper:</code></td><td style="text-align:left;">更新演示/示例</td></tr><tr><td style="text-align:left;">🚨 (警车灯)</td><td style="text-align:left;"><code>:rotating_light:</code></td><td style="text-align:left;">移除 linter 警告</td></tr><tr><td style="text-align:left;">🔧 (扳手)</td><td style="text-align:left;"><code>:wrench:</code></td><td style="text-align:left;">修改配置文件</td></tr><tr><td style="text-align:left;">➕ (加号)</td><td style="text-align:left;"><code>:heavy_plus_sign:</code></td><td style="text-align:left;">增加一个依赖</td></tr><tr><td style="text-align:left;">➖ (减号)</td><td style="text-align:left;"><code>:heavy_minus_sign:</code></td><td style="text-align:left;">减少一个依赖</td></tr><tr><td style="text-align:left;">⬆️ (上升箭头)</td><td style="text-align:left;"><code>:arrow_up:</code></td><td style="text-align:left;">升级依赖</td></tr><tr><td style="text-align:left;">⬇️ (下降箭头)</td><td style="text-align:left;"><code>:arrow_down:</code></td><td style="text-align:left;">降级依赖</td></tr><tr><td style="text-align:left;">⚡ (闪电)<br>🐎 (赛马)</td><td style="text-align:left;"><code>:zap:</code><br><code>:racehorse:</code></td><td style="text-align:left;">提升性能</td></tr><tr><td style="text-align:left;">📈 (上升趋势图)</td><td style="text-align:left;"><code>:chart_with_upwards_trend:</code></td><td style="text-align:left;">添加分析或跟踪代码</td></tr><tr><td style="text-align:left;">🚀 (火箭)</td><td style="text-align:left;"><code>:rocket:</code></td><td style="text-align:left;">部署功能</td></tr><tr><td style="text-align:left;">✅ (白色复选框)</td><td style="text-align:left;"><code>:white_check_mark:</code></td><td style="text-align:left;">增加测试</td></tr><tr><td style="text-align:left;">📝 (备忘录)<br>📖 (书)</td><td style="text-align:left;"><code>:memo:</code><br><code>:book:</code></td><td style="text-align:left;">撰写文档</td></tr><tr><td style="text-align:left;">🔨 (锤子)</td><td style="text-align:left;"><code>:hammer:</code></td><td style="text-align:left;">重大重构</td></tr><tr><td style="text-align:left;">🎨 (调色板)</td><td style="text-align:left;"><code>:art:</code></td><td style="text-align:left;">改进代码结构/代码格式</td></tr><tr><td style="text-align:left;">🔥 (火焰)</td><td style="text-align:left;"><code>:fire:</code></td><td style="text-align:left;">移除代码或文件</td></tr><tr><td style="text-align:left;">✏️ (铅笔)</td><td style="text-align:left;"><code>:pencil2:</code></td><td style="text-align:left;">修复 typo</td></tr><tr><td style="text-align:left;">🚧 (施工)</td><td style="text-align:left;"><code>:construction:</code></td><td style="text-align:left;">工作进行中</td></tr><tr><td style="text-align:left;">🗑️ (垃圾桶)</td><td style="text-align:left;"><code>:wastebasket:</code></td><td style="text-align:left;">废弃或删除</td></tr><tr><td style="text-align:left;">♿ (轮椅)</td><td style="text-align:left;"><code>:wheelchair:</code></td><td style="text-align:left;">可访问性</td></tr><tr><td style="text-align:left;">👷 (工人)</td><td style="text-align:left;"><code>:construction_worker:</code></td><td style="text-align:left;">添加 CI 构建系统</td></tr><tr><td style="text-align:left;">💚 (绿心)</td><td style="text-align:left;"><code>:green_heart:</code></td><td style="text-align:left;">修复 CI 构建问题</td></tr><tr><td style="text-align:left;">🔒 (锁)</td><td style="text-align:left;"><code>:lock:</code></td><td style="text-align:left;">修复安全问题</td></tr><tr><td style="text-align:left;">🐳 (鲸鱼)</td><td style="text-align:left;"><code>:whale:</code></td><td style="text-align:left;">Docker 相关工作</td></tr><tr><td style="text-align:left;">🍎 (苹果)</td><td style="text-align:left;"><code>:apple:</code></td><td style="text-align:left;">修复 macOS 下的问题</td></tr><tr><td style="text-align:left;">🐧 (企鹅)</td><td style="text-align:left;"><code>:penguin:</code></td><td style="text-align:left;">修复 Linux 下的问题</td></tr><tr><td style="text-align:left;">🏁 (旗帜)</td><td style="text-align:left;"><code>:checkered_flag:</code></td><td style="text-align:left;">修复 Windows 下的问题</td></tr><tr><td style="text-align:left;">🔀 (交叉箭头)</td><td style="text-align:left;"><code>:twisted_rightwards_arrows:</code></td><td style="text-align:left;">分支合并</td></tr></tbody></table><h2 id="git-config" tabindex="-1">git config <a class="header-anchor" href="#git-config" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#全局设置</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">useremail</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--global</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">#局部设置(去掉--global)</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.email</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">useremail</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">config</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">user.name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">username</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><h2 id="git-remote" tabindex="-1">git remote <a class="header-anchor" href="#git-remote" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#可以快速查看当前已经关联的远程仓库列表</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">url</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#可以关联多个仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">name</span><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">#删除远程仓库</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">remote</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rename</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">old_name</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">new_name</span><span style="color:#A6ACCD;">  </span><span style="color:#676E95;font-style:italic;">#修改仓库名</span></span>
<span class="line"></span></code></pre></div><h2 id="git-checkout" tabindex="-1">git checkout <a class="header-anchor" href="#git-checkout" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 除了分支，我们还经常拉取远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">本地分支名</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin/远程分支名</span></span>
<span class="line"></span></code></pre></div><h2 id="git-fetch" tabindex="-1">git fetch <a class="header-anchor" href="#git-fetch" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 获取默认远程仓库所有分支的变更</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-a</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 获取 remote origin 对应远程仓库指定 master 分支的变更，但是不和本地的合并</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 意思一个样，拉默认的分支而已</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 也是，等效于 git fetch origin master:master，就是分支配置的默认值</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">fetch</span></span>
<span class="line"></span></code></pre></div><h2 id="git-merge" tabindex="-1">git merge <a class="header-anchor" href="#git-merge" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 如果目前是在master分支，执行如下命令则将test的内容合并到master分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 合并 remote origin 对应远程仓库的 master 分支到当前分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin/master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 加入 --squash 表示合并，但是不生成 commit 记录，通常用于把本地分支合入远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--squash</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 取消合并</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">merge</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--abort</span></span>
<span class="line"></span></code></pre></div><h2 id="git-cherry-pick" tabindex="-1">git cherry-pick <a class="header-anchor" href="#git-cherry-pick" aria-hidden="true">#</a></h2><blockquote><p>和 merge 不同的是：<code>cherry-pick</code> 合并的是某一次 <code>commit</code> 提交的文件，<code>merge</code> 合并的是整个分支。且 <code>merge</code> 会额外多一条 <code>merge commit</code> 的记录，而 <code>cherry-pick</code> 不会。</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 这样就把其他分支的一个 commit 合入当前分支了(需要提前使用git log查看其他分支的commitID)</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cherry-pick</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commitID</span></span>
<span class="line"></span></code></pre></div><h2 id="git-pull" tabindex="-1">git pull <a class="header-anchor" href="#git-pull" aria-hidden="true">#</a></h2><blockquote><p>git pull是git fetch和git merge的结合，</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># git pull是git pull --merge 的简写，默认是 --merge 模式</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 拉取远程的master分支与当前的分支进行合并</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 把合并模式切换成 rebase，等于 git fetch 加上 git rebase</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pull</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--rebase</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span></code></pre></div><h2 id="git-push" tabindex="-1">git push <a class="header-anchor" href="#git-push" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 推送当前分支到远程的master分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 有时候没有关联默认远程分支的时候，可以-u 推送并设置默认远程分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-u</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 强制推送，就算本地和远程有差异也推上去</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-f</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除远程主机的 master 分支</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">origin</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span></code></pre></div><h2 id="git-stash" tabindex="-1">git stash <a class="header-anchor" href="#git-stash" aria-hidden="true">#</a></h2><p><strong>应用场景</strong>：某一天你正在 feature 分支开发新需求，突然产品经理跑过来说线上有bug，必须马上修复。而此时你的功能开发到一半，于是你急忙想切到 master 分支，然后你就会看到报错</p><p><strong>解决方法：</strong></p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">#这样代码就保存起来了</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">master</span></span>
<span class="line"></span></code></pre></div><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 恢复代码</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">feature</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># apply会将其保留在存储列表中</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">apply</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># pop会将最顶部的弹出</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 其他</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 删除所有的储存</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">clear</span></span>
<span class="line"></span></code></pre></div><h2 id="git-reset" tabindex="-1">git reset <a class="header-anchor" href="#git-reset" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 回退到上个版本，并且还会保存着对于文件的修改</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--soft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 强制回退上个版本</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># 回退到指定的版本，一般先要用\`git log\`查看版本的\`id\`</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--hard</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">commit id/hash</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span></code></pre></div><h2 id="git-revert" tabindex="-1">git revert <a class="header-anchor" href="#git-revert" aria-hidden="true">#</a></h2><blockquote><p><code>git revert</code>和<code>git reset</code>有点类似，但是<code>git revert</code>是提交一个新的版本，将需要revert的版本的内容再反向修改回去，版本会递增，不影响之前提交的内容.</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 用法和git reset差不多，把上面的reset改成revert即可</span></span>
<span class="line"></span></code></pre></div><h2 id="git-merge-与-git-rebase-的区别" tabindex="-1">git merge 与 git rebase 的区别 <a class="header-anchor" href="#git-merge-与-git-rebase-的区别" aria-hidden="true">#</a></h2><ul><li>merge是合并操作，是将两个分支进行合并，并会在目标分支上产生额外的提交记录（合并记录），关注点在于提交的历史</li><li>rebase实际上不是合并操作，它只是复制了当前分支的修改，然后粘贴在目标分支的最新提交的后面，这样的话历史提交记录就会很明朗，关注点在开发干了什么</li></ul><h2 id="git-fetch和git-pull区别" tabindex="-1">git fetch和git pull区别 <a class="header-anchor" href="#git-fetch和git-pull区别" aria-hidden="true">#</a></h2><ul><li><p><code>git fetch</code>只是拉取到本地</p></li><li><p><code>git pull </code>不仅拉取到本地还<code>merge</code>到本地分支中，所以是<code>git pull</code>是<code>git fetch</code>和<code>git merge</code>的集合体</p></li><li><p><code>git pull</code>如果合并需要采用<code>rebase</code>模式，可以使用<code>–rebase</code>选项。即<code>git pull --rebase &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;</code></p></li></ul><h2 id="代码提交后发现是在错误的分支上怎么办" tabindex="-1">代码提交后发现是在错误的分支上怎么办？ <a class="header-anchor" href="#代码提交后发现是在错误的分支上怎么办" aria-hidden="true">#</a></h2><ul><li>在刚刚提交的分支上使用</li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 使用soft可以保留上次add的内容</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">reset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--soft</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">HEAD^</span></span>
<span class="line"></span></code></pre></div><ul><li>利用<code>stash</code></li></ul><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">checkout</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">target</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">目标分支</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">stash</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pop</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxx</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div><h2 id="gitflow" tabindex="-1">GitFlow <a class="header-anchor" href="#gitflow" aria-hidden="true">#</a></h2><h4 id="流程图" tabindex="-1">流程图 <a class="header-anchor" href="#流程图" aria-hidden="true">#</a></h4><p><img src="http://songnian.gitee.io/imgs/imgs/gitFlow.png" alt=""></p><h4 id="说明" tabindex="-1">说明 <a class="header-anchor" href="#说明" aria-hidden="true">#</a></h4><p><strong>重要的分支</strong></p><ul><li>master分支：线上代码，只有确定可以上线了才可以合并到此处</li><li>develop分支：</li></ul><p><strong>辅助分支</strong></p><ul><li>feature分支：用于开发功能的分支，必须从最新的develop分支代码拉取。分支命名基本上是feature/xxxxx（和功能相关的名字如feature/login）</li><li>release分支：主要用于给测试人员进行测试，</li><li>hotfix分支：用于线上紧急修复的分支，比如，在线上v1.0登录功能出现问题，我从master拉取代码创建新的分支hotfix/v1.0_login，修改完成后合并到master和develop上</li></ul><h2 id="删除远程仓库的某个文件" tabindex="-1">删除远程仓库的某个文件 <a class="header-anchor" href="#删除远程仓库的某个文件" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 最好先git pull</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-r</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--cached</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">filename</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">#带-r表示删除文件夹，不带表示删除文件</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxxx</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">push</span><span style="color:#A6ACCD;"> </span></span>
<span class="line"></span></code></pre></div><h2 id="git-commit-错误的信息-怎么办" tabindex="-1">git commit 错误的信息，怎么办？ <a class="header-anchor" href="#git-commit-错误的信息-怎么办" aria-hidden="true">#</a></h2><p>当使用<code>git commit -m &#39;xxx&#39;</code>时候，<code>xxx</code>输入错误、还没<code>push</code>的时候，可以使用</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#FFCB6B;">git</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commit</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--amend</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--only</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-m</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">xxxxxxx</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"></span></code></pre></div>`,56),o=[n];function p(c,i,r,d,y,C){return l(),t("div",null,o)}const D=s(e,[["render",p]]);export{h as __pageData,D as default};
