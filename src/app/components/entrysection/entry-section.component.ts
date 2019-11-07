import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-entry-section',
    templateUrl: 'entry-section.component.html'
})

export class EntrySectionComponent implements OnInit {

    visitForm = new FormGroup({
        tarjet: new FormControl()
    })
    constructor() { }

    ngOnInit() { }
}