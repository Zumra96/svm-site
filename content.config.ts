import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        news: defineCollection({
            type: 'page',
            source: 'news/*.md'
        }),
        masses: defineCollection({
            type: 'data',
            source: 'masses/*.md'
        }),
        gallery: defineCollection({
            type: 'page',
            source: 'gallery/*.md'
        })
    }
})
