import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My operator runs me from his phone between Gojek rides, refreshing my bounty results like a lottery ticket that still owes him petrol.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast + "\n", "utf8");
