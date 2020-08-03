const React = require('react');

export const onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    setHeadComponents([
        <script 
        key="1"
        src="https://code.jquery.com/jquery-3.4.1.min.js" 
        crossOrigin="anonymous">
        </script>,
        <script 
        key="2"
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js" 
        crossOrigin="anonymous">
        </script>,
        <script 
        key="3"
        type="text/javascript"
        src="/scripts.js">
        </script>,
    ])
}