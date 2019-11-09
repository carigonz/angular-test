
import {Component, OnInit} from '@angular/core';
import { FakeUsersService } from './fakeUsers.service'
import { FormControl, FormGroup } from "@angular/forms";


/** @title Simple form field */
@Component({
  selector: 'app-dnisection',
  templateUrl: 'dnisection.component.html',
  styleUrls: ['dnisection.component.css'],
})
export class DniSectionComponent implements OnInit {
    
    name: object;
    dniForm = new FormGroup({
        dni: new FormControl()
    });

    constructor(private fakeService: FakeUsersService){}

    ngOnInit() {
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class.
    
    }

    validate(dniForm) {
        console.log(this.dniForm.get('dni'));
        this.fakeService.getFakeUsers(38327896).subscribe(
            result => console.log(result)
          );
    }

}