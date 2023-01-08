import katex from 'katex'
import 'katex/dist/katex.css'
import addPersianTo from 'src/index.mjs'
import 'katex-persian-fonts/index.css'
import allMetrics from 'katex-persian-fonts/fontMetrics.json'

addPersianTo(katex, {
    fontName: 'iranyekan',
    fontMetrics: allMetrics
})