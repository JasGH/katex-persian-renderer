<h2 align="center">Usage</h2>

You should change your western numeral characters ([0-9]) to eastern numerals [۰-۹].

## changing the font

for using your default font you need:

1. a generated json file of the font metrics. ( as in katex-persian-renderer/src/fontMetrics.json )

2. a .css file for font-faces and katex styling ( SAMPLE IN katex-persian-renderer/src/index.css )

then import the files and use `addPersianTo` method

```javascript
import katex from 'katex'
import 'katex/dist/katex.css'
import persianKatexPlugin from 'katex-persian-renderer/src/index'
import 'katex-persian-renderer/katex-persian-fonts/index.css'
import allMetrics from 'katex-persian-renderer/katex-persian-fonts/fontMetrics.json'

persianKatexPlugin(katex, {
    fontName: 'iranyekan',
    fontMetrics: allMetrics
})
```
