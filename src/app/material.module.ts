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
  MatTabsModule,
  MatToolbarModule
 } from '@angular/material';
 import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
// import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatSelectModule } from '@angular/material/select';
// import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  imports: [
    MatBottomSheetModule,
    MatButtonModule,
    // MatCard,
    MatCardModule,
    // MatCarouselModule,
    // MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    // MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    // MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
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
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [
    MatDatepickerModule,
  ],
  exports: [
    MatBottomSheetModule,
    MatButtonModule,
    // MatCard,
    MatCardModule,
    // MatCarouselModule,
    // MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    // MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    // MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
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
    MatTabsModule,
    MatToolbarModule,
  ]
})
export class MyMaterialModule { }
