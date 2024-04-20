export default defineNitroConfig({
  srcDir: "server",
  imports: {
    imports: [{ name: "Effect", from: "effect" }],
  },
});
