import { APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { Ng2TableModule } from 'ng2-table-responsive/ng2-table';
import { PaginationModule } from "ngx-bootstrap/pagination";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { map } from 'rxjs/operators';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import { MatPaginatorModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSortModule } from '@angular/material';


import { ConfigFileService } from './services/config-file.service';
import { AdminService } from './services/admin.service';
import { ProxyService } from './services/proxy.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AdminviewComponent } from './components/adminview/adminview.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';


const appRoutes: Routes = [
       {path:'welcome/:action', component:WelcomeComponent},
       {path:'welcome', component:WelcomeComponent},
       {path:'adminview/result', component:AdminviewComponent},
       {path:'adminview', component:AdminviewComponent},
       {path:'logout', component:AdminviewComponent},
       {path:'editUser/me/:action/:id', component:EditUserComponent},
       {path:'editUser/:action/:id', component:EditUserComponent},
       {path: '', redirectTo: '/welcome', pathMatch: 'full'},
       {path: '**', component: PageNotFoundComponent }
      ];
        

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    NavigationBarComponent,
    WelcomeComponent,
    AdminviewComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule, 
    CollapseModule,
    FormsModule,
    NoopAnimationsModule,
    Ng2SmartTableModule,
    Ng2TableModule,
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatSortModule,
    PaginationModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
              ProxyService,
              AdminService, 
              ConfigFileService,
              { provide: APP_INITIALIZER, useFactory: (config: ConfigFileService) => () => config.load(), deps: [ConfigFileService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
