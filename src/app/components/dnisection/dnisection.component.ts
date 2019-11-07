
import {Component, OnInit} from '@angular/core';

import { FormControl, FormGroup } from "@angular/forms";


/** @title Simple form field */
@Component({
  selector: 'app-dnisection',
  templateUrl: 'dnisection.component.html'
  //styleUrls: ['form-field-overview-example.css'],
})
export class DniSectionComponent implements OnInit {
    
    fullName: string;
    dniForm = new FormGroup({
        dni: new FormControl()
    });

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
        
    }

    onClick() {
        console.log('holis');
    }
}