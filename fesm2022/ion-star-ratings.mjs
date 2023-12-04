import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i2 from '@ionic/angular';
import { IonicModule } from '@ionic/angular';

class IonStarRatingsComponent {
    constructor() {
        this.ratingChanged = new EventEmitter();
        this.readonly = false;
        this.activeColor = '#488aff';
        this.defaultColor = '#aaaaaa';
        this.activeIcon = 'star';
        this.defaultIcon = 'star-outline';
        this.halfIcon = 'star-half';
        this.halfStar = false;
        this.maxRating = 5;
        this.fontSize = '28px';
        this.iconsArray = [];
    }
    ngOnInit() {
        this.rating = this.rating || 0; //default after input`s initialization
        for (var i = 0; i < this.maxRating; i++) {
            this.iconsArray.push(i);
        }
    }
    getIconColor(index) {
        return index < Math.round(this.rating) ? this.activeColor : this.defaultColor;
    }
    getIconName(index) {
        return (this.halfStar && (this.rating - index > 0) && (this.rating - index <= 0.5)) ?
            this.halfIcon : (index < Math.round(this.rating)) ? this.activeIcon : this.defaultIcon;
    }
    writeValue(obj) {
        this.rating = obj;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.readonly = isDisabled;
    }
    set rating(val) {
        this._rating = val;
        if (this.onChange) {
            this.onChange(val);
        }
    }
    get rating() {
        return this._rating;
    }
    changeRating(event) {
        if (this.readonly && this.readonly)
            return;
        let id = event.target.id ? parseInt(event.target.id) : parseInt(event.target.parentElement.id);
        if (this.halfStar && this.halfStar) {
            this.rating = ((this.rating - id > 0) && (this.rating - id <= 0.5)) ? id + 1 : id + 0.5;
        }
        else {
            this.rating = id + 1;
        }
        this.ratingChanged.emit(this.rating);
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IonStarRatingsComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "16.0.2", type: IonStarRatingsComponent, isStandalone: true, selector: "ion-star-ratings", inputs: { rating: "rating", readonly: "readonly", activeColor: "activeColor", defaultColor: "defaultColor", activeIcon: "activeIcon", defaultIcon: "defaultIcon", halfIcon: "halfIcon", halfStar: "halfStar", maxRating: "maxRating", fontSize: "fontSize" }, outputs: { ratingChanged: "ratingChanged" }, providers: [
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: IonStarRatingsComponent,
                multi: true
            }
        ], ngImport: i0, template: `
    <div class="ion-star-rating">
      <button [ngStyle]="{
        'width' : fontSize, 
        'height' : fontSize
      }" 
        *ngFor="let index of iconsArray" [id]="index" type="button" ion-button icon-only 
        (click)="changeRating($event)">
        <ion-icon [ngStyle]="{
          'color': getIconColor(index), 
          'font-size' : fontSize }" 
          [name]="getIconName(index)">
        </ion-icon>
      </button>
    </div>
  `, isInline: true, styles: [".ion-star-rating button{background:none;box-shadow:none;-webkit-box-shadow:none;padding:0}\n"], dependencies: [{ kind: "ngmodule", type: CommonModule }, { kind: "directive", type: i1.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { kind: "directive", type: i1.NgStyle, selector: "[ngStyle]", inputs: ["ngStyle"] }, { kind: "ngmodule", type: IonicModule }, { kind: "component", type: i2.IonIcon, selector: "ion-icon", inputs: ["color", "flipRtl", "icon", "ios", "lazy", "md", "mode", "name", "sanitize", "size", "src"] }] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "16.0.2", ngImport: i0, type: IonStarRatingsComponent, decorators: [{
            type: Component,
            args: [{ selector: 'ion-star-ratings', standalone: true, imports: [CommonModule, IonicModule], template: `
    <div class="ion-star-rating">
      <button [ngStyle]="{
        'width' : fontSize, 
        'height' : fontSize
      }" 
        *ngFor="let index of iconsArray" [id]="index" type="button" ion-button icon-only 
        (click)="changeRating($event)">
        <ion-icon [ngStyle]="{
          'color': getIconColor(index), 
          'font-size' : fontSize }" 
          [name]="getIconName(index)">
        </ion-icon>
      </button>
    </div>
  `, providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: IonStarRatingsComponent,
                            multi: true
                        }
                    ], styles: [".ion-star-rating button{background:none;box-shadow:none;-webkit-box-shadow:none;padding:0}\n"] }]
        }], propDecorators: { rating: [{
                type: Input
            }], ratingChanged: [{
                type: Output
            }], readonly: [{
                type: Input
            }], activeColor: [{
                type: Input
            }], defaultColor: [{
                type: Input
            }], activeIcon: [{
                type: Input
            }], defaultIcon: [{
                type: Input
            }], halfIcon: [{
                type: Input
            }], halfStar: [{
                type: Input
            }], maxRating: [{
                type: Input
            }], fontSize: [{
                type: Input
            }] } });

/*
 * Public API Surface of ion-star-ratings
 */

/**
 * Generated bundle index. Do not edit.
 */

export { IonStarRatingsComponent };
//# sourceMappingURL=ion-star-ratings.mjs.map
