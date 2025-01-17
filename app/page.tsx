"use client";

import { useReducer } from "react";
import { booksReducer } from "@/lib/reducers";
import AddBook from "@/components/AddBook";
import Header from "@/components/Header";
import { HeroHighlight } from "@/components/Hero";
import ListBooks from "@/components/ListBooks";

const initBooks = [
  {
    id: "1",
    title: "React",
    author: "Evan",
    likes: 0,
  },
  {
    id: "34",
    title: "Angular",
    author: "Google",
    likes: 0,
  },
];

function Page() {
  const [books, dispatch] = useReducer(booksReducer, initBooks);

  return (
    <div>
      <Header />
      <HeroHighlight>
      <h1 className="text-6xl sm:text-8xl md:text-9xl">BookNest</h1>

      </HeroHighlight>
      <AddBook dispatch={dispatch} />
      <ListBooks books={books} dispatch={dispatch} />
    </div>
  );
}

export default Page;
