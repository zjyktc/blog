import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

// ============================================================================
// 导航栏配置 - 根据顺序动态生成导航栏链接
// NavBar Configuration - Dynamically generate navigation bar links based on order
// ============================================================================
const getDynamicNavBarConfig = (): NavBarConfig => {
	// 基础导航栏链接
	const links: NavBarLink[] = [
		// 主页
		LinkPresets.Home,
	];

	// 文章及其子菜单
	links.push({
		name: "文章",
		url: "#",
		icon: "material-symbols:article",
		children: [
			// 归档
			LinkPresets.Archive,

			// 分类
			LinkPresets.Categories,

			// 标签
			LinkPresets.Tags,
		],
	});

	// 友链
	links.push(LinkPresets.Friends);

	// 留言板
	links.push(LinkPresets.Guestbook);

	// 我的及其子菜单
	links.push({
		name: "我的",
		url: "#",
		icon: "material-symbols:person",
		children: [
			// 相册
			LinkPresets.Gallery,

			// 追番
			LinkPresets.Anime,

			// 番组计划
			LinkPresets.Bangumi,
		],
	});

	// 关于及其子菜单
	links.push({
		name: "关于",
		url: "#",
		icon: "material-symbols:info",
		children: [
			// 打赏
			LinkPresets.Sponsor,

			// 关于页面
			LinkPresets.About,
		],
	});

	// 自定义导航栏链接
	links.push({
		name: "链接",
		url: "#",
		icon: "material-symbols:link",
		// 子菜单
		children: [
			{
				name: "GitHub",
				url: "https://github.com/",
				external: true,
				icon: "fa7-brands:github",
			},
			{
				name: "Gitee",
				url: "https://gitee.com/",
				external: true,
				icon: "fa7-brands:gitee",
			},
			{
				name: "QQ交流群",
				url: "https://qm.qq.com/q/",
				external: true,
				icon: "fa7-brands:qq",
			},
			{
				name: "文档",
				url: "https://blog.yangfeiyue.bot.cd/",
				external: true,
				icon: "material-symbols:docs",
			},
		],
	});

	// 文档链接
	// links.push({
	// 	name: "文档",
	// 	url: "https://blog.yangfeiyue.bot.cd/",
	// 	external: true,
	// 图标: "material-symbols:docs",


	返回 { 链接 } 作为 NavBarConfig;
};

// 导航搜索配置
导出 常量 导航栏搜索配置：NavBarSearchConfig = {
	方法：NavBarSearchMethod.PageFind，
};

// ============================================================================
// 链接预设 - 可自由自定义导航栏链接的名称、图标和URL
// 链接预设 - 允许自定义导航栏链接的名称、图标和 URL
// ============================================================================
导出 常量 链接预设：记录<字符串，导航栏链接> = {
	主页：{
		
网址： "/",
		图标：“material-symbols:home”，
	},
	存档：{
		名称：“归档”，
		网址：“/archive/”，
		图标："material-symbols:archive"，
	},
	分类：{
		名称：“分类”，
		网址： "/categories/",
		图标："material-symbols:folder-open-rounded"，
	},
	标签：{
		
网址： "/tags/",
		图标："material-symbols:tag-rounded"，
	},
	朋友：{
		名字：“友链”，
		网址： "/friends/",
		图标：“material-symbols:group”，
		页面键："朋友"，
	},
	访客簿：{
		名字：“留言”，
		网址： "/guestbook/"
		icon: "material-symbols:chat",
		pageKey: "guestbook",
	},
	About: {
		name: "关于我",
		url: "/about/",
		icon: "material-symbols:person",
	},
	Bangumi: {
		name: "番组计划",
		url: "/bangumi/",
		icon: "material-symbols:movie",
		pageKey: "bangumi",
	},
	Gallery: {
		name: "相册",
		url: "/gallery/",
		icon: "material-symbols:photo-library",
		pageKey: "gallery",
	},
	Anime: {
		name: "追番",
		url: "/anime/",
		icon: "material-symbols:live-tv",
		pageKey: "anime",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
