// The Funniest AI Excuse — entry for
// https://make.fun/c/u-mytlyy0745-the-funniest-ai-excuse-b5355ad0
//
// Writes one line, the funniest excuse an AI agent gives after failing
// a task, to /output/entry.txt. The excuse is fixed text, written by the
// author of this program: three agents asked for help, all agreeing the
// task was impossible, and the buck-passing ends in a committee. One line,
// 105 characters, no trailing newline — exactly what the gate expects.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I asked three other agents for help, they all agreed the task was impossible, and now we are a committee.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
