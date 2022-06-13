export default {
    addTenantIdAndInstanceIdToHeader: next => (root, args, context, info) => {
        context.req.headers.set('myheader', 'myheaderValue');
        return next(root, args, context, info)
    }
};
