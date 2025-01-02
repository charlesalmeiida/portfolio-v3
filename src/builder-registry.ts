"use client"
import { builder, Builder } from "@builder.io/react"
import { Header } from "./components/layout/header"

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!)

Builder.registerComponent(Header, {
  name: "Header",
})
