import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { CardHeader, CardBody, CardFooter, Card } from "@nextui-org/card";

import { CheckIcon } from "@/components/assets";



export default function Component() {
  return (
    <div className="flex min-h-[100dvh] flex-col bg-background text-foreground">
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32">
          <div className="space-y-10 px-4 md:px-6 xl:space-y-16">
            <div className="mx-auto grid max-w-[1300px] gap-4 px-4 sm:px-6 md:grid-cols-2 md:gap-16 md:px-10">
              <div className="space-y-6">
                <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Enhance Your Workflow with Seamless Uploads
                </h1>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Galzzy is the Ultimate YouTube workflow companion Seamlessly
                  upload and collaborate for maximum impact
                </p>
                <div className="mt-6 space-x-4">
                  <Button
                    color="primary"
                    className="text-primary-foreground"
                    href="/signin"
                    as={"a"}
                  >
                    Start Uploading
                  </Button>
                </div>
              </div>
              <div className="flex h-full w-full flex-col items-start space-y-4 overflow-clip">
                <Image
                  alt="Hero"
                  className="mx-auto aspect-[4/2] h-fit w-full overflow-hidden rounded-t-xl object-cover"
                  src="/bg.svg"
                  height={500}
                  width="1270"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32" id="features">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Key Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Powerful Video Uploading and Sharing
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Galzzy offers a suite of features to make uploading and
                  sharing your videos a breeze.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card className="grid gap-1 border border-background bg-background p-4 shadow-none duration-300 hover:border-primary">
                <h3 className="text-lg font-bold">Easy Uploading</h3>
                <p className="text-sm">
                  Drag and drop your videos or use our simple upload tool to get
                  your content online in seconds.
                </p>
              </Card>
              <Card className="grid gap-1 border border-background bg-background p-4 shadow-none duration-300 hover:border-primary">
                <h3 className="text-lg font-bold">Fast Processing</h3>
                <p className="text-sm">
                  Our powerful servers quickly process your videos, ensuring
                  your content is available to share right away.
                </p>
              </Card>
              <Card className="grid gap-1 border border-background bg-background p-4 shadow-none duration-300 hover:border-primary">
                <h3 className="text-lg font-bold">Secure Storage</h3>
                <p className="text-sm">
                  Your videos are stored securely in our cloud, protected by
                  industry-leading encryption and backup systems.
                </p>
              </Card>
              <Card className="grid gap-1 border border-background bg-background p-4 shadow-none duration-300 hover:border-primary">
                <h3 className="text-lg font-bold">Customizable Sharing</h3>
                <p className="text-sm">
                  Share your videos with the world or keep them private.
                  Customize your video pages with your branding.
                </p>
              </Card>
              <Card className="grid gap-1 border border-background bg-background p-4 shadow-none duration-300 hover:border-primary">
                <h3 className="text-lg font-bold">Analytics and Insights</h3>
                <p className="text-sm">
                  Track your video&apos;s performance with detailed analytics,
                  including views, engagement, and more.
                </p>
              </Card>
              <Card className="grid gap-1 border border-background bg-background p-4 shadow-none duration-300 hover:border-primary">
                <h3 className="text-lg font-bold">Seamless Integration</h3>
                <p className="text-sm">
                  Embed your Galzzy videos on your website or share them across
                  social media with ease.
                </p>
              </Card>
            </div>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button color="primary">Start Uploading</Button>
              <Link color="primary" className="inline-flex">
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32" id="pricing">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg px-3 py-1 text-sm">
                  Pricing
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Affordable Plans for Every Need
                </h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Choose the plan that best fits your video hosting and sharing
                  requirements.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card className="rounded-lg border border-background bg-background p-6 shadow-none duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5">
                <CardHeader className="flex flex-col items-start justify-center">
                  <h5 className="text-xl font-bold text-primary">Free</h5>
                  <p className="text-zinc-400">Get started for free</p>
                </CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold">$0</span>
                    <span className=" ">per month</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>1 GB storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>Basic video features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>Limited analytics</span>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="w-full">
                    Sign Up
                  </Button>
                </CardFooter>
              </Card>
              <Card className="rounded-lg border border-background bg-background p-6 shadow-none duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5">
                <CardHeader className="flex flex-col items-start justify-center">
                  <h5 className="text-xl font-bold text-primary">Pro</h5>
                  <p className="text-zinc-400">Advanced video hosting</p>
                </CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold">$25</span>
                    <span className=" ">per month</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>25 GB storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>Advanced video features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>Detailed analytics</span>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="w-full">
                    Sign Up
                  </Button>
                </CardFooter>
              </Card>
              <Card className="rounded-lg border border-background bg-background p-6 shadow-none duration-300 hover:scale-105 hover:border-primary hover:bg-primary/5">
                <CardHeader className="flex flex-col items-start justify-center">
                  <h5 className="text-xl font-bold text-primary">Enterprise</h5>
                  <p className="text-zinc-400">Tailored for large teams</p>
                </CardHeader>
                <CardBody>
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-bold">$50</span>
                    <span className=" ">per month</span>
                  </div>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>Unlimited storage</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>Enterprise video features</span>
                    </li>
                    <li className="flex items-center">
                      <CheckIcon className="mr-2 h-5 w-5 text-green-500" />
                      <span>Customized analytics</span>
                    </li>
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button color="primary" className="w-full">
                    Sign Up
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Trust Galzzy with Your Videos
              </h2>
              <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Galzzy is the secure and reliable choice for all your video
                hosting and sharing needs.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs">
                Sign up to get notified when we launch.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex w-full shrink-0 flex-col items-center gap-2 px-4 py-6 sm:flex-row md:px-6">
        <p className="text-xs dark:text-gray-700">
          © 2024 Galzzy. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:ml-auto sm:gap-6">
          <Link className="text-xs underline-offset-4 hover:underline" href="#">
            Privacy Policy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
