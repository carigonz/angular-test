import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { FakeUsersService } from './components/dnisection/fakeUsers.service';

// components
import { HeaderComponent } from './components/header/header.component';
import { DniSectionComponent } from './components/dnisection/dnisection.component';
import { EntrySectionComponent } from './components/entrysection/entry-section.component';
//import { RecordsComponent } from './components/records/records.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, DniSectionComponent, EntrySectionComponent],
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [FakeUsersService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
