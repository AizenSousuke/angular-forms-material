import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    storyForm;

    constructor(private formBuilder: FormBuilder) { 
        this.storyForm = this.formBuilder.group({
            formArray: this.formBuilder.array([
                this.formBuilder.group({
                    image: []
                }),
                this.formBuilder.group({
                    story: []
                }),
            ]),
        });
        console.log(this.storyForm);
    }

    onStorySubmit() {

    }
}
