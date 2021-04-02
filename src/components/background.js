import React from "react"

const emojiArr = [
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
  ["🎪", "🎰", "🍟", "🚵", "🍻", "🔭", "🚆", "🍕", "🎷", "🎱", "⛳", "🍩"],
]

const loopArr = () =>
  emojiArr.map((el, i) => (
    <div key={`${i}a`} className="low-opacity flex justify-between px-2 md:py-4">
      {el.map((el, i) => (
        <span key={`${i}b`} className="scale h-10 md:h-20" role="img" aria-label="tree">
          {el}
        </span>
      ))}
    </div>
  ))

const Background = () => (
  <div className="absolute overflow-y-hidden min-w-full max-h-screen flex flex-col z-0">
    {loopArr()}
  </div>
)

export default Background