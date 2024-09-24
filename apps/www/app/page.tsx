'use client'

import { Button } from '@repo/ui/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@repo/ui/components/ui/card'
import { ArrowRight, FileText, Globe, Layout } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-4 md:p-20">
      <main className="flex w-full max-w-6xl flex-col items-center gap-12 rounded-lg">
        <Image
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
          className="dark:invert"
        />
        <h1 className="text-center text-4xl font-bold tracking-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-[#0099F7] to-[#F11712] bg-clip-text text-transparent">
            Next.js 15
          </span>{' '}
          with Turborepo and shadcn/ui
        </h1>
        <p className="text-muted-foreground max-w-[600px] text-center text-lg">
          A modern web application using Next.js 15, Turborepo, and shadcn/ui
          components.
        </p>
        <div className="bg-muted/50 rounded-lg border p-6 font-mono text-sm leading-6">
          <p>
            Get started by editing{' '}
            <code className="bg-muted rounded p-1 font-semibold">
              app/page.tsx
            </code>
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-full px-5 py-2 transition"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/vercel.svg"
              alt="Vercel logo"
              width={20}
              height={20}
              className="mr-2 dark:invert"
            />
            Deploy now
          </Link>
          <Link
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            className="border-primary text-primary hover:bg-primary/10 rounded-full border px-5 py-2 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </Link>
        </div>

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Turborepo</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                High-performance build system for JavaScript and TypeScript
                codebases.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Next.js 15</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                The latest version of the React framework with improved
                performance and developer experience.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>shadcn/ui</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Beautifully designed components that you can copy and paste into
                your apps.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </main>
      <footer className="mt-16 flex flex-wrap justify-center gap-6">
        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors hover:underline"
        >
          <FileText size={16} />
          <span>Learn</span>
        </Link>
        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors hover:underline"
        >
          <Layout size={16} />
          <span>Templates</span>
        </Link>
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground flex items-center gap-2 transition-colors hover:underline"
        >
          <Globe size={16} />
          <span>Go to nextjs.org</span>
          <ArrowRight size={16} />
        </Link>
      </footer>
    </div>
  )
}
