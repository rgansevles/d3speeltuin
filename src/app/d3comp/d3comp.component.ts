import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3comp',
  templateUrl: './d3comp.component.html',
  styleUrls: ['./d3comp.component.css']
})
export class D3compComponent implements OnInit {

  @ViewChild('svg') svg: ElementRef;

  constructor() { }

  ngOnInit() {

    const svg3 = d3.select(this.svg.nativeElement).append('svg')
      .attr('width', 960)
      .attr('height', 500)
      .append('rect')
      .attr('x', 20)
      .attr('y', 100)
      .attr('width', 500)
      .attr('height', 2500)
    ;
  }

}
