This plugin will add link on headers for your markdown.

To install, run `npm install gatsby-remark-link-on-headers gatsby-transformer-remark`.

in gatsby-config, add this under `gatsby-transformer-remark`:

```js
plugins: [{
	//other plugins...

	resolve: `gatsby-transformer-remark`,
	options: {
		plugins: [
			{
				resolve: `gatsby-remark-link-on-headers`,
				options: {
					headings: [`h2`, `h3`],
				},
			},
		]
	}
}]
```