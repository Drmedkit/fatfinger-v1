import { createApp, installErrorHandler } from "../server/app";

const app = createApp();
installErrorHandler(app);

export default app;
