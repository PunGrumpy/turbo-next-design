'use client'

import { Button } from '@repo/ui/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@repo/ui/components/ui/card'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="from-background to-secondary/20 flex min-h-screen flex-col items-center justify-between bg-gradient-to-br p-8 md:p-20">
      <motion.main
        className="flex flex-col items-center gap-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Image
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
        </motion.div>
        <motion.ol
          className="bg-card border-card list-decimal space-y-4 rounded-lg px-12 py-6 font-mono text-sm leading-6 shadow-lg"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          initial="hidden"
          animate="show"
        >
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
          >
            Get started by editing{' '}
            <code className="bg-muted text-primary rounded p-1 font-semibold">
              app/page.tsx
            </code>
          </motion.li>
          <motion.li
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
          >
            Save and see your changes instantly.
          </motion.li>
        </motion.ol>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            className="bg-primary text-primary-foreground hover:bg-primary/90 flex items-center gap-2 rounded-full px-5 py-2 transition"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src="/vercel.svg" alt="Vercel logo" width={20} height={20} />
            Deploy now
          </Link>
          <Link
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="border-primary text-primary hover:bg-primary/10 rounded-full border px-5 py-2 transition"
          >
            Read our docs
          </Link>
        </div>
        <Button
          className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-5 py-2"
          onClick={() => alert('Welcome to the improved Next.js app!')}
        >
          Open alert
        </Button>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
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
      </motion.main>
      <motion.footer
        className="mt-8 flex flex-wrap justify-center gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <Link
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex items-center gap-1 hover:underline"
        >
          <Image src="/file-text.svg" alt="File icon" width={16} height={16} />
          Learn
        </Link>
        <Link
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex items-center gap-1 hover:underline"
        >
          <Image src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </Link>
        <Link
          href="https://nextjs.org"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary flex items-center gap-1 hover:underline"
        >
          <Image src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </Link>
      </motion.footer>
    </div>
  )
}
