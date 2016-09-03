import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {MATERIAL_DIRECTIVES} from "ng2-material/all";

import {CloudcherryChart} from "../components/cloudcherry.chart";

@Component({
    selector: 'nps-view',
    templateUrl: 'partials/pages/nps-view.html',
    directives : [ROUTER_DIRECTIVES, MATERIAL_DIRECTIVES, CloudcherryChart]
})

export class NPSViewComponent implements OnInit {
     private chartObj = null;
    private chartType = "line";
    constructor (private _router: Router) {}

    ngOnInit() { 
        this.chartObj = {
            data: {
				x : 'x',
				columns: [
					['x', 'All Locations', 'Boston', 'Paris', 'MicroCherry'],
					['Detractors', 75, 0, 0, 0],
					['Passive', 14, 67, 100, 0],
					['Promotors', 12, 33, 0, 0]
					,['NPS',-63, 33, 0, 0],
			
				],
				
				colors: {
					Detractors: '#FE2E2E',
					Promotors: '#00FF40',
					Passive: '#F7FE2E',
					NPS:'#4000FF'
				}//, labels: true,
		
			groups: [
		        ['Detractors','Promotors', 'Passive','NPS']
	        ],
				order:null,
				type: 'bar'
            },
		axis: {
			rotated:true,
			x: {
				type: 'category' // this needed to load string x value
			},
		}
        };
        var that = this;
		that.chartType ="bar";
        //setInterval(function(){
          //  that.chartType = ["line","bar","area","spline","area-spline"][Math.ceil(Math.random() * 5)];
        //}, 3000);
    }
}
