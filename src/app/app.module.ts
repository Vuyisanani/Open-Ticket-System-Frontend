import {DialogService} from './dialog.service';
import {SharedService} from './services/shared.service';
import {UserService} from './services/user/user.service';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {MenuComponent} from './components/menu/menu.component';
import {LoginComponent} from './components/security/login/login.component';
import {routes} from './app.routes';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {HomeComponent} from './components/home/home.component';
import {AuthGuard} from './components/security/auth.guard';
import {UserNewComponent} from './components/user-new/user-new.component';
import {UserListComponent} from './components/user-list/user-list.component';
import {AuthInterceptor} from './components/security/auth.interceptor';
import {NgxPaginationModule} from 'ngx-pagination';
import {TicketNewComponent} from './components/ticket-new/ticket-new.component';
import {TicketListComponent} from './components/ticket-list/ticket-list.component';
import {TicketService} from './services/ticket/ticket.service';
import {TicketDetailComponent} from './components/ticket-detail/ticket-detail.component';
import {SummaryComponent} from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    LoginComponent,
    HomeComponent,
    UserNewComponent,
    UserListComponent,
    TicketNewComponent,
    TicketListComponent,
    TicketDetailComponent,
    SummaryComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    NgxPaginationModule,
  ],
  providers: [
    UserService,
    AuthGuard,
    SharedService,
    DialogService,
    TicketService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
