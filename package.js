Package.describe({
    summary: "packaging jqBootstrapValidation for meteor JS."
});

Package.on_use(function(api) {
    api.use('jquery', 'client');
    api.add_files('lib/jqBootstrapValidation.js', 'client');
});
