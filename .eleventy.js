const htmlmin = require("html-minifier");

module.exports = function(eleventyConfig) {
	eleventyConfig.addWatchTarget("./src/assets/");
	eleventyConfig.addPassthroughCopy("./src/assets/");

	eleventyConfig.setBrowserSyncConfig({
		files: "./public/css/**/*.css"
	});

	// Sort sections by file name (`fileSlug`)
	eleventyConfig.addCollection("sortedSections", function(collectionApi) {
		const sections = collectionApi.getFilteredByTag("sections");

		return [...sections].sort((a, b) => {
			return a.fileSlug.localeCompare(b.fileSlug);
		});
	});

	// Thanks, https://charliepark.org/smartquotes_in_eleventy/
	eleventyConfig.addFilter("smartquotes", (post) => {
		const hawaii = new RegExp(/(?<=<(h|l|p[^r]).*)Hawai'i/g);
		const slang = new RegExp(/'(cause|em|til|twas)/g);
		const apostrophes = new RegExp(/(?<=<(h|l|p[^r]).*)\b'\b/g);
		const years = new RegExp(/(?<=\s)'(?=\d)/g);
		const openDoubles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)&quot;/g);
		const closeDoubles = new RegExp(/(?<=<(h|l|p[^r]).*“.*)&quot;(?=(\s|\p{P}|<))/gu);
		const openSingles = new RegExp(/(?<=<(h|l|p[^r]).*)(?<=\s|>)'/g);
		const closeSingles = new RegExp(/(?<=<(h|l|p[^r]).*‘.*)'(?=(\s|\p{P}|<))/gu);

		return post
			.replace(hawaii, "Hawaiʻi").replace(slang, "’$1")
			.replace(apostrophes, "’").replace(years, "’")
			.replace(openDoubles, "“").replace(closeDoubles, "”")
			.replace(openSingles, "‘").replace(closeSingles, "’")
			.replace(/\.\.\./g, "…");
	});

	// https://www.11ty.dev/docs/config/#transforms-example-minify-html-output
	eleventyConfig.addTransform("htmlmin", function(content) {
		if (this.outputPath && this.outputPath.endsWith(".html")) {
			const minified = htmlmin.minify(content, {
				useShortDoctype: true,
				removeComments: true,
				collapseWhitespace: true
			});

			return minified;
		}

		return content;
	});

	return {
		dir: {
			input: "src",
			output: "public"
		}
	};
};
