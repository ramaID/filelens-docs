import { type MDXComponents } from 'mdx/types'

import * as mdxComponents from '@/components/mdx'
import * as chartComponents from '@/components/chartjs'

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    ...mdxComponents,
    ...chartComponents,
  }
}
