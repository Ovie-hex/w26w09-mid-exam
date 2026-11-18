import { type RouteConfig, index, (1) } from "@react-router/dev/routes"

export default [
    (1)("routes/header.tsx", [
        index("routes/list.tsx"),
    ]),
] satisfies RouteConfig