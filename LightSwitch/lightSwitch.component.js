"use strict";

const lightSwitch = {
    bindings: {
        onFlip: "&" 
    },

    template: `
        <button ng-click="$ctrl.onFlip()">Switch</button>
        `,
    }

    angular
    .module("LightApp")
    .component("lightSwitch", lightSwitch);