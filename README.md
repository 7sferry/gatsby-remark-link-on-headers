This plugin will add link on headers for your markdown.

To install, run `npm install gatsby-remark-link-on-headers gatsby-transformer-remark`. This plugin requires gatsby-transformer-remark.

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
options: the array of headings you wanted to add link. For the example above, it will create link for h2 and h3 only. For all headings, leave it empty.
