import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@ionic/angular";
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
export { IonStarRatingsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLXN0YXItcmF0aW5ncy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9pb24tc3Rhci1yYXRpbmdzL3NyYy9saWIvaW9uLXN0YXItcmF0aW5ncy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDL0UsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3pFLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7OztBQUU3QyxNQW9DYSx1QkFBdUI7SUFwQ3BDO1FBd0ZFLGtCQUFhLEdBQXlCLElBQUksWUFBWSxFQUFVLENBQUM7UUFHakUsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixnQkFBVyxHQUFXLFNBQVMsQ0FBQztRQUVoQyxpQkFBWSxHQUFXLFNBQVMsQ0FBQztRQUVqQyxlQUFVLEdBQVcsTUFBTSxDQUFDO1FBRTVCLGdCQUFXLEdBQVcsY0FBYyxDQUFDO1FBRXJDLGFBQVEsR0FBVyxXQUFXLENBQUM7UUFFL0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUUxQixjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBRXRCLGFBQVEsR0FBVyxNQUFNLENBQUM7UUFDMUIsZUFBVSxHQUFhLEVBQUUsQ0FBQztLQWMzQjtJQWhGQyxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQyxDQUFDLHNDQUFzQztRQUN0RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN6QjtJQUNILENBQUM7SUFFRCxZQUFZLENBQUMsS0FBYTtRQUN4QixPQUFPLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQTtJQUMvRSxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWE7UUFDdkIsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuRixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFBO0lBQzFGLENBQUM7SUFFRCxVQUFVLENBQUMsR0FBVztRQUNwQixJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztJQUNwQixDQUFDO0lBRUQsZ0JBQWdCLENBQUMsRUFBTztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBTztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0JBQWdCLENBQUUsVUFBbUI7UUFDbkMsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUM7SUFDN0IsQ0FBQztJQUVELElBQ0ksTUFBTSxDQUFDLEdBQVc7UUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFFbkIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEI7SUFDSCxDQUFDO0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7SUF5QkQsWUFBWSxDQUFDLEtBQVU7UUFDckIsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRO1lBQUUsT0FBTztRQUUzQyxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvRixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNsQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7U0FDekY7YUFBTTtZQUNMLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztTQUN0QjtRQUVELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2QyxDQUFDOzhHQXJGVSx1QkFBdUI7a0dBQXZCLHVCQUF1QiwwV0FSdkI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsdUJBQXVCO2dCQUNwQyxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0YsMEJBOUJTOzs7Ozs7Ozs7Ozs7Ozs7R0FlVCxxS0FoQlMsWUFBWSxnUEFBRSxXQUFXOztTQWlDeEIsdUJBQXVCOzJGQUF2Qix1QkFBdUI7a0JBcENuQyxTQUFTOytCQUNFLGtCQUFrQixjQUNoQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLFlBQzFCOzs7Ozs7Ozs7Ozs7Ozs7R0FlVCxhQVNVO3dCQUNUOzRCQUNFLE9BQU8sRUFBRSxpQkFBaUI7NEJBQzFCLFdBQVcseUJBQXlCOzRCQUNwQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjtxQkFDRjs4QkF5Q0csTUFBTTtzQkFEVCxLQUFLO2dCQWNOLGFBQWE7c0JBRFosTUFBTTtnQkFJUCxRQUFRO3NCQURQLEtBQUs7Z0JBR04sV0FBVztzQkFEVixLQUFLO2dCQUdOLFlBQVk7c0JBRFgsS0FBSztnQkFHTixVQUFVO3NCQURULEtBQUs7Z0JBR04sV0FBVztzQkFEVixLQUFLO2dCQUdOLFFBQVE7c0JBRFAsS0FBSztnQkFHTixRQUFRO3NCQURQLEtBQUs7Z0JBR04sU0FBUztzQkFEUixLQUFLO2dCQUdOLFFBQVE7c0JBRFAsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLXN0YXItcmF0aW5ncycsXG4gIHN0YW5kYWxvbmU6IHRydWUsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIElvbmljTW9kdWxlXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2IGNsYXNzPVwiaW9uLXN0YXItcmF0aW5nXCI+XG4gICAgICA8YnV0dG9uIFtuZ1N0eWxlXT1cIntcbiAgICAgICAgJ3dpZHRoJyA6IGZvbnRTaXplLCBcbiAgICAgICAgJ2hlaWdodCcgOiBmb250U2l6ZVxuICAgICAgfVwiIFxuICAgICAgICAqbmdGb3I9XCJsZXQgaW5kZXggb2YgaWNvbnNBcnJheVwiIFtpZF09XCJpbmRleFwiIHR5cGU9XCJidXR0b25cIiBpb24tYnV0dG9uIGljb24tb25seSBcbiAgICAgICAgKGNsaWNrKT1cImNoYW5nZVJhdGluZygkZXZlbnQpXCI+XG4gICAgICAgIDxpb24taWNvbiBbbmdTdHlsZV09XCJ7XG4gICAgICAgICAgJ2NvbG9yJzogZ2V0SWNvbkNvbG9yKGluZGV4KSwgXG4gICAgICAgICAgJ2ZvbnQtc2l6ZScgOiBmb250U2l6ZSB9XCIgXG4gICAgICAgICAgW25hbWVdPVwiZ2V0SWNvbk5hbWUoaW5kZXgpXCI+XG4gICAgICAgIDwvaW9uLWljb24+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgYCxcbiAgc3R5bGVzOiBbYFxuICAgIC5pb24tc3Rhci1yYXRpbmcgYnV0dG9uIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xuICAgICAgICBwYWRkaW5nIDogMHB4O1xuICAgIH1cbiAgYF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxuICAgICAgdXNlRXhpc3Rpbmc6IElvblN0YXJSYXRpbmdzQ29tcG9uZW50LFxuICAgICAgbXVsdGk6IHRydWVcbiAgICB9XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgSW9uU3RhclJhdGluZ3NDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcbiAgcHJpdmF0ZSBfcmF0aW5nITogbnVtYmVyO1xuICBwcml2YXRlIG9uQ2hhbmdlOiBhbnk7XG4gIHByaXZhdGUgb25Ub3VjaGVkOiBhbnk7XG4gIGRpc2FibGVkITogYm9vbGVhbjtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGluZyA9IHRoaXMucmF0aW5nIHx8IDA7IC8vZGVmYXVsdCBhZnRlciBpbnB1dGBzIGluaXRpYWxpemF0aW9uXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm1heFJhdGluZzsgaSsrKSB7XG4gICAgICB0aGlzLmljb25zQXJyYXkucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICBnZXRJY29uQ29sb3IoaW5kZXg6IG51bWJlcikge1xuICAgIHJldHVybiBpbmRleCA8IE1hdGgucm91bmQodGhpcy5yYXRpbmcpID8gdGhpcy5hY3RpdmVDb2xvciA6IHRoaXMuZGVmYXVsdENvbG9yXG4gIH1cblxuICBnZXRJY29uTmFtZShpbmRleDogbnVtYmVyKSB7XG4gICAgcmV0dXJuICh0aGlzLmhhbGZTdGFyICYmICh0aGlzLnJhdGluZyAtIGluZGV4ID4gMCkgJiYgKHRoaXMucmF0aW5nIC0gaW5kZXggPD0gMC41KSkgP1xuICAgICAgdGhpcy5oYWxmSWNvbiA6IChpbmRleCA8IE1hdGgucm91bmQodGhpcy5yYXRpbmcpKSA/IHRoaXMuYWN0aXZlSWNvbiA6IHRoaXMuZGVmYXVsdEljb25cbiAgfVxuXG4gIHdyaXRlVmFsdWUob2JqOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnJhdGluZyA9IG9iajtcbiAgfVxuXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcbiAgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZT8oaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucmVhZG9ubHkgPSBpc0Rpc2FibGVkO1xuICB9XG5cbiAgQElucHV0KClcbiAgc2V0IHJhdGluZyh2YWw6IG51bWJlcikge1xuICAgIHRoaXMuX3JhdGluZyA9IHZhbDtcblxuICAgIGlmICh0aGlzLm9uQ2hhbmdlKSB7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHZhbCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHJhdGluZygpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9yYXRpbmc7XG4gIH1cblxuICBAT3V0cHV0KClcbiAgcmF0aW5nQ2hhbmdlZDogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBASW5wdXQoKVxuICByZWFkb25seTogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKVxuICBhY3RpdmVDb2xvcjogc3RyaW5nID0gJyM0ODhhZmYnO1xuICBASW5wdXQoKVxuICBkZWZhdWx0Q29sb3I6IHN0cmluZyA9ICcjYWFhYWFhJztcbiAgQElucHV0KClcbiAgYWN0aXZlSWNvbjogc3RyaW5nID0gJ3N0YXInO1xuICBASW5wdXQoKVxuICBkZWZhdWx0SWNvbjogc3RyaW5nID0gJ3N0YXItb3V0bGluZSc7XG4gIEBJbnB1dCgpXG4gIGhhbGZJY29uOiBzdHJpbmcgPSAnc3Rhci1oYWxmJztcbiAgQElucHV0KClcbiAgaGFsZlN0YXI6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KClcbiAgbWF4UmF0aW5nOiBudW1iZXIgPSA1O1xuICBASW5wdXQoKVxuICBmb250U2l6ZTogc3RyaW5nID0gJzI4cHgnO1xuICBpY29uc0FycmF5OiBudW1iZXJbXSA9IFtdO1xuXG4gIGNoYW5nZVJhdGluZyhldmVudDogYW55KSB7XG4gICAgaWYgKHRoaXMucmVhZG9ubHkgJiYgdGhpcy5yZWFkb25seSkgcmV0dXJuO1xuXG4gICAgbGV0IGlkID0gZXZlbnQudGFyZ2V0LmlkID8gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkKSA6IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKTtcbiAgICBpZiAodGhpcy5oYWxmU3RhciAmJiB0aGlzLmhhbGZTdGFyKSB7XG4gICAgICB0aGlzLnJhdGluZyA9ICgodGhpcy5yYXRpbmcgLSBpZCA+IDApICYmICh0aGlzLnJhdGluZyAtIGlkIDw9IDAuNSkpID8gaWQgKyAxIDogaWQgKyAwLjU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmF0aW5nID0gaWQgKyAxO1xuICAgIH1cblxuICAgIHRoaXMucmF0aW5nQ2hhbmdlZC5lbWl0KHRoaXMucmF0aW5nKTtcbiAgfVxufVxuIl19