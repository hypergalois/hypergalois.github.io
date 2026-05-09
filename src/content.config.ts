import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const researchLine = z.enum(['crypto-security', 'ml-ai-formal']);

// Blog collection with Content Layer API
const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      title: z.string().max(100),
      description: z.string().max(200),
      publishedAt: z.coerce.date(),
      updatedAt: z.coerce.date().optional(),
      author: z.string().default('Team'),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      line: researchLine.optional(),
      svgSlug: z.string().optional(),
      draft: z.boolean().default(false),
      featured: z.boolean().default(false),
      locale: z.enum(['en', 'es', 'fr']).default('en'),
    }),
});

// Authors collection
const authors = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/authors' }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      bio: z.string(),
      avatar: image().optional(),
      social: z
        .object({
          twitter: z.string().optional(),
          github: z.string().optional(),
          linkedin: z.string().optional(),
        })
        .optional(),
    }),
});

// FAQs collection (for JSON-LD FAQ schema)
const faqs = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/faqs' }),
  schema: z.object({
    question: z.string(),
    answer: z.string(),
    category: z.string().optional(),
    order: z.number().default(0),
    locale: z.enum(['en', 'es', 'fr']).default('en'),
  }),
});

// Topic cards used by the homepage research direction section.
const topics = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/topics' }),
  schema: z.object({
    title: z.string(),
    body: z.string(),
    icon: z.string(),
    href: z.string(),
    order: z.number().default(99),
    tags: z.array(z.string()).default([]),
  }),
});

// Papers and manuscripts: preprints, drafts, and paper-shaped research records.
const papers = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/papers' }),
  schema: z.object({
    title: z.string(),
    description: z.string().max(400),
    authors: z.array(z.string()).default(['José Luis Delgado']),
    year: z.number().optional(),
    status: z.string(),
    venue: z.string().optional(),
    tags: z.array(z.string()).default([]),
    line: researchLine.optional(),
    featured: z.boolean().default(false),
    order: z.number().default(99),
    pdf: z.string().optional(),
    repo: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

// Projects collection — one MDX file per project
const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      url: z.url().optional(),
      repo: z.url().optional(),
      image: image().optional(),
      imageAlt: z.string().optional(),
      tags: z.array(z.string()).default([]),
      line: researchLine.optional(),
      featured: z.boolean().default(false),
      order: z.number().default(99),
      year: z.number().optional(),
      client: z.string().optional(),
      role: z.string().optional(),
      services: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
});

// Stack collection — one MDX file per tool, editable like blog posts
const stack = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/stack' }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    version: z.string(),
    url: z.url(),
    icon: z.string(), // icon name, e.g. 'brand-astro'
    colorOklch: z.string(), // OKLCH params, e.g. '62.5% 0.22 38'
    order: z.number().default(0),
  }),
});

export const collections = {
  blog,
  authors,
  faqs,
  topics,
  papers,
  stack,
  projects,
};
