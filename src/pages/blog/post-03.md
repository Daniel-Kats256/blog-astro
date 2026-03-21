---
title: "How to create a website using Astro and deploy it on Netlify"
pubDate: 2026-03-17
description: "A step-by-step guide to building a website with Astro and deploying it online using Netlify."
author: "Daniel Kats"
image:
  url: "/assets/img/post-03.png"
  alt: "Astro website deployment"
tags: ["astro", "web development", "deployment", "netlify"]
layout: "../../layouts/BlogLayout.astro"
---

# How to Create a Website Using Astro and Deploy It on Netlify

<p class="lead text-secondary">
  Build fast, modern websites with Astro and deploy them easily using Netlify.
  This guide walks you step-by-step from setup to going live.
</p>

<div class="alert alert-info mb-4">
  🚀 By the end of this guide, your website will be live on the internet!
</div>

<div class="card shadow-sm mb-4">
  <div class="card-body">

## 🚀 Step 1: Install Astro

<p>Make sure you have Node.js installed, then run:</p>

```bash
npm create astro@latest
```

<p>Follow the setup prompts and install dependencies.</p> </div> </div> <div class="card shadow-sm mb-4"> <div class="card-body">

## ▶️ Step 2: Run Your Project Locally

<p>Start the development server:</p>
npm run dev
<p>Your site will be available at:</p>

```bash
http://localhost:4321
```

</div> </div> <div class="card shadow-sm mb-4"> <div class="card-body">

## 🧱 Step 3: Create Pages and Components

<p>Astro uses file-based routing. Add pages inside:</p>
src/pages/
<p>Examples:</p>

```bash
src/pages/index.astro
src/pages/blog.astro
```

<p>Reusable components go in:</p>
src/components/
</div> </div> <div class="card shadow-sm mb-4"> <div class="card-body">

## 📝 Step 4: Add Blog Posts

<p>Create a blog folder:</p>
src/pages/blog/
<p>Add Markdown posts:</p>

```bash
post-01.md
post-02.md
post-03.md
```

<p class="text-success fw-semibold"> Each file automatically becomes a page on your website. </p> </div> </div> <div class="card shadow-sm mb-4"> <div class="card-body">

## ⚙️ Step 5: Build Your Website

<p>Generate production files:</p>
npm run build
<p> This creates a <code>dist/</code> folder ready for deployment. </p> </div> </div> <div class="card shadow-sm mb-4"> <div class="card-body">

## 🌍 Step 6: Deploy to Netlify

<ul class="list-group list-group-flush mb-3"> <li class="list-group-item">Push your project to GitHub</li> <li class="list-group-item">Log in to Netlify</li> <li class="list-group-item">Click <strong>"Add new site"</strong></li> <li class="list-group-item">Import your repository</li> </ul> <p>Set build settings:</p>
Build command: npm run build
Publish directory: dist
<p class="text-primary fw-semibold"> Click deploy and your site will be live instantly 🚀 </p> </div> </div> <div class="alert alert-success mb-4"> 🔄 Every time you push code to GitHub, Netlify automatically rebuilds and updates your website. </div> <div class="card shadow-sm mb-4"> <div class="card-body">

## 🌐 Step 7: Custom Domain

<p> You can add a custom domain from the Netlify dashboard to make your site look more professional. </p> </div> </div> <blockquote class="blockquote border-start border-4 ps-3 mt-4"> <p class="mb-0"> Astro + Netlify is one of the fastest and easiest ways to build and deploy modern websites. Start simple, then keep improving your project. </p> </blockquote> ```
