export const dynamic = "force-dynamic";
export const runtime = "nodejs";

type RouteParams = { params: { all?: string[] } };
type RouteHandler = (request: Request, context: RouteParams) => Promise<Response>;

export const GET = async (request: Request, context: RouteParams) => {
  const [{ toNextJsHandler }, { auth }] = await Promise.all([
    import("better-auth/next-js"),
    import("@/lib/auth"),
  ]);
  const handlers = toNextJsHandler(auth) as { GET: RouteHandler; POST: RouteHandler };
  return handlers.GET(request, context);
};

export const POST = async (request: Request, context: RouteParams) => {
  const [{ toNextJsHandler }, { auth }] = await Promise.all([
    import("better-auth/next-js"),
    import("@/lib/auth"),
  ]);
  const handlers = toNextJsHandler(auth) as { GET: RouteHandler; POST: RouteHandler };
  return handlers.POST(request, context);
};
