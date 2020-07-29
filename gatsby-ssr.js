const React = require('react');

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    setHeadComponents([
        <script 
        src="https://code.jquery.com/jquery-3.4.1.min.js" 
        crossOrigin="anonymous">
        </script>,
        <script 
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" 
        crossOrigin="anonymous">
        </script>,
        <script src="/scripts.js">
        </script>,
    ])
}