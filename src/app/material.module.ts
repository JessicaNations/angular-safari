import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  // MatCard,
  MatCardModule,
  // MatCheckboxModule,
  // MatDialogModule,
  // MatFormField,
  // MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatDatepickerModule,
  // MatPaginatorModule,
  // MatProgressSpinnerModule,
  // MatSnackBarModule,
  // MatSortModule,
  // MatTableModule,
  // MatTabsModule,
  MatToolbarModule
 } from '@angular/material';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatChipsModule } from '@angular/material/chips';
// import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSliderModule } from '@angular/material/slider';
@NgModule({
  imports: [
    MatButtonModule,
    // MatCard,
    MatCardModule,
    // MatCarouselModule,
    // MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSnackBarModule,
    // MatSliderModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    MatToolbarModule
  ],
  providers: [
    MatDatepickerModule,
  ],
  exports: [
    MatButtonModule,
    // MatCard,
    MatCardModule,
    // MatCarouselModule,
    // MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    // MatDialogModule,
    // MatDividerModule,
    // MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatNativeDateModule,
    // MatPaginatorModule,
    // MatProgressSpinnerModule,
    // MatRadioModule,
    // MatSelectModule,
    // MatSnackBarModule,
    // MatSliderModule,
    // MatSortModule,
    // MatTableModule,
    // MatTabsModule,
    MatToolbarModule
  ]
})
export class MyMaterialModule { }
