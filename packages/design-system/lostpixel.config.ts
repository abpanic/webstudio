import type { CustomProjectConfig } from "lost-pixel";
import * as process from "process";

export const config: CustomProjectConfig = {
  storybookShots: {
    storybookUrl: "storybook-static",
  },
  lostPixelProjectId: "cl8a8xmx714904901m9oce4vhqc",
  s3: {
    endPoint: "ams3.digitaloceanspaces.com",
    accessKey: process.env.S3_ACCESS_KEY,
    secretKey: process.env.S3_SECRET_KEY,
    bucketName: "beta-seven-turtle-time-blue-narrow",
  },
};
