"use strict";

const light = {
    template: `
    <section ng-class="{'lightOn': $ctrl.isOn===true}">Light</section>
    <light-switch on-flip="$ctrl.onFlip()"></light-switch>
    `,
    controller: [function () {
        const vm = this;
        vm.isOn = false;
        vm.onFlip = function () {
            if (vm.isOn === true) {
                vm.isOn = false;
            } else {
                vm.isOn = true;
            }
        }
    }]
};

angular
    .module("LightApp")
    .component("light", light)