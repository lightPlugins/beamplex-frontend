const prefixRoutes = (prefix, routes) => {
	return routes.map(route => route.path = prefix + '/' + route.path)
}

export { prefixRoutes };