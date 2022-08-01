import * as slack-manifest from "@pulumi/slack-manifest";

const random = new slack-manifest.Random("my-random", { length: 24 });

export const output = random.result;