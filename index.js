// noop
const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");
const slugify = require("@sindresorhus/slugify");

module.exports = async ({markdownAST}, pluginOptions) => {
	visit(markdownAST, "heading", (node) => {
		let {depth} = node;
		const headings = pluginOptions?.headings ?? [];

		// Skip if not an h1
		if (headings.length > 0 && !headings.includes(`h${depth}`)) return;

		// Grab the innerText of the heading node
		let text = toString(node);

		let slug = slugify(text);
		const html = `
        <h${depth} class="heading-container" id="${slug}">
          <a class="heading-text" href="#${slug}">${text}</a>
        </h${depth}>
      `;

		node.type = "html";
		node.children = undefined;
		node.value = html;
	});

	return markdownAST;
};
