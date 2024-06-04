# gatsby-remark-link-on-headers

## Description

This plugin will add an anchor link on headers for your markdown.

## How to install

To install, run `npm install gatsby-remark-link-on-headers gatsby-transformer-remark`. This plugin requires gatsby-transformer-remark.
In gatsby-config, add this under `gatsby-transformer-remark`:

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

## Options

### headings

optional. The array of headings you wanted to add link. For the example above, it will create link for h2 and h3 only.
For all headings, leave it empty.

## Examples of usage

The plugins will replace the headers with an anchor link based on headings options.

## Changelogs

See: https://github.com/7sferry/gatsby-remark-link-on-headers/releases

## How to contribute

any ideas or recommendations are welcome.

