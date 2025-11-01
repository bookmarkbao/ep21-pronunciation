import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  base: '/ep21-pronunciation/',
  lang: 'zh-CN',

  title: '大向的21天发音特训',
  description: '用行动影响 - 21天改善英语发音的个人挑战',

  theme: defaultTheme({
    logo: 'https://vuejs.press/images/hero.png',

    navbar: [
      '/',
      { text: '11月计划', link: '/november-plan' },
      { text: '10月回顾', link: '/last-month' },
      { text: '月度记录', link: '/monthly-log' },
      { text: '练习材料', link: '/practice-materials' },
      {
        text: '素材库',
        children: [
          { text: '21个主题', link: '/training-plan' },
          { text: '音标对比', link: '/summary/ipa-notes-compare' },
          { text: '单词库', link: '/summary/words-all' },
          { text: '句子库', link: '/summary/sentences-all' },
        ]
      },
    ],

    sidebar: {
      '/materials/': [
        {
          text: '基础篇：腔体与音标',
          collapsible: true,
          children: [
            '/materials/1_英文腔体 低喉位宽大舌',
            '/materials/2_元音前元音',
            '/materials/3_元音中元音后元音',
            '/materials/4_元音双元音',
            '/materials/5_辅音爆破音',
            '/materials/6_辅音摩擦音',
            '/materials/7_辅音破擦音鼻音',
            '/materials/8_辅音舌侧音半元音',
            '/materials/9_辅音组合',
            '/materials/10_-s和-ed尾音',
          ]
        },
        {
          text: '进阶篇：节奏与连贯',
          collapsible: true,
          children: [
            '/materials/11_单词重音',
            '/materials/12_单词连读',
            '/materials/13_句子节奏',
            '/materials/14_意群断句',
            '/materials/15_焦点词',
          ]
        },
        {
          text: '高级篇：语调与风格',
          collapsible: true,
          children: [
            '/materials/16_语调（上）中英文语调区别语调节奏联动',
            '/materials/17_语调（下）上升下降语调句中升调',
            '/materials/18_弱读（上）',
            '/materials/19_弱读（下）',
            '/materials/20_英式美式英语区别',
            '/materials/21_发音的刻意练习方法',
          ]
        }
      ],
      '/summary/': [
        {
          text: '汇总资源',
          children: [
            '/summary/words-all',
            '/summary/sentences-all',
            '/summary/ipa-notes-compare',
          ]
        }
      ]
    }
  }),

  bundler: viteBundler(),
})
