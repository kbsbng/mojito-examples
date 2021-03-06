/*jslint anon:true, sloppy:true, nomen:true*/
YUI.add('WeatherBinderIndex', function (Y, NAME) {

    /**
     * The WeatherBinderIndex module.
     *
     * @module WeatherBinderIndex
     */

    /**
     * Constructor for the WeatherBinderIndex class.
     *
     * @class WeatherBinderIndex
     * @constructor
     */
    Y.namespace('mojito.binders')[NAME] = {

        /**
         * Binder initialization method, invoked after all binders on the page
         * have been constructed.
         */
        init: function (mojitProxy) {
            this.mojitProxy = mojitProxy;
        },

        /**
         * The binder method, invoked to allow the mojit to attach DOM event
         * handlers.
         *
         * @param node {Node} The DOM node to which this mojit is attached.
         */
        bind: function (node) {
            var me = this, mp = this.mojitProxy;
            this.node = node;
            node.one("#show-forecast").on("click", function () {
                mp.invoke("forecast", {}, function (err, markup) {
                    node.one("#forecast").set("innerHTML", markup);
                });
            });
            node.one("#refresh").on("click", function () {
                mp.refreshView();
            });
            /**
             * Example code for the bind method:
             *
             * node.all('dt').on('mouseenter', function(evt) {
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).addClass('sel');
             *
             * });
             * node.all('dt').on('mouseleave', function(evt) {
             *   
             *   var dd = '#dd_' + evt.target.get('text');
             *   me.node.one(dd).removeClass('sel');
             *
             * });
             */
        },

        onRefreshView: function(node) {
            this.bind(node);
        }

    };

}, '0.0.1', {requires: ['event-mouseenter', 'mojito-client']});