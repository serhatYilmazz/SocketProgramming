import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppComponent } from './app.component';
import { DocumenetListComponent } from './documenet-list/documenet-list.component';
import { DocumentComponent } from './document/document.component';
import {FormsModule} from '@angular/forms';

const ioConfig: SocketIoConfig = {url: 'http://myDomain:4444', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    DocumenetListComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocketIoModule.forRoot(ioConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
