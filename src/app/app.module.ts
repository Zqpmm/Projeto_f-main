import { ListarPecasComponent } from './pecas/listar-pecas/listar-pecas.component';
import { EditarPecasComponent } from './pecas/editar-pecas/editar-pecas.component';
import { SistemaPecasComponent } from './pecas/sistema-pecas/sistema-pecas.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CadastroPecasComponent } from './pecas/cadastro-pecas/cadastro-pecas.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListarPecasComponent,
    EditarPecasComponent,
    SistemaPecasComponent,
    CadastroPecasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    MatToolbarModule,
    MatSidenavModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatTableModule,
    FormsModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
