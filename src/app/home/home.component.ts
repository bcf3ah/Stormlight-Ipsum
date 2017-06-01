import { Component, OnInit } from '@angular/core';

import { IpsumService } from '../ipsum.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private ipsumService: IpsumService) { }

  ngOnInit() {
  }

	num: number = 1;

	ipsumArray = [];

	long: boolean = false;

	changeLength(){
		this.long = !this.long;
	}

	getIpsum(){
		if(this.long){
			this.getLongIpsum();
		} else {
			this.getShortIpsum();
		}
	}

	getShortIpsum(){
		this.ipsumArray = [];
		for (var i = 0; i<this.num; i++){
			let temp = this.ipsumService.getShortIpsum();
			this.ipsumArray.push(temp);
		}
	}

	getLongIpsum(){
		this.ipsumArray = [];
		for (var i = 0; i<this.num; i++){
			let temp = this.ipsumService.getLongIpsum();
			this.ipsumArray.push(temp);
		}
	}

}
