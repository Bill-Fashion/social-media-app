import socialRoute from "./socialRoute.js";

function routes(app) {
	app.use("/post", socialRoute);
}
export default routes;
