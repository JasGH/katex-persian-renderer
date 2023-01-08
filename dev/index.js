import katex from 'katex'
import 'katex/dist/katex.css'
import persianKatexPlugin from 'src/index'
import 'katex-persian-fonts/index.css'
import allMetrics from 'katex-persian-fonts/fontMetrics.json'

persianKatexPlugin(katex, {
    fontName: 'iranyekan',
    fontMetrics: allMetrics
})