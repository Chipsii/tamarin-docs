"use client";

import * as React from "react";
import { useCompletion } from "ai/react";
import {
  X,
  Loader,
  User,
  Frown,
  CornerDownLeft,
  Search,
  Wand,
} from "lucide-react";

export function SearchDialog() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState<string>("");

  const { complete, completion, isLoading, error } = useCompletion({
    api: "/api/vector-search",
  });

  React.useEffect(() => {
    console.log("open", query);
    console.log("open", process.env.NEXT_PUBLIC_OPENAI_KEY);
    // const down = (e: KeyboardEvent) => {
    //   if (e.key === 'k' && e.metaKey) {
    //     setOpen(true)
    //   }

    //   if (e.key === 'Escape') {
    //     console.log('esc')
    //     handleModalToggle()
    //   }
    // }

    // document.addEventListener('keydown', down)
    // return () => document.removeEventListener('keydown', down)
  }, [query]);

  function handleModalToggle() {
    setOpen(!open);
    setQuery("");
  }

  const handleSubmit = () => {
    // e.preventDefault()
    console.log(query);
    complete(query);
  };

  return (
    <>
      <form>
        <div className="grid gap-4 py-4 text-white-700">
          {query && (
            <div className="flex gap-4">
              <span className="bg-slate-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                <User width={18} />{" "}
              </span>
              <p className="mt-0.5 font-semibold text-slate-700 text-slate-100">
                {query}
              </p>
            </div>
          )}

          {isLoading && (
            <div className="animate-spin relative flex w-5 h-5 ml-2">
              <Loader />
            </div>
          )}

          {error && (
            <div className="flex items-center gap-4">
              <span className="bg-red-100 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                <Frown width={18} />
              </span>
              <span className="text-slate-700 text-slate-100">
                Sad news, the search has failed! Please try again.
              </span>
            </div>
          )}

          {completion && !error ? (
            <div className="flex items-center gap-4 text-white">
              <span className="bg-green-500 p-2 w-8 h-8 rounded-full text-center flex items-center justify-center">
                <Wand width={18} className="text-white" />
              </span>
              <h3 className="font-semibold">Answer:</h3>
              {completion}
            </div>
          ) : null}

          <div className="relative">
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full text-gray-700 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(e) => {
                console.log(e.target.value);
                setQuery(e.target.value);
              }}
            />
          </div>
        </div>
      </form>
      <button
        type="button"
        className="px-1.5 py-0.5
                  hover:bg-slate-100 hover:bg-gray-600
                  rounded border border-slate-200 border-slate-600
                  transition-colors"
        onClick={(_) => handleSubmit()}
      >
        Submit
      </button>

      {/* </DialogContent>
      </Dialog> */}
    </>
  );
}
