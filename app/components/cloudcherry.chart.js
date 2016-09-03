System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CloudcherryChart;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CloudcherryChart = (function () {
                function CloudcherryChart(el) {
                    this.el = el;
                    this.chart = {};
                    this.generatedChart = {};
                    this.interactionEnabled = true;
                }
                CloudcherryChart.prototype.initChart = function () {
                    this.chart.size = {
                        width: this.el.nativeElement.offsetWidth,
                        height: this.el.nativeElement.offsetHeight
                    };
                    this.chart.transition = {
                        duration: 1000
                    };
                    var barWidth = (this.el.nativeElement.offsetWidth * 0.75 / ((this.chart.data.columns.length - 1) * (this.chart.data.columns[0].length - 1)));
                    this.chart.bar = {
                        width: this.barWidth == undefined ? (barWidth < 30 ? barWidth : 20) : (barWidth < this.barWidth ? barWidth : this.barWidth)
                    };
                    this.chart.data.type = this.type;
                    this.chart.legend = { show: this.showLegend };
                    this.chart.donut = {
                        title: this.title,
                        label: {
                            show: this.showLabel
                        }
                    };
                    this.chart.interaction = {
                        enabled: this.interactionEnabled
                    };
                    if (this.colors != null)
                        this.chart.color = {
                            pattern: this.colors
                        };
                    this.generatedChart = c3.generate(this.chart);
                };
                CloudcherryChart.prototype.mapDataForOthers = function () {
                    var column = [];
                    var that = this;
                    jQuery.each(this.chart.data.columns, function (ind, data) {
                        if (ind != 0)
                            column.push(data[1]);
                        else
                            column.push(that.chart.donut.title);
                    });
                    return [this.chart.data.columns[0], column];
                };
                CloudcherryChart.prototype.mapDataForPie = function () {
                    var column = [this.chart.data.columns[0]];
                    var that = this;
                    jQuery.each(this.chart.data.columns[0], function (ind, data) {
                        column.push([that.chart.data.columns[0][ind], that.chart.data.columns[1][ind]]);
                    });
                    return column;
                };
                CloudcherryChart.prototype.ngOnInit = function () {
                    $(this.el.nativeElement).empty();
                    this.chart = jQuery.extend({}, this.chart);
                    this.chart.bindto = this.el.nativeElement;
                    if (["pie", "donut"].indexOf(this.type) != -1)
                        this.chart.data.columns = this.mapDataForPie();
                    this.initChart();
                    var that = this;
                    $(window).bind("resize", function () {
                        that.generatedChart.resize({
                            width: that.el.nativeElement.offsetWidth,
                            height: that.el.nativeElement.offsetHeight
                        });
                    });
                };
                CloudcherryChart.prototype.ngOnChanges = function (change) {
                    if (this.generatedChart != undefined && Object.keys(this.generatedChart).length > 0) {
                        if (change.showLegend != null) {
                            //this.initChart();
                            if (change.showLegend.currentValue)
                                this.generatedChart.legend.show();
                            else
                                this.generatedChart.legend.hide();
                        }
                        if (change.type != undefined) {
                            this.chart.data.type = change.type.currentValue;
                            if (["pie", "donut"].indexOf(change.type.previousValue) != -1 && ["pie", "donut"].indexOf(change.type.currentValue) == -1) {
                                this.chart.data.columns = this.mapDataForOthers();
                                this.generatedChart.destroy();
                                this.initChart();
                            }
                            else if (["pie", "donut"].indexOf(change.type.previousValue) == -1 && ["pie", "donut"].indexOf(change.type.currentValue) != -1) {
                                this.chart.data.columns = this.mapDataForPie();
                                this.generatedChart.destroy();
                                this.initChart();
                            }
                            else
                                this.generatedChart.transform(change.type.currentValue);
                        }
                        if (change.chart != undefined) {
                            this.chart.data.columns = change.chart.currentValue.data.columns;
                            this.generatedChart.load({
                                columns: change.chart.currentValue.data.columns,
                                unload: true
                            });
                        }
                    }
                };
                CloudcherryChart = __decorate([
                    core_1.Directive({
                        selector: '[cherryChart]',
                        inputs: ['chart', 'type', 'barWidth', 'showLegend', 'title', 'showLabel', 'colors', 'interactionEnabled']
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], CloudcherryChart);
                return CloudcherryChart;
            }());
            exports_1("CloudcherryChart", CloudcherryChart);
        }
    }
});
//# sourceMappingURL=cloudcherry.chart.js.map