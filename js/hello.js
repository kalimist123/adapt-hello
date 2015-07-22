
define(function (require) {
    var ComponentView = require('coreViews/componentView');
    var Adapt = require('coreJS/adapt');

    var helloWorld = ComponentView.extend({

        preRender: function () {
           
        },

        postRender: function () {
           
        },
        initialize: function() {
            this.render();
            this.setReadyStatus();
        },
        
        render: function() {
          
            this.$el.append("Hello");
            return this;
        }

      
    });

    Adapt.register('hello', helloWorld);
    return helloWorld;
});
