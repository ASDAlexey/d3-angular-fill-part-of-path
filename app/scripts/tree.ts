'use strict';
class TreeCtrl {
    constructor($scope) {
        console.log('dss');
    }
}
class Tree {
    constructor() {
        //Directive settings
        this.restrict = 'E';
        this.replace = true;
        this.template = "<div></div>";
        this.controller = TreeCtrl;
        this.controllerAs = 'vm';
        this.scope = {};
        this.link = (scope, element, attrs, ctrls, transludeFn)=> {
            let svg = d3.select(element[0])
                .append('svg')
                .attr("viewBox", "0 0 692.411 692.411");

            var defs= svg.append('defs');
            defs.append('pattern')
                .attr('id', 'pic1')
                .attr('patternUnits', 'userSpaceOnUse')
                .attr('width', 341)
                .attr('height', 347)
                .append('svg:image')
                .attr('xlink:href', "/images/tree.png")
                .attr("width", 341)
                .attr("height", 347)
                .attr("x", 0)
                .attr("y", 0);

            svg
                .append('rect')
                .attr("width", 341)
                .attr("height", 347)
                .attr("fill", "url(#pic1)")
                .attr("x", "50%")
                .attr("y", "100%")
                .attr(
                    'transform',
                    'translate(' + -341 / 2 + ',' + -347 + ')'
                );
        };
    }

    static factory() {
        var directive = () =>
            new TreeCtrl();
        return directive;
    }
}

var app = angular.module('app', []);
app.directive('Tree', ()=> new Tree());