export default {
    addTenantIdAndInstanceIdToHeader: next => (root, args, context, info) => {
        context.req.headers.set('myheader', 'myheader');
        return next(root, args, context, info)
    }
};
