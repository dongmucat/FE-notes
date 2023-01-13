/*
 * @Description: vitepress config
 * @Author: Songnian Chen
 * @Date: 2023-01-12 17:48:59
 * @LastEditTime: 2023-01-13 15:10:33
 * @LastEditors: Songnian Chen
 */

module.exports = {
	base:'/FE-notes/',
	title: "study-notes",
	description: "frontend docs",
	lastUpdated: true,
	head: [
		[
			"link",
			{
				rel: "icon",
				type: "image/x-icon",
				href: "/favicon.ico",
			},
		],
	],
	themeConfig: {
		siteTitle: "study-notes",
		logo: "/logo.svg",
		laslltUpdatedText: "最后更新",
		socialLinks: [
			{
				icon: "github",
				link: "https://github.com/dongmucat",
			},
		],
		nav: [{ text: "Home", link: "/" }],
		outlineTitle: "快速导航", // 大纲的标题
		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2022-present dongmucat",
		},
		sidebar: {
			"/": [
				{
					text: "前端基础",
					collapsible: true,
					items: [
						{ text: "CSS", link: "/guide/CSS" },
						{ text: "HTML5", link: "/guide/HTML5" },
						{ text: "JS", link: "/guide/JS面试" },
					],
				},
				{
					text: "Vue",
					collapsible: true,
					items: [
						{ text: "Vue面试", link: "/guide/Vue面试" },
						{ text: "Vue2源码", link: "/guide/Vue源码" },
						{ text: "Pinia快速上手", link: "/guide/Pinia快速上手" },
					],
				},
				{
					text: "React",
					collapsible: true,
					items: [
						{ text: "React八股", link: "/guide/React" },
						{ text: "React快速上手", link: "/guide/React快速上手" },
						{
							text: "Recoil快速上手",
							link: "/guide/Recoil快速上手",
						},
					],
				},

				{
					text: "Browser",
					collapsible: true,
					items: [{ text: "浏览器", link: "/guide/浏览器" }],
				},
				{
					text: "Git",
					collapsible: true,
					items: [{ text: "git笔记", link: "/guide/Git" }],
				},
				{
					text: "前端工程化",
					collapsible: true,
					items: [{ text: "前端工程化", link: "/guide/前端工程化" }],
				},
				{
					text: "构建工具",
					collapsible: true,
					items: [{ text: "Webpack", link: "/guide/Webpack" }],
				},
				{
					text: "计网",
					collapsible: true,
					items: [
						{ text: "计网", link: "/guide/计网" },
						{ text: "web安全", link: "/guide/web安全" },
					],
				},
                {
					text: "leetcode",
					collapsible: true,
					items: [
						{ text: "二叉树", link: "/guide/leetcode/二叉树" },
						{ text: "回溯算法", link: "/guide/leetcode/回溯算法" },
						{ text: "链表", link: "/guide/leetcode/链表" }
					],
				},
			],
		},
	},
};
