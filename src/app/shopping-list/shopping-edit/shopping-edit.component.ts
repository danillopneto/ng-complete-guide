import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false}) nameInput: ElementRef;
  @ViewChild('amountInput', { static: false}) amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
  }

  onAddIngredient() {
    const ingredientName = this.nameInput.nativeElement.value;
    const ingredientAmount  = this.amountInput.nativeElement.value
    if (ingredientName === '' ||
        ingredientAmount === '') {
          return;
    }

    const ingredient = new Ingredient(ingredientName, ingredientAmount);
    this.shoppingListService.addIngredient(ingredient);
    this.nameInput.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
