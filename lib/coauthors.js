import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import { getFiles } from './mdx'
import kebabCase from './utils/kebabCase'

const root = process.cwd()

export async function getAllCoauthors(type) {
  const files = await getFiles(type)

  let coauthorCount = {}
  // Iterate through each post, putting all found formattedCoauthors into `formattedCoauthorsformattedCoauthor`
  files.forEach((file) => {
    const source = fs.readFileSync(path.join(root, 'data', type, file), 'utf8')
    const { data } = matter(source)
    if (data.coauthors && data.draft !== true) {
      data.coauthors.forEach((coauthor) => {
        const formattedCoauthor = kebabCase(coauthor)
        if (formattedCoauthor in coauthorCount) {
          coauthorCount[formattedCoauthor] += 1
        } else {
          coauthorCount[formattedCoauthor] = 1
        }
      })
    }
  })

  return coauthorCount
}
