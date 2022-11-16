import { PrismaClient, BlogPost } from '@prisma/client'

const prisma = new PrismaClient()

export async function createBlogPost(blogPost: BlogPost): Promise<BlogPost> {
    return await prisma.blogPost.create({
        data: blogPost,
    })
}

export async function getBlogPosts(): Promise<BlogPost[]> {
    return await prisma.blogPost.findMany()
}

export async function getBlogPost(slug: string): Promise<BlogPost> {
    return await prisma.blogPost.findUnique({ where: { slug } })
}