import { NgModule } from '@angular/core';
import {MatCardModule,MatButtonModule, MatListModule,MatSortModule,MatTableModule,MatTabsModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule,MatToolbarModule,MatPaginatorModule } from '@angular/material';
const MaterialComponents=[MatCardModule,MatButtonModule, MatListModule,MatSortModule,MatTableModule,MatTabsModule,MatInputModule,MatOptionModule,MatSelectModule,MatIconModule,MatToolbarModule,MatPaginatorModule
];


@NgModule({
 
  imports:[MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
